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
                    <h3 class="login-title">Create Account</h3>
                    <vue-form v-show = "counter === 1" :state="formstate1" @submit.prevent="onSubmit(2)">
                        <div  class="panel panel-info">
                            <div class="panel-heading">Choose your account</div>
                            <div class="panel-body r-content">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.studentId" name="studentId" type="text"  autofocus placeholder="Student ID" class="form-control" id="studentId" required>
                                        <field-messages name="studentId" show="$invalid && $submitted" class="text-danger">
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
                                <div class="form-group" v-show = "AdminPassCodeShower === true">
                                    <div class="admin-passCode-txt">
                                        <span @click="showAdminPassCodeForm(false)" class="admin-passCode-close">x</span>
                                        <p>Enter admin password for instant login:</p>
                                    </div>
                                    <input v-model="model.adminPassCode" name="adminPassCode" type="password" required placeholder="Admin PassCode" class="form-control"  id="adminPassCode">
                                </div>
                                <div class="pull-right   r-content">
                                    <button type="submit" class="btn btn-primary btn-sm">Next</button> &nbsp;
                                    <a href="javascript:void(0)" @click="showAdminPassCodeForm(true)">Instant Login</a>
                                </div>
                            </div>
                        </div>
                        <h1></h1>
                    </vue-form>
                    <vue-form v-show = "counter === 2" :state="formstate2" @submit.prevent="onSubmit(3)">
                        <div class="panel panel-info">
                            <div class="panel-heading">Enter your profile info</div>
                            <div class="panel-body r-content">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.first_name" name="first_name" type="text" placeholder="First Name" class="form-control" id="first_name" required>
                                        <field-messages name="first_name" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">First Name is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.last_name" name="last_name" type="text"   placeholder="Last Name" class="form-control" id="last_name" required>
                                        <field-messages name="last_name" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Last Name is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.email" name="email" type="email"  placeholder="Email" class="form-control" id="email" required>
                                        <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Email is a required field</div>
                                            <div slot="email">Email is not valid</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="form-group">
                                    <validate tag="div">
                                        <b-form-select
                                                v-model="model.gender"
                                                :options="model.options"
                                                value-field="item"
                                                text-field="name"
                                                class="mb-3 r-content form-control"
                                                name = "gender"
                                                id = "gender"
                                                required
                                                disabled-field="notEnabled"
                                        ></b-form-select>
                                        <field-messages name="gender" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Gender is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="form-group">
                                    <validate tag="div">
                                        <input type="text" v-model="model.nationality" name = "nationality"  id = "nationality" class="form-control r-content" required placeholder="Nationality"/>
                                        <field-messages name="nationality" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Nationality is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="form-group">
                                    <validate tag="div">
                                        <input type="date" v-model="model.dob" name = "dob"  id = "dob" class="form-control r-content" required placeholder="Select Date"/>
                                        <field-messages name="dob" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Birthday is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="form-group">
                                    <validate tag="div">
                                        <b-form-select
                                                v-model="model.married"
                                                :options="model.maritalStatus"
                                                value-field="value"
                                                text-field="text"
                                                class="mb-3 r-content form-control"
                                                name = "married"
                                                id = "married"
                                                required
                                                disabled-field="notEnabled"
                                        ></b-form-select>
                                        <field-messages name="married" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Married is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="form-group">
                                    <validate tag="div">
                                        <b-form-textarea
                                                v-model="model.emirates_id_details"
                                                id="textarea-large"
                                                required
                                                size="lg"
                                                placeholder="Emirates Id Details"
                                                class="r-content"
                                                name = "emirates_id_details"
                                        ></b-form-textarea>
                                        <field-messages name="emirates_id_details" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Emirates Id Details is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="form-group">
                                    <validate tag="div">
                                        <b-form-textarea
                                                v-model="model.passport_details"
                                                id="textarea-large"
                                                required
                                                size="lg"
                                                placeholder="Passport Details"
                                                class="r-content"
                                                name = "passport_details"
                                        ></b-form-textarea>
                                        <field-messages name="passport_details" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Passport Details is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                                <div class="pull-right   r-content">
                                    <button type="submit" class="btn btn-primary btn-sm" >Next</button>
                                </div>
                            </div>
                        </div>
                        <h1></h1>

                    </vue-form>
                    <div v-show = "counter === 3">
                        <div  class="panel panel-info" >
                            <div class="panel-heading">Choose your profile pic</div>
                            <div class="panel-body r-content">

                                    <div class="p-3 bg-white shadow rounded-lg">
                                        <input type="file" name="image" required accept="image/*" @change="setImage" />

                                        <!-- Image previewer -->
                                        <img :src="imageSrc" width="100" />

                                        <!-- Cropper container -->
                                        <div v-if="this.imageSrc" class="my-3 d-flex align-items-center justify-content-center mx-auto">
                                            <vue-cropper class="mr-2 w-50 cropped-image" ref='cropper' :guides="true" :src="imageSrc"></vue-cropper>
                                            <!-- Cropped image previewer -->
                                            <img class="ml-2 w-50 bg-light" :src="model.croppedImageSrc"/>
                                        </div>
                                        <button v-if="this.imageSrc" @click="cropImage">Crop</button>

                                    </div>

                                <div class="pull-right   r-content">
                                    <button type="submit" class="btn btn-primary btn-sm"  @click="submit_profile">Finish</button> &nbsp;
                                </div>
                            </div>
                        </div>
                        <h1></h1>
                    </div>
                </div>

                <p class="change_link">Already a member?<router-link to="/login" data-ui-sref="login" class="to_register ng-scope"> Log in</router-link></p>
                <div class="login-content-f-line">
                    <div>
                        <img src="~img/symbol.png" class="logo-img-footer">
                        <span>Belhasa Driving Center</span>
                        <div id = "error_message"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';
    import Vue from 'vue'
    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    import User_ApiService from "common/user_api.service";
    import Datepicker from 'vuejs-datepicker'
    import miniToastr from "mini-toastr";
    miniToastr.init();

    User_ApiService.init();
    Vue.use(VueForm, options);
    export default {
        components: {
            VueCropper
        },
        name: "register",
        data: function() {
            return {
                imageSrc: "",
                counter:1,
                AdminPassCodeShower:false,
                value: '',
                formstate: {},
                formstate1: {},
                formstate2: {},

                model: {
                    croppedImageSrc: "",
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
                    gender: "A",
                    options: [
                        { item: 'A', name: 'Male' },
                        { item: 'B', name: 'Female' },
                    ],
                    married: 'a',
                    maritalStatus: [
                        { value: 'a', text: 'Single' },
                        { value: 'b', text: 'Married' },
                    ],
                },
            }
        },
        methods: {
            onSubmit($id) {
                console.log($id);
                if($id === 2){
                    if (this.formstate1.$invalid) {
                        return;
                    } else {
                        console.log(localStorage.setItem('studentId', this.model.studentId));
                        this.counter = 2;
                    }
                }
                if($id === 3){
                    if (this.formstate2.$invalid) {
                        return;
                    } else {
                        console.log(localStorage.getItem('studentId'));
                        this.counter = 3;
                    }
                }
            },
            submit_profile(){
                var image = new Image();
                image.src = $('.bg-light').attr('src');

                User_ApiService.post('userRegister', this.model).then(
                    result=>{
                        let data=result.data;
                        if(data.success === true){
                            miniToastr.success(data.message)
                            this.$router.push('/');
                            console.log(data);
                        }
                        else {
                            miniToastr.error(data.message)
                            console.log(data);
                        }
                    },
                    error=>{
                        let data=result.data;
                        console.log('error',data);
                    }
                )
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
                        // this.$refs.cropper.replace(event.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert('Sorry, FileReader API not supported');
                }
            },
            cropImage() {
                // Get image data for post processing, e.g. upload or setting image src
                this.model.croppedImageSrc = this.$refs.cropper.getCroppedCanvas().toDataURL();
            },
            showAdminPassCodeForm($status){
                console.log($status);
                if($status === true){
                    this.AdminPassCodeShower = $status;
                }
                else{
                    this.AdminPassCodeShower = $status;
                }
            },

        },
        created() {
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
<style scoped>
    .admin-passCode-close{
        float: right;
        cursor: pointer;
        color: #73879C;
        font-size: 13px;
        margin-right: 3px;
    }
    .admin-passCode-txt{
        color: #73879C;
        font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.471;
    }
    .bg-info-card .btn-info{
        transition: initial;
    }
    .card-body .form-control{
        transition: initial;
    }
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
<style>
    .custom-select{
        background: none;
    }
</style>