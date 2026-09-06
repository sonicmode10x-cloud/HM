import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

export const InstagramGrid: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
      caption: 'Lo Manthang sunrise over the Himalayan 450s. 3,840m, Nepal.',
      likes: '1.4k'
    },
    {
      url: 'https://images.unsplash.com/photo-1585409677916-a05bf12461ec?q=80&w=800&auto=format&fit=crop',
      caption: 'Prayer flags fluttering on Thorong La high pass at 5,416m, Nepal.',
      likes: '2.1k'
    },
    {
      url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
      caption: 'Dropping into Lubra Valley singletrack with Nilgiri towering above, Nepal.',
      likes: '980'
    },
    {
      url: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800&auto=format&fit=crop',
      caption: 'Upper Mustang canyon route. 3,840 meters of pure Himalayan wilderness, Nepal.',
      likes: '3.2k'
    },
    {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
      caption: 'Annapurna massif snow peaks reflecting early alpine sunlight, Nepal.',
      likes: '1.1k'
    },
    {
      url: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop',
      caption: 'Pokhara Phewa Lake basecamp with Machapuchare (Fish Tail) rising above, Nepal.',
      likes: '850'
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-2">
              LIVE FROM THE TRAILS
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-slate-900">
              FOLLOW THE RIDE
            </h2>
            <p className="mt-4 text-slate-600 font-sans text-base">
              Daily visual dispatches from our expeditions across the Nepal Himalayas.
            </p>
          </div>

          <a
            href="https://www.instagram.com/himalayanmonsternp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-sm tracking-wider px-6 py-3.5 rounded-sm uppercase transition-colors cursor-pointer shrink-0 shadow-xs"
          >
            <Instagram className="w-4 h-4" />
            <span>@HIMALAYANMONSTERNP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6-Photo Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {images.map((item, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/himalayanmonsternp/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-sm overflow-hidden bg-slate-100 border border-slate-200 block shadow-xs"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-xs font-sans text-white">
                <div className="flex items-center justify-end gap-1.5 text-slate-200">
                  <Heart className="w-3.5 h-3.5 fill-[#e06d2d] text-[#e06d2d]" />
                  <span className="font-mono text-[10px]">{item.likes}</span>
                </div>
                <p className="text-[11px] line-clamp-3 leading-snug">{item.caption}</p>
                <div className="text-[10px] font-mono text-[#e06d2d] uppercase font-bold">@himalayanmonsternp</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
