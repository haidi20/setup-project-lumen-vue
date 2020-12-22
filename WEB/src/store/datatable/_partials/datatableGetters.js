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
    getTotalPages: state => {
        return state.totalPages;
    },
    getPage: state => {
        return state.page;
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
    getActions: state => {
        return state.actions;
    },
    getNoData: state => item => {
        let page = state.page;
        let pageSize = state.pageSize;
        let index = state.data.map(function(x) { return x.id; }).indexOf(item.id);

        let number = index + (page * pageSize);

        return (number - pageSize) + 1 + '.';
    },
};

export default datatableGetters;