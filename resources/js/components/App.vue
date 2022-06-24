<template>
    <div class="w-50 m-auto mb-3 p-3">
        <div class="d-flex">
            <router-link v-if="token" class="me-3 p-2" :to="{ name: 'get.index' }">Get</router-link>
            <router-link v-if="!token" class="ms-auto me-3 p-2" :to="{ name: 'login' }">Login</router-link>
            <router-link v-if="!token" class="btn btn-outline-primary p-2" :to="{ name: 'register' }">Register</router-link>
            <a v-if="token" @click.prevent="logout" class="ms-auto p-2" href="#">Logout</a>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",

    data() {
        return {
            token: null,
        }
    },

    mounted() {
        this.getToken()
    },

    updated() {
        this.getToken()
    },

    methods: {
        logout() {
            axios.post('/logout').then(response => {
                localStorage.removeItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                this.$router.push({ name: 'login' })
            })
        },

        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        }

    }
}
</script>

<style scoped>

</style>
