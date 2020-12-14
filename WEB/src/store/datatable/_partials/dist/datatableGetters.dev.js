"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var datatableGetters = {
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
};
var _default = datatableGetters;
exports["default"] = _default;