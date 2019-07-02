<template>
    <div class='searchComponent'>
            <input placeholder="Search" title="Search" type="text" class='search__box'/>
    </div>
</template>


<script>
    export default {
        name: 'SearchComponent'
    }
</script>

<style>
    .search__box{
        width: 100%;
        padding: 10px;
        font-weight: bold;
        font-size: 1rem;
    }

    .searchComponent {
        display: flex;
    }

</style>