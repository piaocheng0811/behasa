<template>
    <div class=" mr-auto ml-auto">
        <div class="wizard-container">
            <div class="card card-wizard active" data-color="rose" id="wizardProfile">
                <div novalidate="novalidate">
                    <div class="user-r-content">
                        <b-card>
                            <div class="row">
                                <div class="col-md-5">
                                    <vue-form :state="formstate">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <tbody>
                                                <tr>
                                                    <td v-if = "userData.isAdmin == 1" class="text-left">Admin ID</td>
                                                    <td v-else-if = "userData.isAdmin == 0" class="text-left">Student ID</td>
                                                    <td v-else = "userData.isAdmin == 2" class="text-left">Supervisor ID</td>
                                                    <td>
                                                        <input  ref="studentId" type="text"  autofocus  class="form-control" id="studentId" :value="userData.studentId" disabled>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-left">Name</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <input ref="name" type="text"   class="form-control" id="name" :value="userData.name" required>
                                                            <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Name is a required field</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-left">Email</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <input ref="email" type="email"  class="form-control" id="email" :value="userData.email" required>
                                                            <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Email is a required field</div>
                                                                <div slot="email">Email is not valid</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-left">Gender</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <b-form-select
                                                                    :options="model.options"
                                                                    value-field="item"
                                                                    text-field="name"
                                                                    class="mb-3 r-content form-control"
                                                                    ref = "gender"
                                                                    id = "gender"
                                                                    :value="userData.gender"
                                                                    required
                                                                    disabled-field="notEnabled"
                                                            ></b-form-select>
                                                            <field-messages name="gender" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Gender is a required field</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>

                                                <tr v-if = "userData.isAdmin === 0">
                                                    <td class="text-left">Category</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <b-form-select
                                                                    v-model="model.category"
                                                                    :options="model.CategoryData"
                                                                    value-field="id"
                                                                    text-field="name"
                                                                    class="mb-3 r-content form-control"
                                                                    ref = "category"
                                                                    id = "category"
                                                                    required
                                                                    disabled-field="notEnabled"
                                                            ></b-form-select>
                                                            <field-messages name="gender" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Category is a required field</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>
                                                <tr v-if = "userData.isAdmin === 1 || userData.isAdmin ===2">
                                                    <td class="text-left">Nationality</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <input type="text" ref = "nationality"  id = "nationality" class="form-control r-content" :value="userData.nationality" required placeholder="Nationality"/>
                                                            <field-messages name="nationality" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Nationality is a required field</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>
                                                <tr v-if = "userData.isAdmin === 1 || userData.isAdmin ===2">
                                                    <td class="text-left">Date of Birth</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <input type="date" ref = "dob"  id = "dob" class="form-control r-content" :value="userData.dob" required placeholder="Select Date"/>
                                                            <field-messages name="dob" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Birthday is a required field</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>
                                                <tr v-if = "userData.isAdmin === 1 || userData.isAdmin ===2">
                                                    <td class="text-left">Marital Status</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <b-form-select
                                                                    :options="model.married_options"
                                                                    value-field="value"
                                                                    text-field="text"
                                                                    class="mb-3 r-content form-control"
                                                                    ref = "married"
                                                                    id = "married"
                                                                    :value="userData.maritalStatus"
                                                                    required
                                                                    disabled-field="notEnabled"
                                                            ></b-form-select>
                                                            <field-messages name="married" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Married is a required field</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>
                                                <tr v-if = "userData.isAdmin === 1 || userData.isAdmin ===2">
                                                    <td class="text-left">Emirates</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <b-form-textarea
                                                                    id="textarea-large"
                                                                    required
                                                                    size="lg"
                                                                    placeholder="Emirates Id Details"
                                                                    class="r-content"
                                                                    ref = "emirates_id_details"
                                                                    :value="userData.emirates"
                                                            ></b-form-textarea>
                                                            <field-messages name="emirates_id_details" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Emirates Id Details is a required field</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>
                                                <tr v-if = "userData.isAdmin === 1 || userData.isAdmin ===2">
                                                    <td class="text-left">Passport</td>
                                                    <td>
                                                        <validate tag="div">
                                                            <b-form-textarea
                                                                    id="textarea-large"
                                                                    required
                                                                    size="lg"
                                                                    placeholder="Passport Details"
                                                                    class="r-content"
                                                                    ref = "passport_details"
                                                                    :value="userData.passport"
                                                            ></b-form-textarea>
                                                            <field-messages name="passport_details" show="$invalid && $submitted" class="text-danger">
                                                                <div slot="required">Passport Details is a required field</div>
                                                            </field-messages>
                                                        </validate>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </vue-form>
                                </div>
                                <div class="col-md-7">
                                    <table class="table table-striped">
                                        <tbody>
                                        <tr>
                                            <td class="text-center">Photo</td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="panel-body r-content">
                                                    <div class="p-3 bg-white shadow rounded-lg">
                                                        <input type="file" name="image" required accept="image/*" @change="setImage" />
                                                        <img v-if = "model.croppedImageSrc == ''" :src="userData.photo" ref = "cropper" width="100" />
                                                        <img v-if = "model.croppedImageSrc" :src="model.croppedImageSrc"  ref = "cropper" width="100" />
                                                        <div v-if="this.imageSrc" class="my-3 d-flex align-items-center justify-content-center mx-auto">
                                                            <vue-cropper class="mr-2 w-50 cropped-image" ref='cropper' :guides="true" :src="imageSrc"></vue-cropper>
                                                            <img class="ml-2 w-50 bg-light" :src="model.croppedImageSrc"/>
                                                        </div>
                                                        <button  class="btn btn-primary btn-fab-mini" v-if="this.imageSrc" @click="cropImage">Crop</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </b-card>
                        <div class="user-register">
                            <input type="number" v-model = "model.isAdmin = 1" style="display: none">
                            <button class="btn btn-success" @click="EditUser()">Save</button>&nbsp;&nbsp;&nbsp;
                            <button class="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- wizard container -->
    </div>
