import Vue from 'vue'
import querystring from 'querystring'


export default {
	state: {
		accessToken: null,
		refreshToken: null,
		hostId: null
	},
	mutations: {
		commitAccessToken(state, payload) {
			state.accessToken = payload.access_token
			console.log(payload.expires_in)
		},
		commitRefreshToken(state, payload) {
			state.refreshToken = payload.refresh_token
		},
		commitHostId(state, payload) {
			state.hostId = payload._id
		}

	},
	actions: {
		async getCode() {
			try {
				const api = `${Vue.$symphonyConfig.host}/auth`
				const response = await Vue.$net.get(api)
				if (response.data.url) {
					window.location.href = response.data.url;
				}
			} catch (e) {
				console.log(e);
			}
		},
		getToken({commit, dispatch}, params) {
			const api = `${Vue.$symphonyConfig.host}/user`

			return Vue.$net.post(api, params).then(res => {
				commit('commitAccessToken', res.data)
				commit('commitRefreshToken', res.data)
			})
		},
		refreshAccessToken({commit, dispatch}, params) {
			const api = `${Vue.$symphonyConfig.host}/refresh_token`

			return Vue.$net.post(api, params).then(res => {
				console.log(res.data)
				commit('commitAccessToken', res.data)
			})
		},
		setHostId({commit, dispatch}, room) {
			commit('commitHostId', room)
		}
	}

}