"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _vuexPersistedstate = _interopRequireDefault(require("vuex-persistedstate"));

var _auth = _interopRequireDefault(require("./auth"));

var _alert = _interopRequireDefault(require("./alert"));

var _datatable = _interopRequireDefault(require("./datatable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  modules: {
    auth: _auth["default"],
    alert: _alert["default"],
    datatable: _datatable["default"]
  },
  plugins: [(0, _vuexPersistedstate["default"])({
    storage: {
      getItem: function getItem(key) {
        return _jsCookie["default"].get(key);
      },
      setItem: function setItem(key, value) {
        return _jsCookie["default"].set(key, value, {
          expires: 3,
          secure: true
        });
      },
      removeItem: function removeItem(key) {
        return _jsCookie["default"].remove(key);
      }
    }
  })]
});

exports["default"] = _default;