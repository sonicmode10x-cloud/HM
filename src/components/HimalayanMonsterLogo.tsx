import React, { useState } from 'react';
import { useLogo } from '../context/LogoContext';
import defaultLogoSvg from '../assets/himalayan-monster-logo.svg';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon' | 'badge' | 'hero' | 'nav';
  height?: number | string;
  lightMode?: boolean;
}

export function HimalayanMonsterLogo({
  className = '',
  variant = 'full',
  height = 'auto',
  lightMode = false
}: LogoProps) {
  let logoContext;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    logoContext = useLogo();
  } catch {
    logoContext = null;
  }

  const [hasImgError, setHasImgError] = useState(false);
  const config = logoContext?.config;
  const logoSrc = config?.customImageUrl || defaultLogoSvg;
  const isCrestIcon = config?.sourceType === 'crest-icon';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== window.location.origin + '/himalayan-monster-logo.svg' && target.src !== '/himalayan-monster-logo.svg') {
      target.src = '/himalayan-monster-logo.svg';
    } else if (defaultLogoSvg && target.src !== defaultLogoSvg) {
      target.src = defaultLogoSvg;
    } else {
      setHasImgError(true);
    }
  };

  // 1. If crest-icon preset is selected or requested:
  if (isCrestIcon || variant === 'icon') {
    return (
      <div className={`relative inline-block ${className}`} style={{ height: height === 'auto' ? '48px' : height }}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Background Rounded Shield */}
          <rect width="100" height="100" rx="18" fill="#0B132B" stroke="#e06d2d" strokeWidth="2.5" />
          
          {/* Sharp Alpine Peaks */}
          <polygon points="50,16 68,44 32,44" fill="#0284C7" />
          <polygon points="50,16 57,28 43,28" fill="#FFFFFF" />
          <polygon points="26,26 40,46 12,46" fill="#0369A1" />
          <polygon points="26,26 31,33 21,33" fill="#E0F2FE" />
          <polygon points="74,24 88,46 60,46" fill="#0369A1" />
          <polygon points="74,24 79,32 69,32" fill="#E0F2FE" />

          {/* HM Monogram */}
          <text
            x="50"
            y="74"
            textAnchor="middle"
            fontFamily="'Impact', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="34"
            fill="#FFFFFF"
            letterSpacing="-1"
          >
            H<tspan fill="#DC2626">M</tspan>
          </text>
          
          {/* Roost Arc */}
          <path
            d="M 20 86 Q 50 94 80 86"
            stroke="#e06d2d"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // 2. Compact / Nav variant for header bars
  if (variant === 'compact' || variant === 'nav') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {!hasImgError ? (
          <img
            src={logoSrc}
            alt={config?.customImageAlt || 'Himalayan Monster Logo'}
            className="h-20 sm:h-22 md:h-24 w-auto object-contain drop-shadow-sm max-h-[96px]"
            loading="eager"
            decoding="async"
            onError={handleImageError}
          />
        ) : (
          <div className="flex items-center gap-2.5">
            <div className="w-16 h-16 rounded-sm bg-slate-900 text-[#e06d2d] flex items-center justify-center font-heading font-black text-2xl border border-slate-700 shadow-sm">
              HM
            </div>
            <div className="leading-tight">
              <span className="font-heading font-black text-lg sm:text-xl tracking-wider uppercase text-slate-900 block">
                HIMALAYAN <span className="text-[#e06d2d]">MONSTER</span>
              </span>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block font-bold">
                EXPEDITIONS • NEPAL
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 3. Hero variant: Large visual centerpiece
  if (variant === 'hero') {
    return (
      <div className={`relative inline-block select-none ${className}`}>
        {!hasImgError ? (
          <img
            src={logoSrc}
            alt={config?.customImageAlt || 'Himalayan Monster Official Logo'}
            className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-xl"
            loading="eager"
            decoding="async"
            onError={handleImageError}
          />
        ) : (
          <div className="p-6 bg-slate-900 border border-slate-700 rounded-sm text-white shadow-xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              HIMALAYAN <span className="text-[#e06d2d]">MONSTER</span>
            </h2>
            <p className="font-mono text-xs text-slate-300 uppercase tracking-widest mt-1">
              POKHARA • ANNAPURNA & MUSTANG EXPEDITIONS
            </p>
          </div>
        )}
      </div>
    );
  }

  // 4. Badge / Emblem standalone
  if (variant === 'badge') {
    return (
      <div className={`relative inline-block ${className}`} style={{ height: height === 'auto' ? '64px' : height }}>
        <img
          src={logoSrc}
          alt={config?.customImageAlt || 'Himalayan Monster Logo Badge'}
          className="h-full w-auto object-contain drop-shadow-md"
          loading="eager"
          decoding="async"
          onError={handleImageError}
        />
      </div>
    );
  }

  // 5. Default 'full' variant
  return (
    <div 
      className={`relative inline-flex flex-col items-center select-none ${className}`} 
      style={{ height: height === 'auto' ? undefined : height }}
    >
      <img
        src={logoSrc}
        alt={config?.customImageAlt || 'Himalayan Monster Logo'}
        className="max-h-56 sm:max-h-72 w-auto object-contain drop-shadow-2xl"
        loading="eager"
        decoding="async"
        onError={handleImageError}
      />
    </div>
  );
}
