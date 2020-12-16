"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _store = _interopRequireDefault(require("@/store"));

var _dashboard = _interopRequireDefault(require("../../src/components/dashboard"));

var _testUtils = require("@vue/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Libraries
// components
// Utilities
describe('Dashboard', function () {
  var wrapper, vuetify, mutations, state; // for vuex

  var storeOptions, store;
  beforeEach(function () {
    // vuetify = new Vuetify();
    var localVue = (0, _testUtils.createLocalVue)();
    localVue.use(_vuex["default"]);
    localVue.use(_vuetify["default"]);
    storeOptions = {
      modules: {
        namespace: true,
        actions: {},
        getters: {
          setConfig: jest.fn()
        }
      }
    };
    store = new _vuex["default"].Store(storeOptions);
    wrapper = (0, _testUtils.shallowMount)(_dashboard["default"], {
      store: store,
      localVue: localVue
    });
  });
  it('check word Dashboard', function () {
    var title = wrapper.find('h2');
    expect(title.text()).toBe('Dashboard');
  });
});