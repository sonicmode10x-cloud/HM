import React, { useState } from 'react';
import { Bike, Flame, Mountain, Zap, Check, ArrowRight, Info } from 'lucide-react';
import { FleetBike } from '../types';

interface FleetSectionProps {
  fleet: FleetBike[];
  onRentBike: (bike: FleetBike) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ fleet, onRentBike }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'motorcycle' | 'mtb' | 'e-mtb'>('all');
  const [activeSpecBike, setActiveSpecBike] = useState<FleetBike | null>(null);

  const categories = [
    { id: 'all', label: 'ALL MACHINES', icon: Bike },
    { id: 'motorcycle', label: 'MOTORBIKES', icon: Flame },
    { id: 'mtb', label: 'MOUNTAIN BIKES', icon: Mountain }
  ];

  const filteredFleet = selectedCategory === 'all'
    ? fleet
    : fleet.filter((b) => selectedCategory === 'mtb' ? (b.category === 'mtb' || b.category === 'e-mtb') : b.category === selectedCategory);

  return (
    <section id="fleet" className="py-24 bg-[#111114] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-semibold block mb-2">
              THE HIMALAYAN MONSTER FLEET • 3 PURPOSE-BUILT DIRT & ENDURO MACHINES
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
              CHOOSE YOUR<br />DIRT MACHINE.
            </h2>
            <p className="mt-4 text-neutral-400 font-sans text-base sm:text-lg max-w-2xl">
              Three precision-prepared dirt & enduro platforms engineered for technical Himalayan terrain: lightweight dual-sport rock crawling, high-revving rally enduro, and long-range adventure expedition.
            </p>
          </div>

          {/* Category Tabs */}
          {fleet.length > 3 && (
            <div className="flex items-center gap-2 bg-[#1b1b22] p-1.5 rounded-sm border border-white/10 shrink-0">
              {categories.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as any)}
                    className={`font-heading text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-sm flex items-center gap-1.5 transition-all cursor-pointer ${
                      selectedCategory === tab.id
                        ? 'bg-[#e06d2d] text-black shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Fleet Grid - Exactly 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredFleet.map((bike) => (
            <div
              key={bike.id}
              className="bg-[#16161c] rounded-sm overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl"
            >
              {/* Bike Image & Badge */}
              <div className="relative h-64 overflow-hidden bg-black/40">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161c] via-transparent to-black/40" />

                {bike.badge && (
                  <div className="absolute top-3 left-3 bg-[#e06d2d] text-black px-2.5 py-1 rounded-sm font-heading font-black text-[11px] tracking-wider uppercase shadow-md">
                    {bike.badge}
                  </div>
                )}

                <div className="absolute top-3 right-3 font-mono text-[10px] bg-black/70 backdrop-blur-md text-neutral-300 px-2 py-0.5 rounded-sm uppercase border border-white/10">
                  {bike.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="truncate max-w-[200px]">{bike.specs.engineOrMotor}</span>
                </div>
              </div>

              {/* Bike Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide mb-2 group-hover:text-[#e06d2d] transition-colors leading-snug">
                    {bike.name}
                  </h3>
                  <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {bike.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {bike.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 font-sans">
                        <Check className="w-3.5 h-3.5 text-[#e06d2d] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rental Pricing Box & CTAs */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="bg-[#1c1c24] p-3 rounded-sm border border-white/5">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase">Rental Rate</div>
                    <div className="font-heading text-sm font-bold text-[#e06d2d]">
                      {bike.rentalPriceDayPlaceholder}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRentBike(bike)}
                      className="flex-1 bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-xs tracking-wider py-3 px-4 rounded-sm uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>RENT THIS MACHINE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setActiveSpecBike(bike)}
                      className="p-3 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white rounded-sm border border-white/10 transition-colors"
                      title="View full mechanical specifications"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications Details Modal */}
      {activeSpecBike && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#16161c] border border-white/20 rounded-sm max-w-lg w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold">
                  TECHNICAL SPECIFICATION
                </span>
                <h3 className="font-heading text-3xl font-black uppercase text-white mt-1">
                  {activeSpecBike.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveSpecBike(null)}
                className="text-neutral-400 hover:text-white text-2xl font-mono leading-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-sans text-sm">
              <div className="grid grid-cols-2 py-2 border-b border-white/5">
                <span className="text-neutral-400">Engine / Drive:</span>
                <span className="text-white font-medium">{activeSpecBike.specs.engineOrMotor}</span>
              </div>
              {activeSpecBike.specs.powerOrTorque && (
                <div className="grid grid-cols-2 py-2 border-b border-white/5">
                  <span className="text-neutral-400">Power / Torque:</span>
                  <span className="text-white font-medium">{activeSpecBike.specs.powerOrTorque}</span>
                </div>
              )}
              {activeSpecBike.specs.batteryCapacity && (
                <div className="grid grid-cols-2 py-2 border-b border-white/5">
                  <span className="text-neutral-400">Battery Capacity:</span>
                  <span className="text-white font-medium">{activeSpecBike.specs.batteryCapacity}</span>
                </div>
              )}
              <div className="grid grid-cols-2 py-2 border-b border-white/5">
                <span className="text-neutral-400">Suspension:</span>
                <span className="text-white font-medium">{activeSpecBike.specs.suspension}</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-white/5">
                <span className="text-neutral-400">Weight:</span>
                <span className="text-white font-medium">{activeSpecBike.specs.weight}</span>
              </div>
              {activeSpecBike.specs.brakes && (
                <div className="grid grid-cols-2 py-2 border-b border-white/5">
                  <span className="text-neutral-400">Brakes:</span>
                  <span className="text-white font-medium">{activeSpecBike.specs.brakes}</span>
                </div>
              )}
              {activeSpecBike.specs.tires && (
                <div className="grid grid-cols-2 py-2 border-b border-white/5">
                  <span className="text-neutral-400">Tires / Wheels:</span>
                  <span className="text-white font-medium">{activeSpecBike.specs.tires}</span>
                </div>
              )}
            </div>

            <div className="bg-[#1f1f28] p-4 rounded-sm border border-white/10 space-y-2">
              <div className="font-heading font-bold text-sm text-white uppercase">Terrain Rating</div>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">{activeSpecBike.terrainSuitability}</p>
            </div>

            <button
              onClick={() => {
                const b = activeSpecBike;
                setActiveSpecBike(null);
                onRentBike(b);
              }}
              className="w-full bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-sm tracking-wider py-3.5 rounded-sm uppercase transition-colors"
            >
              BOOK RENTAL FOR THIS BIKE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
