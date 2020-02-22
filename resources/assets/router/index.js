import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../store/store'

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
    const publicPages = ['login', 'register', 'forgotpassword','reset_password_token'];
    const authRequired = !publicPages.includes(to.name);
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
        return next('/login');
    }
    if (!authRequired && loggedIn) {
        return next('/');
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
