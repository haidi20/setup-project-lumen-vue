// partials
import datatableStates from './_partials/datatableStates'
import datatableGetters from './_partials/datatableGetters'
import datatableMutations from './_partials/datatableMutations'
import datatableActions from './_partials/datatableActions'

const datatable = {
    namespaced: true,
    state: datatableStates,
    getters: datatableGetters,
    mutations: datatableMutations,
    actions: datatableActions,
}

export default datatable