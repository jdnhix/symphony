<template>
    <div class='nav'>

        <p class="title"><a href="/">Symphony</a></p>

        <div class='button'>

            <router-link to="/room">
                <button class='button__item'>About</button>
            </router-link>

            <button v-on:click="login" class='button__item'>Create Room</button>
        </div>

    </div>
</template>




<script>
    import Vue from 'vue'
    export default {
        name: 'Nav',
        methods: {
            login() {
                this.$store.dispatch('getUsername').then(res => {
                    window.location = res.data.url
                })
                    .catch(err => console.log(err))

            }

        }
    }

</script>




<style scoped lang="scss">

    .nav {
        width: 100%;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .title {

    }

    .button {
        display: flex;
        flex-direction: row;
        width: 15%;
        max-width: 200px;
        justify-content: space-around;
    }

    .button__item {
        width: auto;
        height: 30px;
        border: 1px solid gray;
    }

    .button__item:hover {
        cursor: pointer;
    }


</style>

