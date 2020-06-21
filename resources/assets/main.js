window.axios = require('axios')
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import VueAnalytics from 'vue-analytics'

// window.axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest'
// }

// Google Analytics

import {i18n} from "common/i18n";
window.$ = require('jquery')
window.JQuery = require('jquery')

const google_analytics_key = store.state.google_analytics_key

if (google_analytics_key && google_analytics_key.length) {

    Vue.use(VueAnalytics, {
        id:google_analytics_key,
        router,
        checkDuplicatedScript: true,
        autoTracking: {
            pageviewTemplate(route) {
                return {
                    page: 'default/' + route.path
                }
            }
        }
    })

}


Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})
