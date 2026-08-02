import React, { useState } from 'react';
import { Article, Category } from '../types/newspaper';
import { Clock, Sparkles, ShieldCheck, ChevronDown } from 'lucide-react';
import { SupportedLanguage, translateArticle } from '../lib/translationService';

interface BlogLayoutProps {
  articles: Article[];
  selectedCategory: Category;
  selectedLanguage: SupportedLanguage;
  onSelectArticle: (article: Article) => void;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  articles,
  selectedCategory,
  selectedLanguage,
  onSelectArticle
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const translatedArticles = articles.map(art => translateArticle(art, selectedLanguage));

  const filteredArticles = selectedCategory === 'All'
    ? translatedArticles
    : translatedArticles.filter(a => a.category === selectedCategory);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-sans-ui transition-colors">
      
      {/* Blog Mode Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#1a1a1a] dark:border-stone-800 pb-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0d0d0d] dark:text-stone-100 flex items-center gap-2">
            <span>Modern Blog Dispatch</span>
            <span className="text-xs bg-[#8b0000] text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
              Grid View
            </span>
          </h2>
          <p className="text-xs text-stone-700 dark:text-stone-400 mt-1 font-semibold">
            Displaying {displayedArticles.length} of {filteredArticles.length} curated stories • Real-time RSS feeds with AI summarization
          </p>
        </div>
      </div>

      {/* Grid of Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group cursor-pointer bg-[#f3efe2] dark:bg-[#1e1e1e] rounded-xl overflow-hidden border border-[#1a1a1a]/20 dark:border-stone-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Thumbnail */}
            {article.imageUrl && (
              <div className="relative h-48 overflow-hidden bg-stone-200 dark:bg-stone-900 border-b border-[#1a1a1a]/15">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-stone-900/90 backdrop-blur-xs text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded">
                    {article.category}
                  </span>
                  {article.isBreaking && (
                    <span className="bg-[#8b0000] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                      Breaking
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-400 mb-2 font-semibold">
                  <span className="font-bold text-[#0d0d0d] dark:text-stone-200">{article.publisher}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#8b0000]" /> {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif-headline text-lg font-bold text-[#0d0d0d] dark:text-stone-100 group-hover:text-[#8b0000] dark:group-hover:text-amber-400 transition-colors leading-snug mb-2">
                  {article.title}
                </h3>

                <p className="text-xs text-stone-800 dark:text-stone-300 line-clamp-3 leading-relaxed mb-4 font-medium">
                  {article.description}
                </p>
              </div>

              <div>
                {/* AI Executive Summary Snippet */}
                {article.aiSummary && (
                  <div className="bg-[#e8e2d2] dark:bg-[#252525] p-2.5 rounded border-l-3 border-[#8b0000] text-[11px] text-stone-800 dark:text-stone-300 mb-3 font-medium border-t border-b border-r border-[#1a1a1a]/10">
                    <div className="flex items-center gap-1 font-extrabold text-[#8b0000] dark:text-amber-400 mb-0.5 uppercase tracking-wider text-[10px]">
                      <Sparkles className="w-3 h-3" /> AI Summary
                    </div>
                    <p className="line-clamp-2">{article.aiSummary.executiveSummary}</p>
                  </div>
                )}

                {/* Related Outlets Badges */}
                {article.relatedSources && article.relatedSources.length > 1 && (
                  <div className="flex items-center gap-1 text-[10px] text-stone-700 dark:text-stone-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8b0000]" />
                    <span>Reported by {article.relatedSources.length} sources</span>
                  </div>
                )}
              </div>

            </div>

          </article>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#8b0000] hover:bg-[#6b0000] text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <span>Load More Stories ({filteredArticles.length - visibleCount} Remaining)</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}

    </main>
  );
};
