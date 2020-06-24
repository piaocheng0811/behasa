<template>
    <div class="panel-white-box" style="min-height:500px">
        <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
            <div class="section-title">Welcome {{$store.state.user.name}}</div>
            <div class="note-description-wrapper m-5 text-center">
                <p class="note-description-text">There is 30 Minutes duration to finish the test and the result will be shown at the end.</p>
                <button class="btn btn-success btn-lg" @click="startTest">{{$t('home.labels.start_test')}}</button>
            </div>
        </b-card>

        <div class="full-width-modal" v-if="current_question_number>=0">
            <div class="loader-image" v-if="loader" style="position:fixed; top:50%;left:50%">
                <img src="~img/app-loader.gif">
            </div>
            <div class="full-modal-header background-1 grid-column-2">
                <p class="text-size-1 text-white mb-0 mt-2">
                    Theory Driving Test for - Canditate Name - {{$store.state.user.name}}
                </p>
                <div class="text-right text-white text-size-2">
                    Time Remaining : 00:22:57
                    <br>
                    <strong>#{{current_question_number+1}}/{{testConfig.noofquestion}}</strong>
                </div>
            </div>

            <div class="full-modal-body" v-if="questions.length>0">
                <div class="question-image-container text-center">
                    <img class="question-image" :src="question.photo">
                </div>
                <div class="question-text text-center">
                    <i class="fa fa-volume-up question-audio-icon" v-if="question.audio"></i>
                    <span class="question-text">{{question.question}}</span>
                </div>
                <div class="question-choice-container">
                    <table>
                        <tr class="question-choice-item-wrapper">
                            <td class="question-choice-select-wrapper">
                                <input type="radio" value="1" id="choice-1"
                                       v-model="question.answered_value"
                                       v-if="realtimetest === '1'"
                                       @change="checkAnswer()"
                                />
                                <input type="radio" value="1" id="choice-1"
                                       v-model="question.answered_value"
                                       v-if="realtimetest === 0" @change="checkAnswer()"
                                />
                                <label class="normal" for="choice-1"></label>
                            </td>
                            <td class="question-choice-text-wrapper" @click="playOption(question.id,1)">
                                <audio style="display: none"></audio>
                                <span class="question-choice-text" v-if="!stopOption1">{{question.choice1}}</span>
                                <span class="question-choice-text" v-if="stopOption1">{{question.choice1}}</span>
                            </td>
                            <td>
                                <img :src="question.choice1photo" class="choice-photo-container" v-if="question.choice1photo">
                            </td>
                            <td class="choice-result-display">
                                <span>
                                    <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag1"></i>
                                </span>
                                <span>
                                    <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag1"></i>
                                 </span>
                            </td>
                        </tr>
                        <tr class="question-choice-item-wrapper">
                            <td class="question-choice-select-wrapper">
                                <input type="radio" value="2"
                                       v-model="question.answered_value" id="choice-2"
                                       v-if="realtimetest === '1'"
                                       @change="checkAnswer()"
                                />
                                <input type="radio" value="2" id="choice-2"
                                       v-model="question.answered_value"
                                       v-if="realtimetest === 0" @change="checkAnswer()"
                                />
                                <label class="normal" for="choice-2"></label>
                            </td>
                            <td class="question-choice-text-wrapper" @click="playOption(question.id,2)">
                                <audio style="display: none"></audio>
                                <span class="question-choice-text" v-if="!stopOption1">{{question.choice2}}</span>
                                <span class="question-choice-text" v-if="stopOption1">{{question.choice2}}</span>
                            </td>
                            <td>
                                <img :src="question.choice2photo" class="choice-photo-container" v-if="question.choice1photo">
                            </td>
                            <td class="choice-result-display">
                                <span>
                                    <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag1"></i>
                                </span>
                                <span>
                                    <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag1"></i>
                                 </span>
                            </td>
                        </tr>
                        <tr class="question-choice-item-wrapper">
                            <td class="question-choice-select-wrapper">
                                <input type="radio" value="3" id="choice-3"
                                       v-model="question.answered_value"
                                       v-if="realtimetest === '1'"
                                       @change="checkAnswer()"
                                />
                                <input type="radio" value="3" id="choice-3"
                                       v-model="question.answered_value"
                                       v-if="realtimetest === 0" @change="checkAnswer()"
                                />
                                <label class="normal" for="choice-3"></label>
                            </td>
                            <td class="question-choice-text-wrapper" @click="playOption(question.id,3)">
                                <audio style="display: none"></audio>
                                <span class="question-choice-text" v-if="!stopOption1">{{question.choice3}}</span>
                                <span class="question-choice-text" v-if="stopOption1">{{question.choice3}}</span>
                            </td>
                            <td>
                                <img :src="question.choice3photo" class="choice-photo-container" v-if="question.choice1photo">
                            </td>
                            <td class="choice-result-display">
                                <span>
                                    <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag1"></i>
                                </span>
                                <span>
                                    <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag1"></i>
                                 </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="full-modal-footer background-1 p-3 pl-4">
                <button class="button-type-1" @click="previousQuestion" v-if="current_question_number>0"><i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>Previous</button>
                <button class="button-type-1" @click="nextQuestion">Next<i class="fa fa-arrow-right ml-2" aria-hidden="true"></i></button>
            </div>

        </div>
    </div>
