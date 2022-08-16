import Admin from './pages/Admin.vue'
import Login from './pages/Login.vue'
import Dashborad from './layouts/Dashborad.vue'
import UserLogin from './pages/UserLogin.vue'

export const routes = [
    { path: '/', name: 'userlogin', component: UserLogin, meta: { requiresAuth: true } },
    {
        path: '/admin', name: 'admin', redirect: '/dashboard', component: Admin, meta: { requiresAuth: true }, children: [
            { path: '/dashboard', name: 'dashborad', component: Dashborad, meta: { requiresAuth: true } }
        ]
    },
    { path: '/authentication', name: 'authentication', component: Login, meta: { requiresAuth: true } },
    { path: '*', redirect: '/' }
];