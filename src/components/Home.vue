<template>
    <div class="home">
        <Nav class/>
        <SearchComponent class='search'/>

        <ul>
            <li @click="goToRoom(room)" v-for="room in rooms" class="room-card">
                <p>{{room.roomName}}</p>
                <p>{{room.hostName}}</p>
                <p>{{room.audienceSize}}</p>
                <p>Current Song</p>
                <p>Lock img</p>
            </li>
        </ul>





    </div>


</template>

<script>
    import Nav from './Nav.vue'
    import SearchComponent from './SearchComponent.vue'
    export default {
        name: 'Home',
        components: {SearchComponent, Nav},
        data() {
            return {
                roomsList: null
            }
        },
        computed: {
            rooms() {
                return this.$store.state.room.roomList || []
            }
        },
        methods: {
            goToRoom (room) {
                const data = room
                this.$router.push({ path: '/room', query: {roomId: data._id} })
            }

        },
        mounted() {
            this.$store
                .dispatch('getRooms')
                .catch(err => console.log('Error getting rooms', err))
        }
    }
</script>


<style scoped>

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .search {
        margin: 50px 0 20px 0;
    }


    .room-card {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100px;
        margin: 20px 0;
        border: 1px solid black;
        border-radius: 5px;
    }

    .room-card:hover {
        cursor: pointer;
        box-shadow: 0 0 8px 1px rgba(0,0,0,0.16);
    }

    ul {
        width: 75%;
        max-width: 1000px;
    }






</style>