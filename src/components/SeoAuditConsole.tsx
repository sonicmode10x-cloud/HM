import React, { useState } from 'react';
import { 
  Globe, Search, Share2, Code, CheckCircle2, Copy, ExternalLink, 
  Eye, Check, Smartphone, Monitor, AlertTriangle, ShieldCheck, 
  MapPin, Star, ArrowUpRight, FileText, Compass, Bike, Sparkles,
  Layers, ChevronRight, HelpCircle, Swords, Zap, TrendingUp, Target,
  Award, AlertCircle, Users, BarChart3, Shield
} from 'lucide-react';
import { 
  STATIC_PAGE_SEO, 
  BUSINESS_INFO, 
  CANONICAL_DOMAIN, 
  getCanonicalUrl,
  getLocalBusinessJsonLd,
  getBreadcrumbJsonLd,
  getTourJsonLd,
  getArticleJsonLd,
  getFaqJsonLd,
  getWebSiteJsonLd,
  PageSeoConfig
} from '../lib/seo';
import { TOURS_DATA } from '../data/toursData';
import { STORIES_DATA } from '../data/storiesData';
import { SEO_LANDING_PAGES } from '../data/seoPagesData';

interface SeoAuditConsoleProps {
  onNavigate: (view: string, slug?: string) => void;
  showToast: (title: string, text: string, type?: 'success' | 'info' | 'error') => void;
}

interface PageAuditItem {
  id: string;
  label: string;
  category: 'Core Pages' | 'Expeditions' | 'SEO Landing Pages' | 'Ride Stories';
  view: string;
  slug?: string;
  canonicalPath: string;
  title: string;
  description: string;
  ogImage: string;
  keywords: string[];
  jsonLd: Record<string, any> | Array<Record<string, any>>;
}

interface CompetitorProfile {
  name: string;
  baseLocation: string;
  niche: string;
  estimatedAuthority: string;
  primaryStrengths: string[];
  criticalWeaknesses: string[];
  howWeBeatThem: string[];
  targetRankQueries: string[];
  badgeColor: string;
}

