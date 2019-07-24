import Vue from 'vue'

export default {
    state: {
        currentPlayback: null
    },
    mutations: {
        setCurrentPlayback(state, payload){
            state.currentPlayback = payload
        }
    },
    actions: {
        //todo this might need to use websockets
        pauseSong({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/pause`
            return Vue.$net.post(api, params).then( res => {
                return res
            })
        },
        playSong({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/play`
            return Vue.$net.post(api, params).then( res => {
                return res
            })
        },
        nextSong({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/next`
            return Vue.$net.post(api, params).then( res => {
                return res
            })
        },
        previousSong({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/previous`
            return Vue.$net.post(api, params).then( res => {
                return res
            })
        },
        getCurrentPlayback({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/currentPlayback`
            return Vue.$net.post(api, params).then( res => {
                commit('setCurrentPlayback', res.data)
            })
        }


    }

}