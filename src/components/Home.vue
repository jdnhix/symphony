<template>
	<div class="home vh-100">
		<Popup
			v-if="popupVisible"
			:data="popupData"
			@close="popupVisible = false"
		/>
		<Nav class />

		<h2>Description text here</h2>

		<ul v-if="rooms && rooms.length">
			<li
				v-for="room in rooms"
				class="room-list"
				@click="goToRoom(room)"
			>
				<RoomCard
					:room="room"
					class="room-cards"
				/>
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
import RoomCard from './RoomCard.vue'

export default {
	name: 'Home',
	components: {SearchComponent, Nav, Popup, RoomCard},
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


<style lang="scss" scoped>
	@import '../css/variables.scss';


	.home {
        display: flex;
        flex-direction: column;
        align-items: center;
		background-image: linear-gradient(to bottom, #22223b, #6b6b7c);
		color: $color-cream;

	}

    .search {
        margin: 50px 0 20px 0;
    }

	.room-list {
		list-style: none;
	}


    ul {
        width: 75%;
        max-width: 1000px;
    }


</style>
