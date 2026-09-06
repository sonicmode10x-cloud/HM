import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, User, Tag } from 'lucide-react';
import { Article } from '../types';

interface AdventureStoriesProps {
  articles: Article[];
  onOpenArticleReader?: (article: Article) => void;
}

export const AdventureStories: React.FC<AdventureStoriesProps> = ({
  articles,
  onOpenArticleReader
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleRead = (article: Article) => {
    if (onOpenArticleReader) {
      onOpenArticleReader(article);
    } else {
      setSelectedArticle(article);
    }
  };

  const leadArticle = articles[0];
  const sideArticles = articles.slice(1);

  return (
    <section id="stories" className="py-24 bg-[#f8f9fa] text-slate-900 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold block mb-2">
              JOURNALS, ROUTES & DISPATCHES
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-slate-900 leading-none">
              FROM THE ROAD
            </h2>
            <p className="mt-4 text-slate-600 font-sans text-base sm:text-lg max-w-2xl">
              Editorial field reports, technical route breakdowns, and authentic stories from the mountain passes of Nepal.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {['Ride Stories', 'Nepal Guides', 'Route Guides', 'Adventure Stories', 'Travel Tips'].map((cat) => (
              <span key={cat} className="px-2.5 py-1 rounded-sm bg-white border border-slate-200 text-slate-700 shadow-xs">
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Lead Story (Left Column - 7 Cols) */}
          {leadArticle && (
            <div
              onClick={() => handleRead(leadArticle)}
              className="lg:col-span-7 bg-white rounded-sm overflow-hidden border border-slate-200 hover:border-[#e06d2d] transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:shadow-md"
            >
              <div className="relative h-80 sm:h-96 overflow-hidden bg-slate-100">
                <img
                  src={leadArticle.coverImage}
                  alt={leadArticle.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                <div className="absolute top-4 left-4 bg-[#e06d2d] text-white px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                  {leadArticle.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white drop-shadow-xs">
                  <span className="flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-sm backdrop-blur-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {leadArticle.readTime}
                  </span>
                  <span>{leadArticle.date}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white">
                <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 group-hover:text-[#e06d2d] transition-colors mb-3 leading-tight">
                  {leadArticle.title}
                </h3>
                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {leadArticle.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="text-xs font-mono text-slate-500">
                    By <span className="text-slate-900 font-semibold">{leadArticle.author}</span>
                  </div>
                  <span className="font-heading font-bold text-xs tracking-wider text-[#e06d2d] uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    READ ARTICLE <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right Column Stories (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => handleRead(article)}
                className="bg-white p-6 rounded-sm border border-slate-200 hover:border-[#e06d2d] transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-wider font-bold">
                      {article.category}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-slate-900 group-hover:text-[#e06d2d] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h4>

                  <p className="font-sans text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{article.author}</span>
                  <span className="text-[#e06d2d] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    READ <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 rounded-sm max-w-2xl w-full p-6 sm:p-10 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-xs text-[#e06d2d] uppercase tracking-widest font-bold">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-slate-900 mt-1 leading-tight">
                  {selectedArticle.title}
                </h3>
                <div className="font-mono text-xs text-slate-500 mt-2">
                  By {selectedArticle.author} ({selectedArticle.authorRole}) • {selectedArticle.date}
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-slate-700 text-2xl font-mono leading-none p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="rounded-sm overflow-hidden h-60 bg-slate-100">
              <img
                src={selectedArticle.coverImage}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              {selectedArticle.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-sm text-slate-600 font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
