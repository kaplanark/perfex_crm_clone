<template>
    <div class="login">
        <b-container class="login-container">
            <b-row>
                <b-col md="6" lg="4" offset-md="3" offset-lg="4" align-self="center">
                    <UserLoginForm></UserLoginForm>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import UserLoginForm from '@/components/UserLoginForm.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    components: { UserLoginForm }
}
</script>
<style scoped>
.login {
    min-height: 100vh;
    background-color: #444a52;
}

.login-container,
.login-container .row {
    min-height: 100vh;
}
</style>