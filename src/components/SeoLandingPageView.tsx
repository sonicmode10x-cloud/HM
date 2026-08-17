import React, { useState } from 'react';
import { 
  ArrowLeft, Compass, CheckCircle2, ChevronDown, ChevronUp, 
  MessageCircle, Star, Bike, MapPin, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { SeoLandingPageData, Expedition } from '../types';

interface SeoLandingPageViewProps {
  pageData: SeoLandingPageData;
  allTours: Expedition[];
  onBack: () => void;
  onSelectTour: (slug: string) => void;
  onOpenBooking: (tourSlug?: string) => void;
}

export const SeoLandingPageView: React.FC<SeoLandingPageViewProps> = ({
  pageData,
  allTours,
  onBack,
  onSelectTour,
  onOpenBooking
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const featuredTours = allTours.filter((t) => 
    pageData.featuredTourSlugs.includes(t.slug) || (t.category === pageData.category)
  );

  return (
    <div className="bg-[#0c0c0e] text-white min-h-screen pt-24 pb-24 font-sans">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </button>
      </div>

      {/* SEO Hero Header */}
      <div className="relative py-20 bg-[#16161c] border-y border-white/10 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={pageData.heroImage}
            alt={pageData.h1}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16161c] via-[#16161c]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/20 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
              POKHARA • NEPAL • HIMALAYAN EXPEDITIONS
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-4">
              {pageData.h1}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8">
              {pageData.subheading}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-sm tracking-wider py-3.5 px-8 rounded-sm uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Compass className="w-4 h-4" />
                <span>BOOK OR INQUIRE NOW</span>
              </button>

              <a
                href={`https://wa.me/9779800000000?text=Hello%20Himalayan%20Monster,%20I%20am%20inquiring%20about%20${encodeURIComponent(pageData.targetKeyword)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600/90 hover:bg-emerald-600 text-white font-sans text-xs font-semibold py-3.5 px-5 rounded-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp (+977)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-heading text-3xl font-black uppercase text-white tracking-wide">
              WHY RIDE WITH HIMALAYAN MONSTER IN POKHARA
            </h2>

            {pageData.introContent.map((p, i) => (
              <p key={i} className="text-neutral-300 text-base sm:text-lg leading-relaxed font-sans">
                {p}
              </p>
            ))}

            <div className="bg-[#16161c] p-6 rounded-sm border border-white/10 space-y-3 mt-6">
              <h3 className="font-heading text-xl font-bold uppercase text-[#e06d2d]">
                KEY EXPEDITION HIGHLIGHTS
              </h3>
              <div className="space-y-2 pt-2">
                {pageData.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#e06d2d] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Fleet Badge Box */}
          <div className="lg:col-span-4 bg-[#16161c] p-6 rounded-sm border border-white/10 space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              AVAILABLE MACHINES
            </h3>
            <div className="space-y-2">
              {pageData.fleetTypes.map((type, idx) => (
                <div key={idx} className="p-3 bg-white/5 rounded-sm border border-white/5 text-xs font-mono text-neutral-300 flex items-center justify-between">
                  <span>{type}</span>
                  <Bike className="w-4 h-4 text-[#e06d2d]" />
                </div>
              ))}
            </div>

            <div className="p-4 bg-black/40 rounded-sm border border-white/5 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
              All bikes serviced in our Pokhara headquarters with certified mechanics.
            </div>
          </div>
        </div>

        {/* Featured Tours for this Landing Page */}
        {featuredTours.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white">
                FEATURED EXPEDITIONS & TOURS
              </h2>
              <span className="text-xs font-mono text-neutral-400">
                Pokhara Departures
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTours.map((t) => (
                <div
                  key={t.id}
                  onClick={() => onSelectTour(t.slug)}
                  className="bg-[#16161c] rounded-sm overflow-hidden border border-white/10 hover:border-[#e06d2d]/60 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={t.heroImage}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-xs font-mono text-white rounded-sm">
                      {t.durationLabel}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-2xl font-bold uppercase text-white group-hover:text-[#e06d2d] transition-colors mb-2">
                        {t.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 mb-4">
                        {t.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-heading font-black text-[#e06d2d] uppercase">
                      <span>VIEW EXPEDITION DETAILS</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structured SEO FAQs */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white">
            FREQUENTLY ASKED QUESTIONS ({pageData.targetKeyword.toUpperCase()})
          </h2>

          <div className="space-y-3">
            {pageData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#16161c] rounded-sm border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 cursor-pointer font-sans text-base font-semibold text-white"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#e06d2d]" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-0 text-sm text-neutral-300 font-sans leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
