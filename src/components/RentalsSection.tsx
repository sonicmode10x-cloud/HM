import React from 'react';
import { Flame, Mountain, Zap, ArrowRight, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
import { TourCategory } from '../types';

interface RentalsSectionProps {
  onOpenRentalsView: (category?: TourCategory) => void;
  onOpenRentalModal: (category?: TourCategory) => void;
}

export const RentalsSection: React.FC<RentalsSectionProps> = ({
  onOpenRentalsView,
  onOpenRentalModal
}) => {
  const rentalCards = [
    {
      category: 'motorcycle' as TourCategory,
      title: 'MOTORBIKES',
      tagline: 'High-Altitude Dual Sport & Adventure',
      price: 'Starting from $35–$65 / day',
      models: 'Royal Enfield Himalayan 450 • Honda CRF300L • KTM 390 Adventure R',
      description: 'Explore Nepal independently with fully equipped dual-sport and adventure motorbikes fitted with luggage racks, crash protection, and fresh knobby tires.',
      included: ['Toolkit, spare tube pack & pump', 'Pre-loaded GPX routes for Mustang & Annapurna', 'Mechanical support network on call'],
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop'
    },
    {
      category: 'mtb' as TourCategory,
      title: 'MOUNTAIN BIKES',
      tagline: 'Pro Enduro & Trail Full-Suspension',
      price: 'Starting from $35–$50 / day',
      models: 'Trek Slash 8 • Specialized Stumpjumper • Giant Reign • Santa Cruz Enduro',
      description: 'High-performance mountain bikes set up by pro mechanics. Modern slack geometry, 160mm travel, 4-piston hydraulic disc brakes, and tubeless tires.',
      included: ['Custom suspension sag setup to rider weight', 'Pro helmet & pedal choice (Flats/SPD)', 'Emergency trail pump, levers & multi-tool'],
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <section id="rentals" className="py-24 bg-[#0c0c0e] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-semibold block mb-2">
            INDEPENDENT HIMALAYAN EXPLORATION
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
            YOUR BIKE. YOUR ROUTE.<br />
            <span className="text-[#e06d2d]">YOUR NEPAL.</span>
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-base sm:text-lg leading-relaxed">
            Travelers can rent motorbikes and mountain bikes for independent self-guided exploration or combine rentals with our guided logistics and high-altitude support packages.
          </p>
        </div>

        {/* 2 Rental Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {rentalCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-[#16161c] rounded-sm overflow-hidden border border-white/10 hover:border-[#e06d2d]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-52 overflow-hidden bg-black/50">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16161c] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-mono text-[#e06d2d] border border-white/10 uppercase font-semibold">
                      {card.tagline}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide group-hover:text-[#e06d2d] transition-colors">
                        {card.title}
                      </h3>
                      <Icon className="w-5 h-5 text-[#e06d2d]" />
                    </div>

                    <div className="text-xs font-mono text-neutral-400 mb-4 pb-2 border-b border-white/10">
                      {card.models}
                    </div>

                    <p className="font-sans text-neutral-300 text-sm leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Included Services */}
                    <div className="space-y-2 mb-6 bg-[#1f1f26] p-4 rounded-sm border border-white/5">
                      <div className="text-[11px] font-mono text-neutral-400 uppercase font-semibold">Includes:</div>
                      {card.included.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-[#e06d2d] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 bg-black/40 p-3 rounded-sm">
                    <span>Rates:</span>
                    <span className="text-white font-bold">{card.price}</span>
                  </div>

                  <button
                    onClick={() => onOpenRentalModal(card.category)}
                    className="w-full bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-xs tracking-wider py-3.5 px-4 rounded-sm uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>BOOK {card.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Rental Guarantee Bar */}
        <div className="p-6 bg-[#16161c] rounded-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#e06d2d] shrink-0" />
            <span>
              <strong>Pokhara Workshop Guarantee:</strong> Every rental bike undergoes a 25-point safety check with certified mechanics before handover.
            </span>
          </div>

          <button
            onClick={() => onOpenRentalsView()}
            className="text-[#e06d2d] hover:underline font-mono uppercase font-bold text-xs shrink-0 flex items-center gap-1"
          >
            <span>VIEW RENTALS FULL DIRECTORY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
