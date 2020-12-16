"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _user = _interopRequireDefault(require("../src/components/user"));

var _testUtils = require("@vue/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Libraries
// components
// Utilities
describe('User', function () {
  var localVue = (0, _testUtils.createLocalVue)();
  var vuetify;
  beforeEach(function () {
    vuetify = new _vuetify["default"]();
  });
  it('check word user', function () {
    var wrapper = (0, _testUtils.mount)(_user["default"], {
      localVue: localVue,
      vuetify: vuetify // propsData: { title: 'Foobar' },

    });
    var title = wrapper.find('h2');
    expect(title.text()).toBe('User');
  });
});