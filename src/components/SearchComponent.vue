<template>
	<div class="searchComponent">
		<input
			v-model="text"
			placeholder="Search"
			title="Search"
			type="text"
			class="search__box"
		>
	</div>
</template>


<script>
export default {
	name: 'SearchComponent',
	props: {
		value: {
			type: String,
			default: null
		}
	},
	data () {
		return {
			text: 'test'
		}
	},
	watch: {
		value: {
			immediate: true,
			handler(newVal, oldVal) {
				this.text = newVal
			}
		},
		text(value) {
			this.$emit('input', value)
		}
	}
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