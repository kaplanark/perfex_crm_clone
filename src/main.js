import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from "./store/store";

//TODO mport axios from 'axios'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false


const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    next()
  } else {
    next('/authentication')
  }
})

Vue.filter('toLowerCase', (val) => {
  return val.toLowerCase();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
