import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Post from '@/components/post'
import User from '@/components/user'
import Layout from '@/components/_layouts'
import Master from '@/components/master'
import SignIn from '@/components/auth/signIn'
import Dashboard from '@/components/dashboard'

Vue.use(VueRouter)

export const routes = [{
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
        icon: null
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        icon: null,
        children: [{
                path: '/',
                name: 'Dashboard',
                component: Dashboard,
                icon: 'mdi-view-dashboard'
            },
            {
                path: '/master',
                icon: 'mdi-folder',
                name: 'Master',
                active: false,
                component: Master,
                children: [{
                        icon: null,
                        name: 'User',
                        path: '/master/user',
                        component: User,
                    },
                    {
                        icon: null,
                        name: 'Post',
                        path: '/master/post',
                        component: Post,
                    }
                ]
            },
        ]
    },
];

// function flatten(item, final = {}) {
//     if (item['children'] != undefined) {
//         item['children'].map(value =>
//             flatten(value, final)
//         )
//     } else {
//         for (let key in item) {
//             final[key] = item[key]
//         }
//     }

//     return final;
// }

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router