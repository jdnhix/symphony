<template>

    <div>
        <Nav/>
        room setup page
        <br>
        Access token: {{this.$store.state.user.accessToken}}
        <br><br><br>

        <form>
            Room Name
            <input type="text" placeholder="Enter Room Name" v-model="roomName" required><br>

            Host Name
            <input type="text" placeholder="Enter Host Name" v-model="hostName" required><br>

            RoomType<br>
            <label for="public">Public</label>
            <input type="radio" id='public' v-model="roomType" value="public" required>
            <label for="private">Private</label>
            <input type="radio" id='private' v-model="roomType" value="private" required><br>

            <div v-if="roomType === 'private'">
                Password
                <input type="text"  placeholder="Enter Password" v-model="password"><br>
            </div>


            Down Vote Limit
            <input type="number" v-model="downVoteLimit" min="0" value="0" required><br><br>

        </form>

        <button @click="makeRoom">Create</button>

    </div>

</template>

<script>
    import Nav from './Nav.vue'

    export default {
        name: "RoomSetup",
        components: {Nav},
        data() {
            return {
                roomName: '',
                hostName: '',
                roomType: '',
                password: '',
                downVoteLimit: 0,
            }
        },
        mounted() {
            this.$store.dispatch('getToken', {code: this.$route.query.code})
        },
        methods: {
            makeRoom() {
                const roomInfo = {
                    roomName: this.roomName,
                    hostName: this.hostName,
                    roomType: this.roomType,
                    password: this.password,
                    downVoteLimit: this.downVoteLimit
                }
                this.$socket.emit('addRoom', roomInfo)
                // this.$router.push({ path: '/room', query: {roomId: ._id} }) todo i want to make so that it goes directly to the room
                this.$router.push({path: '/'})
            },

        }
    }
</script>

<style scoped>

</style>