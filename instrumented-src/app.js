"use strict";

var _express = _interopRequireDefault(require("./config/express.config"));

var _servers = _interopRequireDefault(require("./config/servers.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  _express["default"].listen(_servers["default"].app.port, function () {
    console.log('Application server started on %s:%s', _servers["default"].app.host, _servers["default"].app.port);
  });
}