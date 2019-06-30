"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _services = _interopRequireDefault(require("../config/services.config"));

var _loremIpsum = _interopRequireDefault(require("../config/loremIpsum.config"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SocialService =
/*#__PURE__*/
function () {
  function SocialService() {
    _classCallCheck(this, SocialService);

    this.lorem = new _loremIpsum["default"]();
    this.socialService = _services["default"].socialService;
    this.getLoremTopPosts = this.lorem.getPost;
  }

  _createClass(SocialService, [{
    key: "getTopPosts",
    value: function getTopPosts(qty) {
      return this.getLoremTopPosts(qty);
    }
  }, {
    key: "socialMediaCountGenerator",
    value: function socialMediaCountGenerator(symbol, media) {
      return Math.floor(Math.random() * 201);
    }
  }]);

  return SocialService;
}();

exports["default"] = SocialService;