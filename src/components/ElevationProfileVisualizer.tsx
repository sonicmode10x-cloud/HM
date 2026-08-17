import React, { useState, useMemo } from 'react';
import { 
  Mountain, TrendingUp, AlertTriangle, ShieldCheck, HeartPulse, 
  Droplets, Activity, Info, CheckCircle2, ChevronRight, Gauge, 
  ArrowUpRight, Compass, ThermometerSnowflake
} from 'lucide-react';
import { Expedition, DayItinerary } from '../types';

interface ElevationProfileVisualizerProps {
  tour: Expedition;
  selectedDay?: number;
  onSelectDay?: (day: number) => void;
}

// Utility to parse numbers from strings like "3,840 m", "4,660m (Kora La)", "820 m"
function parseElevationMeters(altStr?: string, defaultVal: number = 1000): number {
  if (!altStr) return defaultVal;
  const cleaned = altStr.replace(/,/g, '');
  const match = cleaned.match(/(\d+)\s*(?:m|meters)?/i);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return defaultVal;
}

// Estimate effective atmospheric oxygen percentage compared to sea level (barometric formula approximation)
function calculateEffectiveOxygen(altitudeMeters: number): number {
  // Pressure ratio P/P0 ≈ exp(-altitude / 8400)
  const ratio = Math.exp(-altitudeMeters / 8400);
  return Math.round(ratio * 100);
}

