import React, { useState } from 'react';
import { 
  Calendar, Mountain, Gauge, Users, Bike, Check, X, 
  MessageCircle, Compass, ArrowLeft, Star, ChevronDown, ChevronUp, 
  MapPin, ShieldCheck, Clock, Share2, Sparkles, Fuel
} from 'lucide-react';
import { Expedition } from '../types';
import { MountainWeatherWidget } from './MountainWeatherWidget';
import { HimalayanRouteMap } from './HimalayanRouteMap';
import { PackingListChecklist } from './PackingListChecklist';
import { ElevationProfileVisualizer } from './ElevationProfileVisualizer';

interface TourDetailViewProps {
  tour: Expedition;
  allTours: Expedition[];
  onBack: () => void;
  onSelectTour: (slug: string) => void;
  onOpenBooking: (tourSlug: string) => void;
}

export const TourDetailView: React.FC<TourDetailViewProps> = ({
  tour,
  allTours,
  onBack,
  onSelectTour,
  onOpenBooking
}) => {
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'gear' | 'faqs'>('itinerary');

  const relatedTours = allTours.filter((t) => 
    tour.relatedTourSlugs.includes(t.slug) || (t.category === tour.category && t.id !== tour.id)
  ).slice(0, 3);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Himalayan Monster! I am interested in booking the "${tour.title}" (${tour.durationLabel}). Can you share upcoming departure dates and availability?`
  );

  return (
    <div className="bg-[#0c0c0e] text-white min-h-screen pt-24 pb-24 font-sans">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO EXPEDITIONS</span>
        </button>
      </div>

      {/* 1. HERO SECTION & 2. TITLE */}
      <div className="relative h-[65vh] min-h-[480px] max-h-[640px] overflow-hidden mb-12 border-b border-white/10">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-black/60" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {tour.isFlagship && (
              <span className="bg-[#e06d2d] text-black text-xs font-heading font-black tracking-widest px-3 py-1 rounded-sm uppercase">
                FLAGSHIP EXPEDITION
              </span>
            )}
            <span className="bg-white/10 backdrop-blur-md text-white text-xs font-mono px-3 py-1 rounded-sm uppercase border border-white/20">
              {tour.category}
            </span>
            <span className="bg-black/60 backdrop-blur-md text-neutral-300 text-xs font-mono px-3 py-1 rounded-sm border border-white/10">
              {tour.durationLabel}
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] max-w-4xl mb-4">
            {tour.title}
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 font-sans max-w-2xl text-pretty leading-relaxed">
            {tour.tagline}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT 8-COLUMN EXPEDITION DOSSIER */}
          <div className="lg:col-span-8 space-y-12">
            {/* 4–8. KEY METRICS MATRIX */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#16161c] rounded-sm border border-white/10">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 uppercase mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#e06d2d]" />
                  <span>Duration</span>
                </div>
                <div className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                  {tour.durationLabel}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 uppercase mb-1">
                  <Gauge className="w-3.5 h-3.5 text-[#e06d2d]" />
                  <span>Difficulty</span>
                </div>
                <div className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                  {tour.difficulty}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 uppercase mb-1">
                  <Mountain className="w-3.5 h-3.5 text-[#e06d2d]" />
                  <span>Max Altitude</span>
                </div>
                <div className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                  {tour.maxAltitude}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 uppercase mb-1">
                  <Users className="w-3.5 h-3.5 text-[#e06d2d]" />
                  <span>Group Size</span>
                </div>
                <div className="font-heading text-base sm:text-lg font-bold uppercase text-white">
                  {tour.groupSize}
                </div>
              </div>
            </div>

            {/* 3. FULL DESCRIPTION & ROUTE HIGHLIGHTS */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-white">
                EXPEDITION OVERVIEW
              </h2>
              <p className="font-sans text-neutral-300 text-base sm:text-lg leading-relaxed">
                {tour.fullDescription}
              </p>

              <div className="bg-[#16161c] p-6 rounded-sm border border-white/10 space-y-3">
                <h3 className="font-heading text-xl font-bold uppercase text-[#e06d2d] tracking-wide">
                  ROUTE HIGHLIGHTS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {tour.routeHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-neutral-200">
                      <span className="text-[#e06d2d] font-bold shrink-0 mt-0.5">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 8. MACHINE PROVIDED */}
            <div className="bg-[#16161c] p-6 rounded-sm border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-[#e06d2d] shrink-0 border border-white/10">
                  <Bike className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs text-neutral-400 uppercase">Machine Allocation</div>
                  <div className="font-heading text-xl font-bold uppercase text-white">{tour.bikeProvided}</div>
                </div>
              </div>
              <div className="text-xs font-mono text-neutral-400 bg-black/40 px-3 py-1.5 rounded-sm border border-white/5">
                Full tank & spares included
              </div>
            </div>

            {/* 13. ROUTE MAP / OVERVIEW STAGES */}
            <div className="space-y-4">
              <div className="p-4 bg-black/50 rounded-sm border border-white/10 font-mono text-xs text-[#e06d2d] leading-relaxed">
                {tour.routeMapDescription}
              </div>

              {/* Interactive Route Map Cartography */}
              <div className="overflow-hidden rounded-sm border border-white/10">
                <HimalayanRouteMap
                  initialRouteId={
                    tour.slug.includes('annapurna') ? 'annapurna-circuit' :
                    tour.slug.includes('mtb') ? 'mustang-enduro-mtb' : 'upper-mustang'
                  }
                  onOpenBooking={() => onOpenBooking(tour.slug)}
                />
              </div>

              {/* Live Mountain Weather Telemetry for Route */}
              <div className="mt-4">
                <MountainWeatherWidget
                  compact={true}
                  initialLocationId={
                    tour.slug.includes('mustang') ? 'lo-manthang' :
                    tour.slug.includes('annapurna') ? 'thorong-la' :
                    tour.slug.includes('jomsom') ? 'jomsom' : 'pokhara'
                  }
                />
              </div>
            </div>

            {/* ELEVATION PROFILE & ACCLIMATIZATION VISUALIZER */}
            <ElevationProfileVisualizer
              tour={tour}
              selectedDay={openDay ?? 1}
              onSelectDay={(dayNum) => setOpenDay(dayNum)}
            />

            {/* 9. DETAILED DAY-BY-DAY ITINERARY */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-white">
                  DAY-BY-DAY ITINERARY ({tour.itinerary.length} DAYS)
                </h2>
                <div className="text-xs font-mono text-neutral-400">
                  Click day to expand
                </div>
              </div>

              <div className="space-y-4">
                {tour.itinerary.map((day) => {
                  const isOpen = openDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="bg-[#16161c] rounded-sm border border-white/10 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleDay(day.day)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-sm bg-[#e06d2d] text-black font-heading font-black text-lg flex items-center justify-center shrink-0">
                            D{day.day}
                          </div>
                          <div>
                            <h4 className="font-heading text-xl font-bold uppercase text-white tracking-wide">
                              {day.title}
                            </h4>
                            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 mt-1">
                              {day.distanceKm && <span>{day.distanceKm}</span>}
                              {day.ridingTime && <span>• {day.ridingTime}</span>}
                              {day.maxAltitude && <span>• Max {day.maxAltitude}</span>}
                            </div>
                          </div>
                        </div>

                        <div className="p-1 rounded-sm text-neutral-400">
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-white/5 space-y-4 font-sans text-sm">
                          <p className="text-neutral-300 leading-relaxed pt-3">
                            {day.description}
                          </p>

                          {day.highlights && day.highlights.length > 0 && (
                            <div className="bg-[#1c1c24] p-3.5 rounded-sm border border-white/5 space-y-1">
                              <div className="text-xs font-mono text-[#e06d2d] uppercase font-bold">Key Stages:</div>
                              {day.highlights.map((hl, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#e06d2d]" />
                                  <span>{hl}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2">
                            <span>Overnight Stay:</span>
                            <span className="text-white font-semibold">{day.overnight}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 10. WHAT'S INCLUDED & 11. WHAT'S EXCLUDED */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-[#16161c] p-6 rounded-sm border border-emerald-500/20 space-y-4">
                <h3 className="font-heading text-2xl font-bold uppercase text-emerald-400 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>WHAT'S INCLUDED</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-sans">
                  {tour.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-[#16161c] p-6 rounded-sm border border-rose-500/20 space-y-4">
                <h3 className="font-heading text-2xl font-bold uppercase text-rose-400 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  <span>WHAT'S EXCLUDED</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-sans">
                  {tour.exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 12. ACCOMMODATION & 15. PREPARATION REQUIREMENTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#16161c] p-6 rounded-sm border border-white/10 space-y-3">
                <h3 className="font-heading text-xl font-bold uppercase text-white">
                  ACCOMMODATION STANDARDS
                </h3>
                <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                  {tour.accommodation}
                </p>
                <div className="text-xs font-mono text-neutral-400 pt-2 border-t border-white/5">
                  Best Season: {tour.bestSeason}
                </div>
              </div>

              <div className="bg-[#16161c] p-6 rounded-sm border border-white/10 space-y-3">
                <h3 className="font-heading text-xl font-bold uppercase text-white">
                  PREPARATION & PREREQUISITES
                </h3>
                <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                  {tour.preparationRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#e06d2d]">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* HIGH-ALTITUDE PACKING LIST CHECKLIST COMPONENT */}
            <PackingListChecklist tour={tour} />

            {/* 16. FAQS ACCORDION */}
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-white">
                EXPEDITION FAQS
              </h2>
              <div className="space-y-3">
                {tour.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="bg-[#16161c] rounded-sm border border-white/10 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 cursor-pointer font-sans text-sm sm:text-base font-semibold text-white"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#e06d2d]" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-sm text-neutral-300 font-sans leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 17. VERIFIED REVIEWS */}
            {tour.reviews.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-white">
                  EXPEDITION REVIEWS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.reviews.map((rev) => (
                    <div key={rev.id} className="bg-[#16161c] p-5 rounded-sm border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="font-heading font-bold text-base uppercase text-white">
                          {rev.riderName} ({rev.country})
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#e06d2d] text-[#e06d2d]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                        "{rev.comment}"
                      </p>
                      <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between pt-2 border-t border-white/5">
                        <span>Bike: {rev.bike}</span>
                        <span>{rev.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT 4-COLUMN STICKY BOOKING CONVERSION BOX */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#16161c] p-6 sm:p-8 rounded-sm border-2 border-[#e06d2d]/60 shadow-2xl space-y-6">
              <div>
                <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-1">
                  SECURE YOUR SADDLE
                </span>
                <h3 className="font-heading text-3xl font-black uppercase text-white leading-tight">
                  {tour.title}
                </h3>
              </div>

              {/* 6. STARTING PRICE PLACEHOLDER */}
              <div className="p-4 bg-black/60 rounded-sm border border-white/10">
                <div className="text-xs font-mono text-neutral-400 uppercase">Estimated Expedition Rate</div>
                <div className="font-heading text-lg font-bold text-[#e06d2d] mt-0.5">
                  {tour.startingPricePlaceholder}
                </div>
                <div className="text-[11px] font-mono text-neutral-500 mt-1">
                  *All permits, bike, fuel, guide & lodge accommodations included
                </div>
              </div>

              {/* Quick Details Checklist */}
              <div className="space-y-2 text-xs font-sans text-neutral-300 border-y border-white/10 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Duration:</span>
                  <span className="font-semibold text-white">{tour.durationLabel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Terrain:</span>
                  <span className="font-semibold text-white truncate max-w-[170px]">{tour.terrain}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Max Altitude:</span>
                  <span className="font-semibold text-white">{tour.maxAltitude}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Group Cap:</span>
                  <span className="font-semibold text-white">{tour.groupSize}</span>
                </div>
              </div>

              {/* 20. BOOK NOW CTA */}
              <button
                onClick={() => onOpenBooking(tour.slug)}
                className="w-full bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-lg tracking-wider py-4 px-6 rounded-sm uppercase transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-xl"
              >
                <Compass className="w-5 h-5" />
                <span>BOOK THIS EXPEDITION</span>
              </button>

              {/* 19. WHATSAPP CTA */}
              <a
                href={`https://wa.me/9779800000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm tracking-wider py-3.5 px-6 rounded-sm uppercase transition-colors flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>INQUIRE VIA WHATSAPP</span>
              </a>

              {/* Quick Jump Buttons */}
              <a
                href="#elevation-acclimatization-profile"
                className="w-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-xs py-2.5 px-4 rounded-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center border border-white/10"
              >
                <Mountain className="w-3.5 h-3.5 text-[#e06d2d]" />
                <span>ELEVATION & OXYGEN PROFILE</span>
              </a>

              <a
                href="#packing-checklist-section"
                className="w-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white font-mono text-xs py-2.5 px-4 rounded-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center border border-white/10"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#e06d2d]" />
                <span>VIEW HIGH-ALTITUDE PACKING LIST</span>
              </a>

              <div className="text-center text-[11px] font-mono text-neutral-400">
                Direct connection with our Pokhara Operations Desk
              </div>
            </div>
          </div>
        </div>

        {/* 18. RELATED TOURS */}
        {relatedTours.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/10">
            <h2 className="font-heading text-3xl font-black uppercase text-white mb-8">
              SIMILAR EXPEDITIONS YOU MIGHT LIKE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTours.map((relTour) => (
                <div
                  key={relTour.id}
                  onClick={() => onSelectTour(relTour.slug)}
                  className="bg-[#16161c] rounded-sm overflow-hidden border border-white/10 hover:border-[#e06d2d]/60 transition-all cursor-pointer group"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={relTour.heroImage}
                      alt={relTour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[10px] font-mono rounded-sm text-white">
                      {relTour.durationLabel}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading text-xl font-bold uppercase text-white group-hover:text-[#e06d2d] transition-colors">
                      {relTour.title}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1">
                      {relTour.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
