const datatableGetters = {
    getHeaders: state => {
        return state.headers;
    },
    getItems: state => {
        return state.data;
    },
    getPageSize: state => {
        return state.pageSize;
    },
    getListPageSizes: state => {
        return state.pageSizes;
    },
    isLoading: state => {
        return state.loading;
    },
    getSearch: state => {
        return state.search;
    },
    getNoData: state => item => {
        let number = state.data.map(function(x) { return x.id; }).indexOf(item.id) + 1;

        if (state.page == 1) {
            return number;
        } else {
            return (number + state.pageSize);
        }
    },
};

export default datatableGetters;