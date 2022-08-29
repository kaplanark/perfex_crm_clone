import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        aside: true,
        confirm:{
            value:false,
            next:false
        },
        authentication: true,
        userInfo: {
            username: null,
            email: null,
            password: null,
        }
    },
    getters: {
        isQuit(state) {
            return state.authentication = false;
        },
        isLogin(state) {
            return state.authentication = true;
        }
    }
})