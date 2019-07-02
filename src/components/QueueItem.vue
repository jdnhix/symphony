<template>
    <div class="card">
        <div class="cover-art">

        </div>

        <div class="song-info">
            <p class="song-info__title">Title</p>
            <p class="song-info__artist">Artist</p>
        </div>

        <div class="rank">
<!--            put up vote image here-->
            <p class="rank__number">0</p>
<!--            put down vote image here-->
        </div>




    </div>

</template>

<script>
    export default {
        name: 'QueueItem',
        // data() {
        //
        // }
    }

</script>


<style>

    .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 0 0 8px 1px rgba(0,0,0,0.16);
        align-items: center;
    }

    .cover-art{
        background-color: gray;
        width: 80%;
        height: auto;

    }



</style>