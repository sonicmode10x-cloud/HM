export type TourCategory = 'motorcycle' | 'mtb' | 'e-mtb';

export type DifficultyLevel = 
  | 'Beginner–Intermediate'
  | 'Intermediate'
  | 'Intermediate–Challenging'
  | 'Challenging'
  | 'Moderate'
  | 'Demanding'
  | 'Extreme'
  | 'All Levels';

export interface DayItinerary {
  day: number;
  title: string;
  distanceKm?: string;
  ridingTime?: string;
  startAltitude?: string;
  endAltitude?: string;
  maxAltitude?: string;
  highlights: string[];
  description: string;
  overnight: string;
}

export interface TourFaq {
  question: string;
  answer: string;
}

export interface TourReview {
  id: string;
  riderName: string;
  country: string;
  countryCode: string;
  rating: number;
  date: string;
  comment: string;
  bike: string;
}

export interface DestinationActivity {
  title: string;
  location: string;
  category: 'Sightseeing' | 'Culture & Heritage' | 'Adventure & Outdoors' | 'Food & Local Life' | 'Relaxation';
  description: string;
  iconName?: string;
}

export interface Expedition {
  id: string;
  slug: string;
  packageNumber?: string;
  title: string;
  category: TourCategory;
  isFlagship?: boolean;
  flagBadge?: string;
  tagline: string;
  durationDays: number;
  durationLabel: string;
  priceUsd: number;
  price: string;
  difficulty: DifficultyLevel;
  startingPricePlaceholder: string;
  currency: string;
  routeSummary?: string;
  bestSeason: string;
  maxAltitude: string;
  terrain: string;
  groupSize: string;
  bikeProvided: string;
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  fullDescription: string;
  routeHighlights: string[];
  itinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  accommodation: string;
  preparationRequirements: string[];
  faqs: TourFaq[];
  reviews: TourReview[];
  relatedTourSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  routeMapDescription: string;
  thingsToDo?: DestinationActivity[];
}

export interface FleetBike {
  id: string;
  name: string;
  category: 'motorcycle' | 'mtb' | 'e-mtb';
  badge?: string;
  specs: {
    engineOrMotor: string;
    powerOrTorque?: string;
    batteryCapacity?: string;
    suspension: string;
    weight: string;
    brakes?: string;
    tires?: string;
    transmission?: string;
  };
  rentalPriceDayPlaceholder: string;
  rentalPriceWeekPlaceholder: string;
  image: string;
  shortDesc: string;
  terrainSuitability: string;
  features: string[];
  depositNotice: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Ride Stories' | 'Nepal Guides' | 'Route Guides' | 'Adventure Stories' | 'Rider Stories' | 'Travel Tips';
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  elevation: string;
  tagline: string;
  image: string;
  description: string;
  keyHighlights: string[];
  bestSeason: string;
  suitableFor: string[];
}

export interface SeoLandingPageData {
  slug: string;
  h1: string;
  subheading: string;
  targetKeyword: string;
  seoTitle: string;
  metaDescription: string;
  heroImage: string;
  category: TourCategory | 'rental' | 'destination';
  introContent: string[];
  highlights: string[];
  featuredTourSlugs: string[];
  fleetTypes: string[];
  faqs: TourFaq[];
}

export interface BookingFormData {
  tourId: string;
  tourTitle: string;
  category: TourCategory | 'rental';
  bookingType: 'group' | 'private' | 'rental-only';
  preferredDate: string;
  durationDays: number;
  riderCount: number;
  pillionCount: number;
  preferredBike: string;
  ridingExperience: 'beginner' | 'intermediate' | 'advanced' | 'pro';
  fullName: string;
  email: string;
  whatsappNumber: string;
  country: string;
  addRidingGear: boolean;
  addSupportVehicle: boolean;
  notes: string;
}
