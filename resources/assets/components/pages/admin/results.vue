
<template>
    <div> <br>
        <div class="col-lg-12 mb-3">
            <b-card header="" header-tag="h4" class="bg-success-card datatable-material"><br><br>
                <div class="row">
                    <div class="col-md-3" style="display:flex;">
                        <div class="select-date">
                            <span class="select-date-txt">From</span>
                            <input type="date" class="form-control" ref="from" :value="model.from">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="select-date">
                            <span class="select-date-txt">To</span>
                            <input type="date" class="form-control" placeholder="From" ref="to" :value="model.to">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary" @click="getResult()">Go</button>
                        <button class="btn btn-primary" @click="reset()">Reset</button>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-success">Export Excel</button>
                        <button class="btn btn-success">Export PDF</button>
                    </div>
                </div>
                <hr>
                <div v-show="testResult.length" >
                    <datatable class="datatable-context" title="" :rows="testResult" :columns="columndata"></datatable>
                </div>
                <div class="no-result" v-show="testResult.length == 0">
                    <div><li class="fa fa-warning"> Result not found</li></div>
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
        name: "category",
        components: {
            datatable
        },
        data() {
            return {
                testResult:[],
                columndata: [
                    {
                        label: 'No',
                        field: 'key',
                        numeric: true,
                        width: "100px",
                        html: false,
                    },
                    {
                        label: 'Test Category',
                        field: 'categoryName',
                        numeric: false,
                        html: true,
                    },
                    {
                        label: 'Student Id',
                        field: 'student.studentId',
                        numeric: true,
                        html: true
                    },
                    {
                        label: 'Student Name',
                        field: 'student.name',
                        numeric: true,
                        html: true
                    },
                    {
                        label: 'Email',
                        field: 'student.email',
                        numeric: true,
                        html: true
                    },
                    {
                        label: 'Result Status',
                        field: 'testStatus',
                        numeric: false,
                        html: true
                    },

                    {
                        label: 'Held On',
                        field: 'testdate',
                        numeric: false,
                        width: "170px",
                        html: true,
                    },
                ],
                model: {
                    from:'',
                    to:'',
                    isAdmin:''
                }
            }
        },
        mounted: function () {
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
            reset(){
                this.testResult = [];
                this.model.from = '';
                this.model.to = '';
                window.location.href = '#/admin/results'
            },

            getResult(){

                this.model.from = this.$refs['from'].value;
                this.model.to = this.$refs['to'].value;
                this.model.isAdmin =this.$store.state.user.isAdmin

                Admin_ApiService.post('GetResult', this.model).then(
                    result=>{
                        let data=result.data;
                        if(data.success){
                            console.log(data.testResult);
                            this.testResult = data.testResult;
                            this.testResult.forEach((item, index) => {
                                this.$set(item,'key',index+1);
                                this.$set(item,'categoryName',item.categoryName);
                                this.$set(item,'student',item.student);
                                let temp='';
                                if(item.result_status==0)
                                    temp=`<p style = "color: red;">FAIL</p>`;
                                else
                                    temp=`<p  style = "color: #07ef07;">PASS</p>`;
                                this.$set(item,'testStatus',temp);
                            });


                        }
                    },
                    error=>{
                        console.log('error')
                    }
                ).catch(function (error) {
                });
            },

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
    .select-date{
        display: flex;
    }
    .select-date-txt{
        margin-top: 10px;
        margin-right: 10px;
        font-family: sans-serif;
    }
    .no-result{
        text-align: center;
        min-height: 500px;
        padding: 240px;
    }
    .fa-warning{
        font-size: 30px;
        color:red
    }
    .form-control{
        width: 230px;
    }
</style>
