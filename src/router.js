import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Test from './Test.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Test
            // redirect: () => {
            //     return '/home'
            // }
        }



    ]



})

export default router
