import { Expedition } from '../types';

export const TOURS_DATA: Expedition[] = [
  {
    id: 'upper-mustang-motorcycle',
    slug: 'upper-mustang-motorcycle-tour',
    title: 'Upper Mustang Himalayan Expedition',
    category: 'motorcycle',
    isFlagship: true,
    tagline: 'Enter the Forbidden Kingdom on Two Wheels',
    durationDays: 12,
    durationLabel: '10–12 DAYS',
    difficulty: 'Challenging',
    startingPricePlaceholder: 'Price on request (Inquire for group/private)',
    currency: 'USD',
    bestSeason: 'March – June & September – November',
    maxAltitude: '4,660 m (Kora La Tibet Border)',
    terrain: 'High-altitude gravel, cliffside switchbacks, dry riverbeds, suspension crossings',
    groupSize: '4–8 Riders (Small Group Guarantee)',
    bikeProvided: 'Royal Enfield Himalayan 450 / Scram 411 / Honda CRF300L',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Ride beyond the ordinary into the high desert of Mustang—ancient walled kingdoms, dramatic red clay cliffs, endless mountain tracks, and the ultimate Himalayan frontier.',
    fullDescription: 'The Upper Mustang Motorcycle Expedition is our crown jewel. Restricted to foreign travelers until 1992, Upper Mustang (the ancient Kingdom of Lo) remains one of the most culturally preserved and geologically staggering places on Earth. Starting from our lakeside base in Pokhara, you ascend through the world\'s deepest gorge (Kali Gandaki) between the 8,000m giants Annapurna I and Dhaulagiri, before breaching the rain-shadow desert. Here, the landscape transforms into windswept red canyons, 1,000-year-old Buddhist sky caves, and the legendary walled capital of Lo Manthang.',
    routeHighlights: [
      'Ride the legendary Kali Gandaki River canyon between Annapurna and Dhaulagiri',
      'Cross high-altitude passes over 3,800m with panoramic views of Nilgiri and Damodar Himal',
      'Explore the 15th-century walled city of Lo Manthang and royal palace',
      'Ride to the Kora La Pass (4,660m) on the border of Tibet',
      'Visit ancient sky caves in Chhoser and 8th-century Ghar Gompa',
      'Holy pilgrimage stop at Muktinath (3,710m)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Pokhara & Machine Briefing',
        distanceKm: '25 km warmup',
        ridingTime: '1.5 hrs',
        startAltitude: '820 m',
        endAltitude: '820 m',
        maxAltitude: '1,400 m',
        highlights: ['Bike setup and ergonomics fitting', 'Briefing over coffee in Lakeside Pokhara', 'Sunset ride to Sarangkot ridge'],
        description: 'Meet at Himalayan Monster base camp in Pokhara. We dial in bike setups, suspension settings, and safety gear. Afternoon shakedown ride up to Sarangkot to test machines before an expedition dinner.',
        overnight: 'Lakeside Boutique Lodge, Pokhara'
      },
      {
        day: 2,
        title: 'Pokhara to Tatopani Hot Springs',
        distanceKm: '110 km',
        ridingTime: '4–5 hrs',
        startAltitude: '820 m',
        endAltitude: '1,190 m',
        maxAltitude: '1,500 m',
        highlights: ['Tarmac to dirt transition at Beni', 'Kali Gandaki river valley entry', 'Natural hot springs soak in Tatopani'],
        description: 'Leaving Pokhara westward, we transition onto rocky valley terrain after Beni. The ride hugs the roaring Kali Gandaki river. We settle into Tatopani for a soak in natural geothermal waters.',
        overnight: 'Riverside Lodge, Tatopani'
      },
      {
        day: 3,
        title: 'Tatopani to Kagbeni via Marpha',
        distanceKm: '75 km',
        ridingTime: '5–6 hrs',
        startAltitude: '1,190 m',
        endAltitude: '2,800 m',
        maxAltitude: '2,800 m',
        highlights: ['Rupse Waterfall crossing', 'Cobblestone alleyways of Marpha (Apple Capital)', 'Wind-tunnel valley ride to ancient Kagbeni'],
        description: 'We ride deeper into the gorge. The air thins and vegetation drops away as we enter the trans-Himalayan rain shadow. We pass apple orchards in Marpha and reach Kagbeni—the ancient gateway checkpoint to Upper Mustang.',
        overnight: 'Heritage Tibetan Guest House, Kagbeni'
      },
      {
        day: 4,
        title: 'Kagbeni to Chele & Syangboche',
        distanceKm: '40 km',
        ridingTime: '4–5 hrs',
        startAltitude: '2,800 m',
        endAltitude: '3,800 m',
        maxAltitude: '3,850 m',
        highlights: ['Special Restricted Area Permit checkpoint', 'Red clay cliffs of Tangbe and Chhusang', 'Steep switchbacks over Taklam La'],
        description: 'Our special permits are stamped as we officially enter Upper Mustang. The dirt road climbs through dramatic ochre and crimson rock chimneys. River crossings and loose dirt climbs test throttle control.',
        overnight: 'Mountain Teahouse, Syangboche'
      },
      {
        day: 5,
        title: 'Syangboche to Charang (Tsarang)',
        distanceKm: '45 km',
        ridingTime: '4–5 hrs',
        startAltitude: '3,800 m',
        endAltitude: '3,560 m',
        maxAltitude: '4,010 m (Nyi La Pass)',
        highlights: ['Crossing Nyi La Pass (4,010m)', 'Longest Mani prayer wall in Mustang at Ghami', 'The red cliffs of Dhakmar'],
        description: 'Ascend over the high Nyi La pass where prayer flags whip in the Himalayan winds. We ride across wide lunar plateaus to Charang, home to an ancient five-story white Dzong fort and 14th-century monastery.',
        overnight: 'Traditional Tibetan Inn, Charang'
      },
      {
        day: 6,
        title: 'Charang to Lo Manthang (The Walled Kingdom)',
        distanceKm: '30 km',
        ridingTime: '3 hrs',
        startAltitude: '3,560 m',
        endAltitude: '3,840 m',
        maxAltitude: '3,950 m (Lo La Pass)',
        highlights: ['First view of walled Lo Manthang from Lo La Pass', 'Entering the historic fortified gates', 'Local Butter Tea with Mustang elders'],
        description: 'A crisp morning ride leads to the Lo La Pass. Suddenly, the isolated walled fortress city of Lo Manthang appears across the vast desert plain. We ride through the main gate into centuries of living Tibetan history.',
        overnight: 'Royal Himalayan Lodge, Lo Manthang'
      },
      {
        day: 7,
        title: 'Lo Manthang, Sky Caves & Kora La (Tibet Border)',
        distanceKm: '60 km round-trip',
        ridingTime: '4–5 hrs',
        startAltitude: '3,840 m',
        endAltitude: '3,840 m',
        maxAltitude: '4,660 m',
        highlights: ['Ride up to Kora La Border post with China/Tibet (4,660m)', 'Exploring multi-level Jhong Sky Caves in Chhoser', 'Nomad camps with Tibetan mastiffs'],
        description: 'An extraordinary day pushing north toward the border of Tibet. The terrain opens into vast Martian gravel flats. We climb to 4,660m before returning to explore ancient cave dwellings carved into vertical canyon walls.',
        overnight: 'Royal Himalayan Lodge, Lo Manthang'
      },
      {
        day: 8,
        title: 'Lo Manthang to Ghami via Ghar Gompa',
        distanceKm: '45 km',
        ridingTime: '5 hrs',
        startAltitude: '3,840 m',
        endAltitude: '3,520 m',
        maxAltitude: '4,200 m (Chogo La)',
        highlights: ['Oldest monastery in Mustang (Ghar Gompa, 8th century)', 'Remote off-piste desert ridge lines', 'Dhakmar dramatic red wind towers'],
        description: 'Taking an alternative western ridge route, we visit Ghar Gompa where Guru Rinpoche tamed Himalayan demons in the 700s. Stunning dirt singletrack sections and sweeping canyon panoramas.',
        overnight: 'Local Eco Teahouse, Ghami'
      },
      {
        day: 9,
        title: 'Ghami to Muktinath Temple',
        distanceKm: '65 km',
        ridingTime: '5 hrs',
        startAltitude: '3,520 m',
        endAltitude: '3,710 m',
        maxAltitude: '3,800 m',
        highlights: ['Descent down the Kali Gandaki canyon', 'Climb to holy Muktinath sacred water spouts', 'Thorong La pass mountain backdrop'],
        description: 'We ride south exiting Upper Mustang and begin the ascent to Muktinath, a holy shrine sacred to both Hindus and Buddhists with eternal natural gas flames and 108 stone gargoyle spouts.',
        overnight: 'High Altitude Lodge, Muktinath'
      },
      {
        day: 10,
        title: 'Muktinath to Kalopani / Marpha',
        distanceKm: '60 km',
        ridingTime: '4 hrs',
        startAltitude: '3,710 m',
        endAltitude: '2,530 m',
        maxAltitude: '3,710 m',
        highlights: ['Technical downhill gravel stretches', 'Dhaulagiri and Annapurna ice falls looming overhead', 'Pine forest re-entry'],
        description: 'Fast-paced descent back into the forested pine slopes of Kalopani. The contrast between Mustang\'s arid stone and lush sub-tropical greenery is intoxicating.',
        overnight: 'Pine View Lodge, Kalopani'
      },
      {
        day: 11,
        title: 'Kalopani to Pokhara (Triumphant Return)',
        distanceKm: '125 km',
        ridingTime: '5–6 hrs',
        startAltitude: '2,530 m',
        endAltitude: '820 m',
        maxAltitude: '2,530 m',
        highlights: ['Final thrilling river gorge run', 'Smooth tarmac winding back through Kaski hills', 'Celebration BBQ & craft beers at Himalayan Monster HQ'],
        description: 'The final leg takes us down through Beni and back onto sweeping blacktop roads into Pokhara. We roll back into headquarters to celebrate an unforgettable 12-day Himalayan masterclass.',
        overnight: 'Lakeside Resort, Pokhara'
      },
      {
        day: 12,
        title: 'Expedition Debrief & Farewell',
        distanceKm: '0 km',
        ridingTime: '—',
        startAltitude: '820 m',
        endAltitude: '820 m',
        maxAltitude: '820 m',
        highlights: ['Media exchange (GoPro/Drone footage)', 'Post-ride mechanical debrief', 'Departure transfers or extended Pokhara stay'],
        description: 'Relax by Phewa Lake, share HD photos and drone videos captured by the support team, and wrap up your Himalayan journey.',
        overnight: 'Tour concludes'
      }
    ],
    inclusions: [
      'Premium motorcycle (Himalayan 450 / CRF300L / Scram 411)',
      'All fuel for the entire expedition route',
      'Upper Mustang Special Restricted Area Permit (RAP $500/rider value)',
      'Annapurna Conservation Area Project (ACAP) & TIMS permits',
      'Professional lead motorcycle guide & certified Himalayan mechanic',
      '4x4 Support Vehicle for luggage, spare parts, medical kit & tools',
      'All 11 nights premium lodge / heritage guesthouse accommodation',
      'All breakfast, trail lunches, and expedition dinners',
      'Spare motorcycle parts, tires, and maintenance consumables',
      'Satellite communication device (Garmin inReach) & Emergency Oxygen kit',
      'Himalayan Monster expedition jersey and welcome gift pack'
    ],
    exclusions: [
      'International flights to/from Nepal & Kathmandu-Pokhara transit',
      'Personal travel & medical evacuation insurance (Mandatory for high altitude)',
      'Personal riding apparel (Helmets, jackets, armor, boots, gloves)',
      'Alcohol, personal snacks, and specialty barista coffees',
      'Motorcycle damage security deposit (Refundable upon clean return)',
      'Tips and gratuities for support crew & guides'
    ],
    accommodation: 'Carefully curated mountain lodges, traditional Tibetan stone guest houses, and lakeside boutique hotels in Pokhara.',
    preparationRequirements: [
      'Minimum 2+ years of continuous motorcycle riding experience',
      'Comfort with unpaved roads, loose gravel, ruts, and shallow water crossings',
      'High-altitude physical endurance (Elevation spans up to 4,660 m)',
      'Valid International Driving Permit (IDP) with motorcycle endorsement',
      'Comprehensive travel insurance covering motorcycle riding above 4,000m'
    ],
    faqs: [
      {
        question: 'What is the road condition like in Upper Mustang?',
        answer: 'The terrain is a mix of paved tarmac between Pokhara and Beni, followed by packed gravel, rocky mountain tracks, switchbacks, dry riverbeds, and sandy high-desert plateaus in Mustang.'
      },
      {
        question: 'Do I need a special permit for Upper Mustang?',
        answer: 'Yes. Upper Mustang is a restricted military border area requiring a special government permit ($500 USD for 10 days) plus ACAP permits. Himalayan Monster handles all paperwork and fees in advance.'
      },
      {
        question: 'What happens if a motorcycle breaks down?',
        answer: 'Our dedicated 4x4 support vehicle trails the group carrying a professional motorcycle mechanic, full spare parts inventory, tools, backup fuel, and a spare machine if needed.'
      },
      {
        question: 'Can I bring a pillion (passenger)?',
        answer: 'Yes, experienced pillions are welcome on the Himalayan 450. If a passenger prefers to take a break on rough sections, they are welcome to ride in the comfortable 4x4 support vehicle.'
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        riderName: 'Marcus Lindqvist',
        country: 'Sweden',
        countryCode: 'SE',
        rating: 5,
        date: 'October 2025',
        comment: 'Riding the Himalayan 450 into Lo Manthang was hands down the greatest two-wheel adventure of my life. Himalayan Monster’s mechanical support and route knowledge were world-class.',
        bike: 'Royal Enfield Himalayan 450'
      },
      {
        id: 'rev-2',
        riderName: 'Dave & Sarah K.',
        country: 'Australia',
        countryCode: 'AU',
        rating: 5,
        date: 'May 2025',
        comment: 'Not your average cookie-cutter tour. Raw, cinematic, authentic, and professionally executed. The border ride to Kora La will stay with me forever.',
        bike: 'Honda CRF300L'
      }
    ],
    relatedTourSlugs: ['pokhara-jomsom-motorcycle-tour', 'annapurna-motorcycle-tour', 'mustang-mtb-tour'],
    seoTitle: 'Upper Mustang Motorcycle Tour Pokhara Nepal | Himalayan Monster',
    seoDescription: 'Experience the ultimate 10-12 day Upper Mustang motorcycle tour from Pokhara. Ride Royal Enfield Himalayan 450s to Lo Manthang and Tibet border with full 4x4 support.',
    seoKeywords: ['Upper Mustang motorcycle tour', 'Mustang motorbike tour Nepal', 'Pokhara to Lo Manthang motorcycle', 'Royal Enfield tour Nepal', 'Himalayan 450 rental Pokhara'],
    routeMapDescription: 'Pokhara → Beni → Tatopani → Marpha → Kagbeni → Chele → Syangboche → Charang → Lo Manthang → Kora La (Tibet Border) → Muktinath → Pokhara'
  },
  {
    id: 'pokhara-jomsom-motorcycle',
    slug: 'pokhara-jomsom-motorcycle-tour',
    title: 'Pokhara → Jomsom Kali Gandaki Sprint',
    category: 'motorcycle',
    isFlagship: false,
    tagline: 'High-Altitude Gorge Blast into Lower Mustang',
    durationDays: 3,
    durationLabel: '3 DAYS',
    difficulty: 'Moderate',
    startingPricePlaceholder: 'Inquire for current seasonal pricing',
    currency: 'USD',
    bestSeason: 'September – December & February – June',
    maxAltitude: '2,800 m (Jomsom / Marpha)',
    terrain: 'Scenic paved blacktop, mountain gravel, suspension bridge trails, river crossings',
    groupSize: '2–8 Riders',
    bikeProvided: 'Royal Enfield Himalayan 450 / Scram 411 / XPulse 200 4V',
    heroImage: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'A spectacular fast-paced ride from Pokhara into the world’s deepest river gorge, dramatic waterfalls, apple orchards of Marpha, and the windswept valley of Jomsom.',
    fullDescription: 'Short on time but hungry for real Himalayan dirt? The Pokhara to Jomsom 3-Day Sprint delivers the essential Mustang experience without requiring the 10-day Upper Mustang restricted permit. Ride alongside the Kali Gandaki riverbed, soak in Tatopani hot springs, taste fresh cider in Marpha, and stand beneath Nilgiri (7,061m) and Dhaulagiri (8,167m).',
    routeHighlights: [
      'Blast through the world’s deepest gorge between 8,000m peaks',
      'Soak tired muscles in Tatopani natural hot springs',
      'Explore the ancient Thakali cobblestone alleys and apple brandy distilleries of Marpha',
      'Ride the high-wind gravel flatlands of Jomsom'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pokhara to Tatopani Hot Springs',
        distanceKm: '110 km',
        ridingTime: '4 hrs',
        startAltitude: '820 m',
        endAltitude: '1,190 m',
        maxAltitude: '1,500 m',
        highlights: ['Kaski hill highway', 'Beni off-road transition', 'Thermal spring baths'],
        description: 'Depart Pokhara early, carving blacktop through lush valleys before hitting rough dirt at Beni. Ride the river edge to Tatopani.',
        overnight: 'Riverside Lodge, Tatopani'
      },
      {
        day: 2,
        title: 'Tatopani to Marpha & Jomsom',
        distanceKm: '65 km',
        ridingTime: '4–5 hrs',
        startAltitude: '1,190 m',
        endAltitude: '2,800 m',
        maxAltitude: '2,800 m',
        highlights: ['Ghasa canyon gorge', 'Marpha apple orchards', 'Nilgiri mountain vistas'],
        description: 'Ascend the rugged gorge through waterfalls and pine forests into the open Tibetan-influenced desert valley of Marpha and Jomsom.',
        overnight: 'Heritage Hotel, Jomsom'
      },
      {
        day: 3,
        title: 'Jomsom to Pokhara Return',
        distanceKm: '155 km',
        ridingTime: '6 hrs',
        startAltitude: '2,800 m',
        endAltitude: '820 m',
        maxAltitude: '2,800 m',
        highlights: ['Fast morning descent', 'Scenic lunch overlooking Kali Gandaki', 'Evening return to Lakeside Pokhara'],
        description: 'An exhilarating descent winding back through the gorge, finishing with smooth twists into Pokhara for debrief drinks.',
        overnight: 'Tour concludes in Pokhara'
      }
    ],
    inclusions: [
      'Motorcycle of choice with full tank',
      'ACAP & TIMS mountain permits',
      'Experienced lead rider & mechanic guide',
      '2 nights accommodation with breakfast & dinner',
      'Basic spares and puncture repair kit'
    ],
    exclusions: ['Lunches and drinks', 'Personal riding gear', 'Insurance'],
    accommodation: 'Clean local lodges with private rooms and hot showers.',
    preparationRequirements: ['Intermediate motorcycle control on loose surfaces', 'Valid motorcycle driving license'],
    faqs: [
      { question: 'Is this tour suitable for beginners?', answer: 'We recommend riders have at least some unpaved gravel experience, though intermediate street riders handle this route very well.' }
    ],
    reviews: [
      { id: 'rev-3', riderName: 'Liam Patterson', country: 'United Kingdom', countryCode: 'GB', rating: 5, date: 'November 2025', comment: 'The best 3 days you could possibly spend in Nepal. The transition from green jungle to raw mountain rock in a few hours is unreal.', bike: 'Royal Enfield Himalayan 450' }
    ],
    relatedTourSlugs: ['upper-mustang-motorcycle-tour', 'annapurna-motorcycle-tour', 'pokhara-mtb-explorer'],
    seoTitle: 'Pokhara to Jomsom Motorcycle Tour 3 Days | Himalayan Monster',
    seoDescription: 'Book the 3-day Pokhara to Jomsom motorbike tour with Himalayan Monster. Ride the Kali Gandaki canyon, Marpha orchards, and Tatopani hot springs.',
    seoKeywords: ['jomsom motorcycle tour', 'pokhara to jomsom motorbike', 'motorbike rental pokhara', 'kali gandaki motorcycle tour'],
    routeMapDescription: 'Pokhara → Kusma → Beni → Tatopani → Ghasa → Marpha → Jomsom → Pokhara'
  },
  {
    id: 'annapurna-motorcycle-adventure',
    slug: 'annapurna-motorcycle-tour',
    title: 'Annapurna Himalayan Motorcycle Adventure',
    category: 'motorcycle',
    isFlagship: false,
    tagline: 'Ride the Giants of the Annapurna Massif',
    durationDays: 5,
    durationLabel: '5 DAYS',
    difficulty: 'Challenging',
    startingPricePlaceholder: 'Inquire for group and private rates',
    currency: 'USD',
    bestSeason: 'March – May & September – November',
    maxAltitude: '3,200 m',
    terrain: 'Mountain blacktop, forest dirt tracks, cliff-edge switchbacks, river valleys',
    groupSize: '3–8 Riders',
    bikeProvided: 'Royal Enfield Himalayan 450 / CRF300L',
    heroImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Circumnavigate deep valleys and ancient Gurung mountain settlements under the dramatic gaze of Annapurna South, Machapuchare (Fishtail) and Lamjung Himal.',
    fullDescription: 'A 5-day high-intensity Himalayan expedition traversing diverse ecological zones—from subtropical river valleys and lush rhododendron forests to rugged sub-alpine alpine cliff passes. Designed for passionate riders who want challenging dirt roads paired with authentic hill-tribe culture.',
    routeHighlights: [
      'Ride the rugged backroads around the Annapurna sanctuary',
      'Panoramic views of Machapuchare (6,993m) and Annapurna II/IV',
      'Overnight in traditional stone Gurung villages and hilltop viewpoints',
      'Technical dirt switchbacks and thrilling single-lane ridgelines'
    ],
    itinerary: [
      { day: 1, title: 'Pokhara to Besisahar & Chame Gateway', distanceKm: '115 km', ridingTime: '5 hrs', startAltitude: '820 m', endAltitude: '1,430 m', highlights: ['Marsyangdi river valley', 'Cliff roads', 'Waterfalls'], description: 'Ride east out of Pokhara towards the Marsyangdi river valley, entering the dramatic gorge leading up into the Annapurna range.', overnight: 'River Lodge, Besisahar' },
      { day: 2, title: 'Besisahar into High Pine Forests (Chame)', distanceKm: '65 km', ridingTime: '5 hrs', startAltitude: '1,430 m', endAltitude: '2,670 m', highlights: ['Dramatic cliff roads blasted into rock', 'Pine forests', 'View of Lamjung Himal'], description: 'One of the most thrilling dirt track segments in the Himalayas with sheer rock walls and thunderous river views.', overnight: 'Alpine Lodge, Chame' },
      { day: 3, title: 'Chame Ridge Exploration & Pisang Panorama', distanceKm: '40 km', ridingTime: '4 hrs', startAltitude: '2,670 m', endAltitude: '3,200 m', highlights: ['Paungda Danda curved rock face', 'Pisang Peak views', 'Ancient prayer wheels'], description: 'Ascend into the sub-alpine valley of Upper Manang with gigantic natural rock amphitheaters and glacier views.', overnight: 'Mountain Inn, Pisang' },
      { day: 4, title: 'Pisang to Bandipur Historic Hill Town', distanceKm: '135 km', ridingTime: '5–6 hrs', startAltitude: '3,200 m', endAltitude: '1,030 m', highlights: ['Fast mountain descent', 'Newari architecture in Bandipur', 'Sunset over Himalayan range'], description: 'Ride down the valley and climb to the preserved 18th-century Newari hilltop settlement of Bandipur.', overnight: 'Heritage Boutique Lodge, Bandipur' },
      { day: 5, title: 'Bandipur to Pokhara via Backcountry Trails', distanceKm: '90 km', ridingTime: '4 hrs', startAltitude: '1,030 m', endAltitude: '820 m', highlights: ['Remote ridge roads', 'Begnas Lake circuit', 'Himalayan Monster HQ finish'], description: 'Take backcountry trails avoiding main highways, winding around Begnas Lake back into Pokhara for celebration.', overnight: 'Tour concludes' }
    ],
    inclusions: ['Himalayan 450 or CRF300L', 'Fuel for tour', 'Guide and mechanic', 'Lodge accommodations with meals', 'All ACAP permits'],
    exclusions: ['Personal riding gear', 'Travel insurance', 'Alcoholic beverages'],
    accommodation: 'Mountain lodges and historic heritage inns.',
    preparationRequirements: ['Strong gravel and rough-track riding skills', 'Valid motorcycle license'],
    faqs: [{ question: 'How cold does it get?', answer: 'Spring and Autumn days are pleasant (15–22°C), while nights at higher altitudes (above 2,500m) drop to 2–8°C.' }],
    reviews: [{ id: 'rev-4', riderName: 'Julien Mercier', country: 'France', countryCode: 'FR', rating: 5, date: 'April 2025', comment: 'Spectacular roads and incredible guides. The cliff road up to Chame is pure adrenaline.', bike: 'Royal Enfield Himalayan 450' }],
    relatedTourSlugs: ['manang-motorcycle-tour', 'upper-mustang-motorcycle-tour', 'pokhara-jomsom-motorcycle-tour'],
    seoTitle: 'Annapurna Motorcycle Tour Nepal | 5-Day Himalayan Adventure',
    seoDescription: 'Ride the Annapurna mountain circuit by motorcycle. 5 days of dirt trails, high cliffs, and Himalayan mountain passes from Pokhara with Himalayan Monster.',
    seoKeywords: ['Annapurna motorcycle tour', 'motorbike tour Nepal', 'Chame motorcycle adventure', 'Himalayan motorcycle expedition Pokhara'],
    routeMapDescription: 'Pokhara → Dumre → Besisahar → Chame → Pisang → Bandipur → Begnas → Pokhara'
  },
  {
    id: 'manang-motorcycle-expedition',
    slug: 'manang-motorcycle-tour',
    title: 'Manang Valley Himalayan Expedition',
    category: 'motorcycle',
    isFlagship: false,
    tagline: 'Deep into the Glacial Valleys of the Annapurnas',
    durationDays: 7,
    durationLabel: '7 DAYS',
    difficulty: 'Demanding',
    startingPricePlaceholder: 'Inquire for private & scheduled dates',
    currency: 'USD',
    bestSeason: 'March – May & September – November',
    maxAltitude: '3,540 m (Manang Village)',
    terrain: 'Rough off-road rock, narrow canyon paths, glacial moraines, river crossings',
    groupSize: '4–8 Riders',
    bikeProvided: 'Royal Enfield Himalayan 450 / Honda CRF300L',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Push deep into the high alpine valley of Manang, surrounded by towering 7,000m and 8,000m peaks, glacial lakes, and raw Himalayan single-lane trails.',
    fullDescription: 'The Manang valley is one of the most dramatically situated alpine valleys on the planet. This 7-day ride tests machine and rider as we carve through deep canyons, past hanging glaciers, and into the Tibetan-Buddhist enclave of Manang village.',
    routeHighlights: [
      'Ride the high canyon trail up to Manang at 3,540m',
      'Spectacular views of Gangapurna Glacier and Annapurna II, III, IV',
      'Explore ancient monasteries of Braga and Milarepa’s cave trails',
      'Challenging technical terrain rewarding riders with untouched wilderness'
    ],
    itinerary: [
      { day: 1, title: 'Pokhara to Besisahar', distanceKm: '110 km', ridingTime: '4 hrs', startAltitude: '820 m', endAltitude: '760 m', highlights: ['Warmup ride', 'Marsyangdi river', 'Expedition prep'], description: 'Smooth tarmac warmup before hitting the rough stuff tomorrow.', overnight: 'Lodge, Besisahar' },
      { day: 2, title: 'Besisahar to Tal & Timang', distanceKm: '50 km', ridingTime: '5 hrs', startAltitude: '760 m', endAltitude: '2,270 m', highlights: ['Tal waterfall bowl', 'Rocky shelf roads', 'Pine air'], description: 'The road gets raw and rocky. Climb past huge waterfalls into high alpine air.', overnight: 'Pine Lodge, Timang' },
      { day: 3, title: 'Timang to Manang Village', distanceKm: '45 km', ridingTime: '4 hrs', startAltitude: '2,270 m', endAltitude: '3,540 m', highlights: ['Pisang apple orchards', 'Upper Manang valley basin', 'Glacier views'], description: 'Break through into the expansive upper valley. Annapurna peaks tower directly above.', overnight: 'Hotel Yeti, Manang' },
      { day: 4, title: 'Manang Acclimatization & Glacier Lake Ride', distanceKm: '25 km off-road', ridingTime: '3 hrs', startAltitude: '3,540 m', endAltitude: '3,800 m', highlights: ['Gangapurna glacial lake', 'Braga ancient gompa', 'Yak trails'], description: 'Explore high viewpoints, monastery trails, and local yak cheese farms.', overnight: 'Hotel Yeti, Manang' },
      { day: 5, title: 'Manang to Chame', distanceKm: '45 km', ridingTime: '4 hrs', startAltitude: '3,540 m', endAltitude: '2,670 m', highlights: ['Technical descent', 'Mountain river crossings', 'Cozy fireplace evening'], description: 'Ride back through the pine forests of Chame.', overnight: 'Mountain Lodge, Chame' },
      { day: 6, title: 'Chame to Bandipur', distanceKm: '120 km', ridingTime: '5 hrs', startAltitude: '2,670 m', endAltitude: '1,030 m', highlights: ['Descent to foothills', 'Newari culture', 'Himalayan panoramic sunset'], description: 'Exit the gorge and climb to peaceful Bandipur.', overnight: 'Heritage Lodge, Bandipur' },
      { day: 7, title: 'Bandipur to Pokhara', distanceKm: '80 km', ridingTime: '3 hrs', startAltitude: '1,030 m', endAltitude: '820 m', highlights: ['Scenic country twisties', 'Pokhara lakeside arrival', 'Farewell dinner'], description: 'Return to Pokhara for final celebration.', overnight: 'Tour concludes' }
    ],
    inclusions: ['Royal Enfield Himalayan 450 / CRF300L', 'Full fuel coverage', 'Lead guide & mechanic', 'Support vehicle for baggage', 'All permits & meals'],
    exclusions: ['Personal insurance', 'Riding gear', 'Alcohol'],
    accommodation: 'High alpine guest houses and boutique lodges.',
    preparationRequirements: ['Experience on rocky, loose switchbacks', 'Good physical condition at altitude'],
    faqs: [{ question: 'Do we get altitude sickness?', answer: 'We stage the ascent gradually over several days to allow proper acclimatization.' }],
    reviews: [{ id: 'rev-5', riderName: 'Sebastian Weber', country: 'Germany', countryCode: 'DE', rating: 5, date: 'October 2025', comment: 'The Manang valley is breathtaking. The Himalayan 450s performed flawlessly even at 3,600m.', bike: 'Royal Enfield Himalayan 450' }],
    relatedTourSlugs: ['annapurna-motorcycle-tour', 'upper-mustang-motorcycle-tour', 'mustang-mtb-tour'],
    seoTitle: 'Manang Motorcycle Tour Nepal | 7-Day High Himalayan Adventure',
    seoDescription: '7-day motorcycle expedition to the high glacial valley of Manang from Pokhara. Experience off-road riding beneath 8,000m peaks with Himalayan Monster.',
    seoKeywords: ['Manang motorcycle tour', 'motorbike tour Manang Nepal', 'Annapurna off-road motorcycle', 'Pokhara adventure bike tour'],
    routeMapDescription: 'Pokhara → Besisahar → Tal → Chame → Pisang → Manang → Gangapurna → Bandipur → Pokhara'
  },
  {
    id: 'mustang-mtb-expedition',
    slug: 'mustang-mtb-tour',
    title: 'Mustang High-Altitude MTB Expedition',
    category: 'mtb',
    isFlagship: false,
    tagline: 'Enduro & Singletrack through Ancient Himalayan Canyons',
    durationDays: 9,
    durationLabel: '8–10 DAYS',
    difficulty: 'Demanding',
    startingPricePlaceholder: 'Inquire for MTB expedition dates',
    currency: 'USD',
    bestSeason: 'March – June & September – November',
    maxAltitude: '4,100 m (High Passes of Mustang)',
    terrain: 'Alpine singletrack, slickrock chutes, ancient walking trails, loose gravel descents',
    groupSize: '4–8 Riders',
    bikeProvided: 'Full Suspension Enduro MTB (Trek Slash / Specialized Stumpjumper)',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'One of the world’s top mountain bike bucket-list journeys. Ride pristine high-desert singletrack through the Kingdom of Mustang with support vehicle shuttle uplifts.',
    fullDescription: 'The Mustang MTB Expedition combines gravity-assisted descents, ancient Buddhist trail networks, and the staggering scenery of the high Himalayas. Using a combination of 4x4 shuttles to high passes and epic technical descents, you experience pure singletrack bliss at altitudes over 3,800m.',
    routeHighlights: [
      'Over 200 km of high-altitude Himalayan singletrack & ancient trade trails',
      'Shuttle uplifts with 4x4 support for maximum downhill vertical descent',
      'Ride the red cliffs of Dhakmar and Lubra Valley downhill singletrack',
      'Enduro suspension setups dialed by certified bike mechanics'
    ],
    itinerary: [
      { day: 1, title: 'Pokhara Setup & Sarangkot MTB Warmup', distanceKm: '30 km', ridingTime: '3 hrs', startAltitude: '820 m', endAltitude: '820 m', highlights: ['Bike fit', 'Sarangkot downhill singletrack', 'Phewa lake sunset'], description: 'Unpack or fit our pro full-suspension bikes. Shred the fast singletrack from Sarangkot ridge into Pokhara.', overnight: 'Lakeside Hotel, Pokhara' },
      { day: 2, title: 'Flight/Shuttle to Jomsom & Kagbeni Singletrack', distanceKm: '25 km', ridingTime: '4 hrs', startAltitude: '2,800 m', endAltitude: '2,800 m', highlights: ['Mountain flight/shuttle', 'Kali Gandaki riverbed trails', 'Ancient Kagbeni'], description: 'Arrive in Jomsom and ride the high windswept trail into medieval Kagbeni.', overnight: 'Guest House, Kagbeni' },
      { day: 3, title: 'Kagbeni to Muktinath & Lubra Valley Shred', distanceKm: '35 km', ridingTime: '5 hrs', startAltitude: '2,800 m', endAltitude: '2,700 m', highlights: ['Lubra Pass 4,000m descent', 'Flowing canyon singletrack', 'Remote Bon village'], description: 'Climb or shuttle to high pass, then drop into Lubra Valley—one of the best singletrack descents on Earth.', overnight: 'Lodge, Marpha' },
      { day: 4, title: 'Upper Mustang Chele & Ghyakar Canyon', distanceKm: '30 km', ridingTime: '5 hrs', startAltitude: '2,800 m', endAltitude: '3,500 m', highlights: ['Suspension bridge crossing', 'Cliffside bench cut trails', 'Red rock views'], description: 'Pedal and shuttle north across the border into Upper Mustang canyon singletracks.', overnight: 'Lodge, Samar' },
      { day: 5, title: 'High Passes of Mustang to Ghami', distanceKm: '38 km', ridingTime: '5 hrs', startAltitude: '3,500 m', endAltitude: '3,520 m', highlights: ['Nyi La Pass 4,010m', 'Fast scree descents', 'Mani wall sprint'], description: 'Epic high-altitude pass riding with massive mountain panoramas.', overnight: 'Guesthouse, Ghami' },
      { day: 6, title: 'Charang to Lo Manthang Flow Trails', distanceKm: '32 km', ridingTime: '4 hrs', startAltitude: '3,520 m', endAltitude: '3,840 m', highlights: ['Plateau flow trails', 'Lo La pass view', 'Walled city arrival'], description: 'Rolling singletrack across the high desert basin into the walled city.', overnight: 'Heritage Lodge, Lo Manthang' },
      { day: 7, title: 'Chhoser Sky Caves & Nomad Singletrack', distanceKm: '28 km', ridingTime: '4 hrs', startAltitude: '3,840 m', endAltitude: '3,840 m', highlights: ['Sky caves exploration', 'Flowing dirt singletrack', 'Tibetan nomad trails'], description: 'A day of gravity and exploration around the northern reaches near the Tibetan frontier.', overnight: 'Heritage Lodge, Lo Manthang' },
      { day: 8, title: 'Lo Manthang to Jomsom Epic Gravity Stage', distanceKm: '65 km (Shuttle + Ride)', ridingTime: '6 hrs', startAltitude: '3,840 m', endAltitude: '2,700 m', highlights: ['Massive cumulative vertical descent', 'High-speed gravel & trail sectors'], description: 'Utilizing shuttle uplifts and downhill traverses, we descend through the canyon back to Jomsom.', overnight: 'Hotel, Jomsom' },
      { day: 9, title: 'Jomsom to Pokhara & Farewell Ride', distanceKm: '—', ridingTime: '—', startAltitude: '2,700 m', endAltitude: '820 m', highlights: ['Flight/transit to Pokhara', 'Celebration beers & lake chill'], description: 'Return to Pokhara to wrap up an epic MTB adventure.', overnight: 'Tour concludes' }
    ],
    inclusions: ['Full suspension pro Enduro MTB', 'Certified PMBIA-trained MTB guide & bike mechanic', '4x4 support vehicle & shuttle uplifts', 'All permits including Upper Mustang RAP', 'All accommodation and hearty meals', 'Spare tires, pads, tubes, and tools'],
    exclusions: ['Personal riding gear (Full face / half shell helmet, pads)', 'Travel insurance'],
    accommodation: 'Traditional mountain lodges and boutique guesthouses.',
    preparationRequirements: ['Solid intermediate-to-advanced MTB bike handling', 'Comfort with loose rock, switchbacks, and high altitude'],
    faqs: [{ question: 'Can I bring my own bike?', answer: 'Yes! We provide full assembly, tuning, and packing support for riders bringing their own steeds.' }],
    reviews: [{ id: 'rev-6', riderName: 'Cody Miller', country: 'United States', countryCode: 'US', rating: 5, date: 'May 2025', comment: 'Lubra Valley descent alone is worth the trip to Nepal. Himalayan Monster had our bikes dialed every single morning.', bike: 'Specialized Stumpjumper EVO' }],
    relatedTourSlugs: ['pokhara-mtb-explorer', 'annapurna-mtb-tour', 'upper-mustang-motorcycle-tour'],
    seoTitle: 'Mustang MTB Tour Nepal | High Altitude Mountain Bike Expedition',
    seoDescription: 'Ride the world famous Mustang singletrack on full-suspension MTBs. 8-10 days of high-altitude enduro and shuttle-assisted descents in Nepal.',
    seoKeywords: ['Mustang MTB tour', 'mountain bike tour Nepal', 'Pokhara mountain bike rental', 'enduro MTB Nepal', 'Lubra valley singletrack'],
    routeMapDescription: 'Pokhara → Jomsom → Kagbeni → Lubra Valley → Chele → Samar → Ghami → Lo Manthang → Jomsom → Pokhara'
  },
  {
    id: 'pokhara-mtb-explorer',
    slug: 'pokhara-mtb-explorer',
    title: 'Pokhara Valley MTB Trail Explorer',
    category: 'mtb',
    isFlagship: false,
    tagline: 'Ridge Downhills, Village Singletrack & Lake Trails',
    durationDays: 2,
    durationLabel: '1–3 DAYS',
    difficulty: 'Moderate',
    startingPricePlaceholder: 'Inquire for half-day / multi-day rates',
    currency: 'USD',
    bestSeason: 'Year-Round (Best: October – May)',
    maxAltitude: '1,600 m (Sarangkot / Australian Camp Ridge)',
    terrain: 'Forest singletrack, stone steps, village trails, lake rim paths',
    groupSize: '1–6 Riders',
    bikeProvided: 'Full Suspension or Hardtail MTB (Trek / Giant)',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Discover the hidden singletrack network around Pokhara valley: Sarangkot downhill runs, Peace Pagoda forest descents, and serene Begnas lake trails.',
    fullDescription: 'Pokhara is Nepal’s mountain biking playground. With immediate access to 1,000m ridge uplifts, lush sub-tropical forests, technical stone steps, and fast loamy singletrack, our 1 to 3-day guided sessions are customized to your technical riding appetite.',
    routeHighlights: [
      'Sarangkot ridge downhill with panoramic Annapurna mountain backdrop',
      'World Peace Pagoda forest singletrack down to Phewa Lake shore',
      'Naudanda to Pame rural village flow trail',
      'Begnas & Rupa lake quiet singletrack loops'
    ],
    itinerary: [
      { day: 1, title: 'Sarangkot Downhill & Lakeside Secret Trails', distanceKm: '35 km', ridingTime: '4 hrs', startAltitude: '820 m', endAltitude: '820 m', highlights: ['4x4 uplift to Sarangkot', 'Fast ridge singletrack', 'Phewa lake shore boat transfer'], description: 'Morning shuttle to 1,600m on Sarangkot. Drop into sweeping trails overlooking Fishtail mountain before riding the scenic shore of Phewa.', overnight: 'Pokhara' },
      { day: 2, title: 'World Peace Pagoda & Queen Forest Descent', distanceKm: '28 km', ridingTime: '4 hrs', startAltitude: '820 m', endAltitude: '820 m', highlights: ['Climb through Raniban forest', 'Peace Stupa panoramic point', 'Technical stone downhill'], description: 'Ride the southern ridge through protected forest trails with thrilling technical switchbacks.', overnight: 'Tour concludes' }
    ],
    inclusions: ['Premium MTB & helmet', 'Certified local guide', 'Vehicle shuttles / uplifts', 'Trail snacks & hydration'],
    exclusions: ['Personal insurance', 'Specialty drinks'],
    accommodation: 'Day tour / Flexible lodging',
    preparationRequirements: ['Basic to intermediate off-road bicycle experience'],
    faqs: [{ question: 'Do you offer half-day rides?', answer: 'Yes, we run morning and afternoon downhill sessions daily from our Pokhara shop.' }],
    reviews: [{ id: 'rev-7', riderName: 'Elena Rostova', country: 'Canada', countryCode: 'CA', rating: 5, date: 'January 2026', comment: 'Such a fun blast! Our guide knew every hidden trail in the hills around Pokhara.', bike: 'Trek Full Suspension MTB' }],
    relatedTourSlugs: ['mustang-mtb-tour', 'annapurna-mtb-tour', 'e-mtb-pokhara'],
    seoTitle: 'Pokhara MTB Tours & Mountain Bike Trails | Himalayan Monster',
    seoDescription: 'Explore the best mountain bike trails in Pokhara. Guided downhill and singletrack tours in Sarangkot, Peace Pagoda and Begnas Lake.',
    seoKeywords: ['MTB tours Pokhara', 'mountain bike rental Pokhara', 'Sarangkot downhill MTB', 'Pokhara bike trails'],
    routeMapDescription: 'Sarangkot Ridge → Pame → Phewa Lake → Raniban → World Peace Pagoda → Pokhara'
  },
  {
    id: 'annapurna-mtb-tour',
    slug: 'annapurna-mtb-tour',
    title: 'Annapurna Valley MTB Adventure',
    category: 'mtb',
    isFlagship: false,
    tagline: 'High-Alpine Singletrack Beneath Annapurna Massif',
    durationDays: 6,
    durationLabel: '5–7 DAYS',
    difficulty: 'Demanding',
    startingPricePlaceholder: 'Inquire for seasonal tour dates',
    currency: 'USD',
    bestSeason: 'March – May & September – November',
    maxAltitude: '3,540 m (Manang Valley)',
    terrain: 'Alpine singletrack, suspension bridges, pine forest loams, jeep trail traverses',
    groupSize: '4–8 Riders',
    bikeProvided: 'Full Suspension Enduro MTB',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Ride through dramatic Himalayan river valleys, ancient pine forests, and alpine meadows in the shadow of Annapurna II and Gangapurna.',
    fullDescription: 'A premier multi-day mountain bike tour taking riders into the upper reaches of the Annapurna Circuit. Experience thrilling technical descents, roaring glacial river crossings, and authentic teahouse hospitality.',
    routeHighlights: [
      'Suspension bridge river crossings over churning Himalayan rapids',
      'High-altitude alpine singletrack through ancient pine woodlands',
      'Spectacular views of 8,000m peaks from the saddle of your bike',
      'Supported by 4x4 luggage transfer and certified mechanics'
    ],
    itinerary: [
      { day: 1, title: 'Pokhara to Besisahar & Warmup Trail', distanceKm: '40 km riding', ridingTime: '4 hrs', startAltitude: '820 m', endAltitude: '760 m', highlights: ['River trails', 'Shakedown ride'], description: 'Transfer and ride along the foothills.', overnight: 'Besisahar' },
      { day: 2, title: 'Besisahar to Tal Waterfall Basin', distanceKm: '32 km', ridingTime: '5 hrs', startAltitude: '760 m', endAltitude: '1,700 m', highlights: ['Canyon climb', 'Tal natural lake'], description: 'Rocky trail climbs into deep gorge.', overnight: 'Tal' },
      { day: 3, title: 'Tal to Chame Pine Trails', distanceKm: '28 km', ridingTime: '4 hrs', startAltitude: '1,700 m', endAltitude: '2,670 m', highlights: ['Pine singletrack', 'View of Annapurna II'], description: 'Ride smooth forest trails and stone paths.', overnight: 'Chame' },
      { day: 4, title: 'Chame to Upper Pisang & Braga', distanceKm: '35 km', ridingTime: '5 hrs', startAltitude: '2,670 m', endAltitude: '3,360 m', highlights: ['Pisang singletrack', 'Glacial rock walls'], description: 'Ascend into alpine paradise.', overnight: 'Pisang' },
      { day: 5, title: 'Upper Valley Flow Trails & Descents', distanceKm: '45 km', ridingTime: '5 hrs', startAltitude: '3,360 m', endAltitude: '2,670 m', highlights: ['Fast gravity descent', 'Technical rock chutes'], description: 'Rip down high-speed singletracks.', overnight: 'Chame' },
      { day: 6, title: 'Final Canyon Descent to Pokhara', distanceKm: '50 km', ridingTime: '5 hrs', startAltitude: '2,670 m', endAltitude: '820 m', highlights: ['Epic 1,800m vertical drop', 'Pokhara lakeside finish'], description: 'Massive descent finishing with beers in Lakeside Pokhara.', overnight: 'Tour concludes' }
    ],
    inclusions: ['Full-suspension MTB', 'Lead guide & mechanic', 'Support vehicle', 'All lodge rooms & meals', 'Permits'],
    exclusions: ['Personal gear', 'Travel insurance'],
    accommodation: 'Mountain teahouses and lodges.',
    preparationRequirements: ['Strong physical stamina and intermediate/advanced MTB skills'],
    faqs: [{ question: 'How rough are the trails?', answer: 'The route features mixed terrain ranging from flowy pine needles to technical rocky sections with suspension bridges.' }],
    reviews: [{ id: 'rev-8', riderName: 'Matteo Rossi', country: 'Italy', countryCode: 'IT', rating: 5, date: 'November 2025', comment: 'The sheer scale of the mountains while riding singletrack is beyond words.', bike: 'Trek Slash 8' }],
    relatedTourSlugs: ['mustang-mtb-tour', 'pokhara-mtb-explorer', 'annapurna-motorcycle-tour'],
    seoTitle: 'Annapurna MTB Tour Nepal | Mountain Biking Himalayas',
    seoDescription: 'Experience 6 days of incredible mountain biking in the Annapurna range. Guided MTB tour with support vehicle from Pokhara.',
    seoKeywords: ['Annapurna MTB tour', 'mountain biking Annapurna', 'Nepal singletrack tour', 'Pokhara MTB expeditions'],
    routeMapDescription: 'Pokhara → Besisahar → Tal → Chame → Upper Pisang → Manang valley → Pokhara'
  },
  {
    id: 'e-mtb-pokhara',
    slug: 'e-mtb-pokhara',
    title: 'Himalayan E-MTB Ridge & Valley Experiences',
    category: 'e-mtb',
    isFlagship: false,
    tagline: 'Go Further, Climb Higher, Experience More of Wild Nepal',
    durationDays: 2,
    durationLabel: '1–4 DAYS',
    difficulty: 'All Levels',
    startingPricePlaceholder: 'Inquire for daily rental & guided E-MTB tours',
    currency: 'USD',
    bestSeason: 'Year-Round (September – June Optimal)',
    maxAltitude: '2,100 m (Australian Camp / Panchase Ridge)',
    terrain: 'Himalayan dirt climbs, panoramic ridgelines, village pathways, technical descents',
    groupSize: '1–8 Riders',
    bikeProvided: 'Specialized Turbo Levo / Trek Rail Bosch Gen 4 E-MTBs (700Wh+ Batteries)',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop'
    ],
    shortDescription: 'Effortlessly conquer Nepal’s steep Himalayan climbs with premium Bosch and Brose-powered E-MTBs. Access remote ridges, ancient villages, and majestic mountain viewpoints without the exhaustion.',
    fullDescription: 'Nepal’s terrain is famously vertical. With our fleet of flagship Specialized Turbo Levo and Trek Rail electric mountain bikes, those punishing 1,200m elevation gains turn into pure flow. Climb through rhododendron forests with 85–90Nm of smooth pedal assist, soak in 360-degree views of the Annapurnas, and charge down technical singletrack with full-suspension confidence.',
    routeHighlights: [
      'Conquer 1,000m+ Himalayan ascents with effortless turbo assist',
      'Ride the high Panchase & Australian Camp ridges overlooking Fishtail peak',
      'Explore hidden ethnic Gurung and Magar villages inaccessible to road vehicles',
      'Latest 700Wh–750Wh batteries for all-day high-range exploration'
    ],
    itinerary: [
      { day: 1, title: 'Sarangkot to Naudanda Panoramic E-MTB Ridge', distanceKm: '42 km', ridingTime: '4 hrs', startAltitude: '820 m', endAltitude: '1,500 m', highlights: ['Effortless climb to Sarangkot', 'Paved and dirt ridge trail to Naudanda', 'Organic lunch at mountain farmhouse'], description: 'Power up Sarangkot ridge using Turbo mode, continuing along the stunning ridge overlooking the Annapurna range before descending via Pame trail.', overnight: 'Pokhara' },
      { day: 2, title: 'Australian Camp & Kande High Trail Explorer', distanceKm: '38 km', ridingTime: '4.5 hrs', startAltitude: '820 m', endAltitude: '2,050 m', highlights: ['High-altitude rhododendron forest climb', 'Direct view of Annapurna South (7,219m)', 'Thrilling forest singletrack descent'], description: 'Climb into the high foothills of the Annapurna sanctuary on our top-tier E-MTBs for unparalleled mountain panoramas.', overnight: 'Tour concludes' }
    ],
    inclusions: ['Specialized Turbo Levo or Trek Rail E-MTB', 'High-capacity battery & smart charger', 'Certified E-MTB guide', 'Helmet, gloves, and safety gear', 'Hydration and snacks'],
    exclusions: ['Personal insurance', 'Alcohol'],
    accommodation: 'Day tour / Flexible multi-day lodges',
    preparationRequirements: ['Basic cycling ability (all fitness levels welcome thanks to electric assist)'],
    faqs: [
      { question: 'What is the battery range in the mountains?', answer: 'Our 700Wh–750Wh batteries provide between 45–75 km of riding with up to 1,600m of cumulative climbing depending on assist level.' },
      { question: 'Can I rent an E-MTB self-guided?', answer: 'Yes! We offer daily and weekly E-MTB rentals with pre-loaded GPX routes and phone handlebar mounts.' }
    ],
    reviews: [
      { id: 'rev-9', riderName: 'Rachel Vance', country: 'New Zealand', countryCode: 'NZ', rating: 5, date: 'December 2025', comment: 'The E-MTBs are a gamechanger in Nepal. I was able to climb high ridges without being a pro athlete and enjoyed the most incredible views of the Annapurnas.', bike: 'Specialized Turbo Levo' }
    ],
    relatedTourSlugs: ['pokhara-mtb-explorer', 'mustang-mtb-tour', 'annapurna-mtb-tour'],
    seoTitle: 'E-MTB Pokhara Nepal | Electric Mountain Bike Tours & Rentals',
    seoDescription: 'Rent premium Specialized & Trek E-MTBs in Pokhara. Guided electric mountain bike tours to Sarangkot, Australian Camp, and Annapurna foothills.',
    seoKeywords: ['E-MTB Pokhara', 'electric mountain bike rental Nepal', 'EMTB tours Pokhara', 'Sarangkot electric bike', 'Trek Rail Nepal'],
    routeMapDescription: 'Pokhara → Sarangkot → Naudanda → Kande → Australian Camp → Pame → Pokhara'
  }
];
