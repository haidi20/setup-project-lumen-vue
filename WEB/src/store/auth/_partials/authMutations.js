const authMutations = {
    INSERT_AUTH: (state, payload) => {
        state.user = payload.user;
        state.time = payload.time;
        state.token = payload.token;

        localStorage.token = state.token;
    },
}

export default authMutations;