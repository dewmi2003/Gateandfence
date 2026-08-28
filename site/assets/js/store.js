/* AURUM GATES — centralized storage + cart/quote services (localStorage only) */
(function () {
  'use strict';
  var NS = 'aurum.';

  function read(key, fallback) {
    try {
      var raw = window.localStorage.getItem(NS + key);
      if (raw == null) return fallback;
      var v = JSON.parse(raw);
      return v == null ? fallback : v;
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { window.localStorage.setItem(NS + key, JSON.stringify(value)); } catch (e) { /* storage full/blocked */ }
    document.dispatchEvent(new CustomEvent('aurum:store', { detail: { key: key } }));
  }
  function uid(prefix) {
    var t = Date.now().toString(36).toUpperCase();
    var r = Math.floor(Math.random() * 1296).toString(36).toUpperCase().padStart(2, '0');
    return 'AG-' + prefix + '-' + t.slice(-5) + r;
  }

  /* ---------- listeners ---------- */
  var listeners = [];
  function onChange(fn) { listeners.push(fn); return function () { listeners = listeners.filter(function (f) { return f !== fn; }); }; }
  function notify(topic) { listeners.forEach(function (fn) { try { fn(topic); } catch (e) {} }); }
  document.addEventListener('aurum:store', function (e) { notify(e.detail.key); });

  var Store = { read: read, write: write, uid: uid, onChange: onChange };

  /* ---------- product index ---------- */
  var D = window.AURUM_DATA;
  var byId = {};
  (D.products || []).forEach(function (p) { byId[p.id] = p; });
  Store.product = function (id) { return byId[id] || null; };
  Store.allProducts = function () { return D.products || []; };

  /* ---------- shopping cart ---------- */
  function getCart() {
    var c = read('cart', []);
    if (!Array.isArray(c)) return [];
    return c.filter(function (it) { return it && byId[it.id] && typeof it.qty === 'number' && it.qty > 0; })
            .map(function (it) { return { id: it.id, qty: Math.min(99, Math.floor(it.qty)) }; });
  }
  var Cart = {
    items: function () { return getCart().map(function (it) { return { product: byId[it.id], qty: it.qty }; }); },
    count: function () { return getCart().reduce(function (s, it) { return s + it.qty; }, 0); },
    add: function (id, qty) {
      if (!byId[id]) return;
      var c = getCart(), found = false;
      c.forEach(function (it) { if (it.id === id) { it.qty = Math.min(99, it.qty + (qty || 1)); found = true; } });
      if (!found) c.push({ id: id, qty: qty || 1 });
      write('cart', c); notify('cart');
    },
    setQty: function (id, qty) {
      var c = getCart().filter(function (it) { return it.id !== id || qty > 0; });
      c.forEach(function (it) { if (it.id === id) it.qty = Math.min(99, Math.max(1, qty)); });
      write('cart', c); notify('cart');
    },
    remove: function (id) { write('cart', getCart().filter(function (it) { return it.id !== id; })); notify('cart'); },
    clear: function () { write('cart', []); notify('cart'); }
  };
  Store.Cart = Cart;

  /* ---------- quote cart ---------- */
  function getQuoteCart() {
    var c = read('quoteCart', []);
    if (!Array.isArray(c)) return [];
    var seen = {};
    return c.filter(function (id) { if (seen[id] || !byId[id]) return false; seen[id] = 1; return true; });
  }
  var QuoteCart = {
    ids: getQuoteCart,
    items: function () { return getQuoteCart().map(function (id) { return byId[id]; }); },
    count: function () { return getQuoteCart().length; },
    has: function (id) { return getQuoteCart().indexOf(id) >= 0; },
    toggle: function (id) {
      if (!byId[id]) return;
      var c = getQuoteCart();
      var i = c.indexOf(id);
      if (i >= 0) c.splice(i, 1); else c.push(id);
      write('quoteCart', c); notify('quoteCart');
      return i < 0;
    },
    remove: function (id) { write('quoteCart', getQuoteCart().filter(function (x) { return x !== id; })); notify('quoteCart'); },
    clear: function () { write('quoteCart', []); notify('quoteCart'); }
  };
  Store.QuoteCart = QuoteCart;

  /* ---------- saved products ---------- */
  Store.saved = {
    ids: function () { var s = read('saved', []); return Array.isArray(s) ? s : []; },
    has: function (id) { return this.ids().indexOf(id) >= 0; },
    toggle: function (id) {
      var s = this.ids(), i = s.indexOf(id);
      if (i >= 0) s.splice(i, 1); else s.push(id);
      write('saved', s); notify('saved');
      return i < 0;
    }
  };

  /* ---------- requests (orders / quotes / consultations / custom projects) ---------- */
  Store.requests = {
    all: function () { var r = read('requests', []); return Array.isArray(r) ? r : []; },
    byType: function (type) { return this.all().filter(function (r) { return r.type === type; }); },
    get: function (id) { return this.all().filter(function (r) { return r.id === id; })[0] || null; },
    add: function (req) {
      var list = this.all();
      list.unshift(req);
      write('requests', list.slice(0, 100));
      notify('requests');
      return req;
    },
    remove: function (id) { write('requests', this.all().filter(function (r) { return r.id !== id; })); notify('requests'); }
  };

  /* ---------- account (demo, frontend only) ---------- */
  Store.account = {
    get: function () { var a = read('account', null); return a && typeof a === 'object' ? a : null; },
    isSignedIn: function () { var a = this.get(); return !!(a && a.signedIn && a.email); },
    signIn: function (name, email) {
      var a = this.get() || {};
      a.name = name; a.email = email; a.signedIn = true; a.since = a.since || new Date().toISOString();
      write('account', a); notify('account');
    },
    signOut: function () {
      var a = this.get() || {};
      a.signedIn = false;
      write('account', a); notify('account');
    },
    clear: function () { try { window.localStorage.removeItem(NS + 'account'); } catch (e) {} notify('account'); }
  };

  /* ---------- toast ---------- */
  Store.toast = function (msg, kind) {
    document.dispatchEvent(new CustomEvent('aurum:toast', { detail: { msg: msg, kind: kind || 'ok' } }));
  };
  window.AurumStore = Store;
})();
