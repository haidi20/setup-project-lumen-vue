// partials
import datatableStates from './datatableStates'
import datatableGetters from './datatableGetters'
import datatableMutations from './datatableMutations'
import datatableActions from './datatableActions'

const datatable = {
    namespaced: true,
    state: datatableStates,
    getters: datatableGetters,
    mutations: datatableMutations,
    actions: datatableActions,
}

export default datatable