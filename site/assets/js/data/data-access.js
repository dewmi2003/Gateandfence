/* AURUM GATES — catalog data (part 3: access control, accessories, remotes, boards, manufacturers, resources, FAQ, policies) */
(function (D) {
  'use strict';
  var IMG = 'https://www.gatesnfences.com/sitebuilder/images/';
  var IMG2 = 'https://www.gatesnfences.com/images/';
  var SRC = 'https://www.gatesnfences.com/';
  var P = D.products;
  var acU = 'Gate_Access_Control_Accesories/';

  function ac(id, name, sub, img, opts) {
    opts = opts || {};
    P.push({
      id: id, name: name, cat: 'access-control', sub: sub, collection: opts.collection || 'Access Control',
      material: opts.material || 'Access control device', style: 'Access Control',
      image: img || null, gallery: img ? [img] : [], manufacturer: opts.manufacturer || null,
      short: opts.short || '', description: opts.desc || '',
      features: opts.features || ['Professional-grade access control', 'Residential and commercial variants', 'Installation guidance available'],
      applications: opts.apps || ['Driveway gates', 'Community entries', 'Commercial doors'],
      pricingType: 'quote', availability: 'Call to confirm stock',
      tags: ['access control', sub].concat(opts.tags || []), src: opts.src || SRC + acU + 'Linear_Remote_Control_Card_Reader_Phone_Entry_Commecial_Residential_Wireless.html'
    });
  }

  /* Telephone entry */
  ac('sentex-infinity-m', 'Sentex Infinity M Telephone Entry System', 'telephone-entry', IMG + 'Sentex_Infinity_M_Office_Building_or_Gated_Residential_Community_Telephone_Entry_System_with_2-Line_Display_of_20_Channel_Each-105x120.png', { manufacturer: 'Sentex', short: 'Telephone entry for office buildings and gated communities with 2-line display of 20 channels each.', desc: 'Telephone entry system for office buildings or gated residential communities, with a 2-line display of 20 channels each.', apps: ['Gated communities', 'Office buildings'] });
  ac('sentex-infinity-b', 'Sentex Infinity B Telephone Entry Unit', 'telephone-entry', IMG + 'Sentex_Infintiy_B_Commercial_or_Industrial_Access_Control_Telephone_Entry_Unit2-120x105.png', { manufacturer: 'Sentex', short: 'Commercial / industrial telephone entry unit.', apps: ['Commercial', 'Industrial'] });
  ac('linear-ae100', 'Linear AE-100 Telephone Entry (One Door)', 'telephone-entry', IMG + 'Linear_AE_100_Commercial_Telephone_Entry_System_-_One_Door-90x105.png', { manufacturer: 'Linear', short: 'Commercial telephone entry system for one door.' });
  ac('linear-ae500', 'Linear AE-500 Telephone Entry (Two Doors)', 'telephone-entry', IMG + 'Linear_AE_500_Commercial_Telephone_Entry_System_-_Two_Doors-90x105.png', { manufacturer: 'Linear', short: 'Commercial telephone entry system for two doors.' });
  ac('linear-ae1000plus', 'Linear AE1000Plus Telephone Entry with Access Control', 'telephone-entry', IMG + 'Linear_AE1000Plus_Commercial_Telephone_Entry_System_with_Access_Control-Four_Doors-105x105.jpg', { manufacturer: 'Linear', short: 'Commercial telephone entry with access control for up to four doors.' });
  ac('linear-ae2000plus', 'Linear AE2000Plus Telephone Entry with Access Control', 'telephone-entry', IMG + 'Linear_AE2000Plus_Commercial_Telephone_Entry_System_with_Access_Control-Four_Doors-90x105.png', { manufacturer: 'Linear', short: 'Four-door commercial telephone entry with integrated access control.' });
  ac('linear-re1n', 'Linear RE-1N Residential Telephone Entry', 'telephone-entry', IMG + 'Linear_RE_1N_Residential_Telephone_Entry_System_Nicekl-60x90.jpg', { manufacturer: 'Linear', short: 'Residential telephone entry system.', apps: ['Residential driveways'] });
  ac('linear-re2ss', 'Linear RE-2SS Residential Telephone Entry (Nickel)', 'telephone-entry', IMG + 'Linear_RE_2SS_Residential_Telephone_Entry_System_Nickel-150x75.png', { manufacturer: 'Linear', short: 'Residential telephone entry in nickel finish.', apps: ['Residential driveways'] });
  ac('aas-phonelink', 'AAS PhoneLink 16-2050 Telephone Entry System', 'telephone-entry', IMG + 'Amercian_Acces_System_AAS_16-2050_PhoneLink_Telephone_Entry_System-150x120.png', { manufacturer: 'American Access Systems', short: 'PhoneLink telephone entry from American Access Systems.' });
  ac('aas-phoneaire', 'AAS PhoneAire Wireless Telephone Entry', 'telephone-entry', IMG + 'Amercian_Acces_System_AAS_PhoneAire-170x120.jpg', { manufacturer: 'American Access Systems', short: 'Wireless telephone entry with receiver/transmitter.', gallery: [IMG + 'Amercian_Acces_System_AAS_PhoneAire-170x120.jpg', IMG + 'PhoneAire-Receiver-Transmiter-WirelessTelephone_Entry_System-150x120.jpg'] });
  ac('elite-dial-code', 'Elite Dial-Code Telephone Entry System', 'telephone-entry', IMG + 'Elite_Dial_Code_Telephone_Entry_System-103x125.png', { manufacturer: 'Elite', short: 'Telephone entry with dial-code access.' });
  ac('elite-el2000', 'Elite EL2000 Telephone Entry System', 'telephone-entry', IMG + 'Elite_EL2000_Telephone_Entry_System_for_Commercial_Applications_and_Gated_Communities_3_Colors-270x120.jpg', { manufacturer: 'Elite', short: 'Telephone entry for commercial applications and gated communities, in 3 colors.', apps: ['Gated communities', 'Commercial'] });
  ac('elite-icon26', 'Elite Icon 26 Multi-Tenant Access System', 'telephone-entry', IMG + 'Elite_Icon_26_Telephone_Entry_Advanced_Multi-Tenant_Access_Control_System-123x125.png', { manufacturer: 'Elite', short: 'Advanced multi-tenant telephone entry and access control.' });
  ac('elite-el25', 'Elite EL25 Telephone Entry System', 'telephone-entry', IMG + 'Elite_EL25_Residential_and_Commercial_Telephone_Entry_System2-165x124.png', { manufacturer: 'Elite', short: 'Residential and commercial telephone entry.' });
  ac('ses-entry', 'Select Engineered Systems (SES) Entry Systems', 'telephone-entry', null, { manufacturer: 'Select Engineering', short: 'SES telephone entry models — call for available configurations.', desc: 'Select Engineered Systems telephone entry units are available in multiple model configurations. Contact us with your property details for a recommendation.' });
  ac('doorking-phone-entry', 'DoorKing Telephone Entry & Keypad Systems', 'telephone-entry', null, { manufacturer: 'DoorKing', short: 'DoorKing telephone access control entry systems and security keypads.', src: SRC + 'Doorking-TelePhone-Access-Control-Entry-Systems-Keypads-Security-Devices.html' });
  ac('bft-cellular', 'BFT Cellular Phone Entry System', 'telephone-entry', null, { manufacturer: 'BFT', short: 'Cellular phone entry from BFT.', src: SRC + 'Access-Control-TelePhone-Entry-Intercom-Systems-Keypads/BFT-Cellular-Phone-Entry-System.html' });

  /* Intercom */
  ac('gto-wireless-intercom', 'GTO Wireless Intercom System', 'intercom', IMG + 'GTO_Wireless_Intercom_System-227x116.jpg', { manufacturer: 'GTO', short: 'Wireless intercom for gate and door communication.' });
  ac('aiphone-jk', 'Aiphone JK Intercom Models', 'intercom', null, { manufacturer: 'Aiphone', short: 'Aiphone JK-series intercom systems.', src: SRC + 'Access-Control-TelePhone-Entry-Intercom-Systems-Keypads/Aiphone-intercome-JKmodels.html' });

  /* Keypads */
  ac('dk-1504', 'DoorKing 1504 Surface Mount Digital Keypad', 'keypads', IMG + 'Doorking_1504_Surface_Mount_Exterior_Digital_Keypad2-135x90.jpg', { manufacturer: 'DoorKing', short: 'Exterior surface-mount digital keypad.' });
  ac('dk-1810', 'DoorKing 1810 Surface Mount Keypad', 'keypads', IMG + 'Doorking_1810_Surface_Mount-105x105.png', { manufacturer: 'DoorKing', short: 'Surface mount access keypad.' });
  ac('dk-1802epd', 'DoorKing 1802-EPD Surface Mount Keypad', 'keypads', IMG + 'Doorking_1802-EPD_Surface_Mount-105x105.png', { manufacturer: 'DoorKing', short: 'Surface mount keypad with enhanced display.' });
  ac('dk-1837', 'DoorKing 1837 Wall Mount Keypad', 'keypads', IMG + 'Doorking_1837_Wall_Mount-105x105.png', { manufacturer: 'DoorKing', short: 'Wall mount access keypad.' });
  ac('aas-avd1000i', 'AAS Advantage DK AVD-1000i Digital Keyless Keypad', 'keypads', IMG + 'American_Access_System_AAS_AdvantageDK_AVD-1000i_Digital_Keyless_Entry_Keypad-135x120.png', { manufacturer: 'American Access Systems', short: 'Digital keyless entry keypad.' });

  /* Card / proximity readers */
  ac('card-proximity-readers', 'Card Readers & Proximity Readers', 'card-readers', null, { short: 'Card readers, proximity card readers and barcode readers for gate access.', desc: 'A variety of card readers for gate and door access: proximity card readers, standard card readers and barcode readers, for residential and commercial applications.', src: SRC + 'CardReader-ProximityReaders-BarcodeReaders.html', collection: 'Access Control' });

  /* Safety / exit devices */
  ac('emx-loop-detectors', 'EMX Loop Detectors, Safety Sensors & Photo Beams', 'safety-systems', null, { manufacturer: 'EMX', short: 'Free exit loops, safety loops, photo cells and exit devices.', desc: 'Safety and detection devices for automated gates: exit loops, safety loops, photo beam sensors, photocells and exit devices. Safety devices are strongly recommended with every automatic gate installation.', src: SRC + 'EMX-Loop-Detectors-Safety-Sensors-Photocell-PhotoBeam-Exit-Devices-Access-Control.html', apps: ['Automatic gates', 'Barrier gates'] });

  /* Control stations & switches */
  function acc(id, name, img, sub, opts) {
    opts = opts || {};
    P.push({
      id: id, name: name, cat: 'accessories', sub: sub || 'hardware', collection: opts.collection || 'Gate Accessories',
      material: opts.material || 'Steel / Aluminum', style: 'Hardware',
      image: img || null, gallery: img ? [img] : [],
      short: opts.short || '', description: opts.desc || opts.short || '',
      features: opts.features || ['Durable gate hardware', 'Suitable for residential and commercial gates'],
      applications: opts.apps || ['Swing gates', 'Sliding gates', 'Garden gates'],
      pricingType: opts.cart ? 'cart' : 'quote', availability: opts.stock || 'Call to confirm stock',
      tags: [sub || 'hardware'].concat(opts.tags || []), src: opts.src || SRC + 'Gates-Accessories-Wheels-Hinges-Rollers-Latches.html'
    });
  }
  var accU = 'Gate_Access_Control_Accesories/';
  /* Hinges */
  acc('j-bolt-5-8', '5/8" J-Bolt Adjustable Heavy Duty Hinge', IMG + '5-8_inch_J-bolt_Hinge_Adjustible_Heavy_Duty_Gate_Hinge_Aluminum-150x105.jpg', 'hinges', { short: 'Adjustable J-bolt hinge for heavy gates, aluminum or steel.', src: SRC + accU + 'J-BoltHinges-Adjustiblehinge-SpringHinge.html', cart: true });
  acc('j-bolt-3-4', '3/4" J-Bolt Adjustable Heavy Duty Hinge', IMG + '3-4_inch_J-bolt_Hinge_Adjustible_Heavy_Duty_Gate_Hinge_Aluminum-163x105.jpg', 'hinges', { short: '3/4 inch adjustable J-bolt hinge for heavy gates.', src: SRC + accU + 'J-BoltHinges-Adjustiblehinge-SpringHinge.html', cart: true });
  acc('j-bolt-plate-alum', 'J-Bolt Hinge with Plate (Aluminum)', IMG + 'j-bolt_hinge_with_plate_in_Aluminum-149x105.jpg', 'hinges', { short: 'J-bolt hinge with mounting plate in aluminum.', src: SRC + accU + 'J-BoltHinges-Adjustiblehinge-SpringHinge.html', cart: true });
  acc('self-closing-hinge', 'Automatic Self-Closing Spring Hinge', IMG + 'self-closing-hinge-145x130.jpg', 'hinges', { short: 'Self-closing hinge that returns walk and garden gates to the latched position.', src: SRC + accU + 'J-BoltHinges-Adjustiblehinge-SpringHinge.html', cart: true });
  acc('elite-power-hinge-3', 'Elite 3" Power Hinge — Industrial Aluminum', IMG + 'Elite-Power-Hinge-3-Industrial-Aluminum-Gate-Hinge-147x220.jpg', 'hinges', { short: 'Industrial power hinge for aluminum gates.', src: SRC + accU + 'J-BoltHinges-Adjustiblehinge-SpringHinge.html' });
  acc('elite-power-hinge-2', 'Elite Power Hinge 2 — Industrial Steel', IMG + 'Elite-Power-Hinge-2-Industrial-Steel-Aluminum-Gate-Hinge-146x237.jpg', 'hinges', { short: 'Industrial steel power hinge for heavy gates.', src: SRC + accU + 'J-BoltHinges-Adjustiblehinge-SpringHinge.html' });
  acc('elite-power-hinge-steel', 'Elite Power Hinge — Industrial Steel', IMG + 'Elite-Power-Hinge-Industrial-Steel-Steel-Gate-Hinge-135x241.jpg', 'hinges', { short: 'Heavy industrial steel hinge line.', src: SRC + accU + 'J-BoltHinges-Adjustiblehinge-SpringHinge.html' });
  acc('gate-spring-12', '12" Adjustable Ornamental Gate Spring', IMG + '12_inch_Adjustable_Ornamental_Gate_Spring-185x102.jpg', 'springs', { short: 'Adjustable spring to assist gate closing, with ornamental profile.', cart: true });
  /* Latches & locks */
  acc('gravity-latch', 'Gravity Gate Latch — White or Black', IMG + 'White_or_Black_Gravety_Gate_Latch_Regular_Steel_Powder_Coat-170x109.jpg', 'latches', { short: 'Regular steel gravity latch with powder-coat finish in white or black.', src: SRC + accU + 'Gate-Latch-Pool-Gravity.html', cart: true });
  acc('gravity-latch-zinc', 'Zinc Plated Gravity Gate Latch', IMG + 'Zinc_Plated_Gravety_Gate_Latch-170x110.jpg', 'latches', { short: 'Zinc plated gravity latch for galvanized or steel gates.', src: SRC + accU + 'Gate-Latch-Pool-Gravity.html', cart: true });
  acc('slide-bolt-latch', 'Slide Bolt Gate Latch — Black Finish', IMG + 'Slite_Bolt_Gate_Latch_Black_Finish2-170x109.jpg', 'latches', { short: 'Slide bolt latch in black finish.', src: SRC + accU + 'Gate-Latch-Pool-Gravity.html', cart: true });
  acc('pool-magnetic-latch', 'Magnetic Pool Safety Gate Latch (Meets Pool Code)', IMG + 'Magnetic_Pool_Safety_Gate_Latch_Meets_Pool_Code-140x265.jpg', 'latches', { short: 'Magnetic self-latching gate latch that meets pool code requirements.', src: SRC + accU + 'Gate-Latch-Pool-Gravity.html', cart: true, tags: ['pool', 'safety'] });
  /* Wheels & tracks */
  acc('elite-power-wheel-4', '4" Elite Power Wheel — V-Groove, 3000 lbs Cap.', IMG + '4_inch_Elite_Power_Wheel_V_Groove_Sliding_Gate_Wheels_3000_lbs_Cap-106x97.jpg', 'wheels', { short: 'V-groove sliding gate wheel rated to 3,000 lbs.', src: SRC + accU + 'Groove-Wheels-VTrack-Guide-Rollers.html', cart: true });
  acc('groove-wheel-3', '3" Groove Wheel with Bracket', IMG + '3_inches_groove_wheel_with_bracket-110x93.jpg', 'wheels', { short: '3 inch groove wheel supplied with mounting bracket.', src: SRC + accU + 'Groove-Wheels-VTrack-Guide-Rollers.html', cart: true });
  acc('plastic-guides-6', '6" Hard Plastic White Guides for Sliding Gates', IMG + '6_inch_Hard_Plastic_White_Guides_For_Sliding_Gates-105x150.jpg', 'wheels', { short: 'Hard plastic guide rollers for sliding gates.', src: SRC + accU + 'Groove-Wheels-VTrack-Guide-Rollers.html', cart: true });
  acc('v-track-9ft', 'V-Track Galvanized — 9 ft Sections', IMG + 'V-_Track_Galvanized_9ft_Sections_Sliding_Gate_Track_Aluminum_OR_Galvanized-140x120.jpg', 'tracks', { short: 'Galvanized V-track in 9 ft sections, aluminum or galvanized.', src: SRC + accU + 'Groove-Wheels-VTrack-Guide-Rollers.html' });
  acc('cantilever-round-pipe', 'Cantilever Heavy Duty Round Pipe Assembly', IMG + 'Cantalever-HeavyDuty-RoundPipe-140x112.jpg', 'tracks', { short: 'Heavy duty cantilever hardware for round pipe gates.', src: SRC + acU + 'Cantilever-Truck-Assembly-Wheels.html' });
  acc('cantilever-truck', 'Cantilever Internal Truck Assembly Wheels', IMG + 'Cantalever-Internal-TruckAssenbly-Wheel-170x110.jpg', 'tracks', { short: 'Internal truck assembly wheels for cantilever sliding gates.', src: SRC + acU + 'Cantilever-Truck-Assembly-Wheels.html' });
  acc('gate-chain', 'Gate Chain for Sliding Operators', IMG2 + 'Gate_Openers_Chain.jpg', 'tracks', { short: 'Chain drive stock for chain-driven sliding gate operators.' });
  /* Control stations */
  acc('push-button-release', 'Push Button Gate Release Contact Switch', IMG + 'Push_Button_Gate_Release_Contact_Switch_Interior-95x115.jpg', 'control-stations', { short: 'Interior push-button release switch for gate operators.', src: SRC + 'Control-Station-Switch-Interior-Exterior.html', cart: true });
  acc('station-3button', '3-Button Control Station', IMG + '3_button_station-70x133.jpg', 'control-stations', { short: 'Open / stop / close three-button station.', src: SRC + 'Control-Station-Switch-Interior-Exterior.html', cart: true });
  acc('station-3bxlt', '3BXLT Exterior Commercial Control Station (Lock-Out)', IMG + '3BXLT_exterior_commercial_gate_door_control_station_lock_out-105x130.jpg', 'control-stations', { short: 'Exterior commercial control station with lock-out.', src: SRC + 'Control-Station-Switch-Interior-Exterior.html' });
  acc('station-3bxl', '3BXL 3-Button Commercial Control Station', IMG + '3BXL_3_button_commercial_gate_door_lockout_control_station-90x110.jpg', 'control-stations', { short: 'Three-button commercial station with lockout.', src: SRC + 'Control-Station-Switch-Interior-Exterior.html' });
  acc('mushroom-controls', '2 Mushroom Head Controls', IMG + '2_Mushroom_Head_Controls-129x90.jpg', 'control-stations', { short: 'Mushroom head control switches for industrial operation.', src: SRC + 'Control-Station-Switch-Interior-Exterior.html' });
  acc('key-switch-1kx', '1KX Commercial Key Switch', IMG + '1KX_Commercial_gate_door_key_switch-97x101.jpg', 'control-stations', { short: 'Keyed switch for gated access control.', src: SRC + 'Control-Station-Switch-Interior-Exterior.html', cart: true });
  acc('gate-timer', 'Gate Timer — 24/7, 365-Day Opener Timer', IMG + 'Gate_Timer_24-7_Opener_timer_365_days-135x120.jpg', 'control-stations', { short: 'Programmable timer to auto-open/close the gate on schedule.', cart: true });
  /* Mounts & antennas */
  acc('gooseneck-pedestal', 'Standard Gooseneck Pedestal Mount', IMG + 'Standard-Pedestal-Gooseneck-Pad-Mount-1-White-127x270.jpg', 'hardware', { short: 'Gooseneck pedestal for keypads or telephone entry systems.' });
  acc('antenna-local', 'Local Antenna for Receivers (Coax F-Connector)', IMG2 + 'Antenna_-_Local_for_receivers_Coax_F_connector.jpg', 'hardware', { short: 'Local antenna with coax F-connector for radio receivers.' });
  acc('antenna-bracket-15', 'Bracket Antenna with 15 ft Cable', IMG2 + 'Antenna_-_with_bracket_15_ft_cable_Coax_F_connector.jpg', 'hardware', { short: 'Bracket-mount antenna with 15 ft coax cable.' });
  acc('antenna-exa1000', 'EXA-1000 Extended Range Antenna', IMG2 + 'Extended_Range_Antenna_EXA-1000.jpg', 'hardware', { short: 'Extended range antenna for remote receivers.' });
  acc('antenna-exa2000', 'EXA-2000 Extended Range Antenna', IMG2 + 'Extended_Range_Antenna_EXA-2000.jpg', 'hardware', { short: 'Extended range antenna for maximum remote distance.' });

  /* Circuit boards */
  function board(id, name, mfg, src) {
    P.push({
      id: id, name: name, cat: 'accessories', sub: 'circuit-boards', collection: 'Main Control Circuit Boards',
      material: 'Electronics', style: 'Replacement Part', manufacturer: mfg, image: null, gallery: [],
      short: 'Replacement main control circuit board for ' + mfg + ' gate operators.',
      description: 'Replacement main control (motherboard / CPU) board for ' + mfg + ' gate operators. Send us your operator model and a photo of the existing board to confirm compatibility.',
      features: ['Brand-specific replacement board', 'Compatibility confirmation before shipping'],
      applications: ['Gate operator repair'],
      pricingType: 'quote', availability: 'Call to confirm stock', tags: ['circuit board', mfg.toLowerCase()],
      src: src || SRC + 'Main-Control-Circuit-Boards-MotherBords-CPUs.html'
    });
  }
  var cbU = 'Circuit-Boards/';
  board('cb-powermaster', 'PowerMaster GSMCB02 Main Control Board', 'PowerMaster', SRC + cbU + 'PowerMaster-Gate-Operators-Main-Control-Circuit-Boards-MotherBoards.html');
  board('cb-allstar', 'Allstar Main Control / Logic Boards', 'Allstar', SRC + cbU + 'AllStar-Control-Boards-Main-Circuit-Logic-Boards.html');
  board('cb-elite-omni', 'Elite Omni Board Q019 (Old Omni)', 'Elite', SRC + cbU + 'Elite-Openers-Motherboards-Main-Control-Circuit-Boards.html');
  board('cb-liftmaster-mega', 'LiftMaster Mega Arm Circuit Board', 'LiftMaster', SRC + cbU + 'Liftmaster-Gate-Openers-MotherBoards-Main-Circuit-Control-Boards.html');
  board('cb-eagle-diamond', 'Eagle Diamond Control Board', 'Eagle', SRC + cbU + 'Eagle-Gate-Operators-Main-Control-Circuit-Motherboards.html');
  board('cb-sea-pro', 'SEA PRO / Old SEA Main Circuit Board', 'SEA', SRC + cbU + 'SEA-Gate-Openers-Mother-Boards-Main-Circuit-Control.html');
  board('cb-ramset', 'Ramset Main Circuit Board', 'RamSet', SRC + cbU + 'Ramset-Operators-Control-Motherboards-Main-Circuit-Boards.html');
  board('cb-bravo', 'Bravo Control Board', 'Bravo', SRC + cbU + 'Bravo-Main-Control-Circuit-Mother-Boards.html');
  board('cb-crusader', 'Crusader R200A Circuit Board', 'Crusader', SRC + cbU + 'Crusader-Gate-Operators-Control-Main-Circuit-MotherBoards.html');
  board('cb-solo', 'Solo Main CPU Circuit Board', 'Solo', SRC + cbU + 'Solo-Main-CPU-Control-Circuit-Motherboards.html');
  board('cb-viper', 'Viper Gate Opener Board', 'Viper', SRC + cbU + 'Viper-MotherBoards-Main-Circuit-Control-Boards-CPU.html');
  board('cb-victory', 'Victory Circuit Board', 'Victory', SRC + cbU + 'Victory-MotherBoards-Main-Circuit-Control-Boards.html');
  board('cb-doorking', 'DoorKing Main Circuit Board', 'DoorKing', SRC + cbU + 'DoorKing-Gate-Openers-Circuit-Motherboard-Main-Control-Board.html');
  board('cb-osco-solid', 'OSCO Solid State Circuit Board', 'OSCO', SRC + cbU + 'Osco-Circuit-Board-Main-Control-Boards-APEX.html');
  board('cb-osco-apex', 'OSCO APEX Controller Control Board', 'OSCO', SRC + cbU + 'OSCO-APEX-Controller-Control-Board.html');

  /* Remote controls */
  function remote(id, name, desc) {
    P.push({
      id: id, name: name, cat: 'access-control', sub: 'remote-controls', collection: 'Remote Controls',
      material: 'Electronics', style: 'Remote Control', image: null, gallery: [],
      short: desc, description: desc + ' Visor and keychain styles available for most models.',
      features: ['Direct replacement remote', 'Programming instructions supplied'],
      applications: ['Gate operators', 'Garage door openers'],
      pricingType: 'cart', availability: 'Call to confirm stock', tags: ['remote control'],
      src: SRC + 'Remote_Controls_Linear_Multi-Code_Heddolp_Skylink.html'
    });
  }
  remote('rc-linear-310-1', 'Linear 310 MHz 1-Button Remote', 'Single-button 310 MHz remote for Linear receivers.');
  remote('rc-linear-310-2', 'Linear 310 MHz 2-Button Remote', 'Two-button 310 MHz remote for Linear receivers.');
  remote('rc-linear-310-4', 'Linear 310 MHz 4-Button Remote', 'Four-button 310 MHz replacement remote for Linear openers.');
  remote('rc-linear-mini', 'Linear Mini Keychain Transmitter 310 MHz', 'One-button mini keychain transmitter, 310 MHz.');
  remote('rc-mc-414001', 'MultiCode 414001 4-Button Visor Transmitter', 'Four-channel 414001 visor transmitter, Multi-Code.');
  remote('rc-mc-412001', 'MultiCode 412001 2-Button Visor Transmitter', 'Two-channel 412001 visor transmitter, Multi-Code.');
  remote('rc-mc-3060', 'MultiCode 3060 Mini Keychain Remote', 'One-button 300 MHz mini remote.');
  remote('rc-mc-3083', 'MultiCode 3083 Mini 2-Button Remote', 'Two-button mini transmitter, 310 MHz.');
  remote('rc-mc-308913', 'MultiCode 308913 1-Button Visor Transmitter', 'Programmable one-channel visor transmitter, 310 MHz.');
  remote('rc-mc-109710', 'MultiCode 109710 4-Button Visor Transmitter', 'Four-button four-channel visor transmitter.');
  remote('rc-mc-108210', 'MultiCode 108210 Key Ring Transmitter', 'One-button key ring transmitter, 301 MHz.');
  remote('rc-lm-371', 'LiftMaster 371LM 1-Button Remote (315 MHz)', 'Single-button Security+ remote for LiftMaster gates and doors.');
  remote('rc-lm-372', 'LiftMaster 372LM 2-Button Remote (315 MHz)', 'Two-button Security+ remote.');
  remote('rc-lm-373', 'LiftMaster 373LM 3-Button Remote (315 MHz)', 'Three-button Security+ remote.');
  remote('rc-lm-374', 'LiftMaster 374LM 4-Button Remote (315 MHz)', 'Four-button Security+ remote.');
  remote('rc-lm-375', 'LiftMaster 375LM Universal Programmable Remote', 'Universal programmable replacement remote.');
  remote('rc-lm-971', 'LiftMaster 971LM 1-Button Remote (390 MHz)', 'One-button 390 MHz remote.');
  remote('rc-lm-972', 'LiftMaster 972LM 2-Button Remote (390 MHz)', 'Two-button 390 MHz security remote.');
  remote('rc-lm-973', 'LiftMaster 973LM 3-Button Remote (390 MHz)', 'Three-button 390 MHz remote.');
  remote('rc-lm-974', 'LiftMaster 974LM 4-Button Remote (390 MHz)', 'Four-button 390 MHz remote.');
  remote('rc-lm-970', 'LiftMaster 970LM Mini 3-Button Remote', 'Mini three-button 390 MHz remote.');
  remote('rc-lm-61', 'LiftMaster 61LM 1-Button DIP Switch Remote', 'Single-button DIP-switch remote, 390 MHz.');
  remote('rc-lm-62', 'LiftMaster 62LM 2-Button DIP Switch Remote', 'Two-button DIP-switch remote, 390 MHz.');
  remote('rc-lm-63', 'LiftMaster 63LM 3-Button DIP Switch Remote', 'Three-button DIP-switch remote, 390 MHz.');
  remote('rc-heddolf-0219', 'Heddolf 0219 Mini Keychain Remote', 'One-button keychain transmitter in multiple frequencies (310/318/340 MHz).');
  remote('rc-heddolf-0220', 'Heddolf 0220 Visor Remote', 'One-button visor transmitter available from 300 to 390 MHz.');

  /* ---------------- MANUFACTURERS ---------------- */
  D.manufacturers = [
    { slug: 'bft', name: 'BFT', blurb: 'UL/CSA-approved electromechanical and hydraulic operators — swing, rack & pinion slide, underground and barrier, plus kits.', logo: IMG2 + 'BFT_-_Ares-24V.jpg', url: SRC + 'BFT-Gate-Openers-Operators.html' },
    { slug: 'powermaster', name: 'PowerMaster', blurb: 'Complete line of swing, slide, barrier and overhead-door operators from residential to super heavy duty industrial.', logo: IMG + 'Power_Master_Gate_Opener_Logo-165x120.jpg', url: SRC + 'PowerMaster_Gate_Openers_Operators_Swing_Slide_Residential_Commercial_RSG_BSG_RSW_MSW_SG_SGI_P1500_P5000.html' },
    { slug: 'eagle', name: 'Eagle', blurb: 'Residential and commercial swing and slide operators — every Eagle operator ships with the Diamond control board.', logo: IMG + 'Eagle_Gate_Operators_and_Openers_Access_Control_Devices_Logo2-165x120.jpg', url: SRC + 'EagleGateOpeners_EagleGateOperators_Eagle100_Eagle1000_Eagle200_Eagle2000_CommercialResidential.html' },
    { slug: 'elite', name: 'Elite', blurb: 'Elite Access Systems — solar residential operators, heavy-traffic commercial slide and swing, plus Hercules garage operators.', logo: IMG + 'Elite_Gate_Openers_Door_Operators_Devices_Logo-165x120.jpg', url: SRC + 'EliteGateOpeners_EliteGateOperators_200CSW-1HP-DM_3000UL-1HP-DM_RoboSlide900_RoboSwing_EliteSolar_Hercules.html' },
    { slug: 'ramset', name: 'RamSet', blurb: 'RamSet automatic gate systems — swing operators RAM 30 to 3200 and slide operators RAM 50 to 5700.', logo: IMG + 'Ramset_Swing_Gate_Opener_300-165x225.jpg', url: SRC + 'Gate_Opener_RamSet_30_30-30_300_3000_3100_3200_50_100-1000_5000_5100_5200_5500.html' },
    { slug: 'doorking', name: 'DoorKing', blurb: 'DoorKing gate operators, barrier gates, telephone entry systems and keypads — residential through maximum security.', logo: IMG + 'dks_logo-150x75.jpg', url: SRC + 'DoorKing_GateOpeners_BarrierGates_Swing-Slide_Commercial_Residential_Industrial_GateOperators.html' },
    { slug: 'viking', name: 'Viking', blurb: 'Viking Access Systems — gate control, gate openers, operators and barrier gates.', logo: IMG + 'Viking_Gate_Operators_Logo-165x105.jpg', url: SRC + 'VikingAccess-Gatecontrol-Gateopeners-GateOperators-Barriergate.html' },
    { slug: 'osco', name: 'OSCO / Linear', blurb: 'Operator Specialist Company — residential, commercial and industrial swing, slide and barrier operators under the OSCO and Linear names.', logo: IMG + 'OSCO_Gate_Operators_Logo-165x90.png', url: SRC + 'OSCO_GateOpeners-GateOperators-GateBarriers-SingleArm-DoubleArm-SwingOpener-SlideOperator.html' },
    { slug: 'liftmaster', name: 'LiftMaster', blurb: 'LiftMaster gate operators and remotes — DC slide and swing, hydraulic, mega arm barriers and parking barriers.', logo: IMG + 'Liftmaster_Mega_Slide_Gate_Opener_Operator_Residential_Medium_Duty-134x175.png', url: SRC + 'Liftmaster-Door-GateOpeners-GateOperators-Swing-Slide-Arm-Barrier-Residential-Commercial-Industrial.html' },
    { slug: 'allstar', name: 'Allstar', blurb: 'Allstar operators — Leader Plus swing, Tower Plus residential slide, power supplies and control boards.', logo: IMG + 'Allstar_Gate_Operators_Logo-165x75.jpg', url: SRC + 'AllstarGateOpener-GS1000HS-LPXLeaderPlus-TowerPlus-GS6000-400-PowerSupply.html' },
    { slug: 'sea', name: 'SEA', blurb: 'SEA Opening Electronic Systems — hydraulic and electromechanical swing, slide, underground and barrier operators.', logo: IMG + 'SEA_Gate_Operators_Logo-165x105.jpg', url: SRC + 'SEA_Gate_Opener_Mini-Half-Full-Tank_Compact-200-400-800_Vela_Industrial_Barrier_Orion_Taurus_Lepus_Chain_Rack.html' },
    { slug: 'faac', name: 'FAAC', blurb: 'FAAC USA — automatic electric swing, in-ground, slide and barrier operators for residential, commercial and industrial gates.', logo: IMG + 'FAAC_746_Slide-150x195.jpg', url: SRC + 'FAAC-USA-Gate-Operators-Openers-Automated-Electric-Swing-In_Ground-Slide-Gates-Garage-Door.html' },
    { slug: 'apollo', name: 'Apollo', blurb: 'Apollo gate openers — solar-capable swing and slide operators, articulating arms, underground and barrier arms.', logo: IMG + 'Apollo_7100_ETL_Slide_Residential_Medium_Commercial_Slide_Gate_Opener-180x165.png', url: SRC + 'Apollo_Openers_Gate_Operators_Automatic_Sliding_Swinging_Residential_Commercial_Opener.html' },
    { slug: 'hysecurity', name: 'HySecurity', blurb: 'HySecurity — hydraulic SmartGate operators: swing, slide, barrier and vertical-lift for high-cycle commercial and industrial gates.', logo: IMG2 + 'Hy-Security-Logo.jpg', url: SRC + 'HySecurity-GateOperators.html' },
    { slug: 'linear-access', name: 'Linear', blurb: 'Linear access control — telephone entry systems, residential entry units and Multi-Code remotes.', logo: IMG + 'Linear_AE1000Plus_Commercial_Telephone_Entry_System_with_Access_Control-Four_Doors-105x105.jpg', url: SRC + acU + 'Linear_Remote_Control_Card_Reader_Phone_Entry_Commecial_Residential_Wireless.html' },
    { slug: 'sentex', name: 'Sentex', blurb: 'Sentex telephone entry systems for gated communities and commercial properties.', logo: IMG + 'Sentex_Infinity_M_Office_Building_or_Gated_Residential_Community_Telephone_Entry_System_with_2-Line_Display_of_20_Channel_Each-105x120.png', url: SRC + acU + 'Linear_Remote_Control_Card_Reader_Phone_Entry_Commecial_Residential_Wireless.html' },
    { slug: 'aas', name: 'American Access Systems', blurb: 'AAS telephone entry, PhoneAire wireless entry and digital keyless keypads.', logo: IMG + 'AAS_American_Access_Systems_Logo-165x90.jpg', url: SRC + acU + 'Linear_Remote_Control_Card_Reader_Phone_Entry_Commecial_Residential_Wireless.html' },
    { slug: 'select-engineering', name: 'Select Engineering', blurb: 'Select Engineered Systems (SES) telephone entry models.', logo: IMG + 'Select_Engineered_System_Logo-150x80.jpg', url: SRC + 'Select-Engineered-Entry-System.html' },
    { slug: 'emx', name: 'EMX', blurb: 'EMX loop detectors, safety sensors, photocells and exit devices for automatic gates.', logo: IMG + 'emx_logo-165x90.png', url: SRC + 'EMX-Loop-Detectors-Safety-Sensors-Photocell-PhotoBeam-Exit-Devices-Access-Control.html' },
    { slug: 'aiphone', name: 'Aiphone', blurb: 'Aiphone intercom systems including the JK model line.', logo: null, url: SRC + 'Access-Control-TelePhone-Entry-Intercom-Systems-Keypads/Aiphone-intercome-JKmodels.html' },
    { slug: 'ditek', name: 'Ditek', blurb: 'Ditek surge protectors and transformers / power supplies for gate operator installations.', logo: null, url: SRC + 'Transformers-SurgeProtection/DITEK-Surge-Protector-PowerSurge.html' }
  ];

  /* ---------------- RESOURCES (real links only) ---------------- */
  D.resources = [
    { id: 'res-cswc-manual', type: 'PDF Manual', title: 'PowerMaster CSWC / CSWI Swing Operator Manual', desc: 'Installation and service manual for PowerMaster CSWC / CSWI industrial and commercial swing gate operators.', url: 'http://www.gatesnfences.com/files/CSWC_CSWI_Industrial_Or_Commercial_Gate_Operator_Swing_Super_Heavy_Duty_Manual_PDF.pdf' },
    { id: 'res-lm-remotes', type: 'PDF Manual', title: 'LiftMaster Remotes 61/62/63 LM — Programming Instructions', desc: 'Programming instructions for LiftMaster 61LM, 62LM and 63LM DIP-switch remotes.', url: 'http://www.gatesnfences.com/files/Liftmaster_remotes-61-62-63-LM_Manual_-_Programing_Instructions.pdf' },
    { id: 'res-color-chart', type: 'Color Chart', title: 'Powder Coat Oven-Baked Color Chart', desc: 'The powder-coat color chart used for driveway gates, fences and railings.', url: SRC + 'PowderCoat_Oven_Baked_Color_Chart_DrivewayGates_Fences_Railings.html' },
    { id: 'res-operators-index', type: 'Catalog Index', title: 'Gate Openers & Operators Index', desc: 'All gate opener and operator families carried, organized by brand.', url: SRC + 'Gate_Openers_Operators_PowerMaster_Elite_Eagle_SEA_Ramset.html' },
    { id: 'res-residential-slide', type: 'Technical Guide', title: 'Residential Sliding Gate Openers — All Brands', desc: 'Cross-brand overview of residential sliding gate openers (chain, rack and pinion).', url: SRC + 'Residential-Sliding-Slide-GateOpeners-allbrands.html' },
    { id: 'res-barriers', type: 'Technical Guide', title: 'Vehicle Barrier Gates & Traffic Barriers', desc: 'Overview of arm barrier and vehicle barrier gate options across brands.', url: SRC + 'Vehicle-Barrier-Gate-ArmBarriers-TrafficBarriers.html' },
    { id: 'res-circuit-boards', type: 'Technical Guide', title: 'Main Control Circuit Boards by Brand', desc: 'Replacement main boards / motherboards for gate operators, indexed by brand.', url: SRC + 'Main-Control-Circuit-Boards-MotherBords-CPUs.html' },
    { id: 'res-parts', type: 'Technical Guide', title: 'Gate Operator Replacement Parts', desc: 'Replacement parts index for gate openers and operators.', url: SRC + 'Gate-Openers-Parts-Gate-Operators-Parts-Replacement-Parts.html' },
    { id: 'res-access-control', type: 'Technical Guide', title: 'Access Control & Telephone Entry Overview', desc: 'Telephone entry, keypads, card readers, remotes, loops and safety devices.', url: SRC + acU + 'Linear_Remote_Control_Card_Reader_Phone_Entry_Commecial_Residential_Wireless.html' }
  ];

  /* ---------------- FAQ (from source site content) ---------------- */
  D.faqs = [
    { q: 'How do I request a quote for a gate or fence?', a: 'Send an e-mail to ' + D.company.email + ' or use the Request a Quote form. Include the model you are interested in, the color, starting height, finish height, how many times per day the gate will open and close, how you would like to open the gate, and how far your home is from the gate.' },
    { q: 'What payment methods are accepted?', a: 'Online orders are processed through SSL with PayPal. You can also call ' + D.company.phone + ' to pay with a credit card over the phone, or send a check made out to L.A. Ornamental and Rack Corp, 3708 NW 82nd Street, Miami, Florida 33147.' },
    { q: 'Do you ship outside Miami?', a: 'Orders are shipped throughout the U.S. and, in some cases, overseas.' },
    { q: 'Aluminum or wrought iron — which should I choose?', a: 'Both are offered. Aluminum is lightweight, corrosion resistant and maintenance free, and modern fabrication lets it look like wrought iron. Wrought iron remains the classic choice for heavy ornamental and security work. All products are finished with oven-baked powder coat.' },
    { q: 'Can my driveway gate slide instead of swing?', a: 'Yes. Most driveway gate designs are built to slide or swing. Sliding gates are ideal where there is no clearance for a swing arc, and they pair with chain or rack-and-pinion slide operators.' },
    { q: 'Can I get a privacy gate?', a: 'Yes. Driveway, garden and walk gates can be built with a solid backing in aluminum, steel, Plexiglas or plastic, in many colors.' },
    { q: 'What happens if I am not sure which gate operator I need?', a: 'Contact the office with your gate size, weight and usage and you will be guided to the correct operator style and brand. Not sure of the style or size — just e-mail or call.' },
    { q: 'Is my personal information kept private?', a: 'Yes. The e-mail and home address collected when placing an order are used strictly for billing, shipping and newsletter purposes and are never sold, distributed or shared.' },
    { q: 'Do the brands listed include parts and support?', a: 'Replacement main circuit boards, remotes and parts are carried for the major operator brands, and compatibility can be confirmed before ordering.' }
  ];

  /* ---------------- POLICIES ---------------- */
  D.policies = [
    { title: 'Privacy Statement', body: 'In the process of placing an order we collect the customer e-mail address and home address. This is strictly used for billing, shipping and newsletter purposes. We do not sell, distribute or share that information with anyone. Your information is held in a secure file in our main office.' },
    { title: 'Payments', body: 'Orders are processed through SSL (Secure Sockets Layer) with a licensed digital certificate via PayPal. Payment by credit card over the phone or by check made out to L.A. Ornamental and Rack Corp is also accepted.' },
    { title: 'Quotes', body: 'Quotes are provided by e-mail. Please include model, color, starting height, finish height, daily cycles, preferred opening method, and distance from home to gate.' },
    { title: 'Trademarks', body: 'The names of companies, brands or publications mentioned, and their respective logos, are trademarks or registered trademarks of their respective owners. Their use neither constitutes a claim of sponsorship nor affiliation of the trademark owners with L.A. Ornamental & Rack Corp.' },
    { title: 'Copyright', body: 'Copyright 2004–2008 L. A. Ornamental & Rack Corp. All rights reserved. No part of the original site may be reproduced in any form or by any means without prior written consent of L. A. Ornamental & Rack Corp.' }
  ];

  /* Manufacturer fallback images for operator cards without a dedicated photo */
  D.mfgImage = {
    'BFT': IMG2 + 'BFT_-_Ares-24V.jpg',
    'PowerMaster': IMG + 'Power_Master_Gate_Opener_Logo-120x75.jpg',
    'RamSet': IMG + 'Ramset_Swing_Gate_Opener_300-165x225.jpg',
    'DoorKing': IMG + 'Doorking_Slide_Gate_Opener_9050_-_9070_Residential_Light_Commercial-120x165.jpg',
    'OSCO / Linear': IMG + 'OSCO_Slide_Gate_Openers_SL_Series_Gate_Motor-143x174.jpg',
    'LiftMaster': IMG + 'Liftmaster_Mega_Slide_Gate_Opener_Operator_Residential_Medium_Duty-134x175.png',
    'SEA': IMG + 'SEA_Orion_Rack_Sliding_Gate_Operator-135x150.png',
    'FAAC': IMG + 'FAAC_746_Slide-150x195.jpg',
    'Apollo': IMG + 'Apollo_7100_ETL_Slide_Residential_Medium_Commercial_Slide_Gate_Opener-180x165.png',
    'HySecurity': IMG + 'HySecurity-SlideDriver-230x219.jpg',
    'Eagle': IMG + 'Eagle_Gate_Operators_and_Openers_Access_Control_Devices_Logo2-165x90.jpg',
    'Elite': IMG + 'Elite_Gate_Openers_Door_Operators_Devices_Logo-150x75.jpg',
    'Viking': IMG + 'Viking_Gate_Operators_Logo-135x105.jpg',
    'Allstar': IMG + 'Allstar_Gate_Operators_Logo-165x90.jpg'
  };

  /* Hero / section imagery (verified source photos) */
  D.heroImages = {
    hero: IMG + 'Disney-American-idol-Main_Entry-880x750.jpg',
    gates: IMG + 'Royalty_with_accent-585x450.jpg',
    fences: IMG + 'Garden_Gate_Aluminum_Fence_Rolling_Calm-280x170.jpg',
    railings: IMG + 'Sunshine_Decorative_Balcony_HandRails_or_Railings-255x150.jpg',
    automation: IMG + 'BFT_-_Ares-1000_-_1500_Series-201x172.jpg',
    custom: IMG + 'Welding_2-290x250.jpg',
    entrance: IMG + 'DSC01064-165x134.jpg',
    aluminumGate: IMG + 'DSC01034-225x132.jpg'
  };
})(window.AURUM_DATA);