export const ElevationProfileVisualizer: React.FC<ElevationProfileVisualizerProps> = ({
  tour,
  selectedDay: controlledDay,
  onSelectDay
}) => {
  const [internalDay, setInternalDay] = useState<number>(1);
  const [unit, setUnit] = useState<'m' | 'ft'>('m');
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const activeDayNumber = controlledDay ?? internalDay;

  const setActiveDay = (day: number) => {
    setInternalDay(day);
    if (onSelectDay) onSelectDay(day);
  };

  // Process day elevation points
  const elevationData = useMemo(() => {
    if (!tour.itinerary || tour.itinerary.length === 0) return [];

    return tour.itinerary.map((item, idx) => {
      const startMeters = parseElevationMeters(item.startAltitude, idx === 0 ? 822 : 1200);
      const endMeters = parseElevationMeters(item.endAltitude, startMeters);
      const maxMeters = parseElevationMeters(item.maxAltitude, Math.max(startMeters, endMeters));
      
      const overnightMeters = endMeters;
      const oxygenPct = calculateEffectiveOxygen(maxMeters);
      const overnightOxygenPct = calculateEffectiveOxygen(overnightMeters);

      // Previous overnight for delta
      const prevOvernight = idx > 0 
        ? parseElevationMeters(tour.itinerary[idx - 1].endAltitude, 1000)
        : startMeters;
      const sleepDelta = overnightMeters - prevOvernight;

      // Check for climb high sleep low
      const isClimbHighSleepLow = maxMeters > overnightMeters + 250;

      return {
        day: item.day,
        title: item.title,
        overnight: item.overnight,
        startMeters,
        endMeters,
        maxMeters,
        overnightMeters,
        oxygenPct,
        overnightOxygenPct,
        sleepDelta,
        isClimbHighSleepLow,
        ridingTime: item.ridingTime,
        distanceKm: item.distanceKm,
        highlights: item.highlights || []
      };
    });
  }, [tour]);

  // Overall tour elevation stats
  const stats = useMemo(() => {
    if (elevationData.length === 0) return { max: 5416, min: 822, maxGainDay: 1 };
    let max = 0;
    let min = 99999;
    let maxGain = -99999;
    let maxGainDay = 1;

    elevationData.forEach((d) => {
      if (d.maxMeters > max) max = d.maxMeters;
      if (d.startMeters < min) min = d.startMeters;
      if (d.endMeters < min) min = d.endMeters;
      if (d.sleepDelta > maxGain) {
        maxGain = d.sleepDelta;
        maxGainDay = d.day;
      }
    });

    return { max, min, maxGain, maxGainDay };
  }, [elevationData]);

  const activeDayData = elevationData.find((d) => d.day === (hoveredDay ?? activeDayNumber)) || elevationData[0];

  // SVG Dimension Constants
  const width = 800;
  const height = 280;
  const paddingLeft = 60;
  const paddingRight = 40;
  const paddingTop = 30;
  const paddingBottom = 45;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const minAlt = Math.max(0, Math.floor((stats.min - 300) / 500) * 500);
  const maxAlt = Math.ceil((stats.max + 400) / 500) * 500;

  const getX = (index: number) => {
    if (elevationData.length <= 1) return paddingLeft + chartWidth / 2;
    return paddingLeft + (index / (elevationData.length - 1)) * chartWidth;
  };

  const getY = (meters: number) => {
    const clamped = Math.max(minAlt, Math.min(maxAlt, meters));
    const ratio = (clamped - minAlt) / (maxAlt - minAlt);
    return paddingTop + chartHeight - ratio * chartHeight;
  };

  // Convert unit
  const formatAlt = (meters: number) => {
    if (unit === 'ft') {
      const ft = Math.round(meters * 3.28084);
      return `${ft.toLocaleString()} ft`;
    }
    return `${meters.toLocaleString()} m`;
  };

  // Generate SVG Path for Max Altitude & Overnight curve
  const maxPath = useMemo(() => {
    if (elevationData.length === 0) return '';
    return elevationData.reduce((acc, curr, idx) => {
      const x = getX(idx);
      const y = getY(curr.maxMeters);
      return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');
  }, [elevationData, minAlt, maxAlt]);

  const areaPath = useMemo(() => {
    if (elevationData.length === 0) return '';
    const baseLineY = paddingTop + chartHeight;
    const firstX = getX(0);
    const lastX = getX(elevationData.length - 1);
    return `${maxPath} L ${lastX} ${baseLineY} L ${firstX} ${baseLineY} Z`;
  }, [maxPath, elevationData]);

  const sleepPath = useMemo(() => {
    if (elevationData.length === 0) return '';
    return elevationData.reduce((acc, curr, idx) => {
      const x = getX(idx);
      const y = getY(curr.overnightMeters);
      return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');
  }, [elevationData, minAlt, maxAlt]);

  // Zone thresholds
  const zone3500Y = getY(3500);
  const zone2500Y = getY(2500);
  const zone5000Y = getY(5000);

  return (
    <div id="elevation-acclimatization-profile" className="bg-[#14141a] rounded-sm border border-white/10 overflow-hidden space-y-6 p-6 sm:p-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold mb-1">
            <Mountain className="w-4 h-4" />
            <span>ALTITUDE PHYSIOLOGY & EXPEDITION PROFILE</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
            ELEVATION PROFILE & ACCLIMATIZATION
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
            Scientific day-by-day ascent curves, oxygen saturation estimations, and high-altitude safety zones.
          </p>
        </div>

        {/* Units & Quick Stats Bar */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Unit Toggle */}
          <div className="flex items-center bg-black/60 p-1 rounded-sm border border-white/10 text-xs font-mono">
            <button
              onClick={() => setUnit('m')}
              className={`px-3 py-1.5 rounded-sm font-bold uppercase cursor-pointer transition-colors ${
                unit === 'm' ? 'bg-[#e06d2d] text-black' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Meters (m)
            </button>
            <button
              onClick={() => setUnit('ft')}
              className={`px-3 py-1.5 rounded-sm font-bold uppercase cursor-pointer transition-colors ${
                unit === 'ft' ? 'bg-[#e06d2d] text-black' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Feet (ft)
            </button>
          </div>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Peak Max Altitude */}
        <div className="bg-black/40 p-4 rounded-sm border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
            <span>PEAK SUMMIT / PASS</span>
            <Mountain className="w-4 h-4 text-[#e06d2d]" />
          </div>
          <div className="mt-2">
            <div className="font-heading text-2xl sm:text-3xl font-black text-white">
              {formatAlt(stats.max)}
            </div>
            <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
              ~{calculateEffectiveOxygen(stats.max)}% Oxygen vs Sea Level
            </div>
          </div>
        </div>

        {/* Basecamp Starting Altitude */}
        <div className="bg-black/40 p-4 rounded-sm border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
            <span>BASE START ALTITUDE</span>
            <Compass className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2">
            <div className="font-heading text-2xl sm:text-3xl font-black text-white">
              {formatAlt(stats.min)}
            </div>
            <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
              Pokhara Valley Baseline
            </div>
          </div>
        </div>

        {/* Acclimatization Rate */}
        <div className="bg-black/40 p-4 rounded-sm border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
            <span>ACCENT GRADIENT</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2">
            <div className="font-heading text-2xl sm:text-3xl font-black text-amber-400">
              +{formatAlt(Math.max(0, stats.maxGain))}
            </div>
            <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
              Max single-day sleep gain (Day {stats.maxGainDay})
            </div>
          </div>
        </div>

        {/* Medical Support Rating */}
        <div className="bg-black/40 p-4 rounded-sm border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
            <span>HIGH PASS SAFETY</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2">
            <div className="font-heading text-xl sm:text-2xl font-black text-emerald-400 uppercase">
              O2 & Diamox Monitored
            </div>
            <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
              Daily Pulse Oximeter checks
            </div>
          </div>
        </div>
      </div>

      {/* Interactive SVG Altitude Chart */}
      <div className="bg-black/60 p-4 sm:p-6 rounded-sm border border-white/10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-3 h-0.5 bg-[#e06d2d]" />
              <span>Day Max Ride Altitude</span>
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-3 h-0.5 bg-cyan-400 border-dashed" />
              <span>Overnight Sleeping Altitude</span>
            </span>
          </div>

          <div className="text-neutral-400 text-[11px]">
            Hover or click any node to inspect Day details
          </div>
        </div>

        {/* SVG Container */}
        <div className="relative w-full overflow-x-auto">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto min-w-[620px] select-none"
          >
            <defs>
              {/* Mountain Area Gradient */}
              <linearGradient id="altitudeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e06d2d" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#e06d2d" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#e06d2d" stopOpacity="0.0" />
              </linearGradient>

              {/* High Altitude Risk Zone Shading */}
              <linearGradient id="extremeZone" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid & Altitude Labels */}
            {[1000, 2000, 3000, 4000, 5000].map((level) => {
              if (level < minAlt || level > maxAlt) return null;
              const y = getY(level);
              return (
                <g key={level}>
                  <line
                    x1={paddingLeft}
                    y1={y}
                    x2={width - paddingRight}
                    y2={y}
                    stroke="rgba(255,255,255,0.08)"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={paddingLeft - 10}
                    y={y + 3}
                    textAnchor="end"
                    className="text-[10px] font-mono fill-neutral-500"
                  >
                    {formatAlt(level)}
                  </text>
                </g>
              );
            })}

            {/* Threshold line for 3,500m (AMS Warning Zone) */}
            {maxAlt >= 3500 && (
              <g>
                <line
                  x1={paddingLeft}
                  y1={zone3500Y}
                  x2={width - paddingRight}
                  y2={zone3500Y}
                  stroke="rgba(234, 179, 8, 0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text
                  x={width - paddingRight}
                  y={zone3500Y - 6}
                  textAnchor="end"
                  className="text-[9px] font-mono fill-amber-400 font-bold uppercase"
                >
                  3,500m Acclimatization Threshold (Diamox Zone)
                </text>
              </g>
            )}

            {/* Filled Mountain Profile Area */}
            <path d={areaPath} fill="url(#altitudeGradient)" />

            {/* Overnight Sleep Line (Dashed Cyan) */}
            <path
              d={sleepPath}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.8"
            />

            {/* Max Ride Altitude Line (Solid Orange) */}
            <path
              d={maxPath}
              fill="none"
              stroke="#e06d2d"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data Points / Interactive Circles */}
            {elevationData.map((d, idx) => {
              const x = getX(idx);
              const maxY = getY(d.maxMeters);
              const sleepY = getY(d.overnightMeters);
              const isSelected = d.day === activeDayData.day;

              return (
                <g 
                  key={d.day} 
                  className="cursor-pointer"
                  onClick={() => setActiveDay(d.day)}
                  onMouseEnter={() => setHoveredDay(d.day)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  {/* Vertical Guide Line */}
                  <line
                    x1={x}
                    y1={paddingTop}
                    x2={x}
                    y2={paddingTop + chartHeight}
                    stroke={isSelected ? 'rgba(224, 109, 45, 0.4)' : 'rgba(255,255,255,0.05)'}
                    strokeWidth={isSelected ? '2' : '1'}
                  />

                  {/* Overnight Sleep Point */}
                  {d.isClimbHighSleepLow && (
                    <circle
                      cx={x}
                      cy={sleepY}
                      r="4"
                      fill="#22d3ee"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                  )}

                  {/* Outer Glow for Selected Day */}
                  {isSelected && (
                    <circle
                      cx={x}
                      cy={maxY}
                      r="12"
                      fill="none"
                      stroke="#e06d2d"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  )}

                  {/* Day Node Circle */}
                  <circle
                    cx={x}
                    cy={maxY}
                    r={isSelected ? '6.5' : '4.5'}
                    fill={isSelected ? '#e06d2d' : '#fff'}
                    stroke="#14141a"
                    strokeWidth="2"
                  />

                  {/* Day Label Below X Axis */}
                  <text
                    x={x}
                    y={paddingTop + chartHeight + 20}
                    textAnchor="middle"
                    className={`text-[11px] font-mono ${
                      isSelected ? 'fill-[#e06d2d] font-bold' : 'fill-neutral-400'
                    }`}
                  >
                    D{d.day}
                  </text>

                  {/* Altitude Label Above Node */}
                  {isSelected && (
                    <g>
                      <rect
                        x={x - 38}
                        y={maxY - 28}
                        width="76"
                        height="20"
                        rx="2"
                        fill="#000"
                        stroke="#e06d2d"
                        strokeWidth="1"
                      />
                      <text
                        x={x}
                        y={maxY - 14}
                        textAnchor="middle"
                        className="text-[10px] font-mono fill-white font-bold"
                      >
                        {formatAlt(d.maxMeters)}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Day Acclimatization Deep-Dive Inspector */}
      {activeDayData && (
        <div className="bg-black/40 rounded-sm border border-[#e06d2d]/30 p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#e06d2d] text-black font-heading font-black text-lg flex items-center justify-center shrink-0">
                D{activeDayData.day}
              </div>
              <div>
                <div className="text-xs font-mono text-[#e06d2d] uppercase font-bold">
                  STAGE {activeDayData.day} OF {elevationData.length}
                </div>
                <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                  {activeDayData.title}
                </h4>
              </div>
            </div>

            {/* Overnight Location */}
            <div className="text-left sm:text-right font-mono text-xs text-neutral-300">
              <span className="text-neutral-500 block text-[10px] uppercase">Overnight Teahouse</span>
              <span className="text-white font-semibold">{activeDayData.overnight}</span>
            </div>
          </div>

          {/* Detailed Stage Physiology Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="bg-[#1c1c24] p-3 rounded-sm border border-white/5">
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Max Day Altitude</div>
              <div className="font-heading text-lg font-bold text-white mt-1">
                {formatAlt(activeDayData.maxMeters)}
              </div>
            </div>

            <div className="bg-[#1c1c24] p-3 rounded-sm border border-white/5">
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Sleep Altitude</div>
              <div className="font-heading text-lg font-bold text-cyan-300 mt-1">
                {formatAlt(activeDayData.overnightMeters)}
              </div>
            </div>

            <div className="bg-[#1c1c24] p-3 rounded-sm border border-white/5">
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Atmospheric Oxygen</div>
              <div className="font-heading text-lg font-bold text-amber-400 mt-1 flex items-center gap-1">
                <Gauge className="w-4 h-4" />
                <span>{activeDayData.oxygenPct}%</span>
              </div>
            </div>

            <div className="bg-[#1c1c24] p-3 rounded-sm border border-white/5">
              <div className="text-[10px] font-mono text-neutral-400 uppercase">Sleep Ascent Gain</div>
              <div className={`font-heading text-lg font-bold mt-1 ${
                activeDayData.sleepDelta > 600 ? 'text-rose-400' : 'text-emerald-400'
              }`}>
                {activeDayData.sleepDelta >= 0 ? `+${formatAlt(activeDayData.sleepDelta)}` : formatAlt(activeDayData.sleepDelta)}
              </div>
            </div>
          </div>

          {/* Acclimatization Notice for the Day */}
          <div className="flex items-start gap-3 bg-black/50 p-3.5 rounded-sm border border-white/5 text-xs text-neutral-300">
            <Info className="w-4 h-4 text-[#e06d2d] shrink-0 mt-0.5" />
            <div className="space-y-1">
              {activeDayData.maxMeters >= 4000 ? (
                <span>
                  <strong className="text-white font-semibold">Extreme Himalayan High Pass: </strong>
                  Hydration requirement is 4.0L minimum today. Oxygen pressure is {activeDayData.oxygenPct}% of sea level. 
                  Our backup vehicle carries bottled medical oxygen and satellite communication at this elevation.
                </span>
              ) : activeDayData.maxMeters >= 3000 ? (
                <span>
                  <strong className="text-white font-semibold">High Altitude Trans-Himalayan Zone: </strong>
                  Entering the rain shadow. Noticeable drop in humidity and air density. Diamox recommended if advised during Pokhara briefing.
                </span>
              ) : (
                <span>
                  <strong className="text-white font-semibold">Sub-Alpine Valley Phase: </strong>
                  Ideal acclimatization zone. Steady pace and warm riding conditions along the Kali Gandaki corridor.
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Himalayan Acclimatization Golden Rules & Protocol */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="bg-black/30 p-4 rounded-sm border border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#e06d2d] font-bold uppercase">
            <Droplets className="w-4 h-4" />
            <span>1. Continuous Hydration</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Drink 3.5–4.5 liters of clean water and electrolyte salts daily. High mountain wind and low humidity dehydrate riders rapidly.
          </p>
        </div>

        <div className="bg-black/30 p-4 rounded-sm border border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
            <HeartPulse className="w-4 h-4" />
            <span>2. Climb High, Sleep Low</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Our routes cross high passes during active daylight hours and descend to protected valley lodges for restorative, deep sleep.
          </p>
        </div>

        <div className="bg-black/30 p-4 rounded-sm border border-white/5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
            <Activity className="w-4 h-4" />
            <span>3. Pulse Oximeter Monitoring</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Our expedition leads measure resting SpO2 oxygen saturation and heart rates every morning and evening at teahouses.
          </p>
        </div>
      </div>
    </div>
  );
};
