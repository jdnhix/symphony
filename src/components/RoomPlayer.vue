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
<!--                    <WebPlayer/>-->
            <!--        <img :src="room[0].queue[0].coverArt" class="song__cover-art">-->

            <div class="progression">Song Progression</div>

            <div class="controls">
                <button>previous</button>
                <button>play</button>
                <button @click="pauseSong">pause</button>
                <button>next</button>
            </div>


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
            console.log(this.roomId)
            this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
        },
        computed: {
            room() {
                return this.$store.state.room.selectedRoom || []
            },
        },
        methods: {
            pauseSong(){
                const accessToken = this.$store.state.user.accessToken
                console.log(accessToken)
                // this.$store.dispatch('pauseSong')
            }
        },
    }
</script>

<style scoped>

    .room-player {
        width: 35%;
        height: 85%;
        box-shadow: 0 0 8px 1px rgba(0,0,0,0.16);

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