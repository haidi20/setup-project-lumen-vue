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

var _signIn = _interopRequireDefault(require("@/components/auth/signIn"));

var _success = _interopRequireDefault(require("@/components/success"));

var _dashboard = _interopRequireDefault(require("@/components/dashboard"));

var _authMiddleware = _interopRequireDefault(require("./authMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
// middleware
_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/sign-in',
  name: 'SignIn',
  component: _signIn["default"],
  icon: null
}, {
  path: '/success',
  name: 'Success',
  component: _success["default"],
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
    icon: 'mdi-view-dashboard',
    meta: {
      requiresAuth: true
    }
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
      component: _user["default"],
      meta: {
        requiresAuth: true
      }
    }, {
      icon: null,
      name: 'Post',
      path: '/master/post',
      component: _post["default"],
      meta: {
        requiresAuth: true
      }
    }]
  }]
}];
exports.routes = routes;
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
router.beforeEach(_authMiddleware["default"]);
var _default = router;
exports["default"] = _default;