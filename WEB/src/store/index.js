import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import alert from './alert'
import datatable from './datatable'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        alert,
        datatable,
    }
});