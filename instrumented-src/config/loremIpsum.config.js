"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loremIpsumGenerator = _interopRequireDefault(require("lorem-ipsum-generator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LoremIpsumGenerator =
/*#__PURE__*/
function () {
  function LoremIpsumGenerator() {
    _classCallCheck(this, LoremIpsumGenerator);
  }

  _createClass(LoremIpsumGenerator, [{
    key: "getPost",
    value: function getPost(qty) {
      var posts = [];

      for (var i = 0; i < qty; ++i) {
        var post = {};
        post.author = _loremIpsumGenerator["default"].getLoremIpsumText(2), post.content = _loremIpsumGenerator["default"].getLoremIpsumText(20);
        posts.push(post);
      }

      return posts;
    }
  }]);

  return LoremIpsumGenerator;
}();

exports["default"] = LoremIpsumGenerator;