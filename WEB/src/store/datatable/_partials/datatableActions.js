import http from '../../../api'

const datatableActions = {
    async fetchData({ commit, state }) {
        const params = {
            page: state.page,
            search: state.search,
            per_page: state.pageSize,
        }

        console.log('fetchData');

        commit('NULL_DATA');
        commit('LOADING_TRUE');
        console.log('data = ' + state.data);
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
        } else {
            return false;
        }
    },
    pageSizeChange({ commit, dispatch, state }, payload) {
        if (state.pageSize != payload.pageSize) {
            console.log('tidak sama');
            commit('PAGE_SIZE_CHANGE', payload);
            dispatch('fetchData');
        } else {
            return false;
        }
    },
    // watchSearch: function({ commit }) {
    //     // if (!state.awaitingSearch) {
    //     //     setTimeout(() => {
    //     //         // this.fetchData();
    //     //         state.awaitingSearch = false;
    //     //     }, 2000); // 2 sec delay
    //     // }

    //     // state.awaitingSearch = true;
    // },
    // save_donasi({ commit, rootState }, payload) {
    //     // rootState BERARTI MENGAKSES STATE YANG TIDAK BERADA DALAM MODULES
    //     // DALAM HAL INI STATE isLoading YANG ADA DI DALAM FILE store.js
    //     rootState.isLoading = true //SET TRUE UNTUK MEMBERIKAN EFEK LOADING
    //     setTimeout(() => {
    //         //MENGINSTRUKSIKAN PADA MUTATIONS TERKAIT UNTUK MENJALANKAN INSTRUKSINYA
    //         commit('ADD_DONASI', payload)
    //         // STATE isLoading DI MATIKAN KEMBALI
    //         rootState.isLoading = false
    //     }, 1000)
    // }
}

export default datatableActions;