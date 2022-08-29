<template>
    <div class="manin-nav container-fluid">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand href="#" style="flex: 1;">
                <button class="btn-toggle" @click="$store.state.aside = !$store.state.aside"><i
                        class="fa fa-align-left"></i></button>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <div class="search-form d-flex">
                    <input class="form-control imput-search shadow-none" placeholder="Ara...">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                </div>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <a href="#" class="link-dark text-decoration-none">
                                <img src="/user-placeholder.jpg" alt="mdo" width="32" height="32"
                                    class="rounded-circle">
                            </a>
                        </template>
                        <b-dropdown-item href="#">Profilim</b-dropdown-item>
                        <b-dropdown-item href="#">Zaman Cizelgem</b-dropdown-item>
                        <b-dropdown-item href="#">Profili Düzenle</b-dropdown-item>
                        <b-dropdown-item href="#">Dil</b-dropdown-item>
                        <b-dropdown-item href="#" @click="quit">Çıkış Yap</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-navbar-nav class="navbar-nav-links">
                    <b-nav-item href="#" v-b-modal="'square-modal'"><i class="fas fa-share"></i></b-nav-item>
                    <b-nav-item href="#" @click="$router.push('/todo')"><i class="far fa-check-square"></i></b-nav-item>
                    <b-nav-item-dropdown id="dropdown-right">
                        <template #button-content>
                            <i class="fas fa-clock"></i>
                        </template>
                        <div class="card border-0">
                            <div class="card-body">
                                <button class="btn-tick"><small>Başlatılan Sayaç Yok</small></button>
                            </div>
                            <div class="card-footer bg-white p-1 text-center">
                                <button class="btn btn-success"><i class="far fa-clock"></i><span>süre başlat</span></button>
                                <a href="#" class="a-decoration">Tüm zaman çizelgelerini görüntüle</a>
                            </div>
                        </div>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown id="dropdown-right">
                        <template #button-content>
                            <i class="fas fa-bell"></i>
                        </template>
                        <div class="card border-0">
                            <div class="card-body">
                                <button class="btn-tick"><small>Hepsini okundu olarak işaretle</small></button>
                            </div>
                            <div class="card-footer bg-white p-1 text-center">
                                <small>Bildirim bulunmadı</small>
                            </div>
                        </div>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    props: ['username'],
    methods: {
        quit() {
            if (confirm('Çıkış yapmak üzeresiniz')) {
                this.$store.getters.isQuit
                this.$router.push('/authentication');
            }
        }
    },
}
</script>
<style scoped>
.a-decoration{
    display: block;
    color: royalblue;
    font-size: 14px;
    padding: 0 12px;
    margin: 6px 0;
    text-decoration: none;
}
.btn-success{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin: 0 auto;
}
.btn-success span{
    display: block;
    text-transform: uppercase;
}
.manin-nav {
    background: linear-gradient(to right, #415165 0, #51647c 26%, #51647c 73%, #4f5d7a 100%);
}

nav {
    padding: 0;
}

#nav-collapse {
    justify-content: flex-end;
    gap: 18px;
}

.nav-item>a {
    color: #fff;
}

.imput-search {
    background-color: transparent;
    border: 0;
    color: #d3d8de;
    border-radius: 0;
    transition: all 0.3s;
    min-width: 300px;
    height: 62px;
}

.imput-search::placeholder {
    color: #d3d8de;
}

.imput-search:focus,
.imput-search:hover {
    outline: none;
    background-color: #415063;
}

.btn-search {
    background-color: transparent;
    border: 0;
    padding-left: 22px;
    padding-right: 22px;
    color: #d3d8de;
}

.navbar-nav-links {
    gap: 18px;
}

.btn-toggle {
    border: 0;
    background-color: unset;
    color: #c8ced6;
    font-size: 16px;
}

#dropdown-right i {
    color: #fff;
}
</style>
<style>
.btn-tick {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
}

.nav-link.dropdown-toggle::after {
    display: none;
}

#dropdown-right .dropdown-menu {
    right: 0 !important;
    min-width: 20rem !important;
}
</style>