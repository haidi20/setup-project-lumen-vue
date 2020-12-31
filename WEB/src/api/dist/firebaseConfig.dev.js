"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventsRef = exports.firebaseApp = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyCsfaEUbMbUmmQabPQbN1OdrSSwVjUqzvI",
  authDomain: "setup-project-lumen-vue.firebaseapp.com",
  projectId: "setup-project-lumen-vue",
  storageBucket: "setup-project-lumen-vue.appspot.com",
  messagingSenderId: "884128352950",
  appId: "1:884128352950:web:8c08b411227c187e413417"
}; // firebase.initializeApp(firebaseConfig);

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

exports.firebaseApp = firebaseApp;
var eventsRef = firebaseApp.database().ref().child('events');
exports.eventsRef = eventsRef;