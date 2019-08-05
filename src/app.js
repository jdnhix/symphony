import Vue from 'vue'
import App from './components/App.vue'
import router from './router.js'
import store from '../store'
import net from '../net.js'
import symphony from '../src/symphony-config.js'
import socketIO from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(net)
Vue.use(symphony)
Vue.use(socketIO, 'ec2-3-81-207-118.compute-1.amazonaws.com:3000')


new Vue({
    el: '#app',
    render: a => a(App),
    router,
    store
})

