import Vue from 'vue'
import Vuex from 'vuex'

import alert from './alert'
import datatable from './datatable'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        alert,
        datatable,
    }
});