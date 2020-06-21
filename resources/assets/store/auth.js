import JwtService from "common/jwt.service";

const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

const state = {
    logged: !!window.localStorage.getItem('user')
}

const mutations = {
    [types.LOGIN](state) {
        state.logged = true
    },

    [types.LOGOUT](state) {
        state.logged = false
    }
}

const getters = {
    isLogged: state => state.logged
}

const actions = {
    login({commit}, data) {
        JwtService.saveUser('user',data);
    },
    logout({commit}) {
        JwtService.destroyUser('user');
    },
    adminLogin({commit}, data) {
        JwtService.saveUser('user',data);

    },
    adminLogout({commit}) {
        JwtService.destroyUser('user');
    },

}

export default {
    state,
    mutations,
    getters,
    actions
}
