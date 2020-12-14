import Vue from 'vue'
import Vuex from 'vuex'

import datatable from './datatable'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        datatable,
    }
});