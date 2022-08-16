<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="aside" :class="$store.state.aside ? 'aside-on' : 'aside-off'">
        <div class="user-info p-2">
            <i class="fa fa-gavel"></i>
            <span>Hoşgeldin Kaplan</span>
            <button class="btn-off"><i class="fas fa-power-off"></i></button>
        </div>
        <SidebarList></SidebarList>
    </div>
</template>
<script>
import SidebarList from './SidebarList.vue';
export default {
    components: { SidebarList }
}
</script>
<style scoped>
#aside {
    width: 210px;
    bottom: 0;
    float: left;
    left: 0;
    position: absolute;
    top: -16px;
    -webkit-transition: all .5s ease 0s;
    transition: all .5s ease 0s;
    background-color: #626f80;
    z-index: 99;
}

.aside-off {
    display: block;
    margin-left: -210px;
}
.user-info{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    gap: 14px;
}
.user-info span{
    display: block;
    flex: 1;
}
.user-info i{
    font-size: 16px;
}
.btn-off{
    background-color: unset;
    border: 0;
    color: #fff;
}
.btn-off i{
    font-size: 14px;
}
</style>