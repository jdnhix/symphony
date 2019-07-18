import Vue from 'vue'

export default {
    actions: {
        //todo this might need to use websockets
        pauseSong({commit, dispatch}) {
            const api = `${Vue.$symphonyConfig.host}/pause`
            return Vue.$net.post(api).then( res => {
                return res
            })

        }


    }

}