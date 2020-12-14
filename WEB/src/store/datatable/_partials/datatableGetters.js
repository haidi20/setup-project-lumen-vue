const datatableGetters = {
    getNumberData: state => item => {
        let number = state.data.map(function(x) { return x.id; }).indexOf(item.id) + 1;

        if (state.page == 1) {
            return number;
        } else {
            return (number + state.pageSize);
        }
    },
    headers: state => {
        return state.headers;
    },
    items: state => {
        return state.data;
    },
};

export default datatableGetters;