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

            <h2>{{currentSong.songName}}</h2>
            <h3>{{currentSong.artistName}}</h3>
            <img :src="currentSong.coverArt" class="song__cover-art">

            <div class="progression">Song Progression</div>

            <div class="controls">
                <button @click="previousSong">previous</button>

                <button v-show="!roomIsPlaying" @click="nextSong">play(nextsongone)</button>
                <button v-show="roomIsPlaying && paused" @click="playSong">play</button>
                <button v-show="roomIsPlaying && !paused" @click="pauseSong">pause</button>

                <button @click="nextSong">next</button>
            </div>

            <button @click="getPlayback">Current Playback</button>
            {{playback}}


        </div>


    </div>
</template>


<script>
    import WebPlayer from './WebPlayer.vue'

    function Timer(callback, delay) {
        var args = arguments,
            self = this,
            timer, start;

        this.clear = function () {
            clearTimeout(timer);
        };

        this.pause = function () {
            this.clear();
            delay -= new Date() - start;
        };

        this.resume = function () {
            start = new Date();
            timer = setTimeout(function () {
                callback.apply(self, Array.prototype.slice.call(args, 2, args.length));
            }, delay);
        };

        this.resume();
    }


    export default {
        name: 'RoomState',
        components: {WebPlayer},
        props: ['roomId'],
        data() {
            return {
                roomIsPlaying: false,
                paused: false,
                timer: null
            }
        },
        created() {
            this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
        },
        computed: {
            room() {
                return this.$store.state.room.selectedRoom || []
            },
            currentSong() {
                return this.$store.state.player.currentSong || {}
            },
            accessToken() {
                return this.$store.state.user.accessToken
            },
            playback() {
                return this.$store.state.player.playback
            }
        },
        methods: {
            pauseSong() {
                this.paused = true
                this.timer.pause()
                this.$store.dispatch('pauseSong', {token: this.accessToken})
            },
            playSong() {
                this.$socket.emit('playSong', {token: this.accessToken, song: '', roomId: this.roomId})
                this.paused = false
                this.timer.resume()

            },
            nextSong() {
                this.roomIsPlaying = true
                const song = this.room.queue[0]
                if (song) {
                    this.$socket.emit('playSong', {token: this.accessToken, song: song, roomId: this.roomId})

                    this.timer = new Timer(() => {
                        console.log('song ended')
                        this.nextSong()
                    }, song.durationMS + 1000)

                } else {
                    console.log('no songs in queue')
                    this.roomIsPlaying = false
                }
            },
            previousSong() {
                this.$store.dispatch('previousSong', {token: this.accessToken})
            },
            getPlayback() {
                this.$store.dispatch('getPlayback', {token: this.accessToken})
            }
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