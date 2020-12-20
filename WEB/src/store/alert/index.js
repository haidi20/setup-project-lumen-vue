// partials
import alertState from './_partials/alertState'
import alertGetters from './_partials/alertGetters'
import alertMutations from './_partials/alertMutations'
import alertActions from './_partials/alertActions'

const alert = {
    namespaced: true,
    state: alertState,
    getters: alertGetters,
    actions: alertActions,
    mutations: alertMutations,
}

export default alert