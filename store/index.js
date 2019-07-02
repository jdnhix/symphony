import Vue from 'vue'
import Vuex from 'vuex'
import room from './room.js'


Vue.use(Vuex)

const modules = {
    room
}

const store = new Vuex.Store({modules})

export default store