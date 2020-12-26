import authStates from './authStates';
import authGetters from './authGetters';
import authActions from './authActions';
import authMutations from './authMutations';

const auth = {
    namespaced: true,
    state: authStates,
    getters: authGetters,
    actions: authActions,
    mutations: authMutations,
}

export default auth