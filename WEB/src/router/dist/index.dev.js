"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _dashboard = _interopRequireDefault(require("@/components/dashboard"));

var _post = _interopRequireDefault(require("@/components/post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Dashboard',
  component: _dashboard["default"]
}, {
  path: '/post',
  name: 'Post',
  component: _post["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;