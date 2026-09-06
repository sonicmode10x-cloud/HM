import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import defaultLogoSvg from '../assets/himalayan-monster-logo.svg';

export interface LogoConfig {
  sourceType: 'default-vector' | 'custom-image' | 'crest-icon';
  customImageUrl: string | null;
  customImageAlt: string;
  navbarScale: number; // e.g. 1.0 (100%)
  footerScale: number;
  bannerScale: number;
  preserveVectorColors: boolean;
}

export const DEFAULT_LOGO_CONFIG: LogoConfig = {
  sourceType: 'custom-image',
  customImageUrl: defaultLogoSvg,
  customImageAlt: 'Himalayan Monster Extreme Tours Pokhara Nepal',
  navbarScale: 2.0, // Increased by 100% (2x)
  footerScale: 2.0, // Increased by 100% (2x)
  bannerScale: 2.0, // Increased by 100% (2x)
  preserveVectorColors: true
};

const STORAGE_KEY = 'himalayan_monster_logo_config_v2';

interface LogoContextType {
  config: LogoConfig;
  updateLogoImage: (url: string | null, alt?: string) => void;
  updateSourceType: (type: LogoConfig['sourceType']) => void;
  updateScale: (type: 'navbar' | 'footer' | 'banner', scale: number) => void;
  resetToDefault: () => void;
  isCustomImageActive: boolean;
  isConfigModalOpen: boolean;
  setIsConfigModalOpen: (open: boolean) => void;
}

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export const LogoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<LogoConfig>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_LOGO_CONFIG, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('Failed to parse logo config from localStorage:', e);
    }
    return DEFAULT_LOGO_CONFIG;
  });

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Sync to localStorage whenever config updates
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (e) {
      console.warn('Failed to save logo config to localStorage:', e);
    }
  }, [config]);

  const updateLogoImage = (url: string | null, alt?: string) => {
    setConfig((prev) => ({
      ...prev,
      sourceType: url ? 'custom-image' : 'default-vector',
      customImageUrl: url,
      customImageAlt: alt || prev.customImageAlt
    }));
  };

  const updateSourceType = (sourceType: LogoConfig['sourceType']) => {
    setConfig((prev) => ({
      ...prev,
      sourceType
    }));
  };

  const updateScale = (type: 'navbar' | 'footer' | 'banner', scale: number) => {
    setConfig((prev) => ({
      ...prev,
      [`${type}Scale`]: Math.max(0.5, Math.min(4.0, scale))
    }));
  };

  const resetToDefault = () => {
    setConfig(DEFAULT_LOGO_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to remove logo config from localStorage:', e);
    }
  };

  const isCustomImageActive = config.sourceType === 'custom-image' && !!config.customImageUrl;

  return (
    <LogoContext.Provider
      value={{
        config,
        updateLogoImage,
        updateSourceType,
        updateScale,
        resetToDefault,
        isCustomImageActive,
        isConfigModalOpen,
        setIsConfigModalOpen
      }}
    >
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = (): LogoContextType => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};
