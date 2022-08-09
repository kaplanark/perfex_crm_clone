<template>
    <ul class="list-unstyled ps-0">
        <li class="menu-item" v-for="(link, index) in links" :key="index" :class="link.children ? 'sub-menu' : ''">
            <span v-if="link.to">
                <router-link tag="button" :to="link.to" class="btn-menu" active-class="active">
                    <i :class="link.icon"></i>
                    <span>{{ link.name }}</span>
                </router-link>
            </span>
            <span v-else>
                <button class="btn-menu" @click="openSub(index, $event)">
                    <i :class="link.icon"></i>
                    <span>{{ link.name }}</span>
                </button>
            </span>
            <transition name="slide">
                <ul class="list-unstyled ps-0" v-show="link.sub">
                    <li v-for="(l, index) in link.children" :key="index">
                        <router-link tag="button" :to="l.to" class="btn-menu"><span>{{ l.name }}</span></router-link>
                    </li>
                </ul>
            </transition>
        </li>
    </ul>
</template>
<script>
// import axios from 'axios';
export default {
    data() {
        return {
            links: []
        }
    },
    async mounted() {
        this.$axios.get("/links")
            .then(response => {
                this.links = response.data
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        openSub(index, event) {
            if (this.links[index].sub) {
                this.links[index].sub = false;
                event.target.classList.remove('active')
            } else {
                this.links[index].sub = true;
                event.target.classList.add('active')
            }
        }
    }
}
</script>
<style scoped>
.btn-menu {
    width: 100%;
    border: 0;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    font-size: 13px;
    text-transform: uppercase;
    transition: all 0.15s ease-in-out;
    background-color: unset;
    color: #fff;
    position: relative;
}

.btn-menu.active {
    background-color: #e3e8ee;
    color: #444;
}

.btn-menu i {
    font-size: 15px;
}

.sub-menu span>.btn-menu::after {
    position: absolute;
    font-family: "Font Awesome Free 5";
    content: "\f104";
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
}

.btn-menu:hover {
    background-color: #e3e8ee;
    color: #444;
}

.menu-item ul {
    background-color: #fff;
}

.menu-item ul li .btn-menu {
    color: #0181bb;
    text-transform: none;
    font-weight: 500;
    font-size: normal;
    padding-left: 28px;
}

/* we will explain what these classes do next! */
.slide-enter-active,
.slide-leave-active {
    transition: max-height 0.3s;
}

.slide-enter-to,
.slide-leave {
    overflow: hidden;
    max-height: 1000px;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    max-height: 0;
}
</style>