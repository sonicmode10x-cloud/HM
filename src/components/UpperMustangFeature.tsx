import React from 'react';
import { Compass, Mountain, Calendar, Gauge, ShieldAlert, ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface UpperMustangFeatureProps {
  onExploreMustang: () => void;
  onOpenBooking: () => void;
}

export const UpperMustangFeature: React.FC<UpperMustangFeatureProps> = ({
  onExploreMustang,
  onOpenBooking
}) => {
  return (
    <section className="relative py-32 bg-[#0c0c0e] overflow-hidden border-y border-white/10">
      {/* Background High-Impact Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
          alt="Upper Mustang desert canyons and chortens Nepal"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-[#0c0c0e]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/20 border border-[#e06d2d]/40 rounded-sm mb-6 text-xs font-mono font-bold text-[#e06d2d] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE FORBIDDEN KINGDOM OF LO</span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92] mb-6">
            ENTER THE<br />
            <span className="text-[#e06d2d]">FORBIDDEN</span> KINGDOM
          </h2>

          {/* Copy */}
          <p className="font-sans text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed mb-10 text-pretty">
            Ride beyond the ordinary into the high desert of Mustang—ancient villages, dramatic cliffs, endless mountain roads and one of Nepal's most extraordinary landscapes.
          </p>

          {/* Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-black/60 backdrop-blur-md rounded-sm border border-white/15 mb-10">
            <div>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono uppercase mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#e06d2d]" />
                <span>Duration</span>
              </div>
              <div className="font-heading text-xl font-bold text-white uppercase">
                10–12 DAYS
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono uppercase mb-1">
                <Gauge className="w-3.5 h-3.5 text-[#e06d2d]" />
                <span>Difficulty</span>
              </div>
              <div className="font-heading text-xl font-bold text-white uppercase">
                CHALLENGING
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono uppercase mb-1">
                <Mountain className="w-3.5 h-3.5 text-[#e06d2d]" />
                <span>Max Altitude</span>
              </div>
              <div className="font-heading text-xl font-bold text-white uppercase">
                4,660 M (Tibet)
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-mono uppercase mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#e06d2d]" />
                <span>Best Season</span>
              </div>
              <div className="font-heading text-base font-bold text-white uppercase leading-snug">
                Mar–Jun & Sep–Nov
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-neutral-400 mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e06d2d]" />
            <span>Pricing: Inquire for group departure dates and bespoke private expedition rates</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreMustang}
              className="bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-lg tracking-wider px-8 py-4 rounded-sm uppercase transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-xl"
            >
              <span>EXPLORE UPPER MUSTANG</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenBooking}
              className="bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-lg tracking-wider px-8 py-4 rounded-sm uppercase border border-white/30 transition-colors cursor-pointer"
            >
              INQUIRE EXPEDITION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
