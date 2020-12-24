"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.routes = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _post = _interopRequireDefault(require("@/components/post"));

var _user = _interopRequireDefault(require("@/components/user"));

var _layouts = _interopRequireDefault(require("@/components/_layouts"));

var _master = _interopRequireDefault(require("@/components/master"));

var _login = _interopRequireDefault(require("@/components/auth/login"));

var _dashboard = _interopRequireDefault(require("@/components/dashboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/login',
  name: 'Login',
  component: _login["default"],
  icon: null
}, {
  path: '/',
  name: 'Layout',
  component: _layouts["default"],
  icon: null,
  children: [{
    path: '/',
    name: 'Dashboard',
    component: _dashboard["default"],
    icon: 'mdi-view-dashboard'
  }, {
    path: '/master',
    icon: 'mdi-folder',
    name: 'Master',
    active: false,
    component: _master["default"],
    children: [{
      icon: null,
      name: 'User',
      path: '/master/user',
      component: _user["default"]
    }, {
      icon: null,
      name: 'Post',
      path: '/master/post',
      component: _post["default"]
    }]
  }]
}]; // function flatten(item, final = {}) {
//     if (item['children'] != undefined) {
//         item['children'].map(value =>
//             flatten(value, final)
//         )
//     } else {
//         for (let key in item) {
//             final[key] = item[key]
//         }
//     }
//     return final;
// }

exports.routes = routes;
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;