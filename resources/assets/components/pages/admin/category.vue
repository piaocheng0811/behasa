<template>
    <div> <br><br>
        <div class="col-lg-12 mb-3">
            <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
                <router-link to="/admin/category/create" class="nav-link">
                    <div class="card-icon">
                        <i class="fa fa-cog display-icon"></i>
                        <p>Add Category</p>
                    </div>
                </router-link>
                <datatable class="datatable-context" title="" :rows="CategoryData" :columns="columndata"  v-model ="action"></datatable>
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
                changeCategory:[],
                CategoryData:[],
                columndata: [
                    {
                        label: 'No', // Column name
                        field: 'key', // Field name from row
                        numeric: true, // Affects sorting
                        width: "100px", //width of the column
                        html: false, // Escapes output if false.
                    },
                    {
                        label: 'Category',
                        field: 'name',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Status',
                        field: 'status',
                        numeric: true,
                        html: true
                    },
                    {
                        label: 'action',
                        field: 'action',
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

            Admin_ApiService.post('GetCategories').then(
                result=>{
                    let data=result.data;
                    if(data.success){
                        console.log(data.CategoryData);
                        this.CategoryData = data.CategoryData;
                        this.CategoryData.forEach((item, index) => {
                            this.$set(item,'key',index+1);
                            this.$set(item,'name',item.name);
                            let temp='';
                            let status = '';
                            if(item.status==0){
                                temp=`<p style = "color: red;">inactive</p>`;
                                status =`
                                    <a href="#/admin/category/edit/${item.id}">
                                        <button class="btn-info btn btn-sm"><i class="material-icons">edit</i>Edit</button>
                                    </a>
                                    <button class="btn-success btn btn-sm" target_id="${item.id}" action=1><i class="material-icons">check</i>Enable</button>

                            `;
                            }
                            if(item.status==1){
                                temp=`<p style = "color: black;">active</p>`;
                                status =`
                                    <a href="#/admin/category/edit/${item.id}">
                                        <button class="btn-info btn btn-sm"><i class="material-icons">edit</i>Edit</button>
                                    </a>
                                    <button class="btn-danger btn btn-sm" target_id="${item.id}" action=0><i class="material-icons">close</i>Disable</button>
                                `;
                            }

                            this.$set(item,'status',temp);
                            this.$set(item,'action',status);
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

        watch:{
            action: function (newVal) {
                if (newVal.id != null){
                    this.model.category_id=newVal.id;
                    this.model.action=newVal.action;
                    let target=newVal.target;
                        if(this.model.action==1){
                            Admin_ApiService.post('ChangeCategoryStatus', this.model).then(
                                result=>{
                                    let data=result.data;
                                    if(data.success === true){
                                        this.read();
                                    }
                                },
                                error=>{
                                    console.log('error');
                                }
                            )
                        }
                if(this.model.action==0){
                    Admin_ApiService.post('ChangeCategoryStatus', this.model).then(
                                result=>{
                                    let data=result.data;
                                    if(data.success === true){
                                        this.read();
                                    }
                                },
                                error=>{
                                    console.log('error');
                                }
                            )
                        }

                    this.action.action=null;
                    this.action.id=null;
                    this.action.target=null;
                }

            }
        },


        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
        beforeRouteBefore  () {

        },
        methods: {
            read(){
                Admin_ApiService.post('GetCategories').then(
                    result=>{
                        let data=result.data;
                        if(data.success){
                            console.log(data.CategoryData);
                            this.CategoryData = data.CategoryData;
                            this.CategoryData.forEach((item, index) => {
                                this.$set(item,'key',index+1);
                                this.$set(item,'name',item.name);
                                let temp='';
                                let status = '';
                                if(item.status==0){
                                    temp=`<p style = "color: red;">inactive</p>`;
                                    status =`
                                    <a href="#/admin/category/edit/${item.id}">
                                        <button class="btn-info btn btn-sm"><i class="material-icons">edit</i>Edit</button>
                                    </a>
                                    <button class="btn-success btn btn-sm" target_id="${item.id}" action=1><i class="material-icons">check</i>Enable</button>

                            `;
                                }
                                if(item.status==1){
                                    temp=`<p style = "color: black;">active</p>`;
                                    status =`
                                    <a href="#/admin/category/edit/${item.id}">
                                        <button class="btn-info btn btn-sm"><i class="material-icons">edit</i>Edit</button>
                                    </a>
                                    <button class="btn-danger btn btn-sm" target_id="${item.id}" action=0><i class="material-icons">close</i>Disable</button>
                                `;
                                }

                                this.$set(item,'status',temp);
                                this.$set(item,'action',status);
                            });
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
</style>
