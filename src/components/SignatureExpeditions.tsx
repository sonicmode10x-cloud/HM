import React, { useState } from 'react';
import { Compass, Calendar, Mountain, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { Expedition, TourCategory } from '../types';

interface SignatureExpeditionsProps {
  tours: Expedition[];
  onSelectTour: (slug: string) => void;
  onOpenBooking: (tourSlug: string) => void;
  title?: string;
  subtitle?: string;
  categoryTag?: string;
  hideFilter?: boolean;
}

export const SignatureExpeditions: React.FC<SignatureExpeditionsProps> = ({
  tours,
  onSelectTour,
  onOpenBooking,
  title,
  subtitle,
  categoryTag,
  hideFilter = false
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | TourCategory>('all');

  // Detect unique categories present in the given tours
  const uniqueCategories = Array.from(new Set(tours.map((t) => t.category))) as TourCategory[];
  const showFilter = !hideFilter && uniqueCategories.length > 1;

  const filteredTours = activeFilter === 'all' || !showFilter
    ? tours
    : tours.filter((t) => t.category === activeFilter);

  // Find the flagship tour or the first tour in the list
  const flagshipTour = filteredTours.find((t) => t.isFlagship) || filteredTours[0];
  const regularTours = flagshipTour ? filteredTours.filter((t) => t.id !== flagshipTour.id) : [];

  return (
    <section id="expeditions" className="py-24 bg-[#111114] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-semibold block mb-2">
              {categoryTag || 'SIGNATURE HIMALAYAN EXPEDITIONS'}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
              {title ? title : (
                <>
                  THE RIDES YOU'LL<br />NEVER FORGET.
                </>
              )}
            </h2>
            <p className="mt-4 text-neutral-400 font-sans text-base sm:text-lg max-w-2xl">
              {subtitle || 'From the roads of Annapurna to the remote landscapes of Mustang, these are the journeys that define Nepal.'}
            </p>
          </div>

          {/* Discipline Filters (only shown when multiple categories are present) */}
          {showFilter && (
            <div className="flex flex-wrap items-center gap-2 bg-[#1b1b22] p-1.5 rounded-sm border border-white/10 shrink-0">
              <button
                onClick={() => setActiveFilter('all')}
                className={`font-heading text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-sm transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#e06d2d] text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                ALL EXPEDITIONS
              </button>
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-heading text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-sm transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-[#e06d2d] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat === 'motorcycle' ? 'MOTORBIKES' : cat === 'mtb' ? 'MOUNTAIN BIKES' : cat.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* FLAGSHIP EXPEDITION FEATURE */}
        {flagshipTour && (
          <div className="mb-12">
            <div className="relative rounded-sm overflow-hidden border-2 border-[#e06d2d]/50 bg-[#16161c] shadow-2xl group">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
                {/* Left Visual Area */}
                <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
                  <img
                    src={flagshipTour.heroImage}
                    alt={flagshipTour.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#16161c]/40 to-[#16161c]" />

                  {/* Flagship Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#e06d2d] text-black px-3.5 py-1.5 rounded-sm font-heading font-black text-xs tracking-widest uppercase shadow-lg">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    <span>FEATURED EXPEDITION</span>
                  </div>

                  <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3">
                    <span className="bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-mono text-neutral-300 rounded-sm border border-white/10">
                      Max Alt: {flagshipTour.maxAltitude}
                    </span>
                    <span className="bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-mono text-neutral-300 rounded-sm border border-white/10">
                      {flagshipTour.durationLabel}
                    </span>
                  </div>
                </div>

                {/* Right Editorial Info Area */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#e06d2d] font-bold">
                        {flagshipTour.durationLabel} • {flagshipTour.difficulty.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {flagshipTour.groupSize}
                      </span>
                    </div>

                    <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white tracking-wide leading-tight mb-3">
                      {flagshipTour.title}
                    </h3>

                    <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                      {flagshipTour.shortDescription}
                    </p>

                    <div className="space-y-2 mb-6 border-y border-white/10 py-4">
                      {flagshipTour.routeHighlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                          <span className="text-[#e06d2d] font-bold shrink-0">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button
                      onClick={() => onSelectTour(flagshipTour.slug)}
                      className="flex-1 bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-sm tracking-wider py-3.5 px-6 rounded-sm uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>VIEW EXPEDITION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(flagshipTour.slug)}
                      className="bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm tracking-wider py-3.5 px-5 rounded-sm uppercase transition-colors border border-white/20 cursor-pointer"
                    >
                      BOOK DATES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REGULAR SIGNATURE EXPEDITION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regularTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-[#16161c] rounded-sm overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161c] via-transparent to-black/50" />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white px-2.5 py-1 rounded-sm font-heading font-black text-xs tracking-wider uppercase border border-white/15">
                  {tour.durationLabel}
                </div>

                <div className="absolute top-3 right-3 font-mono text-[11px] bg-white/10 backdrop-blur-md text-neutral-300 px-2 py-0.5 rounded-sm border border-white/10 uppercase">
                  {tour.category === 'motorcycle' ? 'MOTORBIKE' : tour.category === 'mtb' ? 'MTB' : 'E-MTB'}
                </div>

                <div className="absolute bottom-3 left-3 text-xs font-mono text-neutral-300">
                  {tour.maxAltitude}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#e06d2d] uppercase tracking-wider mb-1 font-semibold">
                    {tour.difficulty} Level
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide leading-tight group-hover:text-[#e06d2d] transition-colors mb-3">
                    {tour.title}
                  </h3>
                  <p className="font-sans text-neutral-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {tour.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="text-xs text-neutral-400 font-sans flex items-center justify-between">
                    <span>Machine:</span>
                    <span className="text-neutral-200 font-medium truncate max-w-[180px]">
                      {tour.bikeProvided.split('/')[0]}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectTour(tour.slug)}
                    className="w-full bg-white/5 hover:bg-[#e06d2d] text-white hover:text-black font-heading font-black text-xs tracking-wider py-3 px-4 rounded-sm uppercase transition-all duration-200 flex items-center justify-between border border-white/10 hover:border-transparent cursor-pointer"
                  >
                    <span>VIEW EXPEDITION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
