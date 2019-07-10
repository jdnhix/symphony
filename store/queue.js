import Vue from 'vue'


export default {
    state :{
        searchResults: null
    },
    mutations: {
        commitSearchResults(state, payload) {
            state.searchResults = payload
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
        addSongToQueue({commit, dispatch }, params) {
            console.log(params)
            const api = `${Vue.$symphonyConfig.host}/addSongToQueue`

            return Vue.$net.post(api, params).then(res => {
                console.log(res)
                return res
            })
        },
        removeQueueItem({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/removeSongFromQueue`

            return Vue.$net.post(api, params).then(res => {
                console.log(res)
                return res
            })
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