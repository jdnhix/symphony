

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
        },
        sockets : {
            connect: function() {
                console.log('socket connected')
            },
            addSongToQueue : function (song) {
                this.$store.dispatch('addSongToQueue', song)
            },
            removeQueueItem: function(params) {
                this.$store.dispatch('removeQueueItem', params)
            },
            addRoom: function (room) {
                this.$store.dispatch('addRoom', room)
            },
            playSong: function (params){
                this.$store.dispatch('playSong', params)
            },
            changeSongRank: function (params){
                this.$store.dispatch('changeSongRank', params)
            },
        }
    }

</script>

<style>
    #app{
        width: 99vw;
        height: 100vh;
    }
</style>