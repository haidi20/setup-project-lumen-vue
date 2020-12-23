import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Dashboard from '@/components/dashboard'
import Post from '@/components/post'

Vue.use(VueRouter)

export const listRoute = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        icon: 'mdi-view-dashboard'
    },
    {
        path: null,
        name: 'Master',
        component: null,
        icon: null,
        childs: [{
            path: '/post',
            name: 'Post',
            component: Post,
            icon: 'mdi-folder'
        }]
    },
]

export const routes = (
    listRoute.map((v) => flatten(v))
)

function flatten(item, final = {}) {
    if (item['childs'] != undefined) {
        item['childs'].map(value =>
            flatten(value, final)
        )
    } else {
        for (let key in item) {
            final[key] = item[key]
        }
    }

    return final;
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router