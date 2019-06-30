"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _services = _interopRequireDefault(require("../config/services.config"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StockService =
/*#__PURE__*/
function () {
  function StockService() {
    _classCallCheck(this, StockService);

    this.stockService = _services["default"].StockService;
  }

  _createClass(StockService, [{
    key: "stockPriceGenerator",
    value: function stockPriceGenerator(symbol, date) {
      return Math.floor(Math.random() * 50001);
    }
  }]);

  return StockService;
}();

var _default = StockService;
exports["default"] = _default;