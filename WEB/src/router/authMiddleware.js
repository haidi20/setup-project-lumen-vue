import store from '@/store'

export default (to, from, next) => {
    if (store.state.auth.token == null || store.state.auth.token == '') {
        next('/sign-in')
    } else {
        next();
    }
}