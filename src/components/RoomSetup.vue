<template>
	<div class="room-setup vh-100">
		<div class="room-setup__card center">
			<form>
				<div class="input-field">
					<h2 class="input-field__name">
						ROOM NAME
					</h2>
					<input
						v-model="roomName"
						type="text"
						required
						class="input-textbox"
					>
				</div>

				<div class="input-field">
					<h2 class="input-field__name">
						HOST NAME
					</h2>
					<input
						v-model="hostName"
						type="text"
						required
						class="input-textbox"
					>
				</div>

				<div class="input-field">
					<h2>ROOM TYPE</h2>
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
					>
					<div v-if="roomType === 'private'">
						Password
						<input
							v-model="password"
							type="text"
							placeholder="Enter Password"
						><br>
					</div>
				</div>

				<br><br>
			</form>
			<button
				:disabled="!formCompleted"
				class="submit-button"
				@click="makeRoom"
			>
				ADD ROOM
			</button>
			<button
				class="submit-button"
			>
				CANCEL
			</button>
		</div>
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
	computed: {
		formCompleted () {
			if(this.roomType === 'public'){
				return (this.roomType.length && this.roomName.length && this.hostName.length) > 0
			} else if (this.roomType === 'private') {
				return (this.roomType.length && this.roomName.length && this.hostName.length && this.password.length) > 0
			}
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
				accessToken: this.$store.state.user.accessToken,
				refreshToken: this.$store.state.user.refreshToken
			}
			this.$socket.emit('addRoom', roomInfo)
			// this.$router.push({ path: '/room', query: {roomId: ._id} }) todo i want to make so that it goes directly to the room
			this.$router.push({path: '/'})
		},

	}
}
</script>

<style lang="scss" scoped>
	@import '../css/variables.scss';


	.room-setup {
		background: $color-navy;
		color: $color-cream;
	}

	.room-setup__card {
		background: $color-lightnavy;
		height: 500px;
		width: 870px;
		border-radius: 5px;
		font-size: 2.5rem;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;

	}

	.center {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.input-textbox {
		border: solid 1px $color-cream;
		border-radius: 2px;
		background: none;
		width: 250px;
		height: 50px;

	}

	h2 {
		margin: 0;

	}

	.input-field {
		text-align: center;
		margin: 2rem;
	}

	.input-field__name {
		margin-bottom: 7px;
	}

	.submit-button {

	}



</style>
