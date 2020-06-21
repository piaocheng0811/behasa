<template>
    <div>
        <div> <br><br>
            <div class="col-lg-12 mb-3">
                <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
                    <div class="card-header card-header-icon card-header-rose">
                        <div class="card-icon">
                            Mock Test Configuration
                        </div>
                    </div><br><br>
                    <div class="card-body">
                        <div class="table-responsive">
                            <vue-form :state="formstate122" @submit.prevent="onSubmit()">
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th class="text-center"></th>
                                        <th class="topic-title">Specific</th>
                                        <th class="topic-title">Common</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="text-left">No of questions</td>
                                        <td>
                                            <validate tag="div">
                                                <input class="form-control" ref="no_spe_question" type="number"  :value="testConfigData.noofspecificquestion" required>
                                                <field-messages name="no_spe_question" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Number of special question is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </td>
                                        <td>
                                            <validate tag="div">
                                                <input class="form-control" ref="no_com_question" type="number"  :value="testConfigData.noofcommonquestion" required>
                                                <field-messages name="no_com_question" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Number of common question is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">No of Required answer</td>
                                        <td>
                                            <validate tag="div">
                                                <input class="form-control" ref="no_spe_answer" type="number"  :value="testConfigData.noofreqspecificanswer" required>
                                                <field-messages name="no_spe_answer" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Number of special answer is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </td>
                                        <td>
                                            <validate tag="div">
                                                <input class="form-control" ref="no_com_answer" type="number"  :value="testConfigData.noofreqcommonanswer" required>
                                                <field-messages name="no_com_answer" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Number of common answer is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Total duration (In minute)</td>
                                        <td colspan="2">
                                            <validate tag="div">
                                                <input type="number" :value = "testConfigData.id" ref = "testConfigDataId" class="test-config-data-id">
                                                <input class="form-control" ref="duration" type="number"  :value="testConfigData.duration" required>
                                                <field-messages name="duration" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Duration is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="test-config-action">
                                    <button type="submit" class="btn btn-success">Save</button>
                                    <button class="btn btn-danger" @click="cancel()">Cancel</button>
                                </div>
                            </vue-form>
                        </div>
                    </div>
                </b-card>
            </div><br><br>
            <div class="col-lg-12 mb-3">
                <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
                    <div class="card-header card-header-icon card-header-rose">
                        <div class="card-icon">
                            List of questions
                        </div>
                    </div><br><br>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th class="text-center">S.No</th>
                                    <th class="topic-title">Topic Area</th>
                                    <th class="topic-title">Category</th>
                                    <th class="topic-title">Question</th>
                                    <th class="topic-title">Choices</th>
                                    <th class="topic-title">Answer</th>
                                    <th class="topic-title">Actions</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr v-for = "(item, index) in response">
                                    <td>
                                        {{index+1}}
                                    </td>
                                    <td>
                                        {{item.topicAreaName}}
                                    </td>
                                    <td>
                                        {{item.categoryName}}
                                    </td>
                                    <td>
                                        {{item.question}}
                                    </td>
                                    <td>
                                        {{item.choice1}},{{item.choice2}},{{item.choice3}}
                                    </td>
                                    <td v-show = "item.answer == 1">
                                        {{item.choice1}}
                                    </td>
                                    <td v-show = "item.answer == 2">
                                        {{item.choice2}}
                                    </td>
                                    <td v-show = "item.answer ==3">
                                        {{item.choice3}}
                                    </td>
                                    <td class="action">
                                        <a :href="'#/admin/question-management-edit/'+item.id">
<!--                                        <a href="#/admin/topic-area/edit/67">-->
<!--                                        <a href="#/admin/questionmanagement/edit/">-->
                                            <button class="btn btn-primary btn-sm">
                                            <i class="material-icons">edit</i> Edit</button>
                                        </a>
                                        <button class="btn btn-danger btn-sm">
                                            <i class="material-icons">delete</i> Delete</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "../../../validations/validations";
    Vue.use(VueForm, options);
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
    import miniToastr from "mini-toastr";
    miniToastr.init();


    export default {
        name: "question",
        components: {
            datatable
        },
        data() {
            return {
                formstate122:{},
                response:[],
                testConfigData:{},
                model: {
                    category_id:this.$route.params.category_id,
                    test_type:this.$route.params.test_type,
                    no_spe_question:'',
                    no_com_question:'',
                    no_spe_answer:'',
                    no_com_answer:'',
                    duration:'',
                    testConfigDataId:''
                }
            }
        },
        mounted: function () {
            Admin_ApiService.post('GetQuestions', this.model).then(
                result=>{
                    let data=result.data;
                    if(data.success){
                        // console.log('get questions',data);
                        console.log('get questions',data.response);
                        this.response = data.response;
                    }
                },
                error=>{
                    console.log('error')
                }
            ).catch(function (error) {
                console.log(error)
            });
            Admin_ApiService.post('loadTestConfig', this.model).then(
                result=>{
                    let data=result.data;
                    if(data.success){
                        // console.log('get questions',data);
                        console.log('-------',data.testConfigData[0]);
                        this.testConfigData = data.testConfigData[0];
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
            onSubmit() {
                if (this.formstate122.$invalid) {
                    return;
                } else {
                    this.model.no_spe_question = this.$refs['no_spe_question'].value;
                    console.log(this.$refs['no_spe_question'].value);
                    this.model.no_com_question = this.$refs['no_com_question'].value;
                    console.log(this.$refs['no_com_question'].value);
                    this.model.no_spe_answer = this.$refs['no_spe_answer'].value;
                    console.log(this.$refs['no_spe_answer'].value);
                    this.model.no_com_answer = this.$refs['no_com_answer'].value;
                    console.log(this.$refs['no_com_answer'].value);
                    this.model.duration = this.$refs['duration'].value;
                    console.log(this.$refs['duration'].value);
                    this.model.testConfigDataId = this.$refs['testConfigDataId'].value;
                    Admin_ApiService.post('EditTestConfig', this.model).then(
                        result=>{
                            let data=result.data;
                            if(data.success){
                                console.log('-------',data);
                                miniToastr.success(data.message)
                            }
                            else {
                                miniToastr.error(data.message)
                                console.log(data);
                            }
                        },
                        error=>{
                            console.log('error')
                        }
                    ).catch(function (error) {
                        console.log('get questions');
                        console.log(error)
                    });
                }
            },
            cancel(){
                window.location.href = '#/admin/questionmanagement'
            },
            read(){
            },
            Delete($id){
            }
        },
        created() {

        },
        computed:{


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
    .test-config-action{
        text-align: right;
    }

    .topic-title{
        width: 25%;
    }
    .card-header-icon{
        margin-top: -20px;
    }
    .action{
        display: flex;
    }
    .test-config-data-id{
        display: none;
    }
    .questionmanagement-edit{
        width: 200px;
    }

</style>
