import React from 'react';
import { ArrowRight, Flame, Mountain, Zap } from 'lucide-react';
import { TourCategory } from '../types';

interface ChooseYourRideProps {
  onSelectCategory: (category: TourCategory) => void;
}

export const ChooseYourRide: React.FC<ChooseYourRideProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'motorcycle' as TourCategory,
      title: 'MOTORCYCLE',
      tagline: 'EXPEDITIONS & RENTALS',
      description: "Explore Nepal's legendary Himalayan roads by motorcycle.",
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
      cta: 'EXPLORE MOTORCYCLE TOURS',
      icon: Flame,
      stat: '450cc Sherpa Engine Power',
      badge: 'POPULAR'
    },
    {
      id: 'mtb' as TourCategory,
      title: 'MTB',
      tagline: 'ENDURO & SINGLETRACK',
      description: 'Ride mountain trails, village roads and Himalayan singletrack.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
      cta: 'EXPLORE MTB',
      icon: Mountain,
      stat: '160mm Enduro Travel',
      badge: 'GRAVITY'
    },
    {
      id: 'e-mtb' as TourCategory,
      title: 'E-MTB',
      tagline: 'TURBO ASSISTED FLOW',
      description: 'Go further with less effort and experience more of the Himalayas.',
      image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
      cta: 'EXPLORE E-MTB',
      icon: Zap,
      stat: '90Nm Bosch / Brose Torque',
      badge: 'ALL-ACCESS'
    }
  ];

  return (
    <section id="choose-ride" className="py-24 bg-[#0c0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest mb-3 font-semibold">
            CHOOSE YOUR ADVENTURE
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-tight">
            HOW DO YOU WANT TO<br />EXPERIENCE NEPAL?
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-base sm:text-lg">
            Select your discipline. From high-displacement adventure motorcycles to world-class enduro mountain bikes and high-torque E-MTBs.
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
                className="group relative h-[480px] sm:h-[520px] rounded-sm overflow-hidden cursor-pointer border border-white/10 bg-[#16161a] transition-all duration-500 hover:border-[#e06d2d]/60 hover:shadow-2xl hover:shadow-orange-950/30 flex flex-col justify-between p-7"
              >
                {/* Background Image with Zoom & Dark Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={`${cat.title} in the Himalayas Nepal`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.45] group-hover:brightness-[0.55]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/60 to-transparent" />
                </div>

                {/* Top Badge & Metric */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-sm bg-black/60 backdrop-blur-md border border-white/10 text-[#e06d2d] uppercase tracking-widest font-semibold">
                    {cat.tagline}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#e06d2d] group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content & CTA */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="font-heading text-4xl sm:text-5xl font-black uppercase text-white tracking-wide group-hover:text-[#e06d2d] transition-colors leading-none">
                      {cat.title}
                    </h3>
                    <div className="font-mono text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                      {cat.stat}
                    </div>
                  </div>

                  <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2">
                    <button
                      className="w-full bg-white/10 group-hover:bg-[#e06d2d] text-white group-hover:text-black font-heading font-black text-sm tracking-wider py-3.5 px-5 rounded-sm uppercase transition-all duration-300 flex items-center justify-between border border-white/20 group-hover:border-transparent"
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
