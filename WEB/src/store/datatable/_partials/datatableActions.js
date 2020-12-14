import http from '../../../api'

const datatableActions = {
    async fetchData({ commit, state }, payload) {
        const params = {
            page: state.page,
            search: state.search,
            per_page: state.pageSize,
        }

        commit('NULL_DATA');
        commit('LOADING_TRUE');
        try {
            await http.get(`/api${payload.dataLink}`, { params })
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
    // PageChange({ commit }) {
    //     // state.page = value;
    //     // this.fetchData();
    // },
    // PageSizeChange({ commit }) {
    //     // state.page = 1;
    //     // state.pageSize = size;
    //     // state.fetchData();
    // },
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