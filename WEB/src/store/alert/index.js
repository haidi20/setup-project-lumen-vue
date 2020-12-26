// partials
import alertStates from './alertStates'
import alertGetters from './alertGetters'
import alertMutations from './alertMutations'
import alertActions from './alertActions'

const alert = {
    namespaced: true,
    state: alertStates,
    getters: alertGetters,
    actions: alertActions,
    mutations: alertMutations,
}

export default alert