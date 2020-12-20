const alertMutations = {
    SET_ALERT: (state, payload) => {
        state.alert = payload.alert;
        state.message = payload.message;
    }
}

export default alertMutations;