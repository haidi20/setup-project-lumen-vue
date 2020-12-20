"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var alertGetters = {
  getAlert: function getAlert(state) {
    return state.alert;
  },
  getMessage: function getMessage(state) {
    return state.message;
  }
};
var _default = alertGetters;
exports["default"] = _default;