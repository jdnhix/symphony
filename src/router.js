import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Room from './components/Room.vue'
import Nav from './components/Nav.vue'
import RoomSetup from './components/RoomSetup.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: Home
        },
        {
            path: '/',
            component: Home
            // redirect: () => {
            //     return '/home'
            // }
        },
        {
            path:'/room',
            component: Room
        },
        {
            path:'/setup',
            component: RoomSetup
        }
    ]



})

export default router
