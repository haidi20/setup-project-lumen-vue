"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.listRoute = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _dashboard = _interopRequireDefault(require("@/components/dashboard"));

var _post = _interopRequireDefault(require("@/components/post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
_vue["default"].use(_vueRouter["default"]);

var listRoute = [{
  path: '/',
  active: false,
  name: 'Dashboard',
  component: _dashboard["default"],
  icon: 'mdi-view-dashboard'
}, {
  path: null,
  icon: 'mdi-folder',
  active: false,
  name: 'Master',
  component: null,
  childs: [{
    icon: null,
    name: 'Post',
    active: false,
    path: '/post',
    component: _post["default"]
  }]
}];
exports.listRoute = listRoute;
var routes = listRoute.map(function (v) {
  return flatten(v);
});

function flatten(item) {
  var _final = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (item['childs'] != undefined) {
    item['childs'].map(function (value) {
      return flatten(value, _final);
    });
  } else {
    for (var key in item) {
      _final[key] = item[key];
    }
  }

  return _final;
}

var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;