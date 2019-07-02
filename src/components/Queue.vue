<template>
    <div class="queue">
        <div class="search-container">
            <SearchComponent/>
        </div>

        <div class="queue-list">
            <QueueItem/>

        </div>


    </div>

</template>




<script>
    import SearchComponent from './SearchComponent.vue'
    import QueueItem from './QueueItem.vue'
    export default {
        name: 'Queue',
        components: {QueueItem, SearchComponent}
    }
</script>

<style>

    .queue {
        width: 35%;
        height: 85%;
        box-shadow: 0 0 8px 1px rgba(0,0,0,0.16);
        display: flex;
        flex-direction: column;
        align-items: center;

    }


    .search-container {
        width: 75%;
    }

    .queue-list{
        width: 80%;
    }


</style>