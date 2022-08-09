<template>
    <b-card header-tag="header" footer-tag="footer">
        <template #header>
            <h3 class="mb-2 mt-4">Login</h3>
        </template>
        <b-form class="user-login-form">
            <b-form-group id="input-group-0" label="Language" label-for="languages" class="mb-3">
                <b-dropdown id="languages" :text="lang" variant="default" class="w-100 border">
                    <input type="text" class="form-control mb-2" v-model="search_lang">
                    <div class="wrapper">
                        <b-dropdown-item v-for="(language, index) in filtered" :key="index"
                            @click="selectLang(language)">{{ language }}
                        </b-dropdown-item>
                    </div>
                </b-dropdown>
            </b-form-group>
            <b-form-group id="input-group-1" label="Email address:" label-for="email" class="mb-3">
                <b-form-input id="email" v-model="form.email" type="email" required>
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="password" class="mb-3">
                <b-form-input id="password" v-model="form.password" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" class="mb-3">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
                    <b-form-checkbox value="me">Remember me</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <router-link tag="span" to="/admin" class="w-100">
                <b-button variant="primary" class="w-100 text-light">Login</b-button>
            </router-link>

        </b-form>
        <template #footer>
            <a href="" class="rember">Parolamı Unuttum</a>
        </template>
    </b-card>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { languagetMixin } from './../mixins/languageMixin';
export default {
    mixins:[languagetMixin],
    data() {
        return {
            lang: 'Türkçe',
            form: {
                email: null,
                password: null
            },
        }
    },
    methods: {
        selectLang(language) {
            this.lang = language;
        }
    },
}
</script>
<style scoped>
.card {
    border-radius: 4px;
}

.card-header,
.card-footer {
    background-color: transparent;
    border: 0;
}

.card-header h3 {
    font-weight: 400;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    color: #6a6c6f;
}
</style>

<style>
#languages .dropdown-menu.show{
    width: 100%;
}

#languages .wrapper {
    max-height: 320px;
    overflow-y: auto;
}

#languages .dropdown-toggle {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: no;
}

#languages .dropdown-item {
    border-radius: 6px;
}

#languages .dropdown-menu {
    width: 100%;
    padding: 8px;
}
.user-login-form label {
    font-size: 12px;
    color: #6a6c6f;
}
.rember{
    font-size: 12px;
    color: royalblue;
    text-decoration: none;
}
.rember:hover{
    text-decoration: underline;
}
</style>