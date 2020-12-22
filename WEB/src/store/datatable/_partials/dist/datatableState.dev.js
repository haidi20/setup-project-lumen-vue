"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var datatableState = {
  page: 1,
  data: [],
  btnAdd: {},
  search: '',
  headers: [],
  actions: [],
  pageSize: 5,
  dataLink: '',
  totalData: 0,
  totalPages: 0,
  loading: true,
  pageSizes: [],
  firstVisitPage: true,
  waitingSearch: false
};
var _default = datatableState;
exports["default"] = _default;