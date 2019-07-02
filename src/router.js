import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Room from './components/Room.vue'
import Nav from './components/Nav.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
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
        }
    ]



})

export default router
