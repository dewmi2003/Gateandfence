/* AURUM GATES — SPA application: router, shell, components, pages */
(function () {
  'use strict';
  var S = window.AurumStore, D = window.AURUM_DATA;
  var root = document.getElementById('app');
  var canPush = window.location.protocol.indexOf('http') === 0 && window.history && 'pushState' in window.history;

  /* ============================ helpers ============================ */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function title(t) { document.title = t ? t + ' | AURUM GATES' : 'AURUM GATES | Architectural Gates, Fences & Automation'; }

  var FALLBACK_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480"><rect width="100%" height="100%" fill="#1c1b1b"/><g fill="none" stroke="#C7A360" stroke-opacity="0.5"><rect x="240" y="170" width="160" height="140" rx="4"/><path d="M240 240h160M320 170v140M252 170v140M276 170v140M300 170v140M344 170v140M368 170v140M388 170v140"/></g><text x="320" y="360" fill="#C7A360" font-family="Georgia" font-size="16" text-anchor="middle">AURUM GATES</text></svg>');
  function img(src, alt, cls) {
    return '<img src="' + esc(src || FALLBACK_IMG) + '" alt="' + esc(alt || '') + '" loading="lazy" class="' + (cls || '') + '" onerror="this.onerror=null;this.src=\'' + FALLBACK_IMG + '\'">';
  }

  /* ============================ router ============================ */
  function parsePath() {
    var path, query = {};
    if (!canPush && window.location.hash.indexOf('#/') === 0) {
      var h = window.location.hash.slice(2);
      var qi = h.indexOf('?');
      path = qi >= 0 ? h.slice(0, qi) : h;
      if (qi >= 0) h.slice(qi + 1).split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) query[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); });
    } else {
      path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      window.location.search.slice(1).split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) query[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); });
    }
    return { segments: path ? path.split('/') : [], query: query };
  }
  function href(path) { return canPush ? '/' + path.replace(/^\//, '') : '#/' + path.replace(/^\//, ''); }
  function go(path) {
    if (canPush) { window.history.pushState({}, '', href(path)); render(); }
    else { window.location.hash = '#/' + path.replace(/^\//, ''); }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[data-link]') : null;
    if (!a) return;
    e.preventDefault();
    go(a.getAttribute('href').replace(canPush ? /^\// : /^#\//, ''));
  });
  window.addEventListener('popstate', render);
  window.addEventListener('hashchange', function () { if (!canPush) render(); });

  /* ============================ nav data ============================ */
  var SUBS = {
    'gates': [['driveway-gates', 'Driveway Gates'], ['garden-gates', 'Garden & Walk Gates'], ['privacy-gates', 'Privacy Gates']],
    'fences': [['aluminum-fences', 'Aluminum & Decorative Fences'], ['pool-fences', 'Pool Fences']],
    'railings': [['balcony-railings', 'Balcony Railings'], ['porch-railings', 'Porch Railings'], ['deck-railings', 'Deck Railings'], ['handrails', 'Handrails'], ['decorative-railings', 'Decorative Railings']],
    'automation': [['sliding-operators', 'Sliding Gate Operators'], ['swing-operators', 'Swing Gate Operators'], ['barrier-gates', 'Barrier Gates'], ['overhead-operators', 'Overhead Door Operators'], ['operator-accessories', 'Operator Accessories']],
    'access-control': [['telephone-entry', 'Telephone Entry'], ['intercom', 'Intercoms'], ['keypads', 'Keypads'], ['card-readers', 'Card & Proximity Readers'], ['remote-controls', 'Remote Controls'], ['safety-systems', 'Safety Systems']],
    'accessories': [['hinges', 'Hinges'], ['latches', 'Latches & Locks'], ['wheels', 'Wheels & Rollers'], ['tracks', 'Tracks & Cantilever'], ['springs', 'Springs'], ['control-stations', 'Control Stations'], ['circuit-boards', 'Circuit Boards'], ['hardware', 'Hardware']],
    'scissor-gates': []
  };
  var CAT_NAMES = { 'gates': 'Gates', 'fences': 'Fences', 'railings': 'Railings', 'automation': 'Gate Automation', 'access-control': 'Access Control', 'accessories': 'Gate Accessories', 'scissor-gates': 'Scissor Gates' };

  /* ============================ components ============================ */
  function productCard(p) {
    var saved = S.saved.has(p.id);
    var inQuote = S.QuoteCart.has(p.id);
    return '<article class="card" data-id="' + p.id + '">' +
      '<a class="card-media" data-link href="' + href('product/' + p.id) + '" aria-label="' + esc(p.name) + '">' +
      img(p.image, p.name, 'card-img') +
      '<span class="card-flag">' + esc(p.collection || CAT_NAMES[p.cat] || '') + '</span></a>' +
      '<div class="card-body">' +
      '<div class="card-meta"><span>' + esc(p.style || '') + '</span>' + (p.manufacturer ? '<span>' + esc(p.manufacturer) + '</span>' : '') + '</div>' +
      '<h3 class="card-title"><a data-link href="' + href('product/' + p.id) + '">' + esc(p.name) + '</a></h3>' +
      '<p class="card-short">' + esc(p.short || '') + '</p>' +
      '<div class="card-actions">' +
      '<span class="price-tag">Request a Quote</span>' +
      '<div class="card-btns">' +
      '<button class="icon-btn ' + (saved ? 'active' : '') + '" data-save="' + p.id + '" aria-pressed="' + saved + '" aria-label="Save ' + esc(p.name) + '">' + (saved ? '♥' : '♡') + '</button>' +
      (p.pricingType === 'cart'
        ? '<button class="btn btn-sm btn-gold" data-add="' + p.id + '">Add to Cart</button>'
        : '<button class="btn btn-sm ' + (inQuote ? 'btn-outline active' : 'btn-outline') + '" data-quote="' + p.id + '" aria-pressed="' + inQuote + '">' + (inQuote ? '✓ In Quote List' : 'Quote') + '</button>') +
      '</div></div></div></article>';
  }

  function grid(products) {
    if (!products.length) return '<div class="empty"><p>No products match your selection.</p><button class="btn btn-outline" data-clear-filters>Clear filters</button></div>';
    return '<div class="grid">' + products.map(productCard).join('') + '</div>';
  }

  function breadcrumbs(items) {
    return '<nav class="crumbs" aria-label="Breadcrumb"><ol>' + items.map(function (c, i) {
      return '<li>' + (i === items.length - 1 ? '<span aria-current="page">' + esc(c.label) + '</span>' : '<a data-link href="' + href(c.path) + '">' + esc(c.label) + '</a>') + '</li>';
    }).join('') + '</ol></nav>';
  }

  function pageHead(kicker, h1, lead) {
    return '<div class="page-head"><span class="kicker">' + esc(kicker) + '</span><h1>' + esc(h1) + '</h1>' + (lead ? '<p class="lead">' + esc(lead) + '</p>' : '') + '</div>';
  }

  /* ============================ shell ============================ */
  function dropdown(label, cols, extraCls) {
    return '<div class="nav-item has-drop' + (extraCls ? ' ' + extraCls : '') + '"><button class="nav-btn" aria-expanded="false" aria-haspopup="true">' + label + '<span class="caret" aria-hidden="true">▾</span></button>' +
      '<div class="drop"><div class="drop-cols">' + cols.map(function (col) {
        return '<div class="drop-col"><p class="drop-label">' + esc(col.label) + '</p><ul>' + col.links.map(function (l) {
          return '<li><a data-link href="' + href(l[0]) + '">' + esc(l[1]) + '</a></li>';
        }).join('') + '</ul></div>';
      }).join('') + '</div></div></div>';
  }

  function headerHTML() {
    var cartCount = S.Cart.count(), quoteCount = S.QuoteCart.count();
    return '<a class="skip-link" href="#main">Skip to main content</a>' +
      '<header class="site-header" id="top">' +
      '<div class="topbar"><div class="wrap topbar-in"><span>L. A. Ornamental &amp; Rack Corp — Miami, Florida</span><span class="topbar-links"><a href="tel:3056960419">305-696-0419</a><a href="mailto:LAOrnamental@Aol.com">LAOrnamental@Aol.com</a></span></div></div>' +
      '<div class="header-main"><div class="wrap header-in">' +
      '<a class="brand" data-link href="' + href('') + '" aria-label="AURUM GATES home"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32" width="30" height="30"><g fill="none" stroke="#C7A360" stroke-width="1.6"><rect x="5" y="8" width="22" height="18" rx="1.5"/><path d="M5 17h22M16 8v18M9 8v18M12.5 8v18M19.5 8v18M23 8v18M5 8c3-3.5 19-3.5 22 0"/></g></svg></span>' +
      '<span class="brand-text">AURUM<span>GATES</span><small>by L.A. Ornamental &amp; Rack Corp</small></span></a>' +
      '<nav class="main-nav" aria-label="Primary">' +
      dropdown('Products', [
        { label: 'Gates', links: [['products/gates', 'All Gates'], ['products/gates/driveway-gates', 'Driveway Gates'], ['products/gates/garden-gates', 'Garden & Walk Gates'], ['products/gates/privacy-gates', 'Privacy Gates'], ['products/scissor-gates', 'Scissor Gates']] },
        { label: 'Fences', links: [['products/fences', 'All Fences'], ['products/fences/aluminum-fences', 'Aluminum & Decorative'], ['products/fences/pool-fences', 'Pool Fences']] },
        { label: 'Railings', links: [['products/railings', 'All Railings'], ['products/railings/balcony-railings', 'Balcony'], ['products/railings/porch-railings', 'Porch'], ['products/railings/deck-railings', 'Deck'], ['products/railings/handrails', 'Handrails'], ['products/railings/decorative-railings', 'Decorative']] }
      ]) +
      dropdown('Automation', [
        { label: 'Operators', links: [['automation', 'Automation Overview'], ['products/automation/sliding-operators', 'Sliding Operators'], ['products/automation/swing-operators', 'Swing & Underground'], ['products/automation/barrier-gates', 'Barrier Gates'], ['products/automation/overhead-operators', 'Overhead Door']] },
        { label: 'Support', links: [['products/automation/operator-accessories', 'Operator Accessories'], ['products/accessories/circuit-boards', 'Circuit Boards'], ['manufacturers', 'Manufacturers']] }
      ]) +
      dropdown('Access Control', [
        { label: 'Entry', links: [['access-control', 'Access Control Overview'], ['products/access-control/telephone-entry', 'Telephone Entry'], ['products/access-control/intercom', 'Intercoms'], ['products/access-control/keypads', 'Keypads'], ['products/access-control/card-readers', 'Card & Proximity Readers']] },
        { label: 'Control & Safety', links: [['products/access-control/remote-controls', 'Remote Controls'], ['products/access-control/safety-systems', 'Safety Systems'], ['products/accessories/control-stations', 'Control Stations']] }
      ], 'drop-right') +
      '<a class="nav-link" data-link href="' + href('resources') + '">Resources</a>' +
      '<a class="nav-link" data-link href="' + href('about') + '">About</a>' +
      '<a class="nav-link" data-link href="' + href('contact') + '">Contact</a>' +
      '</nav>' +
      '<div class="header-tools">' +
      '<button class="icon-btn tool" data-search-open aria-label="Open search">⌕</button>' +
      '<a class="icon-btn tool" data-link href="' + href('account') + '" aria-label="Account">◉</a>' +
      '<a class="icon-btn tool cart-tool" data-link href="' + href('quote-cart') + '" aria-label="Quote request list">▤<span class="count" ' + (quoteCount ? '' : 'hidden') + '>' + quoteCount + '</span></a>' +
      '<a class="icon-btn tool cart-tool" data-link href="' + href('cart') + '" aria-label="Shopping cart">🛒<span class="count" ' + (cartCount ? '' : 'hidden') + '>' + cartCount + '</span></a>' +
      '<button class="icon-btn tool burger" data-burger aria-label="Open menu" aria-expanded="false">☰</button>' +
      '</div></div></div>' +
      '<div class="mobile-menu" id="mobileMenu" hidden>' +
      '<nav aria-label="Mobile">' +
      Object.keys(SUBS).map(function (cat) {
        return '<details class="m-acc"><summary>' + esc(CAT_NAMES[cat] || cat) + '</summary><ul><li><a data-link href="' + href('products/' + cat) + '">All ' + esc((CAT_NAMES[cat] || '').replace(/s$/, '')) + 's</a></li>' +
          SUBS[cat].map(function (s) { return '<li><a data-link href="' + href('products/' + cat + '/' + s[0]) + '">' + esc(s[1]) + '</a></li>'; }).join('') + '</ul></details>';
      }).join('') +
      '<a class="m-link" data-link href="' + href('manufacturers') + '">Manufacturers</a>' +
      '<a class="m-link" data-link href="' + href('custom-projects') + '">Custom Projects</a>' +
      '<a class="m-link" data-link href="' + href('consultation') + '">Consultation</a>' +
      '<a class="m-link" data-link href="' + href('deals') + '">Deals &amp; Offers</a>' +
      '<a class="m-link" data-link href="' + href('resources') + '">Resources</a>' +
      '<a class="m-link" data-link href="' + href('technical') + '">Technical Specifications</a>' +
      '<a class="m-link" data-link href="' + href('about') + '">About</a>' +
      '<a class="m-link" data-link href="' + href('faq') + '">FAQ</a>' +
      '<a class="m-link" data-link href="' + href('contact') + '">Contact</a>' +
      '</nav><button class="btn btn-gold m-cta" data-mquote>Request a Quote</button></div>' +
      '</header>';
  }

  function footerHTML() {
    return '<footer class="site-footer"><div class="wrap footer-grid">' +
      '<div class="f-col f-brand"><span class="brand-text foot">AURUM<span>GATES</span></span><p>' + esc(D.company.legalName) + '<br>' + esc(D.company.address) + '</p><p><a href="tel:3056960419">' + D.company.phone + '</a><br><a href="mailto:' + D.company.email + '">' + D.company.email + '</a><br>Fax ' + D.company.fax + '</p></div>' +
      '<div class="f-col"><h4>Products</h4><ul>' +
      [['products/gates/driveway-gates', 'Driveway Gates'], ['products/gates/garden-gates', 'Garden & Walk Gates'], ['products/gates/privacy-gates', 'Privacy Gates'], ['products/fences', 'Fences'], ['products/fences/pool-fences', 'Pool Fences'], ['products/railings', 'Railings'], ['products/scissor-gates', 'Scissor Gates']].map(function (l) { return '<li><a data-link href="' + href(l[0]) + '">' + l[1] + '</a></li>'; }).join('') + '</ul></div>' +
      '<div class="f-col"><h4>Automation &amp; Access</h4><ul>' +
      [['automation', 'Gate Automation'], ['access-control', 'Access Control'], ['products/automation/barrier-gates', 'Barrier Gates'], ['products/accessories/circuit-boards', 'Circuit Boards'], ['products/accessories', 'Accessories'], ['manufacturers', 'Manufacturers']].map(function (l) { return '<li><a data-link href="' + href(l[0]) + '">' + l[1] + '</a></li>'; }).join('') + '</ul></div>' +
      '<div class="f-col"><h4>Services</h4><ul>' +
      [['custom-projects', 'Custom Projects'], ['consultation', 'Consultation'], ['quote-cart', 'Request a Quote'], ['deals', 'Deals & Offers'], ['cart', 'Cart & Checkout']].map(function (l) { return '<li><a data-link href="' + href(l[0]) + '">' + l[1] + '</a></li>'; }).join('') + '</ul></div>' +
      '<div class="f-col"><h4>Company</h4><ul>' +
      [['about', 'About Us'], ['contact', 'Contact Us'], ['faq', 'FAQ'], ['policies', 'Our Policies'], ['resources', 'Resources'], ['technical', 'Technical Specifications'], ['account', 'My Account']].map(function (l) { return '<li><a data-link href="' + href(l[0]) + '">' + l[1] + '</a></li>'; }).join('') + '</ul></div>' +
      '</div><div class="wrap footer-legal"><p>© ' + new Date().getFullYear() + ' ' + esc(D.company.legalName) + ' All rights reserved. Redesign of the Gates N Fences catalog. All brand names and logos mentioned are trademarks of their respective owners and do not imply affiliation.</p></div></footer>';
  }

  function searchOverlay() {
    return '<div class="overlay" id="searchOverlay" hidden role="dialog" aria-modal="true" aria-label="Search">' +
      '<div class="overlay-panel"><form id="searchForm" class="search-form"><input type="search" id="searchInput" placeholder="Search gates, fences, operators, brands…" aria-label="Search the catalog" autocomplete="off"><button class="btn btn-gold" type="submit">Search</button><button type="button" class="icon-btn overlay-close" data-search-close aria-label="Close search">✕</button></form>' +
      '<p class="search-hints">Try: <button class="chip" data-q="sliding">sliding</button> <button class="chip" data-q="pool">pool</button> <button class="chip" data-q="BFT">BFT</button> <button class="chip" data-q="railing">railing</button> <button class="chip" data-q="privacy">privacy</button></p></div></div>';
  }

  /* ============================ pages ============================ */
  function pageHome() {
    title('');
    var featGates = ['golden-orchid', 'royalty-with-accent', 'entrance-of-eden', 'pacific-tide', 'elegant-queen', 'great-vine'].map(S.product).filter(Boolean);
    var featFences = ['rolling-calm', 'american-picket', 'golden-leaves-triumph', 'candy-cane', 'pacific-tide-fence', 'pool-safety'].map(S.product).filter(Boolean);
    var featRails = ['sunshine', 'belly-special', 'elegant-serenity', 'modern-edition', 'horse-shoe', 'circle-in-square'].map(S.product).filter(Boolean);
    var featOps = ['bft-ares', 'pm-cswc2004', 'lm-mega-slide', 'faac-746', 'sea-orion', 'apollo-7100etl'].map(S.product).filter(Boolean);
    return '<div class="hero"><div class="hero-media">' + img(D.heroImages.hero, 'Custom estate entrance gate by L.A. Ornamental') + '<div class="hero-scrim"></div></div>' +
      '<div class="wrap hero-content"><span class="kicker">Miami, Florida — 35+ Years of Custom Fabrication</span>' +
      '<h1>Architectural gates, fences &amp; automation, built to your opening.</h1>' +
      '<p class="lead">Custom aluminum and wrought iron driveway gates, fencing and railings — matched to your home, finished in oven-baked powder coat, and automated with operators from the top brands.</p>' +
      '<div class="hero-ctas"><a class="btn btn-gold" data-link href="' + href('products') + '">Browse the Catalog</a><a class="btn btn-outline" data-link href="' + href('custom-projects') + '">Start a Custom Project</a><a class="btn btn-ghost" data-link href="' + href('consultation') + '">Book a Consultation</a></div></div></div>' +

      '<section class="section"><div class="wrap"><div class="section-head"><span class="kicker">The Collection</span><h2>Everything for the entry</h2></div><div class="cat-grid">' +
      D.categories.map(function (c) {
        return '<a class="cat-card" data-link href="' + href(c.slug === 'scissor-gates' ? 'products/scissor-gates' : 'products/' + c.slug) + '">' + img(c.img, c.name) + '<div class="cat-card-body"><h3>' + esc(c.name) + '</h3><p>' + esc(c.blurb) + '</p><span class="cat-link">Explore →</span></div></a>';
      }).join('') + '</div></div></section>' +

      '<section class="section alt"><div class="wrap"><div class="section-head split"><div><span class="kicker">Featured Gates</span><h2>Signature driveway gates</h2></div><a class="btn btn-outline" data-link href="' + href('products/gates/driveway-gates') + '">All driveway gates</a></div>' + grid(featGates) + '</div></section>' +

      '<section class="section"><div class="wrap"><div class="section-head split"><div><span class="kicker">Fencing</span><h2>Fences that match your gates</h2></div><a class="btn btn-outline" data-link href="' + href('products/fences') + '">All fences</a></div>' + grid(featFences) + '</div></section>' +

      '<section class="section alt"><div class="wrap"><div class="section-head split"><div><span class="kicker">Railings</span><h2>Balcony, porch &amp; deck railings</h2></div><a class="btn btn-outline" data-link href="' + href('products/railings') + '">All railings</a></div>' + grid(featRails) + '</div></section>' +

      '<section class="section split-feature"><div class="wrap split-2">' +
      '<div class="split-media">' + img(D.heroImages.custom, 'Custom ornamental fabrication and welding') + '</div>' +
      '<div class="split-copy"><span class="kicker">Custom Fabrication</span><h2>Any style in aluminum or wrought iron</h2><p>Every gate, fence and railing is designed and manufactured to withstand outdoor conditions, fabricated to your dimensions with installation hardware included. Privacy backing is available in aluminum, steel, Plexiglas or plastic in many colors.</p><ul class="tick">' + ['Made to your opening dimensions', 'Oven-baked powder coat, any color from the chart', 'Garden and walk gates matched to your driveway gate', 'Solid privacy backing options'].map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul><div class="hero-ctas"><a class="btn btn-gold" data-link href="' + href('custom-projects') + '">Build Your Custom Project</a></div></div></div></section>' +

      '<section class="section alt"><div class="wrap"><div class="section-head split"><div><span class="kicker">Automation</span><h2>Gate operators from the top brands</h2></div><a class="btn btn-outline" data-link href="' + href('automation') + '">Automation overview</a></div>' + grid(featOps) + '</div></section>' +

      '<section class="section"><div class="wrap"><div class="section-head"><span class="kicker">Access Control</span><h2>Control how the gate opens</h2></div><div class="cat-grid small">' +
      [['products/access-control/telephone-entry', 'Telephone Entry', 'Linear, Sentex, Elite, DoorKing and AAS systems for residential and commercial properties.'],
       ['products/access-control/keypads', 'Keypads', 'Digital keyless entry keypads for gates and doors.'],
       ['products/access-control/remote-controls', 'Remote Controls', 'Linear, MultiCode, LiftMaster and Heddolf remotes — visor and keychain.'],
       ['products/access-control/safety-systems', 'Safety Systems', 'Exit loops, safety loops, photo beams and exit devices.']].map(function (c) {
        return '<a class="cat-card text" data-link href="' + href(c[0]) + '"><div class="cat-card-body"><h3>' + c[1] + '</h3><p>' + c[2] + '</p><span class="cat-link">Explore →</span></div></a>';
      }).join('') + '</div></div></section>' +

      '<section class="section alt"><div class="wrap split-2">' +
      '<div class="split-copy"><span class="kicker">Technical Resources</span><h2>Manuals, color charts &amp; guides</h2><p>Real documentation for the equipment we carry — operator manuals, remote programming instructions and the powder-coat color chart.</p><a class="btn btn-outline" data-link href="' + href('resources') + '">Open Resources</a></div>' +
      '<div class="split-media">' + img(D.heroImages.automation, 'Gate operator equipment') + '</div></div></section>' +

      '<section class="section cta-band"><div class="wrap"><h2>Not sure which gate or operator fits your property?</h2><p>Tell us your opening size, usage and style — we will guide you to the right choice.</p><div class="hero-ctas center"><a class="btn btn-gold" data-link href="' + href('consultation') + '">Request a Consultation</a><a class="btn btn-outline" href="tel:3056960419">Call ' + D.company.phone + '</a></div></div></section>';
  }

  function productsIn(cat, sub) {
    return S.allProducts().filter(function (p) { return p.cat === cat && (!sub || p.sub === sub); });
  }

  function filterBar(state) {
    var prods = state.base;
    var materials = [], styles = [], mfgs = [], classes = [];
    prods.forEach(function (p) {
      if (p.material && materials.indexOf(p.material) < 0) materials.push(p.material);
      if (p.style && styles.indexOf(p.style) < 0) styles.push(p.style);
      if (p.manufacturer && mfgs.indexOf(p.manufacturer) < 0) mfgs.push(p.manufacturer);
      if (p.operatorClass && classes.indexOf(p.operatorClass) < 0) classes.push(p.operatorClass);
    });
    function sel(name, label, opts, current) {
      if (opts.length < 2) return '';
      return '<label class="filter">' + esc(label) + '<select data-filter="' + name + '">' +
        '<option value="">All</option>' + opts.map(function (o) { return '<option value="' + esc(o) + '"' + (current === o ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select></label>';
    }
    var f = state.filters;
    return '<div class="toolbar" role="search" aria-label="Filters">' +
      '<div class="toolbar-filters">' +
      sel('material', 'Material', materials, f.material) +
      sel('style', 'Style', styles, f.style) +
      sel('manufacturer', 'Manufacturer', mfgs, f.manufacturer) +
      sel('class', 'Class', classes, f['class']) +
      '</div>' +
      '<div class="toolbar-right">' +
      '<label class="filter">Sort<select data-sort>' +
      [['name', 'Name A–Z'], ['collection', 'Collection'], ['manufacturer', 'Manufacturer'], ['availability', 'Availability']].map(function (o) { return '<option value="' + o[0] + '"' + (state.sort === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
      '</select></label>' +
      (state.searchable ? '<label class="filter grow">Search<input type="search" data-filter-text placeholder="Filter this list…" value="' + esc(f.text || '') + '"></label>' : '') +
      '</div></div>';
  }

  function applyFilters(list, f, sort) {
    var out = list.filter(function (p) {
      if (f.material && p.material !== f.material) return false;
      if (f.style && p.style !== f.style) return false;
      if (f.manufacturer && p.manufacturer !== f.manufacturer) return false;
      if (f['class'] && p.operatorClass !== f['class']) return false;
      if (f.text) {
        var hay = [p.name, p.short, p.description, p.collection, p.material, p.manufacturer, (p.tags || []).join(' ')].join(' ').toLowerCase();
        if (hay.indexOf(f.text.toLowerCase()) < 0) return false;
      }
      return true;
    });
    out.sort(function (a, b) { return String(a[sort] || a.name).localeCompare(String(b[sort] || b.name)); });
    return out;
  }

  function pageProducts(cat, sub, query) {
    var isAll = !cat;
    var catName = isAll ? 'All Products' : (CAT_NAMES[cat] || cat);
    var subName = sub ? ((SUBS[cat] || []).filter(function (s) { return s[0] === sub; })[0] || [null, sub])[1] : null;
    title((subName || catName));
    var base = isAll ? S.allProducts() : productsIn(cat, sub);
    var state = {
      base: base,
      filters: { material: query.material || '', style: query.style || '', manufacturer: query.mfg || '', 'class': query.cls || '', text: query.q || '' },
      sort: query.sort || 'name',
      searchable: true
    };
    var list = applyFilters(base, state.filters, state.sort);
    var crumbs = [{ label: 'Home', path: '' }];
    if (!isAll) crumbs.push({ label: catName, path: 'products/' + cat });
    crumbs.push({ label: subName || (isAll ? 'All Products' : catName) });

    var intro = {
      'gates': 'Every gate is custom made to your opening in aluminum or wrought iron, with installation hardware included and a powder-coat finish from the color chart.',
      'fences': 'Fence panels are custom made from 4 ft to 10 ft wide and matched to your driveway or garden gates.',
      'railings': 'Top quality balcony, porch, deck and hand rails in metal, aluminum or wrought iron — for interior or exterior, residential or commercial.',
      'automation': 'Swing, sliding, underground, overhead and barrier operators from the brands we carry, sized for residential through industrial duty.',
      'access-control': 'Telephone entry, keypads, intercoms, card readers, remotes and safety devices for every gate.',
      'accessories': 'Hinges, latches, wheels, tracks, springs, control stations and replacement boards.',
      'scissor-gates': 'Heavy duty retractable accordion gates for industrial warehouse and overhead-door openings. Most standard sizes available; custom sizes made to order.'
    }[cat] || '';

    return '<div class="wrap page">' + breadcrumbs(crumbs) + pageHead(subName ? catName : 'Catalog', subName || catName, intro) +
      (!isAll && SUBS[cat] && SUBS[cat].length ? '<div class="chips-row" role="navigation" aria-label="Subcategories"><a class="chip' + (!sub ? ' active' : '') + '" data-link href="' + href('products/' + cat) + '">All</a>' + SUBS[cat].map(function (s) { return '<a class="chip' + (sub === s[0] ? ' active' : '') + '" data-link href="' + href('products/' + cat + '/' + s[0]) + '">' + esc(s[1]) + '</a>'; }).join('') + '</div>' : '') +
      '<div class="listing"><aside class="filters-side" aria-label="Category navigation"><h4>Catalog</h4><ul>' +
      Object.keys(SUBS).map(function (c) { return '<li><a data-link href="' + href('products/' + c) + '"' + (c === cat ? ' aria-current="true"' : '') + '>' + esc(CAT_NAMES[c]) + '</a></li>'; }).join('') +
      '</ul><div class="side-note"><h4>Need help sizing?</h4><p>Tell us the opening and daily usage — we will recommend the gate and operator.</p><a class="btn btn-outline btn-sm" data-link href="' + href('consultation') + '">Consultation</a></div></aside>' +
      '<div class="listing-main">' + filterBar(state) + '<p class="result-count" role="status">' + list.length + ' product' + (list.length === 1 ? '' : 's') + '</p>' + grid(list) + '</div></div></div>';
  }

  function pageProduct(id) {
    var p = S.product(id);
    if (!p) return pageNotFound();
    title(p.name);
    var related = S.allProducts().filter(function (x) { return x.id !== p.id && (x.cat === p.cat && (x.sub === p.sub || x.collection === p.collection)); }).slice(0, 4);
    var saved = S.saved.has(p.id), inQuote = S.QuoteCart.has(p.id);
    var specRows = [
      ['Category', CAT_NAMES[p.cat] || p.cat], ['Collection', p.collection], ['Material', p.material],
      ['Style', p.style], p.motion ? ['Operation', p.motion] : null, p.operatorClass ? ['Duty Class', p.operatorClass] : null,
      p.manufacturer ? ['Manufacturer', p.manufacturer] : null, ['Availability', p.availability], ['Pricing', 'Request a Quote']
    ].filter(Boolean);

    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: CAT_NAMES[p.cat] || p.cat, path: 'products/' + p.cat }, { label: p.name }]) +
      '<div class="pdp"><div class="pdp-gallery"><div class="pdp-main">' + img(p.image || (p.gallery && p.gallery[0]), p.name) + '</div>' +
      (p.gallery && p.gallery.length > 1 ? '<div class="pdp-thumbs">' + p.gallery.map(function (gsrc, i) { return '<button class="thumb' + (i === 0 ? ' active' : '') + '" data-thumb="' + esc(gsrc) + '" aria-label="View image ' + (i + 1) + '">' + img(gsrc, p.name + ' image ' + (i + 1)) + '</button>'; }).join('') + '</div>' : '') + '</div>' +
      '<div class="pdp-info"><span class="kicker">' + esc(p.collection || '') + '</span><h1>' + esc(p.name) + '</h1>' +
      '<p class="lead">' + esc(p.short || '') + '</p><p>' + esc(p.description || '') + '</p>' +
      '<div class="pdp-price"><span class="price-tag lg">Request a Quote</span><span class="pdp-note">Custom products are quoted per opening, finish and automation package.</span></div>' +
      '<div class="pdp-ctas">' +
      (p.pricingType === 'cart' ? '<button class="btn btn-gold" data-add="' + p.id + '">Add to Cart</button>' : '<button class="btn btn-gold" data-quotego="' + p.id + '">Request a Quote</button>') +
      '<button class="btn btn-outline ' + (inQuote ? 'active' : '') + '" data-quote="' + p.id + '" aria-pressed="' + inQuote + '">' + (inQuote ? '✓ In Quote List' : 'Add to Quote List') + '</button>' +
      '<button class="btn btn-ghost ' + (saved ? 'active' : '') + '" data-save="' + p.id + '" aria-pressed="' + saved + '">' + (saved ? '♥ Saved' : '♡ Save') + '</button></div>' +
      '<table class="spec-table"><caption class="visually-hidden">Product specifications</caption><tbody>' + specRows.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</tbody></table>' +
      '</div></div>' +
      '<div class="pdp-cols">' +
      (p.features && p.features.length ? '<div class="pdp-col"><h3>Features</h3><ul class="tick">' + p.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul></div>' : '') +
      (p.applications && p.applications.length ? '<div class="pdp-col"><h3>Applications</h3><ul class="tick">' + p.applications.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul></div>' : '') +
      '<div class="pdp-col"><h3>Automation &amp; Support</h3><p>' + esc(p.automation || 'Contact us to pair this product with the right hardware.') + '</p>' +
      (p.doc ? '<p><a class="btn btn-outline btn-sm" href="' + esc(p.doc.url) + '" target="_blank" rel="noopener">📄 ' + esc(p.doc.label) + '</a></p>' : '') +
      '<p><a class="btn btn-outline btn-sm" data-link href="' + href('consultation') + '">Ask about this product</a></p></div></div>' +
      '<p class="src-line">Source reference: <a href="' + esc(p.src) + '" target="_blank" rel="noopener">' + esc(p.src.replace('https://www.', 'www.')) + '</a></p>' +
      (related.length ? '<section class="section"><div class="section-head"><span class="kicker">Related</span><h2>You may also consider</h2></div>' + grid(related) + '</section>' : '') +
      '</div>';
  }

  function pageSearch(query) {
    var q = (query.q || '').trim();
    title(q ? 'Search: ' + q : 'Search');
    var results = [], resResults = [], mfgResults = [];
    if (q) {
      var ql = q.toLowerCase();
      results = S.allProducts().filter(function (p) {
        return [p.name, p.cat, p.sub, p.collection, p.short, p.description, p.material, p.style, p.manufacturer, p.operatorClass, (p.tags || []).join(' '), (p.features || []).join(' ')].join(' ').toLowerCase().indexOf(ql) >= 0;
      });
      resResults = D.resources.filter(function (r) { return (r.title + ' ' + r.desc).toLowerCase().indexOf(ql) >= 0; });
      mfgResults = D.manufacturers.filter(function (m) { return (m.name + ' ' + m.blurb).toLowerCase().indexOf(ql) >= 0; });
    }
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Search' }]) +
      pageHead('Search', q ? 'Results for “' + q + '”' : 'Search the catalog', '') +
      '<form class="search-inline" data-search-form><input type="search" name="q" value="' + esc(q) + '" placeholder="Search products, brands, resources…" aria-label="Search"><button class="btn btn-gold">Search</button>' + (q ? '<button type="button" class="btn btn-ghost" data-search-clear>Clear</button>' : '') + '</form>' +
      (q ? '<p class="result-count" role="status">' + (results.length + resResults.length + mfgResults.length) + ' result' + (results.length + resResults.length + mfgResults.length === 1 ? '' : 's') + ' found</p>' : '<p class="muted">Search across product names, categories, collections, descriptions, features, materials, manufacturers and resources.</p>') +
      (mfgResults.length ? '<h3 class="subhead">Manufacturers</h3><div class="chips-row">' + mfgResults.map(function (m) { return '<a class="chip active" data-link href="' + href('manufacturers/' + m.slug) + '">' + esc(m.name) + '</a>'; }).join('') + '</div>' : '') +
      (resResults.length ? '<h3 class="subhead">Resources</h3><ul class="res-list">' + resResults.map(function (r) { return '<li><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + '</a><span>' + esc(r.desc) + '</span></li>'; }).join('') + '</ul>' : '') +
      (q && !results.length && !resResults.length && !mfgResults.length ? '<div class="empty"><p>No results for “' + esc(q) + '”. Try a broader term like “gate”, “slide”, “pool” or a brand name.</p><button class="btn btn-outline" data-search-clear>Clear search</button></div>' : '') +
      (results.length ? '<h3 class="subhead">Products</h3>' + grid(results) : '') +
      '</div>';
  }

  function pageAutomation() {
    title('Gate Automation');
    var brands = D.manufacturers.filter(function (m) { return ['BFT', 'PowerMaster', 'RamSet', 'DoorKing', 'OSCO / Linear', 'LiftMaster', 'SEA', 'FAAC', 'Apollo', 'HySecurity', 'Eagle', 'Elite', 'Viking', 'Allstar'].indexOf(m.name) >= 0; });
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Automation' }]) +
      pageHead('Automation', 'Gate openers & operators', 'A large selection of gate openers and operators for residential driveway gates, light or heavy commercial gates, and industrial locations. If you are not sure of the style or size you need, contact us and we will gladly guide you to the correct choice.') +
      '<div class="cat-grid small">' +
      [['sliding-operators', 'Sliding Gate Operators', 'Chain, rack & pinion and cantilever slide operators for residential to industrial gates.'],
       ['swing-operators', 'Swing Gate Operators', 'Arm, articulated, hydraulic and underground swing operators.'],
       ['barrier-gates', 'Barrier Gates', 'Arm barriers, wishbone arms and vehicle barriers for parking and traffic control.'],
       ['overhead-operators', 'Overhead Door Operators', 'Jackshaft, hoist and draw-bar operators for overhead doors.']].map(function (c) {
        return '<a class="cat-card text" data-link href="' + href('products/automation/' + c[0]) + '"><div class="cat-card-body"><h3>' + c[1] + '</h3><p>' + c[2] + '</p><span class="cat-link">Browse →</span></div></a>';
      }).join('') + '</div>' +
      '<section class="section"><div class="section-head"><span class="kicker">Brands</span><h2>Operator manufacturers we carry</h2></div><div class="mfg-grid">' +
      brands.map(function (m) { return '<a class="mfg-card" data-link href="' + href('manufacturers/' + m.slug) + '">' + (m.logo ? img(m.logo, m.name + ' logo', 'mfg-logo') : '<span class="mfg-mono">' + esc(m.name.slice(0, 2).toUpperCase()) + '</span>') + '<h3>' + esc(m.name) + '</h3><p>' + esc(m.blurb) + '</p></a>'; }).join('') + '</div></section>' +
      '<div class="note-band"><p>We also carry replacement main circuit boards for all brands and remote controls for visors or keychains. <a data-link href="' + href('products/accessories/circuit-boards') + '">Circuit boards</a> · <a data-link href="' + href('products/access-control/remote-controls') + '">Remote controls</a></p></div></div>';
  }

  function pageAccessControl() {
    title('Access Control');
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Access Control' }]) +
      pageHead('Access Control', 'Telephone entry, keypads & safety', 'Telephone entry systems from Linear, Select Engineering, American Access Systems and Sentex, for residential and commercial applications — plus remotes, card and proximity readers, keypads, wireless keypads, intercoms, receivers, transmitters, magnetic locks, electric strikes, exit devices, free exit loops, safety loops and photo sensors. Whatever your need is for gate access control, we have the security system.') +
      '<div class="cat-grid small">' +
      [['telephone-entry', 'Telephone Entry', 'Linear AE/RE, Sentex Infinity, Elite, DoorKing and AAS systems.'],
       ['intercom', 'Intercoms', 'GTO wireless intercom and Aiphone JK models.'],
       ['keypads', 'Keypads', 'DoorKing surface and wall mount digital keypads, AAS keyless entry.'],
       ['card-readers', 'Card & Proximity Readers', 'Card, proximity and barcode readers for controlled entries.'],
       ['remote-controls', 'Remote Controls', 'Linear, MultiCode, LiftMaster and Heddolf transmitters.'],
       ['safety-systems', 'Safety Systems', 'EMX loop detectors, safety sensors, photo beams and exit devices.']].map(function (c) {
        return '<a class="cat-card text" data-link href="' + href('products/access-control/' + c[0]) + '"><div class="cat-card-body"><h3>' + c[1] + '</h3><p>' + c[2] + '</p><span class="cat-link">Browse →</span></div></a>';
      }).join('') + '</div></div>';
  }

  function pageManufacturers(slug) {
    if (slug) {
      var m = D.manufacturers.filter(function (x) { return x.slug === slug; })[0];
      if (!m) return pageNotFound();
      title(m.name);
      var prods = S.allProducts().filter(function (p) { return p.manufacturer === m.name; });
      return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Manufacturers', path: 'manufacturers' }, { label: m.name }]) +
        '<div class="mfg-hero">' + (m.logo ? img(m.logo, m.name + ' logo', 'mfg-logo lg') : '') + '<div><h1>' + esc(m.name) + '</h1><p class="lead">' + esc(m.blurb) + '</p><p><a href="' + esc(m.url) + '" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Source catalog page ↗</a></p></div></div>' +
        '<p class="result-count" role="status">' + prods.length + ' product' + (prods.length === 1 ? '' : 's') + ' in this brand</p>' + grid(prods) + '</div>';
    }
    title('Manufacturers');
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Manufacturers' }]) +
      pageHead('Manufacturers', 'Gate opener & access control brands', 'Operator and access-control manufacturers carried, with parts, boards and remotes for the major brands.') +
      '<div class="mfg-grid">' + D.manufacturers.map(function (m) {
        return '<a class="mfg-card" data-link href="' + href('manufacturers/' + m.slug) + '">' + (m.logo ? img(m.logo, m.name + ' logo', 'mfg-logo') : '<span class="mfg-mono">' + esc(m.name.slice(0, 2).toUpperCase()) + '</span>') + '<h3>' + esc(m.name) + '</h3><p>' + esc(m.blurb) + '</p></a>';
      }).join('') + '</div></div>';
  }

  /* ---------- forms ---------- */
  function field(name, label, type, required, opts) {
    opts = opts || {};
    var inner;
    if (type === 'select') inner = '<select id="f-' + name + '" name="' + name + '"' + (required ? ' required' : '') + '>' + '<option value="">Select…</option>' + opts.options.map(function (o) { return '<option' + (opts.value === o ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>';
    else if (type === 'textarea') inner = '<textarea id="f-' + name + '" name="' + name + '" rows="' + (opts.rows || 4) + '"' + (required ? ' required' : '') + ' placeholder="' + esc(opts.placeholder || '') + '">' + esc(opts.value || '') + '</textarea>';
    else inner = '<input id="f-' + name + '" type="' + type + '" name="' + name + '"' + (required ? ' required' : '') + (opts.value ? ' value="' + esc(opts.value) + '"' : '') + (opts.placeholder ? ' placeholder="' + esc(opts.placeholder) + '"' : '') + (opts.min ? ' min="' + opts.min + '"' : '') + '>' ;
    return '<div class="field"><label for="f-' + name + '">' + esc(label) + (required ? ' <span class="req" aria-hidden="true">*</span>' : '') + '</label>' + inner + '</div>';
  }
  function contactFields(v, includeProperty) {
    v = v || {};
    return field('name', 'Full name', 'text', true, { value: v.name }) +
      field('email', 'Email', 'email', true, { value: v.email }) +
      field('phone', 'Phone', 'tel', true, { value: v.phone }) +
      (includeProperty ? field('property', 'Property type', 'select', false, { value: v.property, options: ['Residential', 'Commercial', 'Industrial', 'Gated community'] }) + field('location', 'Property location (city, state)', 'text', false, { value: v.location }) : '');
  }
  function readForm(form) {
    var out = {};
    $all('input, select, textarea', form).forEach(function (el) { if (el.name) out[el.name] = el.value.trim(); });
    return out;
  }
  function validate(data, required) {
    var errors = [];
    required.forEach(function (k) { if (!data[k]) errors.push(k); });
    if (data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errors.push('email-format');
    return errors;
  }

  function pageConsultation() {
    title('Consultation');
    var acc = S.account.get();
    var v = { name: acc && acc.name, email: acc && acc.email };
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Consultation' }]) +
      pageHead('Consultation', 'Request a consultation', 'Help with gates, fences, railings, automation, access control or a custom project. We will review your details and respond with guidance and next steps.') +
      '<form class="form pro" id="consultForm" novalidate>' +
      field('topic', 'What do you need help with?', 'select', true, { options: ['Driveway gates', 'Fences', 'Railings', 'Gate automation / operators', 'Access control', 'Custom project', 'Repairs & parts'] }) +
      contactFields(v, true) +
      field('details', 'Project details', 'textarea', true, { placeholder: 'Opening size, style preferences, current gate/operator if any…', rows: 5 }) +
      '<button class="btn btn-gold" type="submit">Request Consultation</button>' +
      '<p class="form-note">Prefer e-mail? Write to <a href="mailto:' + D.company.email + '">' + D.company.email + '</a> or call ' + D.company.phone + '.</p>' +
      '<div class="form-errors" role="alert" hidden></div></form></div>';
  }

  function pageDeals() {
    title('Deals & Offers');
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Deals & Offers' }]) +
      pageHead('Deals', 'Deals & offers', '') +
      '<div class="deal-card"><h2>Current promotions</h2><p>There are no promotional offers published at this time. Pricing on gates, fences, railings and operators is quoted per project — send us your opening details and we will provide the best available price for your configuration.</p><div class="hero-ctas"><a class="btn btn-gold" data-link href="' + href('quote-cart') + '">Build a Quote Request</a><a class="btn btn-outline" data-link href="' + href('contact') + '">Contact the Office</a></div></div>' +
      '<div class="note-band"><p>Dealers: dealer applications are handled by the office — contact us for the dealer registration process.</p></div></div>';
  }

  function pageResources() {
    title('Resources');
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Resources' }]) +
      pageHead('Resources', 'Technical resources', 'Manuals, color charts and guides — every item below links to a real document or catalog page.') +
      '<ul class="res-list big">' + D.resources.map(function (r) {
        return '<li><span class="res-type">' + esc(r.type) + '</span><div><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + ' ↗</a><span>' + esc(r.desc) + '</span></div></li>';
      }).join('') + '</ul>' +
      '<div class="note-band"><p>Looking for something specific? <a data-link href="' + href('contact') + '">Contact us</a> with your operator model and we will point you to the right document.</p></div></div>';
  }

  function pageTechnical() {
    title('Technical Specifications');
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Technical Specifications' }]) +
      pageHead('Technical', 'Technical specifications', 'Fabrication and material facts behind every product in the catalog.') +
      '<div class="tech-grid">' + D.materials.map(function (m) {
        return '<div class="tech-card"><h3>' + esc(m.name) + '</h3><ul class="tick">' + m.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>';
      }).join('') + '</div>' +
      '<div class="tech-grid">' +
      '<div class="tech-card"><h3>Gate fabrication</h3><ul class="tick"><li>All driveway gates custom made to your opening dimensions</li><li>Installation hardware included with every driveway gate</li><li>Swing or sliding operation — most designs support both</li><li>Oven-baked powder coat finish, many colors</li><li>Matching garden gates, walk gates and fence panels (4 ft–10 ft wide)</li></ul></div>' +
      '<div class="tech-card"><h3>Automation fit</h3><ul class="tick"><li>Operators sized by gate weight, length and daily cycles</li><li>Residential, commercial and industrial duty classes available</li><li>Safety devices (loops, photo beams) recommended with every automatic gate</li><li>Replacement main boards and remotes carried for the major brands</li></ul></div>' +
      '<div class="tech-card"><h3>Sizing questions we ask</h3><ul class="tick"><li>Starting height and finish height</li><li>How many times per day the gate opens and closes</li><li>How you want to open the gate (remote, keypad, phone entry)</li><li>Distance from home to gate</li></ul></div></div>' +
      '<p><a class="btn btn-outline" data-link href="' + href('resources') + '">Open manuals &amp; guides</a></p></div>';
  }

  function pageAbout() {
    title('About');
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'About' }]) +
      pageHead('About', 'L. A. Ornamental & Rack Corp', '') +
      '<div class="split-2 about-grid"><div class="split-media">' + img(D.heroImages.custom, 'Welding and custom ornamental fabrication at the production plant') + '</div>' +
      '<div class="split-copy"><p>' + esc(D.company.experience) + ' Our gates, fences and railings are designed and manufactured to withstand a range of outdoor conditions, and the commitment to quality has earned thousands of satisfied customers.</p>' +
      '<p>Although we offer a wide selection of ornamental and decorative designs, we can design and manufacture any style in aluminum or wrought iron. We also offer fences, garden and walk-through gates to match your driveway gates.</p>' +
      '<h3>Why aluminum?</h3><p>Aluminum is about one-third the density of steel, is malleable and easily worked, and its protective oxide layer gives excellent corrosion resistance — the oxide does not flake the way rust does on steel. Modern techniques make aluminum look like wrought iron with the benefit of being maintenance free, and it can be recycled using only about 5% of the energy needed to produce it.</p>' +
      '<h3>Visit or contact the plant</h3><p>' + esc(D.company.legalName) + '<br>' + esc(D.company.address) + '<br>Office ' + D.company.phone + ' · Fax ' + D.company.fax + '<br><a href="mailto:' + D.company.email + '">' + D.company.email + '</a></p></div></div></div>';
  }

  function pageContact() {
    title('Contact');
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Contact' }]) +
      pageHead('Contact', 'Contact us', 'For your gates, fences, automation and access-control needs.') +
      '<div class="contact-grid"><div class="contact-card"><h3>Office & plant</h3><p><strong>' + esc(D.company.legalName) + '</strong><br>' + esc(D.company.street) + '<br>' + esc(D.company.city) + ', ' + esc(D.company.state) + ' ' + esc(D.company.zip) + '</p><p>Office: <a href="tel:3056960419">' + D.company.phone + '</a><br>Fax: ' + D.company.fax + '</p><p>E-mail: <a href="mailto:' + D.company.email + '">' + D.company.email + '</a></p></div>' +
      '<div class="contact-card"><h3>Request a quote by e-mail</h3><p>For a quote, send an e-mail to <a href="mailto:' + D.company.email + '">' + D.company.email + '</a> with:</p><ul class="tick"><li>Model of gate you would like</li><li>Color</li><li>Starting height and finish height</li><li>How many times the gate opens and closes daily</li><li>How you would like to open the gate</li><li>Distance from your home to the gate</li></ul></div>' +
      '<div class="contact-card"><h3>Prefer a form?</h3><p>Use the quote request flow to assemble products and details — a request ID is generated for your records.</p><p><a class="btn btn-gold" data-link href="' + href('quote-cart') + '">Start a Quote Request</a> <a class="btn btn-outline" data-link href="' + href('consultation') + '">Request a Consultation</a></p></div></div></div>';
  }

  function pageFAQ() {
    title('FAQ');
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'FAQ' }]) +
      pageHead('FAQ', 'Frequently asked questions', '') +
      '<div class="faq-list">' + D.faqs.map(function (f, i) {
        return '<details class="faq-item" id="faq-' + i + '"><summary>' + esc(f.q) + '</summary><p>' + esc(f.a) + '</p></details>';
      }).join('') + '</div></div>';
  }

  function pagePolicies() {
    title('Our Policies');
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Our Policies' }]) +
      pageHead('Policies', 'Our policies', '') +
      '<div class="policy-list">' + D.policies.map(function (p) { return '<section class="policy"><h3>' + esc(p.title) + '</h3><p>' + esc(p.body) + '</p></section>'; }).join('') + '</div></div>';
  }

  function pageScissor() { return pageProducts('scissor-gates', null, {}); }

  /* ---------- cart ---------- */
  function pageCart() {
    title('Cart');
    var items = S.Cart.items();
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Cart' }]) +
      pageHead('Cart', 'Your cart', '') +
      (items.length === 0
        ? '<div class="empty"><p>Your cart is empty. Products marked “Add to Cart” (accessories and remotes) can be ordered directly — everything else is quoted.</p><a class="btn btn-gold" data-link href="' + href('products') + '">Continue Shopping</a><a class="btn btn-outline" data-link href="' + href('quote-cart') + '">Go to Quote List (' + S.QuoteCart.count() + ')</a></div>'
        : '<div class="cart-layout"><div class="cart-lines">' + items.map(function (it) {
          return '<div class="cart-line"><div class="cart-line-media">' + img(it.product.image, it.product.name) + '</div>' +
            '<div class="cart-line-info"><h3><a data-link href="' + href('product/' + it.product.id) + '">' + esc(it.product.name) + '</a></h3><span class="muted">' + esc(it.product.collection || '') + '</span><span class="price-tag">Request a Quote</span></div>' +
            '<div class="qty" role="group" aria-label="Quantity for ' + esc(it.product.name) + '"><button data-dec="' + it.product.id + '" aria-label="Decrease quantity">−</button><input type="number" min="1" max="99" value="' + it.qty + '" data-qty="' + it.product.id + '" aria-label="Quantity"><button data-inc="' + it.product.id + '" aria-label="Increase quantity">+</button></div>' +
            '<button class="btn btn-ghost" data-remove="' + it.product.id + '">Remove</button></div>';
        }).join('') + '</div>' +
        '<aside class="cart-summary"><h3>Summary</h3><div class="sum-row"><span>Items</span><span>' + S.Cart.count() + '</span></div><div class="sum-row"><span>Pricing</span><span>Quoted per project</span></div><p class="muted">These items will be confirmed with pricing during the request process. No payment is collected on this website.</p><a class="btn btn-gold btn-block" data-link href="' + href('checkout') + '">Proceed to Request</a><a class="btn btn-outline btn-block" data-link href="' + href('products') + '">Continue Shopping</a></aside></div>') + '</div>';
  }

  var checkoutState = { step: 1, data: {} };
  function pageCheckout(query) {
    title('Checkout');
    var items = S.Cart.items();
    if (!items.length && checkoutState.step < 5) return '<div class="wrap page"><div class="empty"><p>Your cart is empty.</p><a class="btn btn-gold" data-link href="' + href('products') + '">Continue Shopping</a></div></div>';
    var step = checkoutState.step;
    var steps = ['Cart', 'Your Information', 'Project / Delivery', 'Review', 'Confirmed'];
    var d = checkoutState.data;
    var acc = S.account.get() || {};
    var body = '';
    if (step === 1) {
      body = '<div class="cart-lines">' + items.map(function (it) { return '<div class="cart-line"><div class="cart-line-media">' + img(it.product.image, it.product.name) + '</div><div class="cart-line-info"><h3>' + esc(it.product.name) + '</h3><span class="muted">Qty ' + it.qty + '</span></div></div>'; }).join('') + '</div><div class="wizard-nav"><span></span><button class="btn btn-gold" data-checkout-next>Continue to Your Information</button></div>';
    } else if (step === 2) {
      body = '<form class="form" id="checkoutContact" novalidate>' + contactFields({ name: d.name || acc.name, email: d.email || acc.email, phone: d.phone || acc.phone }, true) +
        '<div class="wizard-nav"><button type="button" class="btn btn-ghost" data-checkout-back>Back</button><button class="btn btn-gold" type="submit">Continue to Project Details</button></div><div class="form-errors" role="alert" hidden></div></form>';
    } else if (step === 3) {
      body = '<form class="form" id="checkoutProject" novalidate>' +
        field('dimensions', 'Opening dimensions (width × height)', 'text', true, { value: d.dimensions, placeholder: 'e.g. 16 ft × 6 ft' }) +
        field('materialPref', 'Material preference', 'select', false, { value: d.materialPref, options: ['Aluminum', 'Wrought iron / steel', 'Either — advise me'] }) +
        field('finish', 'Finish / color', 'text', false, { value: d.finish, placeholder: 'From the powder-coat color chart' }) +
        field('automationNeed', 'Automation', 'select', false, { value: d.automationNeed, options: ['None — manual', 'Swing operator', 'Slide operator', 'Barrier', 'Advise me'] }) +
        field('delivery', 'Delivery / installation notes', 'textarea', false, { value: d.delivery, rows: 3 }) +
        '<div class="wizard-nav"><button type="button" class="btn btn-ghost" data-checkout-back>Back</button><button class="btn btn-gold" type="submit">Review Request</button></div><div class="form-errors" role="alert" hidden></div></form>';
    } else if (step === 4) {
      body = '<div class="review-card"><h3>Items</h3>' + items.map(function (it) { return '<div class="sum-row"><span>' + esc(it.product.name) + ' × ' + it.qty + '</span></div>'; }).join('') +
        '<h3>Contact</h3><div class="sum-row"><span>' + esc(d.name) + '</span><span>' + esc(d.email) + '</span></div><div class="sum-row"><span>' + esc(d.phone) + '</span><span>' + esc((d.property || '') + (d.location ? ' — ' + d.location : '')) + '</span></div>' +
        '<h3>Project</h3><div class="sum-row"><span>Dimensions: ' + esc(d.dimensions) + '</span><span>' + esc(d.materialPref || 'No preference') + '</span></div><div class="sum-row"><span>Finish: ' + esc(d.finish || 'TBD') + '</span><span>Automation: ' + esc(d.automationNeed || 'TBD') + '</span></div>' +
        (d.delivery ? '<p class="muted">' + esc(d.delivery) + '</p>' : '') + '</div>' +
        '<div class="wizard-nav"><button type="button" class="btn btn-ghost" data-checkout-back>Back</button><button class="btn btn-gold" data-checkout-submit>Submit Request</button></div>';
    } else {
      var req = S.requests.get(query.id || checkoutState.lastId);
      body = confirmationBlock(req, 'order');
    }
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Checkout' }]) +
      pageHead('Checkout', 'Request & checkout', 'Frontend-only request flow — your request is saved locally and confirmed with a reference ID.') +
      '<ol class="stepper" aria-label="Checkout progress">' + steps.map(function (s, i) { return '<li class="' + (i + 1 < step ? 'done' : i + 1 === step ? 'current' : '') + '" aria-current="' + (i + 1 === step ? 'step' : 'false') + '">' + s + '</li>'; }).join('') + '</ol>' + body + '</div>';
  }

  function confirmationBlock(req, kind) {
    if (!req) return '<div class="empty"><p>Confirmation not found.</p></div>';
    return '<div class="confirm-card"><div class="confirm-seal">✓</div><h2>Request received</h2>' +
      '<p class="confirm-id">Reference: <strong>' + esc(req.id) + '</strong></p>' +
      '<p>Thank you' + (req.data && req.data.name ? ', ' + esc(req.data.name.split(' ')[0]) : '') + '. Your ' + (kind === 'quote' ? 'quote request' : kind === 'order' ? 'order request' : kind === 'custom' ? 'custom project request' : 'consultation request') + ' has been recorded. ' + esc(D.company.legalName) + ' will use the details you provided to prepare your ' + (kind === 'consultation' ? 'consultation' : 'quote') + '. You can also reach the office at <a href="tel:3056960419">' + D.company.phone + '</a> or <a href="mailto:' + D.company.email + '">' + D.company.email + '</a> and reference this ID.</p>' +
      (req.items && req.items.length ? '<h3>Requested items</h3><ul class="tick">' + req.items.map(function (it) { return '<li>' + esc(it.name) + (it.qty ? ' × ' + it.qty : '') + '</li>'; }).join('') + '</ul>' : '') +
      (req.summary ? '<h3>Summary</h3><div class="review-card">' + req.summary.map(function (r) { return '<div class="sum-row"><span>' + esc(r[0]) + '</span><span>' + esc(r[1] || '') + '</span></div>'; }).join('') + '</div>' : '') +
      '<div class="hero-ctas"><a class="btn btn-gold" data-link href="' + href('') + '">Back to Home</a><a class="btn btn-outline" data-link href="' + href('account') + '">View in My Account</a></div></div>';
  }

  function pageConfirmation(id) {
    title('Confirmation');
    var req = S.requests.get(id);
    var kind = req ? req.type : 'order';
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Confirmation' }]) + confirmationBlock(req, kind) + '</div>';
  }

  /* ---------- quote flow ---------- */
  function pageQuoteCart() {
    title('Quote Request List');
    var items = S.QuoteCart.items();
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Quote List' }]) +
      pageHead('Quote List', 'Your quote request list', 'Custom products are quoted per project. Add items here, then submit one quote request covering everything.') +
      (items.length === 0
        ? '<div class="empty"><p>Your quote list is empty. Browse the catalog and press “Quote” on any product to add it.</p><a class="btn btn-gold" data-link href="' + href('products') + '">Browse Products</a></div>'
        : '<div class="cart-layout"><div class="cart-lines">' + items.map(function (p) {
          return '<div class="cart-line"><div class="cart-line-media">' + img(p.image, p.name) + '</div><div class="cart-line-info"><h3><a data-link href="' + href('product/' + p.id) + '">' + esc(p.name) + '</a></h3><span class="muted">' + esc(p.collection || '') + (p.manufacturer ? ' · ' + esc(p.manufacturer) : '') + '</span></div><button class="btn btn-ghost" data-qremove="' + p.id + '">Remove</button></div>';
        }).join('') + '</div>' +
        '<aside class="cart-summary"><h3>' + items.length + ' item' + (items.length === 1 ? '' : 's') + ' selected</h3><p class="muted">Submit your details once — we will quote all selected items together.</p><a class="btn btn-gold btn-block" data-link href="' + href('quote') + '">Continue to Quote Form</a><a class="btn btn-outline btn-block" data-link href="' + href('products') + '">Keep Browsing</a></aside></div>') + '</div>';
  }

  function pageQuote() {
    title('Request a Quote');
    var items = S.QuoteCart.items();
    if (!items.length) return '<div class="wrap page narrow"><div class="empty"><p>Your quote list is empty. Add products first.</p><a class="btn btn-gold" data-link href="' + href('products') + '">Browse Products</a></div></div>';
    var acc = S.account.get() || {};
    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Quote List', path: 'quote-cart' }, { label: 'Quote Form' }]) +
      pageHead('Quote', 'Request a quote', items.length + ' item' + (items.length === 1 ? '' : 's') + ': ' + items.map(function (p) { return p.name; }).join('; ')) +
      '<form class="form pro" id="quoteForm" novalidate>' +
      contactFields({ name: acc.name, email: acc.email }, true) +
      field('model', 'Model(s) of interest (besides the list above)', 'text', false, { placeholder: 'e.g. Golden Orchid, Candy Cane fence…' }) +
      field('color', 'Preferred color', 'text', false, { placeholder: 'From the powder-coat color chart' }) +
      '<div class="field-row">' + field('heightStart', 'Starting height', 'text', false, { placeholder: 'e.g. 4 ft' }) + field('heightFinish', 'Finish height', 'text', false, { placeholder: 'e.g. 6 ft' }) + '</div>' +
      '<div class="field-row">' + field('cycles', 'Open/close cycles per day', 'select', false, { options: ['1–5', '5–20', '20–100', '100+'] }) + field('openMethod', 'How should the gate open?', 'select', false, { options: ['Manual', 'Remote control', 'Keypad', 'Telephone entry', 'Card reader', 'Advise me'] }) + '</div>' +
      field('distance', 'Distance from home to gate', 'text', false, { placeholder: 'Approximate distance' }) +
      field('budget', 'Budget range', 'select', false, { options: ['Under $3,000', '$3,000–$7,500', '$7,500–$15,000', '$15,000+', 'Prefer not to say'] }) +
      field('details', 'Project details', 'textarea', false, { rows: 4, placeholder: 'Opening width, style preferences, site conditions…' }) +
      '<button class="btn btn-gold" type="submit">Submit Quote Request</button><div class="form-errors" role="alert" hidden></div></form></div>';
  }

  /* ---------- custom project wizard ---------- */
  var CUSTOM_STEPS = ['Project Type', 'Material', 'Style', 'Dimensions', 'Finish', 'Automation', 'Access Control', 'Budget', 'Details', 'Contact', 'Review', 'Confirmation'];
  function getDraft() { return S.read('customDraft', null) || {}; }
  function setDraft(d) { S.write('customDraft', d); }
  function pageCustomProject() {
    title('Custom Projects');
    var d = getDraft();
    var step = Math.min(Math.max(parseInt(d.step || '1', 10), 1), 12);
    var stepTitle = CUSTOM_STEPS[step - 1];
    function radioSet(name, opts, current) {
      return '<div class="radio-grid">' + opts.map(function (o) {
        return '<label class="radio-card' + (current === o ? ' checked' : '') + '"><input type="radio" name="' + name + '" value="' + esc(o) + '"' + (current === o ? ' checked' : '') + '><span>' + esc(o) + '</span></label>';
      }).join('') + '</div>';
    }
    var body = '';
    if (step === 1) body = radioSet('ptype', ['Driveway gate', 'Garden / walk gate', 'Fence', 'Railing', 'Scissor gate', 'Automation retrofit', 'Full property package'], d.ptype);
    else if (step === 2) body = radioSet('material', ['Aluminum', 'Wrought iron / steel', 'Mixed / advise me'], d.material) + '<div class="tech-grid">' + D.materials.slice(0, 2).map(function (m) { return '<div class="tech-card"><h3>' + esc(m.name) + '</h3><ul class="tick">' + m.points.slice(0, 3).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>'; }).join('') + '</div>';
    else if (step === 3) body = radioSet('style', ['Decorative / ornamental', 'Modern', 'Classic', 'Security', 'Privacy', 'Simple picket'], d.style);
    else if (step === 4) body = '<div class="form">' + field('width', 'Opening width', 'text', false, { value: d.width, placeholder: 'e.g. 16 ft' }) + field('height', 'Height', 'text', false, { value: d.height, placeholder: 'e.g. 6 ft' }) + field('lengthFence', 'Total fence/railing length (if applicable)', 'text', false, { value: d.lengthFence, placeholder: 'e.g. 120 linear ft' }) + '</div>';
    else if (step === 5) body = radioSet('finish', ['Oven-baked powder coat (standard)', 'Two-tone with accent', 'Match existing — send sample', 'Advise me'], d.finish) + '<p class="muted">Colors from the powder-coat color chart. Privacy backing (aluminum, steel, Plexiglas, plastic) available in many colors.</p>';
    else if (step === 6) body = radioSet('automation', ['None — manual', 'Swing operator', 'Sliding operator', 'Barrier arm', 'Not sure — advise me'], d.automation);
    else if (step === 7) body = radioSet('access', ['None', 'Remote controls', 'Keypad', 'Telephone entry', 'Card / proximity reader', 'Intercom', 'Not sure — advise me'], d.access);
    else if (step === 8) body = radioSet('budget', ['Under $3,000', '$3,000–$7,500', '$7,500–$15,000', '$15,000+', 'Prefer not to say'], d.budget);
    else if (step === 9) body = '<div class="form">' + field('notes', 'Project details', 'textarea', false, { value: d.notes, rows: 6, placeholder: 'Site conditions, style references, photos you can share, timeline…' }) + '</div>';
    else if (step === 10) {
      var acc = S.account.get() || {};
      body = '<div class="form">' + contactFields({ name: d.name || acc.name, email: d.email || acc.email, phone: d.phone || acc.phone }, true).replace(/value=""/g, function () { return 'value=""'; }) + '</div>';
    } else if (step === 11) {
      var rows = [['Project type', d.ptype], ['Material', d.material], ['Style', d.style], ['Opening', [d.width, d.height].filter(Boolean).join(' × ') || '—'], ['Fence length', d.lengthFence || '—'], ['Finish', d.finish], ['Automation', d.automation], ['Access control', d.access], ['Budget', d.budget], ['Details', d.notes], ['Contact', [d.name, d.email, d.phone].filter(Boolean).join(' · ')]];
      body = '<div class="review-card">' + rows.map(function (r) { return '<div class="sum-row"><span>' + esc(r[0]) + '</span><span>' + esc(r[1] || '—') + '</span></div>'; }).join('') + '</div>';
    } else {
      body = confirmationBlock(S.requests.get(d.confirmedId), 'custom');
    }

    return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Custom Projects' }]) +
      pageHead('Custom Projects', 'Custom project builder', 'Configure your custom gate, fence, railing or automation project step by step. Your progress is saved on this device.') +
      '<ol class="stepper" aria-label="Project steps">' + CUSTOM_STEPS.map(function (s, i) { return '<li class="' + (i + 1 < step ? 'done' : i + 1 === step ? 'current' : '') + '">' + s + '</li>'; }).join('') + '</ol>' +
      '<h2 class="step-title">' + esc(stepTitle) + '</h2>' + body +
      (step < 12 ? '<div class="wizard-nav">' + (step > 1 ? '<button class="btn btn-ghost" data-custom-back>Back</button>' : '<span></span>') + '<button class="btn btn-gold" data-custom-next>' + (step === 11 ? 'Submit Project Request' : 'Continue') + '</button></div>' : '<div class="wizard-nav"><span></span><button class="btn btn-outline" data-custom-reset>Start a New Project</button></div>') +
      '</div>';
  }

  /* ---------- account ---------- */
  function pageAccount() {
    title('My Account');
    var acc = S.account.get();
    if (!acc || !acc.signedIn) {
      return '<div class="wrap page narrow">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Account' }]) +
        pageHead('Account', 'Sign in', 'Demo account stored on this device only — no real authentication.') +
        '<form class="form pro" id="signinForm" novalidate>' + field('name', 'Name', 'text', true) + field('email', 'Email', 'email', true) +
        '<button class="btn btn-gold" type="submit">Sign In</button><div class="form-errors" role="alert" hidden></div></form></div>';
    }
    var reqs = S.requests.all();
    var savedIds = S.saved.ids();
    return '<div class="wrap page">' + breadcrumbs([{ label: 'Home', path: '' }, { label: 'Account' }]) +
      pageHead('Account', 'Welcome, ' + (acc.name || ''), '') +
      '<div class="account-grid"><section class="acct-panel"><h3>Profile</h3><p>' + esc(acc.name || '') + '<br>' + esc(acc.email || '') + '</p><p class="muted">Signed in since ' + (acc.since ? new Date(acc.since).toLocaleDateString() : '—') + '</p><div class="hero-ctas"><button class="btn btn-outline" data-signout>Sign Out</button><button class="btn btn-ghost" data-acct-clear>Delete Profile</button></div></section>' +
      '<section class="acct-panel"><h3>Saved products (' + savedIds.length + ')</h3>' + (savedIds.length ? grid(savedIds.map(S.product).filter(Boolean)) : '<p class="muted">No saved products yet — press ♡ on any product card.</p>') + '</section>' +
      '<section class="acct-panel wide"><h3>Request history (' + reqs.length + ')</h3>' + (reqs.length ? '<table class="spec-table req-table"><thead><tr><th scope="col">Reference</th><th scope="col">Type</th><th scope="col">Date</th><th scope="col">Items</th><th scope="col"></th></tr></thead><tbody>' + reqs.map(function (r) {
        return '<tr><td><a data-link href="' + href('confirmation/' + r.id) + '">' + esc(r.id) + '</a></td><td>' + esc(r.type) + '</td><td>' + new Date(r.date).toLocaleDateString() + '</td><td>' + (r.items ? r.items.length : (r.summary ? r.summary.length + ' fields' : '—')) + '</td><td><button class="btn btn-ghost btn-sm" data-reqdel="' + r.id + '">Delete</button></td></tr>';
      }).join('') + '</tbody></table>' : '<p class="muted">No requests yet. Quote requests, orders, consultations and custom projects appear here.</p>') + '</section>' +
      '<section class="acct-panel"><h3>Carts</h3><div class="sum-row"><span>Shopping cart</span><span>' + S.Cart.count() + ' items</span></div><div class="sum-row"><span>Quote list</span><span>' + S.QuoteCart.count() + ' items</span></div><a class="btn btn-outline btn-block" data-link href="' + href('custom-projects') + '">Continue Custom Project</a></section></div></div>';
  }

  function pageNotFound() {
    title('Page not found');
    return '<div class="wrap page narrow"><div class="empty"><h1>Page not found</h1><p>The page you are looking for does not exist.</p><a class="btn btn-gold" data-link href="' + href('') + '">Back to Home</a></div></div>';
  }

  /* ============================ route table ============================ */
  function render() {
    var r = parsePath();
    var seg = r.segments, q = r.query;
    var html;
    var s0 = seg[0] || '';
    if (s0 === '') html = pageHome();
    else if (s0 === 'products' && !seg[1]) html = pageProducts(null, null, q);
    else if (s0 === 'products' && seg[1]) html = pageProducts(seg[1], seg[2] || null, q);
    else if (s0 === 'product' && seg[1]) html = pageProduct(seg[1]);
    else if (s0 === 'search') html = pageSearch(q);
    else if (s0 === 'automation') html = pageAutomation();
    else if (s0 === 'access-control') html = pageAccessControl();
    else if (s0 === 'accessories') html = pageProducts('accessories', null, q);
    else if (s0 === 'scissor-gates') html = pageScissor();
    else if (s0 === 'custom-projects') html = pageCustomProject();
    else if (s0 === 'consultation') html = pageConsultation();
    else if (s0 === 'deals') html = pageDeals();
    else if (s0 === 'resources') html = pageResources();
    else if (s0 === 'technical') html = pageTechnical();
    else if (s0 === 'manufacturers') html = pageManufacturers(seg[1]);
    else if (s0 === 'about') html = pageAbout();
    else if (s0 === 'contact') html = pageContact();
    else if (s0 === 'faq') html = pageFAQ();
    else if (s0 === 'policies') html = pagePolicies();
    else if (s0 === 'account') html = pageAccount();
    else if (s0 === 'cart') html = pageCart();
    else if (s0 === 'checkout') html = pageCheckout(q);
    else if (s0 === 'quote-cart') html = pageQuoteCart();
    else if (s0 === 'quote') html = pageQuote();
    else if (s0 === 'confirmation' && seg[1]) html = pageConfirmation(seg[1]);
    else html = pageNotFound();

    root.innerHTML = headerHTML() + '<main id="main">' + html + '</main>' + footerHTML() + searchOverlay() + '<div class="toast-region" id="toastRegion" aria-live="polite"></div>';
    bindShell();
    bindPage(s0);
    if (window.scrollY > 0 || seg[0]) window.scrollTo(0, 0);
  }

  /* ============================ interactions ============================ */
  function bindShell() {
    /* dropdowns */
    $all('.nav-item.has-drop').forEach(function (item) {
      var btn = $('.nav-btn', item);
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = item.classList.contains('open');
        $all('.nav-item.has-drop.open').forEach(function (x) { x.classList.remove('open'); $('.nav-btn', x).setAttribute('aria-expanded', 'false'); });
        if (!open) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
      });
    });

    /* mobile menu */
    var burger = $('[data-burger]'), menu = $('#mobileMenu');
    if (burger && menu) {
      burger.addEventListener('click', function () {
        var hidden = menu.hidden;
        menu.hidden = !hidden;
        burger.setAttribute('aria-expanded', String(hidden));
        burger.textContent = hidden ? '✕' : '☰';
      });
      menu.addEventListener('click', function (e) {
        if (e.target.closest('a[data-link]')) { menu.hidden = true; burger.setAttribute('aria-expanded', 'false'); burger.textContent = '☰'; }
        if (e.target.closest('[data-mquote]')) { menu.hidden = true; go('quote-cart'); }
      });
    }
    /* search overlay */
    var overlay = $('#searchOverlay');
    function openSearch() { if (!overlay) return; overlay.hidden = false; $('#searchInput').focus(); }
    window.__openSearch = openSearch;
    function closeSearch() { if (overlay) overlay.hidden = true; }
    window.__closeSearch = closeSearch;
    $('[data-search-open]').addEventListener('click', openSearch);
    $('[data-search-close]').addEventListener('click', closeSearch);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    $('#searchForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var v = $('#searchInput').value.trim();
      closeSearch();
      go('search?q=' + encodeURIComponent(v));
    });
    $all('[data-q]').forEach(function (b) { b.addEventListener('click', function () { closeSearch(); go('search?q=' + encodeURIComponent(b.getAttribute('data-q'))); }); });
  }

  function bindPage(s0) {
    /* product card actions (delegated would also work; direct is fine here) */
    $all('[data-save]').forEach(function (b) {
      b.addEventListener('click', function () {
        var added = S.saved.toggle(b.getAttribute('data-save'));
        S.toast(added ? 'Saved to your account' : 'Removed from saved', 'ok');
        render();
      });
    });
    $all('[data-quote]').forEach(function (b) {
      b.addEventListener('click', function () {
        var added = S.QuoteCart.toggle(b.getAttribute('data-quote'));
        S.toast(added ? 'Added to quote list' : 'Removed from quote list', 'ok');
        render();
      });
    });
    $all('[data-quotego]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-quotego');
        if (!S.QuoteCart.has(id)) S.QuoteCart.toggle(id);
        go('quote-cart');
      });
    });
    $all('[data-add]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.Cart.add(b.getAttribute('data-add'), 1);
        S.toast('Added to cart', 'ok');
        updateCounts();
      });
    });
    $all('[data-inc]').forEach(function (b) { b.addEventListener('click', function () { var id = b.getAttribute('data-inc'); var it = S.Cart.items().filter(function (x) { return x.product.id === id; })[0]; S.Cart.setQty(id, (it ? it.qty : 0) + 1); render(); }); });
    $all('[data-dec]').forEach(function (b) { b.addEventListener('click', function () { var id = b.getAttribute('data-dec'); var it = S.Cart.items().filter(function (x) { return x.product.id === id; })[0]; S.Cart.setQty(id, (it ? it.qty : 2) - 1); render(); }); });
    $all('[data-qty]').forEach(function (inp) {
      inp.addEventListener('change', function () {
        var v = parseInt(inp.value, 10);
        if (isNaN(v) || v < 1) v = 1;
        S.Cart.setQty(inp.getAttribute('data-qty'), v);
        render();
      });
    });
    $all('[data-remove]').forEach(function (b) { b.addEventListener('click', function () { S.Cart.remove(b.getAttribute('data-remove')); S.toast('Removed from cart'); render(); }); });
    $all('[data-qremove]').forEach(function (b) { b.addEventListener('click', function () { S.QuoteCart.remove(b.getAttribute('data-qremove')); render(); }); });

    /* filters */
    $all('[data-filter]').forEach(function (sel) {
      sel.addEventListener('change', function () {
        var route = currentRoute();
        route.query[sel.getAttribute('data-filter') === 'manufacturer' ? 'mfg' : sel.getAttribute('data-filter') === 'class' ? 'cls' : sel.getAttribute('data-filter')] = sel.value;
        go(route.path + '?' + qs(route.query));
      });
    });
    var sortSel = $('[data-sort]');
    if (sortSel) sortSel.addEventListener('change', function () { var route = currentRoute(); route.query.sort = sortSel.value; go(route.path + '?' + qs(route.query)); });
    var textF = $('[data-filter-text]');
    if (textF) textF.addEventListener('input', debounce(function () { var route = currentRoute(); route.query.q = textF.value; go(route.path + '?' + qs(route.query)); }, 350));
    var clearF = $('[data-clear-filters]');
    if (clearF) clearF.addEventListener('click', function () { go(currentRoute().path); });

    /* gallery thumbs */
    $all('[data-thumb]').forEach(function (b) {
      b.addEventListener('click', function () {
        var main = $('.pdp-main img');
        if (main) { main.src = b.getAttribute('data-thumb'); }
        $all('[data-thumb]').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
      });
    });

    /* search inline */
    var sf = $('[data-search-form]');
    if (sf) {
      sf.addEventListener('submit', function (e) { e.preventDefault(); var v = $('input', sf).value.trim(); go('search?q=' + encodeURIComponent(v)); });
      var clr = $('[data-search-clear]');
      if (clr) clr.addEventListener('click', function () { go('search'); });
    }

    /* consultation form */
    var cf = $('#consultForm');
    if (cf) cf.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = readForm(cf);
      var errs = validate(data, ['topic', 'name', 'email', 'phone', 'details']);
      if (showErrors(cf, errs)) return;
      var req = S.requests.add({ id: S.uid('C'), type: 'consultation', date: new Date().toISOString(), data: data, summary: [['Topic', data.topic], ['Name', data.name], ['Email', data.email], ['Phone', data.phone], ['Property', data.property], ['Location', data.location], ['Details', data.details]] });
      S.toast('Consultation request saved');
      go('confirmation/' + req.id);
    });

    /* quote form */
    var qf = $('#quoteForm');
    if (qf) qf.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = readForm(qf);
      var errs = validate(data, ['name', 'email', 'phone']);
      if (showErrors(qf, errs)) return;
      var req = S.requests.add({ id: S.uid('Q'), type: 'quote', date: new Date().toISOString(), data: data, items: S.QuoteCart.items().map(function (p) { return { id: p.id, name: p.name }; }), summary: [['Color', data.color], ['Height', [data.heightStart, data.heightFinish].filter(Boolean).join(' → ')], ['Cycles/day', data.cycles], ['Opening method', data.openMethod], ['Budget', data.budget], ['Details', data.details]] });
      S.QuoteCart.clear();
      S.toast('Quote request saved');
      go('confirmation/' + req.id);
    });

    /* signin */
    var si = $('#signinForm');
    if (si) si.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = readForm(si);
      var errs = validate(data, ['name', 'email']);
      if (showErrors(si, errs)) return;
      S.account.signIn(data.name, data.email);
      S.toast('Signed in (demo)');
      render();
    });
    var so = $('[data-signout]');
    if (so) so.addEventListener('click', function () { S.account.signOut(); S.toast('Signed out'); render(); });
    var acDel = $('[data-acct-clear]');
    if (acDel) acDel.addEventListener('click', function () { S.account.clear(); render(); });
    $all('[data-reqdel]').forEach(function (b) { b.addEventListener('click', function () { S.requests.remove(b.getAttribute('data-reqdel')); render(); }); });

    /* checkout */
    if (s0 === 'checkout') {
      var next = $('[data-checkout-next]');
      if (next) next.addEventListener('click', function () { checkoutState.step = 2; render(); });
      $all('[data-checkout-back]').forEach(function (b) { b.addEventListener('click', function () { checkoutState.step = Math.max(1, checkoutState.step - 1); render(); }); });
      var ccf = $('#checkoutContact');
      if (ccf) ccf.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = readForm(ccf);
        var errs = validate(data, ['name', 'email', 'phone']);
        if (showErrors(ccf, errs)) return;
        Object.assign(checkoutState.data, data);
        checkoutState.step = 3; render();
      });
      var cpf = $('#checkoutProject');
      if (cpf) cpf.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = readForm(cpf);
        var errs = validate(data, ['dimensions']);
        if (showErrors(cpf, errs)) return;
        Object.assign(checkoutState.data, data);
        checkoutState.step = 4; render();
      });
      var submit = $('[data-checkout-submit]');
      if (submit) submit.addEventListener('click', function () {
        var req = S.requests.add({ id: S.uid('O'), type: 'order', date: new Date().toISOString(), data: checkoutState.data, items: S.Cart.items().map(function (it) { return { id: it.product.id, name: it.product.name, qty: it.qty }; }), summary: [['Dimensions', checkoutState.data.dimensions], ['Material', checkoutState.data.materialPref], ['Finish', checkoutState.data.finish], ['Automation', checkoutState.data.automationNeed]] });
        S.Cart.clear();
        checkoutState.step = 5; checkoutState.lastId = req.id;
        S.toast('Order request saved');
        render();
      });
    }

    /* custom project wizard */
    var cn = $('[data-custom-next]'), cb = $('[data-custom-back]'), cr = $('[data-custom-reset]');
    if (cn) cn.addEventListener('click', function () {
      var d = getDraft();
      var step = parseInt(d.step || '1', 10);
      collectCustomStep(d, step);
      if (step === 1 && !d.ptype) { S.toast('Choose a project type', 'err'); return; }
      if (step === 2 && !d.material) { S.toast('Choose a material', 'err'); return; }
      if (step === 3 && !d.style) { S.toast('Choose a style', 'err'); return; }
      if (step === 10) {
        var errs = validate(d, ['name', 'email', 'phone']);
        if (errs.length) { S.toast('Please complete name, email and phone', 'err'); return; }
      }
      if (step === 11) {
        var req = S.requests.add({ id: S.uid('P'), type: 'custom-project', date: new Date().toISOString(), data: d, summary: [['Project type', d.ptype], ['Material', d.material], ['Style', d.style], ['Opening', [d.width, d.height].filter(Boolean).join(' × ')], ['Finish', d.finish], ['Automation', d.automation], ['Access', d.access], ['Budget', d.budget], ['Details', d.notes]] });
        d.step = '12'; d.confirmedId = req.id; setDraft(d);
        S.toast('Custom project request saved');
        render(); return;
      }
      d.step = String(step + 1); setDraft(d); render();
    });
    if (cb) cb.addEventListener('click', function () { var d = getDraft(); collectCustomStep(d, parseInt(d.step || '1', 10)); d.step = String(Math.max(1, parseInt(d.step || '1', 10) - 1)); setDraft(d); render(); });
    if (cr) cr.addEventListener('click', function () { S.write('customDraft', {}); render(); });
  }

  function collectCustomStep(d, step) {
    if (step >= 1 && step <= 3) {
      var radio = $('input[type="radio"]:checked');
      if (radio) d[radio.name] = radio.value;
    }
    if (step === 4) { d.width = val('#f-width'); d.height = val('#f-height'); d.lengthFence = val('#f-lengthFence'); }
    if (step === 5) { var r5 = $('input[name="finish"]:checked'); if (r5) d.finish = r5.value; }
    if (step === 6) { var r6 = $('input[name="automation"]:checked'); if (r6) d.automation = r6.value; }
    if (step === 7) { var r7 = $('input[name="access"]:checked'); if (r7) d.access = r7.value; }
    if (step === 8) { var r8 = $('input[name="budget"]:checked'); if (r8) d.budget = r8.value; }
    if (step === 9) d.notes = val('#f-notes');
    if (step === 10) { d.name = val('#f-name'); d.email = val('#f-email'); d.phone = val('#f-phone'); d.property = val('#f-property'); d.location = val('#f-location'); }
    setDraft(d);
  }
  function val(sel) { var el = $(sel); return el ? el.value.trim() : ''; }

  function currentRoute() {
    var r = parsePath();
    return { path: r.segments.join('/'), query: r.query };
  }
  function qs(query) {
    return Object.keys(query).filter(function (k) { return query[k]; }).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(query[k]); }).join('&');
  }
  function debounce(fn, ms) { var t; return function () { var args = arguments; clearTimeout(t); t = setTimeout(function () { fn.apply(null, args); }, ms); }; }
  function showErrors(form, errs) {
    var box = $('.form-errors', form);
    if (!box) return errs.length > 0;
    if (!errs.length) { box.hidden = true; box.textContent = ''; return false; }
    box.hidden = false;
    var names = { name: 'name', email: 'email', phone: 'phone', topic: 'topic', details: 'project details', dimensions: 'opening dimensions', 'email-format': 'a valid email' };
    box.textContent = 'Please complete: ' + errs.map(function (e) { return names[e] || e; }).join(', ') + '.';
    return true;
  }
  function updateCounts() {
    $all('.cart-tool .count').forEach(function (el, i) {
      var n = i === 0 ? S.QuoteCart.count() : S.Cart.count();
      el.textContent = n;
      el.hidden = !n;
    });
  }

  /* global listeners — registered once, safe across re-renders */
  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest) {
      var skip = e.target.closest('a.skip-link');
      if (skip) {
        e.preventDefault();
        var main = document.getElementById('main');
        if (main) { main.setAttribute('tabindex', '-1'); main.focus(); main.scrollIntoView(); }
        return;
      }
      if (!e.target.closest('.nav-item.has-drop')) {
        $all('.nav-item.has-drop.open').forEach(function (x) { x.classList.remove('open'); });
      }
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      $all('.nav-item.has-drop.open').forEach(function (x) { x.classList.remove('open'); });
      var overlay = $('#searchOverlay');
      if (overlay) overlay.hidden = true;
    }
  });

  /* toast */
  document.addEventListener('aurum:toast', function (e) {
    var region = $('#toastRegion');
    if (!region) return;
    var t = document.createElement('div');
    t.className = 'toast ' + (e.detail.kind === 'err' ? 'toast-err' : '');
    t.textContent = e.detail.msg;
    region.appendChild(t);
    setTimeout(function () { t.classList.add('show'); }, 10);
    setTimeout(function () { t.classList.remove('show'); setTimeout(function () { t.remove(); }, 300); }, 3200);
  });

  render();
})();
