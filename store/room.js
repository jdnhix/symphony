import Vue from 'vue'


export default {
    state :{
        roomList: null
    },
    mutations: {
        commitRooms(state, payload) {
            state.roomList = payload
        }

    },
    actions: {
        getRooms({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/getAllRooms`

            return Vue.$net.get(api, params).then(res => {
                console.log(res)
                commit('commitRooms', res.data)
                return res
            })
        }
    }



}
