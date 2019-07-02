<template>
    <div id="home">
        <Nav/>
        <input class='search' placeholder='Search Room'/>

        <ul v-for="room in rooms">

            <li class="room-card">
                <p>{{room.roomName}}</p>
                <p>{{room.createdBy}}</p>
                <p>{{room.participants}}</p>
                <p>Current Song</p>
                <p>Lock img</p>
            </li>
        </ul>





    </div>


</template>

<script>
    import Nav from './Nav.vue'
    export default {
        name: 'Test',
        components: {Nav},
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
        mounted() {
            this.$store
                .dispatch('getRooms')
                .catch(err => console.log('Error getting rooms', err))
        }
    }
</script>


<style scoped>

    #home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .search {
        margin: 5%;
    }

    .room-card {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100px;
        margin: 0;
        border: 1px solid black;
        border-radius: 5px;
        box-shadow: 0 0 8px 1px rgba(0,0,0,0.16);

    }

    ul {
        width: 75%;
        max-width: 1000px;
    }




</style>