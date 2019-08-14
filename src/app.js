import Vue from 'vue'
import App from './components/App.vue'
import router from './router.js'
import store from '../store'
import net from '../net.js'
import symphony from '../src/symphony-config.js'
import vueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client'

Vue.config.productionTip = false
Vue.use(net)
Vue.use(symphony)
Vue.use(vueSocketIO, socketio(Vue.$symphonyConfig.wshost))


new Vue({
	el: '#app',
	render: a => a(App),
	router,
	store
})

