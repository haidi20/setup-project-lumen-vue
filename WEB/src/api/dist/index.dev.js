"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _router = _interopRequireDefault(require("@/router"));

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json"
  }
}); // Add a response interceptor


instance.interceptors.response.use(function (responses) {
  var response = responses.data;

  if (!response.success) {
    deleteAllDataAuth();

    _router["default"].push('/sign-in')["catch"](function () {});
  }

  return responses;
}, function (error) {
  return Promise.reject(error);
});

function deleteAllDataAuth() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }

  _store["default"].dispatch('auth/setNullState');
}

var _default = instance;
exports["default"] = _default;