"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(to, from, next) {
  console.log(to.name);
  next();
};

exports["default"] = _default;