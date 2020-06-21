<template>
    <div> <br><br>
        <div class="col-lg-12 mb-3">
            <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
                <router-link to="/admin/topic-area/create" class="nav-link">
                    <div class="card-icon">
                        <i class="material-icons topic-icon">topic</i>
                        <p>Add New Item</p>
                    </div>
                </router-link>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th class="text-center">No</th>
                                <th class="topic-title">Topic Area</th>
                                <th class="question-num">No of Questions</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for = "(item, index) in topicAreaData">
                                <td class="text-center">{{index+1}}</td>
                                <td>
                                    {{item.name}}
                                </td>
                                <td>
                                    {{item.questionCount}}
                                </td>
                                <td>
                                    <a :href="'#/admin/topic-area/edit/' + item.id"><button class="btn btn-info">Edit</button></a>
                                    <button class="btn btn-danger" @click="Delete(item.id)">Delete</button>
                                </td>
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
        name: "top-area",
        components: {
            datatable
        },
        data() {
            return {
                topicAreaData:{},
                model: {
                    topic_id:''
                }
            }
        },
        mounted: function () {
            Admin_ApiService.post('GetTopicArea').then(
                result=>{
                    let data=result.data;
                    if(data.success){
                      console.log('---------',data.topicAreaData);
                      this.topicAreaData = data.topicAreaData;
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
            read(){
                Admin_ApiService.post('GetTopicArea').then(
                    result=>{
                        let data=result.data;
                        if(data.success){
                            console.log('---------',data.topicAreaData);
                            this.topicAreaData = data.topicAreaData;
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
            Delete($id){
                if(confirm("Questions associated with this topic area will also be deleted .Do you want to continue ?")){
                    this.model.topic_id = $id;
                    Admin_ApiService.post('DeleteTopicArea',this.model).then(
                        result=>{
                            let data=result.data;
                            if(data.success){
                                console.log('---------',data);
                                this.read();
                            }
                        },
                        error=>{
                            console.log('error')
                        }
                    ).catch(function (error) {
                        console.log(error)
                    });
                }
                else
                    console.log('cancelled');
            }
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
    .card-icon{
        border-radius: 3px;
        padding: 8px 16px;
        margin-top: -37px;
        display: flex;
        float: left;
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0,.4);
        background: linear-gradient(60deg,#ec407a,#d81b60);
    }
    .card-icon p{
        margin-bottom: 0px;
        font-size: 14px;
        margin-left: 4px;
        color: white;
    }
    .topic-title{
        width: 25%;
    }
    .question-num{
        width: 45%;
    }
    .topic-icon{
        color: white;
        margin-top: -5px;
    }
</style>
