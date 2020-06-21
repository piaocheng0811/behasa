<template>
    <div>
        <div>
<!--            <div class="text-center p-3 widget_social_icons box_shadow admin_txt">-->
<!--                <div>Welcome &nbsp;&nbsp;&nbsp;  </div>-->
<!--                <p class="profile-name"> {{this.$store.state.user.name}}!</p>-->
<!--            </div>-->
        </div><br><br>
        <div class="row mb-4">
            <div class="col-lg-4  col-sm-4 mb-4">
                <b-card class="round_box widget_social_icon">
                    <div class="card-icon">
                        <i class="fa fa-user-o display-icon"></i>
                    </div>
                    <p class="card-category">Total Students</p>
                    <h3 class="card-title">{{this.getData.usersNum}}</h3>
                    <div class="card-footer">
                        <div class="stats">
                            <i class="material-icons text-danger">{{this.getData.requestedUsersNum}}</i>
                            <a href="#pablo">Requests waiting for Approval</a>
                        </div>
                    </div>
                </b-card>
            </div>

            <div class="col-lg-4  col-sm-4 mb-4">
                <b-card class="round_box widget_social_icon">
                    <div class="card-icon">
                        <i class="fa fa-question-circle-o display-icon"></i>
                    </div>
                    <p class="card-category">Questions</p>
                    <h3 class="card-title">{{this.getData.questionsNum}}</h3>
                    <div class="card-footer">
                        <div class="stats">
                            <a href="#pablo">View more...</a>
                        </div>
                    </div>
                </b-card>
            </div>

            <div class="col-lg-4  col-sm-4 mb-4">
                <b-card class="round_box widget_social_icon">
                    <div class="card-icon">
                        <i class="fa fa-pencil-square-o display-icon"></i>
                    </div>
                    <p class="card-category">Test Results</p>
                    <h3 class="card-title">{{this.getData.testResultsNum}}</h3>
                    <div class="card-footer">
                        <div class="stats">
                            <a href="#pablo">View more...</a>
                        </div>
                    </div>
                </b-card>
            </div>


        </div>

    </div>
</template>
<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';
    import Admin_ApiService from '../../common/admin_api.service';
    Admin_ApiService.init();
    Vue.use(VueAwesomeSwiper);
    var unsub;
    export default {
        name: "index",
        components: {

        },
        data() {
            return {
                getData:{'usersNum':0,'requestedUsersNum':0, 'questionsNum':0, 'testResultsNum':0}
            }
        },

        mounted: function () {
            Admin_ApiService.post('GetUsersData').then(
                result=>{
                    let data=result.data;
                    if(data.success){
                        this.getData = data;
                        console.log('getUsersData',this.getData);
                    }
                },
                error=>{
                    console.log('error')
                }
            )
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

        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
        beforeRouteBefore  () {

        },
        methods: {

        },
        created() {

        }
    }
</script>
<style scoped>
    .card-category{
        color: #999;
        font-size: 20px;
        text-align: right;
    }
    .card-title{
        color: #3c4858;
        text-align: right;
        font-size: 32px;
    }
    .card-footer{
        background: white;
        margin-top: 20px;
    }
    .stats{
        text-align: center;
        font-size: 18px;
    }
    .card-icon{
        border-radius: 3px;
        padding: 24px;
        margin-top: -34px;
        margin-right: 15px;
        float: left;
        box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0,.4);
        background: linear-gradient(60deg,#ffa726,#fb8c00);
    }
    .display-icon{
        color: whitesmoke;
        font-size: 40px;
        line-height: 56px;
        width: 56px;
        height: 56px;
        text-align: center;
    }





    /*.widget_social_icons {*/
    /*    background-color: #fff;*/
    /*    border-radius: 3px;*/
    /*}*/
    /*.admin_txt{*/
    /*    display: flex;*/
    /*    font-size: 20px;*/
    /*    font-family: sans-serif;*/
    /*}*/
    /*.fb_text {*/
    /*    color: #215fe2;*/
    /*    font-size: 28px;*/
    /*}*/
    /*.box_shadow {*/
    /*    box-shadow: 2px 2px 5px 0px #ccc;*/
    /*}*/
    /*.widget_social_inner1{*/
    /*    display: flex; justify-content: center;*/
    /*}*/

    /*.text_size{*/
    /*    font-size: 30px; margin-left: 10px;font-family: sans-serif;*/
    /*}*/
    /*.admin-top-text{*/
    /*    font-size: 36px;     font-family: sans-serif;*/
    /*    text-align: center;*/
    /*}*/
    /*.admin-mid-text{*/
    /*    font-size: 20px; font-style: italic;*/
    /*    text-align: center;*/
    /*}*/
    /*.admin-mid-text span:first-of-type{*/
    /*    font-family: sans-serif;*/


    /*}*/
    /*.profile-name{*/
    /*    margin-bottom: 0;*/
    /*}*/

</style>

