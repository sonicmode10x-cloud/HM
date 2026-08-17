import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck, Wrench, Compass, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/seo';
import { Analytics } from '../lib/analytics';

interface ContactViewProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBackToHome, onOpenBooking }) => {
  return (
    <div className="pt-24 pb-20 bg-[#0c0c0e] text-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative py-16 sm:py-24 mb-14 overflow-hidden border-b border-white/10 bg-[#121216]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=2000&auto=format&fit=crop"
            alt="Himalayan Monster Base Camp Lakeside Pokhara Nepal"
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.2]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/70 to-[#0c0c0e]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb navigation */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
                <li>
                  <button onClick={onBackToHome} className="hover:text-white transition-colors cursor-pointer">
                    Home
                  </button>
                </li>
                <li>/</li>
                <li className="text-[#e06d2d]">Contact & Base Camp</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#e06d2d]" />
              LAKESIDE BASE CAMP • POKHARA, NEPAL
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
              GET IN TOUCH WITH BASE CAMP
            </h1>
            
            <p className="mt-5 text-neutral-200 font-sans text-lg sm:text-xl leading-relaxed">
              Have questions about Upper Mustang permits, road conditions, fleet availability, or custom itineraries? Connect directly with our expedition team in Pokhara.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Channels & Address (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#16161c] p-8 rounded-sm border border-white/10 space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white border-b border-white/10 pb-4">
                Direct Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* WhatsApp Channel */}
                <div className="p-5 bg-white/5 rounded-sm border border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <MessageCircle className="w-4 h-4" />
                      Direct WhatsApp
                    </div>
                    <p className="text-xs text-neutral-300 mb-4">
                      Fastest response for instant availability, live route weather, and permit inquiries.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/9779800000000?text=Hello%20Himalayan%20Monster,%20I'm%20reaching%20out%20via%20your%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => Analytics.trackWhatsAppClick('Contact Page')}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-sm font-semibold rounded-sm transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Telephone Channel */}
                <div className="p-5 bg-white/5 rounded-sm border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#e06d2d] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <Phone className="w-4 h-4" />
                      Landline Office
                    </div>
                    <p className="text-xs text-neutral-300 mb-4">
                      Pokhara Base Camp Reception during active business hours (07:00 – 20:00 NPT).
                    </p>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    onClick={() => Analytics.trackPhoneClick()}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-sm font-semibold rounded-sm transition-colors border border-white/10"
                  >
                    <span>{BUSINESS_INFO.telephone}</span>
                  </a>
                </div>

                {/* Email Channel */}
                <div className="p-5 bg-white/5 rounded-sm border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#e06d2d] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <Mail className="w-4 h-4" />
                      Expedition Desk
                    </div>
                    <p className="text-xs text-neutral-300 mb-4">
                      Formal group inquiries, media requests, and custom route blueprints.
                    </p>
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    onClick={() => Analytics.trackEmailClick()}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold rounded-sm transition-colors border border-white/10"
                  >
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                </div>

                {/* Operating Hours */}
                <div className="p-5 bg-white/5 rounded-sm border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-neutral-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <Clock className="w-4 h-4 text-[#e06d2d]" />
                      Workshop Hours
                    </div>
                    <p className="text-xs text-neutral-300 mb-4">
                      Open 7 days a week for fleet pickups, mechanical inspections, and route briefings.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#e06d2d] font-bold text-center py-2 bg-black/40 rounded-sm">
                    07:00 – 20:00 NPT Daily
                  </div>
                </div>
              </div>

              {/* Physical Address Section */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                  Physical Base Location
                </h3>
                <div className="text-neutral-300 text-sm leading-relaxed space-y-1">
                  <p className="font-semibold text-white">{BUSINESS_INFO.name} ({BUSINESS_INFO.legalName})</p>
                  <p>{BUSINESS_INFO.address.streetAddress}</p>
                  <p>{BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion} {BUSINESS_INFO.address.postalCode}, {BUSINESS_INFO.address.addressCountry}</p>
                  <p className="text-xs font-mono text-neutral-400 pt-1">
                    GPS Coordinates: {BUSINESS_INFO.geo.latitude}° N, {BUSINESS_INFO.geo.longitude}° E
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking CTA & Assurance (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#16161c] p-8 rounded-sm border border-[#e06d2d]/40 space-y-6">
              <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block">
                EXPEDITION DISPATCH
              </span>
              
              <h2 className="font-heading text-3xl font-black uppercase text-white leading-tight">
                READY TO SECURE YOUR SEAT ON THE NEXT EXPEDITION?
              </h2>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Submit an interactive tour booking request or rental inquiry. Our team will verify dates, check motorcycle availability, and provide an all-inclusive route breakdown.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-base py-4 px-6 rounded-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-orange-500/20 transition-all"
              >
                <Compass className="w-5 h-5" />
                <span>BOOK AN EXPEDITION NOW</span>
              </button>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#e06d2d]" />
                  <span>Restricted Area Permits handled with Nepal Immigration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#e06d2d]" />
                  <span>25-point mechanical inspection before every departure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
