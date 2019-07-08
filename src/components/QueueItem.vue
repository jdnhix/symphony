<template>
    <div class="card">
            <img :src= 'song.coverArt' class="cover-art"/>


        <div class="song-info">
            <p class="song-info__title">{{song.songName}}</p>
            <p class="song-info__artist">{{song.artistName}}</p>
        </div>

        <div class="rank">
            <img @click="changeRank('up')" src="../assets/img/upload.svg" class='arrow'/>
            <p class="rank__number">{{ rank }}</p>
            <img @click="changeRank('down')" src="../assets/img/download.svg" class='arrow'/>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'QueueItem',
        data () {
            rank = song.rank
        },
        props: ['song'],
        methods : {
            changeRank (dir) {
                const direction = dir
                if('up') {
                    ++rank
                } else {
                    --rank
                }

            }

        }

    }

</script>


<style>

    .card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        box-shadow: 0 0 8px 1px rgba(0,0,0,0.16);
        align-items: center;
        margin: 10px 0;
    }

    .cover-art{
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

    .arrow:hover{
        cursor: pointer;
    }



</style>