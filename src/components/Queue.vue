<template>
    <div class="queue">
        <div class="search-container">
            <SearchComponent/>
        </div>

        <ul class="queue-list">

            <li v-if="room" v-for="song in room[0].queue">
                <QueueItem v-bind:song=song />
            </li>

        </ul>


    </div>

</template>


<script>
    import SearchComponent from './SearchComponent.vue'
    import QueueItem from './QueueItem.vue'
    import Vue from 'vue'

    export default {
        name: 'Queue',
        components: {QueueItem, SearchComponent},
        props: ['roomId'],
        mounted() {
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

<style>

    .queue {
        width: 35%;
        height: 85%;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.16);
        display: flex;
        flex-direction: column;
        align-items: center;

    }


    .search-container {
        margin-top: 5%;
        width: 75%;
    }

    .queue-list {
        width: 80%;
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }


</style>