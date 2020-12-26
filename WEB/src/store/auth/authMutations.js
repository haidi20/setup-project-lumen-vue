import { initialState } from '@/store/auth/authStates'

const authMutations = {
    INSERT_AUTH: (state, payload) => {
        state.user = payload.user;
        state.time = payload.time;
        state.token = payload.token;
    },
    SET_NULL_STATE: (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
    }
}

export default authMutations;