"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = exports.remove = exports.get = exports.file = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

/**
 *
 * @param {string} t url parameter
 * @returns value
 */
var get = function get(t) {
  var h = window.location.href.split('?');

  if (h.length < 2) {
    return false;
  } else {
    var p = h[1].split('&');
    var r = p.filter(function (e) {
      var _e$split = e.split('='),
          _e$split2 = (0, _slicedToArray2["default"])(_e$split, 1),
          k = _e$split2[0];

      if (k === t) return true;
      return false;
    });
    if (r.length === 0) return false;

    var _r$0$split = r[0].split('='),
        _r$0$split2 = (0, _slicedToArray2["default"])(_r$0$split, 2),
        v = _r$0$split2[1];

    return v.split('#')[0];
  }
};
/**
 *
 * @param {string} t url parameter
 * @returns url
 */


exports.get = get;

var remove = function remove(t) {
  var h = window.location.href.split('?');
  var u = window.location.origin + window.location.pathname;

  if (h.length < 2) {
    return false;
  } else {
    var p = h[1].split('&');
    var v = t.split(' ').join('').split(',');
    var op = p.filter(function (e) {
      var _e$split3 = e.split('='),
          _e$split4 = (0, _slicedToArray2["default"])(_e$split3, 1),
          key = _e$split4[0];

      var r = v.filter(function (j) {
        if (j !== key) return false;
        return true;
      });
      if (r.length > 0) return false;
      return true;
    });
    return "".concat(u).concat(op.length > 0 ? '?' : '').concat(op.join('&'));
  }
};
/**
 *
 * @returns url
 */


exports.remove = remove;

var root = function root() {
  var u = window.location.origin + window.location.pathname;

  if (u.indexOf('.') > 0) {
    var p = u.split('/');
    p.pop();

    var _p$splice = p.splice(0, 2),
        _p$splice2 = (0, _slicedToArray2["default"])(_p$splice, 1),
        f = _p$splice2[0];

    return "".concat(f, "//").concat(p.join('/'), "/");
  }

  return u;
};
/**
 *
 * @returns file name
 */


exports.root = root;

var file = function file() {
  var u = window.location.pathname;

  if (u.indexOf('.') > 0) {
    return u.split('/').pop();
  }

  return 'index.html';
};

exports.file = file;
var QueryString = {
  file: file,
  root: root,
  get: get,
  remove: remove
};
var _default = QueryString;
exports["default"] = _default;