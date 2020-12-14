const datatableMutations = {
    INSERT_DATA_LINK: (state, payload) => {
        state.dataLink = payload.dataLink;
    },
    NULL_DATA: (state) => {
        state.data = [];
    },
    INSERT_DATA: (state, payload) => {
        state.data = payload.data;
        state.totalPages = payload.last_page;
    },
    INSERT_PAGE: (state, payload) => {
        state.page = payload.page;
    },
    PAGE_SIZE_CHANGE: (state, payload) => {
        state.page = 1;
        state.pageSize = payload.pageSize;
    },
    LOADING_TRUE: (state) => {
        state.loading = true;
    },
    LOADING_FALSE: (state) => {
        state.loading = false;
    },
}

export default datatableMutations;