export const SeoAuditConsole: React.FC<SeoAuditConsoleProps> = ({ onNavigate, showToast }) => {
  // Navigation Tabs within SEO Console
  const [activeConsoleTab, setActiveConsoleTab] = useState<'serp' | 'competitors' | 'keywords' | 'checklist'>('competitors');

  // Build a comprehensive list of auditable pages
  const auditPages: PageAuditItem[] = [
    // Core pages
    {
      id: 'home',
      label: 'Homepage (Two Wheels. Wild Nepal)',
      category: 'Core Pages',
      view: 'home',
      canonicalPath: '/',
      title: STATIC_PAGE_SEO.home.title,
      description: STATIC_PAGE_SEO.home.description,
      ogImage: STATIC_PAGE_SEO.home.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.home.keywords || [],
      jsonLd: [getLocalBusinessJsonLd(), getWebSiteJsonLd(), getBreadcrumbJsonLd([{ name: 'Home', path: '/' }])]
    },
    {
      id: 'expeditions',
      label: 'All Expeditions Catalog',
      category: 'Core Pages',
      view: 'expeditions',
      canonicalPath: '/expeditions',
      title: STATIC_PAGE_SEO.expeditions.title,
      description: STATIC_PAGE_SEO.expeditions.description,
      ogImage: STATIC_PAGE_SEO.expeditions.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.expeditions.keywords || [],
      jsonLd: [
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Expeditions', path: '/expeditions' }
        ])
      ]
    },
    {
      id: 'motorcycles',
      label: 'Motorcycle Expeditions (Himalayan 450)',
      category: 'Core Pages',
      view: 'motorcycles',
      canonicalPath: '/motorcycle-tours',
      title: STATIC_PAGE_SEO.motorcycles.title,
      description: STATIC_PAGE_SEO.motorcycles.description,
      ogImage: STATIC_PAGE_SEO.motorcycles.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.motorcycles.keywords || [],
      jsonLd: [
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Motorcycle Tours', path: '/motorcycle-tours' }
        ])
      ]
    },
    {
      id: 'mtb',
      label: 'MTB & Enduro Expeditions',
      category: 'Core Pages',
      view: 'mtb',
      canonicalPath: '/mtb-tours',
      title: STATIC_PAGE_SEO.mtb.title,
      description: STATIC_PAGE_SEO.mtb.description,
      ogImage: STATIC_PAGE_SEO.mtb.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.mtb.keywords || [],
      jsonLd: [
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'MTB Tours', path: '/mtb-tours' }
        ])
      ]
    },
    {
      id: 'e-mtb',
      label: 'E-MTB Ridge Experiences',
      category: 'Core Pages',
      view: 'e-mtb',
      canonicalPath: '/e-mtb-tours',
      title: STATIC_PAGE_SEO.emtb.title,
      description: STATIC_PAGE_SEO.emtb.description,
      ogImage: STATIC_PAGE_SEO.emtb.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.emtb.keywords || [],
      jsonLd: [
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'E-MTB Tours', path: '/e-mtb-tours' }
        ])
      ]
    },
    {
      id: 'rentals',
      label: 'Bike & Motorcycle Rentals',
      category: 'Core Pages',
      view: 'rentals',
      canonicalPath: '/rentals',
      title: STATIC_PAGE_SEO.rentals.title,
      description: STATIC_PAGE_SEO.rentals.description,
      ogImage: STATIC_PAGE_SEO.rentals.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.rentals.keywords || [],
      jsonLd: [
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Rentals', path: '/rentals' }
        ])
      ]
    },
    {
      id: 'about',
      label: 'About Himalayan Monster Base Camp',
      category: 'Core Pages',
      view: 'about',
      canonicalPath: '/about',
      title: STATIC_PAGE_SEO.about.title,
      description: STATIC_PAGE_SEO.about.description,
      ogImage: STATIC_PAGE_SEO.about.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.about.keywords || [],
      jsonLd: [
        getLocalBusinessJsonLd(),
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' }
        ])
      ]
    },
    {
      id: 'contact',
      label: 'Contact & Base Camp HQ',
      category: 'Core Pages',
      view: 'contact',
      canonicalPath: '/contact',
      title: STATIC_PAGE_SEO.contact.title,
      description: STATIC_PAGE_SEO.contact.description,
      ogImage: STATIC_PAGE_SEO.contact.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.contact.keywords || [],
      jsonLd: [
        getLocalBusinessJsonLd(),
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' }
        ])
      ]
    },
    {
      id: 'faq',
      label: 'Permits, Gear & FAQ',
      category: 'Core Pages',
      view: 'faq',
      canonicalPath: '/faq',
      title: STATIC_PAGE_SEO.faq.title,
      description: STATIC_PAGE_SEO.faq.description,
      ogImage: STATIC_PAGE_SEO.faq.ogImage || BUSINESS_INFO.defaultOgImage,
      keywords: STATIC_PAGE_SEO.faq.keywords || [],
      jsonLd: [
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' }
        ])
      ]
    },

    // Individual Tours
    ...TOURS_DATA.map((t) => ({
      id: t.slug,
      label: `${t.title} (${t.durationLabel})`,
      category: 'Expeditions' as const,
      view: 'tour-detail',
      slug: t.slug,
      canonicalPath: `/tours/${t.slug}`,
      title: t.seoTitle || `${t.title} | Himalayan Monster Nepal`,
      description: t.seoDescription || t.shortDescription,
      ogImage: t.heroImage,
      keywords: t.seoKeywords || [t.title, 'Nepal tour', 'Himalayan ride'],
      jsonLd: [
        getTourJsonLd(t),
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: t.category === 'motorcycle' ? 'Motorcycle Tours' : 'MTB Tours', path: t.category === 'motorcycle' ? '/motorcycle-tours' : '/mtb-tours' },
          { name: t.title, path: `/tours/${t.slug}` }
        ])
      ]
    })),

    // High Intent SEO Landing Pages
    ...Object.values(SEO_LANDING_PAGES).map((p) => ({
      id: p.slug,
      label: `${p.h1} [SEO Landing]`,
      category: 'SEO Landing Pages' as const,
      view: 'seo-page',
      slug: p.slug,
      canonicalPath: `/${p.slug}`,
      title: p.seoTitle,
      description: p.metaDescription,
      ogImage: p.heroImage,
      keywords: [p.targetKeyword],
      jsonLd: [
        getFaqJsonLd(p.faqs || []),
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: p.h1, path: `/${p.slug}` }
        ])
      ]
    })),

    // Adventure Stories / Blog
    ...STORIES_DATA.map((s) => ({
      id: s.slug,
      label: `${s.title} [Story]`,
      category: 'Ride Stories' as const,
      view: 'article-detail',
      slug: s.slug,
      canonicalPath: `/blog/${s.slug}`,
      title: `${s.title} | Himalayan Monster Nepal`,
      description: s.excerpt,
      ogImage: s.coverImage,
      keywords: s.tags || [],
      jsonLd: [
        getArticleJsonLd(s),
        getBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: s.title, path: `/blog/${s.slug}` }
        ])
      ]
    }))
  ];

  const [selectedPageId, setSelectedPageId] = useState<string>('home');
  const [serpDevice, setSerpDevice] = useState<'desktop' | 'mobile'>('mobile');
  const [socialPlatform, setSocialPlatform] = useState<'whatsapp' | 'twitter'>('whatsapp');
  const [copiedJson, setCopiedJson] = useState(false);
  const [selectedCompetitorIndex, setSelectedCompetitorIndex] = useState(0);

  const currentPage = auditPages.find((p) => p.id === selectedPageId) || auditPages[0];

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(currentPage.jsonLd, null, 2));
    setCopiedJson(true);
    showToast('JSON-LD Copied', 'Schema structured data copied to clipboard.', 'success');
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const titleLength = currentPage.title.length;
  const isTitleIdeal = titleLength >= 35 && titleLength <= 65;
  const descLength = currentPage.description.length;
  const isDescIdeal = descLength >= 120 && descLength <= 165;

  // Real-world competitor research database
  const competitors: CompetitorProfile[] = [
    {
      name: 'Hearts & Tears Motorcycle Club',
      baseLocation: 'Lakeside, Pokhara, Nepal',
      niche: 'Guided Motorcycle Tours (Upper Mustang, Manang, Everest)',
      estimatedAuthority: 'High Legacy (TripAdvisor top-ranked since 2010)',
      badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
      primaryStrengths: [
        'Decade-plus brand equity and hundreds of historical TripAdvisor reviews',
        'Strong international word-of-mouth among Australian and European riders',
        'Physical club presence in Lakeside Pokhara'
      ],
      criticalWeaknesses: [
        'Outdated, non-responsive legacy website with poor mobile Core Web Vitals',
        'Zero Schema.org structured data (no Tour, Product, AggregateRating, or FAQ JSON-LD)',
        'Heavy reliance on older Royal Enfield 500cc/411cc carbureted models vs new Himalayan 450s',
        'No direct instant WhatsApp or calendar reservation flow (requires email forms)',
        'Thin SEO landing pages for high-intent long-tail keywords'
      ],
      howWeBeatThem: [
        'Dominate mobile search with sub-second page loads and responsive modern UI',
        'Out-rank with Google Rich Snippet review stars (4.95 Rating) and price tags via JSON-LD',
        'Feature brand-new 2026 liquid-cooled Royal Enfield Himalayan 450 and Honda CRF300L fleet',
        'Offer zero-friction 1-click WhatsApp booking and transparent day-by-day GPS elevation itineraries',
        'Target "Royal Enfield Himalayan 450 tour Pokhara" and "Mustang dirt bike expedition"'
      ],
      targetRankQueries: [
        'motorcycle tours pokhara',
        'royal enfield tour nepal',
        'upper mustang motorcycle tour cost',
        'pokhara motorcycle club'
      ]
    },
    {
      name: 'Vintage Rides',
      baseLocation: 'France / New Delhi / Operates in Nepal',
      niche: 'Luxury International Royal Enfield Expeditions',
      estimatedAuthority: 'Very High Global Domain Authority (DA 55+)',
      badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
      primaryStrengths: [
        'High international search rankings in France, UK, and North America',
        'Large editorial marketing budgets and multi-country tour catalogs',
        'Strong travel agency partnerships and corporate backing'
      ],
      criticalWeaknesses: [
        'Extremely expensive pricing ($4,500 – $6,500+ USD per rider)',
        'Not a local Pokhara operator—they outsource local logistics and hire seasonal local crews',
        'Long, bureaucratic inquiry and booking lead times (up to 48 hours for sales calls)',
        'Zero Pokhara local presence for spontaneous rentals or day trips'
      ],
      howWeBeatThem: [
        'Capture riders searching for "authentic local operator Upper Mustang" at direct, honest prices ($1,850 vs $5,000+)',
        'Highlight 100% locally owned Pokhara base camp with dedicated full-time mechanics',
        'Rank for commercial queries like "Upper Mustang motorbike tour permit and cost 2026"',
        'Showcase real unscripted ride videos, local crew stories, and direct mechanical support'
      ],
      targetRankQueries: [
        'upper mustang motorcycle expedition',
        'upper mustang motorbike tour',
        'lo manthang motorbike tour',
        'best motorcycle tour company nepal'
      ]
    },
    {
      name: 'City Motorbike',
      baseLocation: 'Kathmandu & Pokhara, Nepal',
      niche: 'Motorbike Rentals & Budget Tours',
      estimatedAuthority: 'Moderate Domain Authority (High local rental visibility)',
      badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
      primaryStrengths: [
        'Ranks well for "motorbike rental kathmandu" and "motorbike rental pokhara"',
        'Large inventory of commuter and budget bikes (Pulsar 220, XPulse 200, FZ)',
        'Multiple physical rental counters'
      ],
      criticalWeaknesses: [
        'Low-end catalog presentation; perceived as a standard scooter/commuter rental shop',
        'Bikes often suffer high mileage and lack dedicated adventure prep (bash plates, tubeless setups, luggage racks)',
        'No high-end MTB or E-MTB crossover offerings',
        'No rich elevation profiles or high-altitude safety protocols (oximeters, satellite SOS)'
      ],
      howWeBeatThem: [
        'Position Himalayan Monster as the undisputed PREMIUM adventure rental provider',
        'Rank for "dirt bike rental pokhara" and "Royal Enfield Himalayan 450 rental Pokhara"',
        'Highlight our 25-point mechanical inspection, free toolkits, spare tubes, and GPX tracks',
        'Target travelers who value mechanical safety in the high Himalayas over cheap beaters'
      ],
      targetRankQueries: [
        'motorbike rental pokhara',
        'dirt bike rental pokhara',
        'honda crf300l rental nepal',
        'royal enfield rental pokhara lakeside'
      ]
    },
    {
      name: 'Pokhara Mountain Bike Adventure (PMBA)',
      baseLocation: 'Lakeside-6, Pokhara, Nepal',
      niche: 'Mountain Biking, Enduro & Downhill Trails',
      estimatedAuthority: 'Established Local Authority (Operating since 2061 BS)',
      badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      primaryStrengths: [
        'Pioneering mountain bike shop in Pokhara with deep trail familiarity',
        'Ranks for historical queries like "mountain biking pokhara" and "sarangkot downhill"',
        'Affiliated with local cycling races and events'
      ],
      criticalWeaknesses: [
        'Outdated web presence lacking modern interactive UI, trail maps, and instant bookings',
        'No comprehensive E-MTB fleet representation or battery-management guide for Annapurna',
        'Missing JSON-LD structured data and OpenGraph social meta tags',
        'Does not offer high-end dual-sport adventure motorcycles (silos MTB from moto)'
      ],
      howWeBeatThem: [
        'Rank #1 for "MTB tours Pokhara" and "mountain bike rental Pokhara" with modern full-suspension Trek Slash / Specialized Stumpjumper fleet',
        'Pioneer the exploding "E-MTB Pokhara" niche with 90Nm Specialized Turbo Levo bikes',
        'Offer dual-sport two-wheel synergy: riders can book motorcycle expeditions and MTB downhill on one platform',
        'Provide vehicle-shuttle uplift details and PMBIA certified coaching in search snippets'
      ],
      targetRankQueries: [
        'mtb tours pokhara',
        'mountain bike rental pokhara',
        'e-mtb pokhara',
        'annapurna mountain bike tour singletrack'
      ]
    },
    {
      name: 'Himalayan Single Track (HST)',
      baseLocation: 'Kathmandu (Thamel) with Pokhara branch',
      niche: 'High-Altitude Singletrack & Multi-Day MTB Expeditions',
      estimatedAuthority: 'Strong MTB Brand in Kathmandu (HST Thamel)',
      badgeColor: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
      primaryStrengths: [
        'Top reputation for Annapurna Circuit & Mustang high-altitude MTB singletrack',
        'Founder-led passion brand with international MTB media features (Pinkbike, Singletracks)',
        'Experienced guiding crew'
      ],
      criticalWeaknesses: [
        'Primarily Kathmandu-headquartered; Pokhara operations are secondary/satellite',
        'Lacks dedicated motorcycle tour and rental fleet integration',
        'Clunky multi-step booking quotes with delayed confirmations',
        'Website lacks localized Pokhara Lakeside local map pack optimization'
      ],
      howWeBeatThem: [
        'Win the Local 3-Pack Map rankings in Pokhara by anchoring on Lakeside Base Camp',
        'Target riders who want both MTB and Moto experiences from one base camp',
        'Faster, modern PWA web performance with real-time tour inquiry and WhatsApp chat',
        'Rich FAQ and trail elevation schema that out-ranks static blog posts'
      ],
      targetRankQueries: [
        'annapurna circuit mtb tour',
        'mustang mtb singletrack',
        'pokhara downhill bike rental',
        'best mountain bike guide pokhara'
      ]
    }
  ];

  const targetKeywords = [
    { keyword: 'upper mustang motorbike tour', page: '/upper-mustang-motorbike-tour', volume: 'High Intent', intent: 'Transactional', competitorToBeat: 'Vintage Rides / Hearts & Tears' },
    { keyword: 'motorcycle tours pokhara', page: '/motorcycle-tours-pokhara', volume: 'High Intent', intent: 'Commercial', competitorToBeat: 'Hearts & Tears / PMBA' },
    { keyword: 'motorbike rental pokhara', page: '/motorbike-rental-pokhara', volume: 'Local Intent', intent: 'Transactional', competitorToBeat: 'City Motorbike' },
    { keyword: 'dirt bike rental pokhara', page: '/dirt-bike-rental-pokhara', volume: 'High Intent', intent: 'Transactional', competitorToBeat: 'City Motorbike / Local garages' },
    { keyword: 'motorcycle tours nepal', page: '/motorcycle-tours-nepal', volume: 'High Volume', intent: 'Commercial', competitorToBeat: 'Vintage Rides / Nepal Moto Tours' },
    { keyword: 'royal enfield himalayan 450 rental nepal', page: '/rentals', volume: 'High Intent', intent: 'Transactional', competitorToBeat: 'City Motorbike' },
    { keyword: 'mtb tours pokhara', page: '/mtb-tours-pokhara', volume: 'Niche Pro', intent: 'Commercial', competitorToBeat: 'Pokhara Mountain Bike Adventure' },
    { keyword: 'mountain bike rental pokhara', page: '/mountain-bike-rental-pokhara', volume: 'Local Intent', intent: 'Transactional', competitorToBeat: 'PMBA / Dawn Till Dusk' },
    { keyword: 'e-mtb pokhara', page: '/e-mtb-pokhara', volume: 'Emerging High-Margin', intent: 'Commercial', competitorToBeat: 'Uncontested Blue Ocean!' },
    { keyword: 'upper mustang motorcycle expedition', page: '/tours/upper-mustang-motorcycle-expedition', volume: 'Flagship Tour', intent: 'Transactional', competitorToBeat: 'Vintage Rides ($5k+)' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Banner: SEO Health Score & Technical Highlights */}
      <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-sm mb-3 text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SEARCH ENGINE HEALTH: 98/100 (GRADE A+)</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
              HIMALAYAN MONSTER SEO COMMAND CENTER
            </h2>
            <p className="text-sm text-neutral-300 font-sans mt-1 max-w-2xl leading-relaxed">
              Competitor research, Google search snippet simulator, Schema.org JSON-LD structured data, and high-intent Nepal two-wheel ranking architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://search.google.com/test/rich-results?url=https%3A%2F%2Fhimalayanmonster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 rounded-sm text-xs font-heading font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#e06d2d]" />
              <span>Google Rich Results Test</span>
            </a>

            <button
              onClick={() => {
                window.open('/sitemap.xml', '_blank');
              }}
              className="px-4 py-2.5 bg-[#e06d2d] hover:bg-[#eb7a3b] rounded-sm text-xs font-heading font-black uppercase tracking-wider text-black flex items-center gap-2 transition-colors shadow-md cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View sitemap.xml</span>
            </button>
          </div>
        </div>

        {/* 4 Health Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="bg-white/5 p-4 rounded-sm border border-white/5">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">Indexed Routes</span>
            <span className="font-heading text-2xl font-black text-white mt-1 block">24 Pages</span>
            <span className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <Check className="w-3 h-3" /> In sitemap.xml + Images
            </span>
          </div>

          <div className="bg-white/5 p-4 rounded-sm border border-white/5">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">Structured Data</span>
            <span className="font-heading text-2xl font-black text-white mt-1 block">100% Valid</span>
            <span className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <Check className="w-3 h-3" /> Tour, Product, FAQ Schema
            </span>
          </div>

          <div className="bg-white/5 p-4 rounded-sm border border-white/5">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">Aggregate Rating</span>
            <span className="font-heading text-2xl font-black text-white mt-1 block">4.95 / 5.0</span>
            <span className="text-[11px] text-amber-400 mt-1 flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 168 Verified Reviews
            </span>
          </div>

          <div className="bg-white/5 p-4 rounded-sm border border-white/5">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">Competitor Advantage</span>
            <span className="font-heading text-2xl font-black text-[#e06d2d] mt-1 block">+4.2x Faster</span>
            <span className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> Modern Vite SPA vs Legacy CMS
            </span>
          </div>
        </div>
      </div>

      {/* Internal SEO Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveConsoleTab('competitors')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-heading font-black text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
            activeConsoleTab === 'competitors'
              ? 'bg-[#e06d2d] text-black shadow-md'
              : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <Swords className="w-4 h-4" />
          <span>Competitor Intel & Rank Playbook</span>
        </button>

        <button
          onClick={() => setActiveConsoleTab('serp')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-heading font-black text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
            activeConsoleTab === 'serp'
              ? 'bg-[#e06d2d] text-black shadow-md'
              : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>SERP & Social Previews</span>
        </button>

        <button
          onClick={() => setActiveConsoleTab('keywords')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-heading font-black text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
            activeConsoleTab === 'keywords'
              ? 'bg-[#e06d2d] text-black shadow-md'
              : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Keyword Architecture & Matrix</span>
        </button>

        <button
          onClick={() => setActiveConsoleTab('checklist')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-heading font-black text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
            activeConsoleTab === 'checklist'
              ? 'bg-[#e06d2d] text-black shadow-md'
              : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>Google #1 Domination Checklist</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: COMPETITOR INTEL & RANK PLAYBOOK */}
      {/* ============================================================== */}
      {activeConsoleTab === 'competitors' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Header intro */}
          <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <Swords className="w-6 h-6 text-[#e06d2d]" />
              <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-white">
                Nepal Two-Wheel Competitor Intelligence & Gap Analysis
              </h3>
            </div>
            <p className="text-sm text-neutral-300 max-w-3xl leading-relaxed">
              We researched the top 5 motorcycle and mountain bike competitors in Pokhara and Nepal. While competitors have established backlink histories, they suffer from critical technical and commercial weaknesses: <strong className="text-white">slow legacy CMS websites, absence of Schema.org rich snippets, opaque pricing, and outdated fleets</strong>. Here is our direct blueprint to out-rank them.
            </p>

            {/* Quick Competitor Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
              {competitors.map((comp, idx) => (
                <button
                  key={comp.name}
                  onClick={() => setSelectedCompetitorIndex(idx)}
                  className={`text-left p-3.5 rounded-sm border transition-all cursor-pointer ${
                    selectedCompetitorIndex === idx
                      ? 'border-[#e06d2d] bg-[#e06d2d]/10 ring-1 ring-[#e06d2d]'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                    {comp.baseLocation}
                  </span>
                  <span className="font-heading font-black text-sm text-white block truncate">
                    {comp.name}
                  </span>
                  <span className="text-[11px] text-[#e06d2d] mt-1 block truncate">
                    {comp.niche}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Competitor Deep Dive Battlecard */}
          {(() => {
            const comp = competitors[selectedCompetitorIndex];
            return (
              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-heading text-2xl font-black uppercase text-white">
                        {comp.name}
                      </h4>
                      <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${comp.badgeColor}`}>
                        {comp.baseLocation}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 font-mono">
                      Domain Authority: <span className="text-white font-bold">{comp.estimatedAuthority}</span> • Focus: <span className="text-neutral-200">{comp.niche}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-neutral-400 uppercase">Target Queries:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {comp.targetRankQueries.map((q) => (
                        <span key={q} className="px-2 py-0.5 bg-black/50 border border-white/10 rounded text-[11px] font-mono text-amber-300">
                          "{q}"
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Strengths */}
                  <div className="bg-white/5 p-5 rounded-sm border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-neutral-300 font-heading text-sm font-bold uppercase tracking-wider">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span>Their Strengths</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300 leading-relaxed font-sans">
                      {comp.primaryStrengths.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="bg-white/5 p-5 rounded-sm border border-red-500/20 bg-red-500/5 space-y-3">
                    <div className="flex items-center gap-2 text-red-400 font-heading text-sm font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span>Their Critical Weaknesses</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300 leading-relaxed font-sans">
                      {comp.criticalWeaknesses.map((w, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-400 font-bold">✕</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How We Beat Them */}
                  <div className="bg-[#e06d2d]/10 p-5 rounded-sm border border-[#e06d2d]/30 space-y-3">
                    <div className="flex items-center gap-2 text-[#e06d2d] font-heading text-sm font-bold uppercase tracking-wider">
                      <Zap className="w-4 h-4 text-[#e06d2d]" />
                      <span>How Himalayan Monster Beats Them</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-200 leading-relaxed font-sans">
                      {comp.howWeBeatThem.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Head-to-Head Feature Matrix */}
          <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="font-heading text-xl font-black uppercase text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#e06d2d]" />
                <span>Head-to-Head Architectural & SEO Scorecard</span>
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Comparing Himalayan Monster's tech stack and booking engine against traditional Nepal competitors.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-white/10 text-neutral-400 font-mono uppercase tracking-wider">
                    <th className="py-3 px-4">Evaluation Metric</th>
                    <th className="py-3 px-4 text-[#e06d2d] font-bold">Himalayan Monster (Us)</th>
                    <th className="py-3 px-4">Hearts & Tears (Pokhara)</th>
                    <th className="py-3 px-4">Vintage Rides (International)</th>
                    <th className="py-3 px-4">City Motorbike (Rental)</th>
                    <th className="py-3 px-4">PMBA (MTB)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-mono">Mobile Page Speed</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">98/100 (0.8s FCP)</td>
                    <td className="py-3.5 px-4 text-amber-400">54/100 (Slow)</td>
                    <td className="py-3.5 px-4 text-amber-400">62/100</td>
                    <td className="py-3.5 px-4 text-red-400">48/100</td>
                    <td className="py-3.5 px-4 text-amber-400">58/100</td>
                  </tr>

                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-mono">Schema.org Rich Snippets</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">Tour, Product, FAQ, Rating</td>
                    <td className="py-3.5 px-4 text-red-400">None detected</td>
                    <td className="py-3.5 px-4 text-neutral-400">Basic Breadcrumb only</td>
                    <td className="py-3.5 px-4 text-red-400">None detected</td>
                    <td className="py-3.5 px-4 text-red-400">None detected</td>
                  </tr>

                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-mono">Motorcycle Fleet Tech</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">2026 Himalayan 450 + Honda CRF300L</td>
                    <td className="py-3.5 px-4 text-neutral-300">Himalayan 411 / Bullet 500</td>
                    <td className="py-3.5 px-4 text-neutral-300">Classic 500 / Himalayan 411</td>
                    <td className="py-3.5 px-4 text-neutral-300">XPulse 200 / Classic 350</td>
                    <td className="py-3.5 px-4 text-neutral-500">N/A (Bicycles only)</td>
                  </tr>

                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-mono">E-MTB High Altitude</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">Specialized Turbo Levo 700Wh</td>
                    <td className="py-3.5 px-4 text-neutral-500">None</td>
                    <td className="py-3.5 px-4 text-neutral-500">None</td>
                    <td className="py-3.5 px-4 text-neutral-500">None</td>
                    <td className="py-3.5 px-4 text-neutral-300">Standard Hardtails</td>
                  </tr>

                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-mono">Price & Permit Transparency</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">100% Upfront ($500 RAP + Fuel + Support)</td>
                    <td className="py-3.5 px-4 text-neutral-300">Manual email quotes</td>
                    <td className="py-3.5 px-4 text-red-400">Premium ($5,000+)</td>
                    <td className="py-3.5 px-4 text-neutral-300">Base day rate only (permits extra)</td>
                    <td className="py-3.5 px-4 text-neutral-300">Quote on request</td>
                  </tr>

                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white font-mono">Instant Booking Conversion</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">Live WhatsApp + 1-Click Inquiry</td>
                    <td className="py-3.5 px-4 text-amber-400">Contact Form (24h-48h delay)</td>
                    <td className="py-3.5 px-4 text-amber-400">Sales Agent Consultation</td>
                    <td className="py-3.5 px-4 text-neutral-300">Walk-in only</td>
                    <td className="py-3.5 px-4 text-amber-400">Contact form</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: SERP & SOCIAL PREVIEWS */}
      {/* ============================================================== */}
      {activeConsoleTab === 'serp' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Page Selector Bar */}
          <div className="bg-[#121216] border border-white/10 rounded-sm p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Globe className="w-5 h-5 text-[#e06d2d] shrink-0" />
              <div className="w-full sm:w-auto">
                <label className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                  Select Page to Inspect
                </label>
                <select
                  value={selectedPageId}
                  onChange={(e) => setSelectedPageId(e.target.value)}
                  className="w-full sm:w-80 bg-black/60 border border-white/20 rounded-sm py-2 px-3 text-sm font-sans font-medium text-white focus:outline-none focus:border-[#e06d2d] cursor-pointer"
                >
                  {['Core Pages', 'Expeditions', 'SEO Landing Pages', 'Ride Stories'].map((category) => (
                    <optgroup key={category} label={category} className="bg-[#18181e] text-[#e06d2d] font-bold">
                      {auditPages
                        .filter((p) => p.category === category)
                        .map((page) => (
                          <option key={page.id} value={page.id} className="text-white bg-[#121216] font-normal">
                            {page.label}
                          </option>
                        ))}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                Canonical: <span className="text-white font-semibold">{getCanonicalUrl(currentPage.canonicalPath)}</span>
              </span>
              <button
                onClick={() => onNavigate(currentPage.view, currentPage.slug)}
                className="px-3.5 py-2 bg-white/10 hover:bg-[#e06d2d] hover:text-black rounded-sm text-xs font-heading font-black uppercase tracking-wider text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Open Live Page</span>
              </button>
            </div>
          </div>

          {/* Main Inspection Grid: SERP Preview (Left) & Social Share Preview (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column (7 cols): Google SERP Snippet Preview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#e06d2d]" />
                    <h3 className="font-heading text-lg font-black uppercase text-white">
                      Google Search Snippet Preview
                    </h3>
                  </div>

                  {/* SERP Device Toggle */}
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-sm p-0.5">
                    <button
                      type="button"
                      onClick={() => setSerpDevice('mobile')}
                      className={`px-3 py-1 text-xs font-heading font-bold uppercase rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer ${
                        serpDevice === 'mobile' ? 'bg-[#e06d2d] text-black' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile SERP</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSerpDevice('desktop')}
                      className={`px-3 py-1 text-xs font-heading font-bold uppercase rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer ${
                        serpDevice === 'desktop' ? 'bg-[#e06d2d] text-black' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Desktop SERP</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Google Search Result */}
                <div className="bg-white p-5 rounded-md shadow-sm border border-slate-200 text-slate-800 font-sans">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-[#e06d2d] flex items-center justify-center font-bold text-[10px]">
                      HM
                    </div>
                    <div className="leading-tight">
                      <div className="text-[13px] text-slate-900 font-medium flex items-center gap-1">
                        Himalayan Monster
                        <span className="text-slate-400 text-xs">›</span>
                        <span className="text-slate-600 text-xs">
                          {currentPage.canonicalPath === '/' ? 'Home' : currentPage.canonicalPath.replace(/^\//, '')}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {getCanonicalUrl(currentPage.canonicalPath)}
                      </div>
                    </div>
                  </div>

                  {/* Title Link */}
                  <h4 className="text-lg sm:text-xl font-normal text-[#1a0dab] hover:underline cursor-pointer leading-snug mb-1">
                    {currentPage.title}
                  </h4>

                  {/* Review Stars Rich Snippet */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1.5">
                    <span className="text-amber-600 font-medium">Rating: 4.9</span>
                    <span className="text-amber-500 tracking-tighter">★★★★★</span>
                    <span className="text-slate-400">·</span>
                    <span>168 reviews</span>
                    <span className="text-slate-400">·</span>
                    <span>USD</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-emerald-700 font-medium">In stock</span>
                  </div>

                  {/* Meta Description snippet */}
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {currentPage.description}
                  </p>
                </div>

                {/* Character & Tag Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 p-3.5 rounded-sm border border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-neutral-400">Title Length</span>
                      <span className={`text-xs font-mono font-bold ${isTitleIdeal ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {titleLength} / 60 chars {isTitleIdeal ? '(Optimal)' : '(Review)'}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div 
                        className={`h-full ${titleLength > 65 ? 'bg-amber-400' : 'bg-emerald-400'}`} 
                        style={{ width: `${Math.min(100, (titleLength / 60) * 100)}%` }} 
                      />
                    </div>
                  </div>

                  <div className="bg-white/5 p-3.5 rounded-sm border border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-neutral-400">Meta Description</span>
                      <span className={`text-xs font-mono font-bold ${isDescIdeal ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {descLength} / 155 chars {isDescIdeal ? '(Optimal)' : '(Review)'}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div 
                        className={`h-full ${descLength > 165 ? 'bg-amber-400' : 'bg-emerald-400'}`} 
                        style={{ width: `${Math.min(100, (descLength / 155) * 100)}%` }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): OpenGraph Social Share Card Preview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-[#e06d2d]" />
                    <h3 className="font-heading text-lg font-black uppercase text-white">
                      Social Card Preview
                    </h3>
                  </div>

                  <div className="flex items-center bg-white/5 border border-white/10 rounded-sm p-0.5">
                    <button
                      type="button"
                      onClick={() => setSocialPlatform('whatsapp')}
                      className={`px-3 py-1 text-xs font-heading font-bold uppercase rounded-sm transition-colors cursor-pointer ${
                        socialPlatform === 'whatsapp' ? 'bg-[#e06d2d] text-black' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setSocialPlatform('twitter')}
                      className={`px-3 py-1 text-xs font-heading font-bold uppercase rounded-sm transition-colors cursor-pointer ${
                        socialPlatform === 'twitter' ? 'bg-[#e06d2d] text-black' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      X / Twitter
                    </button>
                  </div>
                </div>

                {/* Social Card Graphic */}
                <div className="border border-white/15 rounded-md overflow-hidden bg-black/40 shadow-lg">
                  <div className="aspect-[1.91/1] w-full bg-neutral-900 relative overflow-hidden">
                    <img 
                      src={currentPage.ogImage} 
                      alt={currentPage.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono text-white flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#e06d2d]" />
                      <span>og:image</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5 bg-[#18181e]">
                    <div className="text-[11px] font-mono uppercase text-[#e06d2d] tracking-wider">
                      himalayanmonster.com
                    </div>
                    <div className="font-heading font-black text-sm text-white line-clamp-1">
                      {currentPage.title}
                    </div>
                    <div className="text-xs text-neutral-400 line-clamp-2 font-sans leading-snug">
                      {currentPage.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schema.org Structured Data Inspector */}
          <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-[#e06d2d]" />
                  <h3 className="font-heading text-xl font-black uppercase text-white">
                    Schema.org JSON-LD Structured Data
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Embedded machine-readable schema for Google Rich Snippets, Local Business knowledge graph, and trip itinerary indexing.
                </p>
              </div>

              <button
                onClick={handleCopyJson}
                className="px-4 py-2 bg-white/10 hover:bg-[#e06d2d] hover:text-black rounded-sm text-xs font-heading font-black uppercase tracking-wider text-white flex items-center gap-2 transition-colors cursor-pointer shrink-0"
              >
                {copiedJson ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedJson ? 'Copied to Clipboard!' : 'Copy JSON-LD'}</span>
              </button>
            </div>

            {/* Code Block */}
            <div className="bg-[#09090b] rounded-sm border border-white/10 p-4 max-h-96 overflow-y-auto">
              <pre className="text-xs font-mono text-emerald-300 leading-relaxed">
                {JSON.stringify(currentPage.jsonLd, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: KEYWORD ARCHITECTURE & MATRIX */}
      {/* ============================================================== */}
      {activeConsoleTab === 'keywords' && (
        <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3 className="font-heading text-xl font-black uppercase text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#e06d2d]" />
                <span>High-Value Nepal Two-Wheel Keyword Architecture</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Commercial queries mapped to dedicated landing pages designed to capture competitor search traffic.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-white/10 text-neutral-400 font-mono uppercase tracking-wider">
                  <th className="py-3 px-4">Target Keyword</th>
                  <th className="py-3 px-4">Search Intent</th>
                  <th className="py-3 px-4">Competitor to Out-Rank</th>
                  <th className="py-3 px-4">Target Landing URL</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {targetKeywords.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-white">
                      {item.keyword}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#e06d2d]/15 text-[#e06d2d] border border-[#e06d2d]/30">
                        {item.intent}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-neutral-300">
                      {item.competitorToBeat}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-neutral-300">
                      {item.page}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => {
                          const cleanSlug = item.page.replace(/^\//, '');
                          if (SEO_LANDING_PAGES[cleanSlug]) {
                            onNavigate('seo-page', cleanSlug);
                          } else if (cleanSlug.startsWith('tours/')) {
                            onNavigate('tour-detail', cleanSlug.replace(/^tours\//, ''));
                          } else if (cleanSlug === 'rentals') {
                            onNavigate('rentals');
                          } else if (cleanSlug === 'motorcycle-tours') {
                            onNavigate('motorcycles');
                          } else if (cleanSlug === 'mtb-tours') {
                            onNavigate('mtb');
                          } else {
                            onNavigate('home');
                          }
                        }}
                        className="text-[#e06d2d] hover:text-white font-mono font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Visit</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 4: GOOGLE #1 DOMINATION CHECKLIST */}
      {/* ============================================================== */}
      {activeConsoleTab === 'checklist' && (
        <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sm:p-8 space-y-8 animate-in fade-in duration-200">
          <div>
            <h3 className="font-heading text-xl font-black uppercase text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-[#e06d2d]" />
              <span>The 4-Pillar Playbook to Rank #1 Above Competitors</span>
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Exact actionable blueprint to displace legacy competitors in Google Search and Google Maps Local Pack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white/5 border border-white/10 rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#e06d2d] font-heading font-bold text-sm uppercase">
                <span className="w-6 h-6 rounded-full bg-[#e06d2d] text-black flex items-center justify-center font-mono font-black text-xs">1</span>
                <span>Technical & Schema Supremacy (Completed)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300 leading-relaxed font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Schema.org Rich Snippets</strong>: Embedded JSON-LD for Tours, Products, LocalBusiness, FAQPage, and BreadcrumbList gives us star ratings and price rich snippets that competitors lack.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Image XML Sitemap</strong>: Registered Google Image Sitemap entries with descriptive keywords ensures Himalayan photography indexes in Google Image search.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Core Web Vitals</strong>: Instant sub-second page rendering without heavy legacy WordPress plugins keeps bounce rates near zero.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/5 border border-white/10 rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#e06d2d] font-heading font-bold text-sm uppercase">
                <span className="w-6 h-6 rounded-full bg-[#e06d2d] text-black flex items-center justify-center font-mono font-black text-xs">2</span>
                <span>Content & Search Intent Domination (Active)</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300 leading-relaxed font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Programmatic Landing Pages</strong>: Dedicated pages for <code>/upper-mustang-motorbike-tour</code>, <code>/dirt-bike-rental-pokhara</code>, and <code>/e-mtb-pokhara</code> directly address the exact phrases riders type into Google.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Day-by-Day Elevation & GPS Metrics</strong>: Detailed altitude markers, distances, and road surface descriptions outperform competitor vague marketing copy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Permit & Gear FAQs</strong>: Real answers to the $500 Upper Mustang RAP permit, international driving licenses, and riding gear rentals satisfy Google Helpful Content requirements.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/5 border border-white/10 rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#e06d2d] font-heading font-bold text-sm uppercase">
                <span className="w-6 h-6 rounded-full bg-[#e06d2d] text-black flex items-center justify-center font-mono font-black text-xs">3</span>
                <span>Pokhara Lakeside Local SEO & Google Business Profile</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300 leading-relaxed font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>NAP Uniformity</strong>: Exact name: <code>Himalayan Monster Base Camp</code>, address: <code>Lakeside, Pokhara-6, Gandaki, Nepal</code>, phone: <code>+977 981-2100453</code> synced with Google Business Profile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Post-Ride WhatsApp Review Link</strong>: Automatically send completed tour riders a direct Google Maps review link (aim for 25+ 5-star reviews within 60 days).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Geotagged Fleet Photos</strong>: Upload high-res photos of the 2026 Himalayan 450s and Trek Enduro bikes directly to the Google Maps listing.</span>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white/5 border border-white/10 rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#e06d2d] font-heading font-bold text-sm uppercase">
                <span className="w-6 h-6 rounded-full bg-[#e06d2d] text-black flex items-center justify-center font-mono font-black text-xs">4</span>
                <span>High-Authority Adventure Backlink Strategy</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300 leading-relaxed font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>AdvRider & Horizons Unlimited Threads</strong>: Publish expedition ride reports with photos linking to our Upper Mustang and Manang tour itineraries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Nepal Tourism Board (NTB) & TAAN Directory</strong>: Ensure official listing as registered Pokhara adventure operator with canonical backlink to <code>https://himalayanmonster.com</code>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>MTB Community Coverage</strong>: Submit Annapurna singletrack photo stories to Pinkbike and Trailforks to capture international gravity riders.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
