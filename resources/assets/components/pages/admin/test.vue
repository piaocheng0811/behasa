<template>
    <div> <br><br>
        <div class="col-lg-12 mb-3">
            <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
                    <div class="card-header card-header-icon card-header-rose">
                        <div class="card-icon">
                            <i class="material-icons">assignment</i>
                        </div>
                    </div><br><br>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th class="text-center">No</th>
                                <th class="topic-title">Category Name</th>
                                <th class="topic-title">Specific</th>
                                <th class="topic-title">Mock</th>
                                <th class="topic-title">Practise</th>
                                <th class="topic-title">Common</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for = "(item, index) in questionsCount">
                                <td class="text-center">{{index+1}}</td>
                                <td>
                                    {{item.name}}
                                </td>
                                <td>
                                    {{item.realtimeSpecific}}
                                </td>
                                <td>
                                    <a :href="'#/admin/questionmanagement/'+item.id+'/realtime'"
                                       class='btn btn-primary btn-sm text-white'>
                                    <i class="fa fa-edit"></i>&nbsp;&nbsp;&nbsp;manage&nbsp;&nbsp;&nbsp;
                                </a></td>
                                <td><a :href="'#/admin/questionmanagement/'+item.id+'/specific'"
                                       class='btn btn-primary btn-sm text-white'>
                                    <i class="fa fa-edit"></i>&nbsp;&nbsp;&nbsp;manage&nbsp;&nbsp;&nbsp;
                                </a></td>
                                <td><a :href="'#/admin/questionmanagement/'+item.id+'/common'"
                                       class='btn btn-primary btn-sm text-white'>
                                    <i class="fa fa-edit"></i>&nbsp;&nbsp;&nbsp;manage&nbsp;&nbsp;&nbsp;
                                </a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';
    import Admin_ApiService from '../../../common/admin_api.service';
    Admin_ApiService.init();
    Vue.use(VueAwesomeSwiper);
    var unsub;
    import {
        ClientTable,
        Event
    } from 'vue-tables-2';
    import datatable from "../../../components/plugins/DataTable/DataTable";
    import miniToastr from "mini-toastr";
    Vue.use(ClientTable, {}, false);
    export default {
        name: "test",
        components: {
            datatable
        },
        data() {
            return {
                questionsCount:[],
                model: {
                    topic_id:''
                }
            }
        },
        mounted: function () {
            Admin_ApiService.post('GetQuestionsCount').then(
                result=>{
                    let data=result.data;
                    if(data.success){
                        console.log('---------',data.data);
                        this.questionsCount = data.data;
                    }
                },
                error=>{
                    console.log('error')
                }
            ).catch(function (error) {
                console.log(error)
            });

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
        watch:{
        },
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
        beforeRouteBefore  () {
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style>
    .custom-select{
        background: none;
    }
</style>
<style scoped>
    .datatable-material{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        width: 100%;
        margin: 30px 0;
        overflow: unset;
        -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
        border-radius: 6px;
        background: #fff;
        font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
        font-size: 13px;
        font-weight: 500;
        color: #333333;
        border: none;
    }


    .topic-title{
        width: 25%;
    }
    .question-num{
        width: 45%;
    }
    .card-header-icon{
        margin-top: -20px;
    }

</style>
