<template>
    <div id="admin">
        <Navbar :username="username"></Navbar>
        <div class="admin-wrapper" :class="$store.state.aside ? 'open-sidebar' : ''">
            <Sidebar></Sidebar>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
        <SquareModal></SquareModal>

        <b-modal v-model="$store.state.confirm.value">
        <template>

        </template>
        </b-modal>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue';
import { store } from "../store/index";
import SquareModal from "../components/SquareModal.vue";
export default {
    name: "Admin",
    data() {
        return {
            username: this.$store.state.userInfo.username
        };
    },
    components: { Navbar, Sidebar, SquareModal},
    beforeRouteEnter(to, from, next) {
        store.state.authentication && next()
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

@media (min-width:992px) {
    .open-sidebar .main {
        padding-left: 210px;
    }
}
</style>