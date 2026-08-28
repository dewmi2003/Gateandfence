/* AURUM GATES — centralized catalog data (part 1: core, gates, fences)
   Product names, collections, imagery and contact facts audited from gatesnfences.com
   (L.A. Ornamental & Rack Corp). Descriptions written for this redesign. */
window.AURUM_DATA = window.AURUM_DATA || {};
(function (D) {
  'use strict';
  var IMG = 'https://www.gatesnfences.com/sitebuilder/images/';
  var IMG2 = 'https://www.gatesnfences.com/images/';
  var SRC = 'https://www.gatesnfences.com/';

  D.company = {
    brand: 'AURUM GATES',
    tagline: 'Architectural Gates, Fences & Automation',
    legalName: 'L. A. Ornamental & Rack Corp.',
    address: '3708 NW 82nd Street, Miami, Florida 33147',
    street: '3708 NW 82nd Street',
    city: 'Miami', state: 'Florida', zip: '33147',
    phone: '305-696-0419',
    fax: '305-696-0461',
    email: 'LAOrnamental@Aol.com',
    experience: 'Over thirty-five years designing and manufacturing custom gates and fences.',
    sourceSite: 'gatesnfences.com'
  };

  D.categories = [
    { slug: 'gates', name: 'Gates', img: IMG + 'Aluminum_Wrought_Iron_Driveway_Gate_Golden_Orchid-198x144.jpg', blurb: 'Custom driveway, garden, walk and privacy gates in aluminum or wrought iron.' },
    { slug: 'fences', name: 'Fences', img: IMG + 'Garden_Gate_Aluminum_Fence_Rolling_Calm-280x170.jpg', blurb: 'Aluminum and wrought iron fencing — picket, decorative, pool and garden.' },
    { slug: 'railings', name: 'Railings', img: IMG + 'Sunshine_Decorative_Balcony_HandRails_or_Railings-255x150.jpg', blurb: 'Balcony, porch, deck and hand rails for interior or exterior locations.' },
    { slug: 'automation', name: 'Gate Automation', img: IMG + 'BFT_-_Ares-1000_-_1500_Series-201x172.jpg', blurb: 'Swing, sliding, hydraulic and barrier operators from the top brands.' },
    { slug: 'access-control', name: 'Access Control', img: IMG + 'Doorking_1504_Surface_Mount_Exterior_Digital_Keypad2-135x90.jpg', blurb: 'Telephone entry, keypads, intercoms, card readers, remotes and safety devices.' },
    { slug: 'accessories', name: 'Gate Accessories', img: IMG + '4_inch_Elite_Power_Wheel_V_Groove_Sliding_Gate_Wheels_3000_lbs_Cap-106x97.jpg', blurb: 'Hinges, latches, wheels, tracks, springs, control stations and hardware.' },
    { slug: 'scissor-gates', name: 'Scissor Gates', img: IMG + 'Driveway_Gates_Safety_Design_Sliding_Estate_Swing_Aluminum_Metal_Iron_Security-198x126.jpg', blurb: 'Heavy duty retractable accordion gates for industrial openings.' }
  ];

  D.materials = [
    { id: 'aluminum', name: 'Aluminum', points: ['About one-third the density of steel or copper, yet strong when alloyed', 'Protective oxide layer gives excellent corrosion resistance — the finish does not flake like rust', 'Non-magnetic and non-sparking', 'Maintenance-free alternative that can be finished to look like wrought iron', 'Powder-coated, oven-baked finish in a wide choice of colors'] },
    { id: 'wrought-iron', name: 'Wrought Iron / Steel', points: ['Classic ornamental strength for estate and security designs', 'Ideal for heavy gates, industrial scissor gates and high-traffic operators', 'Powder-coated for durable outdoor performance'] },
    { id: 'privacy-backing', name: 'Privacy Backing', points: ['Solid backing offered in aluminum, steel, Plexiglas or plastic', 'Available in many colors to match the gate or fence'] }
  ];

  var P = [];

  /* ---------------- DRIVeway GATES ---------------- */
  function drive(id, name, img, opts) {
    opts = opts || {};
    P.push({
      id: id, name: name, cat: 'gates', sub: opts.sub || 'driveway-gates',
      collection: opts.collection || 'Signature Driveway Gates',
      material: opts.material || 'Aluminum or Wrought Iron',
      style: opts.style || 'Decorative',
      motion: opts.motion || 'Swing or Sliding',
      image: img, gallery: opts.gallery || [img],
      short: opts.short || 'Custom-made ' + (opts.motion || 'swing or sliding') + ' driveway gate in aluminum or wrought iron.',
      description: opts.desc || 'A custom driveway gate fabricated to your opening dimensions in aluminum or wrought iron, finished with oven-baked powder coat. All installation hardware is included, and the design can be automated with a swing or sliding gate operator.',
      features: opts.features || ['Made to your opening dimensions', 'Aluminum or wrought iron construction', 'Oven-baked powder coat finish', 'Installation hardware included', 'Operator-ready: swing or sliding'],
      applications: opts.apps || ['Residential driveways', 'Estate entrances', 'Commercial entries'],
      automation: 'Compatible with swing and sliding gate operators — see Gate Automation',
      pricingType: 'quote', availability: 'Made to order', tags: (opts.tags || []).concat(['driveway gate']),
      src: SRC + 'Automatic_Driveway_gates_1.html'
    });
  }
  var g = IMG;
  drive('golden-orchid', 'Golden Orchid Driveway Gate', g + 'Aluminum_Wrought_Iron_Driveway_Gate_Golden_Orchid-198x144.jpg', { style: 'Decorative', tags: ['floral'] });
  drive('sea-shell', 'Sea Shell Custom Entrance Gate', g + 'Custom_Gate_Driveway_Automatic_Electronic_Sea_Shell-198x144.jpg', { style: 'Decorative', tags: ['coastal'], desc: 'An ornamental entrance gate with a sculpted sea-shell motif, fabricated in aluminum or wrought iron and ready for automatic operation.' });
  drive('elegant-queen', 'Elegant Queen Slide Gate', g + 'Slide_Gate_Electric_Electronic_Automatic_Elegant_Queen-198x125.jpg', { motion: 'Sliding', style: 'Decorative', tags: ['slide'], desc: 'A sliding estate gate with elegant ornamental detail. Sliding operation suits driveways without swing clearance and pairs with a heavy-duty slide operator.' });
  drive('pacific-tide', 'Pacific Tide Entrance Gate', g + 'Driveway_Gate_Custom_Entrance_Wrought_Iron_Metal_Pacific_Tide-198x143.jpg', { style: 'Decorative', tags: ['wave'], desc: 'Flowing wave-inspired metalwork make the Pacific Tide a signature custom entrance gate in wrought iron or aluminum.' });
  drive('gareth', 'Gareth Wrought Iron Gate', g + 'Gate_DrivewayGate_Fence_Gareth_Wrought_Iron_Driveway_Gates-250x187.jpg', { material: 'Wrought Iron', style: 'Classic', tags: ['classic'] });
  drive('centurian', 'Centurian Custom Gate', g + 'Centurian_Custom_Driveway_Gate_Swing_Slide-198x124.jpg', { style: 'Classic', tags: ['estate'] });
  drive('whiskers', 'Whiskers Aluminum Gate', g + 'WISKERS-Driveway_Aluminum_Gate-198x126.jpg', { material: 'Aluminum', style: 'Modern', tags: ['modern'] });
  drive('great-vine', 'The Great Vine Gate', g + 'The_Great_Vine_-_Sliding_or_Swing_Driveway_Gate-195x131.jpg', { style: 'Decorative', tags: ['vine'] });
  drive('speared-spade', 'Speared Spade Gate', g + 'Speared_Spade_Iron_Aluminum_Metal_Driveway_Gate-198x125.jpg', { style: 'Classic', tags: ['spear'] });
  drive('musical-branch', 'Musical Branch Swing Gate', g + 'Swing_Swinging_Driveway_Gates_Musical_Branch-198x125.jpg', { motion: 'Swing', style: 'Decorative', tags: ['branch'] });
  drive('diamonds-forever', 'Diamonds Forever Gate', g + 'Diamond_s_Forever-198x126.jpg', { style: 'Decorative', tags: ['diamond'] });
  drive('egyptian-peacock', 'Egyptian Peacock Gate', g + 'Egyptian_Peacock-198x126.jpg', { style: 'Decorative', tags: ['ornamental'] });
  drive('franchesca', 'Franchesca Driveway Gate', g + 'Franchesca_Driveway_Gate-200x126.jpg', { style: 'Decorative' });
  drive('bud-flower', 'Bud Flower Gate', g + 'BudFlower-198x126.jpg', { style: 'Decorative', tags: ['floral'] });
  drive('iron-artist', 'The Iron Artist Gate', g + 'The_Iron_Artist-198x126.jpg', { style: 'Decorative', gallery: [g + 'The_Iron_Artist-198x126.jpg', IMG2 + 'Driveway_Gate_Iron_Security_Opener_Electric_Automatic_Entrance_Wrought_Metal_Aluminum.JPG'] });
  drive('spear-of-union', 'Spear of Union Gate', g + 'Spear_Of_Union-198x126.jpg', { style: 'Classic' });
  drive('web-of-elegance', 'Web of Elegance Gate', g + 'Web_of_Elegance-198x130.jpg', { style: 'Decorative' });
  drive('angelic-security', 'Angelic Security Gate', g + 'Angelic_Security-198x126.jpg', { style: 'Security', tags: ['security'] });
  drive('little-hercules', 'Little Hercules Gate', g + 'Little_Hercules-198x126.jpg', { style: 'Classic' });
  drive('mid-evil', 'Mid-Evil Gate', g + 'Mid-Evil_-_Wrought_Iron_or_Aluminum_Driveway_Gate-198x126.jpg', { style: 'Classic', tags: ['medieval'] });
  drive('modern-rustic-decor', 'Modern Rustic Decor Gate', g + 'Modern_Rustic_Decor-198x126.jpg', { style: 'Modern' });
  drive('roman-times', 'Roman Times Gate', g + 'Roman_Times2-198x126.jpg', { style: 'Classic' });
  drive('royal-seal', 'Royal Seal Driveway Gate', g + 'Royal_Seal-198x126.jpg', { style: 'Decorative', tags: ['estate'] });
  drive('spear-of-the-ocean', 'Spear of the Ocean Gate', g + 'Spear_of_the_Ocean_Driveway_Custom_Gate-198x126.jpg', { style: 'Decorative', tags: ['coastal'] });
  drive('tiara', 'Tiara Driveway Gate', g + 'Tiara_-_Driveway_Gate_Aluminum_Iron_Gates-198x126.jpg', { style: 'Decorative' });
  drive('royalty-with-accent', 'Royalty with Accent Gate', g + 'Royalty_with_accent-585x450.jpg', { style: 'Decorative', tags: ['estate'], image: g + 'Royalty_with_accent-585x450.jpg' });
  drive('entrance-of-eden', 'Entrance of Eden Gate', g + 'Entrance_of_Eden-555x417.jpg', { style: 'Decorative', tags: ['estate'] });
  drive('lion-pet-garden', 'Lion Pet & Garden Gate', g + 'Driveway_Gates_Aluminum_Wrought_Iron_Metal_Lion_Dog_Pet_Garden-198x234.jpg', { style: 'Decorative', tags: ['pet', 'lion'], apps: ['Residential driveways', 'Pet containment', 'Garden entries'] });
  drive('safety-design-sliding', 'Safety Design Sliding Estate Gate', g + 'Driveway_Gates_Safety_Design_Sliding_Estate_Aluminum_Iron_Security_Opener_Electric-198x144.jpg', { motion: 'Sliding', style: 'Security', tags: ['security', 'slide'], desc: 'A security-focused sliding estate gate designed around operator safety, built in aluminum or wrought iron and supplied complete with installation hardware.' });
  drive('safety-design-swing', 'Safety Design Swing Estate Gate', g + 'Driveway_Gates_Safety_Design_Sliding_Estate_Swing_Aluminum_Metal_Iron_Security-198x126.jpg', { motion: 'Swing', style: 'Security', tags: ['security'] });
  drive('a103-industrial', 'A-103 Industrial Security Gate', g + 'A-103_Industrial_Security_Driveway_Gate-214x126.jpg', { style: 'Security', tags: ['industrial', 'security'], apps: ['Industrial sites', 'Commercial lots', 'Secure compounds'] });
  drive('evolution', 'Evolution Driveway Gate', g + 'Evolution_driveway_gates-250x187.jpg', { style: 'Modern', tags: ['modern'] });
  drive('modern-security-1', 'Modern Security Driveway Gate', g + 'Modern_Security_Driveway_Gate_1-250x182.jpg', { style: 'Security', tags: ['modern', 'security'] });
  drive('modern-design', 'Modern Driveway Gate Design', g + 'Modern_Driveway_Gate_Design-250x187.jpg', { style: 'Modern', tags: ['modern'] });
  drive('wave-of-elegance', 'Wave of Elegance Gate', g + 'Wave_of_Elegance2-201x130.jpg', { style: 'Decorative', tags: ['wave'] });
  drive('plain-picket-gate', 'Plain Picket Driveway Gate', g + 'Plain_Picket-198x126.jpg', { style: 'Simple', tags: ['picket'] });
  drive('slide-swing-manual', 'Slide / Swing Utility Gate', g + 'Driveway_Gate_Slide_Swing_Sliding_Manual_Automatic_Electric-198x126.jpg', { style: 'Simple', tags: ['utility'], desc: 'A practical driveway gate offered sliding or swinging, manual or automatic, fabricated to suit the opening and the operator of your choice.' });
  drive('swing-swinging', 'Classic Swing Driveway Gate', g + 'Driveway_Gates_Security_Gates_Pet_Gates_Swing_Sliding_Gates-198x130.jpg', { motion: 'Swing', style: 'Classic', tags: ['pet', 'security'] });

  /* ---------------- GARDEN / WALK GATES ---------------- */
  function walk(id, name, img, opts) {
    opts = opts || {};
    P.push({
      id: id, name: name, cat: 'gates', sub: 'garden-gates', collection: opts.collection || 'Garden & Walk Gates',
      material: opts.material || 'Aluminum or Wrought Iron', style: opts.style || 'Decorative', motion: 'Swing',
      image: img, gallery: [img],
      short: 'Custom walk-through gate designed to match your driveway gate and fencing.',
      description: opts.desc || 'Garden and walk gates are custom made to match any existing or ordered driveway gate. Choose aluminum or wrought iron and any powder-coat color from the chart — a walk gate gives your property that special, elegant finish.',
      features: ['Made to match your driveway gate and fence', 'Aluminum or wrought iron', 'Any powder-coat color from the chart', 'Pool-code latch options available'],
      applications: ['Garden entries', 'Walkways', 'Pool enclosures', 'Side yards'],
      automation: 'Self-closing spring hinges and automatic openers available',
      pricingType: 'quote', availability: 'Made to order', tags: ['walk gate', 'garden gate'].concat(opts.tags || []),
      src: SRC + 'Garden-Gates-Walk-Thru-Gates-Metal-Wrought-Iron-Aluminum-Custom-Designs.html'
    });
  }
  walk('in-circle-garden', 'The In Circle Garden Gate', g + 'The_In_Circle_Garden_Gate_Entrance_Walk_Thru_Gate3-181x242.jpg');
  walk('sturdy-royalty-privacy', 'Sturdy Royalty Privacy Garden Gate', g + 'Sturdy_Royalty_Privacy_Garden_Entrance_Gate3-167x225.jpg', { style: 'Privacy', tags: ['privacy'], collection: 'Privacy Garden Gates', src: SRC + 'Privacy-Garden-Gates.html' });
  walk('royal-seal-garden', 'Royal Seal Garden Gate', g + 'Royal_Seal_Garden_Gate_Walk_Thru_Gate3-167x225.jpg');
  walk('simply-elegant-garden', 'Simply Elegant Garden Gate', g + 'Simply_Elegant_Garden_Entrance_Gate3-227x193.jpg');
  walk('secure-elegance-walk', 'Secure Elegance Walk Gate', g + 'secure_elegance_walk_gate4-155x225.jpg', { style: 'Security', tags: ['security'] });
  walk('pedestrian-gate-22', 'Pedestrian Gate 22', g + 'Pedestrian_Gate_22-166x220.jpg');
  walk('aruba-gate', 'Aruba Walk Gate', g + 'ARUBAGATES0012-165x225.jpg');
  walk('lynchgate', 'Lynch Walk Gate', g + 'Lynchgate041MA16525198-00032-155x235.jpg');
  walk('oversize-top-scroll', 'Oversize Top Scroll Gate', g + 'over_size_top_scrull2-235x195.jpg');
  walk('picture-013-garden', 'Garden Gate 013', g + 'Picture_0013-227x191.jpg');
  walk('diamonds-high', 'Diamonds High Garden Gate', g + 'Diamonds_High_Garden_Gate3-182x250.jpg');
  walk('double-gates', 'Double Garden Gates', g + 'Double_Gates2-245x166.jpg', { tags: ['double'] });
  walk('sea-shell-garden', 'Sea Shell Garden & Pool Gate', g + 'Sea_Shell_Garden_Decorative_Gate_Pool-170x225.jpg', { tags: ['pool', 'coastal'], apps: ['Garden entries', 'Pool enclosures'] });
  walk('walk-gate-3', 'Classic Walk Gate 3', g + 'Walk_Gate3-181x250.jpg');
  walk('arch-with-heart', 'Arch with Heart Gate', g + 'Arch_with_Heart-170x230.jpg', { collection: 'Modern Garden Gates', src: SRC + 'Modern-Garden-Gates.html' });
  walk('arch-vine', 'Arch Vine Gate', g + 'Arch_Vine-171x240.jpg', { collection: 'Modern Garden Gates', src: SRC + 'Modern-Garden-Gates.html' });
  walk('modern-arrow', 'Modern Arrow Gate', g + 'Modern_Arrow2-178x240.jpg', { style: 'Modern', collection: 'Modern Garden Gates', src: SRC + 'Modern-Garden-Gates.html' });
  walk('modern-garden-dsc', 'Modern Garden Entrance Gate', g + 'DSC07561-180x250.jpg', { style: 'Modern', collection: 'Modern Garden Gates', src: SRC + 'Modern-Garden-Gates.html' });
  walk('privacy-garden-entrance', 'Privacy Garden Entrance Gate', g + 'DSC07563-178x238.jpg', { style: 'Privacy', collection: 'Privacy Garden Gates', src: SRC + 'Privacy-Garden-Gates.html', desc: 'A privacy garden gate with solid backing in aluminum, steel, Plexiglas or plastic, offered in many colors and made to match your driveway gate.' });

  /* ---------------- PRIVACY GATES ---------------- */
  P.push({
    id: 'private-empire', name: 'Private Empire Privacy Gate', cat: 'gates', sub: 'privacy-gates',
    collection: 'Privacy Gates', material: 'Aluminum or Wrought Iron', style: 'Privacy', motion: 'Swing or Sliding',
    image: g + 'Driveway_Gates_Aluminum_Wrought_Iron_Security_Electric_Automatic_Metal_Design_Swing_Slide-221x130.jpg',
    gallery: [g + 'Driveway_Gates_Aluminum_Wrought_Iron_Security_Electric_Automatic_Metal_Design_Swing_Slide-221x130.jpg'],
    short: 'Privacy driveway gate with solid backing in aluminum, steel, Plexiglas or plastic.',
    description: 'For privacy on driveway, garden or walk gates, a solid backing can be added in aluminum, steel, Plexiglas or plastic. All backing options come in many colors to choose from, so the gate stays private without losing its architectural look.',
    features: ['Solid backing: aluminum, steel, Plexiglas or plastic', 'Many backing colors available', 'Swing or sliding operation', 'Operator-ready'],
    applications: ['Residential driveways', 'Estate entrances', 'Privacy screening'],
    automation: 'Compatible with swing and sliding gate operators',
    pricingType: 'quote', availability: 'Made to order', tags: ['privacy', 'driveway gate'],
    src: SRC + 'Privacy_Gates.html'
  });

  /* ---------------- SCISSOR GATES ---------------- */
  P.push({
    id: 'scissor-accordion', name: 'Heavy Duty Scissor (Accordion) Gate', cat: 'scissor-gates', sub: 'scissor',
    collection: 'Scissor Gates', material: 'Steel', style: 'Security', motion: 'Retractable / Folding',
    image: g + 'Driveway_Gates_Safety_Design_Sliding_Estate_Swing_Aluminum_Metal_Iron_Security-238x155.jpg',
    gallery: [g + 'Driveway_Gates_Safety_Design_Sliding_Estate_Swing_Aluminum_Metal_Iron_Security-238x155.jpg'],
    short: 'Retractable folding security gates for industrial warehouse and overhead-door openings.',
    description: 'Heavy duty accordion gates for security. These folding gates are retractable and are used mostly in industrial warehouses for overhead door openings. Most standard sizes are available, and sizes can also be custom made to your opening.',
    features: ['Retractable folding design', 'Heavy duty security construction', 'Most standard sizes available', 'Custom sizes made to order'],
    applications: ['Industrial warehouses', 'Overhead door openings', 'Secure corridors'],
    automation: 'Manual operation; contact us about operator options',
    pricingType: 'quote', availability: 'Standard sizes in stock — call to confirm', tags: ['scissor', 'accordion', 'security', 'industrial'],
    src: SRC
  });

  /* ---------------- FENCES ---------------- */
  function fence(id, name, img, opts) {
    opts = opts || {};
    P.push({
      id: id, name: name, cat: 'fences', sub: opts.sub || 'aluminum-fences',
      collection: opts.collection || 'Custom Aluminum Fencing', material: opts.material || 'Aluminum', style: opts.style || 'Decorative',
      image: img, gallery: [img],
      short: opts.short || 'Custom aluminum fence panels made from 4 ft to 10 ft wide, matched to your gates.',
      description: opts.desc || 'Fence panels are custom made from 4 ft to 10 ft wide and can be matched with garden gates or driveway gates. Choose from the decorative designs below or request a fully custom layout, in any powder-coat color from the chart.',
      features: ['Panels from 4 ft to 10 ft wide', 'Matches driveway and garden gates', 'Oven-baked powder coat finish', 'Designed to withstand outdoor conditions'],
      applications: opts.apps || ['Residential perimeter', 'Gardens', 'Pool areas'],
      pricingType: 'quote', availability: 'Made to order', tags: ['fence'].concat(opts.tags || []),
      src: opts.src || SRC + 'Picket_Fence.html'
    });
  }
  fence('rolling-calm', 'Rolling Calm Fence & Garden Gate', g + 'Garden_Gate_Aluminum_Fence_Rolling_Calm-280x170.jpg', { short: 'Gently rolling top-line fence with matching garden gate.', tags: ['garden'] });
  fence('american-picket', 'American Picket Fence', g + 'Fence_Aluminum_Iron_Wrought_Pool_Ornamental_Residential_American_Picket_White_Electronic_Gates_Design_Metal-280x170.jpg', { style: 'Picket', tags: ['picket', 'white'], short: 'Classic white picket fencing in maintenance-free aluminum.' });
  fence('golden-leaves-triumph', 'Golden Leaves of Triumph Fence', g + 'Golden_Leaves_of_Triumph-Fence-Designs-Iron-Fence-Designs-Styles-290x169.jpg', { tags: ['ornamental'] });
  fence('double-wave', 'Double Wave Fence', g + 'Double_Wave-Metal-Fence-Decorative-Garden-Metal-Fence-280x160.jpg', { tags: ['wave', 'garden'] });
  fence('iron-thorns', 'The Iron Thorns Fence', g + 'The-Iron-Thorns--Custom-Fence-Iron-Custom-Fencing-Ornamental-Custom-Fence-296x170.jpg', { material: 'Wrought Iron', tags: ['ornamental'] });
  fence('thorns-of-power', 'Thorns of Power Fence', g + 'Thorns_of_Power--Garden-Fence-Metal-Garden-Fence-Decorative-Design-294x170.jpg', { tags: ['garden'] });
  fence('crescent-moon-fence', 'Crescent Moon Fence', g + 'Cresent_Moon_1-Aluminum-Fence-Ideas-Aluminum-Ideal-Fence-Work-280x170.jpg', { tags: ['crescent'] });
  fence('pacific-tide-fence', 'Pacific Tide Garden Fence', g + 'Aluminum_Garden_Fence_Pacific_Tide-280x170.jpg', { tags: ['garden', 'wave'], short: 'Wave-themed aluminum garden fence that pairs with the Pacific Tide gate family.' });
  fence('candy-cane', 'Candy Cane Pool & Garden Fence', g + 'Pool_Garden_Aluminum_Fence_Candy_cane-293x160.jpg', { sub: 'pool-fences', collection: 'Pool Fencing', tags: ['pool', 'simple'], short: 'Simple, elegant picket fencing popular around pools and gardens.', apps: ['Pool enclosures', 'Gardens', 'Residential perimeter'], src: SRC + 'Pool_Aluminum_Picket_Fence.html' });
  fence('pool-border-privacy', 'Pool Border Privacy Fence', g + 'Fence_Gates_Aluminum_Pool_Border_Picket_Privacy_Fence-298x170.jpg', { tags: ['privacy', 'pool'], short: 'Border fencing with privacy panels for pool and garden areas.' });
  fence('custom-garden-pool-border', 'Custom Garden Pool Border Fence', g + 'Custom_Garden_Aluminum_Fence_Pool_Border_Privacy_Pet_Garden_Design_Ornamental_Residential-280x180.jpg', { tags: ['pet', 'pool'], short: 'Ornamental border fencing designed for pools, pets and garden enclosures.' });
  fence('horse-posts', 'Perimeter Fence with Decorative Posts', g + 'Fence_Gates_Aluminum_Pool_Border_Privacy_Horse_Electric_Posts-293x170.jpg', { tags: ['perimeter', 'posts'], short: 'Boundary fencing with decorative posts for larger residential perimeters.' });
  fence('security-picket', 'Security Picket Fence', g + 'Fence_Aluminum_Iron_Wrought_Metal_Design_Security_Garden_Picket_Company_White_Rail_Wholesale-290x180.jpg', { style: 'Security', tags: ['security', 'picket'], short: 'Sturdy picket fencing for security with a clean residential profile.' });
  fence('pool-safety', 'Pool Safety Fence', g + 'Pool_Safety_Fences-345x219.jpg', { sub: 'pool-fences', collection: 'Pool Fencing', style: 'Safety', tags: ['pool', 'safety'], short: 'Aluminum pool safety fencing for residential and commercial pool areas.', desc: 'Aluminum pool fence styles built for safety around pools — decorative pool fences, standard safety fences, and custom pool gates for commercial crowded areas or residential properties.', apps: ['Residential pools', 'Commercial pools', 'Pool decks'], src: SRC + 'Pool_Aluminum_Picket_Fence.html' });
  fence('pool-child-gate', 'Pool Fence with Child Safety Gate', g + 'Pool_Fences_with_Gate_for_Child_Safety-345x225.jpg', { sub: 'pool-fences', collection: 'Pool Fencing', style: 'Safety', tags: ['pool', 'safety', 'child'], short: 'Pool fencing fitted with a self-closing gate and pool-code latch.', desc: 'Pool fencing delivered with a matching walk gate fitted with a self-closing hinge and a magnetic pool safety latch that meets pool code requirements.', apps: ['Family pools', 'Community pools'], src: SRC + 'Pool_Aluminum_Picket_Fence.html' });

  D.products = P;
})(window.AURUM_DATA);
