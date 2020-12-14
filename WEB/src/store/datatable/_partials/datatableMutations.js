const datatableMutations = {
    NULL_DATA: (state) => {
        state.data = [];
    },
    INSERT_DATA: (state, payload) => {
        state.data = payload.data;
        state.totalPages = payload.last_page;
    },
    LOADING_TRUE: (state) => {
        state.loading = true;
    },
    LOADING_FALSE: (state) => {
        state.loading = false;
    },
}

export default datatableMutations;