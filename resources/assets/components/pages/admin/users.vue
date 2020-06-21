<template>
    <div> <br><br>
        <div class="col-lg-12 mb-3">
            <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
                <router-link to="/admin/users/create" class="nav-link">
                    <div class="card-icon">
                        <i class="fa fa-user-plus display-icon"></i>
                        <p>Add User</p>
                    </div>
                </router-link>
                 <datatable class="datatable-context" title="" :rows="usersData" :columns="columndata"></datatable>
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
    Vue.use(ClientTable, {}, false);
    export default {
        name: "users",
        components: {
            datatable
        },
        data() {
            return {
                usersData:[],
                columndata: [
                    {
                        label: 'S.No', // Column name
                        field: 'key', // Field name from row
                        numeric: true, // Affects sorting
                        width: "100px", //width of the column
                        html: false, // Escapes output if false.
                    },
                    {
                        label: 'Photo',
                        field: 'photo',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'User ID',
                        field: 'studentId',
                        numeric: true,
                        html: "<img src='' style='width: 30px; height: 30px'>"
                    },
                    {
                        label: 'Name',
                        field: 'name',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Email',
                        field: 'email',
                        numeric: false,
                        html: true,
                    },

                    {
                        label: 'User Type',
                        field: 'isAdmin',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'status',
                        field: 'status',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'action',
                        field: 'action',
                        numeric: false,
                        width: "100px",
                        html: true,
                    },
                ],

            }
        },
        mounted: function () {
            Admin_ApiService.post('GetUsers').then(
                result=>{
                    let data=result.data;
                    if(data.success){
                        console.log(data.usersData);
                        this.usersData = data.usersData;
                        this.usersData.forEach((item, index) => {
                            this.$set(item,'key',index+1);
                            let temp='';
                            if(item.status==0)
                                temp=`<p style = "color: red;">inactive</p>`;
                            else
                                temp=`<p  style = "color: black;">active</p>`;
                            this.$set(item,'status',temp);

                            this.$set(item,'studentId',item.studentId);
                            let isAdmin='';
                            if(item.isAdmin == 0)
                                isAdmin=`<button class="btn btn-primary action-button student-btn btn-sm" style="  width: 122px;">Student</button>`;
                            else if(item.isAdmin == 1)
                                isAdmin=`<button class="btn btn-success action-button admin-btn btn-sm" style="      width: 122px;">Admin</button>`;
                            else
                                isAdmin=`<button class="btn btn-warning action-button supervisor-btn btn-sm" style="      width: 122px;">Supervisor</button>`;

                            this.$set(item,'isAdmin',isAdmin);
                            this.$set(item,'name',item.name);
                            this.$set(item,'email',item.email);
                            var photo=`<h5 style="margin-bottom: 0">No Image</h5>`;
                            if(item.photo == '')
                                photo=`<img class="logo-image" src="http://localhost/vuejs-laravel/public/images/profile/avatar.png" style="width: 32px; height: 32px; border-radius:3px; " alt="No Image">`;
                            else
                            photo=`<img class="logo-image" src="${item.photo}" style="width: 32px; height: 32px; border-radius:3px; " alt="No Image">`;
                            this.$set(item, "photo",photo);
                            this.$set(item, "action",
                                `
                            <a href="#/admin/users/view/${item.id}">
                                <button type="button tooltipped" data-toggle="tooltip" title="View" class="btn btn-success btn-link" data-original-title="View" style="padding: 10px">
                                     <i class="material-icons">visibility</i>
                                </button>
                            </a>

                            <a  href="#/admin/users/edit/${item.id}">
                                <button type="button" rel="tooltip" class="btn btn-info  btn-link" data-original-title="" title="Edit" style="padding: 10px">
                                  <i class="material-icons">edit</i> <div class="ripple-container"></div>
                                </button>
                            </a>
                        `
                            );
                        });
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
        /*background: linear-gradient(60deg,#9c27b0,#9c27b0);*/
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
    .student-btn{

        color: white;
        background-color: #1769ff;
        font-size: 11px;
    }
    .supervisor-btn{

        color: white;
        background-color: #9c27b0;
        font-size: 11px;
    }
    .admin-btn{

        color: white;
        background-color: #4caf50;
        font-size: 11px;
    }
    .card{
        box-shadow:none;
    }
</style>
