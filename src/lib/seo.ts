// Centralized SEO Configuration & Utilities for Himalayan Monster
// Canonical Domain: https://himalayanmonster.com

import { Expedition, Article, SeoLandingPageData } from '../types';

export const CANONICAL_DOMAIN = 'https://himalayanmonster.com';

export const BUSINESS_INFO = {
  name: 'Himalayan Monster',
  legalName: 'Himalayan Monster Extreme Tours Pvt. Ltd.',
  alternateName: 'Himalayan Monster Nepal',
  tagline: 'Two Wheels. Wild Nepal.',
  description: 'Pokhara-based Himalayan adventure outfitter specializing in premium guided motorcycle expeditions, enduro MTB singletrack tours, E-MTB ridge adventures, and pro bike rentals across Nepal.',
  url: CANONICAL_DOMAIN,
  logo: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
  defaultOgImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
  telephone: '+977 981-2100453',
  phoneClean: '+9779812100453',
  whatsapp: '+977 981-2100453',
  whatsappClean: '+9779812100453',
  email: 'ride@himalayanmonster.com',
  address: {
    streetAddress: 'Lakeside, Ward No. 6',
    addressLocality: 'Pokhara',
    addressRegion: 'Gandaki Province',
    postalCode: '33700',
    addressCountry: 'NP'
  },
  geo: {
    latitude: 28.2096,
    longitude: 83.9595
  },
  openingHours: 'Mo-Su 07:00-20:00',
  priceRange: '$$ - $$$$',
  sameAs: [
    'https://www.instagram.com/himalayanmonsternp/',
    'https://www.facebook.com/profile.php?id=61593440248091',
    'https://youtube.com/@himalayanmonster'
  ],
  currenciesAccepted: 'USD, EUR, GBP, NPR, AUD, CAD',
  paymentAccepted: 'Cash, Credit Card, Bank Wire, Online Transfer'
};

export interface PageSeoConfig {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Returns the full canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/' || cleanPath === '') {
    return CANONICAL_DOMAIN;
  }
  return `${CANONICAL_DOMAIN}${cleanPath}`;
}

/**
 * Global Base Organization / LocalBusiness Schema
 */
export function getLocalBusinessJsonLd(): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TravelAgency', 'SportsActivityLocation'],
    '@id': `${CANONICAL_DOMAIN}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    alternateName: BUSINESS_INFO.alternateName,
    url: CANONICAL_DOMAIN,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.defaultOgImage,
    description: BUSINESS_INFO.description,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    currenciesAccepted: BUSINESS_INFO.currenciesAccepted,
    paymentAccepted: BUSINESS_INFO.paymentAccepted,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '07:00',
        closes: '20:00'
      }
    ],
    sameAs: BUSINESS_INFO.sameAs,
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Nepal'
      },
      {
        '@type': 'Place',
        name: 'Upper Mustang, Nepal'
      },
      {
        '@type': 'Place',
        name: 'Annapurna Conservation Area, Nepal'
      },
      {
        '@type': 'Place',
        name: 'Pokhara, Nepal'
      }
    ]
  };
}

/**
 * Breadcrumb Schema Generator
 */
export function getBreadcrumbJsonLd(items: Array<{ name: string; path: string }>): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path)
    }))
  };
}

/**
 * Tour Page Schema Generator (TouristTrip & Product/Offer)
 */
export function getTourJsonLd(tour: Expedition): Record<string, any> {
  const tourUrl = getCanonicalUrl(`/tours/${tour.slug}`);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${tourUrl}/#trip`,
    name: `${tour.title} | Himalayan Monster Nepal`,
    description: tour.shortDescription || tour.fullDescription,
    image: [tour.heroImage, ...(tour.galleryImages || [])],
    touristType: [
      'Adventure Travelers',
      'Motorcycle Riders',
      'Mountain Bikers',
      'International Expedition Travelers'
    ],
    offers: {
      '@type': 'Offer',
      price: tour.startingPricePlaceholder.includes('$') 
        ? tour.startingPricePlaceholder.replace(/[^0-9]/g, '') 
        : 'Inquire',
      priceCurrency: tour.currency || 'USD',
      availability: 'https://schema.org/InStock',
      url: tourUrl,
      validFrom: '2026-01-01'
    },
    provider: {
      '@type': 'TravelAgency',
      name: BUSINESS_INFO.name,
      url: CANONICAL_DOMAIN,
      telephone: BUSINESS_INFO.telephone,
      email: BUSINESS_INFO.email
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: tour.itinerary?.length || tour.durationDays,
      itemListElement: (tour.itinerary || []).map((day, idx) => ({
        '@type': 'ListItem',
        position: day.day || idx + 1,
        name: `Day ${day.day}: ${day.title}`,
        description: day.description || (day.highlights ? day.highlights.join('. ') : '')
      }))
    }
  };
}

