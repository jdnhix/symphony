<template>
	<div id="app">
		<router-view />
	</div>
</template>


<script>
import Home from './Home.vue'
import Room from './Room.vue'

export default {
	name: 'App',
	components: {Home, Room},
	mounted() {
		window.onSpotifyWebPlaybackSDKReady = () => {
		}
	},
	sockets: {
		connect: function () {
			console.log('socket connected')
		},
		addSongToQueue: function (song) {
			console.log('socket received')
			this.$store.dispatch('addSongToQueue', song)
		},
		removeQueueItem: function (params) {
			this.$store.dispatch('removeQueueItem', params)
		},
		addRoom: function (room) {
			this.$store.dispatch('addRoom', room)
		},
		changeAudienceSize: function (params) {
			this.$store.dispatch('changeAudienceSize', params)
		},
		setHostId: function (room) {
			this.$store.dispatch('setHostId', room)
		},
		playSong: function (params) {
			this.$store.dispatch('playSong', params)
		},
		changeSongRank: function (params) {
			this.$store.dispatch('changeSongRank', params)
		},
		clearCurrentSong: function (clear) {
			this.$store.dispatch('clearCurrentSong', clear)
		},
		closeRoom: function (params) {
			this.$store.dispatch('closeRoom', params)
		}
	}
}

</script>

<style>
    #app {
        width: 99vw;
        height: 100vh;
    }
</style>