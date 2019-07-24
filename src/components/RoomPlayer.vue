<template>
    <div class='room-player'>

        <div class='room-info'>
            <div class="room-info__title">
                <h1>{{room.roomName}}</h1>
                <h3>{{room.hostName}}</h3>
            </div>
            <p class="'room-info__audience-count">{{room.audienceSize}}</p>
        </div>


        <div class="song">
<!--            <h2>{{currentSong.item.name}}</h2>-->
<!--            <h3>{{currentSong.item.artists[0].name}}</h3>-->
<!--            <img :src="currentSong.item.album.images[0].url" class="song__cover-art">-->

            <div class="progression">Song Progression</div>

            <div class="controls">
                <button @click="previousSong">previous</button>
                <button @click="playSong">play</button>
                <button @click="pauseSong">pause</button>
                <button @click="nextSong">next</button>
            </div>

            <button @click="getCurrentPlayback">Current Playback</button>


        </div>


    </div>
</template>


<script>
    import WebPlayer from './WebPlayer.vue'


    export default {
        name: 'RoomState',
        components: {WebPlayer},
        props: ['roomId'],
        created() {
            this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
        },
        computed: {
            room() {
                return this.$store.state.room.selectedRoom || []
            },
            currentSong () {
                return this.$store.state.player.currentPlayback || {}
            },
            accessToken() {
                return this.$store.state.user.accessToken
            }
        },
        methods: {
            pauseSong() {
                this.$store.dispatch('pauseSong', {token: this.accessToken})
            },
            playSong() {
                this.$store.dispatch('playSong', {token: this.accessToken})
            },
            nextSong() {
                this.$store.dispatch('nextSong', {token: this.accessToken})
            },
            previousSong() {
                this.$store.dispatch('previousSong', {token: this.accessToken})
            },
            getCurrentPlayback() {
                this.$store.dispatch('getCurrentPlayback', {token: this.accessToken})
            }
        },
        mounted() {
            this.getCurrentPlayback()
            this.$socket.emit('initiate', {accessToken: this.accessToken})
        }
    }
</script>

<style scoped>

    .room-player {
        width: 35%;
        height: 85%;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.16);

    }

    .room-info {
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .song {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 75%;
    }

    .song__cover-art {
        /*width: 75%;*/
        /*height: 55%;*/
        max-width: 350px;
        max-height: 350px;
        /*padding-top: 75%;*/
        background-color: gray;
    }

    .progression {
        width: 75%;
        height: 20px;
        margin: 30px;
        background-color: gray;
        text-align: center;
    }


</style>