<template>
	<h1>test</h1>
</template>

<script>
export default {
	name: 'WebPlayer',
	mounted () {
		this.initiatePlayer()
	},
	methods : {
		waitForSpotifyWebPlaybackSDKToLoad: async function () {
			return new Promise(resolve => {
				if (window.Spotify) {
					console.log('waitfor', window.Spotify)
					resolve(window.Spotify)
				} else {
					window.onSpotifyWebPlaybackSDKReady = () => {
						resolve(window.Spotify)
					}
				}
			})
		},
		initiatePlayer: async function () {
			const playerToken = this.$store.state.user.accessToken
			const { Player } = await this.waitForSpotifyWebPlaybackSDKToLoad()
			const sdk = new Player({
				name: 'Symphony Web Player',
				volume: 1.0,
				getOAuthToken: callback => { callback(playerToken) }
			})
			console.log(JSON.stringify(sdk))
			// Error handling
			sdk.addListener('initialization_error', ({ message }) => { console.log('Initialization_error: ' + message) })
			sdk.addListener('authentication_error', ({ message }) => { console.log('Authentication_error: ' + message) })
			sdk.addListener('account_error', ({ message }) => { console.log('Account_error: ' + message) })
			sdk.addListener('playback_error', ({ message }) => { console.log('Playback_error: ' + message) })
			// Playback status updates
			sdk.addListener('player_state_changed', state => {
				// Update UI information on player state changed
			})
			// Ready
			sdk.addListener('ready', ({ device_id }) => {
				console.log('Ready with Device Id: ', device_id)
			})
			// Not Ready
			sdk.addListener('not_ready', ({ device_id }) => {
				console.log('Not ready with device Id: ', device_id)
			})
			sdk.connect().then(success => {
				if(success) {
					console.log('The Web Playback SDK successfully connected to Spotify!');
				}

			})
		}
	}

}


</script>


