const config = {
	host: '${HOST}',
	wshost: '${WSHOST}'
}

export default {
	install(Vue) {
		Vue.$symphonyConfig = config
		Vue.prototype.$symphonyConfig = config
	}
}