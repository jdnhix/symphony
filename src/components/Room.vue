<template>
    <div class="room">
        <RoomPlayer v-bind:roomId = this.roomId />
        <Queue v-bind:roomId = this.roomId />
    </div>
</template>


<script>
    import RoomPlayer from './RoomPlayer.vue'
    import Queue from './Queue.vue'
    import Nav from './Nav.vue'

    export default {
        name: 'Room',
        components: {Nav, RoomPlayer, Queue},
        data() {
            return {
                roomId: null,
            }
        },
        methods: {
            updateToken() {
                setTimeout( ()=>{
                    console.log('refreshing token')
                    this.$store.dispatch('refreshAccessToken', {refreshToken: this.$store.state.user.refreshToken})
                }, 36000000)
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
        mounted() {
            this.updateToken()
            this.$socket.emit('join', this.roomId)
        },
        beforeDestroy() {
            this.$socket.emit('leave', this.roomId)
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