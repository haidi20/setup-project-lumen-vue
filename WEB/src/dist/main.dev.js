"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

var _vueAxiosCors = _interopRequireDefault(require("vue-axios-cors"));

var _layouts = _interopRequireDefault(require("./components/_layouts"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueAxiosCors["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  vuetify: _vuetify["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_layouts["default"]);
  }
}).$mount('#app');