<template>
    <div class='room-state'>

        <div class='header'>
            <div class="header__title">
                <h1>{{room[0].roomName}}</h1>
                <h3>{{room[0].hostName}}</h3>
            </div>
            <p class="'header__audience-count">{{room[0].audienceSize}}</p>
        </div>

        <div class="song">
            <h2 class="song__title">{{room[0].queue[0].songName}}</h2>
            <h3 class="song__artist">{{room[0].queue[0].artistName}}</h3>

            <img :src="room[0].queue[0].coverArt" class="song__cover-art">



<!--            todo make this its own comp?-->
            <div class="progression"></div>


        </div>

    </div>
</template>



<script>
    export default {
        name: 'RoomState',
        //todo ask cameron if this is the best way to do this
        props: ['roomId'],
        created() {
            console.log(this.roomId)
            this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
        },
        computed: {
            room() {
                return this.$store.state.room.selectedRoom || []
            }
        }
    }
</script>

<style scoped>

    .room-state {
        width: 35%;
        height: 85%;
        box-shadow: 0 0 8px 1px rgba(0,0,0,0.16);
    }

    .header {
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
        width: 75%;
        height: 55%;
        max-width: 350px;
        max-height: 350px;
        /*padding-top: 75%;*/
        background-color: gray;
    }

    .progression {
        width: 75%;
        height: 40px;
        margin-top: 10%;
        background-color: gray;
    }




</style>