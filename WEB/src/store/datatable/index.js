// partials
import datatableState from './_partials/datatableState'
import datatableGetters from './_partials/datatableGetters'
import datatableMutations from './_partials/datatableMutations'
import datatableActions from './_partials/datatableActions'

const datatable = {
    namespaced: true,
    state: datatableState,
    getters: datatableGetters,
    mutations: datatableMutations,
    actions: datatableActions,
}

export default datatable