/**
 * get value of queru string parameter
 * @param {string} t url parameter
 * @returns value
 */
export const get = (t: string) => {
  const h = window.location.href.split('?');
  if (h.length < 2) {
    return false;
  } else {
    const p = h[1].split('&');
    const r = p.filter((e) => {
      const [k] = e.split('=');
      if (k === t) return true;
      return false;
    });
    if (r.length === 0) return false;
    const [, v] = r[0].split('=');
    return v.split('#')[0];
  }
};

/**
 * get a specific URL with parameters removed
 * @param {string} t url parameter
 * @returns url
 */
export const remove = (t: string) => {
  const h = window.location.href.split('?');
  const u = window.location.origin + window.location.pathname;
  if (h.length < 2) {
    return false;
  } else {
    const p = h[1].split('&');
    const v = t.split(' ').join('').split(',');
    const op = p.filter((e) => {
      const [key] = e.split('=');
      const r = v.filter((j) => {
        if (j !== key) return false;
        return true;
      });
      if (r.length > 0) return false;
      return true;
    });
    return `${u}${op.length > 0 ? '?' : ''}${op.join('&')}`;
  }
};

/**
 * get current root directory
 * @returns url
 */
export const root = () => {
  const u = window.location.origin + window.location.pathname;
  if (u.indexOf('.') > 0) {
    const p = u.split('/');
    p.pop();
    const [f] = p.splice(0, 2);
    return `${f}//${p.join('/')}/`;
  }
  return u;
};

/**
 * get current file
 * @returns file name
 */
export const file = () => {
  const u = window.location.pathname;
  if (u.indexOf('.') > 0) {
    return u.split('/').pop();
  }
  return 'index.html';
};

const QueryString = { file, root, get, remove };

export default QueryString;
