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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || currentView !== 'home'
            ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
        }`}
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
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`font-heading tracking-widest text-sm font-bold uppercase transition-all duration-200 cursor-pointer ${
                  currentView === item.view
                    ? 'text-[#e06d2d] border-b-2 border-[#e06d2d] pb-0.5'
                    : 'text-neutral-300 hover:text-white hover:border-b-2 hover:border-white/40 pb-0.5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/9779800000000?text=Hello%20Himalayan%20Monster,%20I'm%20interested%20in%20planning%20a%20ride%20in%20Nepal."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Analytics.trackWhatsAppClick('Navbar')}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2.5 rounded-sm border border-white/10 transition-colors"
              title="Chat with our Pokhara Base on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black tracking-wider px-6 py-2.5 rounded-sm text-sm uppercase transition-all duration-200 shadow-md hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#e06d2d] text-black font-heading font-black text-xs px-3 py-1.5 rounded-sm tracking-wider uppercase"
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-200 hover:text-white bg-white/5 rounded-sm border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0c0e]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-[#e06d2d] tracking-widest">
                Pokhara • Nepal
              </span>
              <p className="font-heading text-2xl font-bold text-white mt-1">
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
                  className="flex items-center justify-between py-2 text-left font-heading text-2xl font-bold tracking-wider text-neutral-200 hover:text-[#e06d2d] border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-neutral-500" />
                </button>
              ))}
            </nav>

            <div className="pt-4 space-y-2">
              <button
                onClick={() => {
                  onNavigate('stories');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 font-sans text-sm text-neutral-400 hover:text-white flex items-center justify-between"
              >
                <span>Adventure Stories & Route Guides</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
              <button
                onClick={() => {
                  onNavigate('faq');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 font-sans text-sm text-neutral-400 hover:text-white flex items-center justify-between"
              >
                <span>Permits & FAQ</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('admin');
                }}
                className="w-full text-left py-2 font-sans text-sm text-[#e06d2d] hover:text-white flex items-center justify-between border-t border-white/10 pt-3"
              >
                <span className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span>Admin Logo & Brand Studio</span>
                </span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#e06d2d] text-black font-heading font-black tracking-wider py-3.5 rounded-sm text-lg uppercase flex items-center justify-center gap-2"
            >
              <Compass className="w-5 h-5" />
              <span>BOOK AN EXPEDITION</span>
            </button>

            <a
              href="https://wa.me/9779800000000?text=Hello%20Himalayan%20Monster,%20I%20am%20interested%20in%20a%20tour%20or%20rental."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700/80 text-white font-sans font-semibold py-3 rounded-sm text-sm flex items-center justify-center gap-2 border border-emerald-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp with Base (+977)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
