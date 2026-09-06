import React, { useState } from 'react';
import { ArrowRight, LayoutGrid, List, Calendar, Mountain, Gauge, Bike, Check } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  // Detect unique categories present in the given tours
  const uniqueCategories = Array.from(new Set(tours.map((t) => t.category))) as TourCategory[];
  const showFilter = !hideFilter && uniqueCategories.length > 1;

  const filteredTours = activeFilter === 'all' || !showFilter
    ? tours
    : tours.filter((t) => t.category === activeFilter);

  return (
    <section id="expeditions" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-2">
              {categoryTag || 'SIGNATURE HIMALAYAN EXPEDITIONS'}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 leading-none">
              {title ? title : (
                <>
                  THE RIDES YOU'LL<br />NEVER FORGET.
                </>
              )}
            </h2>
            <p className="mt-4 text-slate-600 font-sans text-base sm:text-lg max-w-2xl">
              {subtitle || 'From the roads of Annapurna to the remote landscapes of Mustang, these are the journeys that define Nepal.'}
            </p>
          </div>

          {/* Controls: Discipline Filters & View Toggle */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Discipline Filters */}
            {showFilter && (
              <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-sm border border-slate-200">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`font-heading text-xs font-bold tracking-wider uppercase px-3.5 py-2 rounded-sm transition-all cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-[#e06d2d] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ALL
                </button>
                {uniqueCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`font-heading text-xs font-bold tracking-wider uppercase px-3.5 py-2 rounded-sm transition-all cursor-pointer ${
                      activeFilter === cat
                        ? 'bg-[#e06d2d] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat === 'motorcycle' ? 'MOTORBIKES' : cat === 'mtb' ? 'MTB' : cat.toUpperCase()}
                  </button>
                ))}
              </div>
            )}

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-sm border border-slate-200">
              <button
                onClick={() => setViewMode('list')}
                title="List View"
                className={`p-2 rounded-sm transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold uppercase ${
                  viewMode === 'list'
                    ? 'bg-white text-[#e06d2d] shadow-xs border border-slate-200/80'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">LIST</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                title="Grid View"
                className={`p-2 rounded-sm transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold uppercase ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#e06d2d] shadow-xs border border-slate-200/80'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">GRID</span>
              </button>
            </div>
          </div>
        </div>

        {/* EXPEDITION LIST VIEW */}
        {viewMode === 'list' ? (
          <div className="space-y-6">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-sm overflow-hidden border border-slate-200 hover:border-[#e06d2d] transition-all duration-300 flex flex-col lg:flex-row group hover:shadow-lg"
              >
                {/* Visual Media Column */}
                <div className="lg:w-80 xl:w-96 relative h-64 lg:h-auto shrink-0 overflow-hidden bg-slate-100">
                  <img
                    src={tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="bg-white/95 backdrop-blur-md text-slate-900 px-2.5 py-1 rounded-sm font-heading font-black text-xs tracking-wider uppercase border border-slate-200 shadow-xs">
                      {tour.durationLabel}
                    </span>
                    <span className="bg-white/95 backdrop-blur-md text-[#e06d2d] px-2.5 py-1 rounded-sm font-mono text-xs uppercase font-bold border border-slate-200 shadow-xs">
                      {tour.category === 'motorcycle' ? 'MOTORBIKE' : tour.category === 'mtb' ? 'MTB' : 'E-MTB'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-mono text-white drop-shadow-sm font-medium">
                    <Mountain className="w-3.5 h-3.5 text-[#e06d2d]" />
                    <span>Max {tour.maxAltitude}</span>
                  </div>
                </div>

                {/* Content & Details Column */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#e06d2d] uppercase">
                        {tour.packageNumber && <span>EXPEDITION #{tour.packageNumber}</span>}
                        {tour.packageNumber && <span>•</span>}
                        <span className="text-slate-600">{tour.difficulty.toUpperCase()}</span>
                      </div>
                      <div className="font-heading text-2xl font-black text-slate-900">
                        {tour.price}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectTour(tour.slug)}
                      className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-wide leading-tight group-hover:text-[#e06d2d] transition-colors mb-2 cursor-pointer"
                    >
                      {tour.title}
                    </h3>

                    {/* Route Corridor */}
                    {tour.routeSummary && (
                      <div className="text-xs font-mono text-[#e06d2d] font-semibold mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e06d2d]" />
                        <span>{tour.routeSummary}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                      {tour.shortDescription}
                    </p>

                    {/* Route Highlights Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 bg-slate-50 p-4 rounded-sm border border-slate-200">
                      {tour.routeHighlights.slice(0, 4).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#e06d2d] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Row: Specs & CTA Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Bike className="w-4 h-4 text-[#e06d2d]" />
                        <span className="text-slate-900 font-semibold">{tour.bikeProvided}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#e06d2d]" />
                        <span>Best: {tour.bestSeason.split('&')[0]}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onSelectTour(tour.slug)}
                        className="flex-1 sm:flex-none bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-xs tracking-wider py-3 px-6 rounded-sm uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <span>VIEW ITINERARY</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onOpenBooking(tour.slug)}
                        className="flex-1 sm:flex-none bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs tracking-wider py-3 px-5 rounded-sm uppercase transition-colors border border-slate-200 cursor-pointer"
                      >
                        BOOK DATES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* GRID VIEW FALLBACK */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-sm overflow-hidden border border-slate-200 hover:border-[#e06d2d] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={tour.heroImage}
                    alt={tour.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                  {/* Duration Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-slate-900 px-2.5 py-1 rounded-sm font-heading font-black text-xs tracking-wider uppercase border border-slate-200 shadow-xs">
                    {tour.durationLabel}
                  </div>

                  <div className="absolute top-3 right-3 font-mono text-[11px] bg-white/95 backdrop-blur-md text-slate-800 px-2 py-0.5 rounded-sm border border-slate-200 uppercase font-semibold">
                    {tour.category === 'motorcycle' ? 'MOTORBIKE' : tour.category === 'mtb' ? 'MTB' : 'E-MTB'}
                  </div>

                  <div className="absolute bottom-3 left-3 text-xs font-mono text-white font-medium drop-shadow-xs">
                    {tour.maxAltitude}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-[#e06d2d] uppercase tracking-wider font-bold">
                        {tour.packageNumber ? `EXP ${tour.packageNumber} • ` : ''}{tour.difficulty}
                      </span>
                      <span className="text-slate-900 font-bold font-mono">
                        {tour.price}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-slate-900 tracking-wide leading-tight group-hover:text-[#e06d2d] transition-colors mb-2">
                      {tour.title}
                    </h3>
                    {tour.routeSummary && (
                      <div className="text-[11px] font-mono text-[#e06d2d] font-semibold mb-2 truncate">
                        {tour.routeSummary}
                      </div>
                    )}
                    <p className="font-sans text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {tour.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="text-xs text-slate-500 font-sans flex items-center justify-between">
                      <span>Machine:</span>
                      <span className="text-slate-800 font-medium truncate max-w-[180px]">
                        {tour.bikeProvided.split('/')[0]}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectTour(tour.slug)}
                      className="w-full bg-slate-50 hover:bg-[#e06d2d] text-slate-800 hover:text-white font-heading font-black text-xs tracking-wider py-3 px-4 rounded-sm uppercase transition-all duration-200 flex items-center justify-between border border-slate-200 hover:border-transparent cursor-pointer"
                    >
                      <span>VIEW EXPEDITION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

