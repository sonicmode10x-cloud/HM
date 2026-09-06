import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  Map as MapIcon, Layers, Navigation, Compass, 
  Mountain, Flag, Route, Maximize2, Minimize2, 
  ChevronRight, ArrowUpRight, ShieldCheck, 
  Gauge, AlertCircle, Info, Eye
} from 'lucide-react';

export interface RouteWaypoint {
  id: string;
  name: string;
  category: 'pass' | 'stopover' | 'base' | 'peak' | 'attraction';
  lat: number;
  lng: number;
  altitudeM: number;
  altitudeFt: number;
  dayNumber?: number;
  description: string;
  terrainType: string;
  mustSee: string;
}

export interface MapRouteConfig {
  id: string;
  name: string;
  shortName: string;
  color: string;
  category: 'motorcycle' | 'mtb' | 'all';
  distanceKm: number;
  days: string;
  maxAltitudeM: number;
  difficulty: 'Moderate' | 'Challenging' | 'Extreme';
  description: string;
  coordinates: [number, number][];
  waypoints: RouteWaypoint[];
}

export const HIMALAYAN_ROUTES: MapRouteConfig[] = [
  {
    id: 'upper-mustang',
    name: 'Upper Mustang Forbidden Kingdom Expedition',
    shortName: 'Upper Mustang',
    color: '#e06d2d',
    category: 'motorcycle',
    distanceKm: 460,
    days: '10–12 Days',
    maxAltitudeM: 4660,
    difficulty: 'Challenging',
    description: 'Traverse the world\'s deepest gorge into the windswept Tibetan plateau and the 15th-century walled kingdom of Lo Manthang up to Kora La (Tibet border).',
    coordinates: [
      [28.2096, 83.9856], // Pokhara Base
      [28.2436, 83.9486], // Sarangkot
      [28.3444, 83.5647], // Beni
      [28.4975, 83.6547], // Tatopani Hot Springs
      [28.6369, 83.6019], // Kalopani / Lete
      [28.7519, 83.6872], // Marpha Apple Orchards
      [28.7844, 83.7447], // Jomsom Kali Gandaki
      [28.8358, 83.7828], // Kagbeni Checkpoint
      [28.9100, 83.7917], // Chele Red Cliffs
      [28.9950, 83.8200], // Syangboche
      [29.0400, 83.8650], // Nyi La Pass (4,010m)
      [29.0667, 83.8750], // Ghami Mani Wall
      [29.1167, 83.9333], // Charang Dzong
      [29.1620, 83.9510], // Lo La Pass (3,950m)
      [29.1824, 83.9566], // Lo Manthang
      [29.2310, 83.9890], // Chhoser Sky Caves
      [29.3175, 83.9850]  // Kora La Tibet Border (4,660m)
    ],
    waypoints: [
      {
        id: 'pokhara-base',
        name: 'Pokhara Base HQ',
        category: 'base',
        lat: 28.2096,
        lng: 83.9856,
        altitudeM: 822,
        altitudeFt: 2697,
        dayNumber: 1,
        description: 'Operations center, mechanical briefing & machine ergonomic fitting by Lake Phewa.',
        terrainType: 'Asphalt & Valley Rollers',
        mustSee: 'Himalayan Monster Base Workshop'
      },
      {
        id: 'tatopani-hotsprings',
        name: 'Tatopani Hot Springs',
        category: 'stopover',
        lat: 28.4975,
        lng: 83.6547,
        altitudeM: 1190,
        altitudeFt: 3904,
        dayNumber: 2,
        description: 'Natural geothermal sulfur hot spring pools nestled beside the roaring Kali Gandaki river canyon.',
        terrainType: 'Rough Mountain Gravel & Boulders',
        mustSee: 'Riverside Thermal Springs'
      },
      {
        id: 'marpha-village',
        name: 'Marpha Heritage Village',
        category: 'stopover',
        lat: 28.7519,
        lng: 83.6872,
        altitudeM: 2670,
        altitudeFt: 8760,
        dayNumber: 3,
        description: 'Centuries-old Thakali village famous for white-washed stone alleys and organic apple orchards.',
        terrainType: 'Cobblestone & Valley Wind Channel',
        mustSee: 'Ancient Stone Alleys & Apple Brandies'
      },
      {
        id: 'kagbeni-gateway',
        name: 'Kagbeni Ancient Gateway',
        category: 'base',
        lat: 28.8358,
        lng: 83.7828,
        altitudeM: 2800,
        altitudeFt: 9186,
        dayNumber: 3,
        description: 'Medieval fortress town and official permit checkpoint marking the boundary of restricted Upper Mustang.',
        terrainType: 'Wind-blown Riverbed Dirt',
        mustSee: 'Kag Chode Thupten Sampheling Gompa'
      },
      {
        id: 'nyi-la-pass',
        name: 'Nyi La Mountain Pass',
        category: 'pass',
        lat: 29.0400,
        lng: 83.8650,
        altitudeM: 4010,
        altitudeFt: 13156,
        dayNumber: 5,
        description: 'Spectacular windswept high-altitude pass decorated with Buddhist prayer flags framing Nilgiri.',
        terrainType: 'High Altitude Loose Scree & Hairpins',
        mustSee: '360° Panorama of Tibetan Plateau'
      },
      {
        id: 'charang-dzong',
        name: 'Charang (Tsarang) Fort',
        category: 'stopover',
        lat: 29.1167,
        lng: 83.9333,
        altitudeM: 3560,
        altitudeFt: 11680,
        dayNumber: 5,
        description: 'Historic village featuring an imposing five-story 14th-century white fortress and massive stupa.',
        terrainType: 'Arid Plateau Trails & Willow Glades',
        mustSee: 'Tsarang Dzong & Ancient Monastery'
      },
      {
        id: 'lo-la-pass',
        name: 'Lo La Pass (Viewpoint)',
        category: 'pass',
        lat: 29.1620,
        lng: 83.9510,
        altitudeM: 3950,
        altitudeFt: 12959,
        dayNumber: 6,
        description: 'The iconic crest where the dramatic walled citadel of Lo Manthang first reveals itself.',
        terrainType: 'High Desert Dirt Track',
        mustSee: 'First Glimpse of the Walled City'
      },
      {
        id: 'lo-manthang-citadel',
        name: 'Lo Manthang (Walled Kingdom)',
        category: 'base',
        lat: 29.1824,
        lng: 83.9566,
        altitudeM: 3840,
        altitudeFt: 12600,
        dayNumber: 6,
        description: 'The fortified 15th-century capital of the Kingdom of Lo, inhabited by vibrant Tibetan culture.',
        terrainType: 'Packed Clay & Historic Cobblestones',
        mustSee: 'Royal Palace & 600-Year-Old Monasteries'
      },
      {
        id: 'kora-la-pass',
        name: 'Kora La Pass (Tibet Border)',
        category: 'pass',
        lat: 29.3175,
        lng: 83.9850,
        altitudeM: 4660,
        altitudeFt: 15288,
        dayNumber: 7,
        description: 'The highest northern frontier point on the expedition at the official border marker with Tibet/China.',
        terrainType: 'Open Alpine Gravel Highway',
        mustSee: 'Border Pillar 24 & Endless Tibetan Horizon'
      }
    ]
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna High Pass Circuit',
    shortName: 'Annapurna Circuit',
    color: '#38bdf8',
    category: 'motorcycle',
    distanceKm: 390,
    days: '8–10 Days',
    maxAltitudeM: 5416,
    difficulty: 'Extreme',
    description: 'Circumnavigate the massive Annapurna massif, climbing from lush subtropical valleys over the world-renowned 5,416m Thorong La Pass.',
    coordinates: [
      [28.2096, 83.9856], // Pokhara
      [28.2280, 84.3750], // Besisahar
      [28.5520, 84.2400], // Chame Pine Forests
      [28.6180, 84.1480], // Pisang Peak Base
      [28.6650, 84.0200], // Manang Valley
      [28.8030, 83.9650], // Thorong Phedi High Camp
      [28.7944, 83.9356], // Thorong La Pass (5,416m)
      [28.8167, 83.8714], // Muktinath Temple
      [28.7844, 83.7447], // Jomsom
      [28.4975, 83.6547], // Tatopani
      [28.2096, 83.9856]  // Pokhara Return
    ],
    waypoints: [
      {
        id: 'manang-valley',
        name: 'Manang High Valley',
        category: 'base',
        lat: 28.6650,
        lng: 84.0200,
        altitudeM: 3519,
        altitudeFt: 11545,
        dayNumber: 4,
        description: 'Critical acclimatization hub with Gangapurna glacial lake and dramatic views of Annapurna III & IV.',
        terrainType: 'Rocky Shelf Dirt Roads',
        mustSee: 'Gangapurna Glacial Lake'
      },
      {
        id: 'thorong-la-pass',
        name: 'Thorong La Pass (Summit)',
        category: 'pass',
        lat: 28.7944,
        lng: 83.9356,
        altitudeM: 5416,
        altitudeFt: 17769,
        dayNumber: 6,
        description: 'The pinnacle pass of the Himalayas separating the lush Manang valley from arid Mustang.',
        terrainType: 'Glacial Moraine & High Altitude Scree',
        mustSee: 'Thorong La Summit Prayer Stupa'
      },
      {
        id: 'muktinath-temple',
        name: 'Muktinath Sacred Complex',
        category: 'stopover',
        lat: 28.8167,
        lng: 83.8714,
        altitudeM: 3710,
        altitudeFt: 12172,
        dayNumber: 7,
        description: 'Venerated pilgrimage sanctuary with 108 eternal holy water spouts and continuous natural gas flames.',
        terrainType: 'Mountain Switchbacks & Stone Flagging',
        mustSee: '108 Sacred Brass Spouts & Jwala Mai'
      }
    ]
  },
  {
    id: 'mustang-enduro-mtb',
    name: 'Mustang Gravity Enduro & MTB Ridge Tracks',
    shortName: 'Mustang MTB Enduro',
    color: '#22c55e',
    category: 'mtb',
    distanceKm: 220,
    days: '7 Days',
    maxAltitudeM: 4100,
    difficulty: 'Challenging',
    description: 'Pure downhill gravity flow and high alpine singletracks from Muktinath down Lubra Valley gorge into Jomsom and Marpha.',
    coordinates: [
      [28.8167, 83.8714], // Muktinath
      [28.8350, 83.8200], // Lubra Pass Ridge (4,100m)
      [28.8420, 83.7950], // Lubra Ancient Bon Village
      [28.8358, 83.7828], // Kagbeni
      [28.7844, 83.7447], // Jomsom Riverbed Flow
      [28.7519, 83.6872], // Marpha Singletrack
      [28.6369, 83.6019], // Kalopani Pine Descents
      [28.4975, 83.6547]  // Tatopani Finish
    ],
    waypoints: [
      {
        id: 'lubra-pass',
        name: 'Lubra Valley Ridge Pass',
        category: 'pass',
        lat: 28.8350,
        lng: 83.8200,
        altitudeM: 4100,
        altitudeFt: 13451,
        dayNumber: 2,
        description: 'World-famous gravity singletrack drop-in with loose shale flow and massive Dhaulagiri backdrop.',
        terrainType: 'Flow Singletrack & Natural Berms',
        mustSee: 'Epic 1,400m Vertical Descent into Lubra Gorge'
      },
      {
        id: 'lubra-bon-village',
        name: 'Lubra Ancient Bon Village',
        category: 'attraction',
        lat: 28.8420,
        lng: 83.7950,
        altitudeM: 2790,
        altitudeFt: 9153,
        dayNumber: 2,
        description: 'One of the last remaining pre-Buddhist Bon religion villages hidden deep in a secluded canyon.',
        terrainType: 'Gorge Riverbed & Pebble Singletrack',
        mustSee: 'Yungdrung Bön Gompa & Red Ochre Canyons'
      }
    ]
  }
];

