"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("../../../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var datatableActions = {
  fetchData: function fetchData(_ref, payload) {
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
            return regeneratorRuntime.awrap(_api["default"].get("/api".concat(payload.dataLink), {
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
  } // PageChange({ commit }) {
  //     // state.page = value;
  //     // this.fetchData();
  // },
  // PageSizeChange({ commit }) {
  //     // state.page = 1;
  //     // state.pageSize = size;
  //     // state.fetchData();
  // },
  // watchSearch: function({ commit }) {
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