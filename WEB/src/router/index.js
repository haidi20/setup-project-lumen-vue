import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Dashboard from '@/components/dashboard'
import Post from '@/components/post'

Vue.use(VueRouter)

export const listRoute = [{
        path: '/',
        active: false,
        name: 'Dashboard',
        component: Dashboard,
        icon: 'mdi-view-dashboard'
    },
    {
        path: null,
        icon: 'mdi-folder',
        active: false,
        name: 'Master',
        component: null,
        childs: [{
            icon: null,
            name: 'Post',
            active: false,
            path: '/post',
            component: Post,
        }]
    },
]

const routes = (
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