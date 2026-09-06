import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote, Info } from 'lucide-react';
import { TourReview } from '../types';

interface ReviewsSectionProps {
  onOpenBooking: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenBooking }) => {
  const reviews: TourReview[] = [
    {
      id: 'rev-ph-1',
      riderName: 'Marcus Lindqvist',
      country: 'Sweden',
      countryCode: 'SE',
      rating: 5,
      date: 'October 2025 (Sample Review)',
      comment: 'Riding the Himalayan 450 into Lo Manthang was hands down the greatest two-wheel adventure of my life. Himalayan Monster’s mechanical support and route knowledge were world-class.',
      bike: 'Royal Enfield Himalayan 450'
    },
    {
      id: 'rev-ph-2',
      riderName: 'Dave & Sarah K.',
      country: 'Australia',
      countryCode: 'AU',
      rating: 5,
      date: 'May 2025 (Sample Review)',
      comment: 'Not your average cookie-cutter tour. Raw, cinematic, authentic, and professionally executed. The border ride to Kora La at 4,660m will stay with me forever.',
      bike: 'Honda CRF300L'
    },
    {
      id: 'rev-ph-3',
      riderName: 'Julien Mercier',
      country: 'France',
      countryCode: 'FR',
      rating: 5,
      date: 'April 2025 (Sample Review)',
      comment: 'Spectacular mountain singletracks and roads. The cliff road up to Chame is pure adrenaline. Will definitely return for the Mustang route.',
      bike: 'Royal Enfield Himalayan 450'
    },
    {
      id: 'rev-ph-4',
      riderName: 'Cody Miller',
      country: 'United States',
      countryCode: 'US',
      rating: 5,
      date: 'November 2025 (Sample Review)',
      comment: 'Lubra Valley descent on the full-suspension enduro bikes is world-class. Bikes were meticulously tuned every single morning by the team.',
      bike: 'Trek Slash Pro Enduro'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-2">
              EXPEDITION TESTIMONIALS
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 leading-none">
              WHAT RIDERS SAY
            </h2>
            <p className="mt-4 text-slate-600 font-sans text-base max-w-xl">
              Authentic feedback from international riders across motorcycle, MTB, and E-MTB expeditions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-sm bg-slate-100 hover:bg-[#e06d2d] text-slate-700 hover:text-white border border-slate-200 hover:border-[#e06d2d] transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-sm bg-slate-100 hover:bg-[#e06d2d] text-slate-700 hover:text-white border border-slate-200 hover:border-[#e06d2d] transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-sm border border-slate-200 relative overflow-hidden shadow-xs mb-6">
          <Quote className="absolute top-6 right-6 w-24 h-24 text-slate-200 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#e06d2d] text-[#e06d2d]" />
              ))}
              <span className="font-mono text-xs text-slate-500 ml-2 font-medium">
                5.0 Verified Experience
              </span>
            </div>

            {/* Review Comment */}
            <blockquote className="font-sans text-xl sm:text-2xl md:text-3xl text-slate-900 font-normal leading-relaxed mb-8">
              "{currentReview.comment}"
            </blockquote>

            {/* Rider Meta */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
              {/* Photo Avatar Placeholder */}
              <div className="w-14 h-14 rounded-full bg-white border border-[#e06d2d]/40 flex items-center justify-center font-heading font-black text-xl text-[#e06d2d] shrink-0 shadow-xs">
                {currentReview.riderName.charAt(0)}
              </div>

              <div>
                <div className="font-heading text-xl font-bold uppercase text-slate-900 tracking-wide">
                  {currentReview.riderName}
                </div>
                <div className="font-sans text-xs text-slate-500 flex items-center gap-2 mt-0.5 font-medium">
                  <span>{currentReview.country}</span>
                  <span>•</span>
                  <span className="text-[#e06d2d] font-semibold">{currentReview.bike}</span>
                  <span>•</span>
                  <span>{currentReview.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer / Editable Notice Badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Info className="w-3.5 h-3.5" />
          <span>Notice: Customer reviews and quotes shown above are formatted placeholders ready for live booking logs.</span>
        </div>
      </div>
    </section>
  );
};
