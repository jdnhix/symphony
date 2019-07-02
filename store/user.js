import Vue from 'vue'


export default {
    state :{
        username: null
    },
    mutations: {
        commitUsername(state, payload) {
            state.username = payload
        }

    },
    actions: {
        getUsername({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/login`

            return Vue.$net.get(api, params).then(res => {
                console.log(res)
                commit('commitUsername', res.data)
                return res
            })
        }
    }



}