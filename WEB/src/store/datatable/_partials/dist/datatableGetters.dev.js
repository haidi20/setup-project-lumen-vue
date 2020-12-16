"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var datatableGetters = {
  getHeaders: function getHeaders(state) {
    return state.headers;
  },
  getItems: function getItems(state) {
    return state.data;
  },
  getPageSize: function getPageSize(state) {
    return state.pageSize;
  },
  getTotalPages: function getTotalPages(state) {
    return state.totalPages;
  },
  getPage: function getPage(state) {
    return state.page;
  },
  getListPageSizes: function getListPageSizes(state) {
    return state.pageSizes;
  },
  isLoading: function isLoading(state) {
    return state.loading;
  },
  getSearch: function getSearch(state) {
    return state.search;
  },
  getActions: function getActions(state) {
    return state.actions;
  },
  getNoData: function getNoData(state) {
    return function (item) {
      var number = state.data.map(function (x) {
        return x.id;
      }).indexOf(item.id) + 1;

      if (state.page == 1) {
        return number;
      } else {
        return number + state.pageSize;
      }
    };
  }
};
var _default = datatableGetters;
exports["default"] = _default;