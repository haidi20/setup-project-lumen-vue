"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _datatableStates = _interopRequireDefault(require("./datatableStates"));

var _datatableGetters = _interopRequireDefault(require("./datatableGetters"));

var _datatableMutations = _interopRequireDefault(require("./datatableMutations"));

var _datatableActions = _interopRequireDefault(require("./datatableActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// partials
var datatable = {
  namespaced: true,
  state: _datatableStates["default"],
  getters: _datatableGetters["default"],
  mutations: _datatableMutations["default"],
  actions: _datatableActions["default"]
};
var _default = datatable;
exports["default"] = _default;