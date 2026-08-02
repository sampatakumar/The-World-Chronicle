import React, { useState } from 'react';
import { Article, Category } from '../types/newspaper';
import { DAILY_EDITORIAL, DAILY_EDITORIAL_KANNADA } from '../data/rssFeeds';
import { Sparkles, ExternalLink, Clock, User, ShieldCheck, Flame, ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { SupportedLanguage, UI_TRANSLATIONS, translateArticle } from '../lib/translationService';

interface NewspaperLayoutProps {
  articles: Article[];
  selectedCategory: Category;
  selectedLanguage: SupportedLanguage;
  onSelectArticle: (article: Article) => void;
}

export const NewspaperLayout: React.FC<NewspaperLayoutProps> = ({
  articles,
  selectedCategory,
  selectedLanguage,
  onSelectArticle
}) => {
  const [extraVisibleCount, setExtraVisibleCount] = useState<number>(8);

  const t = UI_TRANSLATIONS[selectedLanguage] || UI_TRANSLATIONS.English;
  const isKannada = selectedLanguage === 'Kannada';

  // Translate articles for current language
  const translatedArticles = articles.map(art => translateArticle(art, selectedLanguage));

  // Filter by category if selected
  const filteredArticles = selectedCategory === 'All' 
    ? translatedArticles 
    : translatedArticles.filter(a => a.category === selectedCategory);

  // Fallback pool to prevent empty desks or broken layouts
  const safePool = filteredArticles.length >= 3 ? filteredArticles : translatedArticles;

  // Designate lead headline of the day
  const leadHeadline = safePool.find(a => a.isLeadHeadline) || safePool[0];
  const remaining = safePool.filter(a => a.id !== leadHeadline?.id);

  const secondaryHeadlines = remaining.slice(0, 3);
  
  // Categorized Desks with intelligent fallback
  const getDeskArticles = (cat: Category, fallbackOffset: number = 0) => {
    const matched = safePool.filter(a => a.category === cat && a.id !== leadHeadline?.id);
    if (matched.length >= 2) return matched;
    // Graceful fallback to prevent empty grid columns
    return [...matched, ...remaining.slice(fallbackOffset, fallbackOffset + 3)].slice(0, 3);
  };

  const worldNews = getDeskArticles('World', 0);
  const karnatakaNews = getDeskArticles('Karnataka', 2);
  const techNews = getDeskArticles('Technology', 4);
  const businessNews = getDeskArticles('Business', 1);
  const scienceNews = getDeskArticles('Science', 3);
  const sportsNews = getDeskArticles('Sports', 5);
  const entertainmentNews = getDeskArticles('Entertainment', 6);

  // Collect articles already displayed in top sections & desks
  const displayedIds = new Set([
    leadHeadline?.id,
    ...secondaryHeadlines.map(a => a.id),
    ...worldNews.map(a => a.id),
    ...karnatakaNews.map(a => a.id),
    ...techNews.map(a => a.id),
    ...businessNews.map(a => a.id),
    ...scienceNews.map(a => a.id),
    ...sportsNews.map(a => a.id),
    ...entertainmentNews.map(a => a.id)
  ].filter(Boolean));

  // All remaining articles for Extended Broadsheet Archive
  const archiveArticles = filteredArticles.filter(a => !displayedIds.has(a.id));
  const displayedArchive = archiveArticles.slice(0, extraVisibleCount);
  const hasMoreArchive = extraVisibleCount < archiveArticles.length;

  const handleLoadMoreArchive = () => {
    setExtraVisibleCount(prev => prev + 12);
  };

  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <main className="broadsheet-page max-w-7xl mx-auto px-3 sm:px-4 py-6 font-body-serif transition-colors text-stone-950 dark:text-stone-100">
      
      {/* Broadsheet Edition Top Banner */}
      <div className="newspaper-border-double pb-3 mb-6 text-center">
        <div className="flex flex-wrap items-center justify-between text-xs font-sans-ui font-bold text-stone-800 dark:text-stone-300 border-b border-stone-950/30 dark:border-stone-700 pb-2 mb-3">
          <div><strong className="text-black dark:text-white font-black">{t.mastheadTitle.toUpperCase()}</strong> • GLOBAL EDITION</div>
          <div>{formattedDate.toUpperCase()}</div>
          <div className="hidden sm:block">{t.weatherInfo}</div>
          <div>ISSUE #44,910</div>
        </div>

        {/* Breaking News Ticker if available */}
        {leadHeadline?.isBreaking && (
          <div className="bg-[#8b0000] text-white text-xs font-sans-ui py-1.5 px-3 rounded flex items-center justify-between mb-4 font-bold shadow-xs">
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 fill-white text-white animate-bounce" />
              <span className="uppercase tracking-wider font-extrabold">BREAKING BULLETIN:</span>
              <span className="truncate">{leadHeadline.title}</span>
            </span>
            <button 
              onClick={() => onSelectArticle(leadHeadline)} 
              className="underline text-stone-100 hover:text-white text-[11px] font-bold whitespace-nowrap ml-2"
            >
              Read Special Report &rarr;
            </button>
          </div>
        )}
      </div>

      {/* SECTION 1: HEADLINE OF THE DAY & MAIN LEAD STORY */}
      {leadHeadline && (
        <section className="border-b-2 border-stone-950 dark:border-stone-700 pb-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 8 Columns: Main Headline Showcase */}
            <div className="lg:col-span-8 border-r-0 lg:border-r border-stone-950/20 dark:border-stone-700 lg:pr-8">
              
              <div className="flex items-center gap-2 text-xs font-sans-ui font-black text-[#8b0000] dark:text-[#ff4d4d] uppercase tracking-widest mb-2">
                <span>{leadHeadline.category}</span>
                <span>•</span>
                <span>{t.headlineOfTheDay}</span>
              </div>

              <h2 
                onClick={() => onSelectArticle(leadHeadline)}
                className="font-serif-headline text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-stone-950 dark:text-[#f3f0e6] cursor-pointer hover:text-[#8b0000] dark:hover:text-amber-400 transition-colors mb-4"
              >
                {leadHeadline.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs font-sans-ui font-bold text-stone-800 dark:text-stone-300 mb-4">
                <span className="flex items-center gap-1 font-extrabold text-stone-950 dark:text-white">
                  <User className="w-3.5 h-3.5 text-[#8b0000]" /> By {leadHeadline.author || leadHeadline.publisher}
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8b0000]" /> {leadHeadline.readTime}
                </span>
                <span>|</span>
                <span className="bg-[#1a1a1a] text-white dark:bg-[#333] dark:text-stone-200 px-2 py-0.5 rounded font-bold border border-stone-900">
                  Source: {leadHeadline.publisher}
                </span>
              </div>

              {/* Lead Image */}
              {leadHeadline.imageUrl && (
                <div 
                  onClick={() => onSelectArticle(leadHeadline)}
                  className="relative group cursor-pointer mb-4 overflow-hidden rounded border border-stone-950/30 dark:border-stone-700 shadow-xs"
                >
                  <img 
                    src={leadHeadline.imageUrl} 
                    alt={leadHeadline.title} 
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-white">
                    <p className="text-xs font-sans-ui italic opacity-95 font-medium">
                      Associated News Service / {leadHeadline.publisher}. Click to open broadsheet reading room.
                    </p>
                  </div>
                </div>
              )}

              {/* Multi-Source Badges (AI Duplicate Grouping Feature) */}
              {leadHeadline.relatedSources && leadHeadline.relatedSources.length > 0 && (
                <div className="bg-[#f0ece1] dark:bg-[#222222] p-3.5 rounded border border-stone-950/20 dark:border-stone-700 mb-4">
                  <div className="flex items-center gap-2 text-xs font-sans-ui font-black text-stone-950 dark:text-white mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#8b0000]" />
                    <span>{t.aiStoryAggregation} ({leadHeadline.relatedSources.length} {t.verifiedOutlets}):</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-sans-ui">
                    {leadHeadline.relatedSources.map((src, i) => (
                      <a 
                        key={i} 
                        href={src.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-white dark:bg-[#1a1a1a] rounded border border-stone-950/25 dark:border-stone-700 text-stone-950 dark:text-stone-200 hover:border-[#8b0000] font-bold transition-colors shadow-2xs"
                      >
                        <span>{src.publisher}</span>
                        <ExternalLink className="w-3 h-3 text-stone-600" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Lead Paragraph with Drop Cap */}
              <div className="text-stone-950 dark:text-stone-200 text-base leading-relaxed mb-4 drop-cap font-medium">
                {leadHeadline.content || leadHeadline.description}
              </div>

              {/* AI Key Executive Summary */}
              {leadHeadline.aiSummary && (
                <div className="bg-[#e8e3d3] dark:bg-[#1e1e1e] border-l-4 border-[#8b0000] p-4 rounded-r my-4 border-r border-t border-b border-stone-950/20">
                  <div className="flex items-center gap-2 text-xs font-sans-ui font-black text-[#8b0000] dark:text-amber-400 uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" /> {t.aiExecutiveBriefing}
                  </div>
                  <p className="text-sm font-sans-ui font-extrabold text-stone-950 dark:text-stone-100 mb-2">
                    {leadHeadline.aiSummary.executiveSummary}
                  </p>
                  <ul className="list-disc list-inside text-xs font-sans-ui font-bold text-stone-900 dark:text-stone-300 space-y-1">
                    {leadHeadline.aiSummary.keyPoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button 
                onClick={() => onSelectArticle(leadHeadline)}
                className="inline-flex items-center gap-2 font-sans-ui text-xs font-black uppercase tracking-wider text-[#8b0000] dark:text-amber-400 hover:underline mt-2"
              >
                <span>{t.readMore}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

            {/* Right 4 Columns: Secondary Front-Page Stories & Daily Editorial */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Daily AI Editorial Box */}
              <div className="bg-[#e8e2d2] dark:bg-[#1f1f1f] p-5 rounded border-2 border-stone-950 dark:border-[#444] shadow-xs">
                <div className="border-b border-stone-950/20 dark:border-[#444] pb-2 mb-3">
                  <span className="font-sans-ui text-[11px] font-black text-[#8b0000] dark:text-amber-400 uppercase tracking-widest">
                    {t.dailyEditorial}
                  </span>
                  <h3 className="font-serif-headline text-xl font-black text-stone-950 dark:text-[#eee]">
                    State of the Chronicle
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-stone-900 dark:text-stone-300 italic mb-4 font-semibold">
                  "{isKannada ? DAILY_EDITORIAL_KANNADA : DAILY_EDITORIAL}"
                </p>
                <div className="text-right text-[11px] font-sans-ui font-extrabold text-stone-950 dark:text-stone-400">
                  — The Editorial Board
                </div>
              </div>

              {/* Secondary Stories */}
              <div className="space-y-4">
                <h3 className="font-sans-ui text-xs font-black text-stone-950 dark:text-[#eee] uppercase tracking-widest border-b-2 border-stone-950 dark:border-[#444] pb-1">
                  {t.topStories}
                </h3>

                {secondaryHeadlines.map((story) => (
                  <article 
                    key={story.id} 
                    onClick={() => onSelectArticle(story)}
                    className="group cursor-pointer border-b border-stone-950/15 dark:border-[#333] pb-3"
                  >
                    <span className="text-[10px] font-sans-ui font-black text-[#8b0000] uppercase tracking-wider">
                      {story.category}
                    </span>
                    <h4 className="font-serif-headline text-base font-extrabold text-stone-950 dark:text-[#eee] group-hover:text-[#8b0000] dark:group-hover:text-amber-400 transition-colors leading-snug my-1">
                      {story.title}
                    </h4>
                    <p className="text-xs text-stone-800 dark:text-stone-400 line-clamp-2 font-sans-ui font-medium">
                      {story.description}
                    </p>
                  </article>
                ))}
              </div>

            </div>

          </div>
        </section>
      )}

      {/* SECTION 2: MULTI-COLUMN CATEGORIZED NEWS DESKS */}
      <section className="space-y-10 border-b-2 border-stone-950 dark:border-[#444] pb-8">
        
        {/* DESK 1: WORLD & KARNATAKA / REGIONAL DESK (2 Broadsheet Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b-2 border-stone-950 dark:border-[#444] pb-8">
          
          {/* World Desk */}
          <div>
            <div className="newspaper-border-top-bottom py-1 mb-4 flex items-center justify-between">
              <h3 className="font-sans-ui text-sm font-black uppercase tracking-widest text-stone-950 dark:text-[#eee]">
                {t.worldDesk}
              </h3>
              <span className="text-xs font-serif-headline italic text-stone-800 font-extrabold">Global Coverage</span>
            </div>

            <div className="space-y-6">
              {worldNews.slice(0, 3).map((art) => (
                <article 
                  key={art.id} 
                  onClick={() => onSelectArticle(art)}
                  className="group cursor-pointer flex flex-col sm:flex-row gap-4 border-b border-stone-950/15 dark:border-stone-800 pb-4"
                >
                  {art.imageUrl && (
                    <img 
                      src={art.imageUrl} 
                      alt={art.title} 
                      className="w-full sm:w-32 h-24 object-cover rounded border border-stone-950/25 dark:border-stone-700" 
                    />
                  )}
                  <div className="flex-1">
                    <span className="text-[10px] font-sans-ui font-bold text-stone-700 dark:text-stone-400 uppercase">{art.publisher}</span>
                    <h4 className="font-serif-headline text-base font-bold text-stone-950 dark:text-[#eee] group-hover:text-[#8b0000] dark:group-hover:text-amber-400 transition-colors leading-tight my-1">
                      {art.title}
                    </h4>
                    <p className="text-xs font-sans-ui text-stone-800 dark:text-stone-400 line-clamp-2 font-medium">
                      {art.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Regional Karnataka / State Desk */}
          <div>
            <div className="newspaper-border-top-bottom py-1 mb-4 flex items-center justify-between">
              <h3 className="font-sans-ui text-sm font-black uppercase tracking-widest text-[#8b0000] dark:text-amber-400">
                KARNATAKA & REGIONAL DESK (ಕರ್ನಾಟಕ ಸುದ್ದಿ)
              </h3>
              <span className="text-xs font-serif-headline italic text-stone-800 font-extrabold">State & Districts</span>
            </div>

            <div className="space-y-6">
              {karnatakaNews.slice(0, 3).map((art) => (
                <article 
                  key={art.id} 
                  onClick={() => onSelectArticle(art)}
                  className="group cursor-pointer flex flex-col sm:flex-row gap-4 border-b border-stone-950/15 dark:border-stone-800 pb-4"
                >
                  {art.imageUrl && (
                    <img 
                      src={art.imageUrl} 
                      alt={art.title} 
                      className="w-full sm:w-32 h-24 object-cover rounded border border-stone-950/25 dark:border-stone-700" 
                    />
                  )}
                  <div className="flex-1">
                    <span className="text-[10px] font-sans-ui font-bold text-stone-700 dark:text-stone-400 uppercase">{art.publisher}</span>
                    <h4 className="font-serif-headline text-base font-bold text-stone-950 dark:text-[#eee] group-hover:text-[#8b0000] dark:group-hover:text-amber-400 transition-colors leading-tight my-1">
                      {art.title}
                    </h4>
                    <p className="text-xs font-sans-ui text-stone-800 dark:text-stone-400 line-clamp-2 font-medium">
                      {art.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

          </div>

        </div>

        {/* DESK 2: TECH, BUSINESS, SCIENCE, SPORTS (4 Column Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Tech Desk */}
          <div>
            <div className="border-b-2 border-stone-950 dark:border-[#555] pb-1 mb-3">
              <h4 className="font-sans-ui text-xs font-black uppercase tracking-widest text-[#8b0000]">{t.techDesk}</h4>
            </div>
            {techNews.slice(0, 2).map((art) => (
              <article key={art.id} onClick={() => onSelectArticle(art)} className="cursor-pointer group mb-4">
                <h5 className="font-serif-headline text-sm font-bold group-hover:text-[#8b0000] text-stone-950 dark:text-[#eee] mb-1">
                  {art.title}
                </h5>
                <p className="text-[11px] font-sans-ui text-stone-800 dark:text-stone-400 line-clamp-2 font-medium">
                  {art.description}
                </p>
              </article>
            ))}
          </div>

          {/* Business Desk */}
          <div>
            <div className="border-b-2 border-stone-950 dark:border-[#555] pb-1 mb-3">
              <h4 className="font-sans-ui text-xs font-black uppercase tracking-widest text-[#8b0000]">{t.marketsDesk}</h4>
            </div>
            {businessNews.slice(0, 2).map((art) => (
              <article key={art.id} onClick={() => onSelectArticle(art)} className="cursor-pointer group mb-4">
                <h5 className="font-serif-headline text-sm font-bold group-hover:text-[#8b0000] text-stone-950 dark:text-[#eee] mb-1">
                  {art.title}
                </h5>
                <p className="text-[11px] font-sans-ui text-stone-800 dark:text-stone-400 line-clamp-2 font-medium">
                  {art.description}
                </p>
              </article>
            ))}
          </div>

          {/* Science Desk */}
          <div>
            <div className="border-b-2 border-stone-950 dark:border-[#555] pb-1 mb-3">
              <h4 className="font-sans-ui text-xs font-black uppercase tracking-widest text-[#8b0000]">{t.scienceDesk}</h4>
            </div>
            {scienceNews.slice(0, 2).map((art) => (
              <article key={art.id} onClick={() => onSelectArticle(art)} className="cursor-pointer group mb-4">
                <h5 className="font-serif-headline text-sm font-bold group-hover:text-[#8b0000] text-stone-950 dark:text-[#eee] mb-1">
                  {art.title}
                </h5>
                <p className="text-[11px] font-sans-ui text-stone-800 dark:text-stone-400 line-clamp-2 font-medium">
                  {art.description}
                </p>
              </article>
            ))}
          </div>

          {/* Sports & Culture */}
          <div>
            <div className="border-b-2 border-stone-950 dark:border-[#555] pb-1 mb-3">
              <h4 className="font-sans-ui text-xs font-black uppercase tracking-widest text-[#8b0000]">{t.sportsDesk}</h4>
            </div>
            {[...sportsNews, ...entertainmentNews].slice(0, 2).map((art) => (
              <article key={art.id} onClick={() => onSelectArticle(art)} className="cursor-pointer group mb-4">
                <h5 className="font-serif-headline text-sm font-bold group-hover:text-[#8b0000] text-stone-950 dark:text-[#eee] mb-1">
                  {art.title}
                </h5>
                <p className="text-[11px] font-sans-ui text-stone-800 dark:text-stone-400 line-clamp-2 font-medium">
                  {art.description}
                </p>
              </article>
            ))}
          </div>

        </div>

      </section>

      {/* SECTION 3: EXTENDED BROADSHEET WIRE DISPATCHES & LOAD MORE */}
      {archiveArticles.length > 0 && (
        <section className="pt-8">
          <div className="newspaper-border-top-bottom py-1.5 mb-6 flex items-center justify-between">
            <h3 className="font-sans-ui text-sm font-black uppercase tracking-widest text-[#8b0000] dark:text-amber-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> EXTENDED BROADSHEET WIRE DISPATCHES ({archiveArticles.length} ADDITIONAL STORIES)
            </h3>
            <span className="text-xs font-serif-headline italic text-stone-700 dark:text-stone-300 font-extrabold">All Sources Ingestion</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedArchive.map((art) => (
              <article 
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="group cursor-pointer bg-[#f3efe2] dark:bg-[#1e1e1e] p-4 rounded border border-stone-950/20 dark:border-stone-800 hover:border-[#8b0000] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-sans-ui font-black text-[#8b0000] uppercase tracking-wider">{art.category}</span>
                  <h4 className="font-serif-headline text-sm font-bold text-stone-950 dark:text-[#eee] group-hover:text-[#8b0000] dark:group-hover:text-amber-400 leading-snug my-1">
                    {art.title}
                  </h4>
                  <p className="text-[11px] font-sans-ui text-stone-800 dark:text-stone-400 line-clamp-3 font-medium mb-3">
                    {art.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] font-sans-ui font-bold text-stone-700 dark:text-stone-400 pt-2 border-t border-stone-950/10 dark:border-stone-800">
                  <span>{art.publisher}</span>
                  <span>{art.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Broadsheet News Button */}
          {hasMoreArchive && (
            <div className="mt-8 text-center">
              <button
                onClick={handleLoadMoreArchive}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#8b0000] hover:bg-[#6b0000] text-white text-xs font-black uppercase tracking-widest rounded shadow-md hover:shadow-lg transition-all"
              >
                <span>Load More News Dispatches ({archiveArticles.length - extraVisibleCount} Remaining)</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      )}

      {/* Footer Imprint */}
      <footer className="mt-12 pt-6 border-t-2 border-stone-950 dark:border-[#444] text-center font-sans-ui text-xs text-stone-800 dark:text-stone-400">
        <p className="font-serif-headline italic text-sm text-stone-950 dark:text-[#eee] mb-1 font-bold">
          "Veritas et Scientia in Omnia — Truth and Knowledge in All Things"
        </p>
        <p>© 2026 The World Chronicle. All RSS feeds fetched with attribution. Powered by AI Synthesis & Broadsheet Layout Engine.</p>
      </footer>

    </main>
  );
};
