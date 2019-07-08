<template>
    <div class="queue">
        <div class="search-container">
            <SearchComponent v-model="searchParam" :value="searchParam"/>
        </div>

        <ul  class="queue-list">

            <li v-if="room && !searchParam" v-for="song in room[0].queue">
                <QueueItem v-bind:song=song />
            </li>

            <li v-if="searchResults && searchParam" v-for="song in searchResults" @click="addSongToQueue(song)">
                <!-- todo add style -->
                {{song.name}}
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
        data () {
            return {
                searchParam: null
            }
        },
        mounted() {
            this.getRoom()
        },
        computed: {
            room() {
                return this.$store.state.room.selectedRoom || []
            },
            searchResults () {

                return this.$store.state.queue.searchResults && this.$store.state.queue.searchResults.tracks.items || []
            }
        },
        watch: {
            searchParam : {
                handler(newVal, oldVal) {
                    this.$store.dispatch('getSearchResults', {params: {songName: this.searchParam}})
                }
            }
        },
        methods: {
            addSongToQueue(song) {
                console.log(song)
                this.$store.dispatch('addSongToQueue', {params: {}}).then(() => {
                    this.searchParams = null
                    this.getRoom()
                })
            },
            getRoom() {
                this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
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