<template>
	<div>
		<div class="card">
			<div class="card-header">
				<p>{{ room.roomName }}</p>
				<p>{{ room.hostName }}</p>
				<p>{{ room.roomType }}</p>
			</div>


			<p>{{ room.audienceSize }}</p>
			<p>{{ room.currentSong.songName }} - {{ room.currentSong.artistName }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "RoomCard",
	props: ['room']
}
</script>

<style scoped>
	@import '../css/variables.scss';


	.card {
		width: 260px;
		height: 260px;
		border-radius: 5px;
		box-shadow: none;
		border: 1px solid black;
	}

	.card:hover {
		cursor: pointer;
		box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.16);
	}

	.card-header{
		background: $color;
	}

</style>
