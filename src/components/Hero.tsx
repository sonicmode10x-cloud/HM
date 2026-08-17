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
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0c0c0e]">
      {/* Background Cinematic 4K Drone Video Stream with Depth Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* High-res Static Poster Base for instant first-paint */}
        <img
          src={fallbackImage}
          alt="Himalayan Motorcycle Expedition Nepal"
          className="w-full h-full object-cover object-center absolute inset-0 scale-105"
          style={{ filter: 'brightness(0.55) contrast(1.15)' }}
        />

        {/* 4K Drone Background Stream */}
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <iframe
            src={embedUrl}
            title="Nepal 4K Cinematic Drone Video"
            className="w-[150vw] h-[150vh] sm:w-[130vw] sm:h-[130vh] min-w-[100%] min-h-[100%] scale-110 sm:scale-125 object-cover pointer-events-none transition-opacity duration-1000"
            style={{
              border: 'none',
              filter: 'brightness(0.60) contrast(1.15) saturate(1.1)',
              opacity: 0.95,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Layered Vignette & Dark Lighting Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/35 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0c0e]/25 to-[#0c0c0e]/90 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/10 backdrop-blur-md border border-white/15 text-neutral-200 text-xs font-heading font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e06d2d] animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-[#e06d2d]" />
            <span>POKHARA • NEPAL</span>
            <span className="text-white/40">|</span>
            <span className="text-neutral-300">ANNAPURNA & MUSTANG EXPEDITIONS</span>
          </div>

          {/* Master Headline */}
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.9] mb-6 text-balance">
            HIMALAYAN<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#e06d2d]">
              MONSTER.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-10 text-pretty">
            Motorcycle tours, mountain biking and Himalayan expeditions built for travelers who want to experience Nepal beyond the usual route.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreExpeditions}
              className="bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-lg tracking-wider px-8 py-4 rounded-sm uppercase transition-all duration-200 shadow-xl hover:shadow-orange-500/25 flex items-center justify-center gap-3 cursor-pointer group active:scale-98"
            >
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              <span>EXPLORE EXPEDITIONS</span>
            </button>

            <button
              onClick={onRentBike}
              className="bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-lg tracking-wider px-8 py-4 rounded-sm uppercase border border-white/20 backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group hover:border-[#e06d2d]/60"
            >
              <Bike className="w-5 h-5 text-[#e06d2d]" />
              <span>RENT A BIKE</span>
            </button>

            <button
              onClick={onOpenPrivateExpedition}
              className="text-neutral-400 hover:text-white font-sans text-xs tracking-wider uppercase font-semibold py-2 px-3 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Custom & Private Groups</span>
              <span className="text-[#e06d2d]">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Key Value Proposition Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 py-4 border-t border-white/10 text-xs font-sans">
          <div className="flex items-center gap-3 text-neutral-300">
            <ShieldCheck className="w-5 h-5 text-[#e06d2d] shrink-0" />
            <div>
              <div className="font-heading font-bold text-sm tracking-wider uppercase text-white">Small Groups</div>
              <div className="text-neutral-400 text-[11px]">4–8 Riders max per tour</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-neutral-300">
            <Wrench className="w-5 h-5 text-[#e06d2d] shrink-0" />
            <div>
              <div className="font-heading font-bold text-sm tracking-wider uppercase text-white">4x4 Support</div>
              <div className="text-neutral-400 text-[11px]">Mechanic & luggage escort</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-neutral-300">
            <Bike className="w-5 h-5 text-[#e06d2d] shrink-0" />
            <div>
              <div className="font-heading font-bold text-sm tracking-wider uppercase text-white">Pro Fleet</div>
              <div className="text-neutral-400 text-[11px]">Himalayan 450s & Enduro MTBs</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 text-neutral-300">
            <div>
              <div className="font-heading font-bold text-sm tracking-wider uppercase text-white">Pokhara HQ</div>
              <div className="text-neutral-400 text-[11px]">Lakeside base & workshop</div>
            </div>

            {/* Subtle Scroll Down Prompt */}
            <a
              href="#choose-ride"
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-neutral-400 hover:text-white hover:border-[#e06d2d] transition-colors"
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
