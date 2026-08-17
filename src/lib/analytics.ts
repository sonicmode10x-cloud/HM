// Centralized Google Analytics 4 (GA4) Integration & Conversion Event Tracker

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GA_MEASUREMENT_ID) || '';

let isInitialized = false;

/**
 * Safely initialize Google Analytics 4 if measurement ID is present.
 * Uses lazy loading and will never crash if the ID is missing.
 */
export function initGoogleAnalytics(): void {
  if (isInitialized || typeof window === 'undefined' || !GA_MEASUREMENT_ID) {
    return;
  }

  try {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false // We handle page views manually on SPA route transitions
    });

    // Dynamically inject the gtag script tag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    isInitialized = true;
  } catch (err) {
    // Fail silently in development or if blocked by browser extensions
    console.warn('[Analytics] Failed to initialize GA4:', err);
  }
}

/**
 * Track an individual SPA page view
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href
  });
}

/**
 * Track custom user engagement or conversion event
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag('event', eventName, params);
}

/**
 * Specific Business Conversion Trackers
 */
export const Analytics = {
  // Booking / Expedition Inquiry Submission
  trackBookingSubmission: (data: {
    tourId?: string;
    tourTitle?: string;
    category?: string;
    riderCount?: number;
    durationDays?: number;
    bookingType?: string;
  }) => {
    trackEvent('generate_lead', {
      event_category: 'Booking',
      event_label: data.tourTitle || 'Custom Expedition',
      tour_id: data.tourId,
      category: data.category,
      rider_count: data.riderCount,
      duration_days: data.durationDays,
      booking_type: data.bookingType,
      value: 1
    });
  },

  // WhatsApp Click conversion
  trackWhatsAppClick: (source: string) => {
    trackEvent('contact', {
      method: 'whatsapp',
      event_category: 'Direct Messaging',
      event_label: `WhatsApp click from ${source}`
    });
  },

  // Direct Phone Call click conversion
  trackPhoneClick: (source: string = 'General') => {
    trackEvent('contact', {
      method: 'phone',
      event_category: 'Call Base Camp',
      event_label: `Direct Phone Call Click from ${source}`
    });
  },

  // Email Inquiry click conversion
  trackEmailClick: (source: string = 'General') => {
    trackEvent('contact', {
      method: 'email',
      event_category: 'Email Outfitter',
      event_label: `Direct Email Click from ${source}`
    });
  },

  // Tour View Engagement
  trackTourView: (tourTitle: string, category: string, slug: string) => {
    trackEvent('view_item', {
      item_id: slug,
      item_name: tourTitle,
      item_category: category,
      event_category: 'Tour Inspection'
    });
  },

  // Article / Blog Read Engagement
  trackArticleRead: (articleTitle: string, slug: string) => {
    trackEvent('read_article', {
      article_slug: slug,
      article_title: articleTitle,
      event_category: 'Content Reading'
    });
  }
};
