import React from 'react';
import { Compass, Bike, Phone, Home, ArrowRight } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (view: string, slug?: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0c0c0e] text-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
          TRAILHEAD NOT FOUND (ERROR 404)
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-black uppercase text-white tracking-tight leading-none">
          OFF THE RADAR
        </h1>

        <p className="max-w-xl mx-auto text-neutral-300 font-sans text-base sm:text-lg leading-relaxed">
          The high-pass coordinate or page you are looking for has been moved, renamed, or lies outside our mapped trails. Let&apos;s get you back on the right route.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 text-left">
          <button
            onClick={() => onNavigate('home')}
            className="p-4 bg-[#16161c] hover:bg-[#1f1f26] border border-white/10 hover:border-[#e06d2d]/60 rounded-sm transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <Home className="w-5 h-5 text-[#e06d2d]" />
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-heading font-bold uppercase text-white text-sm">Homepage</div>
            <div className="text-xs text-neutral-400 mt-0.5">Base Camp Overview</div>
          </button>

          <button
            onClick={() => onNavigate('motorcycles')}
            className="p-4 bg-[#16161c] hover:bg-[#1f1f26] border border-white/10 hover:border-[#e06d2d]/60 rounded-sm transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <Compass className="w-5 h-5 text-[#e06d2d]" />
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-heading font-bold uppercase text-white text-sm">Moto Tours</div>
            <div className="text-xs text-neutral-400 mt-0.5">Upper Mustang & Manang</div>
          </button>

          <button
            onClick={() => onNavigate('mtb')}
            className="p-4 bg-[#16161c] hover:bg-[#1f1f26] border border-white/10 hover:border-[#e06d2d]/60 rounded-sm transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <Bike className="w-5 h-5 text-[#e06d2d]" />
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-heading font-bold uppercase text-white text-sm">MTB & E-MTB</div>
            <div className="text-xs text-neutral-400 mt-0.5">Enduro & Ridge Trails</div>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="p-4 bg-[#16161c] hover:bg-[#1f1f26] border border-white/10 hover:border-[#e06d2d]/60 rounded-sm transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <Phone className="w-5 h-5 text-[#e06d2d]" />
              <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-heading font-bold uppercase text-white text-sm">Contact Base</div>
            <div className="text-xs text-neutral-400 mt-0.5">Pokhara Support Desk</div>
          </button>
        </div>
      </div>
    </div>
  );
};
