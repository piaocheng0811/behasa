<template>
    <div><br><br>
        <div class="col-lg-12 mb-3">
            <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
                <div class="card-header card-header-icon card-header-rose">
                    <div class="card-icon">
                        <i class="material-icons">assignment</i>
                    </div>
                </div><br><br><br><br>


                <div class="card-body">

                    <div v-for="(item, index) in model.QuestionTransData">
                        <div class="row">
                            <div class="col-lg-9">
                                <label>Enter your question here...</label>
                                <b-form-textarea
                                        v-model="item.question"
                                        id="textarea-large"
                                        required
                                        size="lg"
                                        placeholder=""
                                        rows="10"
                                        class="r-content"
                                        ref = "question"
                                ></b-form-textarea>
                            </div>
                            <div class="col-lg-3" v-if="!index">
                                <div>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                        Launch demo modal
                                    </button>
                                    <img class="ml-2 w-50 bg-light" :src="croppedImageSrc"/>
                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="p-3 bg-white shadow rounded-lg">
                                                        <input type="file" name="image" accept="image/*" @change="setImage" />
                                                        <!-- Image previewer -->
                                                        <img :src="imageSrc" width="100" />

                                                        <!-- Cropper container -->
                                                        <div v-if="imageSrc" class="my-3 d-flex align-items-center justify-content-center mx-auto">
                                                            <vue-cropper class="mr-2 w-50" ref='cropper' :guides="true" :src="imageSrc"></vue-cropper>

                                                            <!-- Cropped image previewer -->
                                                            <img class="ml-2 w-50 bg-light" :src="croppedImageSrc"/>
                                                        </div>
                                                        <button v-if="imageSrc" @click="cropImage">Crop</button>
                                                        <button v-if="croppedImageSrc" @click="uploadImage">Upload</button>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br><br>

                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                <tr>
                                    <td class="text-left">Audio</td>
                                    <td>
                                        <input type="file">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-left">Choose Topic Area</td>
                                    <td>
                                        <b-form-select
                                                v-model="item.topicArea"
                                                :options="model.TopicAreaData"
                                                value-field="id"
                                                text-field="name"
                                                class="mb-3 r-content form-control"
                                                name = "married"
                                                id = "topic-area"
                                                required
                                                disabled-field="notEnabled"
                                        ></b-form-select>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-left">Choose Language</td>
                                    <td>
                                        <b-form-select
                                                v-model="item.language"
                                                :options="model.languageData"
                                                value-field="code"
                                                text-field="name"
                                                class="mb-3 r-content form-control"
                                                name = "language"
                                                id = "language"
                                                required
                                                disabled-field="notEnabled"
                                        ></b-form-select>
                                    </td>
                                </tr>
                                <tr v-if="model.question_available == 'isSpecific'">
                                    <td class="text-left">Choose Category</td>
                                    <td>
                                        <b-form-select
                                                v-model="item.category"
                                                :options="model.CategoryData"
                                                value-field="id"
                                                text-field="name"
                                                class="mb-3 r-content form-control"
                                                name = "gender"
                                                id = "gender"
                                                required
                                                disabled-field="notEnabled"
                                        ></b-form-select>
                                    </td>
                                </tr>
                                <tr v-if="!index">
                                    <td class="text-left">Question available in</td>
                                    <td class="question-available">
                                        <div>
                                            <b-form-radio-group
                                                    v-model="model.selected"
                                                    :options="model.options"
                                                    class="mb-3"
                                                    value-field="item"
                                                    text-field="name"
                                                    disabled-field="notEnabled"
                                                    :@click="question_available(model.selected)"
                                                    style="display: flex"
                                            ></b-form-radio-group>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="table-responsive add-translation-content"><br>
                            <div>Answer Questions</div><br>
                            <table class="table table-striped">
                                <tbody>
                                <tr>
                                    <td class="text-center" v-if="!index">
                                        <label>
                                            <input class="radiobox-focus" type="radio"  name="choose1" v-if="item.answer == 1" checked>
                                            <input class="radiobox-focus" type="radio"  name="choose1" v-if="item.answer != 1">
                                        </label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control r-content" ref="choice1" :value="item.choice1">
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <label>Choose new audio:</label>
                                        <input type="file">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center" v-if="!index">
                                        <label>
                                            <input class="radiobox-focus" type="radio"  name="choose1" v-if="item.answer == 2" checked>
                                            <input class="radiobox-focus" type="radio"  name="choose1" v-if="item.answer != 2">
                                            <!--                                        <input class="radiobox-focus" type="radio" name="choose1" :v-if="model.questionData.answer == 1 || model.questionData.answer == 1">-->
                                        </label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control r-content" ref="choice2" :value="item.choice2">
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <label>Choose new audio:</label>
                                        <input type="file">
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center" v-if="!index">
                                        <label>
                                            <input class="radiobox-focus" type="radio"  name="choose1" v-if="item.answer == 3" checked>
                                            <input class="radiobox-focus" type="radio"  name="choose1" v-if="item.answer != 3">
                                        </label>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control r-content" ref="choice3" :value="item.choice3">
                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <label>Choose new audio:</label>
                                        <input type="file">
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="add-translation">
                        <button class="btn btn-success" @click="addTranslation">
                            <i class="material-icons">add_circle_outline</i>
                            Add Translation
                        </button>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';
    import Vue from 'vue'
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    import Datepicker from 'vuejs-datepicker'
    import miniToastr from "mini-toastr";
    import Admin_ApiService from "../../../common/admin_api.service";
    miniToastr.init();

    Admin_ApiService.init();
    Vue.use(VueForm, options);
    export default {
        components: {
            VueCropper
        },
        name: "edit-question",
        data: function() {
            return {
                imageSrc: "",
                croppedImageSrc: "",
                counter:1,
                AdminPassCodeShower:false,
                value: '',
                formstate: {},
                model: {
                    QuestionTransData:[],
                    selected: '',
                    options: [
                        { item: 'isCommon', name: 'Common' },
                        { item: 'isSpecific', name: 'Specific' },
                    ],

                    question_available:'',
                    picked:'one',
                    questionData:{},
                    questionId:this.$route.params.question_id,
                    studentId: "",
                    password: "",
                    repeatPassword: "",
                    adminPassCode:"",
                    first_name:"",
                    last_name:"",
                    email:"",
                    dob:"",
                    nationality:"",
                    emirates_id_details:"",
                    passport_details:"",
                    profile_image:"",

                    TopicArea: '',
                    TopicAreaData: [
                    ],
                    category: '1',
                    CategoryData: [],
                    language: '',
                    languageData: [],
                },
            }
        },
        methods: {
            question_available($available){
                console.log('question_available', $available);
                this.model.question_available =  $available;
            },
            addTranslation(){
                $(".add-translation-content").append(`
                        <div class="close-trans">
                            <button class="btn btn-danger btn-sm close-translation"><li class="material-icons">close</li></button>
                        </div>
                        <div>
                            <label>Enter your question here....</label>
                            <b-form-textarea
                                v-model=""
                                required
                                size="lg"
                                placeholder=""
                                rows="5"
                                class="r-content"
                                ref = "question"
                            ></b-form-textarea>
                        </div>
                        <div>
                            <label>Question Attributes</label>
                            <table class="table table-striped">
                            <tbody>
                            <tr>
                                <td>
                                    Audio
                                </td>
                                <td>
                                    <label>Choose new audio:</label>
                                    <input type="file">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Choose Language
                                </td>
                                <td>

                                </td>
                            </tr>
                            </tbody>
                        </div>
                        <table class="table table-striped">
                            <tbody>
                            <tr>
                                <td>
                                    <input type="text" ref="answer1">
                                </td>
                                <td>
                                    <label>Choose new audio:</label>
                                    <input type="file">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" ref="answer1">
                                </td>
                                <td>
                                    <label>Choose new audio:</label>
                                    <input type="file">
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    <input type="text" ref="answer1">
                                </td>
                                <td>
                                    <label>Choose new audio:</label>
                                    <input type="file">
                                </td>
                            </tr>
                            </tbody>
                        </table>`);
            },
            CancelCropImage(){
                this.croppedImageSrc = ''
            },
            setImage: function (e) {
                const file = e.target.files[0];
                if (!file.type.includes('image/')) {
                    alert('Please select an image file');
                    return;
                }
                if (typeof FileReader === 'function') {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        this.imageSrc = event.target.result;

                        // Rebuild cropperjs with the updated source
                        this.$refs.cropper.replace(event.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert('Sorry, FileReader API not supported');
                }
            },
            cropImage() {

                // Get image data for post processing, e.g. upload or setting image src
                this.croppedImageSrc = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
        },
        created() {
            Admin_ApiService.post('GetQuestionTransData', this.model).then(
                result => {
                    let data = result.data;
                    if (data.success) {
                        console.log('GetQuestionTransData', data.transData);
                        this.model.QuestionTransData = data.transData;
                        console.log('000000000000000', this.model.QuestionTransData);

                    }else
                        console.log('error', data);
                },
                error => {

                    console.log('error')
                }
            )
            Admin_ApiService.post('GetQuestionData', this.model).then(
                result => {
                    let data = result.data;
                    if (data.success) {
                        // this.getData = data;
                        console.log('questionData', data);
                        console.log('--------------', data.questionData.question);
                        this.model.questionData = data.questionData[0];
                        if(this.model.questionData.isCommon == 1){
                            this.model.selected = 'isCommon'
                        }
                        if(this.model.questionData.isCommon == 0){
                            this.model.selected = 'isSpecific'
                        }
                        // this.model.CategoryData = data.CategoryData;
                    }
                },
                error => {
                    console.log('error')
                }
            )
            Admin_ApiService.post('GetTopicArea').then(
                result => {
                    let data = result.data;
                    if (data.success) {
                        this.getData = data;
                        console.log('GetTopicArea', data);
                        this.model.TopicAreaData = data.topicAreaData;
                    }
                },
                error => {
                    console.log('error')
                }
            )
            Admin_ApiService.post('GetCategory').then(
                result => {
                    let data = result.data;
                    if (data.success) {
                        this.getData = data;
                        console.log('CategoryData', data.CategoryData);
                        this.model.CategoryData = data.CategoryData;
                    }
                },
                error => {
                    console.log('error')
                }
            )
            Admin_ApiService.post('getLanguage').then(
                result => {
                    let data = result.data;
                    if (data.success) {
                        this.getData = data;
                        console.log('languageData', data.languageData);
                        this.model.languageData = data.languageData;
                    }
                },
                error => {
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
        mounted: function() {
            console.log('------locale--------',this.$i18n.locale);
        },
        destroyed: function() {
        },
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
    #topic-area{
        width: 100%;
    }
    .audio{
        width: 50%;
    }
    .r-content{
        width: 100%;
    }
    .question-available{
        display: flex;
    }
    .add-translation{
        text-align: right;
    }
    .r-content{
        border: 1px solid gray;
        border-radius: 3px;
        padding: 6px 12px;
    }
    .form-control:read-only {
        background-image: none;
    }
    select, select.form-control {
        -moz-appearance: none;
        -webkit-appearance: auto;
    }
    #modal-xl .modal-dialog modal-xl{
        display: initial !important;
    }
    .upload-question-image{
        margin-top: 26px;
    }
    .form-control, .is-focused .form-control {
        background-image: none;
    }
    .close-translation{
        width: 30px;
        padding: 8px;
        height: 30px;
    }

</style>
<style>
    .custom-control-indicator{
        margin-right: 5px;
    }
    .close-trans{
        text-align: right;
        margin-top: 30px;
    }

</style>
