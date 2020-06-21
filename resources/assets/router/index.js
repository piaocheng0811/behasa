import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../store/store'
import {i18n} from "../common/i18n";

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
    store.commit("routeChange", "start")
    if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0
    } else if (document.documentElement) {
        document.documentElement.scrollTop = 0
    }
    const userPublicPages = [
        'login', 'register', 'forgotpassword','reset_password_token'
    ];
    const adminPublicPages = [
        'login', 'register', 'forgotpassword','reset_password_token'
    ];
    const supervisorPublicPages = [
        'supervisor/login', 'supervisor/register', 'supervisor/forgotpassword','supervisor/reset_password_token'
    ];
    const userAuthRequired = !userPublicPages.includes(to.name);// only admin route
    const adminAuthRequired = !adminPublicPages.includes(to.name); // only admin route
    const supervisorAuthRequired = !supervisorPublicPages.includes(to.name);
    const is_admin_route=to.path.includes('admin');
    const is_supervisor_route=to.path.includes('supervisor');

    const user = JSON.parse(localStorage.getItem('user'));

    if (userAuthRequired && !is_admin_route && !is_supervisor_route && !user) {
        return next('/login');
    }
    if (!userAuthRequired && user && (!is_admin_route && !is_supervisor_route)) { // if user logged in
        if(this.$store.state.customer_option.text_language!='')
            return next('/choose-option')
        return next('/');
    }

    if (adminAuthRequired && is_admin_route && (!user || user.isAdmin !==1)) {
        return next('/admin/login');
    }
    if (!adminAuthRequired && user && is_admin_route && (user.isAdmin ===1)) {
        return next('/admin');
    }
    next();
})


router.afterEach((to, from) => {
    if (to.meta.title) {
        document.title = to.meta.title + " - " + store.site_name
        store.commit('changePageTitle', to.meta.title)
        store.commit("routeChange", "end")
        if (window.innerWidth <= 992) {
            store.commit('left_menu', "close")
        } else {
            store.commit('left_menu', "open")
        }
    }
})
export default router
