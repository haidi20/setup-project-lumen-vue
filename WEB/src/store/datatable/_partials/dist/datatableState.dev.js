"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var datatableState = {
  page: 1,
  data: [],
  search: '',
  headers: [],
  actions: [],
  pageSize: 5,
  dataLink: '',
  totalPages: 0,
  loading: true,
  waitingSearch: false,
  pageSizes: [5, 10, 20]
};
var _default = datatableState;
exports["default"] = _default;