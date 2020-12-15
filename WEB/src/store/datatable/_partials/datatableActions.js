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
    setDataLink({ commit }, payload) {
        commit('INSERT_DATA_LINK', payload);
    },
    pageChange({ commit, state }, payload) {
        if (state.page != payload.page) {
            commit('INSERT_PAGE', payload);
        }
    },
    pageSizeChange({ commit, dispatch, state }, payload) {
        if (state.pageSize != payload.pageSize) {
            commit('PAGE_SIZE_CHANGE', payload);
            dispatch('fetchData');
        }
    },
    keyUpSearch: function({ commit }, payload) {
        commit('KEYUP_SEARCH', payload);
    },
    streamSearch: function({ commit, state, dispatch }) {
        if (!state.waitingSearch) {
            setTimeout(() => {
                commit('WAITING_SEARCH_FALSE');
                dispatch('fetchData');
            }, 2000); // 2 sec delay
        }

        commit('WAITING_SEARCH_TRUE');
    }
}

export default datatableActions;