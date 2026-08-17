import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChooseYourRide } from './components/ChooseYourRide';
import { SignatureExpeditions } from './components/SignatureExpeditions';
import { UpperMustangFeature } from './components/UpperMustangFeature';
import { WhyUs } from './components/WhyUs';
import { FleetSection } from './components/FleetSection';
import { RentalsSection } from './components/RentalsSection';
import { MtbSection } from './components/MtbSection';
import { AdventureStories } from './components/AdventureStories';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramGrid } from './components/InstagramGrid';
import { BookingCta } from './components/BookingCta';
import { Footer } from './components/Footer';
import { TourDetailView } from './components/TourDetailView';
import { SeoLandingPageView } from './components/SeoLandingPageView';
import { BookingModal } from './components/BookingModal';
import { MountainWeatherWidget } from './components/MountainWeatherWidget';
import { HimalayanRouteMap } from './components/HimalayanRouteMap';
import { PhotoGallery } from './components/PhotoGallery';
import { ContactView } from './components/ContactView';
import { NotFoundView } from './components/NotFoundView';
import { ArticleDetailView } from './components/ArticleDetailView';
import { SeoHead } from './components/SeoHead';
import { AdminDashboard } from './components/AdminDashboard';

import { TOURS_DATA } from './data/toursData';
import { FLEET_DATA } from './data/fleetData';
import { STORIES_DATA } from './data/storiesData';
import { SEO_LANDING_PAGES } from './data/seoPagesData';
import { HimalayanMonsterLogo } from './components/HimalayanMonsterLogo';
import { LogoProvider, useLogo } from './context/LogoContext';
import { LogoConfigModal } from './components/LogoConfigModal';
import { TourCategory, FleetBike, Article } from './types';
import { 
  STATIC_PAGE_SEO, 
  getLocalBusinessJsonLd, 
  getBreadcrumbJsonLd, 
  getTourJsonLd, 
  getArticleJsonLd, 
  getFaqJsonLd 
} from './lib/seo';
import { initGoogleAnalytics, Analytics } from './lib/analytics';
import { 
  Compass, ShieldCheck, MapPin, Wrench, Mountain, Flame, Zap, 
  HelpCircle, CheckCircle2, ArrowRight, Phone, MessageCircle, 
  FileText, Calendar, Users, Award, ChevronDown, ChevronUp, Sparkles, Upload
} from 'lucide-react';

