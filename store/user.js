import Vue from 'vue'
import querystring from 'querystring'


export default {
    state: {
        accessToken: 'hi' //todo this is not available in other components
    },
    mutations: {
        commitAccessToken(state, payload) {
            state.accessToken = payload
        }
    },
    actions: {
        async getCode({commit, dispatch}) {
            try {
                const api = `${Vue.$symphonyConfig.host}/auth`
                const response = await Vue.$net.get(api)
                if (response.data.url) {
                    window.location.href = response.data.url;
                }
            } catch (e) {
                console.log(e);
            }
        },
        async getToken({commit, dispatch}, params) {
            console.log(params.code)
            const api = `${Vue.$symphonyConfig.host}/user2`

            return Vue.$net.post(api, params).then(res => {
                console.log(res)
                commit('commitAccessToken', res.data)
                return res
            })
        }
    }


}