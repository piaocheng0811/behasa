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
                        <vue-form :state="formstate" @submit.prevent="onSubmit()">
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
                                    <td><input v-model = "model.name_ar" name="name_ar" type="text"   class="form-control"   required></td>
                                </tr>
                                <tr>
                                    <td>English</td>
                                    <td>
                                        <validate tag="div">
                                            <input v-model = "model.name" name="name" type="text"  class="form-control" required>
                                            <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">English Topic is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Tamil</td>
                                    <td><input v-model = "model.name_ta" name="name_ta" type="text"   class="form-control"   required></td>
                                </tr>
                                <tr>
                                    <td>Urdu</td>
                                    <td><input v-model = "model.name_ur" name="name_ur" type="text"   class="form-control"  required></td>
                                </tr>
                                <tr>
                                    <td>Hindi</td>
                                    <td><input v-model = "model.name_hi" name="name_hi" type="text"   class="form-control"   required></td>
                                </tr>
                                <tr>
                                    <td>Bengali</td>
                                    <td><input v-model = "model.name_be" name="name_be" type="text"   class="form-control"   required></td>
                                </tr>
                                <tr>
                                    <td>Malayalam</td>
                                    <td><input v-model = "model.name_ma" name="name_ma" type="text"   class="form-control"  required></td>
                                </tr>
                                <tr>
                                    <td>Farsi</td>
                                    <td><input v-model = "model.name_fa" name="name_fa" type="text"   class="form-control"   required></td>
                                </tr>
                                <tr>
                                    <td>Chinese</td>
                                    <td><input v-model = "model.name_ch" name="name_ch" type="text"   class="form-control"  required></td>
                                </tr>
                                <tr>
                                    <td>Russian</td>
                                    <td><input v-model = "model.name_ru" name="name_ru" type="text"   class="form-control"   required></td>
                                </tr>
                                </tbody>
                            </table><hr>
                            <div class="edit-category">
                                <button class="btn-success btn" >Submit</button>
                                <button class="btn-danger btn" @click="Cancel()">Cancel</button>
                            </div>
                        </vue-form>
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
        name: "create-topic-area",
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
                }
            }
        },
        methods: {
            onSubmit() {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    Admin_ApiService.post('CreateTopicArea', this.model).then(
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
                }
            },
            Cancel(){
                window.location.href = '#/admin/topic-area'
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