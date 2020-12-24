"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authStates = _interopRequireDefault(require("./_partials/authStates"));

var _authGetters = _interopRequireDefault(require("./_partials/authGetters"));

var _authActions = _interopRequireDefault(require("./_partials/authActions"));

var _authMutations = _interopRequireDefault(require("./_partials/authMutations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = {
  namespaced: true,
  state: _authStates["default"],
  getters: _authGetters["default"],
  actions: _authActions["default"],
  mutations: _authMutations["default"]
};
var _default = auth;
exports["default"] = _default;