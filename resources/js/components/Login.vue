<template>
    <div class="w-50 m-auto">
        <div class="p-2">
            <input class="form-control" type="email" v-model="email" placeholder="email">
        </div>
        <div class="p-2">
            <input class="form-control" type="password" v-model="password" placeholder="password">
        </div>
        <div class="p-2">
            <input class="btn btn-primary" @click.prevent="login" type="submit">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
        }
    },

    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                    this.$router.push({ name: 'get.index' })
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
