"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var alertMutations = {
  SET_ALERT: function SET_ALERT(state, payload) {
    state.alert = payload.alert;
    state.message = payload.message;
  }
};
var _default = alertMutations;
exports["default"] = _default;