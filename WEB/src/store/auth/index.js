import authStates from './_partials/authStates';
import authGetters from './_partials/authGetters';
import authActions from './_partials/authActions';
import authMutations from './_partials/authMutations';

const auth = {
    namespaced: true,
    state: authStates,
    getters: authGetters,
    mutations: authMutations,
    actions: authActions,
}

export default auth