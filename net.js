import axios from 'axios'

export const net = {
    request(config) {
        return axios.request(config)
    },
    get(url, config) {
        const defaultConfig = {
            // needed for IE
            headers: {
                Pragma: 'no-cache',
            },
        }
        const newConfig = Object.assign(defaultConfig, config)
        return axios.get(url, newConfig)
    },
    delete(url, config) {
        return axios.delete(url, config)
    },
    head(url, config) {
        return axios.head(url, config)
    },
    post(url, data, config) {
        return axios.post(url, data, config)
    },
    put(url, data, config) {
        return axios.put(url, data, config)
    },
    patch(url, data, config) {
        return axios.patch(url, data, config)
    },
}

export default {
    install(Vue) {
        Vue.$net = net
        Vue.prototype.$net = net
    },
}
