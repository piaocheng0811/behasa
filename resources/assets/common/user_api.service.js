import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "./jwt.service";

const User_ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = 'api/user/';
        Vue.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    },
    setHeader() {
        let user_data=JwtService.getUser('user')
        Vue.axios.defaults.headers.common["user_id"] = `${user_data.user_id}`;
        Vue.axios.defaults.headers.common["password"] = `${user_data.password}`;
    },
    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        if (JwtService.getUser() !== null) {
            this.setHeader();
        }
        let params = '';
        if (!_.isNaN(slug)) {
            params = '?' + slug;
        }
        if (_.isObject(slug)) {
            params = '?' + _.keys(slug).filter(key => (slug[key] != null && slug[key] !== 'null'))
                .map(key => key + '=' + slug[key]).join('&');
        }
        return Vue.axios.get(`${resource}${params}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    post(resource, params) {
        console.log(Vue.axios);
        if (JwtService.getUser() !== null) {
            this.setHeader();
        }
        return Vue.axios.post(`${resource}`, params);
    },
};

export default User_ApiService;
