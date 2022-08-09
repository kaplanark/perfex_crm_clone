<template>
    <div id="admin">
        <Navbar></Navbar>
        <div class="admin-wrapper" :class="$store.state.aside ? 'open-sidebar' : ''">
            <Sidebar></Sidebar>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue';
import { store } from "./../store/store";
export default {
    name: "Admin",
    data() {
        return {};
    },
    components: { Navbar, Sidebar },
    beforeRouteEnter(to, from, next) {
        store.state.isLogin && next()
    },
    beforeRouteLeave(to, form, next) {
        store.state.isLogin = false;
        next();
    }
}
</script>
<style scoped>
#admin {
    background-color: #e3e8ee;
    min-height: 100vh;
}

.admin-wrapper {
    position: relative;
}

.main {
    transition: all .5s ease 0s;
    min-height: calc(100vh - 86px);
}

.open-sidebar .main {
    padding-left: 210px;
}
</style>