import Admin from './pages/Admin.vue'
import Login from './pages/Login.vue'
import Dashborad from './layouts/Dashborad.vue'
import UserLogin from './pages/UserLogin.vue'
import { store } from './store/store'

const isAuth = store.state.isAuth;

export const routes = [
    { path: '/', name: 'userlogin', component: UserLogin, meta: { requiresAuth: true } },
    {
        path: '/admin', name: 'admin', redirect: '/dashboard', component: Admin, meta: { requiresAuth: isAuth }, children: [
            { path: '/dashboard', name: 'dashborad', component: Dashborad, meta: { requiresAuth: isAuth } }
        ]
    },
    { path: '/authentication', name: 'authentication', component: Login, meta: { requiresAuth: true } },
    { path: '*', redirect: '/' }
];