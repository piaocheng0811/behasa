<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="card">
                <div class="card-header card-header-icon card-header-rose">
                    <div class="card-icon">
                        <i class="material-icons">assignment</i>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead class=" text-primary">
                                <tr>
                                    <th>
                                        Translation Language
                                    </th>
                                    <th>
                                        Topic Area Name
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Arabic</td>
                                <td><input ref="name_ar" type="text"   class="form-control" :value="TopicAreaData.name_ar" required></td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td><input ref="name" type="text"   class="form-control" :value="TopicAreaData.name" required></td>
                            </tr>
                            <tr>
                                <td>Tamil</td>
                                <td><input ref="name_ta" type="text"   class="form-control" :value="TopicAreaData.name_ta" required></td>
                            </tr>
                            <tr>
                                <td>Urdu</td>
                                <td><input ref="name_ur" type="text"   class="form-control" :value="TopicAreaData.name_ur" required></td>
                            </tr>
                            <tr>
                                <td>Hindi</td>
                                <td><input ref="name_hi" type="text"   class="form-control" :value="TopicAreaData.name_hi" required></td>
                            </tr>
                            <tr>
                                <td>Bengali</td>
                                <td><input ref="name_be" type="text"   class="form-control" :value="TopicAreaData.name_be" required></td>
                            </tr>
                            <tr>
                                <td>Malayalam</td>
                                <td><input ref="name_ma" type="text"   class="form-control" :value="TopicAreaData.name_ma" required></td>
                            </tr>
                            <tr>
                                <td>Farsi</td>
                                <td><input ref="name_fa" type="text"   class="form-control" :value="TopicAreaData.name_fa" required></td>
                            </tr>
                            <tr>
                                <td>Chinese</td>
                                <td><input ref="name_ch" type="text"   class="form-control" :value="TopicAreaData.name_ch" required></td>
                            </tr>
                            <tr>
                                <td>Russian</td>
                                <td><input ref="name_ru" type="text"   class="form-control" :value="TopicAreaData.name_ru" required></td>
                            </tr>
                            </tbody>
                        </table>
                        <hr>
                        <div class="edit-category">
                            <button class="btn-success btn" @click="EditTopicArea()">Save</button>
                            <button class="btn-danger btn" @click="Cancel()">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "../../../validations/validations";
    import miniToastr from "mini-toastr";
    import Admin_ApiService from "../../../common/admin_api.service";
    import Buttons from "../buttons";
    import VueCropper from "vue-cropperjs";
    Admin_ApiService.init();
    var unsub;
    miniToastr.init();
    Vue.use(VueForm, options);

    export default {
        name: "edit-topic-area",
        components: {

        },
        props: [

        ],

        data() {
            return {
                TopicAreaData:{},
                formstate: {},
                model:{
                    name_ar:'',
                    name:'',
                    name_ta:'',
                    name_ur:'',
                    name_hi:'',
                    name_be:'',
                    name_ma:'',
                    name_fa:'',
                    name_ch:'',
                    name_ru:'',
                    topicId:this.$route.params.topic_id
                }
            }
        },
        methods: {
            EditTopicArea() {
                this.model.name_ar = this.$refs['name_ar'].value;
                this.model.name = this.$refs['name'].value;
                this.model.name_ta = this.$refs['name_ta'].value;
                this.model.name_ur = this.$refs['name_ur'].value;
                this.model.name_hi = this.$refs['name_hi'].value;
                this.model.name_be = this.$refs['name_be'].value;
                this.model.name_ma = this.$refs['name_ma'].value;
                this.model.name_fa = this.$refs['name_fa'].value;
                this.model.name_ch = this.$refs['name_ch'].value;
                this.model.name_ru = this.$refs['name_ru'].value;
                Admin_ApiService.post('EditTopicArea', this.model).then(
                    result=>{
                        let data=result.data;
                        if(data.success === true){
                            miniToastr.success(data.message)
                        }
                        else {
                            miniToastr.error(data.message)
                            console.log(data);
                        }
                    },
                    error=>{
                    }
                )
            },
            Cancel(){
                window.location.href = '#/admin/category'
            }
        },
        mounted() {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    this.instances.forEach(function (item, index) {
                        setTimeout(function () {
                            item.resize();
                        });
                    });
                    setTimeout(() => {
                        this.$refs.swiper.swiper.update();
                    });
                }
            });

        },
        created() {
            Admin_ApiService.get(`GetTopicAreaData/${this.$route.params.topic_id}`).then(
                result=>{
                    let data=result.data;
                    if(data.success){
                        console.log('TopicAreaData',data.topicAreaData[0])
                        this.TopicAreaData = data.topicAreaData[0];
                        // console.log('categoryData',data)
                        // this.CategoryData = data.categoryData;
                    }
                    else {
                        console.log(data)
                    }
                },
                error=>{
                    console.log('error')
                }
            )

            miniToastr.setIcon('error', 'i', {
                'class': 'fa fa-times'
            });
            miniToastr.setIcon('success', 'i', {
                'class': 'fa fa-arrow-circle-o-down'
            });
        },
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
    }
</script>

<style scoped>
    .edit-category{
        text-align: center;
    }
    .topic-edit-title{
        text-align: center;
    }
</style>