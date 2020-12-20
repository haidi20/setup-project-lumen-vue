"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var alertActions = {
  setAlert: function setAlert(_ref, payload) {
    var commit = _ref.commit;
    commit('SET_ALERT', payload);
  }
};
var _default = alertActions;
exports["default"] = _default;