<template>
    <div class="login">
        <b-container class="login-container">
            <b-row>
                <b-col md="6" lg="4" offset-md="3" offset-lg="4" align-self="center">
                    <LoginForm></LoginForm>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Login",
    components: { LoginForm }
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