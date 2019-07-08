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
                // console.log(res)
                commit('commitSearchResults', res.data)
                return res
            })
        },
        addSongToQueue({commit, dispatch }, params) {
            const api = `${Vue.$symphonyConfig.host}/testAdd`

            return Vue.$net.get(api, params).then(res => {
                // console.log(res)
                commit('commitSearchResults', res.data)
                return res
            })
        }

    }



}