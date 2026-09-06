import React from 'react';
import { Mountain, ArrowRight, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { Expedition } from '../types';

interface MtbSectionProps {
  mtbTours: Expedition[];
  onSelectTour: (slug: string) => void;
  onExploreAllMtb: () => void;
}

export const MtbSection: React.FC<MtbSectionProps> = ({
  mtbTours,
  onSelectTour,
  onExploreAllMtb
}) => {
  return (
    <section id="mtb-section" className="py-24 bg-white text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold mb-2">
              <Mountain className="w-4 h-4" />
              <span>GRAVITY, ENDURO & HIGH-ALTITUDE SINGLETRACK</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 leading-none">
              FIND THE OTHER<br />
              <span className="text-[#e06d2d]">SIDE OF NEPAL.</span>
            </h2>
            <p className="mt-4 text-slate-600 font-sans text-base sm:text-lg">
              Beyond the trekking highways lies a world of ancient walking paths, high-desert scree shoots, and lush rhododendron ridge singletracks accessible only on two wheels.
            </p>
          </div>

          <button
            onClick={onExploreAllMtb}
            className="bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-sm tracking-wider py-3.5 px-6 rounded-sm uppercase transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>EXPLORE MTB EXPEDITIONS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Featured MTB Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mtbTours.slice(0, 3).map((tour) => (
            <div
              key={tour.id}
              onClick={() => onSelectTour(tour.slug)}
              className="bg-white rounded-sm overflow-hidden border border-slate-200 hover:border-[#e06d2d] transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:shadow-md"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-mono text-slate-900 border border-slate-200 uppercase font-bold shadow-xs">
                  {tour.durationLabel}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                  <span className="bg-black/60 px-2 py-0.5 rounded-sm backdrop-blur-xs">Max Alt: {tour.maxAltitude}</span>
                  <span className="text-amber-400 uppercase font-bold drop-shadow-xs">{tour.difficulty}</span>
                </div>
              </div>

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
                  <h3 className="font-heading text-2xl font-bold uppercase text-slate-900 group-hover:text-[#e06d2d] transition-colors mb-2 leading-tight">
                    {tour.title}
                  </h3>
                  {tour.routeSummary && (
                    <div className="text-[11px] font-mono text-[#e06d2d] font-semibold mb-2 truncate">
                      {tour.routeSummary}
                    </div>
                  )}
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {tour.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">Shuttle Support Included</span>
                  <span className="text-xs font-heading font-black text-[#e06d2d] uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    VIEW DETAILS <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core MTB Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-6 bg-slate-50 rounded-sm border border-slate-200 text-center">
          <div className="p-3">
            <div className="font-heading text-lg font-bold text-slate-900 uppercase">Mountain Trails</div>
            <div className="text-xs text-slate-600 font-sans mt-1">High alpine singletrack</div>
          </div>
          <div className="p-3">
            <div className="font-heading text-lg font-bold text-slate-900 uppercase">Ancient Villages</div>
            <div className="text-xs text-slate-600 font-sans mt-1">Gurung & Tibetan culture</div>
          </div>
          <div className="p-3">
            <div className="font-heading text-lg font-bold text-slate-900 uppercase">Himalayan Scenery</div>
            <div className="text-xs text-slate-600 font-sans mt-1">8,000m peak backdrops</div>
          </div>
          <div className="p-3">
            <div className="font-heading text-lg font-bold text-slate-900 uppercase">Off-Road Riding</div>
            <div className="text-xs text-slate-600 font-sans mt-1">Technical natural terrain</div>
          </div>
          <div className="p-3 col-span-2 sm:col-span-1">
            <div className="font-heading text-lg font-bold text-slate-900 uppercase">Local Experiences</div>
            <div className="text-xs text-slate-600 font-sans mt-1">Teahouses & mountain food</div>
          </div>
        </div>
      </div>
    </section>
  );
};
