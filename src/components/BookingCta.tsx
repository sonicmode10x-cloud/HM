import React from 'react';
import { Compass, Sliders, ArrowRight, PhoneCall, MessageCircle } from 'lucide-react';

interface BookingCtaProps {
  onExploreExpeditions: () => void;
  onPlanPrivateRide: () => void;
}

export const BookingCta: React.FC<BookingCtaProps> = ({
  onExploreExpeditions,
  onPlanPrivateRide
}) => {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      {/* Cinematic Mountain Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
          alt="Himalayas mountain range sunset Nepal"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#e06d2d]/20 border border-[#e06d2d]/40 text-[#e06d2d] text-xs font-mono font-bold tracking-widest uppercase mb-6">
          HIMALAYAN MONSTER • POKHARA BASE
        </div>

        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
          READY TO RIDE<br />
          <span className="text-[#e06d2d]">NEPAL?</span>
        </h2>

        <p className="font-sans text-xl sm:text-2xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Your Himalayan adventure starts here.
        </p>

        {/* 2 Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8">
          <button
            onClick={onExploreExpeditions}
            className="w-full sm:w-auto flex-1 bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-base tracking-wider py-4 px-8 rounded-sm uppercase transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-lg"
          >
            <Compass className="w-5 h-5" />
            <span>EXPLORE EXPEDITIONS</span>
          </button>

          <button
            onClick={onPlanPrivateRide}
            className="w-full sm:w-auto flex-1 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-base tracking-wider py-4 px-8 rounded-sm uppercase border border-white/20 transition-colors flex items-center justify-center gap-3 cursor-pointer backdrop-blur-xs"
          >
            <Sliders className="w-5 h-5 text-[#e06d2d]" />
            <span>PLAN A PRIVATE RIDE</span>
          </button>
        </div>

        {/* Direct WhatsApp Prompt */}
        <div className="text-xs font-mono text-slate-400 flex flex-wrap items-center justify-center gap-2">
          <span>Need immediate advice? Chat with our Pokhara ride director on WhatsApp:</span>
          <a
            href="https://wa.me/9779812100453?text=Hello%20Himalayan%20Monster,%20I%20am%20planning%20a%20ride%20in%20Nepal."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline font-bold inline-flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>+977 981-2100453</span>
          </a>
        </div>
      </div>
    </section>
  );
};
