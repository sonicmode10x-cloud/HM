import React from 'react';
import { useLogo } from '../context/LogoContext';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon' | 'badge';
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

  const config = logoContext?.config;
  const isCustomImage = config?.sourceType === 'custom-image' && Boolean(config?.customImageUrl);
  const isCrestIcon = config?.sourceType === 'crest-icon';

  // 1. If custom uploaded image / configured path is active:
  if (isCustomImage && config?.customImageUrl) {
    if (variant === 'compact') {
      const scale = config.navbarScale || 1.0;
      return (
        <div 
          className={`flex items-center gap-4 select-none ${className}`}
          style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}
        >
          <img
            src={config.customImageUrl}
            alt={config.customImageAlt || 'Himalayan Monster Logo'}
            className="max-h-20 sm:max-h-24 w-auto object-contain drop-shadow-md rounded-xs"
            loading="eager"
            decoding="async"
          />
        </div>
      );
    }

    if (variant === 'icon' || variant === 'badge') {
      return (
        <div className={`relative inline-block ${className}`} style={{ height: height === 'auto' ? '80px' : height }}>
          <img
            src={config.customImageUrl}
            alt={config.customImageAlt || 'Himalayan Monster Logo'}
            className="w-full h-full object-contain drop-shadow-md rounded-xs"
            loading="eager"
            decoding="async"
          />
        </div>
      );
    }

    // Default 'full' variant
    const scale = config.footerScale || 1.0;
    return (
      <div 
        className={`relative inline-flex flex-col items-center select-none ${className}`} 
        style={{ height, transform: `scale(${scale})`, transformOrigin: 'center center' }}
      >
        <img
          src={config.customImageUrl}
          alt={config.customImageAlt || 'Himalayan Monster Logo'}
          className="max-h-64 sm:max-h-80 md:max-h-96 w-auto object-contain drop-shadow-2xl rounded-xs"
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  // 2. If crest-icon preset is selected or requested:
  if (variant === 'icon' || isCrestIcon) {
    return (
      <div className={`relative inline-block ${className}`} style={{ height: height === 'auto' ? '80px' : height }}>
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

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        {/* Vector Pure Alpine Peaks + Enduro Wheel Emblem - 100% Larger */}
        <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 rounded-md overflow-hidden bg-gradient-to-b from-[#0F1B2E] to-[#080B12] border-2 border-[#e06d2d]/80 p-1 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Mountain Peaks */}
            <polygon points="50,10 72,42 28,42" fill="#0284C7" />
            <polygon points="50,10 58,24 42,24" fill="#FFFFFF" />
            <polygon points="24,22 42,46 6,46" fill="#0369A1" />
            <polygon points="24,22 30,30 18,30" fill="#E0F2FE" />
            <polygon points="76,20 94,46 58,46" fill="#0284C7" />
            <polygon points="76,20 82,29 70,29" fill="#E0F2FE" />

            {/* Dirt Bike Wheel Silhouette in Purple */}
            <circle cx="56" cy="72" r="16" stroke="#7C3AED" strokeWidth="4" fill="#18181B" />
            <circle cx="56" cy="72" r="6" fill="#A855F7" />
            <line x1="56" y1="56" x2="56" y2="88" stroke="#E2E8F0" strokeWidth="1.2" />
            <line x1="40" y1="72" x2="72" y2="72" stroke="#E2E8F0" strokeWidth="1.2" />
            
            {/* Dirt Spray Roost */}
            <circle cx="78" cy="74" r="2.5" fill="#7C3AED" />
            <circle cx="84" cy="67" r="2" fill="#9333EA" />
            <circle cx="88" cy="80" r="1.5" fill="#A855F7" />
            <circle cx="74" cy="84" r="2" fill="#7C3AED" />
          </svg>
        </div>

        {/* Multi-Color Typography Stack - 100% Larger */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-0.5 leading-none font-heading font-black tracking-wider uppercase">
            <span className="text-white text-2xl sm:text-3xl md:text-4xl font-black drop-shadow-sm">H</span>
            <span className="text-[#00AEEF] text-2xl sm:text-3xl md:text-4xl font-black drop-shadow-sm">i</span>
            <span className="text-white text-2xl sm:text-3xl md:text-4xl font-black drop-shadow-sm">MALAYAN</span>
          </div>
          <div className="flex items-center tracking-wider font-heading font-black text-lg sm:text-xl md:text-2xl leading-tight mt-0.5 sm:mt-1">
            <span className="text-[#DC2626]">M</span>
            <span className="text-[#EA580C]">O</span>
            <span className="text-[#F59E0B]">N</span>
            <span className="text-[#65A30D]">S</span>
            <span className="text-[#0284C7]">T</span>
            <span className="text-[#2563EB]">E</span>
            <span className="text-[#7C3AED] mr-2">R</span>
            <span className="text-xs sm:text-sm tracking-[0.2em] font-mono font-bold text-neutral-200 uppercase pl-1.5 border-l-2 border-[#e06d2d]">
              EXTREME TOURS
            </span>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT: EXACT REPRODUCTION OF USER'S ATTACHED IMAGE (Untitled design (1).jpg)
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 600 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-full drop-shadow-2xl"
      >
        <defs>
          {/* Main Peak Glacier Gradients */}
          <linearGradient id="mainPeakGrad" x1="300" y1="50" x2="300" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="25%" stopColor="#0284C7" />
            <stop offset="65%" stopColor="#0369A1" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="leftRidgeGrad" x1="220" y1="75" x2="220" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="35%" stopColor="#0284C7" />
            <stop offset="80%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="rightRidgeGrad" x1="380" y1="75" x2="380" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="35%" stopColor="#0369A1" />
            <stop offset="80%" stopColor="#0F172A" />
          </linearGradient>

          {/* Dirt Spray Roost Gradient */}
          <linearGradient id="roostGrad" x1="430" y1="240" x2="560" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4C1D95" />
            <stop offset="40%" stopColor="#6D28D9" />
            <stop offset="80%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#3B0764" />
          </linearGradient>
        </defs>

        {/* ========================================================
            1. PURE CLEAN HIMALAYAN MOUNTAIN PEAKS (Exact to Image 1)
        ======================================================== */}
        <g id="pure-mountain-peaks">
          {/* Far Left Outer Peak */}
          <polygon points="175,185 215,115 255,185" fill="#0C2340" />
          <polygon points="215,115 228,142 202,142" fill="#E0F2FE" />

          {/* Far Right Outer Peak */}
          <polygon points="345,185 385,115 425,185" fill="#0C2340" />
          <polygon points="385,115 398,142 372,142" fill="#E0F2FE" />

          {/* Mid-Left Intermediate Peak */}
          <polygon points="190,185 248,82 310,185" fill="url(#leftRidgeGrad)" />
          {/* Snow Cap & Spines Left */}
          <polygon points="248,82 268,124 255,120 246,138 234,122 220,130" fill="#FFFFFF" />
          <path d="M 248 82 L 252 110 L 244 135 L 250 162 L 246 185" stroke="#FFFFFF" strokeWidth="4.5" strokeLinejoin="round" />
          <polygon points="248,82 252,110 244,135 248,185 190,185" fill="#075985" opacity="0.45" />

          {/* Mid-Right Intermediate Peak */}
          <polygon points="290,185 352,82 410,185" fill="url(#rightRidgeGrad)" />
          {/* Snow Cap & Spines Right */}
          <polygon points="352,82 372,124 360,120 352,138 338,122 324,130" fill="#FFFFFF" />
          <path d="M 352 82 L 348 110 L 356 135 L 350 162 L 354 185" stroke="#FFFFFF" strokeWidth="4.5" strokeLinejoin="round" />
          <polygon points="352,82 348,110 356,135 352,185 410,185" fill="#075985" opacity="0.45" />

          {/* Tall Central Summit Peak */}
          <polygon points="220,185 300,42 380,185" fill="url(#mainPeakGrad)" />
          
          {/* Summit Snow Fields & Ice Arêtes */}
          <polygon points="300,42 332,96 316,90 306,116 292,94 270,102" fill="#FFFFFF" />
          <polygon points="300,42 270,102 280,130 294,112 306,116" fill="#F0F9FF" />

          {/* Central Knife-Edge Mountain Spine */}
          <path d="M 300 42 L 306 78 L 294 108 L 304 148 L 298 185" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 300 42 L 324 96 L 344 150" stroke="#38BDF8" strokeWidth="3" opacity="0.85" />
          <path d="M 300 42 L 278 96 L 256 150" stroke="#BAE6FD" strokeWidth="3" opacity="0.9" />

          {/* Ambient Blue Base Shadow */}
          <ellipse cx="300" cy="184" rx="140" ry="12" fill="#0369A1" opacity="0.2" />
        </g>

        {/* ========================================================
            2. "HiMALAYAN" TEXT (BRUSH TEXTURED NAVY WITH CYAN 'i')
        ======================================================== */}
        <g id="himalayan-text-group">
          {/* Crisp White Backing Decal Silhouette */}
          <text
            x="300"
            y="222"
            textAnchor="middle"
            fontFamily="'Impact', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="82"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="10"
            strokeLinejoin="round"
            letterSpacing="2.5"
          >
            H<tspan fill="#FFFFFF" stroke="#FFFFFF">i</tspan>MALAYAN
          </text>

          {/* Main Navy / Dark Blue Brush Letters */}
          <text
            x="300"
            y="222"
            textAnchor="middle"
            fontFamily="'Impact', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="82"
            fill="#0B1E38"
            letterSpacing="2.5"
          >
            H<tspan fill="#00AEEF">i</tspan>MALAYAN
          </text>
        </g>

        {/* ========================================================
            3. "MONSTER" MULTICOLOR LETTERS
        ======================================================== */}
        <g id="monster-letters-group">
          {/* White Outer Halo Contour */}
          <g stroke="#FFFFFF" strokeWidth="9" strokeLinejoin="round" fill="#FFFFFF">
            {/* M */}
            <path d="M 72 245 L 98 245 L 118 308 L 138 245 L 164 245 L 164 340 L 138 340 L 138 288 L 124 332 L 112 332 L 98 288 L 98 340 L 72 340 Z" />
            {/* O */}
            <path d="M 178 262 L 201 245 L 235 245 L 258 262 L 258 323 L 235 340 L 201 340 L 178 323 Z" />
            {/* N */}
            <path d="M 272 245 L 298 245 L 330 306 L 330 245 L 356 245 L 356 340 L 330 340 L 298 278 L 298 340 L 272 340 Z" />
            {/* S */}
            <path d="M 370 312 L 394 315 C 395 324 403 328 414 328 C 425 328 432 322 432 315 C 432 307 424 304 410 299 C 384 291 372 282 372 264 C 372 249 389 242 412 242 C 436 242 452 253 453 271 L 428 273 C 427 265 421 261 412 261 C 403 261 397 265 397 271 C 397 278 403 281 416 285 C 442 294 456 303 456 321 C 456 338 440 346 414 346 C 386 346 371 332 370 312 Z" />
            {/* T */}
            <path d="M 462 245 L 524 245 L 524 269 L 506 269 L 506 340 L 480 340 L 480 269 L 462 269 Z" />
            {/* E */}
            <path d="M 530 245 L 570 245 L 570 268 L 554 268 L 554 281 L 568 281 L 568 302 L 554 302 L 554 316 L 570 316 L 570 340 L 530 340 Z" />
            {/* R */}
            <path d="M 574 245 L 612 245 C 626 245 635 253 635 267 C 635 279 627 287 615 290 L 637 340 L 608 340 L 590 295 L 588 295 L 588 340 L 574 340 Z" />
          </g>

          {/* M - Crimson / Poppy Red */}
          <path
            d="M 72 245 L 98 245 L 118 308 L 138 245 L 164 245 L 164 340 L 138 340 L 138 288 L 124 332 L 112 332 L 98 288 L 98 340 L 72 340 Z"
            fill="#E52320"
          />

          {/* O - Bold Tangerine Orange (Hexagonal / Beveled Block) */}
          <path
            d="M 178 262 L 201 245 L 235 245 L 258 262 L 258 323 L 235 340 L 201 340 L 178 323 Z M 204 270 L 204 315 L 217 324 L 230 315 L 230 270 L 217 261 Z"
            fill="#EA580C"
          />

          {/* N - Golden Yellow / Warm Amber */}
          <path
            d="M 272 245 L 298 245 L 330 306 L 330 245 L 356 245 L 356 340 L 330 340 L 298 278 L 298 340 L 272 340 Z"
            fill="#F59E0B"
          />

          {/* S - Vivid Grass Green / Lime */}
          <path
            d="M 370 312 L 394 315 C 395 324 403 328 414 328 C 425 328 432 322 432 315 C 432 307 424 304 410 299 C 384 291 372 282 372 264 C 372 249 389 242 412 242 C 436 242 452 253 453 271 L 428 273 C 427 265 421 261 412 261 C 403 261 397 265 397 271 C 397 278 403 281 416 285 C 442 294 456 303 456 321 C 456 338 440 346 414 346 C 386 346 371 332 370 312 Z"
            fill="#65A30D"
          />

          {/* T - Peacock Cyan / Cerulean Blue */}
          <path
            d="M 462 245 L 524 245 L 524 269 L 506 269 L 506 340 L 480 340 L 480 269 L 462 269 Z"
            fill="#0284C7"
          />

          {/* E - Bold Royal Blue */}
          <path
            d="M 530 245 L 570 245 L 570 268 L 554 268 L 554 281 L 568 281 L 568 302 L 554 302 L 554 316 L 570 316 L 570 340 L 530 340 Z"
            fill="#2563EB"
          />

          {/* R - Royal Purple with Bike Fork Integration */}
          <path
            d="M 574 245 L 612 245 C 626 245 635 253 635 267 C 635 279 627 287 615 290 L 637 340 L 608 340 L 590 295 L 588 295 L 588 340 L 574 340 Z M 588 263 L 588 282 L 607 282 C 613 282 619 279 619 273 C 619 266 613 263 607 263 Z"
            fill="#7C3AED"
          />
        </g>

        {/* ========================================================
            4. ENDURO MOTORCYCLE & DIRT SPRAY ROOST (RIGHT OF 'R')
        ======================================================== */}
        <g id="enduro-bike-roost" transform="translate(132, 10) scale(0.92)">
          {/* Roost Splatters and Dirt Spray Droplets */}
          <g fill="url(#roostGrad)">
            {/* Dynamic high-velocity spray waves */}
            <path d="M 435 320 Q 490 355 545 365 Q 480 340 435 320" opacity="0.9" />
            <path d="M 445 295 Q 520 320 565 315 Q 490 300 445 295" opacity="0.95" />
            <path d="M 455 270 Q 540 280 575 258 Q 500 270 455 270" opacity="0.85" />
            
            {/* Fine mud/gravel roost drops */}
            <circle cx="500" cy="340" r="5" />
            <circle cx="528" cy="355" r="4" />
            <circle cx="555" cy="365" r="2.8" />
            <circle cx="510" cy="315" r="5.5" />
            <circle cx="542" cy="328" r="4.2" />
            <circle cx="570" cy="310" r="3.2" />
            <circle cx="495" cy="285" r="4.5" />
            <circle cx="532" cy="280" r="3.5" />
            <circle cx="558" cy="265" r="2.5" />
            <circle cx="475" cy="355" r="4" />
            <circle cx="490" cy="370" r="3" />
            <circle cx="460" cy="335" r="4.5" />
          </g>

          {/* Knobby Purple Dirt Bike Wheel */}
          <circle cx="450" cy="305" r="28" stroke="#3B0764" strokeWidth="10" strokeDasharray="6 3" fill="#09090B" />
          <circle cx="450" cy="305" r="16" stroke="#7C3AED" strokeWidth="3.5" fill="#18181B" />
          <circle cx="450" cy="305" r="7" fill="#A855F7" />
          
          {/* Wheel Spokes */}
          <line x1="450" y1="289" x2="450" y2="321" stroke="#E2E8F0" strokeWidth="1.8" />
          <line x1="434" y1="305" x2="466" y2="305" stroke="#E2E8F0" strokeWidth="1.8" />
          <line x1="438" y1="293" x2="462" y2="317" stroke="#E2E8F0" strokeWidth="1.8" />
          <line x1="438" y1="317" x2="462" y2="293" stroke="#E2E8F0" strokeWidth="1.8" />

          {/* Motorcycle Swingarm, Frame & Inverted Front Suspension */}
          <path d="M 450 305 L 420 270 L 392 265 L 415 240 L 442 252 Z" fill="#6D28D9" />
          <path d="M 420 270 L 450 305" stroke="#DDD6FE" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M 392 265 L 374 225" stroke="#7C3AED" strokeWidth="7" strokeLinecap="round" />
          <path d="M 374 225 L 352 238" stroke="#E2E8F0" strokeWidth="4.5" strokeLinecap="round" />

          {/* Enduro Front Mudguard & Fairing Cowl */}
          <path d="M 380 220 L 410 214 L 426 232 L 392 238 Z" fill="#7C3AED" />
          <path d="M 410 214 L 438 217 L 426 228 Z" fill="#9333EA" />
          <polygon points="384,222 396,218 392,230" fill="#FBBF24" />

          {/* Handlebars with Red Handguards */}
          <line x1="382" y1="210" x2="426" y2="204" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="382" cy="210" r="3.5" fill="#EF4444" />
          <circle cx="426" cy="204" r="3.5" fill="#EF4444" />
        </g>

        {/* ========================================================
            5. "EXTREME TOURS" SUBTITLE & ACCENT WEDGES
        ======================================================== */}
        <g id="extreme-tours-footer" transform="translate(0, 30)">
          {/* Left Red Tapered Wedge */}
          <polygon points="135,355 210,351 210,359" fill="#E52320" />

          {/* Centered Subtitle */}
          <text
            x="300"
            y="363"
            textAnchor="middle"
            fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
            fontWeight="900"
            fontSize="26"
            fill={lightMode ? "#0B1E38" : "#FFFFFF"}
            letterSpacing="8"
          >
            EXTREME TOURS
          </text>

          {/* Right Cyan Tapered Wedge */}
          <polygon points="465,355 390,351 390,359" fill="#00AEEF" />
        </g>
      </svg>
    </div>
  );
}
