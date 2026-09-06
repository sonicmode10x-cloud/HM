import React from 'react';
import { Compass, Bike, ChevronDown, ShieldCheck, MapPin, Wrench } from 'lucide-react';

interface HeroProps {
  onExploreExpeditions: () => void;
  onRentBike: () => void;
  onOpenPrivateExpedition: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreExpeditions,
  onRentBike,
  onOpenPrivateExpedition
}) => {
  const youtubeVideoId = 'etEAplcl6A4';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&iv_load_policy=3&disablekb=1`;
  const fallbackImage = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop';

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-slate-900">
      {/* Background Cinematic 4K Drone Video Stream with Depth Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* High-res Static Poster Base */}
        <img
          src={fallbackImage}
          alt="Himalayan Motorcycle Expedition Nepal"
          className="w-full h-full object-cover object-center absolute inset-0 scale-105 opacity-60"
          style={{ filter: 'brightness(0.95) contrast(1.1)' }}
        />

        {/* 4K Drone Background Stream */}
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <iframe
            src={embedUrl}
            title="Nepal 4K Cinematic Drone Video"
            className="w-[150vw] h-[150vh] sm:w-[130vw] sm:h-[130vh] min-w-[100%] min-h-[100%] scale-110 sm:scale-125 object-cover pointer-events-none transition-opacity duration-1000"
            style={{
              border: 'none',
              filter: 'brightness(1.02) contrast(1.1) saturate(1.15)',
              opacity: 0.98,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Crisp Readability Overlays (Subtle Vignette + Left Reading Shade) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Brand Logo Presentation & Location Badge */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-heading font-bold tracking-[0.2em] uppercase shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#e06d2d] animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-[#e06d2d]" />
              <span>POKHARA • NEPAL</span>
              <span className="text-white/30">|</span>
              <span className="text-slate-200">ANNAPURNA & MUSTANG EXPEDITIONS</span>
            </div>
          </div>

          {/* Master Headline */}
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.9] mb-6 text-balance drop-shadow-lg">
            HIMALAYAN<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#e06d2d]">
              MONSTER.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-slate-100 font-medium leading-relaxed max-w-2xl mb-10 text-pretty drop-shadow-md">
            Motorcycle tours, mountain biking and Himalayan expeditions built for travelers who want to experience Nepal beyond the usual route.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreExpeditions}
              className="bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-lg tracking-wider px-8 py-4 rounded-sm uppercase transition-all duration-200 shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-3 cursor-pointer group active:scale-98"
            >
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              <span>EXPLORE EXPEDITIONS</span>
            </button>

            <button
              onClick={onRentBike}
              className="bg-black/50 hover:bg-black/70 text-white font-heading font-bold text-lg tracking-wider px-8 py-4 rounded-sm uppercase border border-white/30 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group hover:border-[#e06d2d] shadow-lg"
            >
              <Bike className="w-5 h-5 text-[#e06d2d]" />
              <span>RENT A BIKE</span>
            </button>

            <button
              onClick={onOpenPrivateExpedition}
              className="text-slate-200 hover:text-white font-sans text-xs tracking-wider uppercase font-semibold py-2 px-3 flex items-center justify-center gap-1.5 transition-colors drop-shadow-sm"
            >
              <span>Custom & Private Groups</span>
              <span className="text-[#e06d2d] font-bold">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Key Value Proposition Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 py-4 border-t border-white/20 text-xs font-sans">
          <div className="flex items-center gap-3 text-slate-200">
            <ShieldCheck className="w-5 h-5 text-[#e06d2d] shrink-0" />
            <div>
              <div className="font-heading font-bold text-sm tracking-wider uppercase text-white">Small Groups</div>
              <div className="text-slate-300 text-[11px]">4–8 Riders max per tour</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-200">
            <Wrench className="w-5 h-5 text-[#e06d2d] shrink-0" />
            <div>
              <div className="font-heading font-bold text-sm tracking-wider uppercase text-white">4x4 Support</div>
              <div className="text-slate-300 text-[11px]">Mechanic & luggage escort</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-200">
            <Bike className="w-5 h-5 text-[#e06d2d] shrink-0" />
            <div>
              <div className="font-heading font-bold text-sm tracking-wider uppercase text-white">Pro Fleet</div>
              <div className="text-slate-300 text-[11px]">Himalayan 450s & Enduro MTBs</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 text-slate-700">
            <div>
              <div className="font-heading font-bold text-sm tracking-wider uppercase text-slate-900">Pokhara HQ</div>
              <div className="text-slate-500 text-[11px]">Lakeside base & workshop</div>
            </div>

            {/* Subtle Scroll Down Prompt */}
            <a
              href="#choose-ride"
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 bg-white text-slate-500 hover:text-slate-900 hover:border-[#e06d2d] transition-colors shadow-xs"
              aria-label="Scroll to Choose Your Ride"
            >
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
