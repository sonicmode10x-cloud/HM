import React from 'react';
import { ArrowRight, Flame, Mountain, Compass } from 'lucide-react';
import { TourCategory } from '../types';
import motorcycleHeroImg from '../assets/images/regenerated_image_1788368974089.jpg';
import mtbHeroImg from '../assets/images/regenerated_image_1788369081221.jpg';

interface ChooseYourRideProps {
  onSelectCategory: (category: TourCategory | 'expeditions') => void;
}

export const ChooseYourRide: React.FC<ChooseYourRideProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'motorcycle' as const,
      title: 'MOTORCYCLE',
      tagline: 'EXPEDITIONS & RENTALS',
      description: "Explore Nepal's legendary Himalayan roads by motorcycle.",
      image: motorcycleHeroImg,
      cta: 'EXPLORE MOTORCYCLE TOURS',
      icon: Flame,
      stat: '450cc Sherpa Engine Power',
      badge: 'POPULAR'
    },
    {
      id: 'mtb' as const,
      title: 'MTB',
      tagline: 'ENDURO & SINGLETRACK',
      description: 'Ride mountain trails, village roads and Himalayan singletrack.',
      image: mtbHeroImg,
      cta: 'EXPLORE MTB',
      icon: Mountain,
      stat: '160mm Enduro Travel',
      badge: 'GRAVITY'
    },
    {
      id: 'expeditions' as const,
      title: 'EXPEDITIONS',
      tagline: 'ALL GUIDED JOURNEYS',
      description: 'Multi-day guided overland journeys with full 4x4 support, mechanics, and mountain permits.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      cta: 'EXPLORE ALL EXPEDITIONS',
      icon: Compass,
      stat: 'Full 4x4 Support & Permits Included',
      badge: 'ALL TOURS'
    }
  ];

  return (
    <section id="choose-ride" className="py-24 bg-[#f8f9fa] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest mb-3 font-bold">
            CHOOSE YOUR ADVENTURE
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase text-slate-900 tracking-tight leading-tight">
            HOW DO YOU WANT TO<br />EXPERIENCE NEPAL?
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-base sm:text-lg">
            Select your discipline or explore our all-inclusive multi-day expeditions across Upper Mustang, Annapurna, and remote trans-Himalayan valleys.
          </p>
        </div>

        {/* 3 Massive Editorial Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative h-[480px] sm:h-[520px] rounded-sm overflow-hidden cursor-pointer border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-[#e06d2d] hover:shadow-lg flex flex-col justify-between p-7"
              >
                {/* Background Image with Zoom & High-contrast Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={`${cat.title} in the Himalayas Nepal`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.55] group-hover:brightness-[0.65]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/20" />
                </div>

                {/* Top Badge & Metric */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs px-3 py-1 rounded-sm bg-white/90 backdrop-blur-md border border-white/20 text-[#e06d2d] uppercase tracking-widest font-bold shadow-xs">
                    {cat.tagline}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 group-hover:bg-[#e06d2d] group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content & CTA */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="font-heading text-4xl sm:text-5xl font-black uppercase text-white tracking-wide group-hover:text-[#e06d2d] transition-colors leading-none">
                      {cat.title}
                    </h3>
                    <div className="font-mono text-xs text-neutral-300 mt-1 uppercase tracking-wider">
                      {cat.stat}
                    </div>
                  </div>

                  <p className="font-sans text-neutral-200 text-sm sm:text-base leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2">
                    <button
                      className="w-full bg-white/20 group-hover:bg-[#e06d2d] text-white font-heading font-black text-sm tracking-wider py-3.5 px-5 rounded-sm uppercase transition-all duration-300 flex items-center justify-between border border-white/30 group-hover:border-transparent backdrop-blur-xs"
                    >
                      <span>{cat.cta}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
