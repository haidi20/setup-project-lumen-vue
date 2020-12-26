import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import createPersistedState from "vuex-persistedstate"

import auth from './auth'
import alert from './alert'
import datatable from './datatable'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        alert,
        datatable,
    },
    plugins: [createPersistedState({
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
            removeItem: key => Cookies.remove(key)
        }
    })],
});