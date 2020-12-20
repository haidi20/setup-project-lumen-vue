"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("../../../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var datatableActions = {
  fetchData: function fetchData(_ref) {
    var commit, state, params;
    return regeneratorRuntime.async(function fetchData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            params = {
              page: state.page,
              search: state.search,
              per_page: state.pageSize
            };
            commit('NULL_DATA');
            commit('LOADING_TRUE');
            _context.prev = 4;
            _context.next = 7;
            return regeneratorRuntime.awrap(_api["default"].get("/api".concat(state.dataLink), {
              params: params
            }).then(function (ress) {
              var fetchResponse = ress.data.data;
              commit('INSERT_DATA', fetchResponse);
              commit('LOADING_FALSE');
            }));

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](4);
            console.log('error fetch data = ' + _context.t0);
            return _context.abrupt("return", null);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 9]]);
  },
  changeData: function changeData(_ref2, payload) {
    var commit, dispatch;
    return regeneratorRuntime.async(function changeData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit, dispatch = _ref2.dispatch;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_api["default"].put("/api/posts/".concat(payload.post.id), _objectSpread({}, payload.post)).then(function (response) {
              commit('SET_ALERT', {
                alert: true
              });
              dispatch('fetchData');
            }));

          case 4:
            _context2.next = 10;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            console.log('error update data = ' + _context2.t0);
            return _context2.abrupt("return", null);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 6]]);
  },
  setDataLink: function setDataLink(_ref3, payload) {
    var commit = _ref3.commit;
    commit('INSERT_DATA_LINK', payload);
  },
  setHeaders: function setHeaders(_ref4, payload) {
    var commit = _ref4.commit;

    if (payload.actions !== undefined) {
      payload.headers = [{
        text: "No.",
        sortable: false,
        value: "number"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false,
        align: "start"
      }].concat(_toConsumableArray(payload.headers));
    } else {
      payload.headers = [{
        text: "No.",
        sortable: false,
        value: "number"
      }].concat(_toConsumableArray(payload.headers));
    }

    commit('INSERT_HEADERS', payload);
  },
  setActions: function setActions(_ref5, payload) {
    var commit = _ref5.commit;

    if (payload.actions !== undefined && payload.actions.length > 0) {
      commit('INSERT_ACTIONS', payload);
    }
  },
  pageChange: function pageChange(_ref6, payload) {
    var commit = _ref6.commit,
        state = _ref6.state,
        dispatch = _ref6.dispatch;

    if (state.page != payload.page) {
      commit('INSERT_PAGE', payload);
      dispatch('fetchData');
    }
  },
  pageSizeChange: function pageSizeChange(_ref7, payload) {
    var commit = _ref7.commit,
        dispatch = _ref7.dispatch,
        state = _ref7.state;

    if (state.pageSize != payload.pageSize) {
      commit('PAGE_SIZE_CHANGE', payload);
      dispatch('fetchData');
    }
  },
  keyUpSearch: function keyUpSearch(_ref8, payload) {
    var commit = _ref8.commit;
    commit('INSERT_PAGE', {
      page: 1
    });
    commit('KEYUP_SEARCH', payload);
  },
  setConfig: function setConfig(_ref9, payload) {
    var commit = _ref9.commit,
        dispatch = _ref9.dispatch;
    var config = payload.config;
    dispatch('setHeaders', config);
    commit('INSERT_ACTIONS', config);
    commit('INSERT_DATA_LINK', config);
    dispatch('fetchData');
  },
  streamSearch: function streamSearch(_ref10) {
    var commit = _ref10.commit,
        state = _ref10.state,
        dispatch = _ref10.dispatch;

    if (!state.waitingSearch) {
      setTimeout(function () {
        commit('WAITING_SEARCH_FALSE');
        dispatch('fetchData');
      }, 1600);
    }

    commit('WAITING_SEARCH_TRUE');
  },
  setAlert: function setAlert(_ref11, payload) {
    var commit = _ref11.commit;
    commit('SET_ALERT', payload);
  }
};
var _default = datatableActions;
exports["default"] = _default;