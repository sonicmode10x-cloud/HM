import React, { useState } from 'react';
import { 
  X, Calendar, Users, Bike, Compass, CheckCircle2, 
  MessageCircle, Send, ShieldCheck, DollarSign, HelpCircle 
} from 'lucide-react';
import { HimalayanMonsterLogo } from './HimalayanMonsterLogo';
import { Expedition, FleetBike, BookingFormData, TourCategory } from '../types';
import { Analytics } from '../lib/analytics';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tours: Expedition[];
  fleet: FleetBike[];
  initialTourSlug?: string;
  initialCategory?: TourCategory | 'rental';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  tours,
  fleet,
  initialTourSlug,
  initialCategory = 'motorcycle'
}) => {
  const selectedTour = tours.find((t) => t.slug === initialTourSlug) || tours[0];

  const [formData, setFormData] = useState<BookingFormData>({
    tourId: selectedTour?.id || 'upper-mustang-motorcycle',
    tourTitle: selectedTour?.title || 'Upper Mustang Himalayan Expedition',
    category: initialCategory,
    bookingType: 'group',
    preferredDate: '',
    durationDays: selectedTour?.durationDays || 12,
    riderCount: 1,
    pillionCount: 0,
    preferredBike: 'Royal Enfield Himalayan 450',
    ridingExperience: 'intermediate',
    fullName: '',
    email: '',
    whatsappNumber: '',
    country: '',
    addRidingGear: false,
    addSupportVehicle: true,
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleTourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tour = tours.find((t) => t.id === e.target.value);
    if (tour) {
      setFormData({
        ...formData,
        tourId: tour.id,
        tourTitle: tour.title,
        durationDays: tour.durationDays,
        preferredBike: tour.bikeProvided.split('/')[0].trim()
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Analytics.trackBookingSubmission({
      tourId: formData.tourId,
      tourTitle: formData.tourTitle,
      category: formData.category,
      riderCount: formData.riderCount,
      durationDays: formData.durationDays,
      bookingType: formData.bookingType
    });
    setIsSubmitted(true);
  };

  const generateWhatsappUrl = () => {
    const msg = encodeURIComponent(
      `Hello Himalayan Monster! Booking inquiry from ${formData.fullName || 'a rider'}:\n` +
      `• Tour / Rental: ${formData.tourTitle}\n` +
      `• Type: ${formData.bookingType.toUpperCase()}\n` +
      `• Date: ${formData.preferredDate || 'Flexible'}\n` +
      `• Riders: ${formData.riderCount} (Pillions: ${formData.pillionCount})\n` +
      `• Machine: ${formData.preferredBike}\n` +
      `• Experience: ${formData.ridingExperience}\n` +
      `• Email: ${formData.email}\n` +
      `• Country: ${formData.country}\n` +
      `• Notes: ${formData.notes || 'None'}`
    );
    return `https://wa.me/9779800000000?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#16161c] border border-white/20 rounded-sm max-w-2xl w-full my-8 p-6 sm:p-10 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white p-2 text-xl font-mono cursor-pointer"
          aria-label="Close booking modal"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="mb-3">
                <HimalayanMonsterLogo variant="compact" />
              </div>
              <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-1">
                POKHARA BASE RESERVATIONS • DIRECT INSTANT CONFIRMATION
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                EXPEDITION & RENTAL BOOKING
              </h2>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-1">
                Fill in your riding details below. Instant confirmation voucher & route briefing will be issued.
              </p>
            </div>

            {/* Tour & Booking Type Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 uppercase">
                  Select Tour / Service
                </label>
                <select
                  value={formData.tourId}
                  onChange={handleTourChange}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                >
                  <optgroup label="Multi-Day Expeditions">
                    {tours.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} ({t.durationLabel})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Independent Rentals">
                    <option value="rental-motorcycle">Motorbike Rental (Himalayan 450 / CRF300L / KTM 390)</option>
                    <option value="rental-mtb">Mountain Bike Rental (Enduro & Full Suspension)</option>
                  </optgroup>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 uppercase">
                  Expedition Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, bookingType: 'group' })}
                    className={`py-2.5 px-3 rounded-sm font-heading font-bold text-xs uppercase transition-colors border ${
                      formData.bookingType === 'group'
                        ? 'bg-[#e06d2d] text-black border-[#e06d2d]'
                        : 'bg-[#1c1c24] text-neutral-300 border-white/10'
                    }`}
                  >
                    Group Tour
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, bookingType: 'private' })}
                    className={`py-2.5 px-3 rounded-sm font-heading font-bold text-xs uppercase transition-colors border ${
                      formData.bookingType === 'private'
                        ? 'bg-[#e06d2d] text-black border-[#e06d2d]'
                        : 'bg-[#1c1c24] text-neutral-300 border-white/10'
                    }`}
                  >
                    Private Custom
                  </button>
                </div>
              </div>
            </div>

            {/* Date & Machine Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 uppercase">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 uppercase">
                  Preferred Machine
                </label>
                <select
                  value={formData.preferredBike}
                  onChange={(e) => setFormData({ ...formData, preferredBike: e.target.value })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                >
                  <option value="Royal Enfield Himalayan 450">Royal Enfield Himalayan 450</option>
                  <option value="Honda CRF300L Dual-Sport">Honda CRF300L Dual-Sport</option>
                  <option value="Royal Enfield Scram 411">Royal Enfield Scram 411</option>
                  <option value="Hero XPulse 200 4V">Hero XPulse 200 4V Rally</option>
                  <option value="Trek Slash Pro Enduro MTB">Trek Slash / Stumpjumper Enduro MTB</option>
                  <option value="Specialized Turbo Levo E-MTB">Specialized Turbo Levo E-MTB (700Wh)</option>
                  <option value="Trek Rail 9.7 Bosch E-MTB">Trek Rail 9.7 Bosch E-MTB (750Wh)</option>
                </select>
              </div>
            </div>

            {/* Number of Riders & Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 uppercase">
                  Riders Count
                </label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={formData.riderCount}
                  onChange={(e) => setFormData({ ...formData, riderCount: parseInt(e.target.value) || 1 })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 uppercase">
                  Pillion Passengers
                </label>
                <input
                  type="number"
                  min="0"
                  max="6"
                  value={formData.pillionCount}
                  onChange={(e) => setFormData({ ...formData, pillionCount: parseInt(e.target.value) || 0 })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 uppercase">
                  Riding Experience
                </label>
                <select
                  value={formData.ridingExperience}
                  onChange={(e) => setFormData({ ...formData, ridingExperience: e.target.value as any })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                >
                  <option value="beginner">Beginner / Gravel</option>
                  <option value="intermediate">Intermediate (2+ yrs)</option>
                  <option value="advanced">Advanced Off-Road</option>
                  <option value="pro">Pro / Rally / Enduro</option>
                </select>
              </div>
            </div>

            {/* Rider Contact Information */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              <div className="font-mono text-xs text-[#e06d2d] uppercase font-bold">
                Rider Contact Details
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number (with Country Code) *"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                />

                <input
                  type="text"
                  required
                  placeholder="Country of Residence *"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Special requests, dietary preferences, or specific route questions..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#1c1c24] border border-white/15 rounded-sm p-3 text-sm text-white font-sans focus:border-[#e06d2d] focus:outline-none"
              />
            </div>

            {/* Submit & 1-Click WhatsApp Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                className="w-full bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-base tracking-wider py-4 px-6 rounded-sm uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <Compass className="w-5 h-5" />
                <span>CONFIRM BOOKING INQUIRY</span>
              </button>

              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-xs py-3 px-4 rounded-sm flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Or Send Directly via WhatsApp (+977 Pokhara Base)</span>
              </a>
            </div>
          </form>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#e06d2d]/20 text-[#e06d2d] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-1">
                INQUIRY REGISTERED • POKHARA DISPATCH
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white">
                SEE YOU ON THE HIMALAYAN TRAIL!
              </h2>
            </div>

            <div className="bg-[#1c1c24] p-6 rounded-sm border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs font-mono text-neutral-300">
              <div><strong className="text-white">Rider:</strong> {formData.fullName} ({formData.country})</div>
              <div><strong className="text-white">Expedition:</strong> {formData.tourTitle}</div>
              <div><strong className="text-white">Target Date:</strong> {formData.preferredDate || 'To be confirmed'}</div>
              <div><strong className="text-white">Machine:</strong> {formData.preferredBike}</div>
              <div><strong className="text-white">Riders:</strong> {formData.riderCount} Rider(s)</div>
            </div>

            <p className="font-sans text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Our Pokhara operations team has received your request. We will review bike availability and permit requirements and reply to your WhatsApp ({formData.whatsappNumber}) and email within 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold py-3 px-6 rounded-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Instant WhatsApp Chat</span>
              </a>

              <button
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 text-white font-sans text-xs py-3 px-6 rounded-sm uppercase"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
