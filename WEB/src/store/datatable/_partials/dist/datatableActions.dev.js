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
            console.log('fetchData');
            commit('NULL_DATA');
            commit('LOADING_TRUE');
            console.log('data = ' + state.data);
            _context.prev = 6;
            _context.next = 9;
            return regeneratorRuntime.awrap(_api["default"].get("/api".concat(state.dataLink), {
              params: params
            }).then(function (ress) {
              var fetchResponse = ress.data.data;
              commit('INSERT_DATA', fetchResponse);
              commit('LOADING_FALSE');
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](6);
            console.log('error fetch data = ' + _context.t0);
            return _context.abrupt("return", null);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[6, 11]]);
  },
  setDataLink: function setDataLink(_ref2, payload) {
    var commit = _ref2.commit;
    commit('INSERT_DATA_LINK', payload);
  },
  pageChange: function pageChange(_ref3, payload) {
    var commit = _ref3.commit,
        state = _ref3.state;

    if (state.page != payload.page) {
      commit('INSERT_PAGE', payload);
    } else {
      return false;
    }
  },
  pageSizeChange: function pageSizeChange(_ref4, payload) {
    var commit = _ref4.commit,
        dispatch = _ref4.dispatch,
        state = _ref4.state;

    if (state.pageSize != payload.pageSize) {
      console.log('tidak sama');
      commit('PAGE_SIZE_CHANGE', payload);
      dispatch('fetchData');
    } else {
      return false;
    }
  } // watchSearch: function({ commit }) {
  //     // if (!state.awaitingSearch) {
  //     //     setTimeout(() => {
  //     //         // this.fetchData();
  //     //         state.awaitingSearch = false;
  //     //     }, 2000); // 2 sec delay
  //     // }
  //     // state.awaitingSearch = true;
  // },
  // save_donasi({ commit, rootState }, payload) {
  //     // rootState BERARTI MENGAKSES STATE YANG TIDAK BERADA DALAM MODULES
  //     // DALAM HAL INI STATE isLoading YANG ADA DI DALAM FILE store.js
  //     rootState.isLoading = true //SET TRUE UNTUK MEMBERIKAN EFEK LOADING
  //     setTimeout(() => {
  //         //MENGINSTRUKSIKAN PADA MUTATIONS TERKAIT UNTUK MENJALANKAN INSTRUKSINYA
  //         commit('ADD_DONASI', payload)
  //         // STATE isLoading DI MATIKAN KEMBALI
  //         rootState.isLoading = false
  //     }, 1000)
  // }

};
var _default = datatableActions;
exports["default"] = _default;