<template>
    <div class=" mr-auto ml-auto">
        <div class="wizard-container">
            <div class="card card-wizard active" data-color="rose" id="wizardProfile">
                <div novalidate="novalidate">
                    <div class="user-r-content">
                        <b-tabs>
                            <b-tab title="Admin" active>
                                <b-card>
                                    <div class="row">
                                        <div class="col-md-5">
                                            <vue-form :state="formstate1">
                                                <div class="table-responsive">
                                                    <table class="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td class="text-left">Admin ID</td>
                                                            <td>
                                                                <input v-model="model.isAdmin1 = 1" name = "isAdmin1" type="number" style="display: none">
                                                                <validate tag="div">
                                                                    <input v-model="model.studentId" name="studentId" type="text"  autofocus  class="form-control" id="studentId" required>
                                                                    <field-messages name="studentId" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">User ID is a required field</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Name</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input v-model="model.name" name="name" type="text"   class="form-control" id="name" required>
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
                                                                    <input v-model="model.email" name="email" type="email"   class="form-control" id="email" required>
                                                                    <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Email is a required field</div>
                                                                        <div slot="email">Email is not valid</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Passcode</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input v-model="model.password" name="password" type="password" required placeholder="Password" class="form-control" minlength="4"  maxlength="10" id="password"/>
                                                                    <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Password is required</div>
                                                                        <div slot="minlength">Password should be atleast 4 characters long</div>
                                                                        <div slot="maxlength">Password should be atmost 10 characters long</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Gender</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Nationality</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input type="text" v-model="model.nationality" name = "nationality"  id = "nationality" class="form-control r-content" required placeholder="Nationality"/>
                                                                    <field-messages name="nationality" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Nationality is a required field</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Date of Birth</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input type="date" v-model="model.dob" name = "dob"  id = "dob" class="form-control r-content" required placeholder="Select Date"/>
                                                                    <field-messages name="dob" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Birthday is a required field</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Marital Status</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Emirates</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Passport</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </vue-form>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="panel-body r-content">
                                                <div class="p-3 bg-white shadow rounded-lg">
                                                    <input type="file" name="image" required accept="image/*" @change="setImage" />
                                                    <img :src="imageSrc" width="100" />
                                                    <div v-if="this.imageSrc" class="my-3 d-flex align-items-center justify-content-center mx-auto">
                                                        <vue-cropper class="mr-2 w-50 cropped-image" ref='cropper' :guides="true" :src="imageSrc"></vue-cropper>
                                                        <img class="ml-2 w-50 bg-light" :src="model.croppedImageSrc"/>
                                                    </div>
                                                    <button  class="btn btn-primary btn-fab-mini" v-if="this.imageSrc" @click="cropImage">Crop</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-card>
                                <div class="user-register">
                                    <input type="number" v-model = "model.isAdmin = 1" style="display: none">
                                    <button class="btn btn-success" @click="CreateUser(1)">Register</button>&nbsp;&nbsp;&nbsp;
                                    <button class="btn btn-danger">Cancel</button>
                                </div>
                            </b-tab>
                            <b-tab title="Supervisor">
                                <b-card>
                                    <div class="row">
                                        <div class="col-md-5">
                                            <vue-form :state="formstate2">
                                                <div class="table-responsive">
                                                    <table class="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td class="text-left">Supervisor ID</td>
                                                            <td>
                                                                <input v-model="model.isAdmin2 = 2" type="number" name = "isAdmin2" style="display: none">
                                                                <validate tag="div">
                                                                    <input v-model="model.studentId" name="studentId" type="text"  autofocus  class="form-control" id="studentId" required>
                                                                    <field-messages name="studentId" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">User ID is a required field</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Name</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input v-model="model.name" name="name" type="text"   class="form-control" id="name" required>
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
                                                                    <input v-model="model.email" name="email" type="email"   class="form-control" id="email" required>
                                                                    <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Email is a required field</div>
                                                                        <div slot="email">Email is not valid</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Passcode</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input v-model="model.password" name="password" type="password" required placeholder="Password" class="form-control" minlength="4"  maxlength="10" id="password"/>
                                                                    <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Password is required</div>
                                                                        <div slot="minlength">Password should be atleast 4 characters long</div>
                                                                        <div slot="maxlength">Password should be atmost 10 characters long</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Gender</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Nationality</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input type="text" v-model="model.nationality" name = "nationality"  id = "nationality" class="form-control r-content" required placeholder="Nationality"/>
                                                                    <field-messages name="nationality" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Nationality is a required field</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Date of Birth</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input type="date" v-model="model.dob" name = "dob"  id = "dob" class="form-control r-content" required placeholder="Select Date"/>
                                                                    <field-messages name="dob" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Birthday is a required field</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Marital Status</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Emirates</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Passport</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </vue-form>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="panel-body r-content">
                                                <div class="p-3 bg-white shadow rounded-lg">
                                                    <input type="file" name="image" required accept="image/*" @change="setImage" />
                                                    <img :src="imageSrc" width="100" />
                                                    <div v-if="this.imageSrc" class="my-3 d-flex align-items-center justify-content-center mx-auto">
                                                        <vue-cropper class="mr-2 w-50 cropped-image" ref='cropper' :guides="true" :src="imageSrc"></vue-cropper>
                                                        <img class="ml-2 w-50 bg-light" :src="model.croppedImageSrc"/>
                                                    </div>
                                                    <button  class="btn btn-primary btn-fab-mini" v-if="this.imageSrc" @click="cropImage">Crop</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-card>
                                <div class="user-register">
                                    <input type="number" v-model = "model.isAdmin = 2" style="display: none">
                                    <button class="btn btn-success" @click="CreateUser(2)">Register</button>&nbsp;&nbsp;&nbsp;
                                    <button class="btn btn-danger">Cancel</button>
                                </div>
                            </b-tab>
                            <b-tab title="Student">
                                <b-card>
                                    <div class="row">
                                        <div class="col-md-5">
                                            <vue-form :state="formstate3">
                                                <div class="table-responsive">
                                                    <table class="table table-striped">
                                                        <tbody>
                                                        <tr>
                                                            <td class="text-left">Student ID</td>
                                                            <td>
                                                                <input v-model="model.isAdmin0 = 0" name = "isAdmin0" type="number" style="display: none">
                                                                <validate tag="div">
                                                                    <input v-model="model.studentId" name="studentId" type="text"  autofocus  class="form-control" id="studentId" required>
                                                                    <field-messages name="studentId" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">User ID is a required field</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Name</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <input v-model="model.name" name="name" type="text"   class="form-control" id="name" required>
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
                                                                    <input v-model="model.email" name="email" type="email"   class="form-control" id="email" required>
                                                                    <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Email is a required field</div>
                                                                        <div slot="email">Email is not valid</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Category</td>
                                                            <td>
                                                                <validate tag="div">
                                                                    <b-form-select
                                                                            v-model="model.category"
                                                                            :options="model.CategoryData"
                                                                            value-field="id"
                                                                            text-field="name"
                                                                            class="mb-3 r-content form-control"
                                                                            name = "gender"
                                                                            id = "gender"
                                                                            required
                                                                            disabled-field="notEnabled"
                                                                    ></b-form-select>
                                                                    <field-messages name="gender" show="$invalid && $submitted" class="text-danger">
                                                                        <div slot="required">Category is a required field</div>
                                                                    </field-messages>
                                                                </validate>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Gender</td>
                                                            <td>
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
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </vue-form>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="panel-body r-content">
                                                <div class="p-3 bg-white shadow rounded-lg">
                                                    <input type="file" name="image" required accept="image/*" @change="setImage" />
                                                    <img :src="imageSrc" width="100" />
                                                    <div v-if="this.imageSrc" class="my-3 d-flex align-items-center justify-content-center mx-auto">
                                                        <vue-cropper class="mr-2 w-50 cropped-image" ref='cropper' :guides="true" :src="imageSrc"></vue-cropper>
                                                        <img class="ml-2 w-50 bg-light" :src="model.croppedImageSrc"/>
                                                    </div>
                                                    <button  class="btn btn-primary btn-fab-mini" v-if="this.imageSrc" @click="cropImage">Crop</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-card>
                                <div class="user-register">
                                    <input type="number" v-model = "model.isAdmin = 0" style="display: none">
                                    <button class="btn btn-success" @click="CreateUser(0)">Register</button>&nbsp;&nbsp;&nbsp;
                                    <button class="btn btn-danger">Cancel</button>
                                </div>
                            </b-tab>
                        </b-tabs>

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
        data() {
            return {
                role: 1,
                loading: false,
                instances: [],
                imageSrc: "",
                counter: 1,
                AdminPassCodeShower: false,
                value: '',
                formstate1: {},
                formstate2: {},
                formstate3: {},


                model: {
                    isAdmin: 0,
                    croppedImageSrc: "",
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
                        {item: 'A', name: 'Male'},
                        {item: 'B', name: 'Female'},
                    ],
                    married: 'a',
                    maritalStatus: [
                        { value: 'a', text: 'Single' },
                        { value: 'b', text: 'Married' },
                    ],
                    category: '1',
                    CategoryData: [],
                },
            }
        },
        methods: {
            onReady(instance) {
                this.instances.push(instance)
            },
            CreateUser($id) {
                if ($id === 1) {
                    console.log('------------',$id);
                    if (this.formstate1.$invalid) {
                        return;
                    }
                    else {
                        var image = new Image();
                        image.src = $('.bg-light').attr('src');
                        this.model.isAdmin = $id;
                        Admin_ApiService.post('CreateUser', this.model).then(
                            result=>{
                                let data=result.data;
                                if(data.success === true){
                                    miniToastr.success(data.message)
                                    console.log(data);
                                }
                                else {
                                    miniToastr.error(data.message)
                                    console.log('------------',data);
                                }
                            },
                            error=>{
                                let data=result.data;
                                console.log('error',data);
                            }
                        )

                    }
                }
                if ($id === 2) {
                    console.log('------------',$id);
                    this.model.isAdmin = $id;
                    if (this.formstate2.$invalid) {
                        return;
                    } else {
                        var image = new Image();
                        image.src = $('.bg-light').attr('src');
                        Admin_ApiService.post('CreateUser', this.model).then(
                            result=>{
                                let data=result.data;
                                if(data.success === true){
                                    miniToastr.success(data.message)
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
                    }
                }
                if ($id === 0) {
                    console.log('------------',$id);
                    this.model.isAdmin = $id;
                    if (this.formstate3.$invalid) {
                        return;
                    } else {
                        var image = new Image();
                        image.src = $('.bg-light').attr('src');
                        Admin_ApiService.post('CreateUser', this.model).then(
                            result=>{
                                let data=result.data;
                                if(data.success === true){
                                    miniToastr.success(data.message)

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
                    }
                }
            },
            submit_profile() {

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
            showAdminPassCodeForm($status) {
                console.log($status);
                if ($status === true) {
                    this.AdminPassCodeShower = $status;
                } else {
                    this.AdminPassCodeShower = $status;
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
            // let externalScript = document.createElement('script')
            // externalScript.setAttribute('src', "https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/jquery.bootstrap-wizard.js")
            // document.head.appendChild(externalScript)

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

    .uploader {
        display: block;
        clear: both;
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
    }
    .uploader label {
        float: left;
        clear: both;
        width: 100%;
        padding: 2rem 1.5rem;
        text-align: center;
        background: #fff;
        border-radius: 7px;
        border: 3px solid #eee;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .uploader label:hover {
        border-color: #454cad;
    }
    .uploader label.hover {
        border: 3px solid #454cad;
        box-shadow: inset 0 0 0 6px #eee;
    }
    .uploader label.hover #start i.fa {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        opacity: 0.3;
    }
    .uploader #start {
        float: left;
        clear: both;
        width: 100%;
    }
    .uploader #start.hidden {
        display: none;
    }
    .uploader #start i.fa {
        font-size: 50px;
        margin-bottom: 1rem;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
    .uploader #response {
        float: left;
        clear: both;
        width: 100%;
    }
    .uploader #response.hidden {
        display: none;
    }
    .uploader #response #messages {
        margin-bottom: .5rem;
    }
    .uploader #file-image {
        display: inline;
        margin: 0 auto .5rem auto;
        width: auto;
        height: auto;
        max-width: 180px;
    }
    .uploader #file-image.hidden {
        display: none;
    }
    .uploader #notimage {
        display: block;
        float: left;
        clear: both;
        width: 100%;
    }
    .uploader #notimage.hidden {
        display: none;
    }
    .uploader progress,
    .uploader .progress {
        display: inline;
        clear: both;
        margin: 0 auto;
        width: 100%;
        max-width: 180px;
        height: 8px;
        border: 0;
        border-radius: 4px;
        background-color: #eee;
        overflow: hidden;
    }
    .uploader .progress[value]::-webkit-progress-bar {
        border-radius: 4px;
        background-color: #eee;
    }
    .uploader .progress[value]::-webkit-progress-value {
        background: -webkit-gradient(linear, left top, right top, from(#393f90), color-stop(50%, #454cad));
        background: linear-gradient(to right, #393f90 0%, #454cad 50%);
        border-radius: 4px;
    }
    .uploader .progress[value]::-moz-progress-bar {
        background: linear-gradient(to right, #393f90 0%, #454cad 50%);
        border-radius: 4px;
    }
    .uploader input[type="file"] {
        display: none;
    }
    .uploader div {
        margin: 0 0 .5rem 0;
        color: #5f6982;
    }
    .uploader .btn {
        display: inline-block;
        margin: .5rem .5rem 1rem .5rem;
        clear: both;
        font-family: inherit;
        font-weight: 700;
        font-size: 14px;
        text-decoration: none;
        text-transform: initial;
        border: none;
        border-radius: .2rem;
        outline: none;
        padding: 0 1rem;
        height: 36px;
        line-height: 36px;
        color: #fff;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        box-sizing: border-box;
        background: #454cad;
        border-color: #454cad;
        cursor: pointer;
    }


</style>


<!--<style src="assets/css/widgets.css" scoped></style>-->
