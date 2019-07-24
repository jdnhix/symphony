import Vue from 'vue'
import Vuex from 'vuex'
import room from './room.js'
import user from './user.js'
import queue from './queue.js'
import player from './player.js'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

const modules = {
    room,
    user,
    queue,
    player,
}

const store = new Vuex.Store({modules, plugins: [createPersistedState()]})

export default store