function AppContent() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedTourSlug, setSelectedTourSlug] = useState<string>('upper-mustang-motorcycle-tour');
  const [selectedSeoSlug, setSelectedSeoSlug] = useState<string>('motorcycle-tours-pokhara');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>('400-km-into-mustang');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTourSlug, setBookingTourSlug] = useState<string | undefined>(undefined);
  const [bookingCategory, setBookingCategory] = useState<TourCategory | 'rental'>('motorcycle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { isConfigModalOpen, setIsConfigModalOpen } = useLogo();

  // Helper to map route and slug to canonical URL path
  const getPathForRoute = useCallback((view: string, slug?: string): string => {
    switch (view) {
      case 'home':
        return '/';
      case 'motorcycles':
        return '/motorcycle-tours';
      case 'mtb':
        return '/mtb-tours';
      case 'e-mtb':
        return '/e-mtb-tours';
      case 'rentals':
        return '/rentals';
      case 'expeditions':
        return '/expeditions';
      case 'about':
        return '/about';
      case 'contact':
        return '/contact';
      case 'faq':
        return '/faq';
      case 'private':
        return '/private-tours';
      case 'stories':
        return '/blog';
      case 'admin':
        return '/admin';
      case 'article-detail':
        return `/blog/${slug || selectedArticleSlug}`;
      case 'tour-detail':
        return `/tours/${slug || selectedTourSlug}`;
      case 'seo-page':
        return `/${slug || selectedSeoSlug}`;
      case '404':
        return '/404';
      default:
        return `/${view}`;
    }
  }, [selectedArticleSlug, selectedTourSlug, selectedSeoSlug]);

  // Helper to parse the current browser pathname into internal view state
  const parsePathname = useCallback((pathname: string) => {
    const clean = pathname.replace(/\/$/, '') || '/';

    if (clean === '/' || clean === '') {
      setCurrentView('home');
      return;
    }

    if (clean === '/motorcycle-tours' || clean === '/motorcycle-tours-nepal' || clean === '/motorcycles') {
      setCurrentView('motorcycles');
      return;
    }

    if (clean === '/mtb-tours' || clean === '/mtb') {
      setCurrentView('mtb');
      return;
    }

    if (clean === '/e-mtb-tours' || clean === '/e-mtb') {
      setCurrentView('e-mtb');
      return;
    }

    if (clean === '/rentals') {
      setCurrentView('rentals');
      return;
    }

    if (clean === '/expeditions') {
      setCurrentView('expeditions');
      return;
    }

    if (clean === '/about' || clean === '/about-us') {
      setCurrentView('about');
      return;
    }

    if (clean === '/contact' || clean === '/contact-us') {
      setCurrentView('contact');
      return;
    }

    if (clean === '/faq' || clean === '/faqs') {
      setCurrentView('faq');
      return;
    }

    if (clean === '/private-tours' || clean === '/private') {
      setCurrentView('private');
      return;
    }

    if (clean === '/blog' || clean === '/stories') {
      setCurrentView('stories');
      return;
    }

    if (clean === '/admin' || clean === '/admin/logo' || clean === '/admin/branding' || clean === '/admin/settings') {
      setCurrentView('admin');
      return;
    }

    // Article detail URL: /blog/:slug or /stories/:slug
    if (clean.startsWith('/blog/') || clean.startsWith('/stories/')) {
      const slug = clean.replace(/^\/(blog|stories)\//, '');
      const matched = STORIES_DATA.find((a) => a.slug === slug || a.id === slug);
      if (matched) {
        setSelectedArticleSlug(matched.slug);
        setCurrentView('article-detail');
        return;
      }
    }

    // Tour detail URL: /tours/:slug
    if (clean.startsWith('/tours/')) {
      const slug = clean.replace(/^\/tours\//, '');
      const matched = TOURS_DATA.find((t) => t.slug === slug || t.id === slug);
      if (matched) {
        setSelectedTourSlug(matched.slug);
        setCurrentView('tour-detail');
        return;
      }
    }

    // SEO landing pages or direct slugs: /:slug
    const singleSlug = clean.replace(/^\//, '');
    if (SEO_LANDING_PAGES[singleSlug]) {
      setSelectedSeoSlug(singleSlug);
      setCurrentView('seo-page');
      return;
    }

    const matchedTour = TOURS_DATA.find((t) => t.slug === singleSlug || t.id === singleSlug);
    if (matchedTour) {
      setSelectedTourSlug(matchedTour.slug);
      setCurrentView('tour-detail');
      return;
    }

    // Unmatched path -> 404
    setCurrentView('404');
  }, []);

  // Initialize GA4 & parse initial browser URL on mount
  useEffect(() => {
    initGoogleAnalytics();
    parsePathname(window.location.pathname);

    const handlePopState = () => {
      parsePathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parsePathname]);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedTourSlug, selectedSeoSlug, selectedArticleSlug]);

  const handleNavigate = (view: string, slug?: string) => {
    if (view === 'tour-detail' && slug) {
      setSelectedTourSlug(slug);
    } else if (view === 'seo-page' && slug) {
      setSelectedSeoSlug(slug);
    } else if (view === 'article-detail' && slug) {
      setSelectedArticleSlug(slug);
    }

    const newPath = getPathForRoute(view, slug);
    if (window.location.pathname !== newPath) {
      window.history.pushState({ view, slug }, '', newPath);
    }

    setCurrentView(view);
  };

  const handleOpenBooking = (tourSlug?: string, category: TourCategory | 'rental' = 'motorcycle') => {
    setBookingTourSlug(tourSlug);
    setBookingCategory(category);
    setIsBookingOpen(true);
  };

  const handleSelectTour = (slug: string) => {
    setSelectedTourSlug(slug);
    const tour = TOURS_DATA.find(t => t.slug === slug);
    if (tour) {
      Analytics.trackTourView(tour.title, tour.category, tour.slug);
    }
    const newPath = `/tours/${slug}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ view: 'tour-detail', slug }, '', newPath);
    }
    setCurrentView('tour-detail');
  };

  const handleSelectSeoPage = (slug: string) => {
    if (SEO_LANDING_PAGES[slug]) {
      setSelectedSeoSlug(slug);
      const newPath = `/${slug}`;
      if (window.location.pathname !== newPath) {
        window.history.pushState({ view: 'seo-page', slug }, '', newPath);
      }
      setCurrentView('seo-page');
    } else {
      handleSelectTour(slug);
    }
  };

  const handleOpenArticleReader = (article: Article) => {
    setSelectedArticleSlug(article.slug);
    Analytics.trackArticleRead(article.title, article.slug);
    const newPath = `/blog/${article.slug}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ view: 'article-detail', slug: article.slug }, '', newPath);
    }
    setCurrentView('article-detail');
  };

  const selectedTour = TOURS_DATA.find((t) => t.slug === selectedTourSlug) || TOURS_DATA[0];
  const selectedSeoPage = SEO_LANDING_PAGES[selectedSeoSlug] || SEO_LANDING_PAGES['motorcycle-tours-pokhara'];
  const selectedArticle = STORIES_DATA.find((a) => a.slug === selectedArticleSlug) || STORIES_DATA[0];

  if (currentView === 'admin') {
    return <AdminDashboard onNavigate={(view, slug) => handleNavigate(view, slug)} />;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F4] selection:bg-[#e06d2d] selection:text-black flex flex-col justify-between font-sans">
      {/* Universal Fixed Header Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => handleNavigate(view)}
        onOpenBooking={(slug) => handleOpenBooking(slug)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <>
            <SeoHead
              title={STATIC_PAGE_SEO.home.title}
              description={STATIC_PAGE_SEO.home.description}
              canonicalPath="/"
              ogTitle={STATIC_PAGE_SEO.home.ogTitle}
              ogDescription={STATIC_PAGE_SEO.home.ogDescription}
              ogImage={STATIC_PAGE_SEO.home.ogImage}
              keywords={STATIC_PAGE_SEO.home.keywords}
              jsonLd={[
                getLocalBusinessJsonLd(),
                getBreadcrumbJsonLd([{ name: 'Home', path: '/' }])
              ]}
            />

            <Hero
              onExploreExpeditions={() => {
                const el = document.getElementById('expeditions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else handleNavigate('expeditions');
              }}
              onRentBike={() => {
                const el = document.getElementById('rentals');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else handleNavigate('rentals');
              }}
              onOpenPrivateExpedition={() => handleNavigate('private')}
            />

            <ChooseYourRide
              onSelectCategory={(category) => {
                if (category === 'motorcycle') handleNavigate('motorcycles');
                else handleNavigate('mtb');
              }}
            />

            <SignatureExpeditions
              tours={TOURS_DATA}
              onSelectTour={handleSelectTour}
              onOpenBooking={(slug) => handleOpenBooking(slug)}
            />

            <HimalayanRouteMap
              onOpenBooking={(slug) => handleOpenBooking(slug)}
              onSelectRoute={(routeId) => {
                const matched = TOURS_DATA.find(t => t.id === routeId || t.slug.includes(routeId));
                if (matched) handleSelectTour(matched.slug);
              }}
            />

            <MountainWeatherWidget
              onExploreExpeditions={() => handleNavigate('expeditions')}
            />

            <FleetSection
              fleet={FLEET_DATA}
              onRentBike={(bike: FleetBike) => handleOpenBooking(undefined, bike.category)}
            />

            <PhotoGallery />

            <AdventureStories
              articles={STORIES_DATA}
              onOpenArticleReader={handleOpenArticleReader}
            />

            <ReviewsSection />

            <InstagramGrid />

            <BookingCta
              onExploreExpeditions={() => handleNavigate('expeditions')}
              onPlanPrivateRide={() => handleNavigate('private')}
            />
          </>
        )}

        {/* VIEW 2: ALL EXPEDITIONS VIEW */}
        {currentView === 'expeditions' && (
          <div className="pt-24 pb-16">
            <SeoHead
              title={STATIC_PAGE_SEO.expeditions.title}
              description={STATIC_PAGE_SEO.expeditions.description}
              canonicalPath="/expeditions"
              ogTitle={STATIC_PAGE_SEO.expeditions.ogTitle}
              ogDescription={STATIC_PAGE_SEO.expeditions.ogDescription}
              ogImage={STATIC_PAGE_SEO.expeditions.ogImage}
              keywords={STATIC_PAGE_SEO.expeditions.keywords}
              jsonLd={getBreadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'All Expeditions', path: '/expeditions' }
              ])}
            />

            <div className="relative py-16 sm:py-24 mb-10 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
                  alt="Himalayan motorcycle and MTB expeditions route map across Nepal"
                  className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
              </div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  {/* Breadcrumb nav */}
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">Expeditions</li>
                    </ol>
                  </nav>

                  <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-semibold block mb-3 inline-flex items-center gap-2 bg-[#e06d2d]/10 px-3 py-1 rounded-sm border border-[#e06d2d]/30">
                    <Compass className="w-3.5 h-3.5 text-[#e06d2d]" />
                    ALL GUIDED EXPEDITIONS • 2026 / 2027
                  </span>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
                    ALL TOURS & EXPEDITIONS
                  </h1>
                  <p className="mt-4 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed max-w-2xl">
                    Explore all our fully supported multi-day motorbike and mountain bike journeys across Upper Mustang, Annapurna Circuit, Manang, and remote trans-Himalayan valleys.
                  </p>
                </div>
              </div>
            </div>

            <SignatureExpeditions
              tours={TOURS_DATA}
              onSelectTour={handleSelectTour}
              onOpenBooking={(slug) => handleOpenBooking(slug)}
            />

            <BookingCta
              onExploreExpeditions={() => handleOpenBooking()}
              onPlanPrivateRide={() => handleNavigate('private')}
            />
          </div>
        )}

        {/* VIEW 3: MOTORCYCLES DEDICATED VIEW */}
        {currentView === 'motorcycles' && (
          <div className="pt-24 pb-16">
            <SeoHead
              title={STATIC_PAGE_SEO.motorcycles.title}
              description={STATIC_PAGE_SEO.motorcycles.description}
              canonicalPath="/motorcycle-tours"
              ogTitle={STATIC_PAGE_SEO.motorcycles.ogTitle}
              ogDescription={STATIC_PAGE_SEO.motorcycles.ogDescription}
              ogImage={STATIC_PAGE_SEO.motorcycles.ogImage}
              keywords={STATIC_PAGE_SEO.motorcycles.keywords}
              jsonLd={getBreadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'Motorcycle Tours Nepal', path: '/motorcycle-tours' }
              ])}
            />

            <div className="relative py-16 sm:py-24 mb-10 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2000&auto=format&fit=crop"
                  alt="Royal Enfield Himalayan 450 motorcycles riding through Himalayan Mustang pass"
                  className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.2]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">Motorcycle Tours</li>
                    </ol>
                  </nav>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#e06d2d] animate-pulse" />
                    DISCIPLINE • DUAL-SPORT & ADVENTURE MOTORCYCLES
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
                    HIMALAYAN MOTORBIKE TOURS
                  </h1>
                  <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
                    Purpose-built dual-sport routes crossing high mountain passes, canyon riverbeds, and ancient kingdom tracks on the Royal Enfield Himalayan 450 and Honda CRF300L.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/10 text-xs font-mono text-neutral-300">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#e06d2d]" /> 4x4 Support Truck Included</span>
                    <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-[#e06d2d]" /> Lead Certified Guide & Mechanic</span>
                    <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-[#e06d2d]" /> Max Altitude 4,660m</span>
                  </div>
                </div>
              </div>
            </div>

            <SignatureExpeditions
              tours={TOURS_DATA.filter((t) => t.category === 'motorcycle')}
              title="MOTORBIKE TOURS & EXPEDITIONS"
              subtitle="All guided dual-sport & adventure motorbike routes across Nepal with dedicated 4x4 luggage support and mechanics."
              categoryTag="MOTORBIKE EXPEDITIONS"
              hideFilter={true}
              onSelectTour={handleSelectTour}
              onOpenBooking={(slug) => handleOpenBooking(slug, 'motorcycle')}
            />

            <BookingCta
              onExploreExpeditions={() => handleOpenBooking(undefined, 'motorcycle')}
              onPlanPrivateRide={() => handleNavigate('private')}
            />
          </div>
        )}

        {/* VIEW 4: MTB VIEW */}
        {currentView === 'mtb' && (
          <div className="pt-24 pb-16">
            <SeoHead
              title={STATIC_PAGE_SEO.mtb.title}
              description={STATIC_PAGE_SEO.mtb.description}
              canonicalPath="/mtb-tours"
              ogTitle={STATIC_PAGE_SEO.mtb.ogTitle}
              ogDescription={STATIC_PAGE_SEO.mtb.ogDescription}
              ogImage={STATIC_PAGE_SEO.mtb.ogImage}
              keywords={STATIC_PAGE_SEO.mtb.keywords}
              jsonLd={getBreadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'MTB Tours Nepal', path: '/mtb-tours' }
              ])}
            />

            <div className="relative py-16 sm:py-24 mb-10 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop"
                  alt="Mountain biking on rugged alpine singletrack in the Himalayas of Nepal"
                  className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.2]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">MTB Tours</li>
                    </ol>
                  </nav>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#e06d2d] animate-pulse" />
                    DISCIPLINE • ENDURO & GRAVITY MTB
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
                    HIMALAYAN MOUNTAIN BIKE TOURS
                  </h1>
                  <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
                    World-class singletrack descents, high alpine passes, and technical ridge riding backed by 4x4 shuttles and certified mountain bike guides.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/10 text-xs font-mono text-neutral-300">
                    <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-[#e06d2d]" /> 4,000m+ Gravity Descents</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#e06d2d]" /> 4x4 Shuttle Uplifts</span>
                    <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#e06d2d]" /> Santa Cruz & Trek Full Suspension</span>
                  </div>
                </div>
              </div>
            </div>

            <SignatureExpeditions
              tours={TOURS_DATA.filter((t) => t.category === 'mtb' || t.category === 'e-mtb')}
              title="MOUNTAIN BIKE TOURS & EXPEDITIONS"
              subtitle="All guided enduro, singletrack, and high-altitude mountain bike expeditions across Mustang, Annapurna, and Pokhara valleys."
              categoryTag="MOUNTAIN BIKE TOURS"
              onSelectTour={handleSelectTour}
              onOpenBooking={(slug) => handleOpenBooking(slug, 'mtb')}
            />

            <BookingCta
              onExploreExpeditions={() => handleOpenBooking(undefined, 'mtb')}
              onPlanPrivateRide={() => handleNavigate('private')}
            />
          </div>
        )}

        {/* VIEW 5: E-MTB VIEW */}
        {currentView === 'e-mtb' && (
          <div className="pt-24 pb-16">
            <SeoHead
              title={STATIC_PAGE_SEO['e-mtb'].title}
              description={STATIC_PAGE_SEO['e-mtb'].description}
              canonicalPath="/e-mtb-tours"
              ogTitle={STATIC_PAGE_SEO['e-mtb'].ogTitle}
              ogDescription={STATIC_PAGE_SEO['e-mtb'].ogDescription}
              ogImage={STATIC_PAGE_SEO['e-mtb'].ogImage}
              keywords={STATIC_PAGE_SEO['e-mtb'].keywords}
              jsonLd={getBreadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'E-MTB Tours Nepal', path: '/e-mtb-tours' }
              ])}
            />

            <div className="relative py-16 sm:py-24 mb-10 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=2000&auto=format&fit=crop"
                  alt="Electric mountain bike climbing Himalayan ridges in Pokhara Nepal"
                  className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.2]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">E-MTB Tours</li>
                    </ol>
                  </nav>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
                    <Zap className="w-3.5 h-3.5 text-[#e06d2d]" />
                    DISCIPLINE • TURBO ELECTRIC FLOW
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
                    E-MTB HIMALAYAN RIDGES
                  </h1>
                  <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
                    Conquer 1,500m elevation gains effortlessly with 90Nm electric assist. Access remote ridge views of Annapurna and Fishtail with maximum fun and zero exhaustion.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/10 text-xs font-mono text-neutral-300">
                    <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#e06d2d]" /> Bosch & Shimano 750Wh Battery</span>
                    <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-[#e06d2d]" /> 85km All-Day Mountain Range</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#e06d2d]" /> Certified E-MTB Ride Leaders</span>
                  </div>
                </div>
              </div>
            </div>

            <SignatureExpeditions
              tours={TOURS_DATA.filter((t) => t.category === 'e-mtb')}
              onSelectTour={handleSelectTour}
              onOpenBooking={(slug) => handleOpenBooking(slug, 'e-mtb')}
            />
            <FleetSection
              fleet={FLEET_DATA.filter((b) => b.category === 'e-mtb')}
              onRentBike={(bike) => handleOpenBooking(undefined, 'e-mtb')}
            />
          </div>
        )}

        {/* VIEW 6: RENTALS VIEW */}
        {currentView === 'rentals' && (
          <div className="pt-24 pb-16">
            <SeoHead
              title={STATIC_PAGE_SEO.rentals.title}
              description={STATIC_PAGE_SEO.rentals.description}
              canonicalPath="/rentals"
              ogTitle={STATIC_PAGE_SEO.rentals.ogTitle}
              ogDescription={STATIC_PAGE_SEO.rentals.ogDescription}
              ogImage={STATIC_PAGE_SEO.rentals.ogImage}
              keywords={STATIC_PAGE_SEO.rentals.keywords}
              jsonLd={getBreadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'Rentals', path: '/rentals' }
              ])}
            />

            <div className="relative py-16 sm:py-24 mb-10 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop"
                  alt="Motorcycle rentals and MTB fleet ready in Lakeside Pokhara Nepal workshop"
                  className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.2]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">Rentals</li>
                    </ol>
                  </nav>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
                    <Wrench className="w-3.5 h-3.5 text-[#e06d2d]" />
                    POKHARA BASE • DAILY & WEEKLY RENTALS
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
                    HIMALAYAN FLEET RENTALS
                  </h1>
                  <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
                    Rent adventure-ready Royal Enfield Himalayan 450s, Honda CRFs, and premium full-suspension mountain bikes directly from our Lakeside Pokhara headquarters.
                  </p>
                </div>
              </div>
            </div>

            <RentalsSection
              onOpenRentalsView={() => {}}
              onOpenRentalModal={(category) => handleOpenBooking(undefined, category || 'rental')}
            />
            <FleetSection
              fleet={FLEET_DATA}
              onRentBike={(bike) => handleOpenBooking(undefined, bike.category)}
            />
          </div>
        )}

        {/* VIEW 7: ABOUT US & ETHOS */}
        {currentView === 'about' && (
          <div className="pt-24 pb-20 bg-[#0A0A0A] text-white">
            <SeoHead
              title={STATIC_PAGE_SEO.about.title}
              description={STATIC_PAGE_SEO.about.description}
              canonicalPath="/about"
              ogTitle={STATIC_PAGE_SEO.about.ogTitle}
              ogDescription={STATIC_PAGE_SEO.about.ogDescription}
              ogImage={STATIC_PAGE_SEO.about.ogImage}
              keywords={STATIC_PAGE_SEO.about.keywords}
              jsonLd={getBreadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' }
              ])}
            />

            <div className="relative py-16 sm:py-24 mb-14 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=2000&auto=format&fit=crop"
                  alt="Himalayan Monster expedition crew and mechanics in Pokhara base"
                  className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.2]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">About Us</li>
                    </ol>
                  </nav>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
                    <Award className="w-3.5 h-3.5 text-[#e06d2d]" />
                    OUR ETHOS & BASE • POKHARA, NEPAL
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                    BORN ON THE DIRT ROADS OF NEPAL
                  </h1>
                  <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
                    Himalayan Monster was founded in Pokhara with a singular conviction: the Himalayas were built to be experienced on two wheels with throttle, pedal, and unadulterated spirit.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              <div className="bg-[#141416] p-8 sm:p-12 rounded-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
                <div className="max-w-md sm:max-w-lg md:max-w-xl flex-shrink-0 flex flex-col items-center gap-4">
                  <HimalayanMonsterLogo variant="full" />
                  <button
                    type="button"
                    onClick={() => handleNavigate('admin')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/5 hover:bg-[#e06d2d]/20 text-neutral-300 hover:text-[#e06d2d] border border-white/10 hover:border-[#e06d2d]/40 text-xs font-mono transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#e06d2d]" />
                    <span>Brand Logo Admin Studio</span>
                  </button>
                </div>
                <div className="space-y-3 text-left">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#e06d2d] font-bold">
                    OFFICIAL BRAND & EXPEDITION OUTFITTER
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
                    HIMALAYAN MONSTER EXTREME TOURS
                  </h2>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    Designed, tested, and ridden across the wildest passes of the Himalayas. Our livery represents the multi-terrain spirit of Nepal: crimson earth, desert gold, alpine greens, glacial blues, and the roar of a high-altitude machine.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#141416] p-8 rounded-sm border border-white/10 space-y-4">
                  <div className="w-12 h-12 rounded-sm bg-[#e06d2d]/20 text-[#e06d2d] flex items-center justify-center font-heading font-black text-xl">
                    01
                  </div>
                  <h3 className="font-heading text-2xl font-black uppercase text-white">
                    RUGGED YET PROFESSIONAL
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    We combine real adventure with uncompromising safety protocols. Every tour includes lead certified riders, satellite communications, medical trauma first responders, and 4x4 backup vehicles carrying tools and luggage.
                  </p>
                </div>

                <div className="bg-[#141416] p-8 rounded-sm border border-white/10 space-y-4">
                  <div className="w-12 h-12 rounded-sm bg-[#e06d2d]/20 text-[#e06d2d] flex items-center justify-center font-heading font-black text-xl">
                    02
                  </div>
                  <h3 className="font-heading text-2xl font-black uppercase text-white">
                    LOCAL ROOTS, GLOBAL STANDARDS
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                    Our mechanics and route planners grew up in these mountains. We maintain tight relationships with remote teahouse families, monasteries, and local village leaders across Mustang, Manang, and the Annapurna rim.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-[#141416] rounded-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white">
                    VISIT OUR POKHARA WORKSHOP & LOUNGE
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                    Lakeside Ward 6, Pokhara. Stop by for freshly roasted coffee, route GPX files, and bike test fits.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenBooking()}
                  className="bg-[#e06d2d] text-black font-heading font-black text-sm px-6 py-3.5 rounded-sm uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  SCHEDULE A VISIT
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 8: CONTACT & BASE CAMP */}
        {currentView === 'contact' && (
          <>
            <SeoHead
              title={STATIC_PAGE_SEO.contact.title}
              description={STATIC_PAGE_SEO.contact.description}
              canonicalPath="/contact"
              ogTitle={STATIC_PAGE_SEO.contact.ogTitle}
              ogDescription={STATIC_PAGE_SEO.contact.ogDescription}
              ogImage={STATIC_PAGE_SEO.contact.ogImage}
              keywords={STATIC_PAGE_SEO.contact.keywords}
              jsonLd={[
                getLocalBusinessJsonLd(),
                getBreadcrumbJsonLd([
                  { name: 'Home', path: '/' },
                  { name: 'Contact', path: '/contact' }
                ])
              ]}
            />
            <ContactView
              onBackToHome={() => handleNavigate('home')}
              onOpenBooking={() => handleOpenBooking()}
            />
          </>
        )}

        {/* VIEW 9: ADVENTURE STORIES / BLOG */}
        {currentView === 'stories' && (
          <div className="pt-24 pb-16">
            <SeoHead
              title={STATIC_PAGE_SEO.stories.title}
              description={STATIC_PAGE_SEO.stories.description}
              canonicalPath="/blog"
              ogTitle={STATIC_PAGE_SEO.stories.ogTitle}
              ogDescription={STATIC_PAGE_SEO.stories.ogDescription}
              ogImage={STATIC_PAGE_SEO.stories.ogImage}
              keywords={STATIC_PAGE_SEO.stories.keywords}
              jsonLd={getBreadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'Blog & Ride Stories', path: '/blog' }
              ])}
            />

            <div className="relative py-16 sm:py-24 mb-10 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
                  alt="Riders on Himalayan trail journal in Mustang Nepal"
                  className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.2]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">Adventure Stories</li>
                    </ol>
                  </nav>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
                    <FileText className="w-3.5 h-3.5 text-[#e06d2d]" />
                    EXPEDITION FIELD DISPATCHES
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
                    HIMALAYAN ADVENTURE STORIES
                  </h1>
                  <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
                    Gear reviews, high-pass chronicles, terrain guides, and rider stories straight from the trails of Nepal.
                  </p>
                </div>
              </div>
            </div>

            <AdventureStories
              articles={STORIES_DATA}
              onOpenArticleReader={handleOpenArticleReader}
            />
          </div>
        )}

        {/* VIEW 10: ARTICLE DETAIL VIEW */}
        {currentView === 'article-detail' && selectedArticle && (
          <>
            <SeoHead
              title={`${selectedArticle.title} | Himalayan Monster Nepal`}
              description={selectedArticle.excerpt}
              canonicalPath={`/blog/${selectedArticle.slug}`}
              ogTitle={`${selectedArticle.title} | Himalayan Monster`}
              ogDescription={selectedArticle.excerpt}
              ogImage={selectedArticle.coverImage}
              ogType="article"
              keywords={selectedArticle.tags}
              jsonLd={[
                getArticleJsonLd(selectedArticle),
                getBreadcrumbJsonLd([
                  { name: 'Home', path: '/' },
                  { name: 'Blog', path: '/blog' },
                  { name: selectedArticle.title, path: `/blog/${selectedArticle.slug}` }
                ])
              ]}
            />
            <ArticleDetailView
              article={selectedArticle}
              allTours={TOURS_DATA}
              onBack={() => handleNavigate('stories')}
              onSelectTour={handleSelectTour}
              onOpenBooking={() => handleOpenBooking()}
            />
          </>
        )}

        {/* VIEW 11: FAQS & PERMITS */}
        {currentView === 'faq' && (
          <div className="pt-24 pb-20 bg-[#0A0A0A] text-white">
            <SeoHead
              title={STATIC_PAGE_SEO.faq.title}
              description={STATIC_PAGE_SEO.faq.description}
              canonicalPath="/faq"
              ogTitle={STATIC_PAGE_SEO.faq.ogTitle}
              ogDescription={STATIC_PAGE_SEO.faq.ogDescription}
              ogImage={STATIC_PAGE_SEO.faq.ogImage}
              keywords={STATIC_PAGE_SEO.faq.keywords}
              jsonLd={[
                getFaqJsonLd([
                  {
                    q: 'What permits are required for the Upper Mustang motorcycle tour?',
                    a: 'Upper Mustang requires a Restricted Area Permit (RAP) issued by the Nepal Department of Immigration ($500 for the first 10 days per person), plus the Annapurna Conservation Area Project (ACAP) permit and TIMS card. Himalayan Monster handles the entire application process seamlessly so your permits are verified and ready upon arrival in Pokhara.'
                  },
                  {
                    q: 'What driving license is required to ride a motorcycle in Nepal?',
                    a: 'You must hold a valid motorcycle driver’s license from your home country and carry an International Driving Permit (IDP) with Class A (Motorcycle) endorsement. We also require a passport copy with at least 6 months validity.'
                  },
                  {
                    q: 'How challenging is the riding terrain?',
                    a: 'Nepal roads range from smooth blacktop winding through sub-tropical river valleys to high-altitude gravel switchbacks, dry watercrossings, loose shale, and rocky cliff shelves. Moderate to intermediate off-road confidence is recommended for Upper Mustang and Manang.'
                  },
                  {
                    q: 'What kind of support vehicle accompanies our group?',
                    a: 'Every scheduled multi-day expedition is accompanied by a lead guide on a motorcycle and a heavy-duty 4x4 pickup truck carrying rider luggage, complete spare parts, spare tires, full toolkits, and first-aid medical supplies.'
                  },
                  {
                    q: 'What gear should I pack from home?',
                    a: 'We recommend bringing your own well-fitting helmet (full-face or dual-sport), armored riding jacket and pants, sturdy off-road riding boots, and warm base layers. We also have rental helmets and protective gear available at our Pokhara base.'
                  }
                ]),
                getBreadcrumbJsonLd([
                  { name: 'Home', path: '/' },
                  { name: 'FAQ & Permits', path: '/faq' }
                ])
              ]}
            />

            <div className="relative py-16 sm:py-24 mb-14 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop"
                  alt="Prayer flags and Himalayan pass road in Nepal"
                  className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.2]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">FAQ & Permits</li>
                    </ol>
                  </nav>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
                    <HelpCircle className="w-3.5 h-3.5 text-[#e06d2d]" />
                    INFORMATION & LOGISTICS
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                    NEPAL PERMITS & EXPEDITION FAQS
                  </h1>
                  <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
                    Everything you need to know about riding motorcycles and MTBs legally, safely, and seamlessly in the Himalayas.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="space-y-4">
                {[
                  {
                    q: 'What permits are required for the Upper Mustang motorcycle tour?',
                    a: 'Upper Mustang requires a Restricted Area Permit (RAP) issued by the Nepal Department of Immigration ($500 for the first 10 days per person), plus the Annapurna Conservation Area Project (ACAP) permit and TIMS card. Himalayan Monster handles the entire application process seamlessly so your permits are verified and ready upon arrival in Pokhara.'
                  },
                  {
                    q: 'What driving license is required to ride a motorcycle in Nepal?',
                    a: 'You must hold a valid motorcycle driver’s license from your home country and carry an International Driving Permit (IDP) with Class A (Motorcycle) endorsement. We also require a passport copy with at least 6 months validity.'
                  },
                  {
                    q: 'How challenging is the riding terrain?',
                    a: 'Nepal roads range from smooth blacktop winding through sub-tropical river valleys to high-altitude gravel switchbacks, dry watercrossings, loose shale, and rocky cliff shelves. Moderate to intermediate off-road confidence is recommended for Upper Mustang and Manang.'
                  },
                  {
                    q: 'What kind of support vehicle accompanies our group?',
                    a: 'Every scheduled multi-day expedition is accompanied by a lead guide on a motorcycle and a heavy-duty 4x4 pickup truck carrying rider luggage, complete spare parts, spare tires, full toolkits, and first-aid medical supplies.'
                  },
                  {
                    q: 'What gear should I pack from home?',
                    a: 'We recommend bringing your own well-fitting helmet (full-face or dual-sport), armored riding jacket and pants, sturdy off-road riding boots, and warm base layers. We also have rental helmets and protective gear available at our Pokhara base.'
                  }
                ].map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="bg-[#141416] rounded-sm border border-white/10 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-sans text-base sm:text-lg font-semibold text-white cursor-pointer hover:bg-white/5"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-[#e06d2d]" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-0 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed border-t border-white/5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 12: PRIVATE / CUSTOM TOURS */}
        {currentView === 'private' && (
          <div className="pt-24 pb-20 bg-[#0A0A0A] text-white">
            <SeoHead
              title={STATIC_PAGE_SEO.private.title}
              description={STATIC_PAGE_SEO.private.description}
              canonicalPath="/private-tours"
              ogTitle={STATIC_PAGE_SEO.private.ogTitle}
              ogDescription={STATIC_PAGE_SEO.private.ogDescription}
              ogImage={STATIC_PAGE_SEO.private.ogImage}
              keywords={STATIC_PAGE_SEO.private.keywords}
              jsonLd={getBreadcrumbJsonLd([
                { name: 'Home', path: '/' },
                { name: 'Private Expeditions', path: '/private-tours' }
              ])}
            />

            <div className="relative py-16 sm:py-24 mb-14 overflow-hidden border-b border-white/10 bg-[#121216]">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2000&auto=format&fit=crop"
                  alt="Private motorcycle expedition team in Himalayan wilderness"
                  className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.2]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                      <li>
                        <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                          Home
                        </button>
                      </li>
                      <li>/</li>
                      <li className="text-[#e06d2d]">Private Tours</li>
                    </ol>
                  </nav>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#e06d2d]" />
                    BESPOKE PRIVATE EXPEDITIONS
                  </div>
                  <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                    PLAN A BESPOKE PRIVATE EXPEDITION
                  </h1>
                  <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
                    Traveling with your riding club, partner, or private group? We tailor every detail—from custom dates and preferred machines to pacing, private lodge buyouts, and media film crew escorts.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="bg-[#141416] p-8 rounded-sm border border-[#e06d2d]/40 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white/5 rounded-sm">
                    <div className="font-heading text-xl font-bold uppercase text-white">Custom Dates</div>
                    <div className="text-xs text-neutral-400 mt-1">Start anytime that fits your calendar</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-sm">
                    <div className="font-heading text-xl font-bold uppercase text-white">Custom Fleet</div>
                    <div className="text-xs text-neutral-400 mt-1">Mix motorcycles, MTBs, and E-MTBs</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-sm">
                    <div className="font-heading text-xl font-bold uppercase text-white">Private Pace</div>
                    <div className="text-xs text-neutral-400 mt-1">Fast throttle runs or relaxed photography</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleOpenBooking(undefined, 'motorcycle')}
                    className="flex-1 bg-[#e06d2d] text-black font-heading font-black text-base py-4 px-6 rounded-sm uppercase tracking-wider cursor-pointer"
                  >
                    REQUEST CUSTOM ITINERARY
                  </button>

                  <a
                    href="https://wa.me/9779800000000?text=Hello%20Himalayan%20Monster,%20I'm%20planning%20a%20private%20custom%20tour%20in%20Nepal."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => Analytics.trackWhatsAppClick('Private Tours')}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm py-4 px-6 rounded-sm uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Route Director</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 13: TOUR DETAIL VIEW */}
        {currentView === 'tour-detail' && selectedTour && (
          <>
            <SeoHead
              title={selectedTour.seoTitle || `${selectedTour.title} | Himalayan Monster Nepal`}
              description={selectedTour.seoDescription || selectedTour.shortDescription}
              canonicalPath={`/tours/${selectedTour.slug}`}
              ogTitle={`${selectedTour.title} | Himalayan Monster`}
              ogDescription={selectedTour.seoDescription || selectedTour.shortDescription}
              ogImage={selectedTour.heroImage}
              keywords={selectedTour.seoKeywords}
              jsonLd={[
                getTourJsonLd(selectedTour),
                getBreadcrumbJsonLd([
                  { name: 'Home', path: '/' },
                  { 
                    name: selectedTour.category === 'motorcycle' ? 'Motorcycle Tours' : 'MTB Tours', 
                    path: selectedTour.category === 'motorcycle' ? '/motorcycle-tours' : '/mtb-tours' 
                  },
                  { name: selectedTour.title, path: `/tours/${selectedTour.slug}` }
                ])
              ]}
            />
            <TourDetailView
              tour={selectedTour}
              allTours={TOURS_DATA}
              onBack={() => handleNavigate('home')}
              onSelectTour={handleSelectTour}
              onOpenBooking={(slug) => handleOpenBooking(slug)}
            />
          </>
        )}

        {/* VIEW 14: SEO LANDING PAGE VIEW */}
        {currentView === 'seo-page' && selectedSeoPage && (
          <>
            <SeoHead
              title={selectedSeoPage.seoTitle}
              description={selectedSeoPage.metaDescription}
              canonicalPath={`/${selectedSeoPage.slug}`}
              ogTitle={selectedSeoPage.seoTitle}
              ogDescription={selectedSeoPage.metaDescription}
              ogImage={selectedSeoPage.heroImage}
              keywords={[selectedSeoPage.targetKeyword]}
              jsonLd={[
                getFaqJsonLd(selectedSeoPage.faqs || []),
                getBreadcrumbJsonLd([
                  { name: 'Home', path: '/' },
                  { name: selectedSeoPage.h1, path: `/${selectedSeoPage.slug}` }
                ])
              ]}
            />
            <SeoLandingPageView
              pageData={selectedSeoPage}
              allTours={TOURS_DATA}
              onBack={() => handleNavigate('home')}
              onSelectTour={handleSelectTour}
              onOpenBooking={(slug) => handleOpenBooking(slug)}
            />
          </>
        )}

        {/* VIEW 15: 404 NOT FOUND VIEW */}
        {currentView === '404' && (
          <>
            <SeoHead
              title={STATIC_PAGE_SEO['404'].title}
              description={STATIC_PAGE_SEO['404'].description}
              canonicalPath="/404"
              ogTitle={STATIC_PAGE_SEO['404'].ogTitle}
              ogDescription={STATIC_PAGE_SEO['404'].ogDescription}
              ogImage={STATIC_PAGE_SEO['404'].ogImage}
            />
            <NotFoundView
              onNavigate={(view, slug) => handleNavigate(view, slug)}
            />
          </>
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={(view) => handleNavigate(view)}
        onSelectSeoPage={handleSelectSeoPage}
      />

      {/* Universal Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tours={TOURS_DATA}
        fleet={FLEET_DATA}
        initialTourSlug={bookingTourSlug}
        initialCategory={bookingCategory}
      />

      {/* Brand Logo Upload & Path Configuration Modal */}
      <LogoConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LogoProvider>
      <AppContent />
    </LogoProvider>
  );
}