/**
 * Blog Article Schema Generator
 */
export function getArticleJsonLd(article: Article): Record<string, any> {
  const articleUrl = getCanonicalUrl(`/blog/${article.slug}`);
  
  // Format published date reliably (fallback to standard ISO format)
  const publishedDate = '2026-01-15T08:00:00+05:45';

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}/#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl
    },
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    author: {
      '@type': 'Person',
      name: article.author || 'Himalayan Monster Expedition Team',
      jobTitle: article.authorRole || 'Expedition Leader'
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS_INFO.logo
      }
    },
    datePublished: publishedDate,
    dateModified: publishedDate,
    keywords: article.tags ? article.tags.join(', ') : 'Nepal, Himalayan motorcycle, adventure travel'
  };
}

/**
 * FAQ Schema Generator
 */
export function getFaqJsonLd(faqs: Array<{ question?: string; q?: string; answer?: string; a?: string }>): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.q || '',
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a || ''
      }
    }))
  };
}

/**
 * Centralized Route Metadata Map for Standard Static & Landing Views
 */
export const STATIC_PAGE_SEO: Record<string, PageSeoConfig> = {
  home: {
    title: 'Himalayan Monster | Motorcycle, MTB & Adventure Tours in Nepal',
    description: 'Explore the Himalayas with Himalayan Monster. High-altitude motorcycle tours to Upper Mustang and Annapurna, enduro MTB singletrack, E-MTB expeditions, and bike rentals in Pokhara, Nepal.',
    canonicalPath: '/',
    ogTitle: 'Himalayan Monster | Motorcycle, MTB & Adventure Tours in Nepal',
    ogDescription: 'Experience Nepal on two wheels. Guided Himalayan motorcycle expeditions, pro enduro mountain biking singletrack, and adventure bike rentals in Lakeside Pokhara.',
    ogImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'Nepal motorcycle tours',
      'Nepal motorbike tours',
      'Himalayan motorcycle tours',
      'MTB tours Nepal',
      'mountain biking Nepal',
      'Pokhara adventure tours',
      'Upper Mustang motorcycle tour',
      'Royal Enfield Himalayan 450 Nepal'
    ]
  },
  motorcycles: {
    title: 'Motorcycle Tours Nepal | Himalayan Motorbike Expeditions | Himalayan Monster',
    description: 'Guided motorcycle tours in Nepal across Upper Mustang, Annapurna, and Manang. Ride Royal Enfield Himalayan 450s and Honda CRF300Ls with certified mechanics and 4x4 luggage support.',
    canonicalPath: '/motorcycle-tours',
    ogTitle: 'Motorcycle Tours Nepal | Two Wheels. Wild Nepal. | Himalayan Monster',
    ogDescription: 'Conquer the roof of the world on two wheels. Guided dual-sport and adventure motorbike tours across Nepal with complete 4x4 backup and licensed guides.',
    ogImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'Motorcycle tours Nepal',
      'Nepal motorcycle tours',
      'Nepal motorbike tours',
      'Himalayan motorcycle tours',
      'Upper Mustang motorcycle tour',
      'Royal Enfield tour Nepal',
      'Pokhara motorcycle tour'
    ]
  },
  mtb: {
    title: 'MTB Tours Nepal | Mountain Biking & Enduro Singletrack | Himalayan Monster',
    description: 'Premier mountain bike tours in Nepal and Pokhara. High alpine singletrack, 4,000m gravity descents in Mustang, Annapurna enduro trails, and 4x4 shuttle uplifts with certified PMBIA guides.',
    canonicalPath: '/mtb-tours',
    ogTitle: 'Himalayan Mountain Bike & Enduro Tours Nepal | Himalayan Monster',
    ogDescription: 'Experience world-class singletrack in the Himalayas. Guided enduro MTB tours in Mustang, Annapurna, and Pokhara with pro full-suspension bikes and 4x4 shuttles.',
    ogImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'MTB tours Nepal',
      'mountain biking Nepal',
      'Nepal mountain bike tours',
      'Himalayan MTB tours',
      'Pokhara MTB tours',
      'Mustang MTB singletrack',
      'Enduro Nepal'
    ]
  },
  'e-mtb': {
    title: 'E-MTB Tours Nepal | Electric Mountain Biking Pokhara & Annapurna',
    description: 'Electric mountain bike tours in Nepal. Effortlessly scale Himalayan ridges with 90Nm Bosch and Specialized Turbo pedal assist. Guided ridge viewpoints of Annapurna and Fishtail.',
    canonicalPath: '/e-mtb-tours',
    ogTitle: 'E-MTB Nepal | Electric Mountain Bike Tours Pokhara & Himalayas',
    ogDescription: 'Ride higher and further with Specialized Turbo Levo and Trek Rail electric mountain bikes. Guided panoramic ridge tours with 750Wh all-day battery range in Pokhara.',
    ogImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'E-MTB Nepal',
      'E-bike tours Nepal',
      'electric mountain bike Nepal',
      'E-MTB tours Nepal',
      'Pokhara electric bike rental',
      'Specialized Turbo Levo Nepal'
    ]
  },
  rentals: {
    title: 'Motorbike & Mountain Bike Rental Pokhara | Himalayan Monster',
    description: 'Rent adventure motorcycles (Royal Enfield Himalayan 450, Honda CRF300L) and pro full-suspension mountain bikes in Lakeside Pokhara. Tools, spares, and route advice included.',
    canonicalPath: '/rentals',
    ogTitle: 'Motorcycle & MTB Rental Pokhara Nepal | Himalayan Monster Base Camp',
    ogDescription: 'Meticulously inspected adventure fleet for independent Himalayan exploration. Daily and weekly hire for Mustang, Annapurna, and Pokhara valley.',
    ogImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'motorcycle rental Nepal',
      'motorbike rental Nepal',
      'motorcycle rental Pokhara',
      'MTB rental Pokhara',
      'Royal Enfield rental Nepal',
      'bike hire Pokhara'
    ]
  },
  'motorbike-rental-pokhara': {
    title: 'Motorbike Rental Pokhara | Royal Enfield Himalayan 450 & CRF300L Hire',
    description: 'Rent adventure motorcycles in Pokhara, Nepal. Royal Enfield Himalayan 450, Scram 411, and Honda CRF300L. Daily/weekly rates, maintenance guarantee, toolkits, and riding gear.',
    canonicalPath: '/motorbike-rental-pokhara',
    ogTitle: 'Motorbike Rental Pokhara Nepal | Royal Enfield Himalayan 450 Hire',
    ogDescription: 'Adventure-ready motorcycle rentals in Lakeside Pokhara. 25-point pre-ride mechanical inspection, crash protection, and high-altitude touring setups.',
    ogImage: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'motorbike rental Pokhara',
      'motorcycle rental Pokhara',
      'motorcycle rental Nepal',
      'Royal Enfield rental Nepal',
      'Honda CRF300L rental Pokhara'
    ]
  },
  'mountain-bike-rental-pokhara': {
    title: 'Mountain Bike Rental Pokhara | Pro Enduro & Trail MTB Hire Nepal',
    description: 'Rent high-performance full-suspension and hardtail mountain bikes in Pokhara. Trek Slash, Specialized Stumpjumper, hydraulic disc brakes, tubeless setups, and helmets included.',
    canonicalPath: '/mountain-bike-rental-pokhara',
    ogTitle: 'Mountain Bike Rental Pokhara | Pro Full-Suspension MTB Hire',
    ogDescription: 'Pro-spec mountain bike hire in Lakeside Pokhara. Custom suspension sag setup, trail toolkits, and local singletrack GPX maps.',
    ogImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'mountain bike rental Pokhara',
      'MTB rental Pokhara',
      'bicycle rental Pokhara',
      'MTB hire Nepal',
      'enduro bike rental Pokhara'
    ]
  },
  expeditions: {
    title: 'All Tours & Expeditions | Himalayan Motorcycle & MTB Adventures Nepal',
    description: 'Discover all guided multi-day Himalayan expeditions by Himalayan Monster. Upper Mustang, Annapurna Circuit, Manang, and Jomsom motorcycle and mountain bike journeys.',
    canonicalPath: '/expeditions',
    ogTitle: 'All Guided Expeditions | Himalayan Monster Nepal',
    ogDescription: 'Browse our complete lineup of fully supported motorcycle and MTB expeditions across the Himalayas. 4x4 support, lead guides, permits, and quality lodges included.',
    ogImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'Nepal adventure tours',
      'Himalayan expeditions',
      'guided motorcycle tours Nepal',
      'Upper Mustang tour',
      'Annapurna motorcycle tour'
    ]
  },
  about: {
    title: 'About Himalayan Monster | Pokhara Two-Wheel Adventure Outfitter',
    description: 'Learn about Himalayan Monster: our origins on the dirt tracks of Nepal, our Lakeside Pokhara base camp, certified mountain guides, and commitment to authentic two-wheel exploration.',
    canonicalPath: '/about',
    ogTitle: 'About Us | Born on the Dirt Roads of Nepal | Himalayan Monster',
    ogDescription: 'We combine authentic Himalayan adventure with uncompromising safety protocols. Meet the Pokhara-based team behind the most rugged expeditions in Nepal.',
    ogImage: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'About Himalayan Monster',
      'Pokhara motorcycle tour company',
      'Nepal motorcycle guides',
      'adventure travel Nepal Pokhara'
    ]
  },
  contact: {
    title: 'Contact Himalayan Monster | Pokhara Base Camp & WhatsApp Support',
    description: 'Get in touch with Himalayan Monster in Lakeside Pokhara, Nepal. Phone & WhatsApp: +977 981-2100453, email: ride@himalayanmonster.com. Visit our base camp workshop.',
    canonicalPath: '/contact',
    ogTitle: 'Contact Pokhara Base Camp | Himalayan Monster Nepal',
    ogDescription: 'Direct contact details, WhatsApp route support, office location in Lakeside Pokhara, and operating hours for booking motorcycle and MTB tours in Nepal.',
    ogImage: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'Contact Himalayan Monster',
      'Pokhara motorcycle base camp',
      'Nepal tour booking WhatsApp',
      'Himalayan Monster address'
    ]
  },
  faq: {
    title: 'Nepal Motorcycle & MTB FAQ | Upper Mustang Permits & Riding Guide',
    description: 'Frequently asked questions about motorcycle and MTB tours in Nepal. Restricted Area Permits (RAP), driving licenses, International Driving Permits, packing lists, and terrain details.',
    canonicalPath: '/faq',
    ogTitle: 'Nepal Permits & Expedition FAQs | Himalayan Monster',
    ogDescription: 'Everything you need to know about riding legally, safely, and comfortably across the Himalayas of Nepal.',
    ogImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'Nepal motorcycle license requirements',
      'Upper Mustang permit cost',
      'Nepal riding gear checklist',
      'motorcycle touring Nepal FAQ'
    ]
  },
  private: {
    title: 'Private & Custom Motorcycle Expeditions Nepal | Himalayan Monster',
    description: 'Design a bespoke private motorcycle or MTB expedition in Nepal. Custom dates, private lodge buyouts, chosen fleet mix, media film crews, and dedicated 4x4 support for your group.',
    canonicalPath: '/private-tours',
    ogTitle: 'Plan a Bespoke Private Expedition | Himalayan Monster Nepal',
    ogDescription: 'Tailored private Himalayan motorcycle and mountain bike journeys for riding clubs, friends, couples, and solo travelers.',
    ogImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'Private motorcycle tour Nepal',
      'custom Himalayan expedition',
      'bespoke motorbike tour Pokhara',
      'private MTB tour Mustang'
    ]
  },
  stories: {
    title: 'Himalayan Adventure Stories & Route Guides | Himalayan Monster Journal',
    description: 'Field dispatches, high-pass motorcycle chronicles, technical terrain guides, and mountain bike singletrack reports directly from the trails of Pokhara, Mustang, and Nepal.',
    canonicalPath: '/blog',
    ogTitle: 'From the Road: Himalayan Adventure Stories & Guides | Himalayan Monster',
    ogDescription: 'Editorial field reports and route breakdowns from our guides and riders exploring Nepal on two wheels.',
    ogImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    keywords: [
      'Nepal motorcycle blog',
      'Upper Mustang riding guide',
      'Pokhara MTB trail guide',
      'Himalayan ride stories'
    ]
  },
  '404': {
    title: '404 Page Not Found | Himalayan Monster Nepal',
    description: 'The requested trail or page could not be found. Explore our Himalayan motorcycle tours, MTB expeditions, or return to the Himalayan Monster homepage.',
    canonicalPath: '/404',
    ogTitle: '404 Page Not Found | Himalayan Monster',
    ogDescription: 'Trail marker missing. Navigate back to our featured Himalayan motorcycle tours and bike rentals.',
    ogImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop'
  }
};
