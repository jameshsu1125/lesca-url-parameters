export const get = (t) => {
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

export const remove = (v) => {
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

export const root = () => {
	const u = window.location.origin + window.location.pathname;
	if (u.indexOf('.') > 0) {
		const p = u.split('/');
		p.pop();
		var op = p[0] + '//';
		for (var i = 2; i < p.length; i++) {
			op += p[i] + '/';
		}
		return op;
	}
	return u;
};

export const file = () => {
	var u = window.location.pathname;
	if (u.indexOf('.') > 0) {
		var p = u.split('/');
		return p.pop();
	}
	return 'index.html';
};

export default { file, root, get, remove };
