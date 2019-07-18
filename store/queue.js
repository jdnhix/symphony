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
        },
        pullQueue(state, payload) {
            //todo fix problem of multiples of same song
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
        }

    },
    actions: {
        getSearchResults({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/search`
            console.log(params)

            return Vue.$net.get(api, params).then(res => {
                console.log(res)
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
            const api = `${Vue.$symphonyConfig.host}/songRank`

            return Vue.$net.post(api, params).then(res => {
                console.log(res)
                return res
            })
        },
        sort({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/sortQueue`
            console.log('sorting!')

            return Vue.$net.post(api, params).then(res => {
                console.log(res)
                return res
            })
        }

    }


}