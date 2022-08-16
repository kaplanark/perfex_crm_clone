import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        aside: true,
        authentication: false,
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