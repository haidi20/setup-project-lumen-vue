"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _datatableState = _interopRequireDefault(require("./_partials/datatableState"));

var _datatableGetters = _interopRequireDefault(require("./_partials/datatableGetters"));

var _datatableMutations = _interopRequireDefault(require("./_partials/datatableMutations"));

var _datatableActions = _interopRequireDefault(require("./_partials/datatableActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// partials
var datatable = {
  namespaced: true,
  state: _datatableState["default"],
  getters: _datatableGetters["default"],
  mutations: _datatableMutations["default"],
  actions: _datatableActions["default"]
};
var _default = datatable;
exports["default"] = _default;