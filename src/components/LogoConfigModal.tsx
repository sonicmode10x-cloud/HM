import React, { useState, useRef } from 'react';
import { 
  X, Upload, Link, RotateCcw, Check, Sparkles, Image as ImageIcon, 
  Eye, Sliders, Shield, Info, Trash2, ArrowRight
} from 'lucide-react';
import { useLogo, DEFAULT_LOGO_CONFIG } from '../context/LogoContext';
import { HimalayanMonsterLogo } from './HimalayanMonsterLogo';

interface LogoConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoConfigModal: React.FC<LogoConfigModalProps> = ({ isOpen, onClose }) => {
  const { config, updateLogoImage, updateSourceType, updateScale, resetToDefault } = useLogo();
  
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets' | 'scaling'>('upload');
  const [urlInput, setUrlInput] = useState(config.customImageUrl || '');
  const [urlError, setUrlError] = useState('');
  const [previewBg, setPreviewBg] = useState<'dark' | 'light' | 'grid'>('dark');
  const [dragActive, setDragActive] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (PNG, SVG, JPG, WebP)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast('Image size exceeds 5MB. Please choose a smaller image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        updateLogoImage(dataUrl, file.name);
        setUrlInput(dataUrl);
        showToast('Custom logo uploaded & applied across the site!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setUrlError('Please enter a valid image URL or relative path (e.g. /logo.png)');
      return;
    }
    setUrlError('');
    updateLogoImage(urlInput.trim());
    showToast('Logo path updated and applied!');
  };

  const handleReset = () => {
    resetToDefault();
    setUrlInput('');
    setUrlError('');
    showToast('Reverted to official Himalayan Monster vector artwork.');
  };

  const sampleLogos = [
    {
      name: 'Default Official Art',
      type: 'default-vector' as const,
      url: null,
      desc: 'Official multi-color mountain peak & enduro roost artwork'
    },
    {
      name: 'Official SVG Asset',
      type: 'custom-image' as const,
      url: '/himalayan-monster-logo.svg',
      desc: 'High-res scalable vector graphic (/himalayan-monster-logo.svg)'
    },
    {
      name: 'Crest Shield Icon',
      type: 'crest-icon' as const,
      url: null,
      desc: 'Deep navy shield with alpine peaks & HM typography'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#141418] border border-white/20 rounded-sm max-w-3xl w-full my-8 p-6 sm:p-8 shadow-2xl relative text-white font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 text-xl font-mono cursor-pointer transition-colors"
          aria-label="Close logo configuration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold mb-1">
            <Sparkles className="w-4 h-4 text-[#e06d2d]" />
            <span>Brand Identity Settings</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Configure Himalayan Monster Logo
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
            Upload a custom image file, set an image path / URL, or customize the display scales across the Navbar, Footer, and Modals.
          </p>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-4 p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-sm text-emerald-300 text-xs font-mono flex items-center justify-between animate-in fade-in duration-200">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              {toastMessage}
            </span>
          </div>
        )}

