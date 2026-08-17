import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, Square, ShieldCheck, HeartPulse, Flame, 
  FileText, Sparkles, RotateCcw, Check, Plus, Trash2, Printer, Info
} from 'lucide-react';
import { Expedition } from '../types';

export interface PackingItem {
  id: string;
  name: string;
  category: 'gear' | 'thermals' | 'medical' | 'docs';
  description: string;
  isEssential: boolean;
  highAltitudeSpecial?: boolean;
}

const DEFAULT_PACKING_ITEMS: PackingItem[] = [
  // Riding & Protective Gear
  {
    id: 'off-road-boots',
    name: 'Off-road Boots',
    category: 'gear',
    description: 'Stiff-shank motocross/enduro boots with ankle hinge protection for boulder fields and rocky riverbeds.',
    isEssential: true,
    highAltitudeSpecial: true
  },
  {
    id: 'ce-armor-jacket-pants',
    name: 'CE-Armor Riding Jacket & Pants',
    category: 'gear',
    description: 'Abrasion-resistant 500D+ Cordura with CE-Level 2 back, shoulder, elbow, and knee armor.',
    isEssential: true
  },
  {
    id: 'dual-sport-helmet-goggles',
    name: 'Dual-Sport / MTB Full-Face Helmet & Goggles',
    category: 'gear',
    description: 'DOT/ECE rated helmet with anti-fog Pinlock or UV-rated anti-dust motocross goggles.',
    isEssential: true
  },
  {
    id: 'dual-riding-gloves',
    name: 'Thermal Waterproof + Ventilated Riding Gloves',
    category: 'gear',
    description: 'One warm Gore-Tex insulated pair for 4,000m+ high passes, one breathable pair for valley sprints.',
    isEssential: true,
    highAltitudeSpecial: true
  },
  {
    id: 'hydration-pack',
    name: 'Hydration Pack (2–3L Bladder)',
    category: 'gear',
    description: '15-20L daypack with insulated tube to maintain continuous hydration and combat altitude sickness.',
    isEssential: true,
    highAltitudeSpecial: true
  },
  {
    id: 'windproof-neck-buff',
    name: 'Windproof Fleece Neck Gaiter / Balaclava',
    category: 'gear',
    description: 'Guards against sub-zero windchill and dry Kali Gandaki valley dust storms.',
    isEssential: true
  },

  // Thermal & Weather Layers
  {
    id: 'thermal-layers',
    name: 'Thermal Layers (Merino Wool Base)',
    category: 'thermals',
    description: '2x 200-260gsm merino wool top & bottom sets for freezing night teahouses and early mountain departures.',
    isEssential: true,
    highAltitudeSpecial: true
  },
  {
    id: 'packable-down-jacket',
    name: 'Packable Down Puffer Jacket (-10°C Rated)',
    category: 'thermals',
    description: 'Lightweight high-loft down or PrimaLoft jacket for lodge evenings in Lo Manthang and Thorong Phedi.',
    isEssential: true,
    highAltitudeSpecial: true
  },
  {
    id: 'waterproof-windproof-shell',
    name: 'Gore-Tex / Waterproof Outer Shell',
    category: 'thermals',
    description: '100% waterproof storm jacket & over-pants for sudden Himalayan blizzard or rain squalls.',
    isEssential: true
  },
  {
    id: 'merino-cushioned-socks',
    name: 'Merino Wool Tall Riding Socks (3-4 Pairs)',
    category: 'thermals',
    description: 'Heavyweight anti-odor socks providing cushioning inside rigid off-road boots.',
    isEssential: true
  },

  // Medical & High-Altitude Safety
  {
    id: 'personal-medical-kit',
    name: 'Personal Medical Kit (Diamox / Altitude Meds)',
    category: 'medical',
    description: 'Acetazolamide (Diamox) for AMS acclimatization, Ibuprofen/paracetamol, ciprofloxacin, and rehydration salts.',
    isEssential: true,
    highAltitudeSpecial: true
  },
  {
    id: 'blister-friction-care',
    name: 'Blister Care & Athletic Strapping Tape',
    category: 'medical',
    description: 'Compeed patches, zinc oxide tape, and sterile gauze for boot friction points and trail abrasion.',
    isEssential: true
  },
  {
    id: 'extreme-sunscreen-lip-balm',
    name: 'SPF 50+ High-Altitude Sunscreen & Zinc Lip Balm',
    category: 'medical',
    description: 'Extreme UV index reflection protection at 3,500m–5,400m trans-Himalayan elevations.',
    isEssential: true,
    highAltitudeSpecial: true
  },
  {
    id: 'eye-drops-nasal-saline',
    name: 'Lubricating Eye Drops & Nasal Saline Spray',
    category: 'medical',
    description: 'Vital protection against severe dry air and airborne grit in Upper Mustang canyon corridors.',
    isEssential: false,
    highAltitudeSpecial: true
  },

  // Documents & Cold-Resistant Electronics
  {
    id: 'cold-proof-powerbank',
    name: 'Cold-Resistant Power Bank (10,000–20,000mAh)',
    category: 'docs',
    description: 'Lithium battery bank kept inside jacket inner pocket (sub-zero lodge rooms drain phones overnight).',
    isEssential: true,
    highAltitudeSpecial: true
  },
  {
    id: 'passport-visa-photos',
    name: 'Passport, Nepal Visa & 4x Passport Photos',
    category: 'docs',
    description: 'Hard copies mandatory for restricted area checkpoints (ACAP, TIMS, Upper Mustang RAP).',
    isEssential: true
  },
  {
    id: 'int-driving-permit',
    name: 'International Driving Permit (IDP) & License',
    category: 'docs',
    description: 'Original driver\'s license with motorcycle endorsement and valid International Permit.',
    isEssential: true
  },
  {
    id: 'high-altitude-insurance',
    name: 'Helicopter Evacuation Insurance (Up to 6,000m)',
    category: 'docs',
    description: 'Travel policy explicitly covering motorized off-road adventure & emergency aero-medical evacuation.',
    isEssential: true,
    highAltitudeSpecial: true
  }
];

