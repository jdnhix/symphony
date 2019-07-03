<template>
    <div class="room">
        <RoomState v-bind:room = room[0] />
        <Queue v-bind:queue = room[0].queue />
    </div>


</template>


<script>
    import RoomState from './RoomState.vue'
    import Queue from './Queue.vue'

    export default {
        name: 'Room',
        components: {RoomState, Queue},
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
        },
        computed: {
            room() {
                return this.$store.state.room.selectedRoom || []
            }
        },
        mounted() {
            this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
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