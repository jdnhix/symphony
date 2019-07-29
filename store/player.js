import Vue from 'vue'

export default {
    state: {
        currentSong: null,
        playback: null
    },
    mutations: {
        setCurrentSong(state, payload) {
            if (payload) {
                state.currentSong = payload
            } else {
                //todo change 'playing' key of currentsong here
            }
        },
        setPlayback(state, payload) {
            console.log(payload)
            state.playback = payload
        }
    },
    actions: {
        //todo this might need to use websockets
        pauseSong({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/pause`
            return Vue.$net.post(api, params).then(res => {
                return res
            })
        },
        playSong({commit, dispatch}, params) {
            commit('setCurrentSong', params.song)
            commit('pullQueue', params.song)
        },
        nextSong({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/next`
            return Vue.$net.post(api, params).then(res => {
                return res
            })
        },
        previousSong({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/previous`
            return Vue.$net.post(api, params).then(res => {
                return res
            })
        },
        getPlayback({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/currentPlayback`
            return Vue.$net.post(api, params).then(res => {
                commit('setPlayback', res.data)
            })
        }


    }

}