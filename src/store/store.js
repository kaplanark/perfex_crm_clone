import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isAuth: true,
        aside: true,
        isLogin:false,
        userInfo: {
            email: null,
            password:null,
        }
    },
})