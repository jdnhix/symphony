<template>
    <div class="card">
        <img :src='song.coverArt' class="cover-art"/>


        <div class="song-info">
            <p class="song-info__title">{{song.songName}}</p>
            <p class="song-info__artist">{{song.artistName}}</p>
        </div>

        <p v-if="song.explicit" class="explcit-mark">E</p>


        <div class="rank">
            <img @click="changeSongRank('inc')" src="../assets/img/upload.svg" class='arrow'/>

            <!--            <img v-if="isVotedUp" @click="changeSongRank('inc')" src="../assets/img/upload.svg" class='arrow voted'/>-->


            <p class="rank__number">{{ song.rank }}</p>
            <img @click="changeSongRank('dec')" src="../assets/img/download.svg" class='arrow'/>

        </div>

        <div @click="removeQueueItem()" class="card__remove">X</div>

    </div>

</template>

<script>
    export default {
        name: 'QueueItem',
        props: ['song', 'roomId'],
        data() {
            return {
                isVotedUp: false,
                isVotedDown: false
            }
        },
        methods: {
            async removeQueueItem() {
                const params = {
                    roomId: this.roomId,
                    songId: this.song.songId,
                }
                let response = await this.$socket.emit('removeQueueItem', params)
            },
            getRoom() {
                this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
            },
            sortQueue() {
                this.$store.dispatch('sort', {
                    params: {
                        roomId: this.roomId
                    }
                }).then(() => {
                    this.getRoom()
                })
            },
            changeSongRank(dir) {
                // }).then(() => {
                //     this.sortQueue()
                // })
                this.$socket.emit('changeSongRank', {direction: dir, song: this.song, roomId: this.roomId})
            },
        }
    }

</script>


<style>

    .card {
        width: 95%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.16);
        align-items: center;
        margin: 10px 0;
    }

    .cover-art {
        width: 20%;
    }

    .rank {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .arrow {
        width: 15px;
    }

    .arrow:hover {
        cursor: pointer;
    }

    .card__remove {
        color: red;
    }

    .card__remove:hover {
        cursor: pointer;
    }

    .voted {
        background: green;
    }

    .explcit-mark {
        background: black;
        color: #FFFFFF;
        padding: 5px;
    }

</style>