import { Expedition } from '../types';
import { DESTINATION_ACTIVITIES_BY_TOUR } from './destinationActivitiesData';
import tour1Img from '../assets/images/regenerated_image_1788370493452.jpg';
import tour2Img from '../assets/images/regenerated_image_1788370495617.jpg';
import tour3Img from '../assets/images/regenerated_image_1788370498054.jpg';
import tour4Img from '../assets/images/regenerated_image_1788370499760.webp';
import tour5Img from '../assets/images/regenerated_image_1788370501842.webp';
import tour6Img from '../assets/images/regenerated_image_1788370503435.jpg';
import tour7Img from '../assets/images/regenerated_image_1788370504917.webp';
import tour8Img from '../assets/images/regenerated_image_1788370506761.webp';

const RAW_TOURS_DATA: Expedition[] = [
  // ==========================================
  // MOTORCYCLE EXPEDITIONS
  // ==========================================

  // 01. POKHARA HIMALAYAN DAY RIDE
  {
    id: 'pokhara-himalayan-day-ride',
    slug: 'pokhara-himalayan-day-ride',
    packageNumber: '01',
    title: 'Pokhara Himalayan Day Ride',
    category: 'motorcycle',
    isFlagship: false,
    tagline: 'Ride the Himalayan Foothills',
    durationDays: 1,
    durationLabel: '1 DAY',
    priceUsd: 150,
    price: '$150 / person',
    startingPricePlaceholder: '$150 / person',
    currency: 'USD',
    difficulty: 'Beginner–Intermediate',
    routeSummary: 'Pokhara → Sarangkot → Naudanda → Pokhara',
    bestSeason: 'Year-Round (Best: September – June)',
    maxAltitude: '1,592 m (Sarangkot Ridge)',
    terrain: 'Scenic paved mountain roads, hillside twisties, traditional village tracks, panoramic viewpoints',
    groupSize: '1–6 Riders (Private or Small Group)',
    bikeProvided: 'Royal Enfield Himalayan 450 / Scram 411 / Honda CRF300L',
    heroImage: tour1Img,
    galleryImages: [
      tour1Img,
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Escape Pokhara and ride into the hills surrounding Nepal\'s adventure capital. Mountain roads, traditional villages, Himalayan viewpoints and flowing countryside riding into one unforgettable day.',
    fullDescription: 'Escape Pokhara and ride into the hills surrounding Nepal\'s adventure capital.\n\nThe Himalayan Monster Day Ride combines scenic mountain roads, traditional villages, Himalayan viewpoints and flowing countryside riding into one unforgettable day.\n\nPerfect for riders who want to experience Nepal on two wheels without committing to a multi-day expedition.',
    routeHighlights: [
      'Sarangkot',
      'Annapurna & Machhapuchhre views',
      'Pokhara Valley',
      'Mountain villages',
      'Himalayan countryside',
      'Scenic mountain roads',
      'Photography stops'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pokhara → Sarangkot → Naudanda → Pokhara',
        distanceKm: '65 km loop',
        ridingTime: '4–5 hrs',
        startAltitude: '820 m',
        endAltitude: '820 m',
        maxAltitude: '1,592 m (Sarangkot)',
        highlights: [
          'Morning motorcycle briefing and bike preparation',
          'Ride from Pokhara toward Sarangkot and climb into the hills',
          'Stop at Himalayan viewpoints before continuing toward Naudanda through mountain roads and villages',
          'Enjoy lunch along the route before exploring additional countryside roads',
          'Descend toward Pokhara and finish the ride in the afternoon'
        ],
        description: 'Morning motorcycle briefing and bike preparation. Ride from Pokhara toward Sarangkot and climb into the hills. Stop at Himalayan viewpoints before continuing toward Naudanda through mountain roads and villages. Enjoy lunch along the route before exploring additional countryside roads. Descend toward Pokhara and finish the ride in the afternoon.',
        overnight: 'Pokhara'
      }
    ],
    inclusions: [
      'Premium motorcycle rental (Royal Enfield Himalayan 450 / CRF300L)',
      'Full fuel allocation for the day ride',
      'Experienced Himalayan Monster lead road captain',
      'Traditional village lunch & mineral water',
      'Comprehensive machine safety briefing & ergonomics setup',
      'Basic first aid kit & mechanical trail support'
    ],
    exclusions: [
      'Personal motorcycle riding gear (helmet, jacket, gloves available for rent)',
      'Personal medical & travel insurance',
      'Alcoholic beverages & personal snacks',
      'Gratuities for your lead guide'
    ],
    accommodation: 'Day tour return to your Pokhara accommodation.',
    preparationRequirements: [
      'Valid motorcycle driver’s license or International Driving Permit',
      'Comfortable riding jacket, helmet, sturdy footwear, and eye protection',
      'Basic throttle control and road awareness on winding hill terrain'
    ],
    faqs: [
      {
        question: 'Is this ride suitable for beginner riders?',
        answer: 'Yes! The Pokhara Himalayan Day Ride is tailored for beginner to intermediate riders comfortable on paved mountain curves with minor village tarmac transitions.'
      },
      {
        question: 'Can I bring a pillion passenger?',
        answer: 'Yes, our Royal Enfield Himalayan 450s are very comfortable for pillion riders. Please let us know in advance when booking.'
      },
      {
        question: 'What time does the ride start and end?',
        answer: 'We meet at 8:30 AM at our Lakeside Pokhara Base Camp for setup and safety briefing, departing at 9:15 AM and returning to Pokhara around 3:30–4:30 PM.'
      }
    ],
    reviews: [
      {
        id: 'rev-01-1',
        riderName: 'Marcus Lindqvist',
        country: 'Sweden',
        countryCode: 'SE',
        rating: 5,
        date: 'October 2025',
        comment: 'The perfect day out from Pokhara! We rode up through Sarangkot with crystal-clear Annapurna views. Great bikes and an awesome guide.',
        bike: 'Royal Enfield Himalayan 450'
      }
    ],
    relatedTourSlugs: ['pokhara-jomsom-adventure', 'pokhara-mtb-explorer'],
    seoTitle: 'Pokhara Himalayan Day Ride | 1 Day Motorcycle Tour Nepal',
    seoDescription: 'Ride the Himalayan foothills around Pokhara with Himalayan Monster. 1-day motorcycle tour to Sarangkot and Naudanda with stunning Annapurna views.',
    seoKeywords: ['Pokhara motorcycle day ride', 'Sarangkot bike tour', 'Nepal 1 day motorbike tour', 'Himalayan Monster day ride'],
    routeMapDescription: 'Pokhara Lakeside → Sarangkot Ridge (1,592m) → Kaskikot → Naudanda High Road → Pame Shoreline → Pokhara.'
  },

  // 02. POKHARA → JOMSOM ADVENTURE
  {
    id: 'pokhara-jomsom-adventure',
    slug: 'pokhara-jomsom-adventure',
    packageNumber: '02',
    title: 'Pokhara → Jomsom Adventure',
    category: 'motorcycle',
    isFlagship: false,
    tagline: 'Ride Into the Kali Gandaki Valley',
    durationDays: 3,
    durationLabel: '3 DAYS',
    priceUsd: 650,
    price: '$650 / person',
    startingPricePlaceholder: '$650 / person',
    currency: 'USD',
    difficulty: 'Intermediate',
    routeSummary: 'Pokhara → Tatopani → Jomsom → Kagbeni → Pokhara',
    bestSeason: 'March – June & September – November',
    maxAltitude: '2,800 m (Kagbeni)',
    terrain: 'River gorge gravel, mountain roads, cliffside dirt tracks, suspension bridge views',
    groupSize: '2–8 Riders',
    bikeProvided: 'Royal Enfield Himalayan 450 / Honda CRF300L',
    heroImage: tour2Img,
    galleryImages: [
      tour2Img,
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Three days of pure Himalayan riding. Follow the Kali Gandaki Valley from the lush hills of Pokhara into the dry mountain landscape of Mustang.',
    fullDescription: 'Three days of pure Himalayan riding.\n\nFollow the Kali Gandaki Valley from the lush hills surrounding Pokhara into the dry mountain landscape of Mustang.\n\nWaterfalls, suspension bridges, remote villages and rugged roads make this one of our best short expeditions.',
    routeHighlights: [
      'Kali Gandaki Valley',
      'Tatopani',
      'Jomsom',
      'Kagbeni',
      'Mountain villages',
      'Waterfalls',
      'Himalayan landscapes',
      'Changing terrain'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pokhara → Tatopani',
        distanceKm: '105 km',
        ridingTime: '4–5 hrs',
        startAltitude: '820 m',
        endAltitude: '1,190 m',
        maxAltitude: '1,500 m',
        highlights: [
          'Depart Pokhara and ride toward Beni',
          'Continue along the Kali Gandaki Valley toward Tatopani',
          'Overnight: Tatopani'
        ],
        description: 'Depart Pokhara and ride toward Beni. Continue along the Kali Gandaki Valley toward Tatopani. Relax in the natural geothermal hot springs by the roaring river.',
        overnight: 'Tatopani'
      },
      {
        day: 2,
        title: 'Tatopani → Jomsom → Kagbeni',
        distanceKm: '75 km',
        ridingTime: '5 hrs',
        startAltitude: '1,190 m',
        endAltitude: '2,800 m',
        maxAltitude: '2,800 m',
        highlights: [
          'Continue north through increasingly dramatic mountain terrain',
          'Stop at Jomsom before riding toward Kagbeni',
          'Explore the ancient settlement and surrounding landscape',
          'Overnight: Kagbeni'
        ],
        description: 'Continue north through increasingly dramatic mountain terrain. Stop at Jomsom before riding toward Kagbeni. Explore the ancient settlement, mud-walled alleyways, and surrounding landscape.',
        overnight: 'Kagbeni'
      },
      {
        day: 3,
        title: 'Kagbeni → Jomsom → Tatopani → Pokhara',
        distanceKm: '180 km',
        ridingTime: '6–7 hrs',
        startAltitude: '2,800 m',
        endAltitude: '820 m',
        maxAltitude: '2,800 m',
        highlights: [
          'Begin the descent south',
          'Ride through Jomsom and Tatopani before returning to Pokhara'
        ],
        description: 'Begin the descent south. Ride through Jomsom and Tatopani along the Kali Gandaki corridor before returning to Pokhara to wrap up the adventure.',
        overnight: 'Pokhara'
      }
    ],
    inclusions: [
      'Dual-sport adventure motorcycle rental with fuel',
      '2 nights mountain lodge / teahouse accommodation',
      'All meals (Breakfast, Lunch, Dinner) on the road',
      'ACAP (Annapurna Conservation Area) permits & TIMS',
      'Certified Himalayan lead road captain & mechanical support',
      'Tatopani hot springs entry fee'
    ],
    exclusions: [
      'Personal riding apparel (gear rental available)',
      'Travel and emergency medical evacuation insurance',
      'Alcoholic drinks, sodas, and personal lodge expenses',
      'Tips for guide and support staff'
    ],
    accommodation: 'Authentic riverside lodges in Tatopani and traditional Tibetan-style guesthouses in Kagbeni.',
    preparationRequirements: [
      'Valid motorcycle license',
      'Comfortable riding on mixed gravel, dirt, and wet riverbed sections',
      'Layered riding gear for changing tropical-to-alpine temperatures'
    ],
    faqs: [
      {
        question: 'What are the road conditions like to Jomsom?',
        answer: 'The route transitions from smooth tarmac out of Pokhara to packed dirt, gravel riverbeds, and carved cliffside roads along the Kali Gandaki canyon.'
      },
      {
        question: 'Is acclimatization needed for 2,800m?',
        answer: '2,800m is moderate altitude. Most riders feel very comfortable, and staying in Tatopani on Day 1 provides a smooth ascent profile.'
      }
    ],
    reviews: [
      {
        id: 'rev-02-1',
        riderName: 'Daniel Schmidt',
        country: 'Germany',
        countryCode: 'DE',
        rating: 5,
        date: 'November 2025',
        comment: 'Unbelievable 3 days! The transition from sub-tropical valley to the wind-carved desert of Mustang is surreal. Bikes were in mint condition.',
        bike: 'Royal Enfield Himalayan 450'
      }
    ],
    relatedTourSlugs: ['annapurna-motorcycle-adventure', 'upper-mustang-motorcycle-expedition'],
    seoTitle: 'Pokhara to Jomsom Motorcycle Tour | 3 Days Himalayan Monster',
    seoDescription: 'Ride the Kali Gandaki valley from Pokhara to Jomsom and Kagbeni on a 3-day adventure motorcycle expedition in Nepal with Himalayan Monster.',
    seoKeywords: ['Pokhara to Jomsom motorcycle tour', 'Kali Gandaki bike ride', 'Kagbeni motorbike trip Nepal', 'Mustang 3 day tour'],
    routeMapDescription: 'Pokhara → Kusma → Beni → Tatopani Hot Springs → Ghasa → Marpha → Jomsom → Kagbeni Gateway → Pokhara.'
  },

  // 03. ANNAPURNA MOTORCYCLE ADVENTURE
  {
    id: 'annapurna-motorcycle-adventure',
    slug: 'annapurna-motorcycle-adventure',
    packageNumber: '03',
    title: 'Annapurna Motorcycle Adventure',
    category: 'motorcycle',
    isFlagship: false,
    tagline: 'From Pokhara to the High Himalayas',
    durationDays: 5,
    durationLabel: '5 DAYS',
    priceUsd: 1150,
    price: '$1,150 / person',
    startingPricePlaceholder: '$1,150 / person',
    currency: 'USD',
    difficulty: 'Intermediate–Challenging',
    routeSummary: 'Pokhara → Tatopani → Jomsom → Kagbeni → Muktinath → Pokhara',
    bestSeason: 'March – June & September – November',
    maxAltitude: '3,710 m (Muktinath Temple)',
    terrain: 'River gorges, rocky alpine switchbacks, high-altitude desert plateaus, paved sections',
    groupSize: '3–8 Riders',
    bikeProvided: 'Royal Enfield Himalayan 450 / Honda CRF300L',
    heroImage: tour3Img,
    galleryImages: [
      tour3Img,
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Go deeper into the Annapurna region and experience the dramatic transition from green Himalayan foothills to the high-altitude desert around Mustang.',
    fullDescription: 'Go deeper into the Annapurna region and experience the dramatic transition from green Himalayan foothills to the high-altitude desert around Mustang.\n\nThis expedition combines mountain riding, Himalayan culture and some of Nepal\'s most spectacular landscapes.',
    routeHighlights: [
      'Annapurna region',
      'Kali Gandaki Valley',
      'Jomsom',
      'Kagbeni',
      'Muktinath',
      'Himalayan desert',
      'Mountain villages',
      'High-altitude riding'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pokhara → Tatopani',
        distanceKm: '105 km',
        ridingTime: '4–5 hrs',
        startAltitude: '820 m',
        endAltitude: '1,190 m',
        maxAltitude: '1,500 m',
        highlights: [
          'Ride through Beni and into the Kali Gandaki Valley',
          'Overnight: Tatopani'
        ],
        description: 'Ride through Beni and into the Kali Gandaki Valley. Soak in natural hot springs beneath towering cliffs.',
        overnight: 'Tatopani'
      },
      {
        day: 2,
        title: 'Tatopani → Jomsom',
        distanceKm: '65 km',
        ridingTime: '4–5 hrs',
        startAltitude: '1,190 m',
        endAltitude: '2,720 m',
        maxAltitude: '2,720 m',
        highlights: [
          'Continue north through the mountain corridor',
          'Overnight: Jomsom'
        ],
        description: 'Continue north through the mountain corridor between the Annapurna and Dhaulagiri massifs. Arrive in Jomsom, the bustling mountain hub.',
        overnight: 'Jomsom'
      },
      {
        day: 3,
        title: 'Jomsom → Kagbeni → Muktinath',
        distanceKm: '35 km',
        ridingTime: '3–4 hrs',
        startAltitude: '2,720 m',
        endAltitude: '3,710 m',
        maxAltitude: '3,710 m',
        highlights: [
          'Ride through Kagbeni toward Muktinath',
          'Explore the area around Muktinath',
          'Overnight: Muktinath'
        ],
        description: 'Ride through medieval Kagbeni into the high-altitude desert plateau toward Muktinath (3,710m). Explore the sacred temple grounds, 108 water spouts, and eternal flame.',
        overnight: 'Muktinath'
      },
      {
        day: 4,
        title: 'Muktinath → Jomsom → Tatopani',
        distanceKm: '95 km',
        ridingTime: '5 hrs',
        startAltitude: '3,710 m',
        endAltitude: '1,190 m',
        maxAltitude: '3,710 m',
        highlights: [
          'Begin the descent through the Kali Gandaki Valley',
          'Overnight: Tatopani'
        ],
        description: 'Begin the descent through the Kali Gandaki Valley, passing apple orchards in Marpha and dramatic waterfalls before returning to Tatopani.',
        overnight: 'Tatopani'
      },
      {
        day: 5,
        title: 'Tatopani → Pokhara',
        distanceKm: '105 km',
        ridingTime: '4–5 hrs',
        startAltitude: '1,190 m',
        endAltitude: '820 m',
        maxAltitude: '1,190 m',
        highlights: [
          'Return through Beni and the surrounding countryside',
          'Final ride into Pokhara Lakeside'
        ],
        description: 'Return through Beni and the surrounding countryside to Pokhara. Conclude with a celebration dinner at Himalayan Monster Base Camp.',
        overnight: 'Pokhara'
      }
    ],
    inclusions: [
      'Dual-sport motorcycle (Royal Enfield Himalayan 450 / CRF300L) with fuel',
      '4 nights mountain lodge accommodation',
      'All meals (Breakfast, Lunch, Dinner) on tour',
      'ACAP & TIMS national park permits',
      'Lead road captain & sweep mechanic',
      'Luggage transport & mechanical backup'
    ],
    exclusions: [
      'Personal riding gear',
      'Personal travel & high-altitude medical insurance',
      'Bar tabs, soda, and discretionary purchases',
      'Tips for crew'
    ],
    accommodation: 'Selected teahouse lodges in Tatopani, Jomsom, and high-altitude lodge in Muktinath.',
    preparationRequirements: [
      'Motorcycle driving license',
      'Experience with gravel, rocks, and tight mountain switchbacks',
      'Warm thermal riding layers for high altitude at Muktinath (3,710m)'
    ],
    faqs: [
      {
        question: 'Will we have time to explore Muktinath temple?',
        answer: 'Yes, Day 3 includes dedicated time to walk around the sacred temple complex, see the eternal natural gas flame, and take in the panoramic views of Dhaulagiri.'
      },
      {
        question: 'How cold does it get in Muktinath?',
        answer: 'During peak riding seasons (Spring and Autumn), daytime temperatures are pleasant (12°C–18°C), while nights can dip near freezing (0°C–5°C). We recommend thermal base layers.'
      }
    ],
    reviews: [
      {
        id: 'rev-03-1',
        riderName: 'Claire Laurent',
        country: 'France',
        countryCode: 'FR',
        rating: 5,
        date: 'October 2025',
        comment: 'Riding up to Muktinath surrounded by 8,000-meter peaks is something I will never forget. Flawless organization by Himalayan Monster.',
        bike: 'Royal Enfield Himalayan 450'
      }
    ],
    relatedTourSlugs: ['manang-motorcycle-expedition', 'upper-mustang-motorcycle-expedition'],
    seoTitle: 'Annapurna Motorcycle Adventure | 5 Days Nepal Ride',
    seoDescription: '5-Day Annapurna & Muktinath motorcycle tour in Nepal with Himalayan Monster. Ride the Kali Gandaki gorge to 3,710m with full support.',
    seoKeywords: ['Annapurna motorcycle tour', 'Muktinath bike trip', 'Nepal 5 day motorcycle tour', 'Himalayan Monster Annapurna'],
    routeMapDescription: 'Pokhara → Beni → Tatopani → Kalopani → Marpha → Jomsom → Kagbeni → Muktinath (3,710m) → Pokhara.'
  },

  // 04. MANANG MOTORCYCLE EXPEDITION
  {
    id: 'manang-motorcycle-expedition',
    slug: 'manang-motorcycle-expedition',
    packageNumber: '04',
    title: 'Manang Motorcycle Expedition',
    category: 'motorcycle',
    isFlagship: false,
    tagline: 'Ride the Road to Manang',
    durationDays: 7,
    durationLabel: '7 DAYS',
    priceUsd: 1650,
    price: '$1,650 / person',
    startingPricePlaceholder: '$1,650 / person',
    currency: 'USD',
    difficulty: 'Challenging',
    routeSummary: 'Pokhara → Besisahar → Chame → Pisang → Manang → Besisahar → Pokhara',
    bestSeason: 'March – May & September – November',
    maxAltitude: '3,540 m (Manang Valley) / 3,700 m (Braka Gompa)',
    terrain: 'Marsyangdi gorge cliff tracks, rocky alpine paths, waterfalls, pine forest roads, high Himalayan plateau',
    groupSize: '3–8 Riders',
    bikeProvided: 'Royal Enfield Himalayan 450 / Honda CRF300L',
    heroImage: tour4Img,
    galleryImages: [
      tour4Img,
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'A serious Himalayan motorcycle adventure following the Marsyangdi Valley deep into the Annapurna region. Rugged roads, mountain villages, waterfalls, suspension bridges and spectacular views.',
    fullDescription: 'A serious Himalayan motorcycle adventure following the Marsyangdi Valley deep into the Annapurna region.\n\nAs the road climbs, the landscape transforms from green valleys into high Himalayan terrain.\n\nExpect rugged roads, mountain villages, waterfalls, suspension bridges and spectacular views.\n\nPrevious motorcycle touring experience recommended.',
    routeHighlights: [
      'Marsyangdi Valley',
      'Besisahar',
      'Chame',
      'Pisang',
      'Manang',
      'Himalayan villages',
      'Mountain roads',
      'High-altitude landscapes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pokhara → Besisahar',
        distanceKm: '110 km',
        ridingTime: '4 hrs',
        startAltitude: '820 m',
        endAltitude: '760 m',
        maxAltitude: '900 m',
        highlights: [
          'Ride from Pokhara toward Besisahar',
          'Overnight: Besisahar'
        ],
        description: 'Ride from Pokhara eastward toward Besisahar, the gateway to the Marsyangdi river valley and the Annapurna circuit trail.',
        overnight: 'Besisahar'
      },
      {
        day: 2,
        title: 'Besisahar → Chame',
        distanceKm: '65 km',
        ridingTime: '5–6 hrs',
        startAltitude: '760 m',
        endAltitude: '2,670 m',
        maxAltitude: '2,670 m',
        highlights: [
          'Enter the Annapurna mountain region',
          'Overnight: Chame'
        ],
        description: 'Enter the Annapurna mountain region. The trail carves into sheer canyon walls along the Marsyangdi, passing towering waterfalls like Tal and Dharapani.',
        overnight: 'Chame'
      },
      {
        day: 3,
        title: 'Chame → Pisang → Manang',
        distanceKm: '45 km',
        ridingTime: '4–5 hrs',
        startAltitude: '2,670 m',
        endAltitude: '3,540 m',
        maxAltitude: '3,540 m',
        highlights: [
          'Ride deeper into the Himalayas through Pisang',
          'Overnight: Manang'
        ],
        description: 'Ride deeper into the Himalayas through pine forests and the curved rock face of Paungda Danda into Upper Pisang and the broad valley of Manang.',
        overnight: 'Manang'
      },
      {
        day: 4,
        title: 'Manang Exploration & Acclimatization',
        distanceKm: '30 km local riding',
        ridingTime: '3 hrs',
        startAltitude: '3,540 m',
        endAltitude: '3,540 m',
        maxAltitude: '3,800 m (Gangapurna Lake viewpoint)',
        highlights: [
          'Acclimatization and exploration day',
          'Explore Manang and surrounding areas',
          'Overnight: Manang'
        ],
        description: 'Acclimatization and exploration day. Explore Manang village, ancient Braka Monastery, Gangapurna Lake, and scenic dirt tracks with Annapurna III and Gangapurna towering above.',
        overnight: 'Manang'
      },
      {
        day: 5,
        title: 'Manang → Lower Manang',
        distanceKm: '40 km',
        ridingTime: '4 hrs',
        startAltitude: '3,540 m',
        endAltitude: '2,700 m',
        maxAltitude: '3,540 m',
        highlights: [
          'Begin the return journey',
          'Overnight: Mountain lodge'
        ],
        description: 'Begin the return journey down through the upper valley with spectacular reverse panoramic views of the Annapurna range.',
        overnight: 'Mountain lodge'
      },
      {
        day: 6,
        title: 'Lower Manang → Besisahar',
        distanceKm: '70 km',
        ridingTime: '5–6 hrs',
        startAltitude: '2,700 m',
        endAltitude: '760 m',
        maxAltitude: '2,700 m',
        highlights: [
          'Descend through the Marsyangdi Valley',
          'Overnight: Besisahar'
        ],
        description: 'Descend through the Marsyangdi Valley, crossing hanging bridges, river waterfalls, and rocky gorge terrain back down to Besisahar.',
        overnight: 'Besisahar'
      },
      {
        day: 7,
        title: 'Besisahar → Pokhara',
        distanceKm: '110 km',
        ridingTime: '4 hrs',
        startAltitude: '760 m',
        endAltitude: '820 m',
        maxAltitude: '900 m',
        highlights: [
          'Final riding day and return to Pokhara'
        ],
        description: 'Final riding day cruising scenic highway curves back into Pokhara. Celebration drinks and trip debrief at Himalayan Monster Base Camp.',
        overnight: 'Pokhara'
      }
    ],
    inclusions: [
      'Royal Enfield Himalayan 450 / Honda CRF300L with all fuel',
      '6 nights mountain lodge and heritage teahouse accommodation',
      'All meals (Breakfast, Lunch, Dinner) during the 7 days',
      'ACAP & TIMS national park permits',
      'Lead road captain & sweeping mechanic with spare parts',
      '4x4 luggage transfer vehicle'
    ],
    exclusions: [
      'Personal riding gear and safety armor',
      'High-altitude emergency medical evacuation insurance',
      'Alcoholic drinks, snacks & personal lodge charges',
      'Staff gratuities'
    ],
    accommodation: 'Handpicked local teahouses and lodges in Besisahar, Chame, Manang, and Pisang.',
    preparationRequirements: [
      'Previous motorcycle touring experience recommended',
      'Comfort with cliffside narrow tracks, rocky drops, and water crossings',
      'Good physical fitness for 3,500m+ mountain environment'
    ],
    faqs: [
      {
        question: 'How technical is the road to Manang?',
        answer: 'The Besisahar–Chame–Manang route is famously rugged. It features single-lane carved cliff roads, loose gravel, rocky sections, and river crossings. Intermediate-to-advanced off-road confidence is recommended.'
      },
      {
        question: 'Is oxygen or medical support available?',
        answer: 'Yes, our team carries high-altitude first aid kits, pulse oximeters for daily monitoring, and emergency response protocols.'
      }
    ],
    reviews: [
      {
        id: 'rev-04-1',
        riderName: 'Liam O\'Connor',
        country: 'Australia',
        countryCode: 'AU',
        rating: 5,
        date: 'October 2025',
        comment: 'Hands down the most epic road on Earth. Riding under waterfalls along the Marsyangdi gorge into the open bowl of Manang was breathtaking.',
        bike: 'Royal Enfield Himalayan 450'
      }
    ],
    relatedTourSlugs: ['annapurna-motorcycle-adventure', 'upper-mustang-motorcycle-expedition'],
    seoTitle: 'Manang Motorcycle Expedition | 7 Days Road to Manang Nepal',
    seoDescription: '7-Day Manang motorcycle tour along the rugged Marsyangdi Valley in Nepal with Himalayan Monster. Expert guides, full mechanical support.',
    seoKeywords: ['Road to Manang motorcycle', 'Manang motorbike expedition', 'Annapurna circuit motorcycle', 'Himalayan Monster Manang'],
    routeMapDescription: 'Pokhara → Dumre → Besisahar → Syange → Chamje → Dharapani → Chame → Upper Pisang → Manang (3,540m) → Pokhara.'
  },

  // 05. UPPER MUSTANG MOTORCYCLE EXPEDITION (THE FLAGSHIP)
  {
    id: 'upper-mustang-motorcycle-expedition',
    slug: 'upper-mustang-motorcycle-expedition',
    packageNumber: '05',
    title: 'Upper Mustang Motorcycle Expedition',
    category: 'motorcycle',
    isFlagship: true,
    flagBadge: 'THE FLAGSHIP',
    tagline: 'Ride Into the Forbidden Kingdom',
    durationDays: 12,
    durationLabel: '12 DAYS',
    priceUsd: 2750,
    price: '$2,750 / person',
    startingPricePlaceholder: '$2,750 / person',
    currency: 'USD',
    difficulty: 'Challenging',
    routeSummary: 'Kathmandu → Pokhara → Tatopani → Jomsom → Kagbeni → Chele → Ghami → Lo Manthang → Kagbeni → Tatopani → Pokhara → Kathmandu',
    bestSeason: 'March – November (Trans-Himalayan Rain Shadow)',
    maxAltitude: '4,660 m (Kora La Tibet Border) / 3,840 m (Lo Manthang)',
    terrain: 'High-altitude desert canyons, red clay cliffs, dry riverbeds, cliffside passes, remote mountain dirt roads',
    groupSize: '4–8 Riders (Small Group Guarantee)',
    bikeProvided: 'Royal Enfield Himalayan 450 / Honda CRF300L',
    heroImage: tour5Img,
    galleryImages: [
      tour5Img,
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'The ultimate Himalayan Monster motorcycle expedition. Travel from Kathmandu into the remote landscapes of Upper Mustang and ride through one of Nepal\'s most extraordinary regions.',
    fullDescription: 'The ultimate Himalayan Monster motorcycle expedition.\n\nTravel from Kathmandu into the remote landscapes of Upper Mustang and ride through one of Nepal\'s most extraordinary regions.\n\nCross high mountain terrain, ancient villages and Himalayan desert landscapes before reaching legendary Lo Manthang.',
    routeHighlights: [
      'Upper Mustang',
      'Lo Manthang',
      'Kagbeni',
      'Chele',
      'Ghami',
      'Kali Gandaki Valley',
      'Ancient monasteries',
      'Tibetan-influenced culture',
      'Himalayan desert',
      'Remote mountain roads'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kathmandu → Pokhara',
        distanceKm: '200 km',
        ridingTime: '6 hrs',
        startAltitude: '1,400 m',
        endAltitude: '820 m',
        maxAltitude: '1,400 m',
        highlights: [
          'Travel to Pokhara',
          'Motorcycle inspection and expedition briefing',
          'Overnight: Pokhara'
        ],
        description: 'Travel to Pokhara. Motorcycle inspection, ergonomics setup, safety briefing, and welcome dinner in Lakeside Pokhara.',
        overnight: 'Pokhara'
      },
      {
        day: 2,
        title: 'Pokhara → Tatopani',
        distanceKm: '105 km',
        ridingTime: '4–5 hrs',
        startAltitude: '820 m',
        endAltitude: '1,190 m',
        maxAltitude: '1,500 m',
        highlights: [
          'Begin the expedition',
          'Ride along the Kali Gandaki Valley',
          'Overnight: Tatopani'
        ],
        description: 'Begin the expedition. Ride west from Pokhara into Beni and climb along the Kali Gandaki corridor to Tatopani hot springs.',
        overnight: 'Tatopani'
      },
      {
        day: 3,
        title: 'Tatopani → Jomsom → Kagbeni',
        distanceKm: '75 km',
        ridingTime: '5 hrs',
        startAltitude: '1,190 m',
        endAltitude: '2,800 m',
        maxAltitude: '2,800 m',
        highlights: [
          'Ride north through the Kali Gandaki Valley',
          'Enter the trans-Himalayan desert',
          'Overnight: Kagbeni'
        ],
        description: 'Ride north through the deepest gorge on Earth. Pass Marpha apple orchards and Jomsom into ancient Kagbeni checkpoint.',
        overnight: 'Kagbeni'
      },
      {
        day: 4,
        title: 'Kagbeni → Chele',
        distanceKm: '35 km',
        ridingTime: '4 hrs',
        startAltitude: '2,800 m',
        endAltitude: '3,050 m',
        maxAltitude: '3,100 m',
        highlights: [
          'Enter Upper Mustang restricted area',
          'Red clay canyons and switchbacks',
          'Overnight: Chele'
        ],
        description: 'Enter Upper Mustang with special permits stamped. Cross the Kali Gandaki bridge and climb steep red canyon switchbacks to Chele.',
        overnight: 'Chele'
      },
      {
        day: 5,
        title: 'Chele → Ghami',
        distanceKm: '45 km',
        ridingTime: '5 hrs',
        startAltitude: '3,050 m',
        endAltitude: '3,520 m',
        maxAltitude: '4,010 m (Nyi La Pass)',
        highlights: [
          'Cross high mountain terrain and traditional Mustang settlements',
          'Cross Nyi La pass (4,010m)',
          'Overnight: Ghami'
        ],
        description: 'Cross high mountain terrain and traditional Mustang settlements. Ride over Nyi La pass (4,010m) and descend past the longest Mani prayer wall in Nepal to Ghami.',
        overnight: 'Ghami'
      },
      {
        day: 6,
        title: 'Ghami → Lo Manthang',
        distanceKm: '40 km',
        ridingTime: '4 hrs',
        startAltitude: '3,520 m',
        endAltitude: '3,840 m',
        maxAltitude: '3,950 m (Lo La Pass)',
        highlights: [
          'Ride toward the legendary walled city',
          'First view of Lo Manthang from Lo La Pass',
          'Overnight: Lo Manthang'
        ],
        description: 'Ride through the red cliffs of Dhakmar and Charang Dzong fortress before ascending Lo La pass for the first jaw-dropping view of the ancient walled city of Lo Manthang.',
        overnight: 'Lo Manthang'
      },
      {
        day: 7,
        title: 'Lo Manthang Exploration & Kora La Border',
        distanceKm: '50 km',
        ridingTime: '4–5 hrs',
        startAltitude: '3,840 m',
        endAltitude: '3,840 m',
        maxAltitude: '4,660 m (Kora La)',
        highlights: [
          'Explore Lo Manthang and surrounding areas',
          'Ride to Chhoser sky caves & Kora La Tibet Border (4,660m)',
          'Overnight: Lo Manthang'
        ],
        description: 'Explore Lo Manthang and surrounding areas. Ride north to Chhoser cave monasteries and up to Kora La (4,660m) on the border of Tibet.',
        overnight: 'Lo Manthang'
      },
      {
        day: 8,
        title: 'Lo Manthang → Ghami → Kagbeni',
        distanceKm: '80 km',
        ridingTime: '6 hrs',
        startAltitude: '3,840 m',
        endAltitude: '2,800 m',
        maxAltitude: '4,010 m',
        highlights: [
          'Begin the journey out of Upper Mustang',
          'Overnight: Kagbeni'
        ],
        description: 'Begin the journey out of Upper Mustang along alternate ridgelines, descending back toward Kagbeni.',
        overnight: 'Kagbeni'
      },
      {
        day: 9,
        title: 'Kagbeni → Jomsom → Tatopani',
        distanceKm: '75 km',
        ridingTime: '5 hrs',
        startAltitude: '2,800 m',
        endAltitude: '1,190 m',
        maxAltitude: '2,800 m',
        highlights: [
          'Descend through the Kali Gandaki Valley',
          'Overnight: Tatopani'
        ],
        description: 'Descend south through the Kali Gandaki Valley. Soak in Tatopani hot springs to celebrate the successful descent.',
        overnight: 'Tatopani'
      },
      {
        day: 10,
        title: 'Tatopani → Pokhara',
        distanceKm: '105 km',
        ridingTime: '4–5 hrs',
        startAltitude: '1,190 m',
        endAltitude: '820 m',
        maxAltitude: '1,190 m',
        highlights: [
          'Return to Pokhara',
          'Overnight: Pokhara'
        ],
        description: 'Return to Pokhara. Relax lakeside, enjoy a celebratory dinner, and share ride stories with the crew.',
        overnight: 'Pokhara'
      },
      {
        day: 11,
        title: 'Pokhara → Kathmandu',
        distanceKm: '200 km',
        ridingTime: '6 hrs',
        startAltitude: '820 m',
        endAltitude: '1,400 m',
        maxAltitude: '1,400 m',
        highlights: [
          'Return to Kathmandu',
          'Overnight: Kathmandu'
        ],
        description: 'Return to Kathmandu by highway ride or scenic flight transfer. Farewell dinner in Thamel.',
        overnight: 'Kathmandu'
      },
      {
        day: 12,
        title: 'Departure / Contingency Day',
        distanceKm: '—',
        ridingTime: '—',
        startAltitude: '1,400 m',
        endAltitude: '1,400 m',
        maxAltitude: '1,400 m',
        highlights: [
          'Departure or contingency day'
        ],
        description: 'Departure or contingency day for international connections.',
        overnight: 'Departure'
      }
    ],
    inclusions: [
      'Special Upper Mustang Restricted Area Permit ($500 USD government permit included)',
      'ACAP (Annapurna Conservation Area) & TIMS permits',
      'Royal Enfield Himalayan 450 / Honda CRF300L with all fuel',
      '11 nights lodge & authentic Tibetan teahouse accommodation',
      'All meals (Breakfast, Lunch, Dinner) throughout the 12 days',
      '4x4 Backup Support Truck with spare parts, mechanic & luggage transport',
      'Veteran local Mustang road captain & certified government liaison',
      'Emergency oxygen cylinder, sat-com, and first aid kit'
    ],
    exclusions: [
      'International flights to/from Nepal',
      'Nepal tourist entry visa ($50 for 30 days)',
      'Personal riding apparel (helmets, armored jackets available for rent)',
      'Emergency medical evacuation & travel insurance',
      'Alcohol, personal snacks, and staff tips'
    ],
    accommodation: 'Boutique hotels in Kathmandu and Pokhara; authentic Tibetan heritage guesthouses and teahouses across Mustang.',
    preparationRequirements: [
      'Valid motorcycle license (national or international)',
      'Physical stamina for multi-day high-altitude riding (up to 4,660m)',
      'Passport with at least 6 months validity for permit issuance'
    ],
    faqs: [
      {
        question: 'Why is Upper Mustang special?',
        answer: 'Upper Mustang was closed to foreigners until 1992. It is a preserved enclave of ancient Tibetan Buddhist civilization, complete with 15th-century walled towns, royal palaces, and sacred sky caves.'
      },
      {
        question: 'What is the road surface like in Upper Mustang?',
        answer: 'Unpaved dirt tracks, packed gravel, dry riverbeds, and cliffside switchbacks. Our Royal Enfield Himalayan 450s and CRF300Ls are dialed specifically for this terrain.'
      },
      {
        question: 'Can I visit Kora La on the Tibet border?',
        answer: 'Yes! On Day 7, we ride from Lo Manthang to Kora La Pass at 4,660m, overlooking the vast Tibetan plateau.'
      }
    ],
    reviews: [
      {
        id: 'rev-05-1',
        riderName: 'Stefan Bergmann',
        country: 'Austria',
        countryCode: 'AT',
        rating: 5,
        date: 'September 2025',
        comment: 'Riding into Lo Manthang is the pinnacle of adventure motorcycling. The support truck, food, bikes, and guides were world-class. Worth every cent.',
        bike: 'Royal Enfield Himalayan 450'
      }
    ],
    relatedTourSlugs: ['annapurna-motorcycle-adventure', 'mustang-enduro-mtb-expedition'],
    seoTitle: 'Upper Mustang Motorcycle Expedition | 12 Days Flagship Nepal',
    seoDescription: 'The ultimate 12-day Upper Mustang motorcycle tour to Lo Manthang & Kora La (4,660m) with Himalayan Monster. $500 permit, support truck & bikes included.',
    seoKeywords: ['Upper Mustang motorcycle tour', 'Lo Manthang bike ride', 'Nepal motorcycle expedition', 'Himalayan Monster Upper Mustang'],
    routeMapDescription: 'Kathmandu → Pokhara → Tatopani → Jomsom → Kagbeni → Chele → Ghami → Tsarang → Lo Manthang (3,840m) → Kora La Border (4,660m) → Pokhara → Kathmandu.'
  },

  // ==========================================
  // MTB EXPEDITIONS
  // ==========================================

  // 06. POKHARA MTB EXPLORER
  {
    id: 'pokhara-mtb-explorer',
    slug: 'pokhara-mtb-explorer',
    packageNumber: '06',
    title: 'Pokhara MTB Explorer',
    category: 'mtb',
    isFlagship: false,
    tagline: 'Discover Pokhara on Two Wheels',
    durationDays: 1,
    durationLabel: '1 DAY',
    priceUsd: 125,
    price: '$125 / person',
    startingPricePlaceholder: '$125 / person',
    currency: 'USD',
    difficulty: 'Beginner–Intermediate',
    routeSummary: 'Pokhara → Sarangkot → Naudanda → Pokhara',
    bestSeason: 'September – June',
    maxAltitude: '1,592 m (Sarangkot)',
    terrain: 'Countryside singletrack, village walking trails, forest descents, scenic ridgeline jeep tracks',
    groupSize: '1–6 Riders',
    bikeProvided: 'Commencal / Trek Full-Suspension Enduro MTB (150–160mm)',
    heroImage: tour6Img,
    galleryImages: [
      tour6Img,
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Explore Pokhara beyond the tourist streets. Ride through countryside trails, mountain villages and scenic viewpoints while enjoying panoramic Himalayan views.',
    fullDescription: 'Explore Pokhara beyond the tourist streets.\n\nRide through countryside trails, mountain villages and scenic viewpoints while enjoying panoramic Himalayan views.\n\nHighlights include Sarangkot, Annapurna & Machhapuchhre views, village trails, and scenic flowing descents.',
    routeHighlights: [
      'Sarangkot',
      'Annapurna views',
      'Machhapuchhre',
      'Village trails',
      'Forest sections',
      'Scenic descents',
      'Pokhara Valley'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pokhara → Sarangkot → Naudanda → Pokhara',
        distanceKm: '35 km',
        ridingTime: '4–5 hrs',
        startAltitude: '820 m',
        endAltitude: '820 m',
        maxAltitude: '1,592 m',
        highlights: [
          'Bike fitting and safety briefing',
          'Ride toward Sarangkot and continue through surrounding countryside trails',
          'Stop at viewpoints and villages before descending through scenic trails toward Pokhara'
        ],
        description: 'Bike fitting and safety briefing at base camp. Ride toward Sarangkot and continue through surrounding countryside trails. Stop at viewpoints and traditional villages before descending through scenic flowing trails toward Pokhara.',
        overnight: 'Pokhara'
      }
    ],
    inclusions: [
      'Premium full-suspension enduro mountain bike',
      'Certified Himalayan MTB guide & trail mechanic',
      'Uplift vehicle shuttle for main climb',
      'Helmet & knee/elbow protective pads',
      'Trailside organic village lunch & refreshments'
    ],
    exclusions: [
      'Personal riding shoes & apparel',
      'Personal travel & accident insurance',
      'Alcoholic drinks & personal snacks',
      'Tips for trail guide'
    ],
    accommodation: 'Day tour return to your Pokhara accommodation.',
    preparationRequirements: [
      'Basic to intermediate mountain bike trail experience',
      'Comfortable sports clothing, flat shoes, and sunscreen'
    ],
    faqs: [
      {
        question: 'Are e-bikes available for this tour?',
        answer: 'Yes! High-torque E-MTBs (Bosch/Shimano EP8) are available as an upgrade upon request.'
      },
      {
        question: 'What is the terrain like?',
        answer: 'The route features smooth singletrack, stone village steps, and scenic pine-forested dirt roads with options to adjust technical difficulty based on your skill level.'
      }
    ],
    reviews: [
      {
        id: 'rev-06-1',
        riderName: 'Sarah Jenkins',
        country: 'United Kingdom',
        countryCode: 'GB',
        rating: 5,
        date: 'December 2025',
        comment: 'Brilliant day! We rode incredible singletrack high above Phewa Lake with the whole Annapurna massif in front of us. Top-notch bikes!',
        bike: 'Trek Slash Enduro'
      }
    ],
    relatedTourSlugs: ['annapurna-mtb-adventure', 'pokhara-himalayan-day-ride'],
    seoTitle: 'Pokhara MTB Explorer | 1 Day Mountain Bike Tour Nepal',
    seoDescription: '1-Day mountain bike tour in Pokhara with Himalayan Monster. Ride Sarangkot and Naudanda singletracks with Annapurna views.',
    seoKeywords: ['Pokhara mountain bike tour', 'Sarangkot MTB', 'Nepal 1 day MTB tour', 'Himalayan Monster MTB'],
    routeMapDescription: 'Pokhara Lakeside → Sarangkot Ridge Shuttle → Naudanda Flow Trails → Pame Singletrack → Pokhara.'
  },

  // 07. ANNAPURNA MTB ADVENTURE
  {
    id: 'annapurna-mtb-adventure',
    slug: 'annapurna-mtb-adventure',
    packageNumber: '07',
    title: 'Annapurna MTB Adventure',
    category: 'mtb',
    isFlagship: false,
    tagline: 'Ride Through the Annapurna Foothills',
    durationDays: 5,
    durationLabel: '5 DAYS',
    priceUsd: 1150,
    price: '$1,150 / person',
    startingPricePlaceholder: '$1,150 / person',
    currency: 'USD',
    difficulty: 'Intermediate–Challenging',
    routeSummary: 'Pokhara → Annapurna foothills → mountain villages → scenic trails → Pokhara',
    bestSeason: 'March – May & September – December',
    maxAltitude: '2,600 m (Foothill Ridges)',
    terrain: 'Ancient Gurung walking paths, singletrack, village trails, rhododendron forests, fast downhill descents',
    groupSize: '2–8 Riders',
    bikeProvided: 'High-End Full-Suspension Enduro MTB (160mm travel)',
    heroImage: tour7Img,
    galleryImages: [
      tour7Img,
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'A multi-day mountain biking adventure through the Annapurna foothills. Ride a combination of mountain roads, singletrack, village trails, forests and long scenic descents.',
    fullDescription: 'A multi-day mountain biking adventure through the Annapurna foothills.\n\nRide a combination of mountain roads, singletrack, village trails, forests and long scenic descents.\n\nExperience Annapurna foothills, Gurung mountain villages, technical sections, and rural Nepal hospitality.',
    routeHighlights: [
      'Annapurna foothills',
      'Mountain villages',
      'Singletrack',
      'Forest trails',
      'Himalayan viewpoints',
      'Technical sections',
      'Scenic descents',
      'Rural Nepal'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pokhara → Foothills',
        distanceKm: '30 km',
        ridingTime: '4 hrs',
        startAltitude: '820 m',
        endAltitude: '1,600 m',
        maxAltitude: '1,750 m',
        highlights: [
          'Bike fitting, briefing and first riding section',
          'Overnight: Mountain village'
        ],
        description: 'Bike fitting, briefing and first riding section into the rolling green foothills beneath Machhapuchhre. Settle into a traditional village eco-lodge.',
        overnight: 'Mountain village'
      },
      {
        day: 2,
        title: 'Foothills → Higher Trails',
        distanceKm: '38 km',
        ridingTime: '5 hrs',
        startAltitude: '1,600 m',
        endAltitude: '2,200 m',
        maxAltitude: '2,400 m',
        highlights: [
          'Climb toward higher terrain through villages and mountain trails',
          'Overnight: Mountain village'
        ],
        description: 'Climb toward higher terrain through stone villages and pine forest trails with vehicle shuttle assists for major climbs.',
        overnight: 'Mountain village'
      },
      {
        day: 3,
        title: 'Annapurna Mountain Riding',
        distanceKm: '42 km',
        ridingTime: '5–6 hrs',
        startAltitude: '2,200 m',
        endAltitude: '2,100 m',
        maxAltitude: '2,600 m',
        highlights: [
          'The main adventure riding day',
          'Challenging terrain, singletrack and spectacular Himalayan scenery',
          'Overnight: Mountain village'
        ],
        description: 'The main adventure riding day. Expect challenging terrain, alpine singletrack, stone switchbacks, and spectacular views of Annapurna South and Hiunchuli.',
        overnight: 'Mountain village'
      },
      {
        day: 4,
        title: 'Scenic Descent',
        distanceKm: '35 km',
        ridingTime: '4 hrs',
        startAltitude: '2,100 m',
        endAltitude: '1,100 m',
        maxAltitude: '2,100 m',
        highlights: [
          'Long downhill sections through forests and villages',
          'Overnight: Lower mountain region'
        ],
        description: 'Long downhill sections through rhododendron forests, terraced rice paddies, and suspension bridge crossings to a riverside lodge.',
        overnight: 'Lower mountain region'
      },
      {
        day: 5,
        title: 'Return to Pokhara',
        distanceKm: '28 km',
        ridingTime: '3–4 hrs',
        startAltitude: '1,100 m',
        endAltitude: '820 m',
        maxAltitude: '1,100 m',
        highlights: [
          'Final trail sections before returning to Pokhara'
        ],
        description: 'Final trail sections and fast descents along river canyons before cruising back to Pokhara for a celebratory wrap party.',
        overnight: 'Pokhara'
      }
    ],
    inclusions: [
      'High-end full-suspension enduro mountain bike',
      '4 nights village lodge and homestay accommodation',
      'All meals (Breakfast, Lunch, Dinner) & trailside snacks',
      'Dedicated 4x4 luggage transfer & shuttle vehicle',
      'Certified lead MTB guide & mechanic with spare parts',
      'ACAP conservation permits & local road fees'
    ],
    exclusions: [
      'Personal cycling helmet & protective pads (rental available)',
      'Travel & emergency medical evacuation insurance',
      'Alcoholic drinks & personal lodge extras',
      'Crew gratuities'
    ],
    accommodation: 'Handpicked Gurung village homestays and community eco-lodges.',
    preparationRequirements: [
      'Intermediate to advanced mountain bike singletrack skills',
      'Comfort with natural trail features (roots, rocks, tight switchbacks)',
      'Good cardiovascular fitness'
    ],
    faqs: [
      {
        question: 'How much climbing versus descending is involved?',
        answer: 'We utilize 4x4 support vehicles for major uphill transfers to maximize over 8,000 vertical meters of world-class singletrack descents over the 5 days.'
      },
      {
        question: 'Can I bring my own mountain bike?',
        answer: 'Yes! Riders bringing their own bikes receive a discount. We provide full workshop assembly and tuning support at Base Camp.'
      }
    ],
    reviews: [
      {
        id: 'rev-07-1',
        riderName: 'Jonas Keller',
        country: 'Switzerland',
        countryCode: 'CH',
        rating: 5,
        date: 'November 2025',
        comment: 'Riding Nepal\'s ancient walking trails is unlike anything in the Alps. The flow, the people, the hospitality—pure magic!',
        bike: 'Commencal Meta AM'
      }
    ],
    relatedTourSlugs: ['mustang-enduro-mtb-expedition', 'pokhara-mtb-explorer'],
    seoTitle: 'Annapurna MTB Adventure | 5 Days Mountain Biking Nepal',
    seoDescription: '5-Day Annapurna foothills mountain biking expedition in Nepal with Himalayan Monster. Singletrack, Gurung villages & vehicle shuttles.',
    seoKeywords: ['Annapurna MTB tour', 'Nepal mountain bike 5 days', 'Singletrack Nepal', 'Himalayan Monster MTB'],
    routeMapDescription: 'Pokhara → Ghandruk Foothills → Landruk Trails → Panchase Ridge → Pame Flow → Pokhara.'
  },

  // 08. MUSTANG ENDURO MTB EXPEDITION (THE MTB FLAGSHIP)
  {
    id: 'mustang-enduro-mtb-expedition',
    slug: 'mustang-enduro-mtb-expedition',
    packageNumber: '08',
    title: 'Mustang Enduro MTB Expedition',
    category: 'mtb',
    isFlagship: true,
    flagBadge: 'THE MTB FLAGSHIP',
    tagline: 'Ride the Himalayan Desert',
    durationDays: 9,
    durationLabel: '9 DAYS',
    priceUsd: 2100,
    price: '$2,100 / person',
    startingPricePlaceholder: '$2,100 / person',
    currency: 'USD',
    difficulty: 'Challenging',
    routeSummary: 'Pokhara → Tatopani → Jomsom → Kagbeni → Muktinath → Mustang → Jomsom → Tatopani → Pokhara',
    bestSeason: 'March – June & September – November',
    maxAltitude: '3,800 m (Lupra Pass / Muktinath Ridge)',
    terrain: 'High-desert natural singletrack, scree chutes, shale ridgelines, 1,200m vertical descents, river gorge tracks',
    groupSize: '3–8 Riders (Experienced MTB)',
    bikeProvided: 'High-Performance Full-Suspension Enduro MTB (160–170mm travel)',
    heroImage: tour8Img,
    galleryImages: [
      tour8Img,
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'This is Himalayan Monster\'s flagship mountain-bike expedition. Ride from the green valleys around Pokhara into the dry, dramatic landscape of Mustang. Mountain roads, singletrack, enduro sections, technical terrain, high-altitude riding and long descents.',
    fullDescription: 'This is Himalayan Monster\'s flagship mountain-bike expedition.\n\nRide from the green valleys around Pokhara into the dry, dramatic landscape of Mustang.\n\nThe journey combines mountain roads, singletrack, enduro sections, technical terrain, high-altitude riding and long descents.\n\nRecommended for experienced mountain bikers.',
    routeHighlights: [
      'Mustang',
      'Kali Gandaki Valley',
      'Jomsom',
      'Kagbeni',
      'Muktinath',
      'Himalayan desert',
      'Enduro riding',
      'Singletrack',
      'Technical sections',
      'Long descents',
      'Traditional villages'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pokhara → Tatopani',
        distanceKm: '105 km',
        ridingTime: '4–5 hrs (ride & shuttle)',
        startAltitude: '820 m',
        endAltitude: '1,190 m',
        maxAltitude: '1,500 m',
        highlights: [
          'Begin the journey into the Kali Gandaki Valley',
          'Overnight: Tatopani'
        ],
        description: 'Begin the journey into the Kali Gandaki Valley with a mix of warmup singletrack and 4x4 transfer. Settle in Tatopani hot springs.',
        overnight: 'Tatopani'
      },
      {
        day: 2,
        title: 'Tatopani → Jomsom',
        distanceKm: '65 km',
        ridingTime: '5 hrs',
        startAltitude: '1,190 m',
        endAltitude: '2,720 m',
        maxAltitude: '2,720 m',
        highlights: [
          'Continue north toward Jomsom',
          'Enter the trans-Himalayan desert',
          'Overnight: Jomsom'
        ],
        description: 'Continue north toward Jomsom through the deepest gorge on Earth, transitioning from green hills to high alpine desert.',
        overnight: 'Jomsom'
      },
      {
        day: 3,
        title: 'Jomsom → Kagbeni',
        distanceKm: '25 km',
        ridingTime: '4 hrs',
        startAltitude: '2,720 m',
        endAltitude: '2,800 m',
        maxAltitude: '2,900 m',
        highlights: [
          'Ride through the high Himalayan valley',
          'Explore ancient mud-walled Kagbeni',
          'Overnight: Kagbeni'
        ],
        description: 'Ride through the high Himalayan valley along ancient trading routes into the medieval fortified village of Kagbeni.',
        overnight: 'Kagbeni'
      },
      {
        day: 4,
        title: 'Kagbeni → Muktinath',
        distanceKm: '30 km',
        ridingTime: '4–5 hrs',
        startAltitude: '2,800 m',
        endAltitude: '3,710 m',
        maxAltitude: '3,710 m',
        highlights: [
          'Climb toward Muktinath',
          'Explore holy temples and high desert plateaus',
          'Overnight: Muktinath'
        ],
        description: 'Climb toward Muktinath (3,710m) with high-altitude views of Nilgiri, Dhaulagiri, and Thorong Peak.',
        overnight: 'Muktinath'
      },
      {
        day: 5,
        title: 'Muktinath → Mustang Trails',
        distanceKm: '35 km',
        ridingTime: '5 hrs',
        startAltitude: '3,710 m',
        endAltitude: '3,200 m',
        maxAltitude: '3,800 m (Lupra Pass)',
        highlights: [
          'Begin the main Mustang riding experience',
          'Famous Lupra Valley 1,200m vertical singletrack descent',
          'Overnight: Mustang region'
        ],
        description: 'Begin the main Mustang riding experience. Drop into the world-renowned Lupra Pass singletrack—1,200 vertical meters of natural flow and shale switchbacks through a hidden canyon.',
        overnight: 'Mustang region'
      },
      {
        day: 6,
        title: 'Mustang Enduro Exploration',
        distanceKm: '40 km',
        ridingTime: '5–6 hrs',
        startAltitude: '3,200 m',
        endAltitude: '3,200 m',
        maxAltitude: '3,800 m',
        highlights: [
          'Dedicated trail day',
          'Explore surrounding Mustang trails and terrain',
          'Technical riding and optional trail variations',
          'Overnight: Mustang region'
        ],
        description: 'Dedicated trail day. Explore surrounding Mustang trails and terrain. Technical riding, shale ridge chutes, and optional trail variations depending on conditions and rider ability.',
        overnight: 'Mustang region'
      },
      {
        day: 7,
        title: 'Mustang → Jomsom',
        distanceKm: '30 km',
        ridingTime: '4 hrs',
        startAltitude: '3,200 m',
        endAltitude: '2,720 m',
        maxAltitude: '3,200 m',
        highlights: [
          'Begin the descent toward Jomsom',
          'Overnight: Jomsom'
        ],
        description: 'Begin the descent toward Jomsom via Dhumba Lake and high cliff trails overlooking the Kali Gandaki river.',
        overnight: 'Jomsom'
      },
      {
        day: 8,
        title: 'Jomsom → Tatopani',
        distanceKm: '65 km',
        ridingTime: '5 hrs',
        startAltitude: '2,720 m',
        endAltitude: '1,190 m',
        maxAltitude: '2,720 m',
        highlights: [
          'Ride south through the Kali Gandaki Valley',
          'Overnight: Tatopani'
        ],
        description: 'Ride south through the Kali Gandaki Valley with fast descents and river crossings, relaxing at Tatopani hot springs.',
        overnight: 'Tatopani'
      },
      {
        day: 9,
        title: 'Tatopani → Pokhara',
        distanceKm: '105 km',
        ridingTime: '4–5 hrs',
        startAltitude: '1,190 m',
        endAltitude: '820 m',
        maxAltitude: '1,190 m',
        highlights: [
          'Final riding day and return to Pokhara'
        ],
        description: 'Final riding day and return to Pokhara. Celebrate with the entire Himalayan Monster trail crew.',
        overnight: 'Pokhara'
      }
    ],
    inclusions: [
      'High-performance full-suspension enduro mountain bike (160–170mm)',
      '8 nights mountain lodge & Tibetan teahouse accommodation',
      'All meals (Breakfast, Lunch, Dinner) & trailside nutrition',
      '4x4 Support Vehicle for all luggage transfers, high pass shuttles & spares',
      'ACAP & Mustang conservation area permits',
      'Certified pro enduro mountain guide & dedicated trail mechanic',
      'Full spares support & workshop tuning'
    ],
    exclusions: [
      'International flights to/from Nepal',
      'Personal travel & high-altitude medical evacuation insurance',
      'Personal helmet, knee/elbow armor & riding kit (rental available)',
      'Alcoholic drinks & personal lodge extras',
      'Crew tips'
    ],
    accommodation: 'Handpicked authentic Tibetan heritage lodges in Kagbeni, Jomsom, Muktinath, and Tatopani.',
    preparationRequirements: [
      'Recommended for experienced mountain bikers with solid singletrack & enduro technical skills',
      'Confidence on loose scree, rocky drop-offs, and high-speed descents',
      'Good physical conditioning for riding above 3,500m'
    ],
    faqs: [
      {
        question: 'Why is the Lupra Valley descent so famous?',
        answer: 'The Lupra Pass descent drops over 1,200 vertical meters through an ancient gorge. It is considered one of the top 5 natural singletrack mountain bike descents on the planet.'
      },
      {
        question: 'Are full-face helmets recommended?',
        answer: 'We provide both full-face and open-face enduro helmets. For high-speed shale sections, full-face protection is strongly recommended.'
      }
    ],
    reviews: [
      {
        id: 'rev-08-1',
        riderName: 'Matteo Rossi',
        country: 'Italy',
        countryCode: 'IT',
        rating: 5,
        date: 'October 2025',
        comment: 'The Lupra Valley singletrack is mind-blowing. 9 days of unreal high-desert enduro riding. The guides knew every hidden line in Mustang!',
        bike: 'Trek Slash 9.8'
      }
    ],
    relatedTourSlugs: ['upper-mustang-motorcycle-expedition', 'annapurna-mtb-adventure'],
    seoTitle: 'Mustang Enduro MTB Expedition | 9 Days Flagship Mountain Bike Nepal',
    seoDescription: 'The ultimate 9-day Mustang Enduro mountain bike expedition in Nepal with Himalayan Monster. Lupra Pass, Muktinath & high-desert singletrack.',
    seoKeywords: ['Mustang MTB tour', 'Nepal enduro mountain biking', 'Lupra pass singletrack', 'Himalayan Monster Mustang MTB'],
    routeMapDescription: 'Pokhara → Tatopani → Jomsom → Kagbeni → Muktinath (3,710m) → Lupra Pass (3,800m) → Marpha → Tatopani → Pokhara.'
  }
];

export const TOURS_DATA: Expedition[] = RAW_TOURS_DATA.map((t) => ({
  ...t,
  thingsToDo: DESTINATION_ACTIVITIES_BY_TOUR[t.id] || DESTINATION_ACTIVITIES_BY_TOUR[t.slug] || []
}));

