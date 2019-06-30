"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _algorithm = _interopRequireDefault(require("../models/algorithm.model"));

var _errors = _interopRequireDefault(require("../models/errors.model"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlgorithmService =
/*#__PURE__*/
function () {
  function AlgorithmService() {
    _classCallCheck(this, AlgorithmService);
  }

  _createClass(AlgorithmService, [{
    key: "get",
    value: function get(algorithmId) {
      var algorithm = _lodash["default"].find(_algorithm["default"].all, ['id', algorithmId]);

      if (algorithm) {
        return algorithm;
      }

      return _errors["default"].algorithm.missingAlgorithmException;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return _algorithm["default"].all;
    }
  }, {
    key: "recommendationAlgorithm",
    value: function recommendationAlgorithm(price, media) {
      var rnd = Math.floor(Math.random() * 3);
      return _algorithm["default"].recommendations[rnd];
    }
  }]);

  return AlgorithmService;
}();

exports["default"] = AlgorithmService;