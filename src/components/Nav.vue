<template>
	<div class="nav w-100">
		<div class="title pl2">
			<img src="../assets/img/SyphonyLogo.png" class="title__logo"/>
			<h2 class="title__text">ymphony</h2>
		</div>

		<div class="button">
			<button
				class="button__item"
				@click="login"
			>
				ADD ROOM
			</button>
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
	@import '../css/variables.scss';

    .nav {
		height: 70px;
        width: 100%;
        border-bottom: 1px solid rgba(242, 233, 228, .4);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
		margin-left: 45px;
		display: flex;
		align-items: baseline;
    }

	.title__logo {
		position: relative;
		top: 20px;
		width: 25px;
	}

	.title__text {
		color: $color-cream;
		font-size: 2rem;
		font-weight: bold;
		padding-left: 2px;
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
		color: $color-cream;
		font-size: 2rem;
		font-weight: bold;
		background: none;
		border: none;
    }

    .button__item:hover {
        cursor: pointer;
    }


</style>

