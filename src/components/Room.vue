<template>
	<div class="room">
		<RoomPlayer :room-id="this.roomId" />
		<Queue :room-id="this.roomId" />
		<button
			class="home-button"
			@click="goHome"
		>
			HOME
		</button>
	</div>
</template>


<script>
import RoomPlayer from './RoomPlayer.vue'
import Queue from './Queue.vue'
import Nav from './Nav.vue'

export default {
	name: 'Room',
	components: {Nav, RoomPlayer, Queue},
	data() {
		return {
			roomId: null,
		}
	},
	watch: {
		'$route.query' : {
			immediate: true,
			handler(newVal, oldVal) {
				this.roomId = newVal.roomId
			}
		}
	},
	mounted() {
		this.$socket.emit('join', this.roomId)
	},
	beforeDestroy() {
		this.$socket.emit('leave', this.roomId)
	},
	methods: {
		goHome(){
			this.$router.push({path: '/'})
		}
	}
}
</script>

<style>

    .room {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }

	.home-button {
		height: 20px;
		float: right;
	}


</style>
