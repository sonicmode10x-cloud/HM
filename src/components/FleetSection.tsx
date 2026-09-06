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
    <section id="fleet" className="py-24 bg-white text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-2">
              THE HIMALAYAN MONSTER FLEET • 3 PURPOSE-BUILT DIRT & ENDURO MACHINES
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 leading-none">
              CHOOSE YOUR<br />DIRT MACHINE.
            </h2>
            <p className="mt-4 text-slate-600 font-sans text-base sm:text-lg max-w-2xl">
              Three precision-prepared dirt & enduro platforms engineered for technical Himalayan terrain: lightweight dual-sport rock crawling, high-revving rally enduro, and long-range adventure expedition.
            </p>
          </div>

          {/* Category Tabs */}
          {fleet.length > 3 && (
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-sm border border-slate-200 shrink-0">
              {categories.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as any)}
                    className={`font-heading text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-sm flex items-center gap-1.5 transition-all cursor-pointer ${
                      selectedCategory === tab.id
                        ? 'bg-[#e06d2d] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
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
              className="bg-white rounded-sm overflow-hidden border border-slate-200 hover:border-[#e06d2d] transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
            >
              {/* Bike Image & Badge */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                {bike.badge && (
                  <div className="absolute top-3 left-3 bg-[#e06d2d] text-white px-2.5 py-1 rounded-sm font-heading font-black text-[11px] tracking-wider uppercase shadow-xs">
                    {bike.badge}
                  </div>
                )}

                <div className="absolute top-3 right-3 font-mono text-[10px] bg-white/95 backdrop-blur-md text-slate-800 px-2 py-0.5 rounded-sm uppercase border border-slate-200 font-bold">
                  {bike.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white drop-shadow-xs">
                  <span className="truncate max-w-[200px]">{bike.specs.engineOrMotor}</span>
                </div>
              </div>

              {/* Bike Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-white">
                <div>
                  <h3 className="font-heading text-2xl font-black uppercase text-slate-900 tracking-wide mb-2 group-hover:text-[#e06d2d] transition-colors leading-snug">
                    {bike.name}
                  </h3>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {bike.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {bike.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                        <Check className="w-3.5 h-3.5 text-[#e06d2d] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rental Pricing Box & CTAs */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="bg-slate-50 p-3 rounded-sm border border-slate-200">
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Rental Rate</div>
                    <div className="font-heading text-sm font-bold text-[#e06d2d]">
                      {bike.rentalPriceDayPlaceholder}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRentBike(bike)}
                      className="flex-1 bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-xs tracking-wider py-3 px-4 rounded-sm uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>RENT THIS MACHINE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setActiveSpecBike(bike)}
                      className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 rounded-sm border border-slate-200 transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 rounded-sm max-w-lg w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold">
                  TECHNICAL SPECIFICATION
                </span>
                <h3 className="font-heading text-3xl font-black uppercase text-slate-900 mt-1">
                  {activeSpecBike.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveSpecBike(null)}
                className="text-slate-400 hover:text-slate-700 text-2xl font-mono leading-none cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-sans text-sm">
              <div className="grid grid-cols-2 py-2 border-b border-slate-100">
                <span className="text-slate-500">Engine / Drive:</span>
                <span className="text-slate-900 font-medium">{activeSpecBike.specs.engineOrMotor}</span>
              </div>
              {activeSpecBike.specs.powerOrTorque && (
                <div className="grid grid-cols-2 py-2 border-b border-slate-100">
                  <span className="text-slate-500">Power / Torque:</span>
                  <span className="text-slate-900 font-medium">{activeSpecBike.specs.powerOrTorque}</span>
                </div>
              )}
              {activeSpecBike.specs.batteryCapacity && (
                <div className="grid grid-cols-2 py-2 border-b border-slate-100">
                  <span className="text-slate-500">Battery Capacity:</span>
                  <span className="text-slate-900 font-medium">{activeSpecBike.specs.batteryCapacity}</span>
                </div>
              )}
              <div className="grid grid-cols-2 py-2 border-b border-slate-100">
                <span className="text-slate-500">Suspension:</span>
                <span className="text-slate-900 font-medium">{activeSpecBike.specs.suspension}</span>
              </div>
              <div className="grid grid-cols-2 py-2 border-b border-slate-100">
                <span className="text-slate-500">Weight:</span>
                <span className="text-slate-900 font-medium">{activeSpecBike.specs.weight}</span>
              </div>
              {activeSpecBike.specs.brakes && (
                <div className="grid grid-cols-2 py-2 border-b border-slate-100">
                  <span className="text-slate-500">Brakes:</span>
                  <span className="text-slate-900 font-medium">{activeSpecBike.specs.brakes}</span>
                </div>
              )}
              {activeSpecBike.specs.tires && (
                <div className="grid grid-cols-2 py-2 border-b border-slate-100">
                  <span className="text-slate-500">Tires / Wheels:</span>
                  <span className="text-slate-900 font-medium">{activeSpecBike.specs.tires}</span>
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-4 rounded-sm border border-slate-200 space-y-2">
              <div className="font-heading font-bold text-sm text-slate-900 uppercase">Terrain Rating</div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{activeSpecBike.terrainSuitability}</p>
            </div>

            <button
              onClick={() => {
                const b = activeSpecBike;
                setActiveSpecBike(null);
                onRentBike(b);
              }}
              className="w-full bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-sm tracking-wider py-3.5 rounded-sm uppercase transition-colors cursor-pointer shadow-xs"
            >
              BOOK RENTAL FOR THIS BIKE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
