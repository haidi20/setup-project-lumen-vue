"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _dashboard = _interopRequireDefault(require("../../src/components/dashboard"));

var _testUtils = require("@vue/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Libraries
_vue["default"].config.productionTip = false;

_vue["default"].use(_vuetify["default"]); // components


_testUtils.config.showDeprecationWarnings = false;
describe('Dashboard', function () {
  var wrapper, vuetify, mutations, state, localVue; // for vuex

  var storeOptions, store;
  beforeAll(function () {
    localVue = (0, _testUtils.createLocalVue)();
    localVue.use(_vuex["default"]);
    localVue.use(_vuetify["default"], {});
    storeOptions = {
      modules: {
        datatable: {}
      }
    };
    store = new _vuex["default"].Store(storeOptions);
    wrapper = (0, _testUtils.shallowMount)(_dashboard["default"], {
      store: store,
      localVue: localVue
    });
  });
  it('renders a vue instance', function () {
    expect((0, _testUtils.shallowMount)(_dashboard["default"], {
      store: store,
      localVue: localVue
    }).isVueInstance()).toBe(true);
  });
  it('check exists word Dashboard', function () {
    var title = wrapper.find('h2');
    expect(title.text()).toBe('Dashboard');
  });
});