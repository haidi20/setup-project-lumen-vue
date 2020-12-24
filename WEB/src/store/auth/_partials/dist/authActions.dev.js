"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var authActions = {
  storeDataAuth: function storeDataAuth(_ref, payload) {
    var commit = _ref.commit;
    console.log(payload); // commit('INSERT_DATA_LINK', payload);
  }
};
var _default = authActions;
exports["default"] = _default;