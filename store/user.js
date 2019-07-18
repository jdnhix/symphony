import Vue from 'vue'


export default {
    state :{
        accessToken
    },
    mutations: {
        commitToken(state, payload) {
            state.accessToken = payload
        }

    },
    actions: {
        getToken({commit, dispatch}, params) {
            const api = `${Vue.$symphonyConfig.host}/login`

            return Vue.$net.get(api, params).then(res => {
                console.log(res)
                commit('commitUsername', res.data)
                return res
            })
        }
    }



}