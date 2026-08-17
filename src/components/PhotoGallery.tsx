import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'motorcycle' | 'mtb' | 'mustang';
  location: string;
  altitude: string;
  url: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Kali Gandaki Canyon Expedition',
    category: 'mustang',
    location: 'Lower Mustang, Nepal',
    altitude: '2,800m',
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'photo-2',
    title: 'Thorong La Pass & Prayer Flags',
    category: 'motorcycle',
    location: 'Annapurna Circuit, Nepal',
    altitude: '5,416m',
    url: 'https://images.unsplash.com/photo-1585409677916-a05bf12461ec?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'photo-3',
    title: 'Lubra Valley Singletrack Descent',
    category: 'mtb',
    location: 'Mustang Ridge, Nepal',
    altitude: '4,100m',
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'photo-4',
    title: 'Lo Manthang High Desert Valley',
    category: 'mustang',
    location: 'Upper Mustang, Nepal',
    altitude: '3,840m',
    url: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'photo-5',
    title: 'Annapurna Massif & Dhaulagiri Giants',
    category: 'mustang',
    location: 'Marpha & Jomsom, Nepal',
    altitude: '2,670m',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'photo-6',
    title: 'Phewa Lake & Machapuchare Peak',
    category: 'motorcycle',
    location: 'Pokhara Valley, Nepal',
    altitude: '822m',
    url: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'photo-7',
    title: 'Muktinath Plateau & Nilgiri North',
    category: 'mtb',
    location: 'Muktinath, Nepal',
    altitude: '3,710m',
    url: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'photo-8',
    title: 'Manang Valley High Route',
    category: 'motorcycle',
    location: 'Manang District, Nepal',
    altitude: '3,540m',
    url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop'
  }
];

export const PhotoGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'motorcycle' | 'mtb' | 'mustang'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#0e0e11] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-semibold block mb-1">
              GALLERY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
              ON THE TRAIL
            </h2>
          </div>

          {/* Simple Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All' },
              { id: 'motorcycle', label: 'Motorbikes' },
              { id: 'mtb', label: 'Mountain Bikes' },
              { id: 'mustang', label: 'Mustang' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id as any);
                  setLightboxIndex(null);
                }}
                className={`font-mono text-xs tracking-wider uppercase px-3 py-1.5 rounded-sm transition-colors cursor-pointer shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#e06d2d] text-black font-bold'
                    : 'text-neutral-400 hover:text-white bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Minimal Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-neutral-900 cursor-pointer"
            >
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Minimal hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="font-heading text-sm font-bold text-white uppercase leading-tight line-clamp-1">
                  {photo.title}
                </p>
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-300 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#e06d2d]" />
                    {photo.location}
                  </span>
                  <span>•</span>
                  <span>{photo.altitude}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Lightbox Modal */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev / Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-2.5 rounded-full bg-black/60 hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-2.5 rounded-full bg-black/60 hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-sm bg-black">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="w-full text-center mt-3">
              <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                {activePhoto.title}
              </h3>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                {activePhoto.location} • {activePhoto.altitude}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
