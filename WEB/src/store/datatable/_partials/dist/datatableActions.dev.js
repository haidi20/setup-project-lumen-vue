"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("../../../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  setDataLink: function setDataLink(_ref2, payload) {
    var commit = _ref2.commit;
    commit('INSERT_DATA_LINK', payload);
  },
  setHeaders: function setHeaders(_ref3, payload) {
    var commit = _ref3.commit;
    commit('INSERT_HEADERS', payload);
  },
  setActions: function setActions(_ref4, payload) {
    var commit = _ref4.commit;
    commit('INSERT_ACTIONS', payload);
  },
  pageChange: function pageChange(_ref5, payload) {
    var commit = _ref5.commit,
        state = _ref5.state,
        dispatch = _ref5.dispatch;

    if (state.page != payload.page) {
      commit('INSERT_PAGE', payload);
      dispatch('fetchData');
    }
  },
  pageSizeChange: function pageSizeChange(_ref6, payload) {
    var commit = _ref6.commit,
        dispatch = _ref6.dispatch,
        state = _ref6.state;

    if (state.pageSize != payload.pageSize) {
      commit('PAGE_SIZE_CHANGE', payload);
      dispatch('fetchData');
    }
  },
  keyUpSearch: function keyUpSearch(_ref7, payload) {
    var commit = _ref7.commit;
    commit('INSERT_PAGE', {
      page: 1
    });
    commit('KEYUP_SEARCH', payload);
  },
  setConfig: function setConfig(_ref8, payload) {
    var commit = _ref8.commit,
        state = _ref8.state,
        dispatch = _ref8.dispatch;
    var config = payload.config;
    commit('INSERT_DATA_LINK', config);
    commit('INSERT_ACTIONS', config);
    commit('INSERT_HEADERS', config);
    dispatch('fetchData');
  },
  streamSearch: function streamSearch(_ref9) {
    var commit = _ref9.commit,
        state = _ref9.state,
        dispatch = _ref9.dispatch;

    if (!state.waitingSearch) {
      setTimeout(function () {
        commit('WAITING_SEARCH_FALSE');
        dispatch('fetchData');
      }, 2000); // 2 sec delay
    }

    commit('WAITING_SEARCH_TRUE');
  }
};
var _default = datatableActions;
exports["default"] = _default;