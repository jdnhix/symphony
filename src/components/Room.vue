<template>
    <div class="room">
        <RoomPlayer v-bind:roomId = this.roomId />
        <Queue v-bind:roomId = this.roomId />
    </div>


</template>


<script>
    import RoomPlayer from './RoomPlayer.vue'
    import Queue from './Queue.vue'

    export default {
        name: 'Room',
        components: {RoomPlayer, Queue},
        data() {
            return {
                roomId: null
            }
        },
        watch: {
            '$route.query' : {
                immediate: true,
                handler(newVal, oldVal) {
                    this.roomId = newVal.roomId
                }
            }
        }
    }
</script>

<style>

    .room {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }


</style>