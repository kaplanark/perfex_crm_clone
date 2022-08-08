<template>
    <b-card header-tag="header" footer-tag="footer" class="pb-4">
        <template #header>
            <h3 class="mb-2 mt-4">Login</h3>
        </template>
        <b-form>
            <b-form-group id="input-group-1" label="Email address:" label-for="email" class="mb-3" label-class="login-label">
                <b-form-input id="email" v-model="form.email" type="email" required>
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="password" class="mb-3" label-class="login-label">
                <b-form-input id="password" v-model="form.password" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" class="mb-3" label-class="login-label">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
                    <b-form-checkbox value="me" class="login-label">Remember me</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>
            <router-link tag="span" to="/admin" class="w-100">
                <b-button variant="primary" class="w-100">Login</b-button>
            </router-link>
        </b-form>
        <template #footer>
            <a href="" class="forgot">Forgot Password?</a>
        </template>
    </b-card>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null
            },
        }
    },
}
</script>
<style scoped>
.wrapper {
    max-height: 320px;
    overflow-y: auto;
}

.dropdown-toggle {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dropdown-item {
    border-radius: 6px;
}

.dropdown-menu {
    width: 100%;
    padding: 8px;
}

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
.forgot{
    font-size: 13px;
    text-decoration: none;
    color: #337ab7;
}
.forgot:hover{
    color: #444;
    text-decoration: underline;
}
</style>
<style>
.login-label{
    font-size: 13px;
    font-weight: 400;
    color: #6a6c6f;
}
</style>