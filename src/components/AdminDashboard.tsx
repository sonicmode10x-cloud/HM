import React, { useState, useRef, useEffect } from 'react';
import { 
  Sliders, Upload, Link, RotateCcw, Check, Sparkles, Image as ImageIcon, 
  Eye, Shield, ArrowLeft, Download, RefreshCw, AlertCircle, Copy, 
  Layers, Settings, Layout, Globe, Compass, Bike, MessageSquare, 
  ChevronRight, ExternalLink, Sun, Moon, Grid, ZoomIn, ZoomOut, CheckCircle2,
  FileCode, Palette
} from 'lucide-react';
import { useLogo, DEFAULT_LOGO_CONFIG, LogoConfig } from '../context/LogoContext';
import { HimalayanMonsterLogo } from './HimalayanMonsterLogo';
import { TOURS_DATA } from '../data/toursData';
import { FLEET_DATA } from '../data/fleetData';

interface AdminDashboardProps {
  onNavigate: (view: string, slug?: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const { 
    config, 
    updateLogoImage, 
    updateSourceType, 
    updateScale, 
    resetToDefault,
    isCustomImageActive 
  } = useLogo();

  const [activeTab, setActiveTab] = useState<'logo' | 'overview' | 'preview-all' | 'export-import'>('logo');
  const [logoInputMode, setLogoInputMode] = useState<'upload' | 'url' | 'presets'>('upload');
  const [urlInput, setUrlInput] = useState(config.customImageUrl || '');
  const [urlError, setUrlError] = useState('');
  const [previewBackdrop, setPreviewBackdrop] = useState<'dark' | 'light' | 'grid'>('dark');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [dragActive, setDragActive] = useState(false);
  const [imageMeta, setImageMeta] = useState<{ width: number; height: number; size?: string; format?: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<{ title: string; text: string; type: 'success' | 'info' | 'error' } | null>(null);
  const [importJsonText, setImportJsonText] = useState('');
  const [altTextInput, setAltTextInput] = useState(config.customImageAlt || 'Himalayan Monster Extreme Tours Pokhara');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (title: string, text: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage({ title, text, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Inspect image dimensions whenever URL or uploaded image changes
  useEffect(() => {
    if (config.customImageUrl) {
      const img = new Image();
      img.onload = () => {
        let format = 'Image';
        if (config.customImageUrl?.startsWith('data:image/svg')) format = 'SVG';
        else if (config.customImageUrl?.startsWith('data:image/png')) format = 'PNG';
        else if (config.customImageUrl?.startsWith('data:image/jpeg')) format = 'JPG';
        else if (config.customImageUrl?.startsWith('data:image/webp')) format = 'WebP';
        else if (config.customImageUrl?.endsWith('.svg')) format = 'SVG File';
        else if (config.customImageUrl?.endsWith('.png')) format = 'PNG File';

        setImageMeta({
          width: img.naturalWidth || img.width,
          height: img.naturalHeight || img.height,
          format
        });
      };
      img.src = config.customImageUrl;
    } else {
      setImageMeta({ width: 800, height: 650, format: 'Scalable Vector' });
    }
  }, [config.customImageUrl]);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      showToast('Invalid File Type', 'Please upload a valid image (SVG, PNG, JPG, or WebP).', 'error');
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      showToast('File Too Large', 'Maximum file size is 8MB.', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        updateLogoImage(dataUrl, file.name);
        setUrlInput(dataUrl);
        showToast('Logo Updated Successfully', `Uploaded ${file.name} (${(file.size / 1024).toFixed(1)} KB) and applied globally.`, 'success');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
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
      setUrlError('Please enter a valid image URL or relative path (e.g. /himalayan-monster-logo.svg)');
      return;
    }
    setUrlError('');
    updateLogoImage(urlInput.trim(), altTextInput);
    showToast('Path Applied', 'Brand logo source updated to specified path.', 'success');
  };

  const handleAltTextUpdate = () => {
    updateLogoImage(config.customImageUrl, altTextInput);
    showToast('Metadata Saved', 'Logo alt text updated for accessibility and SEO.', 'info');
  };

  const handleResetFactory = () => {
    if (window.confirm('Reset brand logo configuration to the default official Himalayan Monster vector artwork?')) {
      resetToDefault();
      setUrlInput('');
      setUrlError('');
      showToast('Factory Reset Complete', 'Reverted to official Himalayan Monster vector livery.', 'info');
    }
  };

  const handleExportConfig = () => {
    const jsonStr = JSON.stringify(config, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `himalayan-monster-logo-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Export Downloaded', 'Configuration saved as JSON file.', 'success');
  };

  const handleImportConfig = () => {
    try {
      const parsed = JSON.parse(importJsonText);
      if (typeof parsed !== 'object' || !parsed) {
        throw new Error('Invalid JSON structure');
      }
      localStorage.setItem('himalayan_monster_logo_config_v2', JSON.stringify(parsed));
      window.location.reload();
    } catch {
      showToast('Import Failed', 'Please paste a valid JSON logo configuration object.', 'error');
    }
  };

  const samplePresets = [
    {
      id: 'official-svg',
      name: 'Official Scalable SVG Asset',
      type: 'custom-image' as const,
      url: '/himalayan-monster-logo.svg',
      desc: 'High-definition vector asset (/himalayan-monster-logo.svg) with crisp mountain peaks & roost',
      tag: 'Recommended'
    },
    {
      id: 'default-vector',
      name: 'Native React Vector Engine',
      type: 'default-vector' as const,
      url: null,
      desc: 'Embedded interactive SVG engine matching the official Nepal livery',
      tag: 'Built-in'
    },
    {
      id: 'crest-badge',
      name: 'Alpine Crest Shield Badge',
      type: 'crest-icon' as const,
      url: null,
      desc: 'Deep navy shield with snowy ridges and HM bold monogram',
      tag: 'Compact Emblem'
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-200 font-sans flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className={`px-4 py-3 rounded-sm shadow-2xl border flex items-center gap-3 backdrop-blur-lg ${
            toastMessage.type === 'error' 
              ? 'bg-red-950/90 border-red-500/50 text-red-100'
              : toastMessage.type === 'info'
              ? 'bg-blue-950/90 border-blue-500/50 text-blue-100'
              : 'bg-[#141418]/95 border-[#e06d2d]/60 text-white'
          }`}>
            <CheckCircle2 className={`w-5 h-5 ${toastMessage.type === 'error' ? 'text-red-400' : 'text-[#e06d2d]'}`} />
            <div>
              <p className="font-heading font-bold text-sm tracking-wide">{toastMessage.title}</p>
              <p className="text-xs text-neutral-300">{toastMessage.text}</p>
            </div>
          </div>
        </div>
      )}

      {/* Top Admin Navigation Header */}
      <header className="bg-[#0f0f13] border-b border-white/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-sm border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#e06d2d]" />
            <span>Back to Live Site</span>
          </button>
          
          <div className="h-6 w-px bg-white/10 hidden sm:block" />

          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#e06d2d] font-bold">
                Pokhara Base Camp Console
              </span>
            </div>
            <h1 className="font-heading text-lg sm:text-xl font-black uppercase text-white tracking-wide">
              Brand & Logo Control Center
            </h1>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-xs font-mono">
            <span className="text-neutral-400">Current Source:</span>
            <span className="text-[#e06d2d] font-bold">
              {config.sourceType === 'custom-image' ? 'Custom Image Asset' : config.sourceType === 'crest-icon' ? 'Crest Icon' : 'Default Official Vector'}
            </span>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-xs uppercase tracking-wider px-4 py-2 rounded-sm flex items-center gap-1.5 transition-all shadow-md active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview Site</span>
          </button>
        </div>
      </header>

      {/* Main Admin Body Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab('logo')}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm font-heading font-bold text-sm tracking-wider uppercase transition-colors whitespace-nowrap ${
              activeTab === 'logo'
                ? 'bg-[#e06d2d] text-black shadow-md'
                : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Logo & Brand Assets</span>
          </button>

          <button
            onClick={() => setActiveTab('preview-all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm font-heading font-bold text-sm tracking-wider uppercase transition-colors whitespace-nowrap ${
              activeTab === 'preview-all'
                ? 'bg-[#e06d2d] text-black shadow-md'
                : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
            }`}
          >
            <Layout className="w-4 h-4" />
            <span>Live Layout Previews</span>
          </button>

          <button
            onClick={() => setActiveTab('export-import')}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm font-heading font-bold text-sm tracking-wider uppercase transition-colors whitespace-nowrap ${
              activeTab === 'export-import'
                ? 'bg-[#e06d2d] text-black shadow-md'
                : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>Backup & Sync JSON</span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-sm font-heading font-bold text-sm tracking-wider uppercase transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-[#e06d2d] text-black shadow-md'
                : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Base Camp Status</span>
          </button>
        </div>

        {/* TAB 1: LOGO & BRAND ASSET MANAGER */}
        {activeTab === 'logo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Upload, URL, Presets & Sizing Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Input Mode Selector */}
              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#e06d2d]" />
                    <span>Logo Source Method</span>
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    Live updates across all views
                  </span>
                </div>

                {/* Sub Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setLogoInputMode('upload')}
                    className={`py-2.5 px-3 rounded-sm font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${
                      logoInputMode === 'upload'
                        ? 'bg-white/15 border-[#e06d2d] text-white shadow-sm'
                        : 'bg-white/5 border-transparent text-neutral-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5 text-[#e06d2d]" />
                    <span>File Upload</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLogoInputMode('url')}
                    className={`py-2.5 px-3 rounded-sm font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${
                      logoInputMode === 'url'
                        ? 'bg-white/15 border-[#e06d2d] text-white shadow-sm'
                        : 'bg-white/5 border-transparent text-neutral-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Link className="w-3.5 h-3.5 text-[#e06d2d]" />
                    <span>Path / URL</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLogoInputMode('presets')}
                    className={`py-2.5 px-3 rounded-sm font-heading text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${
                      logoInputMode === 'presets'
                        ? 'bg-white/15 border-[#e06d2d] text-white shadow-sm'
                        : 'bg-white/5 border-transparent text-neutral-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#e06d2d]" />
                    <span>Presets</span>
                  </button>
                </div>

                {/* 1. UPLOAD VIEW */}
                {logoInputMode === 'upload' && (
                  <div className="space-y-4">
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-all ${
                        dragActive
                          ? 'border-[#e06d2d] bg-[#e06d2d]/10'
                          : 'border-white/20 hover:border-[#e06d2d]/60 bg-black/30 hover:bg-white/5'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/svg+xml,image/png,image/jpeg,image/webp"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleFileUpload(e.target.files[0]);
                          }
                        }}
                      />
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#e06d2d]/15 text-[#e06d2d] flex items-center justify-center mb-3">
                        <Upload className="w-6 h-6" />
                      </div>
                      <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">
                        Drag & Drop Custom Logo Here
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
                        Supports high-resolution SVG vector, transparent PNG, WebP, or JPG files up to 8MB.
                      </p>
                      <button
                        type="button"
                        className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider border border-white/20"
                      >
                        Browse Files
                      </button>
                    </div>

                    {isCustomImageActive && (
                      <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-sm flex items-center justify-between text-xs text-emerald-200">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Custom uploaded image is currently active!</span>
                        </div>
                        <button
                          onClick={handleResetFactory}
                          className="text-red-400 hover:text-red-300 font-mono underline"
                        >
                          Clear Custom
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. PATH / URL VIEW */}
                {logoInputMode === 'url' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1.5">
                        Logo Image Path or Public URL
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={urlInput}
                          onChange={(e) => setUrlInput(e.target.value)}
                          placeholder="/himalayan-monster-logo.svg or https://..."
                          className="flex-1 bg-black/50 border border-white/20 focus:border-[#e06d2d] rounded-sm px-3 py-2.5 text-sm font-mono text-white placeholder-neutral-500 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={handleApplyUrl}
                          className="bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black px-4 py-2 rounded-sm text-xs uppercase tracking-wider cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>
                      {urlError && <p className="text-xs text-red-400 mt-1.5">{urlError}</p>}
                    </div>

                    {/* Quick relative paths */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                        Quick System Paths:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => {
                            setUrlInput('/himalayan-monster-logo.svg');
                            updateLogoImage('/himalayan-monster-logo.svg');
                            showToast('Path Applied', 'Using /himalayan-monster-logo.svg', 'success');
                          }}
                          className="px-2.5 py-1 rounded-sm bg-white/5 hover:bg-white/10 text-xs font-mono text-neutral-300 border border-white/10"
                        >
                          /himalayan-monster-logo.svg
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. PRESETS VIEW */}
                {logoInputMode === 'presets' && (
                  <div className="space-y-3">
                    {samplePresets.map((preset) => (
                      <div
                        key={preset.id}
                        onClick={() => {
                          if (preset.type === 'custom-image') {
                            updateLogoImage(preset.url);
                          } else {
                            updateSourceType(preset.type);
                          }
                          showToast('Preset Applied', `Switched to ${preset.name}`, 'info');
                        }}
                        className="p-3.5 rounded-sm bg-black/40 hover:bg-white/5 border border-white/10 hover:border-[#e06d2d]/50 flex items-center justify-between gap-4 cursor-pointer transition-all group"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-heading font-bold text-sm text-white group-hover:text-[#e06d2d] transition-colors">
                              {preset.name}
                            </h4>
                            <span className="text-[10px] font-mono uppercase bg-[#e06d2d]/20 text-[#e06d2d] px-1.5 py-0.5 rounded-xs">
                              {preset.tag}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400">{preset.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-[#e06d2d] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sizing & Scaling Suite */}
              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#e06d2d]" />
                    <span>Granular Sizing & Scale Controls</span>
                  </h3>
                  <button
                    onClick={() => {
                      updateScale('navbar', 2.0);
                      updateScale('footer', 2.0);
                      showToast('Scale Reset', 'Restored 200% default baseline scale.', 'info');
                    }}
                    className="text-xs font-mono text-neutral-400 hover:text-[#e06d2d] underline"
                  >
                    Reset Scales
                  </button>
                </div>

                <div className="space-y-5">
                  {/* Navbar Scale */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-300">Header / Navbar Display Scale</span>
                      <span className="text-[#e06d2d] font-bold">
                        {Math.round((config.navbarScale || 2.0) * 100)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="3.5"
                      step="0.05"
                      value={config.navbarScale || 2.0}
                      onChange={(e) => updateScale('navbar', parseFloat(e.target.value))}
                      className="w-full accent-[#e06d2d] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                      <span>50% (Compact)</span>
                      <span>200% (Default +100%)</span>
                      <span>350% (Extra Large)</span>
                    </div>
                  </div>

                  {/* Footer Scale */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-300">Footer / Outfitter Display Scale</span>
                      <span className="text-[#e06d2d] font-bold">
                        {Math.round((config.footerScale || 2.0) * 100)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="3.5"
                      step="0.05"
                      value={config.footerScale || 2.0}
                      onChange={(e) => updateScale('footer', parseFloat(e.target.value))}
                      className="w-full accent-[#e06d2d] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                      <span>50%</span>
                      <span>200% (Default +100%)</span>
                      <span>350%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alt Text & Metadata */}
              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-4">
                <h3 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#e06d2d]" />
                  <span>Accessibility & Brand SEO</span>
                </h3>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                    Logo Image Alt Text
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={altTextInput}
                      onChange={(e) => setAltTextInput(e.target.value)}
                      className="flex-1 bg-black/50 border border-white/20 focus:border-[#e06d2d] rounded-sm px-3 py-2 text-sm text-white focus:outline-none"
                    />
                    <button
                      onClick={handleAltTextUpdate}
                      className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase rounded-sm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Live Interactive Preview & Inspector (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 sticky top-24 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#e06d2d]" />
                    <span>Real-Time Inspector</span>
                  </h3>

                  {/* Backdrop Selector */}
                  <div className="flex items-center gap-1 bg-black/50 p-1 rounded-sm border border-white/10">
                    <button
                      onClick={() => setPreviewBackdrop('dark')}
                      className={`p-1.5 rounded-xs transition-colors ${previewBackdrop === 'dark' ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'}`}
                      title="Dark Charcoal Backdrop (#0c0c0e)"
                    >
                      <Moon className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewBackdrop('light')}
                      className={`p-1.5 rounded-xs transition-colors ${previewBackdrop === 'light' ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'}`}
                      title="Light Backdrop (#ffffff)"
                    >
                      <Sun className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewBackdrop('grid')}
                      className={`p-1.5 rounded-xs transition-colors ${previewBackdrop === 'grid' ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'}`}
                      title="Checkerboard Alpha Transparency"
                    >
                      <Grid className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Live Preview Box */}
                <div
                  className={`rounded-sm border border-white/15 p-8 flex flex-col items-center justify-center min-h-[300px] transition-colors relative overflow-hidden shadow-inner ${
                    previewBackdrop === 'dark'
                      ? 'bg-[#0c0c0e]'
                      : previewBackdrop === 'light'
                      ? 'bg-white'
                      : 'bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:12px_12px] bg-neutral-900'
                  }`}
                >
                  <div className="w-full max-w-sm flex items-center justify-center">
                    <HimalayanMonsterLogo 
                      variant="full" 
                      lightMode={previewBackdrop === 'light'} 
                    />
                  </div>
                </div>

                {/* Image Metrics Panel */}
                <div className="bg-black/40 border border-white/10 rounded-sm p-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between pb-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Format:</span>
                    <span className="text-white font-bold">{imageMeta?.format || 'Vector'}</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Native Dimensions:</span>
                    <span className="text-white">{imageMeta?.width}px × {imageMeta?.height}px</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-white/5">
                    <span className="text-neutral-400">Aspect Ratio:</span>
                    <span className="text-white">
                      {imageMeta ? (imageMeta.width / imageMeta.height).toFixed(2) : '1.23'} : 1
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Storage Sync:</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-bold">
                      <CheckCircle2 className="w-3 h-3" /> localStorage v2
                    </span>
                  </div>
                </div>

                {/* Quick 1-Click Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(config.customImageUrl || '/himalayan-monster-logo.svg');
                      showToast('Copied to Clipboard', 'Logo image path copied.', 'info');
                    }}
                    className="w-full py-2.5 px-3 rounded-sm bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#e06d2d]" />
                    <span>Copy Active Image Path</span>
                  </button>

                  <button
                    onClick={handleResetFactory}
                    className="w-full py-2 px-3 rounded-sm bg-red-950/30 hover:bg-red-900/40 text-red-300 border border-red-800/40 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-red-400" />
                    <span>Reset to Factory Default</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 2: LIVE LAYOUT PREVIEWS (SIMULATED PAGES) */}
        {activeTab === 'preview-all' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-4">
              <h3 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                <Layout className="w-4 h-4 text-[#e06d2d]" />
                <span>Simulated Header Navbar Preview</span>
              </h3>
              <p className="text-xs text-neutral-400">
                This preview shows exactly how the logo renders inside the fixed top navigation bar.
              </p>

              {/* Header Box Simulation */}
              <div className="bg-[#0c0c0e] border border-white/10 rounded-sm p-4 sm:p-6 shadow-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <HimalayanMonsterLogo variant="compact" />
                </div>
                <div className="hidden md:flex items-center gap-6 font-heading font-bold text-xs uppercase tracking-widest text-neutral-400">
                  <span className="text-[#e06d2d]">EXPEDITIONS</span>
                  <span>MOTO TOURS</span>
                  <span>MTB</span>
                  <span>RENTALS</span>
                  <span>ABOUT US</span>
                </div>
                <div className="hidden sm:block">
                  <div className="bg-[#e06d2d] text-black font-heading font-black text-xs px-4 py-2 rounded-sm uppercase tracking-wider">
                    BOOK NOW
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-4">
              <h3 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#e06d2d]" />
                <span>Simulated Footer Brand Block Preview</span>
              </h3>
              <p className="text-xs text-neutral-400">
                This preview shows how the logo renders in the main footer column and outfitter showcase.
              </p>

              {/* Footer Box Simulation */}
              <div className="bg-[#0e0e11] border border-white/10 rounded-sm p-8 max-w-xl">
                <div className="max-w-md">
                  <HimalayanMonsterLogo variant="full" />
                </div>
                <p className="font-heading text-lg font-bold tracking-widest text-[#e06d2d] uppercase mt-4">
                  TWO WHEELS. WILD NEPAL.
                </p>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Pokhara-based two-wheel adventure company specializing in motorcycle tours, MTB expeditions, E-MTB experiences, and high-altitude bike rentals across Nepal.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EXPORT & IMPORT JSON BACKUP */}
        {activeTab === 'export-import' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-150">
            <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-4">
              <h3 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                <Download className="w-4 h-4 text-[#e06d2d]" />
                <span>Export Configuration Backup</span>
              </h3>
              <p className="text-xs text-neutral-400">
                Download a JSON backup of your current brand logo and scale settings.
              </p>
              <pre className="bg-black/50 p-4 rounded-sm border border-white/10 text-xs font-mono text-emerald-300 overflow-x-auto max-h-56">
                {JSON.stringify(config, null, 2)}
              </pre>
              <button
                onClick={handleExportConfig}
                className="w-full py-2.5 bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-black text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download config.json</span>
              </button>
            </div>

            <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-4">
              <h3 className="font-heading text-lg font-black uppercase text-white flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#e06d2d]" />
                <span>Import Configuration JSON</span>
              </h3>
              <p className="text-xs text-neutral-400">
                Paste a previously exported JSON config to restore exact branding values.
              </p>
              <textarea
                value={importJsonText}
                onChange={(e) => setImportJsonText(e.target.value)}
                placeholder='Paste JSON here (e.g. {"sourceType": "custom-image", "navbarScale": 2.0})'
                rows={7}
                className="w-full bg-black/50 border border-white/20 rounded-sm p-3 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#e06d2d]"
              />
              <button
                onClick={handleImportConfig}
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm border border-white/20 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4 text-[#e06d2d]" />
                <span>Restore from JSON</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: BASE CAMP STATUS */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-400">Expeditions</span>
                  <Compass className="w-5 h-5 text-[#e06d2d]" />
                </div>
                <p className="font-heading text-3xl font-black text-white">{TOURS_DATA.length}</p>
                <p className="text-xs text-neutral-400">Active High-Altitude Routes</p>
              </div>

              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-400">Fleet Machines</span>
                  <Bike className="w-5 h-5 text-[#e06d2d]" />
                </div>
                <p className="font-heading text-3xl font-black text-white">{FLEET_DATA.length}</p>
                <p className="text-xs text-neutral-400">Enduro & Himalayan Fleet</p>
              </div>

              <div className="bg-[#121216] border border-white/10 rounded-sm p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-400">Base Location</span>
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="font-heading text-xl font-black text-white">POKHARA, NEPAL</p>
                <p className="text-xs text-neutral-400">Lakeside 6, Annapurna Hub</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
