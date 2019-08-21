<template>
	<div class="nav w-100">
		<div class="title pl2 w-100 flex flex-column flex-row justify-between">
			<div>
				<a
					class="white"
					href="/"
				>Symphony</a>
			</div>

			<div class="button">
				<button
					class="button__item"
					@click="login"
				>
					Create Room
				</button>
			</div>
		</div>
	</div>
</template>


<script>
import Vue from 'vue'

export default {
	name: 'Nav',
	methods: {
		login() {
			this.$store.dispatch('getCode')
		}
	}
}

</script>


<style scoped lang="scss">

    .nav {
        width: 100%;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .title {

    }

    .button {
        display: flex;
        flex-direction: row;
        width: 15%;
        max-width: 200px;
        justify-content: space-around;
    }

    .button__item {
        width: auto;
        height: 30px;
        border: 1px solid gray;
    }

    .button__item:hover {
        cursor: pointer;
    }


</style>

