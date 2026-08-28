/* AURUM GATES — catalog data (part 2: railings + gate automation) */
(function (D) {
  'use strict';
  var IMG = 'https://www.gatesnfences.com/sitebuilder/images/';
  var IMG2 = 'https://www.gatesnfences.com/images/';
  var SRC = 'https://www.gatesnfences.com/';
  var P = D.products;

  /* ---------------- RAILINGS ---------------- */
  function rail(id, name, img, sub, opts) {
    opts = opts || {};
    P.push({
      id: id, name: name, cat: 'railings', sub: sub, collection: opts.collection || 'Custom Railings',
      material: opts.material || 'Aluminum or Wrought Iron', style: opts.style || 'Decorative',
      image: img, gallery: [img],
      short: opts.short || 'Custom railing fabricated in aluminum or wrought iron, powder coated for low maintenance.',
      description: opts.desc || 'Top-quality railing fabricated in metal, aluminum or wrought iron steel for residential or commercial locations, interior or exterior. Custom made and decorative, with a powder-coated paint finish for low maintenance and long life.',
      features: ['Residential or commercial', 'Interior or exterior installation', 'Powder-coated, low maintenance', 'Custom made to your measurements'],
      applications: opts.apps || ['Balconies', 'Front porches', 'Decks', 'Pool areas'],
      pricingType: 'quote', availability: 'Made to order', tags: ['railing'].concat(opts.tags || []),
      src: opts.src || SRC + 'Railings-Balcony-Porch-Deck-Rails-Metal-Aluminum-Wrought-Iron-Custom-Decortive-Designs-Exterior-Interior.html'
    });
  }
  var rs = SRC + 'Railings-Balcony-Porch-Deck-Rails-Metal-Aluminum-Wrought-Iron-Custom-Decortive-Designs-Exterior-Interior.html';
  rail('elegant-serenity', 'Elegant Serenity Balcony Railing', IMG + 'Elegant_Serenity_Balcony_Grille-255x150.jpg', 'balcony-railings', { tags: ['serenity'] });
  rail('belly-special', 'Belly Special Balcony Railing', IMG + 'Belly_Special_2-225x149.jpg', 'balcony-railings', { tags: ['belly'], gallery: [IMG + 'Belly_Special_2-225x149.jpg', IMG + 'Belly-Special-327x161.jpg'] });
  rail('standard-picket-rail', 'Standard Picket Hand Rail', IMG + 'Stanard_Picket_Balcony_Railings_Hand_Rails-255x150.jpg', 'handrails', { style: 'Picket' });
  rail('skull-galore', 'Skull Galore Decorative Railing', IMG + 'Scrull_Golore_Railing-345x150.jpg', 'decorative-railings', { material: 'Wrought Iron' });
  rail('special-top-rail', 'Special Top Rail', IMG + 'Special_Top_Rail_Wrought_Iron_or_Aluminum_Railings-255x150.jpg', 'handrails');
  rail('plain-large-top', 'Plain Large Top Hand Rail', IMG + 'Plain_Large_Top_Rail-255x150.jpg', 'handrails', { style: 'Simple' });
  rail('suade-swing', 'Suade Swing Guard Rail', IMG + 'Suade_Swing_Metal_Railings_Outdoor_or_Exterior-255x150.jpg', 'balcony-railings', { tags: ['exterior'] });
  rail('sunshine', 'Sunshine Decorative Hand Rail', IMG + 'Sunshine_Decorative_Balcony_HandRails_or_Railings-255x150.jpg', 'decorative-railings');
  rail('circle-in-square', 'Circle In Square Railing', IMG + 'Circle_in_Square_Decorative_Hand_Railing_Balcony_Railing-255x150.jpg', 'decorative-railings');
  rail('classic-rail', 'Classic Custom Hand Rail', IMG + 'Classic_Hand_Rail_-_Custom_Made_Railings-255x150.jpg', 'handrails', { style: 'Classic', apps: ['Interior stairways', 'Hand rails'] });
  rail('crescent-moon-rail', 'Crescent Moon Porch Railing', IMG + 'Crescent_Moon_Railing_Deck_or_Porch_Railings-390x148.jpg', 'porch-railings');
  rail('personalized', 'Personalized Custom Railing', IMG + 'Personalized-Custom-Railing-295x146.jpg', 'decorative-railings', { short: 'Fully personalized railing made to your own design.' });
  rail('elegant-with-accent', 'Elegant With Accent Railing', IMG + 'Elegant_with_Accent-255x165.jpg', 'porch-railings');
  rail('european-style', 'European Style Guard Rail', IMG + 'European_Style-255x165.jpg', 'balcony-railings', { tags: ['european'] });
  rail('modern-belly', 'Modern Belly Railing', IMG + 'DSC00289-255x150.jpg', 'balcony-railings', { style: 'Modern', collection: 'Modern Railings', src: SRC + 'Modern-Balcony-Porch-Deck-Railings.html' });
  rail('horse-shoe', 'Horse Shoe Deck Railing', IMG + 'Horse_Shoe_Deck_Railings_or_Porch_Ralings-255x150.jpg', 'deck-railings');
  rail('royalty-rail', 'Royalty Guard Rail', IMG + 'Royalty_Fence_Railing_Guard_Rail_Aluminum_Iron_Railings-255x150.jpg', 'deck-railings', { tags: ['estate'] });
  rail('in-circle-deck', 'The In Circle Deck Railing', IMG + 'The_In_Cicle_Deck_Rails_Steel_Metal_Railings-255x150.jpg', 'deck-railings', { material: 'Steel / Wrought Iron' });
  rail('standard-curves', 'Standard Curves Railing', IMG + 'Flor_de_liz-280x150.jpg', 'balcony-railings', { style: 'Classic' });
  rail('modern-set', 'Modern Set Aluminum Railing', IMG + 'Modern_Set_Aluminum_Railings_Steel_Rails-390x165.jpg', 'deck-railings', { material: 'Aluminum', style: 'Modern', collection: 'Modern Railings', src: SRC + 'Modern-Balcony-Porch-Deck-Railings.html' });
  rail('modern-edition', 'Modern Edition Railing', IMG + 'Modern_Edition_Balcony-Deck-Porck-Aluminum_Railing-420x165.jpg', 'balcony-railings', { material: 'Aluminum', style: 'Modern', collection: 'Modern Railings', src: SRC + 'Modern-Balcony-Porch-Deck-Railings.html' });

  /* ---------------- AUTOMATION / OPERATORS ---------------- */
  function op(mfg, id, name, type, cls, img, opts) {
    opts = opts || {};
    var sub = type === 'Barrier' ? 'barrier-gates' : type === 'Slide' ? 'sliding-operators' : type === 'Underground' ? 'swing-operators' : 'swing-operators';
    if (opts.sub) sub = opts.sub;
    P.push({
      id: id, name: name, cat: 'automation', sub: sub, collection: opts.collection || mfg + ' Operators',
      material: opts.material || 'Operator system', style: type, motion: type,
      image: img || (D.mfgImage && D.mfgImage[mfg]) || null, gallery: img ? [img] : [],
      manufacturer: mfg,
      short: (cls ? cls + ' ' : '') + type.toLowerCase() + ' gate operator by ' + mfg + '.',
      description: (opts.desc || (cls + ' ' + type.toLowerCase() + ' gate operator from the ' + mfg + ' line, supplied with manufacturer support.')),
      features: opts.features || ['Manufacturer-backed product line', 'Residential, commercial and industrial variants available', 'Pair with access control and safety devices'],
      applications: opts.apps || [cls ? cls + ' gates' : 'Swing and sliding gates'],
      automation: name,
      operatorClass: cls, pricingType: 'quote', availability: 'Call to confirm stock',
      tags: [mfg.toLowerCase().replace(/\W+/g, '-'), type.toLowerCase(), (cls || 'operator').toLowerCase(), 'gate opener'],
      related: opts.related || [],
      src: opts.src || SRC + 'Gate_Openers_Operators_PowerMaster_Elite_Eagle_SEA_Ramset.html'
    });
  }

  // BFT
  var bft = SRC + 'BFT-Gate-Openers-Operators.html';
  var bftU = 'BFT-Gate-Openers/';
  op('BFT', 'bft-ares', 'BFT ARES Electromechanical Slide Operator', 'Slide', 'Residential / Commercial', IMG2 + 'BFT_-_Ares-24V.jpg', { src: SRC + bftU + 'BFT-ARES-Electromechanical-Automatic-GateOpener.html' });
  op('BFT', 'bft-deimos', 'BFT DEIMOS Rack & Pinion Slide Kit', 'Slide', 'Residential', IMG + 'BFT_-_Deimos-Rack_Pinion-Kit-260x174.jpg', { src: SRC + bftU + 'BFT-Deimos-Electromechanical-RackPinion.html' });
  op('BFT', 'bft-e5', 'BFT E5 Electromechanical Swing Opener', 'Swing', 'Residential', IMG2 + 'BFT_-_E5_Rotating_Articulating_Arm.jpg', { src: SRC + bftU + 'BFT-E5-Electromechanical-SwingOpeners.html' });
  op('BFT', 'bft-icaro', 'BFT ICARO Slide Operator (24V / 120V)', 'Slide', 'Commercial', IMG + 'BFT_-_Icaro-24V_-_120V-260x148.jpg', { src: SRC + bftU + 'BFT-ICARO-Electromechanical-RackPinion.html' });
  op('BFT', 'bft-igea', 'BFT IGEA 24V Swing Kit', 'Swing', 'Residential', IMG + 'BFT_-_Igea_24V_Kit-260x168.jpg', { src: SRC + bftU + 'BFT-IGEA-Electromechanical-SwingOpeners.html' });
  op('BFT', 'bft-joint', 'BFT JOINT Swing Opener (up to 125°)', 'Swing', 'Residential', IMG + 'BFT_-_Joint_24V_-_120V_up_to_125_degree-260x155.jpg', { src: SRC + bftU + 'BFT-Joint-Electromechanical-SwingOpeners.html' });
  op('BFT', 'bft-lux', 'BFT LUX Hydraulic Swing Opener', 'Swing', 'Commercial', IMG2 + 'BFT_-_LUX-_Swing_Gate_Opener.jpg', { src: SRC + bftU + 'BFT-LUX-Hydralic-SwingOpeners.html' });
  op('BFT', 'bft-lux-bt', 'BFT LUX BT 24V Hydraulic Swing Opener', 'Swing', 'Residential', IMG + 'BFT_-_LUX-BT_-_24V_Irreversible-260x119.jpg', { src: SRC + bftU + 'BFT-LUX24V-Hydralic-SwingOpeners.html' });
  op('BFT', 'bft-moovi', 'BFT MOOVI Barrier Arm Operator', 'Barrier', 'Commercial', IMG2 + 'BFT_-_Moovi_120V_Barrier_Arm_Operator.jpg', { src: SRC + bftU + 'BFT-Moovi-Electromechanical-Barrier.html' });
  op('BFT', 'bft-michelangelo', 'BFT MICHELANGELO Barrier (18–24 ft)', 'Barrier', 'Commercial', IMG + 'BFT_-_Michelangelo_24V_-_18_ft_to_24_ft-260x164.jpg', { src: SRC + bftU + 'BFT-Michelangelo-Electromechanical-Barrier.html' });
  op('BFT', 'bft-p7', 'BFT P7 / P4.5 Hydraulic Swing Opener', 'Swing', 'Commercial', IMG2 + 'BFT_-_P7_-_2_models.jpg', { src: SRC + bftU + 'BFT-P7-Hydralic-SwingOpeners.html' });
  op('BFT', 'bft-phobos', 'BFT PHOBOS 24V Slide Kit', 'Slide', 'Residential', IMG + 'BFT_-_Phobos_24V_Mechanical_Kit-260x165.jpg', { src: SRC + bftU + 'BFT-Phobos-Electromechanical-RackPinion.html' });
  op('BFT', 'bft-virgo', 'BFT VIRGO 24V Swing Kit', 'Swing', 'Residential', IMG + 'BFT_-_Virgo_24V_Kit-260x160.jpg', { src: SRC + bftU + 'BFT-VIRGO-Electromechanical-SwingOpeners.html' });
  op('BFT', 'bft-sp4000', 'BFT SP4000 Rack & Pinion Operator', 'Slide', 'Commercial', null, { src: SRC + bftU + 'BFT-SP4000-Electromechanical-RackPinion.html' });
  op('BFT', 'bft-sub', 'BFT SUB Underground Hydraulic Swing Opener', 'Underground', 'Commercial', null, { sub: 'swing-operators', src: SRC + bftU + 'BFT-SUB-Hydralic-SwingOpeners.html' });

  // PowerMaster
  var pm = SRC + 'PowerMaster_Gate_Openers_Operators_Swing_Slide_Residential_Commercial_RSG_BSG_RSW_MSW_SG_SGI_P1500_P5000.html';
  var pmU = 'PowerMaster_Openers/';
  op('PowerMaster', 'pm-rsg', 'PowerMaster RSG Residential Slide Operator', 'Slide', 'Residential', IMG + 'PowerMaster_RSG_Gate_Opener_Side_View-100x76.jpg', { src: SRC + pmU + 'PowerMaster_Gate_Opener_RSG_Sliding_Residential_Operator.html' });
  op('PowerMaster', 'pm-rsw2000', 'PowerMaster RSW-2000 Residential Swing Opener', 'Swing', 'Residential', null, { src: SRC + pmU + 'PowerMaster_Swing_Gate_Opener_RSW_Residential_Operator.html' });
  op('PowerMaster', 'pm-msw2000', 'PowerMaster MSW-2000 Swing Operator', 'Swing', 'Heavy Residential / Light Commercial', null, { src: SRC + pmU + 'PowerMaster_MSW_Heavy_Residential_Light_Commercial_Gate_Operator.html' });
  op('PowerMaster', 'pm-cswc2004', 'PowerMaster CSWC-2004 Heavy Duty Swing Operator', 'Swing', 'Commercial / Industrial', IMG + 'LA-Power_Master-CSW-Comm-Swing-110x105.jpg', { src: SRC + pmU + 'PowerMaster_HeavyDuty_CSW_SwingGate_Openers.html' });
  op('PowerMaster', 'pm-cswi2000', 'PowerMaster CSWI-2000 Commercial Swing Operator', 'Swing', 'Commercial', null, { src: SRC + pmU + 'PowerMaster-CSWI2000-Commercial-Gate-Operators-Openers.html', doc: { label: 'CSWC / CSWI Swing Operator Manual (PDF)', url: 'http://www.gatesnfences.com/files/CSWC_CSWI_Industrial_Or_Commercial_Gate_Operator_Swing_Super_Heavy_Duty_Manual_PDF.pdf' } });
  op('PowerMaster', 'pm-bsg', 'PowerMaster BSG Medium Duty Slide Operator', 'Slide', 'Commercial', null, { src: SRC + pmU + 'Power_Master_BSG_Sliding_Gate_Commercial_Medium_Duty_Operator.html' });
  op('PowerMaster', 'pm-sg', 'PowerMaster SG Heavy Duty Slide Operator', 'Slide', 'Commercial', IMG + 'Power_Master_SG-2004_Commercial_Sliding_Gate_Opener-102x110.jpg', { src: SRC + pmU + 'Powermaster_SG_Heavy_Duty_Slide_Gate_Operator_Commercial_Opener.html' });
  op('PowerMaster', 'pm-sgi', 'PowerMaster SGI Super Heavy Duty Slide Operator', 'Slide', 'Industrial', null, { src: SRC + pmU + 'PowerMaster_Super_Heavy_Duty_Slide_Gate_OperatorSGI_Gate_Opener.html' });
  op('PowerMaster', 'pm-msg', 'PowerMaster MSG Heavy Residential Slide Operator', 'Slide', 'Heavy Residential', null, { src: SRC + pmU + 'PowerMaster-GateOpener-MSG-HeavyDuty-Residential-SlidingGateOperators.html' });
  op('PowerMaster', 'pm-csg2004', 'PowerMaster CSG-2004 Commercial Slide Operator', 'Slide', 'Commercial', null, { src: SRC + pmU + 'CSG-PowerMaster-Sliding-Commercial-GateOpener.html' });
  op('PowerMaster', 'pm-p1500', 'PowerMaster P1500 Single Arm Barrier Operator', 'Barrier', 'Commercial', IMG + 'LA-Power_Master-SBG-P-1500_Barrier_Arm-117x136.jpg', { src: SRC + pmU + 'PowerMaster_SingleArm_Gate_Barrier_P1500_Operator.html' });
  op('PowerMaster', 'pm-p1500-articulating', 'PowerMaster P1500 Articulating Arm Barrier', 'Barrier', 'Commercial', null, { src: SRC + pmU + 'Barrier_Gate_Articulating_Arm_Single_Arm_Barrier_Operator_PowerMaster.html' });
  op('PowerMaster', 'pm-p5000', 'PowerMaster P5000 Double Arm Barrier Operator', 'Barrier', 'Commercial', null, { src: SRC + pmU + 'Barrier_Double_Arm_Operator_P5000_PowerMaster.html' });
  op('PowerMaster', 'pm-mbg', 'PowerMaster MBG Vehicle Barrier Gate', 'Barrier', 'Commercial / Industrial', null, { src: SRC + pmU + 'PowerMaster-GateBarrier-VehicleBarrier-TrafficBarrier-Barrier-to-Entry-Barrier-Fence_MBG.html' });
  op('PowerMaster', 'pm-mt-draw', 'PowerMaster MT Medium Duty Draw Bar Operator', 'Overhead', 'Commercial', null, { sub: 'overhead-operators', src: SRC + pmU + 'OverHead_Door_Gate_Opener_MediumDuty_Draw_Bar_PowerMaster_Operator.html', apps: ['Overhead doors'] });
  op('PowerMaster', 'pm-dsw', 'PowerMaster DSW Swing Operator with Battery Backup', 'Swing', 'Residential', null, { src: SRC + pmU + 'DSW-PowerMaster-battery-backup.html' });
  op('PowerMaster', 'pm-sl', 'PowerMaster SL Overhead Door Operator', 'Overhead', 'Commercial', IMG + 'PowerMaster_SL_Sliding_Overhead_Door_Opener-160x80.jpg', { sub: 'overhead-operators', src: SRC + pmU + 'PowerMaster-OverHeadDoor-OperatorSLModel.html', apps: ['Overhead doors'] });
  op('PowerMaster', 'pm-sj', 'PowerMaster SJ Jackshaft Operator', 'Overhead', 'Commercial', IMG + 'PowerMaster_SJ-Jackshaft_Operator-89x120.jpg', { sub: 'overhead-operators', src: SRC + pmU + 'PowerMaster-OverHeadDoor-Operator-JModel.html', apps: ['Overhead doors'] });
  op('PowerMaster', 'pm-h-belt', 'PowerMaster H-V Belt Hoist Operator', 'Overhead', 'Industrial', IMG + 'Power_Master_H-V_Belt_Hoist_Operator_Sectional_Rolling_Doors-80x120.jpg', { sub: 'overhead-operators', src: SRC + pmU + 'Model-H-V-Belt-Hoist-Operator.html', apps: ['Sectional / rolling doors'] });

  // RamSet
  var rU = 'RamSet_Gate_Operators/';
  op('RamSet', 'ram-30', 'RamSet RAM 30 Residential Swing Opener', 'Swing', 'Residential', null, { src: SRC + rU + 'Gate_Opener_Operator_Ramset_Swing_30_Residential.html' });
  op('RamSet', 'ram-30-30-34', 'RamSet RAM 30-30 3/4 HP Swing Opener', 'Swing', 'Super Heavy Duty', IMG + 'Ramset_Swing_Gate_Opener_300-165x225.jpg', { src: SRC + rU + 'Gate_Openers_Operators_Ramset_30-30_Swing_Super_Heavy_Duty.html' });
  op('RamSet', 'ram-30-30-1hp', 'RamSet RAM 30-30 1 HP Swing Opener', 'Swing', 'Commercial', null, { src: SRC + rU + 'Heavy_Duty_Ramset_30-30_1HP_Swing_Gate_Opener_Operator_Commercial.html' });
  op('RamSet', 'ram-300', 'RamSet RAM 300 Residential Swing Opener', 'Swing', 'Residential', null, { src: SRC + rU + 'Gate_Openers_Swing_Electric_Electronic_Ramset_300_Residential_Operator.html' });
  op('RamSet', 'ram-302', 'RamSet 302 Low Profile Swing Opener', 'Swing', 'Residential', null, { src: SRC + rU + 'Ramset-302-Residential-Swing-Gate-Opener-Lowprofile.html' });
  op('RamSet', 'ram-3000', 'RamSet RAM 3000 1/2 HP Swing Opener', 'Swing', 'Residential', null, { src: SRC + rU + 'Ramset_3000_Swing_Residential_Gate_Opener_Operator.html' });
  op('RamSet', 'ram-3100', 'RamSet RAM 3100 3/4 HP Swing Opener', 'Swing', 'Residential', null, { src: SRC + rU + 'RamSet_3100_Swing_Gate_Automatic_Electric_Electronic_Residential_Opener_Operator.html' });
  op('RamSet', 'ram-3200', 'RamSet RAM 3200 UL 1 HP Swing Opener', 'Swing', 'Commercial', null, { src: SRC + rU + 'Ramset_3200_Commercial_Swing_Opener_Heavy_Duty_Operator.html' });
  op('RamSet', 'ram-50', 'RamSet RAM 50 Residential Slide Opener', 'Slide', 'Residential', null, { src: SRC + rU + 'Ramset_Slide_Gate_Opener_Sliding_Residential_Operator_50.html' });
  op('RamSet', 'ram-1000', 'RamSet RAM 1000 Slide Operator', 'Slide', 'Heavy Residential / Commercial', IMG + 'Ramset_Sliding_Gate_Operator_1000-165x225.jpg', { src: SRC + rU + 'RamSet_Gate_Opener_1000_Heavy_Residential_Commercial_Slide_Operator.html' });
  op('RamSet', 'ram-5000', 'RamSet RAM 5000 UL Slide Operator', 'Slide', 'Commercial', null, { src: SRC + rU + 'Ramset_5000_Commercial_Gate_Opener_Slide_Sliding_Gate_Operator.html' });
  op('RamSet', 'ram-5100', 'RamSet RAM 5100 3/4 HP Slide Operator', 'Slide', 'Heavy Commercial', null, { src: SRC + rU + 'Ramset_5100_Heavy_Commercial_Slide_Gate_Opener_Operator.html' });
  op('RamSet', 'ram-5200', 'RamSet RAM 5200 Heavy Slide Operator', 'Slide', 'Commercial / Industrial', null, { src: SRC + rU + 'Ramset_5200_Heavy_Sliding_Commercial_Gate_Opener_Large_Gates_Operator.html' });
  op('RamSet', 'ram-5500', 'RamSet RAM 5500 Slide Operator', 'Slide', 'Heavy Residential / Commercial', null, { src: SRC + rU + 'Ramset_5500_Heavy_Residential_Commercial_Slide_Gate_Operator_Sliding_Opener.html' });
  op('RamSet', 'ram-5700', 'RamSet RAM 5700 Commercial / Industrial Operator', 'Slide', 'Commercial / Industrial', null, { src: SRC + rU + 'Ramset_5700_Commercial_Industrial_Slide_GateOperator.html' });

  // DoorKing
  var dkU = 'DoorKing_GateOpeners_Access_Control/';
  op('DoorKing', 'dk-6002', 'DoorKing 6002 Swing Gate Actuator', 'Swing', 'Residential', null, { src: SRC + dkU + 'DoorKing_Gate_Opener_Actuator_6002_SwingGate_Operator.html' });
  op('DoorKing', 'dk-6003', 'DoorKing 6003 Residential Swing Actuator Arm', 'Swing', 'Residential', null, { src: SRC + dkU + 'Doorking-6003-Residential-Swing-Gate-Actuator-Arm-Operators.html' });
  op('DoorKing', 'dk-6004', 'DoorKing 6004 Column Mount Swing Operator', 'Swing', 'Residential', null, { src: SRC + dkU + 'Doorking-6004Column-Mount-SwingGateOperator.html' });
  op('DoorKing', 'dk-6050-6100', 'DoorKing 6050 / 6100 Swing Operator', 'Swing', 'Residential / Light Commercial', null, { src: SRC + dkU + 'DoorKing_Swing_Gate_Opener_6050-6100_Residential_LightCommercial_Operator.html' });
  op('DoorKing', 'dk-6300', 'DoorKing 6300 Industrial / Commercial Swing Operator', 'Swing', 'Commercial / Industrial', null, { src: SRC + dkU + 'Doorking_Swing_Gate_Industrial_Commercia_6300_Opener.html' });
  op('DoorKing', 'dk-6400', 'DoorKing 6400 Underground Swing Operator', 'Underground', 'Commercial', null, { sub: 'swing-operators', src: SRC + dkU + 'Undergroung_Gate_Opener_Doorking_6400_Swing_Operator.html' });
  op('DoorKing', 'dk-6500', 'DoorKing 6500 Commercial / Industrial Swing Operator', 'Swing', 'Commercial / Industrial', IMG + 'DoorKing_6500_Swing_Gate_Operator_1-120x165.png', { src: SRC + dkU + 'Doorking-6500-Swing-Gate-Operators-Commercial-Industrial-Openers.html' });
  op('DoorKing', 'dk-9000', 'DoorKing 9000 Vehicular Slide Operator', 'Slide', 'Commercial', null, { src: SRC + dkU + 'Doorking-9000-Vehicular-SlideGateOperator.html' });
  op('DoorKing', 'dk-9050-9070', 'DoorKing 9050 / 9070 Slide Operator', 'Slide', 'Residential / Light Commercial', IMG + 'Doorking_Slide_Gate_Opener_9050_-_9070_Residential_Light_Commercial-120x165.jpg', { src: SRC + dkU + 'DoorKing_9050-9070_Slide_Residential_Light_Commercial_Gate_Opener.html' });
  op('DoorKing', 'dk-9100', 'DoorKing 9100 Commercial Slide Operator', 'Slide', 'Commercial', null, { src: SRC + dkU + 'Doorking_Commercial_Slide_Gate_Opener_9100_Gate_Operator.html' });
  op('DoorKing', 'dk-9150', 'DoorKing 9150 Slide Operator', 'Slide', 'Commercial', null, { src: SRC + dkU + 'Doorking_Gate_Opener_9150_Slide_Commercial_Gate_Operator.html' });
  op('DoorKing', 'dk-9210-9230', 'DoorKing 9210 / 9220 / 9230 Maximum Security Operator', 'Slide', 'Commercial / Maximum Security', null, { src: SRC + dkU + 'Doorking_Maximum-Security_Gate_Opener_9210-9220-9230_Commercial_Gate_Operator.html' });
  op('DoorKing', 'dk-9310', 'DoorKing 9310 Sliding Gate Operator', 'Slide', 'Commercial', null, { src: SRC + dkU + 'Doorking_9310_Sliding_Gate_Opener_Commercial_Operator.html' });
  op('DoorKing', 'dk-9530-9550', 'DoorKing 9530 / 9550 Super Heavy Duty Operator', 'Slide', 'Commercial / Maximum Security', null, { src: SRC + dkU + 'Doorking_SuperHeavyDuty_9530-9550_Commercial_Maximum_Security_Gate_Openers_Operators.html' });
  op('DoorKing', 'dk-1601', 'DoorKing 1601 Barrier Gate Operator', 'Barrier', 'Commercial', IMG + 'Door_King_Gate_Barrier_1601_Barrier_Operator-105x165.jpg', { src: SRC + dkU + 'DoorKing_BarrierGate_1601_BarrierOperator_CommercialBarrier_Opener.html' });
  op('DoorKing', 'dk-1602', 'DoorKing 1602 Dual Arm (Wishbone) Barrier', 'Barrier', 'Commercial', null, { src: SRC + dkU + 'Door_King_Commercial_Gate_Barrier_1602_Operator_Opener.html' });
  op('DoorKing', 'dk-1603', 'DoorKing 1603 Barrier with Auto Spike Option', 'Barrier', 'Commercial / High Security', null, { src: SRC + dkU + 'Doorking-1603-Barrier-Gate-Operators-Auto-Spike-Systems.html' });

  // OSCO / Linear
  var oU = 'OSCO-Gate-Openers/';
  op('OSCO / Linear', 'osco-slc-slr-sld', 'OSCO SLC / SLR / SLD Residential Slide Operator', 'Slide', 'Residential', IMG + 'OSCO_Slide_Gate_Openers_SL_Series_Gate_Motor-143x174.jpg', { src: SRC + oU + 'Osco_GateOpener_ResidentialSlide_SLC_SLR_SLD_GateOperator_ElectricSolar_Automatic-Electronic.html' });
  op('OSCO / Linear', 'osco-hslg', 'OSCO HSLG Heavy Duty Slide Operator', 'Slide', 'Commercial', null, { src: SRC + oU + 'Osco-Linear_HSLG_Sliding-Gate-Commercial_Heavy-Duty-Gate-Operators.html' });
  op('OSCO / Linear', 'osco-vs-gslg', 'OSCO VS-GSLG Super Heavy Duty Slide Operator', 'Slide', 'Industrial', IMG + 'OSCO-LINEAR_Super_Heavy_Duty_Commercial_Industrial_Gate_Openers_and_Operators_Model_VS-GSLG-150x195.jpg', { src: SRC + oU + 'OSCO-Linear-VS-GSLG_Heavy-Duty-Slide-Gate-Openers-Commercial-Operator-Sliding-Industrial.html' });
  op('OSCO / Linear', 'osco-gslg-a', 'OSCO GSLG-A Industrial Slide Operator', 'Slide', 'Industrial', null, { src: SRC + oU + 'OSCO_Linear_GSLG-A_Slide_Heavy-Duty_Industrial-Commercial_Opener-Operator.html' });
  op('OSCO / Linear', 'osco-swc-swd-swr', 'OSCO SWC / SWD / SWR Swing Operators', 'Swing', 'Residential', IMG + 'OSCO_SWC-SWD-SWR_Swing_Gate_Opener_Residential_Gate_Motor-165x165.jpg', { src: SRC + oU + 'OSCO-SWC-SWD-SWR-211-221-Swing-Gate-Opener-Operator-Solar-Electric-Electronic-Automatic.html' });
  op('OSCO / Linear', 'osco-swg', 'OSCO SWG Commercial Swing Operator', 'Swing', 'Commercial', IMG + 'OSCO_Commercial_Industrial_Cabinet_Style_Gate_Opener_SWG-150x195.jpg', { src: SRC + oU + 'OSCO-SWG-Serie-Commercial-Gate-Opener-Swing-Operator-Heavy-Duty-Gate-Motor.html' });
  op('OSCO / Linear', 'osco-vs-gswg', 'OSCO VS-GSWG Heavy Duty Swing Operator', 'Swing', 'Commercial', null, { src: SRC + oU + 'OSCO-VS-GSWG-Gate-Opener-Commercial-Swing-Heavy-Duty_GateOperator-Motor.html' });
  op('OSCO / Linear', 'osco-bgu', 'OSCO BGU Barrier Gate Operator', 'Barrier', 'Commercial', IMG + 'OSCO_Barrier_Gate_Opener_10ft_-_12ft_-_14ft_Arm_BGU-D-105x201.jpg', { src: SRC + oU + 'OSCO-Barrier-Parking-Access-Control-Lot-Security-Safety-Traffic-Vehicle-Opener-Operator-Car-Equipment-BGU-BGUD.html' });
  op('OSCO / Linear', 'osco-bgus', 'OSCO BGUS Security Barrier Gate', 'Barrier', 'Commercial / High Security', null, { src: SRC + oU + 'OSCO-Security-Barrier-Gate-Equipment-Control-Access-Traffic-Parking-Openers-Operators-Vehicle-Car-BGUS.html' });
  op('OSCO / Linear', 'osco-sg-barrier', 'OSCO SG Dual Wishbone Barrier Arm', 'Barrier', 'Commercial', null, { src: SRC + oU + 'OSCO-Barrier-SG-Traffic-Parking-Lot-Arm-Opener-DoubleArm-Gate-Barrier-AccessControl.html' });

  // LiftMaster
  var lmU = 'LiftMaster/';
  op('LiftMaster', 'lm-mega-slide', 'LiftMaster MEGA SLIDE DC Slide Operator', 'Slide', 'Residential / Medium Duty', IMG + 'Liftmaster_Mega_Slide_Gate_Opener_Operator_Residential_Medium_Duty-134x175.png', { src: SRC + lmU + 'Liftmaster-MegaSlide-MSLDCBB3-Gate-Operators-Residential-Slide-Door-Openers.html' });
  op('LiftMaster', 'lm-mega-slide-x', 'LiftMaster MEGA SLIDE-X Slide Operator', 'Slide', 'Commercial', null, { src: SRC + lmU + 'LiftMaster-MegaSlide-X-MSLXDCBB3-Openers-Commercial-Slide-Gate-Door-Operators.html' });
  op('LiftMaster', 'lm-sl930', 'LiftMaster SL930 Heavy Duty DC Slide Operator', 'Slide', 'Commercial', null, { src: SRC + lmU + 'LiftMaster-SL930-Slide-Gate-Openers-Commercial-Sliding-Automatic-Door-Operators.html' });
  op('LiftMaster', 'lm-sl595', 'LiftMaster SL595 Extreme Heavy Duty Slide Operator', 'Slide', 'Industrial', null, { src: SRC + lmU + 'LiftMaster-SL595-Electric-Gate-Operators-Industrial-Extreme-Heavy-Duty-Door-Openers.html' });
  op('LiftMaster', 'lm-sl585', 'LiftMaster SL585 Industrial Slide Operator', 'Slide', 'Industrial', null, { src: SRC + lmU + 'LiftMaster-SL585-Gate-Door-Openers-Industrial-Commercial-Slide-Gate-Operators.html' });
  op('LiftMaster', 'lm-sl575', 'LiftMaster SL575 Heavy Duty Slide Operator', 'Slide', 'Commercial', null, { src: SRC + lmU + 'LiftMaster-SL575-Commercial-Gate-Operators-Heavy-Duty-Sliding-Door-Openers.html' });
  op('LiftMaster', 'lm-hs670', 'LiftMaster HS670 Hydraulic Slide Operator (1–2 HP)', 'Slide', 'Commercial / Industrial', null, { src: SRC + lmU + 'LiftMaster-HS670-Slide-Gate-Operators-Heavy-Duty-1hp-2hp-Sliding-Hydraulic-Openers.html' });
  op('LiftMaster', 'lm-rsl12v', 'LiftMaster RSL12V DC Slide Operator (Battery Backup)', 'Slide', 'Residential', null, { src: SRC + lmU + 'LIFTMASTER-RSL12V-DC-Powered-SlideGateOperator.html' });
  op('LiftMaster', 'lm-la400', 'LiftMaster LA400 Residential DC Swing Actuator', 'Swing', 'Residential', null, { src: SRC + lmU + 'LiftMaster-LA400-Gate-Opener-Automatic-Swing-Door-Actuator-Arm-Operators.html' });
  op('LiftMaster', 'lm-sw425', 'LiftMaster SW425 Residential DC Swing Operator', 'Swing', 'Residential', IMG + 'Liftmaster_SW425_Residential_DC_Swing_Gate_Opener_Operator-168x153.png', { src: SRC + lmU + 'LiftMaster-SW425-Openers-Residential-Automatic-Driveway-Swinging-Gate-Operators.html' });
  op('LiftMaster', 'lm-mega-swing', 'LiftMaster MEGA SWING Commercial Swing Operator', 'Swing', 'Commercial', null, { src: SRC + lmU + 'Liftmaster-MegaSwing-MSWDCBB-Door-Openers-Automatic-Commercial-Gate-Operators.html' });
  op('LiftMaster', 'lm-sw470', 'LiftMaster SW470 Commercial Swing Operator', 'Swing', 'Commercial', null, { src: SRC + lmU + 'LiftMaster-SW470-Commercial-Residential-Openers-Swing-Electric-Gate-Operators.html' });
  op('LiftMaster', 'lm-sw490', 'LiftMaster SW490-75 Industrial Swing Operator', 'Swing', 'Industrial', null, { src: SRC + lmU + 'Liftmaster-SW490-Gate-Operators-Industrial-Commercial-Swinging-Gate-Openers.html' });
  op('LiftMaster', 'lm-mega-arm', 'LiftMaster MEGA ARM Barrier Operator (Pedestal)', 'Barrier', 'Commercial', IMG + 'Liftmaster_Mega_Arm_-Mega_Arm_Tower_Barrier_Gate_Operator_Opener-2-167x167.png', { src: SRC + lmU + 'LiftMaster-MegaArm-MADCBB-Barrier-Parking-Gate-Openers-Commercial-Operators.html' });
  op('LiftMaster', 'lm-mega-arm-tower', 'LiftMaster MEGA ARM TOWER Barrier Operator', 'Barrier', 'High Traffic Commercial', null, { src: SRC + lmU + 'LiftMaster-MegaArmTower-MADCBB3-Barrier-Gate-Openers-High-Traffic-Commercial-Operators.html' });
  op('LiftMaster', 'lm-bg770', 'LiftMaster BG770 Arm Barrier Operator', 'Barrier', 'Commercial / Parking', null, { src: SRC + lmU + 'LiftMaster-BG770-Arm-Barrier-Openers-Parking-Barrier-Operators.html' });
  op('LiftMaster', 'lm-bg790', 'LiftMaster BG790 Barrier Gate Operator', 'Barrier', 'Commercial / Parking', null, { src: SRC + lmU + 'LiftMaster-BG790-Barrier-Gate-Openers-Commercial-Parking-Gate-Operators.html' });

  // SEA
  var sU = 'SEA_Gate_Operators/';
  op('SEA', 'sea-orion', 'SEA ORION Chain Sliding Operator', 'Slide', 'Commercial', IMG + 'SEA_Orion_Rack_Sliding_Gate_Operator-135x150.png', { src: SRC + sU + 'SEA_Orion_Chain_Sliding_Gate-Operator.html' });
  op('SEA', 'sea-taurus', 'SEA TAURUS Residential Slide Operator (Chain / Rack)', 'Slide', 'Residential', null, { src: SRC + sU + 'SEA_Taurus_Chain_Residential_Sliding_Gate_Operator.html' });
  op('SEA', 'sea-alpha', 'SEA ALPHA Swing Gate Operator', 'Swing', 'Residential', null, { src: SRC + sU + 'SEA_Alpha_Swing_Gate_Openers_Operators_Residential_AutoMatic.html' });
  op('SEA', 'sea-compact-1600', 'SEA COMPACT 1600 Underground Operator', 'Underground', 'Commercial', null, { sub: 'swing-operators', src: SRC + sU + 'SEA_1600_Compact_UnderGround_Gate_Operator.html' });
  op('SEA', 'sea-compact-200', 'SEA COMPACT 200 Underground Swing Operator', 'Underground', 'Residential / Commercial', IMG + 'SEA_Underground_Compact_200_Swing_Opener-165x165.png', { sub: 'swing-operators', src: SRC + 'SEA_Gate_Opener_Mini-Half-Full-Tank_Compact-200-400-800_Vela_Industrial_Barrier_Orion_Taurus_Lepus_Chain_Rack.html' });
  op('SEA', 'sea-vela', 'SEA VELA Barrier Gate', 'Barrier', 'Commercial', IMG + 'Vela_Industrial_Gate_Barrier-150x120.jpg', { src: SRC + 'SEA_Gate_Opener_Mini-Half-Full-Tank_Compact-200-400-800_Vela_Industrial_Barrier_Orion_Taurus_Lepus_Chain_Rack.html' });
  op('SEA', 'sea-vela-industrial', 'SEA VELA Industrial Barrier Arm', 'Barrier', 'Industrial', null, { src: SRC + sU + 'SEA_Vela_Industrial_Arm_Barrier_Gate_Opener_Traffic_Control_Access_Gate_Barrier.html' });

  // FAAC
  var fU = 'FAAC-Gate-Openers-Operators/';
  var faacs = [
    ['faac-390', 'FAAC 390 24V Electromechanical Swing Operator', 'Swing', 'Residential', IMG + 'FAAC_390_Low_Voltage-174x118.jpg', 'FAAC-390-Low-Voltage-ElectroMechanical-Swing-Gate-Operators.html'],
    ['faac-415', 'FAAC 415 Swing Operator (115 VAC / 24 VDC)', 'Swing', 'Residential', null, 'FAAC-SwingGate-Residential-Electromechanical-415-425D-412-Hydroulic-Operators.html'],
    ['faac-400', 'FAAC 400 Heavy Duty Hydraulic Swing Operator', 'Swing', 'Commercial', null, 'FAAC-400-Swing-Gate-Opener-Hydraulic-Commercial-Residential-Operator.html'],
    ['faac-402', 'FAAC 402 Hydraulic Swing Operator', 'Swing', 'Commercial', null, 'FAAC-402-Automatic-Hydraulic-Swing-Gate-Operators.html'],
    ['faac-412', 'FAAC 412 Electromechanical Swing Operator', 'Swing', 'Residential', null, 'FAAC-412-ElectroMechanical-Automatic-Swing-Gate-Operators.html'],
    ['faac-422', 'FAAC 422 Hydraulic Swing Operator', 'Swing', 'Residential', null, 'FAAC-422-Electric-Residential-Hydraulic-Swing-Gate-Openers.html'],
    ['faac-750', 'FAAC 750 In-Ground Hydraulic Swing Operator', 'Underground', 'Residential', IMG + 'FAAC_750_Swing-165x150.jpg', 'FAAC-750-Residential-InGround-Hydraulic-Swing-Gate-Operators.html'],
    ['faac-760', 'FAAC 760 In-Ground Heavy Duty Swing Operator', 'Underground', 'Commercial', null, 'FAAC-760-Inground-Hydraulic-Heavy-Duty-Swing-Gate-Openers.html'],
    ['faac-770', 'FAAC 770 Underground Electromechanical Swing Operator', 'Underground', 'Residential', null, 'FAAC-770-UnderGround-ElectroMechanical-Swing-Gate-Operators.html'],
    ['faac-s418', 'FAAC S418 24V Electromechanical Swing Operator', 'Swing', 'Residential', null, 'FAAC-S418-24VElectro-Mechanical-SwingGateOperator.html'],
    ['faac-s450h', 'FAAC S450H Hydraulic Swing Operator', 'Swing', 'Commercial', null, 'FAAC-S450H-Hydraulic-SwingGateOperator.html'],
    ['faac-s800h', 'FAAC S800H Underground Hydraulic Operator (24V)', 'Underground', 'Commercial', null, 'FAAC-S800H-Underground-Hydraulic24V-Swing.html'],
    ['faac-dsw2000', 'FAAC DSW2000 Swing Gate Operator', 'Swing', 'Residential', null, 'FAAC-DSW2000-SwingGateOperator.html'],
    ['faac-740', 'FAAC 740 24V Residential Slide Operator', 'Slide', 'Residential', null, 'FAAC-740-Residential-Low-Voltage-Slide-Gate-Operators.html'],
    ['faac-746', 'FAAC 746 Light Commercial Slide Operator', 'Slide', 'Commercial', IMG + 'FAAC_746_Slide-150x195.jpg', 'FAAC-746-Light-Commercial-Electric-Slide-Gate-Openers.html'],
    ['faac-820', 'FAAC 820 Commercial Slide Operator', 'Slide', 'Commercial', null, 'FAAC-820-Automatic-Commercial-Sliding-Gate-Operators.html'],
    ['faac-844', 'FAAC 844 Commercial / Industrial Slide Operator', 'Slide', 'Industrial', null, 'FAAC-844-Commercial-Industrial-Sliding-Gate-Openers.html'],
    ['faac-860', 'FAAC 860 Industrial Slide Operator', 'Slide', 'Industrial', null, 'FAAC-860-Electric-Industrial-Commercial-Slide-Gate-Operators.html'],
    ['faac-dsl2000', 'FAAC DSL2000 Sliding Gate Operator', 'Slide', 'Residential', null, 'FAAC-DSL2000-Slidinggateopener.html'],
    ['faac-615', 'FAAC 615 Hydraulic Arm Barrier (Residential)', 'Barrier', 'Residential', null, 'FAAC-615-Hydraulic-Arm-Barrier-Residential-Gate-Operators.html'],
    ['faac-620', 'FAAC 620 Hydraulic Barrier Operator', 'Barrier', 'Commercial', IMG + 'FAAC_620_Barrier-90x120.jpg', 'FAAC-620-Arm-Barrier-Hydraulic-Commercial-Gate-Openers.html'],
    ['faac-640', 'FAAC 640 Hydraulic Barrier (Light Traffic)', 'Barrier', 'Commercial', null, 'FAAC-640-Commercial-Arm-Barrier-Light-Traffic-Control-Openers.html']
  ];
  faacs.forEach(function (r) { op('FAAC', r[0], r[1], r[2], r[3], r[4], { src: SRC + fU + r[5] }); });

  // Apollo
  var aU = 'ApolloGateOpeners/';
  var apollos = [
    ['apollo-1500', 'Apollo 1500 Swing Gate Operator', 'Swing', 'Residential', IMG + 'Apollo_1500_and_1550ETL_Swing_Gate_Operator-180x150.png', 'Apollo-1500-Swing-Gate-Operators.html'],
    ['apollo-1550etl', 'Apollo 1550ETL Swing Gate Operator', 'Swing', 'Residential', null, 'Apollo-1550ETL-Swing-Gate-Openers.html'],
    ['apollo-1600', 'Apollo 1600 Automatic Swing Operator', 'Swing', 'Residential', null, 'Apollo-1600-Automatic-Swinging-Gate-Operators.html'],
    ['apollo-1650etl', 'Apollo 1650ETL Electric Swing Operator', 'Swing', 'Residential', null, 'Apollo-1650ETL-Electric-Swing-Gate-Openers.html'],
    ['apollo-3500etl', 'Apollo 3500ETL Articulating Arm Swing Operator', 'Swing', 'Residential', null, 'Apollo-3500-ETL-Articulating-Arm-Swing-Gate-Openers.html'],
    ['apollo-3600etl', 'Apollo 3600ETL Dual Articulating Arm Swing Operator', 'Swing', 'Residential', null, 'Apollo-3600ETL-Dual-Articulating-Arm-Swing-Gate-Operators.html'],
    ['apollo-nt-t5', 'Apollo NT-T5ETL TOONA 5 12V Swing Operator', 'Swing', 'Residential', null, 'Apollo-NT-T5-12V-Swing-GateOpener.html'],
    ['apollo-nt-t7', 'Apollo NT-T7ETL TOONA 7 12V Swing Operator', 'Swing', 'Residential', null, 'Apollo-NT-T7-12V-Swing-GateOpener.html'],
    ['apollo-nt-h12', 'Apollo NT-H12ETL HYPPO 12V Swing Operator', 'Swing', 'Residential', null, 'Apollo-NT-H12-12V-Swing-GateOpener.html'],
    ['apollo-nt-m12', 'Apollo NT-M12ETL METRO Underground Operator', 'Underground', 'Residential', null, 'Apollo-NT-M12-12V-Underground-Swing-GateOpener.html'],
    ['apollo-7000etl', 'Apollo 7000ETL Residential Slide Operator', 'Slide', 'Residential', null, 'Apollo-7000ETL-Residential-Slide-Gate-Operators.html'],
    ['apollo-7100etl', 'Apollo 7100ETL Residential Slide Operator', 'Slide', 'Residential', IMG + 'Apollo_7100_ETL_Slide_Residential_Medium_Commercial_Slide_Gate_Opener-180x165.png', 'Apollo-7100ETL-Residential-Slide-Gate-Openers.html'],
    ['apollo-7200etl', 'Apollo 7200ETL Commercial Slide Operator', 'Slide', 'Commercial', null, 'Apollo-7200ETL-Commercial-Sliding-Gate-Operators.html'],
    ['apollo-7300etl', 'Apollo 7300ETL Commercial Slide Operator', 'Slide', 'Commercial', null, 'Apollo-7300ETL-Commercial-Sliding-Gate-Gate-Openers.html'],
    ['apollo-7500etl', 'Apollo 7500ETL Residential / Commercial Slide Operator', 'Slide', 'Residential / Commercial', null, 'Apollo-7500ETL-Residential-Commercial-Slide-Gate-Openers.html'],
    ['apollo-ba12', 'Apollo BA12 Barrier Arm Operator', 'Barrier', 'Commercial', IMG + 'Apollo_BA12_Barrier_Arm_Operators-165x135.png', 'Apollo-BA12-Barrier-Arm-Operator.html'],
    ['apollo-signo', 'Apollo NS-SIGNO4ETL Barrier Arm Operator', 'Barrier', 'Commercial', null, 'Apollo-NiceSigno3-4-6-Barrier-Arm-Operator.html']
  ];
  apollos.forEach(function (r) { op('Apollo', r[0], r[1], r[2], r[3], r[4], { src: SRC + aU + r[5] }); });

  // HySecurity
  var hs = SRC + 'HySecurity-GateOperators.html';
  op('HySecurity', 'hysec-swingsmart', 'HySecurity SwingSmart DC Swing Operator', 'Swing', 'Commercial', IMG + 'HySecurity-SwingSmart-Swing-Gate-Operator-191x229.jpg', { src: hs });
  op('HySecurity', 'hysec-slidedriver', 'HySecurity SlideDriver Slide Operator', 'Slide', 'Commercial / Industrial', IMG + 'HySecurity-SlideDriver-230x219.jpg', { src: hs });
  op('HySecurity', 'hysec-slidewinder', 'HySecurity SlideWinder Slide Operator', 'Slide', 'Industrial', IMG + 'SlideWinder-158x318.jpg', { src: hs });
  op('HySecurity', 'hysec-swingriser', 'HySecurity SwingRiser Swing Operator', 'Swing', 'Industrial', IMG + 'HySecurity-SwingRiser-239x284.jpg', { src: hs });
  op('HySecurity', 'hysec-hydralift', 'HySecurity HydraLift Vertical Lift Gate Operator', 'Barrier', 'Industrial', IMG + 'Hy-Security-HydraLift-Gate-333x171.jpg', { src: hs });
  op('HySecurity', 'hysec-strongarm', 'HySecurity StrongArm Barrier Operator', 'Barrier', 'Commercial', IMG + 'Hysecurity-StrongArm-Barrier-Gate-Operator-516x110.jpg', { src: hs });

  // Eagle
  var eU = 'Eagle_Gate_Openers/';
  var eagles = [
    ['eagle-1', 'Eagle 1 Residential Slide Operator', 'Slide', 'Residential', null, 'Eagle1_EagleoneGateOpener_EagleResidentialOpener_SlideOperator.html'],
    ['eagle-2', 'Eagle 2 Residential Swing Operator', 'Swing', 'Residential', null, 'Eagle2-EagleTwo-Eagle-Residential-Gate-Opener-Operator-Swing.html'],
    ['eagle-100', 'Eagle 100 Residential Swing Operator', 'Swing', 'Residential', null, 'Gate_Opener_Eagle_Residential_Swing_100_Residential_Operator.html'],
    ['eagle-1000', 'Eagle 1000 Residential Slide Operator', 'Slide', 'Residential', null, 'Eagle_1000_Sliding_Gate_Opener_Residential_Operator.html'],
    ['eagle-200', 'Eagle 200 Commercial Swing Operator', 'Swing', 'Commercial', null, 'Eagle_200_Commercial_Swing_Gate_Openers.html'],
    ['eagle-200-1hp', 'Eagle 200 1HP Commercial Swing Operator', 'Swing', 'Commercial', null, 'Commercial_Swing_Gate_Opener_Eagle_200-1HP_Automatic_Operator.html'],
    ['eagle-200dm', 'Eagle 200DM Commercial Swing Operator', 'Swing', 'Commercial', null, 'Eagle_Gate_Opener_Swing_Commercial_200DM_Operator.html'],
    ['eagle-2000', 'Eagle 2000 Commercial Slide Operator', 'Slide', 'Commercial', null, 'Eagle_Commercial_Sliding_Gate_Opener_Eagle_2000.html'],
    ['eagle-2000-1hp', 'Eagle 2000 1HP Slide Operator', 'Slide', 'Commercial', null, 'Eagle_Commercia_20001HP_Gate_Openers_Sliding_Driveway_Gate_Opener.html'],
    ['eagle-2000dm', 'Eagle 2000DM Commercial Slide Operator', 'Slide', 'Commercial', null, 'Eagle_Gate_Openers_2000DM_Sliding_Commercial_Electronic_Operator.html'],
    ['eagle-2000apt-1hp', 'Eagle 2000 APT 1HP Fail-Secure Slide Operator', 'Slide', 'Commercial', null, 'Eagle-2000-APT-1HP-Heavy-Duty-Commercial-Fail-Secure-Slide-Gate-Operators.html'],
    ['eagle-2000apt-15hp', 'Eagle 2000 APT 1.5HP Dual Slide Operator', 'Slide', 'Commercial', null, 'Eagle-2000-APT-1-5HP-Dual-Commercial-Fail-Secure-Slide-Gate-Openers.html'],
    ['eagle-2000apt-dm', 'Eagle 2000 APT DM High Traffic Slide Operator', 'Slide', 'Commercial', null, 'Eagle-2000-APT-DM-Slide-Gate-Operators-High-Traffic-Dual-1hp-Commercial.html'],
    ['eagle-battery', 'Eagle Battery Back-Up', 'Accessory', 'All classes', null, 'Eagle-Battery-Back-Up.html']
  ];
  eagles.forEach(function (r) { op('Eagle', r[0], r[1], r[2], r[3], r[4], { src: SRC + eU + r[5], sub: r[2] === 'Accessory' ? 'operator-accessories' : undefined }); });

  // Elite
  var elU = 'Elite_Gate_Openers/';
  var elites = [
    ['elite-roboslide', 'Elite RoboSlide Solar Residential Slide Operator', 'Slide', 'Residential', IMG + 'Elite_ROBO-Residential-Slide_Solar_Gate_Opener-138x165.jpg', 'Robo_Slide_Elite_Gate_Opener_Solar_Residential_Sliding_Operator.html'],
    ['elite-roboswing', 'Elite RoboSwing Solar Residential Swing Operator', 'Swing', 'Residential', IMG + 'Elite-ROBO_900_Residential_Swing_Solar_Gate_Opener-180x210.jpg', 'Gate_Opener_Elite_Swing_900_Solar_Residential_Operator.html'],
    ['elite-200ul', 'Elite 200UL Commercial Swing Operator', 'Swing', 'Commercial', null, 'Elite_200UL_Swing_Gate_Opener_Operator_Commercial.html'],
    ['elite-200-1hp', 'Elite 200 1HP Commercial Swing Operator', 'Swing', 'Commercial', null, 'Elite_2001HP_Swing_Gate_OPener_Commercial_Operator_Heavy_Gates.html'],
    ['elite-csw200dm', 'Elite CSW200DM High Traffic Swing Operator', 'Swing', 'Commercial', null, 'Elite_Gate_Opener_CSW200DM_Swing_Commercial_High_Traffic_Operator.html'],
    ['elite-3000ul', 'Elite 3000UL Commercial Slide Operator', 'Slide', 'Commercial', null, 'Elite_Gate_Opener_3000UL_Commercial_Operator_Slide_Automatic.html'],
    ['elite-3000ul-1hp', 'Elite 3000 UL 1HP Commercial Slide Operator', 'Slide', 'Commercial', null, 'Elite_3000_UL_1HP_Commercial_Sliding_Gate_Opener.html'],
    ['elite-3000dm-sl', 'Elite 3000DM SL Heavy Traffic Slide Operator', 'Slide', 'Commercial / Community', null, 'Elite_3000DM_SL_Heavy_Traffic_Community_Gate_Operator_Sliding_.html'],
    ['elite-hercules', 'Elite Hercules Underground Garage / Gate Operator', 'Overhead', 'Commercial', null, 'Hercules_Elite_UnderGround_Garage_Door_Gate_Opener_Operator_10ft.html', 'overhead-operators', ['Underground parking gates', 'Garage doors']],
    ['elite-battery', 'Elite Gate Operator Back-Up Battery', 'Accessory', 'All classes', IMG + 'Elite_Gate_Operator_Back_Up_Battery-135x135.png', null, 'operator-accessories', null]
  ];
  elites.forEach(function (r) { op('Elite', r[0], r[1], r[2], r[3], r[4], { src: r[5] ? SRC + elU + r[5] : SRC + 'EliteGateOpeners_EliteGateOperators_200CSW-1HP-DM_3000UL-1HP-DM_RoboSlide900_RoboSwing_EliteSolar_Hercules.html', sub: r[6] || undefined, apps: r[7] || undefined }); });

  // Viking
  var vU = 'Viking-Access-Openers/';
  op('Viking', 'viking-k2', 'Viking K-2 Slide Gate Operator', 'Slide', 'Residential', null, { src: SRC + vU + 'VikingAccess-K2Slide-SlidingOpener-GateOperator.html' });
  op('Viking', 'viking-t21', 'Viking T-21 Swing Gate Operator', 'Swing', 'Residential / Commercial', IMG + 'Viking_T-21_Swing_Gate_Operator-188x243.jpg', { src: SRC + 'VikingAccess-Gatecontrol-Gateopeners-GateOperators-Barriergate.html' });
  op('Viking', 'viking-h10', 'Viking H10 Residential / Commercial Slide Operator', 'Slide', 'Residential / Commercial', IMG + 'Viking_Residential_Commercial_Slide_Gate_Opener_H10-2008-194x268.jpg', { src: SRC + 'VikingAccess-Gatecontrol-Gateopeners-GateOperators-Barriergate.html' });
  op('Viking', 'viking-b12', 'Viking B12 Traffic Barrier Gate', 'Barrier', 'Commercial', null, { src: SRC + vU + 'VikingAccess-TrafficBarrier-Parkinglot-GateBarrier-B12.html' });

  // Allstar
  var alU = 'AllStar-Linear-Operators/';
  op('Allstar', 'allstar-gs1000hs', 'Allstar GS1000HS LPX Leader Plus Operator', 'Swing', 'Residential', null, { src: SRC + 'AllstarGateOpener-GS1000HS-LPXLeaderPlus-TowerPlus-GS6000-400-PowerSupply.html' });
  op('Allstar', 'allstar-rsx1000', 'Allstar RSX1000 Tower Plus 1/2 HP Slide Operator', 'Slide', 'Residential', null, { src: SRC + alU + 'Allstar-Tower-Plus-RS1000-Slide-Gate-Operators-Residential-Openers.html' });
  op('Allstar', 'allstar-gs6000', 'Allstar GS6000-400 Power Supply', 'Accessory', 'All classes', null, { src: SRC + 'AllstarGateOpener-GS1000HS-LPXLeaderPlus-TowerPlus-GS6000-400-PowerSupply.html', sub: 'operator-accessories' });
})(window.AURUM_DATA);
