"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var datatableMutations = {
  INSERT_DATA_LINK: function INSERT_DATA_LINK(state, payload) {
    state.dataLink = payload.dataLink;
  },
  NULL_DATA: function NULL_DATA(state) {
    state.data = [];
  },
  INSERT_DATA: function INSERT_DATA(state, payload) {
    state.data = payload.data;
    state.totalPages = payload.last_page;
  },
  INSERT_PAGE: function INSERT_PAGE(state, payload) {
    state.page = payload.page;
  },
  PAGE_SIZE_CHANGE: function PAGE_SIZE_CHANGE(state, payload) {
    state.page = 1;
    state.pageSize = payload.pageSize;
  },
  LOADING_TRUE: function LOADING_TRUE(state) {
    state.loading = true;
  },
  LOADING_FALSE: function LOADING_FALSE(state) {
    state.loading = false;
  },
  KEYUP_SEARCH: function KEYUP_SEARCH(state, payload) {
    state.search = payload.search;
  },
  WAITING_SEARCH_TRUE: function WAITING_SEARCH_TRUE(state) {
    state.waitingSearch = true;
  },
  WAITING_SEARCH_FALSE: function WAITING_SEARCH_FALSE(state) {
    state.waitingSearch = false;
  }
};
var _default = datatableMutations;
exports["default"] = _default;