</template>
<script>
    import {i18n} from "../../common/i18n";
    import User_ApiService from "common/user_api.service";
    User_ApiService.init();

    export default {
        name: "home",
        data(){
            return {
                testConfig:{},
                current_question_number:-1,
                current_testing_time:1800,
                questions:[],
                loader:false,
                rtl_screen:false,
                question:{},
                realtimetest:0,
                stopOption1:false,
                optionResult:{
                    successFlag1:false,
                    errorFlag1:false
                }
            }
        },
        beforeMount() {

            User_ApiService.get('testConfig',{category:this.$store.state.customer_option.category}).then(
                result=>{
                    let data=result.data;
                    console.log('testconfig data', data.data[0]);
                    if(data.status){
                        this.testConfig=data.data[0];
                    }
                }
            )
        },
        methods:{
            startTest(){
                this.current_question_number=0;
                this.loadTest();
            },
            loadTest(){
                this.loader=true
                let customer_option=this.$store.state.customer_option;
                let testConfig=this.testConfig;
                let testOption = {
                    testCategory:testConfig.testcategory,
                    testType: testConfig.category,
                    limit: testConfig.noofquestion,
                    specific:testConfig.noofspecificquestion,
                    common:testConfig.noofcommonquestion,
                    test: testConfig.category,
                    language: customer_option.text_language,
                }
                User_ApiService.post('loadTest', testOption).then(
                    result=>{
                        var data=result.data;
                        if(data.status==='success'){
                            this.questions=data.data;
                            console.log('loadTest', data.data)
                            this.questions.map((question, index)=>{
                                this.questions[index]['audio']="https://www.kozco.com/tech/LRMonoPhase4.wav";
                            })
                        }
                        this.loader=false;
                        this.question=this.questions[0];
                    },
                    ()=>{
                        this.loader=false;
                    }

                )
            },
            nextQuestion(){
                this.current_question_number++;
                this.question=this.questions[this.current_question_number];
            },
            previousQuestion(){
                this.current_question_number--;
                this.question=this.questions[this.current_question_number];
            },
            checkAnswer(){

            },
            playOption(question_id, choice_number){

            }
        },
        mounted: function() {
            console.log(i18n.locale);
        },
        destroyed: function() {
        }
    }
</script>
<style type="text/css" scoped>
    #color {
        height: 35px;
    }

    .form-control:active, .input-group .form-control:hover{
        z-index: 1;
    }
    .loader-image{
        position: fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .full-modal-body{
        margin-top:100px;
        padding:30px;
    }
    .question-image-container{
        height:100px;
        margin-bottom:20px;
    }



    .question-image-container img{
        height: 100%;
    }
    .question-text{
        font-size:30px;
        color:#333;
    }
    .question-audio-icon {
        margin-right: 10px;
    }
    input[type='radio']{
        display: none;
    }
    .question-choice-container{
        padding:30px;
        margin-left:50px;
    }
    .choice-photo-container{
        width:75px;
        height:75px;
    }
    .question-choice-text {
        font-size: 30px;
        margin-right: 20px;
    }
    label.normal {
        margin-right: 20px;
        width: 75px;
        border: 5px solid black;
        border-radius: 5px;
        height: 75px;
        background: #984807;
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
        cursor: pointer;
    }

    input:checked + label {
        position: relative;
        display: inline-block;
        padding: 15px 25px;
        background: #E46C0A;
        text-decoration: none;
        color: #fff;
        font-size: 25px;
        font-weight: 100;
        border-radius: 3px;
        box-shadow: 0px 1px 4px -2px #333;
        text-shadow: 0px -1px #333;
        border-color: #797B7B;
    }
    .datatable-material{
        min-height: 700px;
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
    .note-description-wrapper{
        padding: 200px 0;
    }
</style>
