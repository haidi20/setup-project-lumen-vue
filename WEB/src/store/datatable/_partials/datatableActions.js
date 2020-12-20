import http from '../../../api'

const datatableActions = {
    async fetchData({ commit, state }) {
        const params = {
            page: state.page,
            search: state.search,
            per_page: state.pageSize,
        }

        commit('NULL_DATA');
        commit('LOADING_TRUE');
        try {
            await http.get(`/api${state.dataLink}`, { params })
                .then(ress => {
                    let fetchResponse = ress.data.data;
                    commit('INSERT_DATA', fetchResponse);
                    commit('LOADING_FALSE');
                });
        } catch (error) {
            console.log('error fetch data = ' + error);
            return (null);
        }
    },
    async changeData({ commit, dispatch }, payload) {
        try {
            await http.put(`/api/posts/${payload.post.id}`, {...payload.post })
                .then(response => {
                    // commit('SET_ALERT', { alert: true });
                    dispatch('alert/setAlert', { alert: true }, { root: true });
                    dispatch('fetchData');
                });
        } catch (error) {
            console.log('error update data = ' + error);
            return (null);
        }
    },
    setDataLink({ commit }, payload) {
        commit('INSERT_DATA_LINK', payload);
    },
    setHeaders({ commit }, payload) {
        if (payload.actions !== undefined) {
            payload.headers = [
                { text: "No.", sortable: false, value: "number" },
                { text: "Actions", value: "actions", sortable: false, align: "start" },
                ...payload.headers,
            ];
        } else {
            payload.headers = [
                { text: "No.", sortable: false, value: "number" },
                ...payload.headers,
            ];
        }

        commit('INSERT_HEADERS', payload);
    },
    setActions({ commit }, payload) {
        if (payload.actions !== undefined && payload.actions.length > 0) {
            commit('INSERT_ACTIONS', payload);
        }
    },
    pageChange({ commit, state, dispatch }, payload) {
        if (state.page != payload.page) {
            commit('INSERT_PAGE', payload);
            dispatch('fetchData');
        }
    },
    pageSizeChange({ commit, dispatch, state }, payload) {
        if (state.pageSize != payload.pageSize) {
            commit('PAGE_SIZE_CHANGE', payload);
            dispatch('fetchData');
        }
    },
    keyUpSearch: function({ commit }, payload) {
        commit('INSERT_PAGE', { page: 1 });
        commit('KEYUP_SEARCH', payload);
    },
    setConfig: function({ commit, dispatch }, payload) {
        const config = payload.config;

        dispatch('setHeaders', config);
        commit('INSERT_ACTIONS', config);
        commit('INSERT_DATA_LINK', config);

        dispatch('fetchData');
    },
    streamSearch: function({ commit, state, dispatch }) {
        if (!state.waitingSearch) {
            setTimeout(() => {
                commit('WAITING_SEARCH_FALSE');
                dispatch('fetchData');
            }, 1600);
        }

        commit('WAITING_SEARCH_TRUE');
    },
}

export default datatableActions;