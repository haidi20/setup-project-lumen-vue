"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _alert = _interopRequireDefault(require("./alert"));

var _datatable = _interopRequireDefault(require("./datatable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  modules: {
    alert: _alert["default"],
    datatable: _datatable["default"]
  }
});

exports["default"] = _default;