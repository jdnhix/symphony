<template>
    <div id='nav' >

        <p><a href="/">Symphony</a></p>
        <div id='buttons'>
            <button>about</button>
            <button>create room</button>
        </div>


    </div>
</template>




<script>

    export default {
        name: 'Nav'
    }

</script>

<!-- todo ask cameron about styling in vue/webpack issue -->
<style scoped lang="scss">

    #nav {
        width: 95%;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2.5%;
    }

    #buttons {

    }


</style>

