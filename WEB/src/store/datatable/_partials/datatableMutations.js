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
    INSERT_HEADERS: (state, payload) => {
        state.headers = payload.headers;
    },
    INSERT_ACTIONS: (state, payload) => {
        state.actions = payload.actions;
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
    KEYUP_SEARCH: (state, payload) => {
        state.search = payload.search;
    },
    WAITING_SEARCH_TRUE: (state) => {
        state.waitingSearch = true;
    },
    WAITING_SEARCH_FALSE: (state) => {
        state.waitingSearch = false;
    },
    SET_ALERT: (state, payload) => {
        state.alert = payload.alert;
    }
}

export default datatableMutations;