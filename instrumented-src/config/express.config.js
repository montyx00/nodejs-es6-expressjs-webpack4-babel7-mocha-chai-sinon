"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("../routes/index.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('layout extractScripts', true);
app.set('layout extractStyles', true); // parse body params and attach them to req.body

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use('/', _index["default"]); // enable CORS - Cross Origin Resource Sharing

app.use((0, _cors["default"])()); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  return next(new Error('API not found'));
});
var _default = app;
exports["default"] = _default;