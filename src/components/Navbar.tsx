import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone, ChevronRight, MessageCircle, Upload, Sliders } from 'lucide-react';
import { HimalayanMonsterLogo } from './HimalayanMonsterLogo';
import { Analytics } from '../lib/analytics';
import { useLogo } from '../context/LogoContext';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, slug?: string) => void;
  onOpenBooking: (tourSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsConfigModalOpen, isCustomImageActive } = useLogo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'EXPEDITIONS', view: 'expeditions' },
    { label: 'MOTO TOURS', view: 'motorcycles' },
    { label: 'MTB', view: 'mtb' },
    { label: 'RENTALS', view: 'rentals' },
    { label: 'ABOUT US', view: 'about' },
    { label: 'CONTACT', view: 'contact' }
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 py-3 sm:py-3.5 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Official Himalayan Monster Styling */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center text-left group cursor-pointer focus:outline-none"
            aria-label="Himalayan Monster Home"
          >
            <HimalayanMonsterLogo variant="compact" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`font-heading tracking-wider text-base lg:text-[17px] font-extrabold uppercase transition-all duration-200 cursor-pointer ${
                  currentView === item.view
                    ? 'text-[#e06d2d] border-b-2 border-[#e06d2d] pb-0.5'
                    : 'text-slate-800 hover:text-[#e06d2d] hover:border-b-2 hover:border-[#e06d2d]/50 pb-0.5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/9779812100453?text=Hello%20Himalayan%20Monster,%20I'm%20interested%20in%20planning%20a%20ride%20in%20Nepal."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Analytics.trackWhatsAppClick('Navbar')}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 px-3.5 py-2.5 rounded-sm border border-slate-200 transition-colors"
              title="Chat with our Pokhara Base on WhatsApp (+977 981-2100453)"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="bg-[#e06d2d] hover:bg-[#d45e1d] text-white font-heading font-black tracking-wider px-6 py-2.5 rounded-sm text-base uppercase transition-all duration-200 shadow-sm hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#e06d2d] text-white font-heading font-black text-xs px-3 py-1.5 rounded-sm tracking-wider uppercase"
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 rounded-sm border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200 border-b border-slate-200">
          <div className="space-y-4">
            <div className="pb-4 border-b border-slate-200">
              <span className="text-xs font-mono uppercase text-[#e06d2d] tracking-widest font-bold">
                Pokhara • Nepal
              </span>
              <p className="font-heading text-2xl font-black text-slate-900 mt-1">
                TWO WHEELS. WILD NEPAL.
              </p>
            </div>

            <nav className="flex flex-col space-y-3 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.view);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-2 text-left font-heading text-2xl font-bold tracking-wider text-slate-800 hover:text-[#e06d2d] border-b border-slate-100"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>
              ))}
            </nav>

            <div className="pt-4 space-y-2">
              <button
                onClick={() => {
                  onNavigate('stories');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 font-sans text-sm text-slate-600 hover:text-slate-900 flex items-center justify-between"
              >
                <span>Adventure Stories & Route Guides</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  onNavigate('faq');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 font-sans text-sm text-slate-600 hover:text-slate-900 flex items-center justify-between"
              >
                <span>Permits & FAQ</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('admin');
                }}
                className="w-full text-left py-2 font-sans text-sm text-[#e06d2d] hover:text-[#d45e1d] flex items-center justify-between border-t border-slate-200 pt-3 font-semibold"
              >
                <span className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span>Admin Logo & Brand Studio</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#e06d2d] text-white font-heading font-black tracking-wider py-3.5 rounded-sm text-lg uppercase flex items-center justify-center gap-2 shadow-sm"
            >
              <Compass className="w-5 h-5" />
              <span>BOOK AN EXPEDITION</span>
            </button>

            <a
              href="https://wa.me/9779812100453?text=Hello%20Himalayan%20Monster,%20I%20am%20interested%20in%20a%20tour%20or%20rental."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white font-sans font-semibold py-3 rounded-sm text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp (+977 981-2100453)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
