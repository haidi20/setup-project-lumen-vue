import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Dashboard from '@/components/dashboard'
import Post from '@/components/post'

Vue.use(VueRouter)

export const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        icon: 'mdi-view-dashboard'
    },
    {
        path: '/post',
        name: 'Post',
        component: Post,
        icon: 'mdi-folder'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router