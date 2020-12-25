"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var authMutations = {
  INSERT_AUTH: function INSERT_AUTH(state, payload) {
    state.user = payload.user;
    state.time = payload.time;
    state.token = payload.token;
  }
};
var _default = authMutations;
exports["default"] = _default;