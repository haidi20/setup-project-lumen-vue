const authGetters = {
    getUser: state => {
        return state.user;
    },
    getToken: state => {
        return state.user.token;
    },
}

export default authGetters;