# AURUM GATES

A premium, frontend-only redesign of the **Gates N Fences** catalog (gatesnfences.com),
maintaining the business identity of **L. A. Ornamental & Rack Corp**, Miami, Florida.

- 3708 NW 82nd Street, Miami, Florida 33147
- Office: 305-696-0419 · Fax: 305-696-0461
- LAOrnamental@Aol.com

## What this is

A complete static single-page application (no build step, no dependencies, no backend):

- **Centralized catalog** (`site/assets/js/data/`) — ~330 real products audited from the
  source website: driveway gates (Golden Orchid, Entrance of Eden, Elegant Queen…),
  garden/walk gates, privacy gates, fences, pool fencing, 21 named railing styles,
  scissor gates, and gate operators from BFT, PowerMaster, RamSet, DoorKing, OSCO/Linear,
  LiftMaster, SEA, FAAC, Apollo, HySecurity, Eagle, Elite, Viking and Allstar — plus
  telephone entry, keypads, intercoms, card readers, remotes, safety systems,
  accessories, hinges, latches, wheels, tracks and circuit boards.
- **Routing** — path-based SPA routing (`/products/gates/driveway-gates`,
  `/product/:id`, `/manufacturers/:slug`, …) with a hash-routing fallback so the
  same code runs from `file://` or any static host.
- **Search, filters, sorting** across products, resources and manufacturers.
- **Carts** — shopping cart (localStorage) and a separate **Quote Request Cart**
  for made-to-order products. No invented prices: everything is "Request a Quote".
- **Flows** — checkout (5 steps), quote request, consultation, and a 12-step
  custom project builder. Each submission gets a unique reference ID
  (`AG-Q-…`, `AG-O-…`, `AG-C-…`, `AG-P-…`) and is saved locally.
- **Account (demo)** — sign-in simulation on the device only, with saved products
  and full request history.
- **Resources** — only real documents: PowerMaster CSWC/CSWI manual PDF, LiftMaster
  remote programming PDF, the powder-coat color chart, and source catalog pages.
- **FAQ & Policies** — drawn from the source website's actual content.

## Run locally

No build required. Serve the `site/` folder:

```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```

Or just open `site/index.html` directly (hash routing is used automatically).

## Deploy

Static hosting only — works on Netlify (`netlify.toml` included with an SPA
redirect), Vercel, or GitHub Pages (`404.html` bootstraps deep links).

## Structure

```
site/
  index.html              SPA shell
  404.html                deep-link bootstrap for static hosts
  assets/
    css/app.css           design system
    js/data/data-core.js        gates, fences, scissor gates, materials
    js/data/data-automation.js  railings + all operator brands/models
    js/data/data-access.js      access control, accessories, boards, remotes,
                                manufacturers, resources, FAQ, policies
    js/store.js           localStorage services (cart, quote cart, saved,
                          requests, account, toasts)
    js/app.js             router, shell, components, pages
```

Product imagery is loaded from the source website's published image URLs with an
inline SVG fallback if any image is unavailable.

All brand names, logos and publications mentioned are trademarks of their
respective owners; their use does not imply affiliation.
