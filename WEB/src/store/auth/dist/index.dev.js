"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authStates = _interopRequireDefault(require("./authStates"));

var _authGetters = _interopRequireDefault(require("./authGetters"));

var _authActions = _interopRequireDefault(require("./authActions"));

var _authMutations = _interopRequireDefault(require("./authMutations"));

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