"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = exports.remove = exports.get = exports.file = exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var get = function get(t) {
  var h = window.location.href.split('?');

  if (h.length < 2) {
    return false;
  } else {
    var p = h[1].split('&');
    var r = p.filter(function (e) {
      var _e$split = e.split('='),
          _e$split2 = _slicedToArray(_e$split, 1),
          k = _e$split2[0];

      if (k === t) return true;
      return false;
    });
    if (r.length === 0) return false;

    var _r$0$split = r[0].split('='),
        _r$0$split2 = _slicedToArray(_r$0$split, 2),
        v = _r$0$split2[1];

    return v.split('#')[0];
  }
};

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
          _e$split4 = _slicedToArray(_e$split3, 1),
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

exports.remove = remove;

var root = function root() {
  var u = window.location.origin + window.location.pathname;

  if (u.indexOf('.') > 0) {
    var p = u.split('/');
    p.pop();

    var _p$splice = p.splice(0, 2),
        _p$splice2 = _slicedToArray(_p$splice, 1),
        f = _p$splice2[0];

    return "".concat(f, "//").concat(p.join('/'), "/");
  }

  return u;
};

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