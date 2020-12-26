import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Post from '@/components/post'
import User from '@/components/user'
import Layout from '@/components/_layouts'
import Master from '@/components/master'
import SignIn from '@/components/auth/signIn'
import Dashboard from '@/components/dashboard'

// middleware
import auth from './authMiddleware'

Vue.use(VueRouter)

export const routes = [{
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
        icon: null,
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
                icon: 'mdi-view-dashboard',
                meta: {
                    requiresAuth: true
                }
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
                        meta: {
                            requiresAuth: true
                        }
                    },
                    {
                        icon: null,
                        name: 'Post',
                        path: '/master/post',
                        component: Post,
                        meta: {
                            requiresAuth: true
                        }
                    }
                ]
            },
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach(auth);

export default router