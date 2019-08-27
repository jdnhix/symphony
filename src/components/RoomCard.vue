<template>
	<div>
		<div class="card">
			<img :src="room.currentSong.coverArt" class="room-coverart"/>

			<div class="card-header">
				<p class="room-name">{{ room.roomName }}</p>
				<p class="room-host">Hosted by: {{ room.hostName }}</p>

				<img v-if="room.roomType === 'private'" src="../assets/img/lock-solid (1).svg" class="room-lock"/>
				<img v-else src="../assets/img/unlock-solid.svg" class="room-lock"/>
			</div>

			<br>

			<div class="card-footer">
				<img src="../assets/img/headphones-solid.svg" class="ma0 pa0"/>
				<p class="ma0 room-songname">{{ room.currentSong.songName }} - {{ room.currentSong.artistName }}</p>
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
		width: 300px;
		height: 300px;
		border-radius: 5px;
		box-shadow: none;
		border: 1px solid #4a4e69;
		margin: 10px;
		display: block;
		position: relative;

	}

	.card:hover {
		cursor: pointer;
		box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.16);
	}

	.room-coverart {
		position: absolute;
		width: auto;
		border-radius: 5px;
		/*-webkit-filter: blur(10px);*/
		/*filter: blur(10px);*/
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
		font-size: 2.6rem;
		font-weight: bold;
		text-align: left;
		padding: 7px 0 0 10px;
		margin: 0;
		height: 40px;
	}

	.room-host {
		font-size: 1.7rem;
		font-weight: 200;
		margin: 0;
		padding: 3px 0 0 10px;
	}

	.room-lock {
		position: relative;
		left: 265px;
		bottom: 23px;
		width: 20px;

	}

	.card-footer {
		position: absolute;
		height: 20%;
		width: 100%;
		background: $color-navy;
		bottom: 0;
		border-radius: 0 0 5px 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.room-songname {
		font-size: 1.7rem;
		font-weight: 200;
		text-align: left;
	}

</style>