        {/* Live Preview Area */}
        <div className="mb-6 p-4 rounded-sm border border-white/10 bg-[#0c0c0e]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#e06d2d]" />
              Live Site Logo Preview
            </span>
            <div className="flex items-center gap-1 text-[11px] font-mono">
              <span className="text-neutral-500 mr-1">Preview Canvas:</span>
              <button
                type="button"
                onClick={() => setPreviewBg('dark')}
                className={`px-2 py-0.5 rounded-sm cursor-pointer ${
                  previewBg === 'dark' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Dark
              </button>
              <button
                type="button"
                onClick={() => setPreviewBg('light')}
                className={`px-2 py-0.5 rounded-sm cursor-pointer ${
                  previewBg === 'light' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => setPreviewBg('grid')}
                className={`px-2 py-0.5 rounded-sm cursor-pointer ${
                  previewBg === 'grid' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Checker
              </button>
            </div>
          </div>

          <div
            className={`p-6 rounded-sm flex flex-col md:flex-row items-center justify-around gap-6 transition-colors ${
              previewBg === 'dark'
                ? 'bg-[#0c0c0e] border border-white/5'
                : previewBg === 'light'
                ? 'bg-neutral-100 border border-neutral-300'
                : 'bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:12px_12px] bg-[#1a1a24]'
            }`}
          >
            {/* Navbar Compact Variation Preview */}
            <div className="flex flex-col items-center gap-2">
              <span className={`text-[10px] font-mono uppercase tracking-wider ${previewBg === 'light' ? 'text-neutral-600' : 'text-neutral-400'}`}>
                Navbar / Header Mode
              </span>
              <div className="p-3 bg-black/40 rounded-sm border border-white/5 inline-flex items-center justify-center">
                <HimalayanMonsterLogo variant="compact" lightMode={previewBg === 'light'} />
              </div>
            </div>

            {/* Footer / Hero Full Banner Variation Preview */}
            <div className="flex flex-col items-center gap-2">
              <span className={`text-[10px] font-mono uppercase tracking-wider ${previewBg === 'light' ? 'text-neutral-600' : 'text-neutral-400'}`}>
                Full Emblem / Footer Mode
              </span>
              <div className="max-w-xs p-3 bg-black/40 rounded-sm border border-white/5 inline-flex items-center justify-center">
                <HimalayanMonsterLogo variant="full" lightMode={previewBg === 'light'} />
              </div>
            </div>
          </div>

          {/* Active Configuration Status Banner */}
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                Active Source:{' '}
                <strong className="text-white">
                  {config.sourceType === 'custom-image'
                    ? 'Custom Uploaded Image / Path'
                    : config.sourceType === 'crest-icon'
                    ? 'HM Crest Shield'
                    : 'Original Official Vector Art'}
                </strong>
              </span>
            </div>
            {config.sourceType === 'custom-image' && (
              <button
                onClick={handleReset}
                className="text-xs font-mono text-[#e06d2d] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset to Original Vector
              </button>
            )}
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-white/10 mb-6 gap-2 sm:gap-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('upload')}
            className={`pb-3 font-heading text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'upload'
                ? 'text-[#e06d2d] border-b-2 border-[#e06d2d]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>Image File Upload</span>
          </button>

          <button
            onClick={() => setActiveTab('url')}
            className={`pb-3 font-heading text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'url'
                ? 'text-[#e06d2d] border-b-2 border-[#e06d2d]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Link className="w-4 h-4" />
            <span>Path / URL Config</span>
          </button>

          <button
            onClick={() => setActiveTab('presets')}
            className={`pb-3 font-heading text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'presets'
                ? 'text-[#e06d2d] border-b-2 border-[#e06d2d]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Presets & Vectors</span>
          </button>

          <button
            onClick={() => setActiveTab('scaling')}
            className={`pb-3 font-heading text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'scaling'
                ? 'text-[#e06d2d] border-b-2 border-[#e06d2d]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Scale & Sizing</span>
          </button>
        </div>

        {/* Tab 1: File Upload */}
        {activeTab === 'upload' && (
          <div className="space-y-4">
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              className={`p-8 border-2 border-dashed rounded-sm text-center cursor-pointer transition-all ${
                dragActive
                  ? 'border-[#e06d2d] bg-[#e06d2d]/10 scale-[1.01]'
                  : 'border-white/20 hover:border-[#e06d2d]/60 bg-[#1a1a22] hover:bg-[#1f1f2a]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/svg+xml,image/jpeg,image/webp,image/gif"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileChange(e.target.files[0]);
                  }
                }}
              />
              <div className="w-12 h-12 rounded-full bg-[#e06d2d]/20 text-[#e06d2d] flex items-center justify-center mx-auto mb-3">
                <Upload className="w-6 h-6" />
              </div>
              <p className="font-heading text-base font-bold uppercase text-white">
                Drag & Drop Your Logo Image Here
              </p>
              <p className="text-xs text-neutral-400 font-sans mt-1">
                or <span className="text-[#e06d2d] underline font-semibold">browse files</span> from your computer (PNG, SVG, JPG, WebP)
              </p>
              <div className="mt-3 text-[11px] font-mono text-neutral-500">
                Transparent PNG or vector SVG with 3:1 or square aspect ratio is recommended
              </div>
            </div>

            {config.customImageUrl && (
              <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-10 h-10 rounded-sm bg-black/50 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden p-1">
                    <img src={config.customImageUrl} alt="Custom logo preview" className="w-full h-full object-contain" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-mono text-white font-bold truncate">
                      {config.customImageAlt || 'Custom Uploaded Logo'}
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400">Active logo across all views</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2 text-neutral-400 hover:text-red-400 transition-colors cursor-pointer"
                  title="Remove custom logo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: URL / Relative Path Config */}
        {activeTab === 'url' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-neutral-300 uppercase block font-semibold">
                Image URL or Project Path
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Link className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => {
                      setUrlInput(e.target.value);
                      setUrlError('');
                    }}
                    placeholder="https://example.com/logo.png or /logo.png"
                    className="w-full bg-[#1c1c24] border border-white/15 rounded-sm pl-9 pr-3 py-3 text-sm text-white font-mono focus:border-[#e06d2d] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-xs px-6 py-3 rounded-sm uppercase tracking-wider shrink-0 cursor-pointer transition-colors"
                >
                  Apply Path
                </button>
              </div>
              {urlError && <p className="text-xs text-red-400 font-mono mt-1">{urlError}</p>}
            </div>

            <div className="p-4 bg-[#181820] border border-white/10 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 font-semibold">
                <Info className="w-4 h-4 text-[#e06d2d]" />
                <span>How to use local files:</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                You can drop an image in your public directory (e.g. <code className="text-[#e06d2d] font-mono">/public/brand-logo.png</code>) and reference it as <code className="text-[#e06d2d] font-mono">/brand-logo.png</code>, or use any CDN hosted image URL.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Presets & Vectors */}
        {activeTab === 'presets' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sampleLogos.map((preset) => {
              const isActive =
                preset.type === config.sourceType &&
                (preset.type !== 'custom-image' || config.customImageUrl === preset.url);

              return (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => {
                    if (preset.type === 'custom-image' && preset.url) {
                      updateLogoImage(preset.url, preset.name);
                    } else {
                      updateSourceType(preset.type);
                    }
                    showToast(`Applied preset: ${preset.name}`);
                  }}
                  className={`p-4 rounded-sm text-left transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-[#e06d2d]/15 border-[#e06d2d] shadow-lg ring-1 ring-[#e06d2d]'
                      : 'bg-[#181820] border-white/10 hover:border-white/30 hover:bg-[#1f1f28]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-sm font-bold uppercase text-white">
                      {preset.name}
                    </span>
                    {isActive && (
                      <span className="text-[10px] font-mono uppercase bg-[#e06d2d] text-black px-2 py-0.5 rounded-xs font-bold">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {preset.desc}
                  </p>
                </button>
              );
            })}
          </div>
        )}

        {/* Tab 4: Scaling Controls */}
        {activeTab === 'scaling' && (
          <div className="space-y-6 bg-[#181820] p-6 rounded-sm border border-white/10">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold">Navbar Header Scale</span>
                <span className="text-[#e06d2d]">{Math.round(config.navbarScale * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.5"
                step="0.05"
                value={config.navbarScale}
                onChange={(e) => updateScale('navbar', parseFloat(e.target.value))}
                className="w-full accent-[#e06d2d] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                <span>50%</span>
                <span>200% (Baseline +100%)</span>
                <span>350%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold">Footer & About View Scale</span>
                <span className="text-[#e06d2d]">{Math.round(config.footerScale * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="3.5"
                step="0.05"
                value={config.footerScale}
                onChange={(e) => updateScale('footer', parseFloat(e.target.value))}
                className="w-full accent-[#e06d2d] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                <span>50%</span>
                <span>200% (Baseline +100%)</span>
                <span>350%</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All to Original Factory Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-sm px-8 py-3 rounded-sm uppercase tracking-wider cursor-pointer transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95"
          >
            Done & Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
