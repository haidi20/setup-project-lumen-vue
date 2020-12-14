import http from '../../api'

const datatable = {
    namespaced: true,
    state: {
        data: [],
        headers: [
            { text: "No.", sortable: false, value: "number", class: "bg-header-info" },
            { text: "Actions", value: "actions", sortable: false, align: "start", class: "bg-header-info" },
            { text: "Title", sortable: false, value: "title", class: "bg-header-info" },
            { text: "Date", value: "date", sortable: false, class: "bg-header-info" },
            { text: "Author", value: "author", sortable: false, class: "bg-header-info" },
        ],
        page: 1,
        totalPages: 0,
        pageSize: 5,
        pageSizes: [5, 10],
        loading: false,
        search: '',
        awaitingSearch: false,
    },
    getters: {
        getNumberData: state => item => {
            let number = state.data.map(function(x) { return x.id; }).indexOf(item.id) + 1;

            if (state.page == 1) {
                return number;
            } else {
                return (number + state.pageSize);
            }
        },
    },
    mutations: {
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
    },
    actions: {
        async fetchData({ commit }, payload) {
            // const params = {
            //     page: state.page,
            //     search: state.search,
            //     per_page: state.pageSize,
            // }
            commit('NULL_DATA');
            commit('LOADING_TRUE');
            try {
                await http.get(`/api${payload.dataLink}`)
                    .then(ress => {
                        let data = ress.data.data;
                        commit('INSERT_DATA', data);
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
}

export default datatable