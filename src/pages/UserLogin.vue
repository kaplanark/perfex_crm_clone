<template>
    <div class="login">
        <header class="py-2 bg-perfex">
            <div class="container-fluid d-flex justify-content-end">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="#" class="nav-link text-light">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link active">Login</a></li>
                </ul>
            </div>
        </header>
        <b-container class="login-container h-100">
            <b-row>
                <b-col md="6" lg="4" offset-md="3" offset-lg="4" align-self="center">
                    <UserLoginForm></UserLoginForm>
                </b-col>
            </b-row>
        </b-container>
        <footer class="footer mt-auto py-2 bg-light">
            <div class="container">
                <span class="text-center d-block">{{ date }}</span>
            </div>
        </footer>
    </div>
</template>
<script>
import UserLoginForm from '@/components/UserLoginForm.vue';
const date = new Date();
let year = date.getFullYear();
export default {
    name: "Login",
    components: { UserLoginForm },
    data() {
        return {
            date: year,
        }
    },
}
</script>
<style scoped>
.login {
    min-height: 100vh;
    background-color: #444a52;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
}

.login-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-perfex {
    background: linear-gradient(to right, #415165 0, #51647c 26%, #51647c 73%, #4f5d7a 100%);
}
</style>