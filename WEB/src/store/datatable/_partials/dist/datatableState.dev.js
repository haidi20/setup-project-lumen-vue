"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var datatableState = {
  data: [],
  headers: [{
    text: "No.",
    sortable: false,
    value: "number",
    "class": "bg-header-info"
  }, {
    text: "Actions",
    value: "actions",
    sortable: false,
    align: "start",
    "class": "bg-header-info"
  }, {
    text: "Title",
    sortable: false,
    value: "title",
    "class": "bg-header-info"
  }, {
    text: "Date",
    value: "date",
    sortable: false,
    "class": "bg-header-info"
  }, {
    text: "Author",
    value: "author",
    sortable: false,
    "class": "bg-header-info"
  }],
  page: 1,
  totalPages: 0,
  pageSize: 5,
  pageSizes: [5, 10],
  loading: true,
  search: '',
  waitingSearch: false,
  dataLink: ''
};
var _default = datatableState;
exports["default"] = _default;