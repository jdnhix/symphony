<template>
    <div class="queue">
        <div class="search-container">
            <SearchComponent v-model="searchParam" :value="searchParam"/>
        </div>

        <ul  class="queue-list">

            <li v-if="room && !searchParam" v-for="song in room[0].queue" class='list-card'>
                <QueueItem v-bind:song=song :roomId=roomId />
            </li>

            <li v-if="searchResults && searchParam" v-for="song in searchResults" @click="addSongToQueue(song)" class="search-item">
                {{song.name}} - {{song.artists[0].name}}
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
                this.$store.dispatch('addSongToQueue', {
                    params: {
                        roomId: this.roomId,
                        songName: song.name,
                        artistName: song.artists[0].name,
                        songId: song.uri,
                        coverArt: song.album.images[0].url
                    }
                }).then(() => {
                    this.searchParam = ''
                    this.sortQueue()
                })
            },
            getRoom() {
                this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
            },
            sortQueue(){
                this.$store.dispatch('sort', {
                    params: {
                        roomId: this.roomId
                    }
                }).then(() => {
                    this.getRoom()
                })
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

    .list-card {
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
        overflow: scroll;
    }

    .search-item{
        border: 1px solid black;
        height: 30px;
        display: flex;
        align-items: center;
        padding-left: 5px;


    }

    .search-item:hover {
        cursor: pointer;
    }

</style>