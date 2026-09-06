import React, { useState } from 'react';
import { Compass, Landmark, Mountain, Utensils, Waves, Sparkles, MapPin } from 'lucide-react';
import { DestinationActivity } from '../types';

interface DestinationActivitiesProps {
  activities: DestinationActivity[];
  tourTitle: string;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Sightseeing': <Landmark className="w-4 h-4 text-sky-600" />,
  'Culture & Heritage': <Compass className="w-4 h-4 text-amber-600" />,
  'Adventure & Outdoors': <Mountain className="w-4 h-4 text-[#e06d2d]" />,
  'Food & Local Life': <Utensils className="w-4 h-4 text-emerald-600" />,
  'Relaxation': <Waves className="w-4 h-4 text-indigo-600" />
};

const CATEGORY_COLORS: Record<string, string> = {
  'Sightseeing': 'bg-sky-50 text-sky-700 border-sky-200',
  'Culture & Heritage': 'bg-amber-50 text-amber-700 border-amber-200',
  'Adventure & Outdoors': 'bg-orange-50 text-orange-700 border-orange-200',
  'Food & Local Life': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Relaxation': 'bg-indigo-50 text-indigo-700 border-indigo-200'
};

export const DestinationActivities: React.FC<DestinationActivitiesProps> = ({ activities, tourTitle }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  if (!activities || activities.length === 0) {
    return null;
  }

  const categories = ['all', ...Array.from(new Set(activities.map(a => a.category)))];

  const filteredActivities = selectedFilter === 'all' 
    ? activities 
    : activities.filter(a => a.category === selectedFilter);

  return (
    <div className="space-y-6 bg-white p-6 sm:p-8 rounded-sm border border-slate-200 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#e06d2d] uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Destination Highlights & Excursions</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-slate-900 mt-1">
            THINGS TO DO ALONG THE ROUTE
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl font-sans">
            Curated cultural landmarks, scenic viewpoints, local cuisine spots, and adventure activities you will experience during the <strong className="text-slate-900">{tourTitle}</strong>.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase font-bold tracking-wider transition-all ${
                selectedFilter === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat === 'all' ? 'All Activities' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredActivities.map((act, index) => {
          const badgeStyle = CATEGORY_COLORS[act.category] || 'bg-slate-50 text-slate-700 border-slate-200';
          const icon = CATEGORY_ICONS[act.category] || <Sparkles className="w-4 h-4 text-[#e06d2d]" />;

          return (
            <div 
              key={index}
              className="p-5 rounded-sm border border-slate-200 bg-[#fbfcfd] hover:border-slate-300 hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${badgeStyle}`}>
                    {icon}
                    <span>{act.category}</span>
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{act.location}</span>
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                  {act.title}
                </h3>

                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                  {act.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  ✓ Included in Expedition Schedule
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
