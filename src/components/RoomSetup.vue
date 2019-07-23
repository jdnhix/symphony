<template>

    <div>
        <Nav />
        room setup page
        <br>
        Access token: {{this.$store.state.user.accessToken}}

        <form>

        </form>
    </div>

</template>

<script>
    import Nav from './Nav.vue'
    export default {
        name: "RoomSetup",
        components: {Nav},
        mounted() {
            this.$store.dispatch('getToken', {code : this.$route.query.code})
        }
    }
</script>

<style scoped>

</style>