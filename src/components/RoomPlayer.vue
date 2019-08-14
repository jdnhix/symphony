<template>
	<div class="room-player">
		<div class="room-info">
			<div class="room-info__title">
				<h1>{{ room && room.roomName }}</h1>
				<h3>{{ room.hostName }}</h3>
			</div>
			<p class="'room-info__audience-count">
				{{ room && room.audienceSize }}
			</p>
		</div>


		<div class="song">
			<h2>{{ currentSong.songName }}</h2>
			<h3>{{ currentSong.artistName }}</h3>
			<img
				:src="currentSong.coverArt"
				class="song__cover-art"
			>

			<div class="progression">
				Song Progression
			</div>

			<div
				v-if="owner"
				class="controls"
			>
				<button @click="previousSong">
					previous
				</button>
				<!--                <button v-show="!roomIsPlaying" @click="nextSong">play(next song one)</button>-->
				<button
					v-show="musicPaused"
					@click="playSong"
				>
					play
				</button>
				<button
					v-show="!musicPaused && roomIsPlaying"
					@click="pauseSong"
				>
					pause
				</button>
				<button @click="nextSong">
					next
				</button>
				<button @click="getPlayback">
					Current Playback
				</button>
				{{ playback }}
			</div>
			<button @click="closeRoom">
				Close Room
			</button>
		</div>
	</div>
</template>


<script>
import WebPlayer from './WebPlayer.vue'


//todo delete this if not needed
function Timer(callback, delay) {
	var args = arguments,
		self = this,
		timer, start;

	this.clear = function () {
		clearTimeout(timer);
	};

	this.pause = function () {
		this.clear();
		delay -= new Date() - start;
	};

	this.resume = function () {
		start = new Date();
		timer = setTimeout(function () {
			callback.apply(self, Array.prototype.slice.call(args, 2, args.length));
		}, delay);
	};

	this.resume();
}


export default {
	name: 'RoomState',
	components: { WebPlayer },
	props: [
		'roomId'
	],
	data() {
		return {
			roomIsPlaying: false,
			musicPaused: false,
		}
	},
	computed: {
		room() {
			// return this.$store.state.room.roomList.filter( (room) => {
			//     return room._id === this.roomId
			// })
			return this.$store.state.room.selectedRoom || [
			]
			//todo not sure if this method or the former is better
			//todo this method may become an issue when there are alot of rooms
		},
		currentSong() {
			return this.$store.state.player.currentSong || {}
		},
		accessToken() {
			return this.$store.state.user.accessToken
		},
		playback() {
			return this.$store.state.player.playback
		},
		owner() {
			return this.$store.state.user.hostId === this.roomId
		}
	},
	beforeCreate() {
		this.$store.dispatch('getRoom', {params: {roomId: this.roomId}})
		// this.$store
		//     .dispatch('getRooms')
		//     .catch(err => console.log('Error getting rooms', err))
	},
	methods: {
		pauseSong() {
			this.musicPaused = true
			this.$store.dispatch('pauseSong', {token: this.accessToken})
		},
		playSong() {
			console.log('song resumed')
			this.musicPaused = false
			this.$socket.emit('playSong', {token: this.accessToken, song: '', roomId: this.roomId})
		},
		nextSong() {
			this.roomIsPlaying = true
			const song = this.room.queue[0] //todo should probably get song from queue state instead
			if (song) {
				console.log('song started')
				this.$socket.emit('playSong', {token: this.accessToken, song: song, roomId: this.roomId})
			} else {
				console.log('no songs in queue')
				this.roomIsPlaying = false
				this.$socket.emit('clearCurrentSong', {roomId: this.roomId})
				//todo make this update the live rooms current song
			}
		},
		previousSong() {
			this.$store.dispatch('previousSong', {token: this.accessToken})
		},
		getPlayback() {
			this.$store.dispatch('getPlayback', {token: this.accessToken})
		},
		closeRoom(){
			this.$socket.emit('closeRoom', {roomId: this.roomId})
			this.$router.push({path: '/'})
		}
	},
	sockets: {
		musicStop: function () {
			console.log('song done')
			this.nextSong()
		},
		musicPause: function () {
			console.log('song paused')
			this.musicPaused = true
		}
	}
}
</script>

<style scoped>

    .room-player {
        width: 35%;
        height: 85%;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.16);

    }

    .room-info {
        height: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .song {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 75%;
    }

    .song__cover-art {
        /*width: 75%;*/
        /*height: 55%;*/
        max-width: 350px;
        max-height: 350px;
        /*padding-top: 75%;*/
        background-color: gray;
    }

    .progression {
        width: 75%;
        height: 20px;
        margin: 30px;
        background-color: gray;
        text-align: center;
    }


</style>