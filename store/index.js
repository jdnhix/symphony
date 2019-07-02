import Vue from 'vue'
import Vuex from 'vuex'
import room from './room.js'
import user from './user.js'


Vue.use(Vuex)

const modules = {
    room,
    user
}

const store = new Vuex.Store({modules})

export default store