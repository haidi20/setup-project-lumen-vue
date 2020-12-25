"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("@/api"));

var _router = _interopRequireDefault(require("@/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authActions = {
  storeDataAuth: function storeDataAuth(_ref, payload) {
    var commit, state, setupHttp;
    return regeneratorRuntime.async(function storeDataAuth$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            setupHttp = {
              url: '/login',
              method: 'post',
              data: payload.data
            };
            _context.prev = 2;
            _context.next = 5;
            return regeneratorRuntime.awrap((0, _api["default"])(_objectSpread({}, setupHttp)).then(function (ress) {
              var fetchResponse = ress.data;
              console.log(ress);

              if (fetchResponse.success) {
                var _payload = {
                  user: fetchResponse.user,
                  token: fetchResponse.token,
                  time: fetchResponse.time
                };
                commit('INSERT_AUTH', _payload);

                _router["default"].push('/');
              } else {
                alert(fetchResponse.remarks);
              }
            }));

          case 5:
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            console.log('error fetch data = ' + _context.t0);
            return _context.abrupt("return", null);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 7]]);
  }
};
var _default = authActions;
exports["default"] = _default;