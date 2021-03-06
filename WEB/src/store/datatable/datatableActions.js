import http from '@/api'

const datatableActions = {
    async fetchData({ commit, state, rootState }) {

        const setupHttp = {
            url: `/api${state.dataLink}`,
            method: 'get',
            headers: {
                Authorization: "Bearer " + rootState.auth.token,
            },
            params: {
                page: state.page,
                search: state.search,
                per_page: state.pageSize,
            }
        }

        commit('NULL_DATA');
        commit('LOADING_TRUE');
        try {
            // await http.get(`/api${state.dataLink}`, { params })
            await http({...setupHttp })
                .then(ress => {
                    const fetchResponse = ress.data;
                    const fetchData = fetchResponse.data;

                    if (fetchResponse.success) {
                        commit('INSERT_DATA', fetchData);
                        commit('LOADING_FALSE');

                        if (state.firstVisitPage) {
                            const pageSizes = resultPageSizes(state, fetchData);

                            commit('INSERT_PAGE_SIZES', { pageSizes });
                            commit('FALSE_FIRST_VISIT_PAGE');
                        }
                    }
                });
        } catch (error) {
            console.log('error fetch data = ' + error);
            return (null);
        }
    },
    /*
    cara penggunaan methodAction :
        payload = {
            method: string | 'post',
            url: string | '/api/posts/2',
            messageAlert: string | 'Update Data Success',
            data: object | {title: 'judul', content: 'isinya'}
        }
    */
    async methodAction({ commit, dispatch, state, rootState }, payload) {
        try {
            const setupHttp = {
                url: '/api' + state.dataLink + payload.url,
                data: payload.data,
                method: payload.method,
                headers: {
                    Authorization: "Bearer " + rootState.auth.token,
                },
            }

            await http({...setupHttp })
                .then(response => {
                    dispatch('alert/setAlert', { alert: true, message: payload.messageAlert }, { root: true });
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
            commit('INSERT_PAGE_SIZE', payload);
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
        commit('INSERT_PAGE_SIZE', config); // set page size and page
        commit('INSERT_DATA_LINK', config);
        commit('INSERT_BTN_ADD', config);

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

const resultPageSizes = (state, fetchResponse) => {
    let pageSizes = []
    let itemPageSize = state.pageSize;
    let countLoop = fetchResponse.last_page;
    // 5, 10, 100, 200, 
    // 1, 2, pageSize, 2,
    // 10, 100, 200,
    // 1, pageSize, 2,
    for (let i = 1; i <= countLoop; i++) {
        if (state.totalData > itemPageSize) {
            if (state.pageSize < 10) {
                if (i == 1) {
                    itemPageSize = itemPageSize * 1;
                } else if (i == 3) {
                    itemPageSize = itemPageSize * itemPageSize;
                } else {
                    itemPageSize = itemPageSize * 2;
                }
                pageSizes.push(itemPageSize);
            } else { // ketika masuk pageSize 2 digit
                if (i == 1) {
                    itemPageSize = itemPageSize * 1;
                } else if (i == 2) {
                    itemPageSize = itemPageSize * itemPageSize;
                } else {
                    itemPageSize = itemPageSize * 2;
                }
                pageSizes.push(itemPageSize);
            }

        } else {
            break;
        }
    }

    return pageSizes;
}

export default datatableActions;