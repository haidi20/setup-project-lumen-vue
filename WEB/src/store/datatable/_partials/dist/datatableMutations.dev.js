"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var datatableMutations = {
  NULL_DATA: function NULL_DATA(state) {
    state.data = [];
  },
  INSERT_DATA: function INSERT_DATA(state, payload) {
    state.data = payload.data;
    state.totalPages = payload.last_page;
  },
  LOADING_TRUE: function LOADING_TRUE(state) {
    state.loading = true;
  },
  LOADING_FALSE: function LOADING_FALSE(state) {
    state.loading = false;
  }
};
var _default = datatableMutations;
exports["default"] = _default;