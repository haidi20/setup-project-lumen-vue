import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Dashboard from '@/components/dashboard'
import Post from '@/components/post'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/post',
        name: 'Post',
        component: Post
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router