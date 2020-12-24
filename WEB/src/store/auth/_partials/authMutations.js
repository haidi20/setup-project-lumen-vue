const authMutations = {
    INSERT_AUTH: (state, payload) => {
        state.user = payload.user;
        state.time = payload.time;
        state.token = payload.token;
    },
}

export default authMutations;