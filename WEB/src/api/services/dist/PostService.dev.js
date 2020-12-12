"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPost = void 0;

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import axios from "axios";
var fetchPost = function fetchPost() {
  _index["default"].get("/api/data").then(function (ress) {
    console.log(ress.data);
  });
};

exports.fetchPost = fetchPost;