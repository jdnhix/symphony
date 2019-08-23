<template>
	<div>
		<div class="card">

			<div class="card-header">
				<p class="room-name">{{ room.roomName }}</p>
				<p class="room-host">Hosted by: {{ room.hostName }}</p>

				<img v-if="room.roomType === 'private'" src="../assets/img/lock-solid (1).svg" class="room-lock"/>
				<img v-else src="../assets/img/unlock-solid.svg" class="room-lock"/>

			</div>

			<br>

			<div class="card-footer">
				<p>{{ room.audienceSize }}</p>
				<p>{{ room.currentSong.songName }} - {{ room.currentSong.artistName }}</p>
			</div>



		</div>
	</div>
</template>

<script>
export default {
	name: "RoomCard",
	props: ['room']
}
</script>

<style lang="scss" scoped>
	@import '../css/variables.scss';


	.card {
		width: 260px;
		height: 260px;
		border-radius: 5px;
		box-shadow: none;
		border: 1px solid #4a4e69;
		margin: 10px;
		display: block;
	}

	.card:hover {
		cursor: pointer;
		box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.16);
	}

	.card-header{
		background: $color-navy;
		width: 100%;
		height: 28%;
		position: relative;
		margin: 0;
		border-radius: 5px 5px 0 0;
		display: block;

	}

	.room-name {
		font-size: 2.5rem;
		font-weight: bold;
		text-align: left;
		padding: 7px 0 0 10px;
		margin: 0;
		height: 40px;
	}

	.room-host {
		font-size: 1.6rem;
		font-weight: 200;
		margin: 0;
	}


	.card-footer {
		position: relative;
		top: 100px;
	}

</style>
