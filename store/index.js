import Vue from 'vue'
import Vuex from 'vuex'
import room from './room.js'
import user from './user.js'
import queue from './queue.js'


Vue.use(Vuex)

const modules = {
    room,
    user,
    queue
}

const store = new Vuex.Store({modules})

export default store