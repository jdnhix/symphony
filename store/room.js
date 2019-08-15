import Vue from 'vue'


export default {
	state :{
		roomList: [
		],
		selectedRoom: null
	},
	mutations: {
		commitRooms(state, payload) {
			state.roomList = payload
		},
		commitRoom(state, payload) {
			state.selectedRoom = payload
		},
		pushRoom(state, payload) {
			state.roomList.push(payload)
		},
		// todo get this to work
		commitAudienceSize(state, payload) {
			// console.log(payload)
			state.roomList = state.roomList.map((room) => {
				if(room._id === payload.roomId){
					if(payload.dir === 'inc'){
						++room.audienceSize
					} else {
						--room.audienceSize
					}
				}
			})

			if(payload === 'inc'){
				++state.selectedRoom.audienceSize
			} else {
				--state.selectedRoom.audienceSize
			}
			console.log(state.selectedRoom.audienceSize)
		},
		removeRoom(state, payload) {
		    state.roomList = state.roomList.map(room => {
		        return room._id !== payload.roomId
			})
		},
		SOCKET_UPDATETOKEN(state, token){
			state.selectedRoom.accessToken = token[0]
		}
	},
	actions: {
		getRooms({commit, dispatch}, params) {
			const api = `${Vue.$symphonyConfig.host}/room`

			return Vue.$net.get(api, params).then(res => {
				// console.log(res)
				commit('commitRooms', res.data)
				return res
			})
		},
		getRoom({commit, dispatch}, params) {
			const api = `${Vue.$symphonyConfig.host}/room`

			return Vue.$net.get(api, params).then( res => {
				// console.log(res)
				commit('commitRoom', res.data[0])
				commit('setCurrentSong', res.data[0].currentSong)
				dispatch('setQueue', res.data[0])
				return res
			})
		},
		addRoom({commit, dispatch}, room) {
			commit('pushRoom', room)
		},
		changeAudienceSize({commit}, params) {
			commit('commitAudienceSize', params)
		},
		closeRoom({commit}, params) {
		    commit('removeRoom', params)
		}
	}



}
