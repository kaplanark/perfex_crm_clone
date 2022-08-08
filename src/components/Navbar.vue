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
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                                    class="rounded-circle">
                            </a>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-navbar-nav class="navbar-nav-links">
                    <b-nav-item href="#"><i class="far fa-check-square"></i></b-nav-item>
                    <b-nav-item href="#"><i class="fas fa-share"></i></b-nav-item>
                    <b-nav-item href="#"><i class="fas fa-clock"></i></b-nav-item>
                    <b-nav-item href="#"><i class="fas fa-bell"></i></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.manin-nav {
    background: linear-gradient(to right,#415165 0,#51647c 26%,#51647c 73%,#4f5d7a 100%);
}

nav {
    padding: 0;
}

#nav-collapse {
    justify-content: flex-end;
    gap: 18px;
}

.nav-item a {
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
</style>