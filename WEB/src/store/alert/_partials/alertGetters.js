const alertGetters = {
    getAlert: state => {
        return state.alert;
    },
    getMessage: state => {
        return state.message;
    },
    getTimer: state => {
        return state.timer;
    },
}

export default alertGetters;