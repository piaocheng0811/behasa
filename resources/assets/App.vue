<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import Vue from "vue";
import BootstrapVue from 'bootstrap-vue';
import ToggleButton from 'vue-js-toggle-button'
import {i18n} from "./common/i18n";


Vue.use(ToggleButton)
Vue.use(BootstrapVue);
export default {
    name: 'app',
    mounted() {
        var user=localStorage.getItem('user');
        if(user)
            this.$store.commit('changeUser',JSON.parse(user));
        var admin=localStorage.getItem('admin');
        if(admin)
            this.$store.commit('changeUser',JSON.parse(user));

        const customerOption_String=localStorage.getItem('customerOption');

        if(customerOption_String){
            let customerOption=JSON.parse(customerOption_String);
            if(typeof customerOption['language_code']!='undefined'){
                i18n.locale=customerOption['language_code'];
                i18n.setLocaleMessage(customerOption['language_code'],customerOption['messages'])
                this.$store.commit('updateCustomerOption', customerOption);
            }
        }
    }
}
</script>
<!--<style lang="scss" src="assets/sass/bootstrap/bootstrap.scss"></style>-->
<!--<style src="font-awesome/css/font-awesome.css"></style>-->
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>

<style>
    .section-title{
        font-size:25px;
        color:#666;
        border-bottom:2px solid #bbb;
        margin:0 10px;
        padding: 10px 10px;
    }
    .note-description-text{
        font-size:18px;
    }
    .full-width-modal{
        position: fixed;
        width:100%;
        height:100%;
        left:0;
        top:0;
        z-index:2000;
        background:#fdfdfd;
    }
    .full-modal-header{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        padding:10px;
    }
    .background-1{
        background:#777;
    }
    .text-size-1{
        font-size:21px;

    }
    .grid-column-2{
        display:grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
    }
    .text-size-2{
        font-size:16px;
    }
    .full-modal-footer{
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
    }

    .button-type-1{
        font-size:17px;
        border:2px solid white;
        padding:5px 10px;
        font-weight:bold;
        background: transparent;
        color:white;
        min-width:120px;
        letter-spacing: 2px;
        cursor:pointer;
    }
    .button-type-1:hover{
        border-color:yellow;
        color:yellow;
    }
    .logo-img{
        height:65px;
        margin-left: -40px;
    }

</style>
