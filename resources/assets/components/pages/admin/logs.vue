<template>
    <div> <br><br>
        <div class="col-lg-12 mb-3">
            <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
                <div class="card-header card-header-icon card-header-rose">
                    <div class="card-icon">
                        <i class="material-icons">assignment</i>
                    </div>
                </div><br><br>
                <datatable class="datatable-context" title="" :rows="data_logs" :columns="columndata" ></datatable>
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
        name: "category",
        components: {
            datatable
        },
        data() {
            return {
                action:{},
                logData:[],
                student:[],
                admin:[],
                data_logs:[],
                columndata: [
                    {
                        label: 'No', // Column name
                        field: 'key', // Field name from row
                        numeric: true, // Affects sorting
                        width: "100px", //width of the column
                        html: false, // Escapes output if false.
                    },

                    {
                        label: 'Student ID',
                        field: 'student.studentId',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Student Name',
                        field: 'student.name',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Student Email',
                        field: 'student.email',
                        numeric: true,
                        html: true
                    },
                    {
                        label: 'Admin ID',
                        field: 'admin.name',
                        numeric: false,
                        width: "170px",
                        html: true,
                    },
                    {
                        label: 'Admin Email',
                        field: 'admin.email',
                        numeric: false,
                        width: "170px",
                        html: true,
                    },
                    {
                        label: 'Login Time',
                        field: 'login_time',
                        numeric: false,
                        width: "170px",
                        html: true,
                    },
                ],
                model: {
                    category_id: 0,
                    action:0,

                }
            }
        },
        mounted: function () {

            Admin_ApiService.post('GetLogs').then(
                result=>{
                    let data=result.data;
                    if(data.success){

                        this.logData = data.logs;
                        var responseData = data.student;
                        let student_map={};
                        responseData.map(item=>{
                            student_map[item.studentId]=item;
                        })

                        var responseDataAdmin = data.admin;
                        let admin_map={};
                        responseDataAdmin.map(item=>{
                            admin_map[item.id]=item;
                        })

                        var data_logs = [];
                        this.logData.forEach((logData, index) => {
                            var record = [];
                            record['login_time'] = logData.login_time;
                            record['student']=typeof student_map[logData.sid] !="undefined" ? student_map[logData.sid] : {}
                            record['admin']=typeof admin_map[logData.adminid] !="undefined" ? admin_map[logData.adminid] : {}
                            data_logs.push(record);
                        });

                        data_logs.forEach((item3, index3) =>{
                            this.$set(item3,'key',index3+1);
                            this.$set(item3,'student',item3.student);
                            this.$set(item3,'admin',item3.admin);
                        });

                        this.data_logs = data_logs;

                        console.log('-------data_logs---------', data_logs);
                    }
                    else {

                    }
                },
                error=>{
                    console.log('error')
                }
            ).catch(function (error) {

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
                Admin_ApiService.post('GetLogs').then(
                    result=>{
                        let data=result.data;
                        if(data.success){
                            console.log('---------logs---------',data);


                        }
                    },
                    error=>{
                        console.log('error')
                    }
                ).catch(function (error) {
                });
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
    .datatable-context{
        border:none;
        padding: 0px !important;
        margin-top: 20px;
    }
    .datatable-context:hover{
        box-shadow: none;
    }
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
    .display-icon{
        color: whitesmoke;
        font-size: 18px;
    }
    .card{
        box-shadow:none;
    }
    .card-icon{
        margin-top: -40px !important;
    }
</style>
