import Vue from 'vue'


export default {
	state: {
		searchResults: null,
		queue: []
	},
	mutations: {
		commitSearchResults(state, payload) {
			state.searchResults = payload
		},
		pushQueue(state, payload) {
			state.queue.push(payload)

			state.queue = state.queue.sort((a,b) => {
				return b.rank - a.rank
			})
		},
		pullQueue(state, payload) {
			const index = state.queue.findIndex(element => {
				return element.songId === payload.songId
			})

			if (index === 0) {
				state.queue.shift()
			} else {
				state.queue.splice(index, index)
			}
		},
		setQueue(state, payload) {
			state.queue = payload
		},
		commitSongRank(state, payload) {
			const index = state.queue.findIndex(element => {
				return element.songId === payload.song.songId
			})

			if(payload.direction === 'inc'){
				++state.queue[index].rank
			} else {
				--state.queue[index].rank
			}

			state.queue = state.queue.sort((a,b) => {
				return b.rank - a.rank
			})
		},
		SOCKET_SONGSEARCHRESULTS(state, results){
			console.log(results)
			state.searchResults = results[0]
		}
	},
	actions: {
		getSearchResults({commit, dispatch}, params) {
		    console.log(params)
			const api = `${Vue.$symphonyConfig.host}/search`

			return Vue.$net.get(api, params).then(res => {
				commit('commitSearchResults', res.data)
				return res
			})
		},
		addSongToQueue({commit, dispatch}, song) {
			commit('pushQueue', song)
		},
		setQueue({commit, dispatch}, room) {
			commit('setQueue', room.queue)
		},
		removeQueueItem({commit, dispatch}, params) {
			commit('pullQueue', params)
		},
		changeSongRank({commit, dispatch}, params) {
			commit('commitSongRank', params)
		}
	}


}