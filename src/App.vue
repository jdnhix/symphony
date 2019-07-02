

<template>
    <div id='app'>
        <router-view/>
    </div>
</template>


<script>
    import Test from './Test.vue'

    export default {
        name: 'App',
        components: {Test}
    }

</script>