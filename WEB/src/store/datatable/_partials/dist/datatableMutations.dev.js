"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  INSERT_HEADERS: function INSERT_HEADERS(state, payload) {
    if (payload.actions !== undefined) {
      state.headers = [{
        text: "No.",
        sortable: false,
        value: "number"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false,
        align: "start"
      }];
    } else {
      state.headers = [{
        text: "No.",
        sortable: false,
        value: "number"
      }];
    }

    state.headers = [].concat(_toConsumableArray(state.headers), _toConsumableArray(payload.headers));
  },
  INSERT_ACTIONS: function INSERT_ACTIONS(state, payload) {
    state.actions = payload.actions;
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