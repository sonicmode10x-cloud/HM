import React, { useEffect } from 'react';
import { CANONICAL_DOMAIN, BUSINESS_INFO, getCanonicalUrl } from '../lib/seo';
import { trackPageView } from '../lib/analytics';

export interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Utility helper to safely set or update a <meta> tag in document.head
 */
function setMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string): void {
  if (typeof document === 'undefined') return;

  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Utility helper to safely set or update the <link rel="canonical"> tag
 */
function setCanonicalTag(url: string): void {
  if (typeof document === 'undefined') return;

  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

/**
 * Utility helper to safely inject or update JSON-LD structured data in document.head
 */
function setJsonLdScript(data?: Record<string, any> | Array<Record<string, any>>): void {
  if (typeof document === 'undefined') return;

  const scriptId = 'himalayan-monster-jsonld';
  let element = document.getElementById(scriptId) as HTMLScriptElement;

  if (!data) {
    if (element) {
      element.remove();
    }
    return;
  }

  if (!element) {
    element = document.createElement('script');
    element.id = scriptId;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data, null, 2);
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  keywords,
  jsonLd
}) => {
  useEffect(() => {
    const fullCanonicalUrl = getCanonicalUrl(canonicalPath);
    const resolvedOgTitle = ogTitle || title;
    const resolvedOgDescription = ogDescription || description;
    const resolvedOgImage = ogImage || BUSINESS_INFO.defaultOgImage;

    // 1. Update Document Title
    document.title = title;

    // 2. Update Standard SEO Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }
    setCanonicalTag(fullCanonicalUrl);

    // 3. Update Open Graph (Facebook / LinkedIn / Slack / WhatsApp)
    setMetaTag('property', 'og:site_name', BUSINESS_INFO.name);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', resolvedOgTitle);
    setMetaTag('property', 'og:description', resolvedOgDescription);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:image', resolvedOgImage);

    // 4. Update Twitter / X Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', resolvedOgTitle);
    setMetaTag('name', 'twitter:description', resolvedOgDescription);
    setMetaTag('name', 'twitter:image', resolvedOgImage);

    // 5. Inject Schema.org JSON-LD Structured Data
    setJsonLdScript(jsonLd);

    // 6. Track SPA Page View in GA4
    trackPageView(canonicalPath, title);
  }, [
    title,
    description,
    canonicalPath,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    keywords,
    jsonLd
  ]);

  return null;
};
