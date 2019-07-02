const config = {
    host: '${HOST}'
}

export default {
    install(Vue) {
        Vue.$symphonyConfig = config
        Vue.prototype.$symphonyConfig = config
    }
}