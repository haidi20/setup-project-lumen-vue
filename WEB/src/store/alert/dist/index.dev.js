"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _alertState = _interopRequireDefault(require("./_partials/alertState"));

var _alertGetters = _interopRequireDefault(require("./_partials/alertGetters"));

var _alertMutations = _interopRequireDefault(require("./_partials/alertMutations"));

var _alertActions = _interopRequireDefault(require("./_partials/alertActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// partials
var alert = {
  namespaced: true,
  state: _alertState["default"],
  getters: _alertGetters["default"],
  actions: _alertActions["default"],
  mutations: _alertMutations["default"]
};
var _default = alert;
exports["default"] = _default;