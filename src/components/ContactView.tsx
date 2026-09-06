import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck, Wrench, Compass, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { HimalayanMonsterLogo } from './HimalayanMonsterLogo';
import { BUSINESS_INFO } from '../lib/seo';
import { Analytics } from '../lib/analytics';

interface ContactViewProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBackToHome, onOpenBooking }) => {
  return (
    <div className="pt-24 pb-20 bg-[#f8f9fa] text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <div className="relative py-16 sm:py-24 mb-14 overflow-hidden border-b border-slate-200 bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=2000&auto=format&fit=crop"
            alt="Himalayan Monster Base Camp Lakeside Pokhara Nepal"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb navigation */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                <li>
                  <button onClick={onBackToHome} className="hover:text-white transition-colors cursor-pointer">
                    Home
                  </button>
                </li>
                <li>/</li>
                <li className="text-[#e06d2d] font-bold">Contact & Base Camp</li>
              </ol>
            </nav>

            <div className="mb-4">
              <HimalayanMonsterLogo variant="compact" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#e06d2d]" />
              LAKESIDE BASE CAMP • POKHARA, NEPAL
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
              GET IN TOUCH WITH BASE CAMP
            </h1>
            
            <p className="mt-5 text-slate-200 font-sans text-lg sm:text-xl leading-relaxed">
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
            <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-xs space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-slate-900 border-b border-slate-200 pb-4">
                Direct Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* WhatsApp Channel */}
                <div className="p-5 bg-emerald-50/50 rounded-sm border border-emerald-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <MessageCircle className="w-4 h-4" />
                      Direct WhatsApp
                    </div>
                    <p className="text-xs text-slate-600 mb-4">
                      Fastest response for instant availability, live route weather, and permit inquiries.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/9779812100453?text=Hello%20Himalayan%20Monster,%20I'm%20reaching%20out%20via%20your%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => Analytics.trackWhatsAppClick('Contact Page')}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-sm font-semibold rounded-sm transition-colors shadow-xs"
                  >
                    <span>Chat on WhatsApp (+977 981-2100453)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Telephone Channel */}
                <div className="p-5 bg-slate-50 rounded-sm border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#e06d2d] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <Phone className="w-4 h-4" />
                      Direct / Office Phone
                    </div>
                    <p className="text-xs text-slate-600 mb-4">
                      Pokhara Base Camp Reception & Expeditions Desk (07:00 – 20:00 NPT).
                    </p>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    onClick={() => Analytics.trackPhoneClick()}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white hover:bg-slate-100 text-slate-900 font-mono text-sm font-semibold rounded-sm transition-colors border border-slate-200 shadow-xs"
                  >
                    <span>{BUSINESS_INFO.telephone}</span>
                  </a>
                </div>

                {/* Email Channel */}
                <div className="p-5 bg-slate-50 rounded-sm border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#e06d2d] font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <Mail className="w-4 h-4" />
                      Expedition Desk
                    </div>
                    <p className="text-xs text-slate-600 mb-4">
                      Formal group inquiries, media requests, and custom route blueprints.
                    </p>
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    onClick={() => Analytics.trackEmailClick()}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white hover:bg-slate-100 text-slate-900 font-mono text-xs font-semibold rounded-sm transition-colors border border-slate-200 shadow-xs"
                  >
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                </div>

                {/* Operating Hours */}
                <div className="p-5 bg-slate-50 rounded-sm border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <Clock className="w-4 h-4 text-[#e06d2d]" />
                      Workshop Hours
                    </div>
                    <p className="text-xs text-slate-600 mb-4">
                      Open 7 days a week for fleet pickups, mechanical inspections, and route briefings.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#e06d2d] font-bold text-center py-2 bg-white border border-slate-200 rounded-sm">
                    07:00 – 20:00 NPT Daily
                  </div>
                </div>
              </div>

              {/* Physical Address Section */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="font-heading text-lg font-bold uppercase text-slate-900 mb-2">
                  Physical Base Location
                </h3>
                <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                  <p className="font-semibold text-slate-900">{BUSINESS_INFO.name} ({BUSINESS_INFO.legalName})</p>
                  <p>{BUSINESS_INFO.address.streetAddress}</p>
                  <p>{BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion} {BUSINESS_INFO.address.postalCode}, {BUSINESS_INFO.address.addressCountry}</p>
                  <p className="text-xs font-mono text-slate-500 pt-1">
                    GPS Coordinates: {BUSINESS_INFO.geo.latitude}° N, {BUSINESS_INFO.geo.longitude}° E
                  </p>
                </div>
              </div>

              {/* Official Social Media Profiles */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="font-heading text-lg font-bold uppercase text-slate-900 mb-3">
                  Official Social Dispatches
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/himalayanmonsternp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-[#e06d2d] text-slate-800 hover:text-white font-sans text-xs font-bold uppercase tracking-wider rounded-sm transition-colors border border-slate-200 shadow-xs"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram @himalayanmonsternp</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61593440248091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-[#e06d2d] text-slate-800 hover:text-white font-sans text-xs font-bold uppercase tracking-wider rounded-sm transition-colors border border-slate-200 shadow-xs"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook Official Page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking CTA & Assurance (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-sm border-2 border-[#e06d2d] shadow-xl space-y-6">
              <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block">
                EXPEDITION DISPATCH
              </span>
              
              <h2 className="font-heading text-3xl font-black uppercase text-slate-900 leading-tight">
                READY TO SECURE YOUR SEAT ON THE NEXT EXPEDITION?
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Submit an interactive tour booking request or rental inquiry. Our team will verify dates, check motorcycle availability, and provide an all-inclusive route breakdown.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black text-base py-4 px-6 rounded-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
              >
                <Compass className="w-5 h-5" />
                <span>BOOK AN EXPEDITION NOW</span>
              </button>

              <div className="pt-4 border-t border-slate-200 space-y-3 text-xs text-slate-500">
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