</template>


<script>
    import Vue from 'vue';
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';
    import VueForm from "vue-form";
    import options from "../../../validations/validations";
    import miniToastr from "mini-toastr";
    import 'echarts/lib/component/tooltip';
    import Buttons from "../buttons";
    import Admin_ApiService from "../../../common/admin_api.service";

    Admin_ApiService.init();
    var unsub;
    miniToastr.init();
    Vue.use(VueForm, options);

    export default {
        name: "create-user",
        components: {
            Buttons,
            VueCropper
        },
        props: [
            'id'
        ],
        data() {
            return {
                userData:{},
                role: 1,
                loading: false,
                instances: [],
                imageSrc: "",
                counter: 1,
                AdminPassCodeShower: false,
                formstate: {},
                model: {
                    isAdmin: 0,
                    croppedImageSrc: '',
                    studentId: "",
                    password: "",
                    repeatPassword: "",
                    adminPassCode: "",
                    name: "",
                    email: "",
                    dob: "",
                    nationality: "",
                    emirates_id_details: "",
                    passport_details: "",
                    profile_image: "",
                    gender: "A",
                    options: [
                        {item: 'B', name: 'Male'},
                        {item: 'B', name: 'Female'},
                    ],
                    married: 'a',
                    married_options: [
                        { value: 'a', text: 'Single' },
                        { value: 'b', text: 'Married' },
                    ],
                    category: '1',
                    CategoryData: [],
                    userType: '1',
                    userType_options: [
                        { userType_item: '1', userType_name: 'Admin' },
                        { userType_item: '0', userType_name: 'Student' },
                    ]
                },
            }
        },
        methods: {
            onReady(instance) {
                this.instances.push(instance)
            },
            EditUser() {
                this.model.name = this.$refs['name'].value;
                console.log(this.model.name);
                this.model.studentId = this.$refs['studentId'].value;
                console.log(this.model.studentId);
                this.model.email = this.$refs['email'].value;
                console.log(this.model.email);
                this.model.gender = this.$refs['gender'].value;
                console.log(this.model.gender);
                console.log(this.model.croppedImageSrc);
                if(this.userData.isAdmin === 0){
                    this.model.category = this.$refs['category'].value;
                    console.log(this.model.category);
                }
                if(this.userData.isAdmin === 1 || this.userData.isAdmin ===2){
                    console.log(this.model.userType);
                    this.model.nationality = this.$refs['nationality'].value;
                    console.log(this.model.nationality);
                    this.model.dob = this.$refs['dob'].value;
                    console.log(this.model.dob);
                    this.model.maritalStatus = this.$refs['married'].value;
                    console.log(this.model.maritalStatus);
                    this.model.emirates_id_details = this.$refs['emirates_id_details'].value;
                    console.log(this.model.emirates_id_details);
                    this.model.passport_details = this.$refs['passport_details'].value;
                    console.log(this.model.passport_details);
                }
                console.log('------------end');
                Admin_ApiService.post('EditUser', this.model).then(
                    result=>{
                        let data=result.data;
                        if(data.success === true){
                            console.log(data);
                            miniToastr.success(data.message)
                            console.log(data);
                        }
                        else {
                            miniToastr.error(data.message)
                            console.log(data);
                        }
                    },
                    error=>{
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
        },
        mounted() {
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
        created() {
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
            Admin_ApiService.get(`ViewUser/${this.id}`).then(
                result=>{
                    let data=result.data;
                    if(data.success){
                        console.log('userData',data.userData[0])
                        this.userData = data.userData[0];

                    }
                    else {
                        console.log(data)
                    }
                },
                error=>{
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
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
    }
</script>

<style scoped>

    .row {
        padding: 10px;
    }
    .mb-3{
        margin-bottom: 0px !important;
    }
    .user-register{
        display: flex;
        justify-content: center;

    }
    .user-register button{
        font-size: 12px;
    }

    .nav-tabs .nav-link.active {
        color: #333 !important;
        border-color: #9c27b0 !important;
    }

    .admin-registration {
        width: 296.667px;
        transform: translate3d(-8px, 0px, 0px);
        transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;
        background-color: #e91e63;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4);
        position: absolute;
        text-align: center;
        padding: 12px;
        font-size: 12px;
        text-transform: uppercase;
        -webkit-font-smoothing: subpixel-antialiased;
        top: -6px;
        left: 0;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
    }
    #wizardProfile {
        padding: 20px;
    }
    .card {
        box-shadow: none;
    }
    /*--------------*/
    h2 {
        font-family: "Roboto", sans-serif;
        font-size: 26px;
        line-height: 1;
        color: #454cad;
        margin-bottom: 0;
    }
    p {
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        color: #5f6982;
    }
    .text-center{
        padding: 20px;
    }
</style>
