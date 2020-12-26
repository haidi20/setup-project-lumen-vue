"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authStates = require("@/store/auth/authStates");

var authMutations = {
  INSERT_AUTH: function INSERT_AUTH(state, payload) {
    state.user = payload.user;
    state.time = payload.time;
    state.token = payload.token;
  },
  SET_NULL_STATE: function SET_NULL_STATE(state) {
    state.user = _authStates.initialState.user;
    state.token = _authStates.initialState.token;
  }
};
var _default = authMutations;
exports["default"] = _default;