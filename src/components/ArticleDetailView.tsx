import React from 'react';
import { Clock, Calendar, ArrowLeft, User, Compass, Share2, MessageCircle } from 'lucide-react';
import { Article, Expedition } from '../types';
import { Analytics } from '../lib/analytics';

interface ArticleDetailViewProps {
  article: Article;
  allTours: Expedition[];
  onBack: () => void;
  onSelectTour: (slug: string) => void;
  onOpenBooking: () => void;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({
  article,
  allTours,
  onBack,
  onSelectTour,
  onOpenBooking
}) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="pt-24 pb-20 bg-[#0c0c0e] text-white min-h-screen">
      {/* Header & Hero Image */}
      <div className="relative py-16 sm:py-24 mb-12 overflow-hidden border-b border-white/10 bg-[#121216]">
        <div className="absolute inset-0 z-0">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.2]"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/70 to-[#0c0c0e]/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs font-mono text-neutral-400">
              <li>
                <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" />
                  Stories & Journal
                </button>
              </li>
              <li>/</li>
              <li className="text-[#e06d2d] truncate max-w-xs">{article.category}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e06d2d]/15 border border-[#e06d2d]/40 rounded-sm mb-4 text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold">
            {article.category}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-[1.0] mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#e06d2d]" />
              <span>By {article.author} ({article.authorRole})</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neutral-400" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Text Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-xl font-sans text-neutral-200 leading-relaxed font-medium border-l-2 border-[#e06d2d] pl-4 italic">
              {article.excerpt}
            </p>

            <div className="space-y-6 text-neutral-300 font-sans text-base sm:text-lg leading-relaxed">
              {article.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-neutral-400 mr-2">TOPICS:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-sm text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share & Actions Bar */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={onBack}
                className="text-sm font-mono text-[#e06d2d] hover:underline flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Stories
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-sm border border-white/10 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Story</span>
              </button>
            </div>
          </div>

          {/* Sidebar CTA & Related Expeditions (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#16161c] p-6 rounded-sm border border-[#e06d2d]/40 space-y-4">
              <span className="text-xs font-mono text-[#e06d2d] uppercase tracking-widest font-bold block">
                EXPERIENCE THE TRAIL
              </span>
              <h3 className="font-heading text-xl font-bold uppercase text-white">
                RIDE NEPAL WITH HIMALAYAN MONSTER
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Join our certified guides on royal Enfield Himalayan 450s or pro enduro mountain bikes. Full 4x4 luggage support included.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#e06d2d] hover:bg-[#eb7a3b] text-black font-heading font-bold text-xs py-3 px-4 rounded-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>INQUIRE EXPEDITION</span>
              </button>
            </div>

            <div className="bg-[#16161c] p-6 rounded-sm border border-white/10 space-y-4">
              <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-[#e06d2d]">
                FEATURED EXPEDITIONS
              </h4>
              <div className="space-y-3">
                {allTours.slice(0, 3).map((tour) => (
                  <button
                    key={tour.slug}
                    onClick={() => onSelectTour(tour.slug)}
                    className="w-full text-left p-2.5 rounded-sm bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
                  >
                    <div className="text-xs font-bold text-white group-hover:text-[#e06d2d] transition-colors leading-tight">
                      {tour.title}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 mt-1">
                      {tour.durationLabel} • {tour.maxAltitude}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
