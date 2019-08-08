<template>
	<div>
		<Nav />
		room setup page
		<br>
		Access token: {{ this.$store.state.user.accessToken }}
		<br><br><br>

		<form>
			Room Name
			<input
				v-model="roomName"
				type="text"
				placeholder="Enter Room Name"
				required
			><br>

			Host Name
			<input
				v-model="hostName"
				type="text"
				placeholder="Enter Host Name"
				required
			><br>

			RoomType<br>
			<label for="public">Public</label>
			<input
				id="public"
				v-model="roomType"
				type="radio"
				value="public"
				required
			>
			<label for="private">Private</label>
			<input
				id="private"
				v-model="roomType"
				type="radio"
				value="private"
				required
			><br>

			<div v-if="roomType === 'private'">
				Password
				<input
					v-model="password"
					type="text"
					placeholder="Enter Password"
				><br>
			</div>


			Down Vote Limit
			<input
				v-model="downVoteLimit"
				type="number"
				min="0"
				value="0"
				required
			><br><br>
		</form>

		<button @click="makeRoom">
			Create
		</button>
	</div>
</template>

<script>
import Nav from './Nav.vue'

export default {
	name: "RoomSetup",
	components: {Nav},
	data() {
		return {
			roomName: '',
			hostName: '',
			roomType: '',
			password: '',
			downVoteLimit: 0,
		}
	},
	mounted() {
		this.$store.dispatch('getToken', {code: this.$route.query.code})
	},
	methods: {
		makeRoom() {
			const roomInfo = {
				roomName: this.roomName,
				hostName: this.hostName,
				roomType: this.roomType,
				password: this.password,
				downVoteLimit: this.downVoteLimit,
				accessToken: this.$store.state.user.accessToken
			}
			this.$socket.emit('addRoom', roomInfo)
			// this.$router.push({ path: '/room', query: {roomId: ._id} }) todo i want to make so that it goes directly to the room
			this.$router.push({path: '/'})
		},

	}
}
</script>

<style scoped>

</style>