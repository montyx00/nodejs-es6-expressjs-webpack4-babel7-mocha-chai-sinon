"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _url = _interopRequireDefault(require("url"));

var _social = _interopRequireDefault(require("../services/social.service"));

var _stock = _interopRequireDefault(require("../services/stock.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // eslint-disable-line new-cap


var social = new _social["default"]();
router.get('/public*', function (req, res, next) {
  if (req.cookies.user) {
    res.set({
      'Set-Cookie': 'user=' + req.cookies.user + '; Path=/; Expires=' + moment.utc(new Date()).add(10, 'm').toDate()
    });
  }

  next();
}).get('/', function (req, res) {
  if (!req.cookies.user) {
    res.redirect('/login');
  }

  res.redirect('/public');
}).get('/public/*', function (req, res, next) {
  !req.cookies.user ? res.redirect('/login') : next();
}).get('/social/topposts', function (req, res) {
  if (req.query.qty) {
    console.log(social.getTopPosts(req.query.qty));
    res.send(social.getTopPosts(req.query.qty));
  }
});
var _default = router;
exports["default"] = _default;