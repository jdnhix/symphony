<template>
	<div class="home">
		<Popup
			v-if="popupVisible"
			:data="popupData"
			@close="popupVisible = false"
		/>
		<Nav class />

		<ul v-if="rooms && rooms.length">
			<li
				v-for="room in rooms"
				class="room-card"
				@click="goToRoom(room)"
			>
				<p>{{ room.roomName }}</p>
				<p>{{ room.hostName }}</p>
				<p>{{ room.audienceSize }}</p>
				<p>{{ room.currentSong.songName }} - {{ room.currentSong.artistName }}</p>
				<p>{{ room.roomType }}</p>
			</li>
		</ul>

		<h2 v-else>
			No rooms
		</h2>
	</div>
</template>

<script>
import Nav from './Nav.vue'
import SearchComponent from './SearchComponent.vue'
import Popup from './Popup.vue'

export default {
	name: 'Home',
	components: {SearchComponent, Nav, Popup},
	data() {
		return {
			roomsList: null,
			popupVisible: false,
			popupData: null
		}
	},
	computed: {
		rooms() {
			return this.$store.state.room.roomList || [
			]
		}
	},
	mounted() {
		this.$store
			.dispatch('getRooms')
			.catch(err => console.log('Error getting rooms', err))
	},
	methods: {
		goToRoom(room) {
			if (room.roomType === 'private') {
				this.popupData = room
				this.popupVisible = true
			} else {
				const data = room
				this.$router.push({path: '/room', query: {roomId: data._id}})
			}
		}

	}
}
</script>


<style scoped>

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .search {
        margin: 50px 0 20px 0;
    }

    .room-card {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100px;
        margin: 20px 0;
        border: 1px solid black;
        border-radius: 5px;
    }

    .room-card:hover {
        cursor: pointer;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.16);
    }

    ul {
        width: 75%;
        max-width: 1000px;
    }


</style>