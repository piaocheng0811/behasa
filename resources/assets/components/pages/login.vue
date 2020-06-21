<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 mt-5 ">
                 <div class="row mt-2">
                     <div class="col-sm-12">
                         <div class="text-center">
                             <img src="~img/symbol.png" class="logo-img">
                         </div>
                     </div>
                 </div>
                <div class="login-content">
                    <vue-form :state="formstate" @submit.prevent="onSubmit">
                        <h3 class="login-title">Login</h3>
                        <div class="row">
                            <div class="col-sm-12 mt-3 ">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.studentId" name="studentId" id="studentId" type="text" required autofocus placeholder="Student ID" class="form-control" />
                                        <field-messages name="studentId" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">User is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.password" name="password" id="password" type="password" required placeholder="Password" class="form-control" minlength="4" maxlength="10" />
                                        <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Password is required</div>
                                            <div slot="minlength">Password should be atleast 4 characters long</div>
                                            <div slot="maxlength">Password should be atmost 10 characters long</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-8">
                                <div class="form-group">
                                    <p class="change_link">Don't have an account?
                                        <router-link  tag="a"  to="/register" data-ui-sref="login" class="to_register ng-scope">
                                            Sign Up
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 text-right">
                                <div class="form-group submit-login">
                                    <input type="submit" value="Sign In" class="btn btn-light" />
                                </div>
                            </div>
                        </div>
                        <h1></h1>
                    </vue-form>
                </div>
                <div class="login-content-f-line">
                    <div>
                        <img src="~img/symbol.png" class="logo-img-footer">
                        <span>Belhasa Driving Center</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueForm from "vue-form";
import options from "src/validations/validations.js";
import User_ApiService from "common/user_api.service";
import miniToastr from "mini-toastr";
miniToastr.init();
User_ApiService.init();
Vue.use(VueForm, options);
export default {
    name: "login",
    data() {
        return {
            formstate: {},
            model: {
                studentId: "",
                password: ""
            }
        }
    },
    methods: {
        onSubmit() {
            if (this.formstate.$invalid) {
                return;
            } else {
                User_ApiService.post('login', this.model).then(
                    result=>{
                        let data=result.data;
                        if(data.success === true){
                            console.log(data);
                            this.$store.dispatch('login', data.data);
                            this.$store.commit('changeUser',data.data);
                            this.$router.push("/choose-option");
                        }
                        else {
                            miniToastr.error(data.message)
                            console.log(data);
                        }
                    },
                    error=>{
                    }
                )
            }
        }
    },
    created() {
        miniToastr.setIcon('error', 'i', {
            'class': 'fa fa-times'
        });
    },
    mounted: function() {
        console.log('------locale-------',this.$i18n.locale);
    },
    destroyed: function() {
    },
}
</script>
<style scoped>
    .login-content h1 {
        font: normal 25px Helvetica, Arial, sans-serif;
        letter-spacing: -0.05em;
        line-height: 20px;
        margin: 10px 0 30px;
    }
    .login-content h1:before,
    .login-content h1:after {
        content: "";
        height: 1px;
        position: absolute;
        top: 10px;
        width: 27%;
    }
    .login-content h1:after {
        background: rgb(126,126,126);
        background: -moz-linear-gradient(left,  rgba(126,126,126,1) 0%, rgba(255,255,255,1) 100%);
        background: -webkit-linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: -o-linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: -ms-linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        right: 0;
        margin-top: 120px;
    }
    .login-content h1:before {
        background: rgb(126,126,126);
        background: -moz-linear-gradient(right,  rgba(126,126,126,1) 0%, rgba(255,255,255,1) 100%);
        background: -webkit-linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: -o-linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: -ms-linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        left: 0;
        margin-top: 120px;
    }
    .login-content h1:before,
    .login-content h1:after {
        content: "";
        height: 1px;
        position: absolute;
        top: 10px;
        width: 20%;
    }
    .login-content h1:after {
        background: rgb(126,126,126);
        background: -moz-linear-gradient(left,  rgba(126,126,126,1) 0%, rgba(255,255,255,1) 100%);
        background: -webkit-linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: -o-linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: -ms-linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: linear-gradient(left,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        right: 0;
    }
    .login-content h1:before {
        background: rgb(126,126,126);
        background: -moz-linear-gradient(right,  rgba(126,126,126,1) 0%, rgba(255,255,255,1) 100%);
        background: -webkit-linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: -o-linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: -ms-linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        background: linear-gradient(right,  rgba(126,126,126,1) 0%,rgba(255,255,255,1) 100%);
        left: 0;
    }
    .login-content {
        margin-top: 7%;
        margin-bottom: 7%;
    }
    .btn-light{

    }
    .img_backgrond{
        background-image: url("~img/pages/Login-03-01.png");
        background-size:cover;
        background-repeat:no-repeat;
        width: 100%;
        padding: 75px 15px;
        min-height: 980px;
    }
    .submit-login input{
        color: #73879C;
    }
    .change_link{
        text-align: center;
        color: #73879C;
        margin-top: 10px;
    }
    label{
        font-size: 14px !important;
    }
    ::-webkit-input-placeholder {
        font-size:14px;
    }

    .login-title{
        text-align: center;
        font-family: sans-serif;
        color: #73879C;
    }
    .login-content-f-line{
        border-top: 1px solid #D8D8D8;
        margin-top: -50px;
        padding-top: 10px;
        text-align: center;
        font: normal 25px Helvetica, Arial, sans-serif;
        letter-spacing: -0.05em;
        line-height: 20px;

    }
    .logo-img-footer{
        width: 75px;
        margin-top: -6px;
    }
    .login-title{
        margin-top: 43px;
    }
    .form-control:invalid {
        background-image: none !important;
    }
    .form-control{
        border-bottom: 1px solid #495057;;
    }
</style>
