<template>
    <div class="queue">
        <div class="search-container">
            <SearchComponent v-model="searchParam" :value="searchParam"/>
        </div>

        <ul class="queue-list">

            <li v-if="room && !searchParam && queue" v-for="song in queue" class='list-card'>
                <QueueItem
                        :add-voted-song = addVotedSong
                        v-bind:song=song :roomId=roomId />
            </li>

            <p v-if="!queue[0] && !searchParam">No songs in queue</p>

            <li v-if="searchResults && searchParam" v-for="song in searchResults" @click="addSongToQueue(song)" class="search-item">
                <img :src="song.album.images[0].url" width="40px">
                {{song.name}} - {{song.artists[0].name}} - explicit: {{song.explicit}}
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
        created() {
            this.getRoom()
        },
        computed: {
            room() {
                return this.$store.state.room.selectedRoom || []
            },
            searchResults () {
                return this.$store.state.queue.searchResults && this.$store.state.queue.searchResults.tracks.items || []
            },
            queue() {
                return this.$store.state.queue.queue
            }
        },
        watch: {
            searchParam : {
                handler(newVal, oldVal) {
                    this.$store.dispatch('getSearchResults', {params: {songName: this.searchParam, accessToken: this.$store.state.user.accessToken}})
                }
            }
        },
        methods: {
            async addSongToQueue(addedSong) {
                var ID = function () {
                    return '_' + Math.random().toString(36).substr(2, 9);
                };

                let song = {
                    roomId: this.roomId,
                    songName: addedSong.name,
                    artistName: addedSong.artists[0].name,
                    songId: ID(),
                    uri: addedSong.uri,
                    coverArt: addedSong.album.images[0].url,
                    explicit: addedSong.explicit,
                    durationMS: addedSong.duration_ms
                }

                let response = await this.$socket.emit('addSongToQueue', song)
                this.searchParam = ''

            },
            getRoom() {
                this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
            },
            addVotedSong(song) {
                this.votedSongs.push(song)
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
        width: 90%;
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: scroll;
    }

    .search-item{
        border: 1px solid black;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 5px;
        overflow: scroll;
        margin: 2px 0;
    }

    .search-item:hover {
        cursor: pointer;
    }

</style>