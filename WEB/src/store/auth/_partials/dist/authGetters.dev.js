"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var authGetters = {
  getUser: function getUser(state) {
    return state.user;
  },
  getToken: function getToken(state) {
    return state.user.token;
  }
};
var _default = authGetters;
exports["default"] = _default;