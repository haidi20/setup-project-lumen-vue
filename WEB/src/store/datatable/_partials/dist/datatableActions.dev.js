"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("@/api"));

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
    var commit, state, rootState, setupHttp;
    return regeneratorRuntime.async(function fetchData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state, rootState = _ref.rootState;
            setupHttp = {
              url: "/api".concat(state.dataLink),
              method: 'get',
              headers: {
                Authorization: "Bearer " + rootState.auth.token
              },
              params: {
                page: state.page,
                search: state.search,
                per_page: state.pageSize
              }
            };
            commit('NULL_DATA');
            commit('LOADING_TRUE');
            _context.prev = 4;
            _context.next = 7;
            return regeneratorRuntime.awrap((0, _api["default"])(_objectSpread({}, setupHttp)).then(function (ress) {
              var fetchResponse = ress.data;
              var fetchData = fetchResponse.data;

              if (fetchResponse.success) {
                commit('INSERT_DATA', fetchData);
                commit('LOADING_FALSE');

                if (state.firstVisitPage) {
                  var pageSizes = resultPageSizes(state, fetchData);
                  commit('INSERT_PAGE_SIZES', {
                    pageSizes: pageSizes
                  });
                  commit('FALSE_FIRST_VISIT_PAGE');
                }
              }
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

  /*
  cara penggunaan methodAction :
      payload = {
          method: string | 'post',
          url: string | '/api/posts/2',
          messageAlert: string | 'Update Data Success',
          data: object | {title: 'judul', content: 'isinya'}
      }
  */
  methodAction: function methodAction(_ref2, payload) {
    var commit, dispatch, state, rootState, setupHttp;
    return regeneratorRuntime.async(function methodAction$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit, dispatch = _ref2.dispatch, state = _ref2.state, rootState = _ref2.rootState;
            _context2.prev = 1;
            setupHttp = {
              url: '/api' + state.dataLink + payload.url,
              data: payload.data,
              method: payload.method,
              headers: {
                Authorization: "Bearer " + rootState.auth.token
              }
            };
            _context2.next = 5;
            return regeneratorRuntime.awrap((0, _api["default"])(_objectSpread({}, setupHttp)).then(function (response) {
              dispatch('alert/setAlert', {
                alert: true,
                message: payload.messageAlert
              }, {
                root: true
              });
              dispatch('fetchData');
            }));

          case 5:
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            console.log('error update data = ' + _context2.t0);
            return _context2.abrupt("return", null);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 7]]);
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
      commit('INSERT_PAGE_SIZE', payload);
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
    commit('INSERT_PAGE_SIZE', config); // set page size and page

    commit('INSERT_DATA_LINK', config);
    commit('INSERT_BTN_ADD', config);
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
  }
};

var resultPageSizes = function resultPageSizes(state, fetchResponse) {
  var pageSizes = [];
  var itemPageSize = state.pageSize;
  var countLoop = fetchResponse.last_page; // 5, 10, 100, 200, 
  // 1, 2, pageSize, 2,
  // 10, 100, 200,
  // 1, pageSize, 2,

  for (var i = 1; i <= countLoop; i++) {
    if (state.totalData > itemPageSize) {
      if (state.pageSize < 10) {
        if (i == 1) {
          itemPageSize = itemPageSize * 1;
        } else if (i == 3) {
          itemPageSize = itemPageSize * itemPageSize;
        } else {
          itemPageSize = itemPageSize * 2;
        }

        pageSizes.push(itemPageSize);
      } else {
        // ketika masuk pageSize 2 digit
        if (i == 1) {
          itemPageSize = itemPageSize * 1;
        } else if (i == 2) {
          itemPageSize = itemPageSize * itemPageSize;
        } else {
          itemPageSize = itemPageSize * 2;
        }

        pageSizes.push(itemPageSize);
      }
    } else {
      break;
    }
  }

  return pageSizes;
};

var _default = datatableActions;
exports["default"] = _default;