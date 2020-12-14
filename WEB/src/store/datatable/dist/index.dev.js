"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _api = _interopRequireDefault(require("../../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var datatable = {
  namespaced: true,
  state: {
    data: [],
    headers: [{
      text: "No.",
      sortable: false,
      value: "number",
      "class": "bg-header-info"
    }, {
      text: "Actions",
      value: "actions",
      sortable: false,
      align: "start",
      "class": "bg-header-info"
    }, {
      text: "Title",
      sortable: false,
      value: "title",
      "class": "bg-header-info"
    }, {
      text: "Date",
      value: "date",
      sortable: false,
      "class": "bg-header-info"
    }, {
      text: "Author",
      value: "author",
      sortable: false,
      "class": "bg-header-info"
    }],
    page: 1,
    totalPages: 0,
    pageSize: 5,
    pageSizes: [5, 10],
    loading: false,
    search: '',
    awaitingSearch: false
  },
  getters: {
    getNumberData: function getNumberData(state) {
      return function (item) {
        var number = state.data.map(function (x) {
          return x.id;
        }).indexOf(item.id) + 1;

        if (state.page == 1) {
          return number;
        } else {
          return number + state.pageSize;
        }
      };
    }
  },
  mutations: {
    NULL_DATA: function NULL_DATA(state) {
      state.data = [];
    },
    INSERT_DATA: function INSERT_DATA(state, payload) {
      state.data = payload.data;
      state.totalPages = payload.last_page;
    },
    LOADING_TRUE: function LOADING_TRUE(state) {
      state.loading = true;
    },
    LOADING_FALSE: function LOADING_FALSE(state) {
      state.loading = false;
    }
  },
  actions: {
    fetchData: function fetchData(_ref, payload) {
      var commit;
      return regeneratorRuntime.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              // const params = {
              //     page: state.page,
              //     search: state.search,
              //     per_page: state.pageSize,
              // }
              commit('NULL_DATA');
              commit('LOADING_TRUE');
              _context.prev = 3;
              _context.next = 6;
              return regeneratorRuntime.awrap(_api["default"].get("/api".concat(payload.dataLink)).then(function (ress) {
                var data = ress.data.data;
                commit('INSERT_DATA', data);
                commit('LOADING_FALSE');
              }));

            case 6:
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](3);
              console.log('error fetch data = ' + _context.t0);
              return _context.abrupt("return", null);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 8]]);
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

  }
};
var _default = datatable;
exports["default"] = _default;