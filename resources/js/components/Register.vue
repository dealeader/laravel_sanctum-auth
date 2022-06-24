
<template>
    <div class="w-50 m-auto">
        <div class="p-2">
            <input class="form-control" type="text" v-model="name" placeholder="name">
        </div>
        <div class="p-2">
            <input class="form-control" type="email" v-model="email" placeholder="email">
        </div>
        <div class="p-2">
            <input class="form-control" type="password" v-model="password" placeholder="password">
        </div>
        <div class="p-2">
            <input class="form-control" type="password" v-model="password_confirmation" placeholder="password confirmation">
        </div>
        <div class="p-2">
            <input class="btn btn-primary" type="submit" @click.prevent="register">
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },

    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
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