// Key Himalayan Giant Peaks for context
export const HIMALAYAN_PEAKS = [
  { name: 'Annapurna I', altitudeM: 8091, lat: 28.5955, lng: 83.8203, role: '10th Highest Peak on Earth' },
  { name: 'Dhaulagiri I', altitudeM: 8167, lat: 28.6985, lng: 83.4873, role: '7th Highest Peak on Earth (White Mountain)' },
  { name: 'Machapuchare (Fishtail)', altitudeM: 6993, lat: 28.4950, lng: 83.9490, role: 'Sacred Unclimbed Holy Mountain' },
  { name: 'Nilgiri North', altitudeM: 7061, lat: 28.7240, lng: 83.7150, role: 'Guardian Peak of Kali Gandaki Gorge' }
];

interface HimalayanRouteMapProps {
  initialRouteId?: string;
  onSelectRoute?: (routeId: string) => void;
  onOpenBooking?: (tourSlug?: string) => void;
}

export const HimalayanRouteMap: React.FC<HimalayanRouteMapProps> = ({
  initialRouteId = 'upper-mustang',
  onSelectRoute,
  onOpenBooking
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);

  const [activeRouteId, setActiveRouteId] = useState<string>(initialRouteId);
  const [activeFilter, setActiveFilter] = useState<'all' | 'motorcycle' | 'mtb'>('all');
  const [selectedWaypoint, setSelectedWaypoint] = useState<RouteWaypoint | null>(
    HIMALAYAN_ROUTES[0].waypoints[0]
  );
  const [mapStyle, setMapStyle] = useState<'dark' | 'topo' | 'satellite'>('dark');
  const [showPassesOnly, setShowPassesOnly] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const currentRoute = HIMALAYAN_ROUTES.find(r => r.id === activeRouteId) || HIMALAYAN_ROUTES[0];

  // Tile layer providers (high-reliability, keyless basemaps)
  const tileUrls = {
    dark: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    topo: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  };

  const tileAttributions = {
    dark: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    topo: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme',
    satellite: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye'
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [28.85, 83.85],
        zoom: 9,
        minZoom: 7,
        maxZoom: 16,
        zoomControl: false,
        attributionControl: false
      });

      // Zoom control in bottom-right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Layer group to hold polylines and markers
      const layerGroup = L.layerGroup().addTo(map);
      layerGroupRef.current = layerGroup;
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Base Tile Layer when mapStyle changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    // Remove existing tile layers
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    const tileLayer = L.tileLayer(tileUrls[mapStyle], {
      attribution: tileAttributions[mapStyle],
      maxZoom: 16
    });

    tileLayer.addTo(map);
    tileLayer.bringToBack();
  }, [mapStyle]);

  // Redraw Polylines, Markers, and Waypoints when Route or Filter changes
  useEffect(() => {
    if (!mapInstanceRef.current || !layerGroupRef.current) return;
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;

    layerGroup.clearLayers();

    // Determine which routes to render
    const routesToRender = activeFilter === 'all' 
      ? HIMALAYAN_ROUTES 
      : HIMALAYAN_ROUTES.filter(r => r.category === activeFilter);

    // 1. Draw Routes Polylines
    routesToRender.forEach((r) => {
      const isCurrent = r.id === activeRouteId;
      
      // Shadow / Glow polyline
      L.polyline(r.coordinates, {
        color: isCurrent ? r.color : '#555555',
        weight: isCurrent ? 8 : 4,
        opacity: isCurrent ? 0.35 : 0.2,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(layerGroup);

      // Main polyline
      const mainPolyline = L.polyline(r.coordinates, {
        color: isCurrent ? r.color : '#888888',
        weight: isCurrent ? 4 : 2,
        opacity: isCurrent ? 1 : 0.6,
        dashArray: r.category === 'mtb' ? '6, 8' : undefined,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(layerGroup);

      mainPolyline.on('click', () => {
        setActiveRouteId(r.id);
        if (onSelectRoute) onSelectRoute(r.id);
      });
    });

    // 2. Add Waypoints Markers for Active Route
    const waypointsToDisplay = showPassesOnly
      ? currentRoute.waypoints.filter(w => w.category === 'pass')
      : currentRoute.waypoints;

    waypointsToDisplay.forEach((wp) => {
      const isPass = wp.category === 'pass';
      const isBase = wp.category === 'base';
      const isSelected = selectedWaypoint?.id === wp.id;

      const markerColor = isPass ? '#f59e0b' : isBase ? '#e06d2d' : '#38bdf8';
      const markerIconHtml = `
        <div style="
          width: ${isSelected ? '28px' : isPass ? '24px' : '20px'};
          height: ${isSelected ? '28px' : isPass ? '24px' : '20px'};
          background-color: ${markerColor};
          border: 2px solid #ffffff;
          border-radius: ${isPass ? '4px' : '50%'};
          box-shadow: 0 0 12px ${markerColor};
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          font-weight: 900;
          font-size: 10px;
          transform: ${isSelected ? 'scale(1.2)' : 'scale(1)'};
          transition: all 0.2s ease;
          cursor: pointer;
        ">
          ${isPass ? '▲' : wp.dayNumber || '•'}
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-himalayan-marker',
        html: markerIconHtml,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const marker = L.marker([wp.lat, wp.lng], { icon: customIcon }).addTo(layerGroup);

      marker.on('click', () => {
        setSelectedWaypoint(wp);
        map.flyTo([wp.lat, wp.lng], 12, { duration: 1.2 });
      });

      // Custom tooltip
      marker.bindTooltip(`
        <div style="background:#111116; color:#ffffff; padding:4px 8px; border:1px solid #e06d2d; font-family:sans-serif; font-size:11px; border-radius:2px;">
          <strong style="color:${markerColor}">${wp.name}</strong><br/>
          <span style="color:#a3a3a3;">Elev: ${wp.altitudeM}m / ${wp.altitudeFt.toLocaleString()}ft</span>
        </div>
      `, {
        direction: 'top',
        offset: [0, -10],
        opacity: 0.95
      });
    });

    // 3. Add Giant Himalayan Mountain Peak Badges
    HIMALAYAN_PEAKS.forEach((peak) => {
      const peakIconHtml = `
        <div style="
          background: rgba(15, 15, 20, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #f3f4f6;
          padding: 2px 6px;
          border-radius: 2px;
          font-family: monospace;
          font-size: 10px;
          white-space: nowrap;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          pointer-events: auto;
          cursor: pointer;
        ">
          <span style="color: #38bdf8;">🏔️ ${peak.name}</span>
          <span style="color: #fbbf24; font-weight: bold; margin-left: 4px;">${peak.altitudeM}m</span>
        </div>
      `;

      const peakIcon = L.divIcon({
        className: 'custom-peak-badge',
        html: peakIconHtml,
        iconAnchor: [40, 10]
      });

      const peakMarker = L.marker([peak.lat, peak.lng], { icon: peakIcon }).addTo(layerGroup);
      peakMarker.bindPopup(`
        <div style="background:#14141a; color:#fff; padding:8px; border-radius:4px; font-family:sans-serif; font-size:12px;">
          <h4 style="color:#38bdf8; font-weight:bold; margin-bottom:2px;">${peak.name} (${peak.altitudeM}m)</h4>
          <p style="color:#d1d5db; margin:0;">${peak.role}</p>
        </div>
      `);
    });

    // Fit route bounds smoothly
    if (currentRoute.coordinates.length > 0) {
      const bounds = L.latLngBounds(currentRoute.coordinates);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 });
    }
  }, [activeRouteId, activeFilter, showPassesOnly, selectedWaypoint?.id, currentRoute, onSelectRoute]);

  // Zoom to specific waypoint
  const handleWaypointClick = (wp: RouteWaypoint) => {
    setSelectedWaypoint(wp);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([wp.lat, wp.lng], 12, { duration: 1.2 });
    }
  };

  const handleFitActiveRoute = () => {
    if (mapInstanceRef.current && currentRoute.coordinates.length > 0) {
      const bounds = L.latLngBounds(currentRoute.coordinates);
      mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 });
    }
  };

  return (
    <section id="himalayan-route-map" className="py-20 bg-[#f8f9fa] text-slate-900 border-y border-slate-200 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/10 border border-[#e06d2d]/30 rounded-sm text-[#e06d2d] font-mono text-xs uppercase tracking-widest font-bold mb-2">
              <Route className="w-3.5 h-3.5" />
              INTERACTIVE HIMALAYAN EXPEDITION CARTOGRAPHY
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-slate-900">
              EXPLORE THE HIGH PASSES & CANYON ROUTES
            </h2>
            <p className="mt-1 text-slate-600 text-sm sm:text-base max-w-2xl">
              Visualize elevation ascents, mountain pass waypoints, and remote checkpoints across Upper Mustang, Kali Gandaki Gorge, and Annapurna.
            </p>
          </div>

          {/* Route Category Filters */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-sm border border-slate-200 shrink-0 font-mono text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-sm transition-all cursor-pointer ${
                activeFilter === 'all' ? 'bg-[#e06d2d] text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ALL ROUTES
            </button>
            <button
              onClick={() => setActiveFilter('motorcycle')}
              className={`px-3 py-1.5 rounded-sm transition-all cursor-pointer ${
                activeFilter === 'motorcycle' ? 'bg-[#e06d2d] text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              MOTO TOURS
            </button>
            <button
              onClick={() => setActiveFilter('mtb')}
              className={`px-3 py-1.5 rounded-sm transition-all cursor-pointer ${
                activeFilter === 'mtb' ? 'bg-emerald-600 text-white font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              MTB GRAVITY
            </button>
          </div>
        </div>

        {/* Route Selector Tabs Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {HIMALAYAN_ROUTES.map((route) => {
            const isActive = route.id === activeRouteId;
            return (
              <button
                key={route.id}
                onClick={() => {
                  setActiveRouteId(route.id);
                  if (route.waypoints[0]) setSelectedWaypoint(route.waypoints[0]);
                  if (onSelectRoute) onSelectRoute(route.id);
                }}
                className={`p-4 rounded-sm border text-left transition-all relative overflow-hidden cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-[#e06d2d] shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#e06d2d]" />
                )}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span 
                      className="px-2 py-0.5 rounded-xs text-[10px] font-mono uppercase font-bold"
                      style={{ 
                        backgroundColor: `${route.color}15`, 
                        color: route.color,
                        border: `1px solid ${route.color}30`
                      }}
                    >
                      {route.category === 'mtb' ? 'MTB GRAVITY' : 'MOTO EXPEDITION'}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{route.days}</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg uppercase text-slate-900 leading-tight">
                    {route.shortName}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-2 mt-1 font-sans">
                    {route.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1 text-slate-700">
                    <Navigation className="w-3.5 h-3.5 text-[#e06d2d]" />
                    <span>{route.distanceKm} KM</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-600 font-bold">
                    <Mountain className="w-3.5 h-3.5" />
                    <span>MAX {route.maxAltitudeM}M</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Cartography Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Leaflet Map Interactive Container */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm overflow-hidden relative shadow-sm flex flex-col">
            
            {/* Map Top Bar Controls Overlay */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentRoute.color }} />
                <span className="font-heading font-bold uppercase text-sm tracking-wide text-slate-900">
                  {currentRoute.name}
                </span>
              </div>

              {/* Map Layer Switchers + Utility Buttons */}
              <div className="flex items-center gap-2 text-xs font-mono">
                {/* Tile Selector */}
                <div className="bg-white p-1 rounded-sm border border-slate-200 flex items-center gap-1 shadow-xs">
                  <button
                    onClick={() => setMapStyle('dark')}
                    className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
                      mapStyle === 'dark' ? 'bg-slate-800 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => setMapStyle('topo')}
                    className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
                      mapStyle === 'topo' ? 'bg-[#e06d2d] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Topo
                  </button>
                  <button
                    onClick={() => setMapStyle('satellite')}
                    className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
                      mapStyle === 'satellite' ? 'bg-sky-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Satellite
                  </button>
                </div>

                {/* Filter Passes Only */}
                <button
                  onClick={() => setShowPassesOnly(!showPassesOnly)}
                  className={`px-2.5 py-1 rounded-sm border transition-colors cursor-pointer flex items-center gap-1 ${
                    showPassesOnly 
                      ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold' 
                      : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
                  }`}
                  title="Filter Mountain Passes Only"
                >
                  <Mountain className="w-3 h-3" />
                  <span className="hidden sm:inline">High Passes</span>
                </button>

                {/* Reset Center View */}
                <button
                  onClick={handleFitActiveRoute}
                  className="bg-white hover:bg-slate-100 border border-slate-200 p-1 rounded-sm text-slate-700 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
                  title="Fit Route to Screen"
                >
                  <Compass className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Actual Map Canvas Area */}
            <div 
              ref={mapContainerRef} 
              className="w-full h-[420px] sm:h-[500px] lg:h-[540px] relative z-0 bg-slate-100"
            />

            {/* Map Legend Footer */}
            <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#f59e0b]" />
                  <span>Mountain Pass (▲)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e06d2d]" />
                  <span>Base Camp / Checkpoint</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <span>Night Stopover</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>🏔️ 8000m Peak</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500">
                Click pins or list items to zoom & inspect altitude
              </div>
            </div>
          </div>

          {/* Right Column: Route Elevation & Selected Waypoint Dossier */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Selected Waypoint Dossier Card */}
            {selectedWaypoint ? (
              <div className="bg-white border border-slate-200 rounded-sm p-5 relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#e06d2d] flex items-center gap-1.5 font-bold">
                    <Flag className="w-3.5 h-3.5" />
                    {selectedWaypoint.category === 'pass' ? 'HIGH MOUNTAIN PASS' : 'EXPEDITION CHECKPOINT'}
                  </span>
                  {selectedWaypoint.dayNumber && (
                    <span className="bg-slate-100 text-slate-800 font-mono text-[10px] px-2 py-0.5 rounded-sm font-semibold border border-slate-200">
                      DAY {selectedWaypoint.dayNumber}
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <h3 className="font-heading font-black text-2xl uppercase text-slate-900 tracking-wide">
                    {selectedWaypoint.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 mt-1.5 font-mono">
                    <div className="text-amber-600 font-bold text-lg flex items-center gap-1">
                      <Mountain className="w-4 h-4" />
                      <span>{selectedWaypoint.altitudeM}m</span>
                    </div>
                    <span className="text-slate-500 text-xs">
                      ({selectedWaypoint.altitudeFt.toLocaleString()} ft)
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed mt-3 font-sans">
                    {selectedWaypoint.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs font-mono">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Terrain:</span>
                      <span className="text-slate-800 text-right">{selectedWaypoint.terrainType}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-slate-500">Highlight:</span>
                      <span className="text-[#e06d2d] text-right font-semibold">{selectedWaypoint.mustSee}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (onOpenBooking) {
                        const slug = currentRoute.id === 'upper-mustang' ? 'upper-mustang-motorcycle-tour' :
                                     currentRoute.id === 'annapurna-circuit' ? 'annapurna-circuit-motorcycle-tour' : 'upper-mustang-mtb-enduro-tour';
                        onOpenBooking(slug);
                      }
                    }}
                    className="w-full mt-5 bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-xs py-2.5 uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <span>BOOK THIS EXPEDITION ROUTE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : null}

            {/* Route Waypoints Sequential List */}
            <div className="bg-white border border-slate-200 rounded-sm p-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <span className="font-heading font-bold text-sm uppercase text-slate-800 tracking-wider">
                  ROUTE STOPOVERS ({currentRoute.waypoints.length})
                </span>
                <span className="text-[11px] font-mono text-slate-500">Click to fly</span>
              </div>

              <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
                {currentRoute.waypoints.map((wp, idx) => {
                  const isSelected = selectedWaypoint?.id === wp.id;
                  const isPass = wp.category === 'pass';

                  return (
                    <button
                      key={wp.id}
                      onClick={() => handleWaypointClick(wp)}
                      className={`w-full p-2.5 rounded-sm text-left transition-all flex items-center justify-between text-xs font-mono cursor-pointer ${
                        isSelected 
                          ? 'bg-slate-100 border border-[#e06d2d] text-slate-900 font-semibold' 
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className={`w-5 h-5 rounded-xs flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          isPass 
                            ? 'bg-amber-500 text-white' 
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {isPass ? '▲' : wp.dayNumber || idx + 1}
                        </span>
                        <span className="truncate font-sans font-medium text-xs">
                          {wp.name}
                        </span>
                      </div>

                      <div className="text-right shrink-0">
                        <span className={isPass ? 'text-amber-600 font-bold' : 'text-slate-500'}>
                          {wp.altitudeM}m
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
