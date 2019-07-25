import Vue from 'vue'


export default {
    state :{
        roomList: null,
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
            console.log(payload)
        },
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
        }
    }



}
