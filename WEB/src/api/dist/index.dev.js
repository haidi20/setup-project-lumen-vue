"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _router = _interopRequireDefault(require("@/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer ".concat(localStorage.token)
  }
}); // Add a response interceptor


instance.interceptors.response.use(function (responses) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with responses data
  var response = responses.data;

  if (!response.success && (response.data == "expired" || response.data == "permission")) {
    localStorage.token = null;

    _router["default"].push('/sign-in');
  }

  return responses;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
var _default = instance;
exports["default"] = _default;