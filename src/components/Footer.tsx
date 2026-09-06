import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, Compass, ArrowUpRight } from 'lucide-react';
import { HimalayanMonsterLogo } from './HimalayanMonsterLogo';
import { Analytics } from '../lib/analytics';

interface FooterProps {
  onNavigate: (view: string, slug?: string) => void;
  onSelectSeoPage: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectSeoPage }) => {
  const seoLinks = [
    { label: 'Motorcycle Tours Pokhara', slug: 'motorcycle-tours-pokhara' },
    { label: 'Motorcycle Tours Nepal', slug: 'motorcycle-tours-nepal' },
    { label: 'Motorbike Rental Pokhara', slug: 'motorbike-rental-pokhara' },
    { label: 'MTB Tours Pokhara', slug: 'mtb-tours-pokhara' },
    { label: 'Mountain Bike Rental Pokhara', slug: 'mountain-bike-rental-pokhara' },
    { label: 'E-MTB Pokhara Experiences', slug: 'e-mtb-pokhara' },
    { label: 'Upper Mustang Motorcycle Tour', slug: 'upper-mustang-motorcycle-tour' },
    { label: 'Mustang MTB Singletrack Tour', slug: 'mustang-mtb-tour' },
    { label: 'Annapurna Motorcycle Tour', slug: 'annapurna-motorcycle-tour' },
    { label: 'Manang Motorcycle Tour', slug: 'manang-motorcycle-tour' },
    { label: 'Jomsom 3-Day Motorcycle Tour', slug: 'pokhara-jomsom-motorcycle-tour' }
  ];

  return (
    <footer className="bg-slate-50 text-slate-900 border-t border-slate-200 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-4">
              <HimalayanMonsterLogo variant="compact" />
            </div>

            <p className="font-heading text-lg font-bold tracking-widest text-[#e06d2d] uppercase">
              TWO WHEELS. WILD NEPAL.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Pokhara-based two-wheel adventure company specializing in motorcycle tours, MTB expeditions, E-MTB experiences, and high-altitude bike rentals across Nepal.
            </p>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/himalayanmonsternp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white hover:bg-[#e06d2d] text-slate-700 hover:text-white flex items-center justify-center transition-colors border border-slate-200 shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593440248091"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white hover:bg-[#e06d2d] text-slate-700 hover:text-white flex items-center justify-center transition-colors border border-slate-200 shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white hover:bg-[#e06d2d] text-slate-700 hover:text-white flex items-center justify-center transition-colors border border-slate-200 shadow-xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#e06d2d] mb-4">
              EXPEDITIONS & RIDES
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <button onClick={() => onNavigate('expeditions')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  All Expeditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('motorcycles')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  Motorcycle Tours (Himalayan 450)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mtb')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  MTB & Enduro Expeditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('e-mtb')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  E-MTB Ridge Experiences
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rentals')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  Bike & Motorcycle Rentals
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Information (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#e06d2d] mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  About Us & Ethos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  Contact Base Camp
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('stories')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  Adventure Stories (Blog)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  Permits & FAQ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('private')} className="hover:text-[#e06d2d] transition-colors cursor-pointer">
                  Private / Custom Tours
                </button>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <button onClick={() => onNavigate('admin')} className="text-slate-400 hover:text-[#e06d2d] transition-colors cursor-pointer flex items-center gap-1.5 font-mono text-xs">
                  <span>Base Camp Admin</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Pokhara Contact & Base Camp (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#e06d2d] mb-4">
              POKHARA BASE CAMP
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e06d2d] shrink-0 mt-0.5" />
                <span>Lakeside, Pokhara-6, Gandaki Province, Nepal</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href="https://wa.me/9779812100453?text=Hello%20Himalayan%20Monster"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => Analytics.trackWhatsAppClick('Footer')}
                  className="hover:underline font-mono text-emerald-600 font-bold"
                >
                  WhatsApp: +977 981-2100453
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e06d2d] shrink-0" />
                <a
                  href="tel:+9779812100453"
                  onClick={() => Analytics.trackPhoneClick('Footer')}
                  className="font-mono hover:text-[#e06d2d] transition-colors text-slate-700"
                >
                  +977 981-2100453
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e06d2d] shrink-0" />
                <a 
                  href="mailto:ride@himalayanmonster.com" 
                  onClick={() => Analytics.trackEmailClick('Footer')}
                  className="hover:underline font-mono text-slate-700"
                >
                  ride@himalayanmonster.com
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Operating Hours: 07:00 – 20:00 NPT Daily
            </div>
          </div>
        </div>

        {/* SEO Landing Pages Directory Grid */}
        <div className="pt-10 pb-8 border-t border-slate-200">
          <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4 font-bold">
            TOP SEO DESTINATIONS & RENTAL ROUTES (NEPAL)
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-slate-600 font-sans">
            {seoLinks.map((link) => (
              <button
                key={link.slug}
                onClick={() => onSelectSeoPage(link.slug)}
                className="hover:text-[#e06d2d] transition-colors text-left cursor-pointer flex items-center gap-1"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Himalayan Monster. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Pokhara, Nepal</span>
            <span>•</span>
            <span>Two Wheels. Wild Nepal.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
