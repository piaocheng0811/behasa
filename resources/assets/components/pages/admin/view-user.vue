<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-7">
                <div class="card">
                    <div class="card-header card-header-primary" style="height: 100px;">
                        <div class=" card-profile">
                            <div class="card-avatar">
                                <a href="#pablo">
                                    <img class="img" v-bind:src="userData.photo">
                                </a>
                            </div>
                        </div>
                    </div><br>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group bmd-form-group">
                                                <label v-show = "userData.isAdmin == 1" class="bmd-label-floating">Admin ID</label>
                                                <label v-show = "userData.isAdmin == 0" class="bmd-label-floating">Student ID</label>
                                                <label v-show = "userData.isAdmin == 2" class="bmd-label-floating">Supervisor ID</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="form-group bmd-form-group">
                                                <p class="form-control">{{userData.studentId}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group bmd-form-group">
                                                <label class="bmd-label-floating">Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="form-group bmd-form-group">
                                                <p class="form-control">{{userData.name}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group bmd-form-group">
                                                <label class="bmd-label-floating">Gender</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="form-group bmd-form-group">
                                                <p class="form-control">{{userData.gender}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group bmd-form-group">
                                                <label class="bmd-label-floating">User Type</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="form-group bmd-form-group">
                                                <p class="form-control">{{userData.isAdmin}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="userData.isAdmin == 0" class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group bmd-form-group">
                                                <label class="bmd-label-floating">Category</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="form-group bmd-form-group">
                                                <p class="form-control">{{userData.category}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group bmd-form-group">
                                                <label class="bmd-label-floating">Email</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="form-group bmd-form-group">
                                                <p class="form-control">{{userData.email}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show = "userData.isAdmin == 1 || userData.isAdmin == 2">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group bmd-form-group">
                                                    <label class="bmd-label-floating">Nationality</label>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="form-group bmd-form-group">
                                                    <p class="form-control">{{userData.nationality}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group bmd-form-group">
                                                    <label class="bmd-label-floating">Email</label>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="form-group bmd-form-group">
                                                    <p class="form-control">{{userData.email}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group bmd-form-group">
                                                    <label class="bmd-label-floating">Birthday</label>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="form-group bmd-form-group">
                                                    <p class="form-control">{{userData.dob}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group bmd-form-group">
                                                    <label class="bmd-label-floating">Marital Status</label>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="form-group bmd-form-group">
                                                    <p class="form-control">{{userData.maritalStatus}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group bmd-form-group">
                                                    <label class="bmd-label-floating">Passport</label>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="form-group bmd-form-group">
                                                    <p class="form-control">{{userData.passport}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group bmd-form-group">
                                                    <label class="bmd-label-floating">Emirates</label>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="form-group bmd-form-group">
                                                    <p class="form-control">{{userData.emirates}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Action</label><p></p>
                                    <div class="form-group bmd-form-group disable-role">
                                        <button v-if = "userData.status === 1" class="btn btn-danger disable-role-btn" @click="changeRole(0)">Disable this Account</button>
                                        <button v-if = "userData.status === 0" class="btn btn-success disable-role-btn" @click="changeRole(1)">Active this Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script>
    import Admin_ApiService from "../../../common/admin_api.service";
    import Buttons from "../buttons";
    import miniToastr from "mini-toastr";
    Admin_ApiService.init();
    export default {
        name: "view-user",
        components: {Buttons},
        data() {
            return {

                userData:{},
                model: {
                    role: 0,
                    id:this.id,
                    password: ""
                }
            }
        },
        props: [
            'id'
        ],
        mounted: function () {
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

        },
        methods: {
            read(){
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
            },
            changeRole($id) {
                    this.model.role = $id;
                    Admin_ApiService.post('ChangeRole', this.model).then(
                        result=>{
                            let data=result.data;
                            if(data.success === true){
                                console.log(data.userRole);
                                this.read();
                            }
                            else {
                                console.log('------------------',data);
                            }
                        },
                        error=>{
                            console.log('ddd');
                        }
                    )
                }
            }

    }
</script>

<style scoped>
    .card-profile .card-avatar, .card-testimonial .card-avatar {
        margin: -100px 0px;
    }
    .disable-role{
        text-align: center;
    }
    .disable-role-btn{
        font-size: 12px;
        text-transform: initial;
        padding: 10px 15px;
        width: 138px;
    }
</style>