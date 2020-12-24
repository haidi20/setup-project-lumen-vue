// partials
import alertStates from './_partials/alertStates'
import alertGetters from './_partials/alertGetters'
import alertMutations from './_partials/alertMutations'
import alertActions from './_partials/alertActions'

const alert = {
    namespaced: true,
    state: alertStates,
    getters: alertGetters,
    actions: alertActions,
    mutations: alertMutations,
}

export default alert