"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(to, from, next) {
  if (_store["default"].state.auth.token == null || _store["default"].state.auth.token == '') {
    next('/sign-in');
  } else {
    next();
  }
};

exports["default"] = _default;