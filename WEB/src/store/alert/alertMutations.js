const alertMutations = {
    SET_ALERT: (state, payload) => {
        state.alert = payload.alert;
        state.timer = payload.timer != undefined ? payload.timer : true;
        state.message = payload.message;
    }
}

export default alertMutations;