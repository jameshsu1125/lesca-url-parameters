define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.file = exports.root = exports.remove = exports.get = void 0;
    /**
     * get value of queru string parameter
     * @param {string} t url parameter
     * @returns value
     */
    var get = function (t) {
        var h = window.location.href.split('?');
        if (h.length < 2) {
            return false;
        }
        else {
            var p = h[1].split('&');
            var r = p.filter(function (e) {
                var k = e.split('=')[0];
                if (k === t)
                    return true;
                return false;
            });
            if (r.length === 0)
                return false;
            var _a = r[0].split('='), v = _a[1];
            return v.split('#')[0];
        }
    };
    exports.get = get;
    /**
     * get a specific URL with parameters removed
     * @param {string} t url parameter
     * @returns url
     */
    var remove = function (t) {
        var h = window.location.href.split('?');
        var u = window.location.origin + window.location.pathname;
        if (h.length < 2) {
            return false;
        }
        else {
            var p = h[1].split('&');
            var v_1 = t.split(' ').join('').split(',');
            var op = p.filter(function (e) {
                var key = e.split('=')[0];
                var r = v_1.filter(function (j) {
                    if (j !== key)
                        return false;
                    return true;
                });
                if (r.length > 0)
                    return false;
                return true;
            });
            return "".concat(u).concat(op.length > 0 ? '?' : '').concat(op.join('&'));
        }
    };
    exports.remove = remove;
    /**
     * get current root directory
     * @returns url
     */
    var root = function () {
        var u = window.location.origin + window.location.pathname;
        if (u.indexOf('.') > 0) {
            var p = u.split('/');
            p.pop();
            var f = p.splice(0, 2)[0];
            return "".concat(f, "//").concat(p.join('/'), "/");
        }
        return u;
    };
    exports.root = root;
    /**
     * get current file
     * @returns file name
     */
    var file = function () {
        var u = window.location.pathname;
        if (u.indexOf('.') > 0) {
            return u.split('/').pop();
        }
        return 'index.html';
    };
    exports.file = file;
    var QueryString = { file: exports.file, root: exports.root, get: exports.get, remove: exports.remove };
    exports.default = QueryString;
});
