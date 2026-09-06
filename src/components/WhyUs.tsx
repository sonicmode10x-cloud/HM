import React from 'react';
import { Compass, Users, Wrench, Mountain, Sliders, ShieldCheck } from 'lucide-react';
import { HimalayanMonsterLogo } from './HimalayanMonsterLogo';

interface WhyUsProps {
  onOpenPrivateRequest: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenPrivateRequest }) => {
  const pillars = [
    {
      number: '01',
      title: 'LOCAL KNOWLEDGE',
      subtitle: 'Routes designed by people who know Nepal.',
      description: 'We ride these mountain trails year-round. Our routes avoid congested tourist highways in favor of secluded ridge lines, ancient river valleys, and authentic Himalayan settlements.',
      icon: Compass
    },
    {
      number: '02',
      title: 'SMALL GROUPS',
      subtitle: 'More riding. Less waiting.',
      description: 'We cap our scheduled expeditions at 4 to 8 riders. Smaller groups mean agile pacing, seamless trail flow, personalized mechanical attention, and genuine connection with the land.',
      icon: Users
    },
    {
      number: '03',
      title: 'PROFESSIONAL SUPPORT',
      subtitle: 'Experienced guides, mechanics and support for multi-day expeditions.',
      description: 'Multi-day Himalayan journeys are backed by experienced lead guides, dedicated mechanics, and 4x4 support vehicles carrying your luggage, tools, and spare components.',
      icon: Wrench
    },
    {
      number: '04',
      title: 'REAL ADVENTURE',
      subtitle: 'We take you beyond the standard tourist route.',
      description: 'No cookie-cutter itineraries. We take you into the raw heart of the Himalayas—high desert riverbeds, mountain passes, and sacred Tibetan monasteries.',
      icon: Mountain
    },
    {
      number: '05',
      title: 'BUILT AROUND YOU',
      subtitle: 'Private and custom expeditions available.',
      description: 'Have a specific route in mind or traveling with your own riding crew? We tailor dates, bike choices, pacing, and support to match your exact vision.',
      icon: Sliders
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Official Brand Crest */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-2">
              WHY HIMALAYAN MONSTER
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 leading-none">
              NOT A TOUR.<br />
              <span className="text-[#e06d2d]">AN EXPERIENCE.</span>
            </h2>
            <p className="mt-4 text-slate-600 font-sans text-base sm:text-lg">
              We don’t run passive sightseeing bus trips. We build raw, immersive, high-standard two-wheel expeditions for riders who want to experience Nepal authentically.
            </p>
          </div>
          <div className="hidden md:block shrink-0">
            <HimalayanMonsterLogo variant="badge" height={90} />
          </div>
        </div>

        {/* 5 Distinct Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isFullWidthMobile = idx === 4 ? 'md:col-span-2 lg:col-span-1' : '';
            return (
              <div
                key={item.title}
                className={`bg-white p-8 rounded-sm border border-slate-200 hover:border-[#e06d2d] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md ${isFullWidthMobile}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#e06d2d] px-2.5 py-1 bg-[#e06d2d]/10 rounded-sm border border-[#e06d2d]/20">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                      <Icon className="w-5 h-5 text-[#e06d2d]" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl font-black uppercase tracking-wide text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <div className="font-sans text-sm font-bold text-slate-800 mb-3 leading-snug">
                    {item.subtitle}
                  </div>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Interactive Custom Request Card */}
          <div className="bg-slate-900 p-8 rounded-sm border border-slate-800 flex flex-col justify-between text-white shadow-md">
            <div>
              <div className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold mb-2">
                PLAN A PRIVATE RIDE
              </div>
              <h3 className="font-heading text-2xl font-black uppercase tracking-wide text-white mb-3">
                CUSTOM EXPEDITIONS
              </h3>
              <p className="font-sans text-sm text-neutral-300 leading-relaxed mb-6">
                Tell us your available dates, preferred motorcycles or MTBs, and target destinations. Our Pokhara route director will craft a tailored expedition itinerary for your group.
              </p>
            </div>

            <button
              onClick={onOpenPrivateRequest}
              className="w-full bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-xs tracking-wider py-3.5 px-4 rounded-sm uppercase transition-colors text-center cursor-pointer shadow-xs"
            >
              REQUEST CUSTOM ITINERARY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
