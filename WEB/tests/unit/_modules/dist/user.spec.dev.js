"use strict";

var _vuex = _interopRequireDefault(require("vuex"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _user = _interopRequireDefault(require("@/components/user"));

var _testUtils = require("@vue/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Libraries
// components
// Utilities
describe('User', function () {
  var wrapper, vuetify, mutations, state, localVue; // for vuex

  var storeOptions, store;
  beforeEach(function () {
    localVue = (0, _testUtils.createLocalVue)();
    localVue.use(_vuex["default"]);
    localVue.use(_vuetify["default"]);
    storeOptions = {
      modules: {
        datatable: {}
      }
    };
    store = new _vuex["default"].Store(storeOptions);
    wrapper = (0, _testUtils.shallowMount)(_user["default"], {
      store: store,
      localVue: localVue
    });
  });
  it('renders a vue instance', function () {
    expect((0, _testUtils.shallowMount)(_user["default"], {
      store: store,
      localVue: localVue
    }).isVueInstance()).toBe(true);
  });
  it('check exists word User', function () {
    var title = wrapper.find('h2');
    expect(title.text()).toBe('User');
  });
  it('check name user with setTimeout', function (done) {
    var name = wrapper.find('p');
    setTimeout(function () {
      expect(name.text()).toBe("haidi");
      done();
    }, 3000);
  });
});