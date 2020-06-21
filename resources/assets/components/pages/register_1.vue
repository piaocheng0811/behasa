<template>
    <vue-form  :state="formstate" @submit.prevent="onSubmit(2)">
        <div  class="panel panel-info">
            <div class="panel-heading">Choose your account</div>
            <div class="panel-body r-content">
                <div class="form-group">
                    <validate tag="div">
                        <input v-model="model.user_id" name="user_id" type="text"  autofocus placeholder="User Name" class="form-control" id="user_id" required>
                        <field-messages name="user_id" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">User ID is a required field</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="form-group">
                    <validate tag="div">
                        <input v-model="model.password" name="password" type="password" required placeholder="Password" class="form-control" minlength="4"  maxlength="10" id="password"/>
                        <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Password is required</div>
                            <div slot="minlength">Password should be atleast 4 characters long</div>
                            <div slot="maxlength">Password should be atmost 10 characters long</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="form-group">
                    <validate tag="div">
                        <input v-model="model.repeatPassword" name="repeatpassword" type="password" required placeholder="Confirm Password" class="form-control" :sameas="model.password" id="repeatpassword">
                        <field-messages name="repeatpassword" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Password confirmatoin is required</div>
                            <div slot="sameas">Password and Confirm password should match</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="pull-right   r-content">
                    <button type="submit" class="btn btn-primary btn-sm">Next</button> &nbsp;
                    <a href="javascript:void(0)">Instant Login</a>
                </div>
            </div>
        </div>
        <h1></h1>
    </vue-form>
</template>

<script>
    import Vue from 'vue'
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    import User_ApiService from "common/user_api.service";
    import Datepicker from 'vuejs-datepicker'
    User_ApiService.init();
    Vue.use(VueForm, options);
    export default {
        name: "register_1",
        data() {
            return {
                counter:1,
                value: '',
                formstate: {},
                model: {
                    user_id: "",
                    password: "",
                    repeatPassword: "",
                    first_name:"",
                    last_name:"",
                    email:"",
                    gender: "A",
                    bod:"",
                    emirates_id_details:"",
                    passport_details:"",
                    profile_image:"",
                    gender_options: [
                        { item: 'A', name: 'Male' },
                        { item: 'B', name: 'Female' },
                    ],
                    married: 'a',
                    married_options: [
                        { value: 'a', text: 'Single' },
                        { value: 'b', text: 'Married' },
                    ],
                },
            }
        },
        methods: {
            scrollMeTo(refName) {
                var element = this.$refs[refName];
                var top = element.offsetTop;
                window.scrollTo(0, top);
            },
            onSubmit($id) {
                console.log($id);
                if($id === 2){
                    if (this.formstate1.$invalid) {
                        return;
                    } else {
                        localStorage.setItem('user_id', this.model.user_id)
                        this.counter = 2;
                    }
                }
            },
            onSubmit1($id) {
                console.log($id);
                if($id === 3){
                    if (this.formstate2.$invalid) {
                        return;
                    } else {
                        console.log(localStorage.getItem('user_id'));
                        this.counter = 3;
                    }
                }
            },
            onSubmit2($id) {
                console.log($id);
                if($id === 3){
                    if (this.formstate3.$invalid) {
                        return;
                    } else {
                        console.log(localStorage.getItem('user_id'));
                        this.counter = 3;
                    }
                }
            },
        },
        mounted: function() {
            console.log('------locale--------',this.$i18n.locale);
        },
        destroyed: function() {
        },
    }
</script>
<style scoped>
    .login-content {
        margin-top: 7%;
        margin-bottom: 7%;
    }
    .vdp-datepicker input, .vdp-datepicker select {
        padding: .75em .5em;
        font-size: 100%;
        border: 1px solid #dcdccc;
        width: 100%;
    }
    .change_link{
        text-align: center;
        color: #73879C;
    }
    .img_backgrond{
        background-image: url("~img/pages/Login-03-01.png");
        background-size:cover;
        background-repeat:no-repeat;
        width: 100%;
        padding: 75px 15px;
        min-height: 980px;
    }

    label{
        font-size: 14px !important;
    }
    ::-webkit-input-placeholder {
        font-size:14px;
    }
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
    .login-title{
        text-align: center;
        font-family: sans-serif;
        font-size: 24px;
    }
    .login-content-f-line{
        border-top: 1px solid #D8D8D8;
        padding-top: 10px;
        text-align: center;
        font: normal 25px Helvetica, Arial, sans-serif;
        letter-spacing: -0.05em;
        line-height: 20px;
        margin: 10px 0 30px;
    }
    .logo-img-footer{
        width: 75px;
        margin-top: -6px;
    }
    .change_link{

    }
    .login-title{
        margin-top: 42px;
        color: #73879C;
    }
    .panel-info {
        border-color: #bce8f1;
    }
    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
    .panel-info>.panel-heading {
        color: #31708f;
        background-color: #d9edf7;
        border-color: #bce8f1;
    }
    .panel-heading {
        padding: 10px 15px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .panel-body {
        padding: 15px;
    }

    .login_content form input[type="text"], .login_content form input[type="email"], .login_content form input[type="password"] {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        -o-border-radius: 3px;
        border-radius: 3px;
        -webkit-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset;
        -moz-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset;
        -ms-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset;
        -o-box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset;
        box-shadow: 0 1px 0 #fff, 0 -2px 5px rgba(0,0,0,0.08) inset;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
        border: 1px solid #c8c8c8;
        color: #777;

        width: 100%;
    }
    .r-content{
        margin: 0 0 20px;
        font-size: 14px;
    }
    .r-content input{
        padding: .75em .5em;
        font-size: 100%;
        border: 1px solid #dcdccc;
        width: 100%;
    }
    .panel-body{
        padding: 15px;
    }
    .r-content input{
        width: 100%;
    }
</style>