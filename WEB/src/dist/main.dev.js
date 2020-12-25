"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

var _vueAxiosCors = _interopRequireDefault(require("vue-axios-cors"));

var _app = _interopRequireDefault(require("./components/app"));

var _store = _interopRequireDefault(require("./store"));

var _router = _interopRequireDefault(require("./router"));

require("vuetify/dist/vuetify.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueAxiosCors["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  store: _store["default"],
  vuetify: _vuetify["default"],
  router: _router["default"],
  render: function render(h) {
    return h(_app["default"]);
  }
}).$mount('#app');