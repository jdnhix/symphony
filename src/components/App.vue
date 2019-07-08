

<template>
    <div id='app'>
        <router-view/>
    </div>
</template>


<script>
    import Home from './Home.vue'
    import Room from './Room.vue'

    export default {
        name: 'App',
        components: {Home, Room},
        mounted () {
            window.onSpotifyWebPlaybackSDKReady = () => {}
        }
    }

</script>

<style>
    #app{
        width: 99vw;
        height: 100vh;
    }
</style>