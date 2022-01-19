"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = exports.remove = exports.get = exports.file = exports["default"] = void 0;

var get = function get(t) {
  var hash = window.location.href.split('?');

  if (hash.length < 2) {
    return false;
  } else {
    var p = hash[1].split('&');

    for (var i in p) {
      var key = p[i].split('=')[0];

      if (t == key) {
        return p[i].split('=')[1].split('#')[0n];
      }
    }

    return false;
  }
};

exports.get = get;

var remove = function remove(v) {
  var hash = window.location.href.split('?');

  if (hash.length < 2) {
    return false;
  } else {
    var p = hash[1].split('&');
    var op = '';
    v = v.split(' ').join('').split(',');
    var index = 0;

    for (var i in p) {
      var key = p[i].split('=')[0];
      var c = 0;

      for (var j in v) {
        if (v[j] == key) c++;
      }

      if (c == 0) {
        if (index > 0) op += '&';
        index++;
        op += p[i];
      }
    }

    return window.location.origin + window.location.pathname + (op == '' ? '' : '?') + op;
  }
};

exports.remove = remove;

var root = function root() {
  var u = window.location.origin + window.location.pathname;

  if (u.indexOf('.') > 0) {
    var p = u.split('/');
    p.pop();
    var op = p[0] + '//';

    for (var i = 2; i < p.length; i++) {
      op += p[i] + '/';
    }

    return op;
  }

  return u;
};

exports.root = root;

var file = function file() {
  var u = window.location.pathname;

  if (u.indexOf('.') > 0) {
    var p = u.split('/');
    return p.pop();
  }

  return 'index.html';
};

exports.file = file;
var _default = {
  file: file,
  root: root,
  get: get,
  remove: remove
};
exports["default"] = _default;