interface PackingListChecklistProps {
  tour: Expedition;
}

export const PackingListChecklist: React.FC<PackingListChecklistProps> = ({ tour }) => {
  const storageKey = `hm_packing_checklist_${tour.id}`;
  
  const [items, setItems] = useState<PackingItem[]>(DEFAULT_PACKING_ITEMS);
  const [checkedIds, setCheckedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    return new Set<string>();
  });

  const [activeCategory, setActiveCategory] = useState<'all' | 'gear' | 'thermals' | 'medical' | 'docs'>('all');
  const [showOnlyEssential, setShowOnlyEssential] = useState(false);
  const [customItemName, setCustomItemName] = useState('');
  const [customItemCategory, setCustomItemCategory] = useState<'gear' | 'thermals' | 'medical' | 'docs'>('gear');
  const [showAddForm, setShowAddForm] = useState(false);

  // Sync checked items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(Array.from(checkedIds)));
    } catch {
      // ignore
    }
  }, [checkedIds, storageKey]);

  const toggleItem = (id: string) => {
    setCheckedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const checkAll = () => {
    const allFiltered = filteredItems.map(i => i.id);
    setCheckedIds(prev => {
      const next = new Set(prev);
      allFiltered.forEach(id => next.add(id));
      return next;
    });
  };

  const resetAll = () => {
    setCheckedIds(new Set());
  };

  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemName.trim()) return;

    const newItem: PackingItem = {
      id: `custom-${Date.now()}`,
      name: customItemName.trim(),
      category: customItemCategory,
      description: 'Custom rider gear added to personal packing inventory.',
      isEssential: false
    };

    setItems(prev => [newItem, ...prev]);
    setCheckedIds(prev => new Set(prev).add(newItem.id));
    setCustomItemName('');
    setShowAddForm(false);
  };

  const handleDeleteItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
    setCheckedIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  // Filter items
  const filteredItems = items.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesEssential = !showOnlyEssential || item.isEssential;
    return matchesCat && matchesEssential;
  });

  const totalItemsCount = items.length;
  const checkedCount = items.filter(i => checkedIds.has(i.id)).length;
  const progressPercent = totalItemsCount > 0 ? Math.round((checkedCount / totalItemsCount) * 100) : 0;
  const essentialsCount = items.filter(i => i.isEssential).length;
  const checkedEssentialsCount = items.filter(i => i.isEssential && checkedIds.has(i.id)).length;

  return (
    <div id="packing-checklist-section" className="bg-[#16161c] rounded-sm border border-white/10 overflow-hidden space-y-6 p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>HIGH-ALTITUDE RIDING EXPEDITION GEAR MATRIX</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
            PACKING LIST & GEAR CHECKLIST
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
            Curated checklist for <span className="text-white font-medium">{tour.title}</span> ({tour.maxAltitude} max altitude). Toggle items as you pack your gear bag.
          </p>
        </div>

        {/* Progress Display */}
        <div className="bg-black/60 p-4 rounded-sm border border-white/10 min-w-[220px] shrink-0">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-neutral-400 uppercase">Readiness</span>
            <span className={`font-bold ${progressPercent === 100 ? 'text-emerald-400' : 'text-[#e06d2d]'}`}>
              {checkedCount}/{totalItemsCount} Packed ({progressPercent}%)
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#e06d2d] to-amber-400 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mt-2">
            <span>Mandatory Items:</span>
            <span className={checkedEssentialsCount === essentialsCount ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
              {checkedEssentialsCount}/{essentialsCount}
            </span>
          </div>
        </div>
      </div>

      {/* Altitude Advisory Banner */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-4 flex items-start gap-3 text-xs text-amber-200">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="font-semibold text-amber-300">High-Altitude Expedition Notice: </strong>
          Temperatures in {tour.slug.includes('mustang') ? 'Upper Mustang' : 'the Himalayan passes'} routinely drop from +20°C in the afternoon sun down to -5°C at night. 
          Heavy-duty boots, layered thermal protection, and personal Diamox/medical supplies are strictly mandatory for all riders.
        </div>
      </div>

      {/* Category Tabs & Filter Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap items-center gap-1.5 bg-black/40 p-1.5 rounded-sm border border-white/5">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase font-bold transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#e06d2d] text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Items ({items.length})
          </button>
          <button
            onClick={() => setActiveCategory('gear')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'gear'
                ? 'bg-[#e06d2d] text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Riding Gear</span>
          </button>
          <button
            onClick={() => setActiveCategory('thermals')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'thermals'
                ? 'bg-[#e06d2d] text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Thermals & Layers</span>
          </button>
          <button
            onClick={() => setActiveCategory('medical')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'medical'
                ? 'bg-[#e06d2d] text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Medical & Altitude</span>
          </button>
          <button
            onClick={() => setActiveCategory('docs')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'docs'
                ? 'bg-[#e06d2d] text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Docs & Power</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowOnlyEssential(!showOnlyEssential)}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase font-bold border transition-colors cursor-pointer ${
              showOnlyEssential
                ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            {showOnlyEssential ? '★ Showing Mandatory' : 'Show Mandatory'}
          </button>
          <button
            onClick={checkAll}
            className="px-3 py-1.5 rounded-sm text-xs font-mono uppercase bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title="Mark visible items as packed"
          >
            Check All
          </button>
          <button
            onClick={resetAll}
            className="p-2 rounded-sm text-xs font-mono text-neutral-400 hover:text-rose-400 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            title="Reset Checklist"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handlePrint}
            className="p-2 rounded-sm text-xs font-mono text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            title="Print or Export Checklist"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredItems.map((item) => {
          const isChecked = checkedIds.has(item.id);
          const isCustom = item.id.startsWith('custom-');

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-sm border transition-all cursor-pointer flex items-start gap-3.5 group select-none ${
                isChecked
                  ? 'bg-emerald-950/20 border-emerald-500/30'
                  : 'bg-black/30 border-white/10 hover:border-white/20 hover:bg-black/50'
              }`}
            >
              {/* Checkbox Icon */}
              <div className="mt-0.5 shrink-0">
                {isChecked ? (
                  <div className="w-5 h-5 rounded-sm bg-emerald-500 text-black flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-sm border border-neutral-500 group-hover:border-neutral-300" />
                )}
              </div>

              {/* Item Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`font-heading text-base font-bold uppercase tracking-wide ${
                    isChecked ? 'line-through text-neutral-400' : 'text-white'
                  }`}>
                    {item.name}
                  </span>

                  {item.isEssential && (
                    <span className="px-1.5 py-0.5 rounded-sm text-[10px] font-mono uppercase font-black bg-[#e06d2d]/20 text-[#e06d2d] border border-[#e06d2d]/40">
                      MANDATORY
                    </span>
                  )}

                  {item.highAltitudeSpecial && (
                    <span className="px-1.5 py-0.5 rounded-sm text-[10px] font-mono uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      HIGH PASS
                    </span>
                  )}
                </div>

                <p className={`text-xs font-sans leading-relaxed ${
                  isChecked ? 'text-neutral-500' : 'text-neutral-300'
                }`}>
                  {item.description}
                </p>
              </div>

              {/* Delete button if custom */}
              {isCustom && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteItem(item.id);
                  }}
                  className="text-neutral-500 hover:text-rose-400 p-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Custom Gear Item Drawer / Button */}
      <div className="pt-2 border-t border-white/5">
        {!showAddForm ? (
          <button
            onClick={() => setShowAddForm(true)}
            className="text-xs font-mono text-[#e06d2d] hover:text-[#eb7a3b] flex items-center gap-2 font-bold cursor-pointer transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>ADD CUSTOM RIDER ITEM TO CHECKLIST</span>
          </button>
        ) : (
          <form onSubmit={handleAddCustomItem} className="bg-black/50 p-4 rounded-sm border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#e06d2d] uppercase font-bold">Add Custom Gear Item</span>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="text-xs font-mono text-neutral-400 hover:text-white"
              >
                Cancel
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <input
                  type="text"
                  placeholder="e.g. Earplugs, Action Cam Mount, Spare Glasses..."
                  value={customItemName}
                  onChange={(e) => setCustomItemName(e.target.value)}
                  className="w-full bg-[#1c1c24] border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-[#e06d2d]"
                  autoFocus
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={customItemCategory}
                  onChange={(e) => setCustomItemCategory(e.target.value as any)}
                  className="w-full bg-[#1c1c24] border border-white/10 rounded-sm px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#e06d2d]"
                >
                  <option value="gear">Riding Gear</option>
                  <option value="thermals">Thermals</option>
                  <option value="medical">Medical</option>
                  <option value="docs">Docs & Tech</option>
                </select>
                <button
                  type="submit"
                  className="bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-xs px-4 py-2 rounded-sm uppercase tracking-wider cursor-pointer"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
