<template>
    <div>
        {{ info }}
    </div>
</template>

<script>
export default {
    name: "GetInfo",

    data() {
        return {
            info: null,
        }
    },

    mounted() {
        this.getInfo()
    },

    methods: {
        getInfo() {
            axios.get('/api/get').then(response => {
                this.info = response.data
            })
        }
    }
}
</script>

<style scoped>

</style>
