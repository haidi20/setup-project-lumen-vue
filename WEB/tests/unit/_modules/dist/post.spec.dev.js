"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _testUtils = require("@vue/test-utils");

var _post = _interopRequireDefault(require("@/components/post"));

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//components
_vue["default"].use(_vuex["default"]);

_vue["default"].use(_vuetify["default"]);

describe('Post', function () {
  var localVue = (0, _testUtils.createLocalVue)();
  var vuetify, wrapperMount, wrapperShallowMount;
  beforeEach(function () {
    vuetify = new _vuetify["default"]();
    wrapperMount = (0, _testUtils.mount)(_post["default"], {
      localVue: localVue,
      vuetify: vuetify,
      store: _store["default"]
    });
    wrapperShallowMount = (0, _testUtils.shallowMount)(_post["default"], {
      localVue: localVue,
      vuetify: vuetify,
      store: _store["default"]
    });
  });
  it('check word title', function _callee() {
    var title;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            title = wrapperMount.find('h2');
            expect(title.text()).toBe('Posts');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it('check data count 5', function _callee2() {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(wrapperMount.findAll('.v-data-table__wrapper > table > tr'));

          case 2:
            data = _context2.sent;
            expect(data.length).toBe(5);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  it('check default value PageSizeChange', function () {
    var select = wrapperMount.find('.v-select').props('value');
    expect(select).toBe(5);
  });
  it('event click pageSizeChange value 10', function _callee3() {
    var value;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(wrapperMount.find('.v-select__slot').trigger('click'));

          case 2:
            _context3.next = 4;
            return regeneratorRuntime.awrap(wrapperMount.findAll('.v-list-item').at(1).trigger('click'));

          case 4:
            value = wrapperMount.find('.v-select__selection.v-select__selection--comma');
            expect(value.text()).toBe("10");

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
});