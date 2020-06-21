<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-3 offset-lg-5 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
                 <div class="row mt-2">
                     <div class="col-sm-12">
                         <div class="text-center m-2 mt-5">
                            <img src="~img/pages/logo.png" class="logo-img">
                         </div>
                     </div>
                 </div><div class="login-content-h-line"></div>
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                    <div class="row sub-select-content">
                        <div class="col-sm-12 mt-3 ">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="category">Select Category</label>
                                    <select v-model="model.category" name="category" id="category" required autofocus class="form-control">
                                        <option value="" disabled selected>Select Category</option>
                                        <option v-for="category in categories" :value="category.id">
                                            {{category.name}}
                                        </option>
                                    </select>
                                    <field-messages name="category" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Category is a required field</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>

                        <div class="col-sm-12 mt-3">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="text_language">Select Language</label>
                                    <select v-model="model.text_language" name="text_language" id="text_language" required class="form-control">
                                        <option value="" disabled selected>Select Language</option>
                                        <option v-for="language in languages" :value="language.id">
                                            {{language.name}}
                                        </option>
                                    </select>
                                    <field-messages name="text_language" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Language is a required field</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
                        <div class="col-sm-12 mt-3 ">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="audio_language">Select Audio Language</label>
                                    <select v-model="model.audio_language" name="audio_language" id="audio_language" required class="form-control">
                                        <option value="" disabled selected>Select Audio Language</option>
                                        <option v-for="language in languages" :value="language.id">{{language.name}}</option>
                                    </select>
                                    <field-messages name="audio_language" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Audio Language is a required field</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12 text-right">
                            <div class="form-group sub-select">
                                <input type="submit" value="Submit" class="btn btn-info  btn-sm submit-btn"/>
                            </div>
                        </div>
                        <br>
                    </div>
                </vue-form>
                <div class="login-content-f-line"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueForm from "vue-form";
import options from "src/validations/validations.js";
import User_ApiService from "common/user_api.service";
import axios from "axios";
import {i18n} from "../../common/i18n";
User_ApiService.init();
Vue.use(VueForm, options);
export default {
    name: "language",
    data() {
        return {
            formstate: {},
            model: {
                text_language: this.$store.state.user.language,
                audio_language: this.$store.state.user.language,
                category: this.$store.state.user.category
            },
            languages:[],
            categories:[]
        }
    },
    methods: {
        onSubmit() {
            if (this.formstate.$invalid) {
                return;
            } else {
                var languages=this.languages;
                var current_language='en-en';
                for(var i=0;i<languages.length;i++){
                    if(languages[i].id==this.model.text_language){
                        current_language=languages[i].code;
                        break;
                    }
                }
                let option={
                    text_language:this.model.text_language,
                    audio_language: this.model.audio_language,
                    category:this.model.category
                }
                $.getJSON(`public/languages/${current_language}.json`).then(
                    msgs=>{
                        i18n.setLocaleMessage(current_language,msgs)
                        i18n.locale=current_language;
                        option={...option, language_code:current_language, messages:msgs}
                        this.$store.commit('updateCustomerOption', option);
                        localStorage.setItem('customerOption', JSON.stringify(option))
                        this.$router.push('/');
                    },
                    error=>{
                        this.$store.commit('updateCustomerOption', option);
                        localStorage.setItem('customerOption', JSON.stringify(option))
                        this.$router.push('/');
                    }
                )
            }
        }
    },
    mounted: function() {
        User_ApiService.get('/get_language_categories').then(
            result=>{
                let data=result.data;
                this.languages=data.languages;
                this.categories=data.categories;
                this.$i18n.locale='ch';
            },
            error=>{
                console.log(error)
            }
        )

    },
    destroyed: function() {

    },

}
</script>
<style scoped>
    .sub-select-content{
        text-align: center;
    }
    .sub-select-content label{
        font-weight: 600;
        color: gray;
    }
    .login-content {
        margin-top: 7%;
        margin-bottom: 7%;
        border-radius: 7px;
    }
    .submit-btn{
        font-weight: 600;
        color: #524c4f;
    }
    .img_backgrond{
        background-image: url("~img/pages/Login-03-01.png");
        background-size:cover;
        background-repeat:no-repeat;
        width: 100%;
        padding: 75px 15px;
        min-height: 980px;

    }
    .sub-select{
        text-align: center;
    }
    label{
        font-size: 14px !important;
    }
    ::-webkit-input-placeholder {
        font-size:14px;
    }
    .login-content-h-line{
        border-top: 1px solid #D8D8D8;
        margin-top: 20px;
        padding-top: 10px;
        font-size: 28px;
        text-align: center;
    }
</style>
