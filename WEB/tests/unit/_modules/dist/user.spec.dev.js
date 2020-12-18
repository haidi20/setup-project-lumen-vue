"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _testUtils = require("@vue/test-utils");

var _user = _interopRequireDefault(require("@/components/user"));

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//components
_vue["default"].use(_vuex["default"]);

_vue["default"].use(_vuetify["default"]);

describe('User', function () {
  var localVue = (0, _testUtils.createLocalVue)();
  var vuetify, wrapper;
  beforeEach(function () {
    vuetify = new _vuetify["default"]();
    wrapper = (0, _testUtils.mount)(_user["default"], {
      localVue: localVue,
      vuetify: vuetify,
      store: _store["default"]
    });
  });
  it('snapshot page user', function () {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('check word title', function _callee() {
    var title;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            title = wrapper.find('h2');
            expect(title.text()).toBe('User');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});