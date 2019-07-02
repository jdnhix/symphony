<template>
    <div class='room-state'>

        <div class='header'>
            <div class="header__title">
                <h1>Room Name</h1>
                <h3>Host</h3>
            </div>
            <p class="'header__audience-count">0</p>
        </div>

        <div class="song">
            <h2 class="song__title">Song Title</h2>
            <h3 class="song__artist">Song Artist</h3>

            <div class="song__cover-art"></div>

<!--            todo make this its own comp?-->
            <div class="progression"></div>


        </div>

    </div>
</template>



<script>
    export default {
        name: 'RoomState'
        //todo add data
    }
</script>

<style scoped>

    .room-state {
        width: 35%;
        height: 85%;
        box-shadow: 0 0 8px 1px rgba(0,0,0,0.16);
    }

    .header {
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .song {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 75%;
    }

    .song__cover-art {
        width: 85%;
        padding-top: 85%;
        background-color: gray;
    }

    .progression {
        width: 85%;
        height: 40px;
        margin-top: 10%;
        background-color: gray;
    }




</style>