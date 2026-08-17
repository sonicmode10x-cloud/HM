import { FleetBike } from '../types';

export const FLEET_DATA: FleetBike[] = [
  {
    id: 'crf300l',
    name: 'Honda CRF300L Dual-Sport Enduro',
    category: 'motorcycle',
    badge: 'LIGHTWEIGHT DIRT / ENDURO',
    specs: {
      engineOrMotor: '286cc Liquid-Cooled 4-Stroke DOHC Single',
      powerOrTorque: '27.3 hp @ 8,500 rpm / 26.6 Nm @ 6,500 rpm',
      suspension: '43mm Inverted Showa Long-Travel (260mm) / Pro-Link (260mm)',
      weight: '142 kg (Ultra-Lightweight & Agile)',
      brakes: 'Hydraulic Wave Discs with Switchable Off-Road Rear ABS',
      tires: '21-inch Front / 18-inch Rear Heavy-Duty Off-Road Knobbies',
      transmission: '6-Speed with Slipper & Assist Clutch'
    },
    rentalPriceDayPlaceholder: 'Starting from $60–$80 / day',
    rentalPriceWeekPlaceholder: 'Starting from $380–$490 / week',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'The benchmark lightweight Himalayan dirtbike. Effortlessly tackles Upper Mustang sand tracks, boulder fields, river crossings, and technical high passes.',
    terrainSuitability: 'Technical singletrack, Kali Gandaki riverbeds, sandy washes, steep rock climbs & switchbacks',
    features: [
      'Ultra-light 142kg curb weight allows effortless recovery on steep trails',
      'Massive 260mm Showa long-travel suspension soaks up boulder fields',
      'Full aluminum bash plate, Barkbusters handguards, and radiator protection',
      'Narrow rally ergonomics with high ground clearance (285mm)'
    ],
    depositNotice: 'Refundable security deposit & valid international motorcycle license required.'
  },
  {
    id: 'ktm-390-rally',
    name: 'KTM 390 Adventure R / Rally Dirt',
    category: 'motorcycle',
    badge: 'HARD ENDURO & RALLY',
    specs: {
      engineOrMotor: '399cc Liquid-Cooled 4-Valve DOHC Single',
      powerOrTorque: '45.3 PS @ 8,500 rpm / 39 Nm @ 6,500 rpm',
      suspension: 'WP APEX 43mm USD Adjustable (200mm) / WP APEX Monoshock',
      weight: '158 kg (Lightweight Rally Spec)',
      brakes: 'ByBre 320mm Disc with Dedicated Offroad ABS Mode',
      tires: '21-inch Front / 18-inch Rear Heavy-Duty Spoked Off-Road Knobbies',
      transmission: '6-Speed with Quickshifter+ & Slipper Clutch'
    },
    rentalPriceDayPlaceholder: 'Starting from $65–$85 / day',
    rentalPriceWeekPlaceholder: 'Starting from $410–$520 / week',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'High-revving rally powerhouse with race-spec WP suspension, aggressive power delivery, and switchable off-road traction control for extreme Himalayan terrain.',
    terrainSuitability: 'High-speed gravel passes, Upper Mustang dry washes, Thorong La mountain approaches, steep scree climbs',
    features: [
      'Adjustable WP APEX suspension with compression & rebound damping',
      'Offroad Riding Mode & switchable cornering traction control',
      'Heavy-duty rally crash cage, aluminum skid plate, and enduro handguards',
      '21/18 wire-spoke wheels fitted with aggressive Himalayan knobby rubber'
    ],
    depositNotice: 'Refundable security deposit & valid international motorcycle license required.'
  },
  {
    id: 'himalayan-450-rally',
    name: 'Royal Enfield Himalayan 450 Rally',
    category: 'motorcycle',
    badge: 'EXPEDITION ENDURO FLAGSHIP',
    specs: {
      engineOrMotor: '452cc Liquid-Cooled Sherpa Single DOHC 4-Valve',
      powerOrTorque: '40.02 PS @ 8,000 rpm / 40 Nm @ 5,500 rpm',
      suspension: '43mm Showa USD Separate Function Forks (200mm) / Linkage Monoshock',
      weight: '196 kg (Kerb with Full Expedition Armor)',
      brakes: 'ByBre 320mm Front / 270mm Rear Disc with Switchable Offroad ABS',
      tires: '21-inch Front / 17-inch Rear Tubeless Cross-Spoke Wheels with Off-Road Knobbies',
      transmission: '6-Speed with Slip & Assist Clutch'
    },
    rentalPriceDayPlaceholder: 'Starting from $45–$65 / day',
    rentalPriceWeekPlaceholder: 'Starting from $280–$390 / week',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
    shortDesc: 'The ultimate purpose-built Himalayan adventure enduro machine. Exceptional low-end torque for boulder crawling, 230mm ground clearance, and long-range rally tank.',
    terrainSuitability: 'Upper Mustang, Manang, Annapurna Circuit, remote high-altitude trans-Himalayan valleys',
    features: [
      'Ride-by-wire throttle with Eco & Performance off-road maps',
      'Heavy-duty aluminum sump guard, engine crash bars, and headlight grille',
      'Dual rear soft-pannier racks fitted for expedition luggage and fuel cans',
      'Long-travel 200mm Showa suspension tuned for rocky Himalayan riverbeds'
    ],
    depositNotice: 'Refundable security deposit & valid international motorcycle license required.'
  }
];
