import store from '@/store'

export default (to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.state.auth.token === null) {
            next('/sign-in');
        } else {
            next();
        }
    } else {
        next();
    }

}