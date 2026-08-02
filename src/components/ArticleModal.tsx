import React from 'react';
import { Article } from '../types/newspaper';
import { X, Sparkles, ExternalLink, Clock, User, ShieldCheck, Volume2, Printer } from 'lucide-react';
import { SupportedLanguage, UI_TRANSLATIONS, translateArticle } from '../lib/translationService';

interface ArticleModalProps {
  article: Article | null;
  selectedLanguage: SupportedLanguage;
  onClose: () => void;
  onSpeak: (text: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  selectedLanguage,
  onClose,
  onSpeak
}) => {
  if (!article) return null;

  const t = UI_TRANSLATIONS[selectedLanguage] || UI_TRANSLATIONS.English;
  const translatedArticle = translateArticle(article, selectedLanguage);

  const formattedDate = new Date(translatedArticle.pubDate).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      
      {/* Modal Card */}
      <div className="bg-[#faf8f2] dark:bg-[#1c1c1c] text-[#0d0d0d] dark:text-[#eee] w-full max-w-3xl rounded-xl border-2 border-[#1a1a1a] dark:border-[#444] shadow-2xl overflow-hidden my-auto font-body-serif relative">
        
        {/* Top Control Bar */}
        <div className="no-print bg-[#e8e2d2] dark:bg-[#252525] px-4 sm:px-6 py-3 border-b border-[#1a1a1a]/25 dark:border-[#444] flex items-center justify-between font-sans-ui text-xs font-bold">
          <div className="flex items-center gap-1.5 uppercase tracking-wider text-[#8b0000] dark:text-amber-400 font-extrabold text-[11px] sm:text-xs">
            <span>{t.mastheadTitle.toUpperCase()}</span> <span className="hidden xs:inline">• BROADSHEET ROOM</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onSpeak(`${translatedArticle.title}. ${translatedArticle.aiSummary?.executiveSummary || translatedArticle.description}`)}
              className="flex items-center gap-1 min-h-[36px] px-2 text-stone-800 dark:text-stone-300 hover:text-[#8b0000] transition-colors"
              title="Listen to Article TTS"
            >
              <Volume2 className="w-4 h-4 text-[#8b0000]" />
              <span className="hidden sm:inline">Read Aloud</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1 min-h-[36px] px-2 text-stone-800 dark:text-stone-300 hover:text-[#8b0000] transition-colors"
              title="Print Article"
            >
              <Printer className="w-4 h-4 text-[#8b0000]" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 min-h-[36px] min-w-[36px] flex items-center justify-center hover:bg-[#d5cebc] dark:hover:bg-[#333] rounded transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5 text-stone-900 dark:text-stone-100" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 max-h-[85vh] overflow-y-auto touch-pan-y">
          
          <div className="flex items-center gap-2 text-xs font-sans-ui font-black text-[#8b0000] dark:text-[#ff4d4d] uppercase tracking-widest mb-2">
            <span>{translatedArticle.category}</span>
            <span>•</span>
            <span className="truncate">{formattedDate.toUpperCase()}</span>
          </div>

          <h2 className="font-serif-headline text-xl sm:text-3xl lg:text-4xl font-black leading-tight text-[#0d0d0d] dark:text-[#f3f0e6] mb-3">
            {translatedArticle.title}
          </h2>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-sans-ui font-semibold text-[#4a4742] dark:text-[#a8a29e] border-b border-[#1a1a1a]/20 dark:border-[#444] pb-3 mb-5">
            <span className="flex items-center gap-1 font-bold text-[#0d0d0d] dark:text-[#eee]">
              <User className="w-3.5 h-3.5 text-[#8b0000]" /> By {translatedArticle.author || translatedArticle.publisher}
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {translatedArticle.readTime}
            </span>
            <span>|</span>
            <span className="bg-[#e4ddcc] dark:bg-[#333] px-2 py-0.5 rounded text-[#0d0d0d] dark:text-[#ddd] font-bold border border-[#1a1a1a]/15">
              Source: {translatedArticle.publisher}
            </span>
          </div>

          {/* Lead Image */}
          {translatedArticle.imageUrl && (
            <div className="mb-5 rounded overflow-hidden border border-[#1a1a1a]/30 dark:border-[#444]">
              <img src={translatedArticle.imageUrl} alt={translatedArticle.title} className="w-full h-56 sm:h-80 object-cover" />
            </div>
          )}

          {/* AI Executive Summary Box */}
          {translatedArticle.aiSummary && (
            <div className="bg-[#f2efe4] dark:bg-[#252525] border-l-4 border-[#8b0000] p-4 sm:p-5 rounded-r my-5 font-sans-ui border-r border-t border-b border-[#1a1a1a]/15">
              <div className="flex items-center gap-2 text-xs font-black text-[#8b0000] dark:text-amber-400 uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" /> {t.aiExecutiveBriefing}
              </div>
              <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 mb-3">
                {translatedArticle.aiSummary.executiveSummary}
              </p>
              
              <div className="space-y-1.5 text-xs text-stone-800 dark:text-stone-300 font-medium">
                <strong className="text-[#0d0d0d] dark:text-stone-100 uppercase tracking-wider text-[10px] font-black">Key Takeaways:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {translatedArticle.aiSummary.keyPoints.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* Timeline if available */}
              {translatedArticle.aiSummary.timeline && (
                <div className="mt-4 pt-3 border-t border-stone-300 dark:border-stone-700">
                  <strong className="text-[#0d0d0d] dark:text-stone-100 uppercase tracking-wider text-[10px] block mb-2 font-black">
                    Event Timeline:
                  </strong>
                  <div className="space-y-1 text-xs">
                    {translatedArticle.aiSummary.timeline.map((step, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="font-bold text-[#8b0000] dark:text-amber-400 w-16 shrink-0">{step.yearOrTime}</span>
                        <span>{step.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Article Main Text with Drop Cap */}
          <div className="text-stone-900 dark:text-stone-200 text-sm sm:text-base leading-relaxed space-y-4 drop-cap font-medium">
            <p>{translatedArticle.content || translatedArticle.description}</p>
          </div>

          {/* Multi-Source Badges */}
          {translatedArticle.relatedSources && translatedArticle.relatedSources.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#1a1a1a]/20 dark:border-[#444] font-sans-ui">
              <div className="flex items-center gap-2 text-xs font-black text-stone-900 dark:text-stone-100 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#8b0000]" />
                <span>{t.aiStoryAggregation} ({translatedArticle.relatedSources.length} {t.verifiedOutlets}):</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {translatedArticle.relatedSources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#e4ddcc] dark:bg-[#333] rounded text-xs font-bold text-stone-900 dark:text-stone-200 hover:text-[#8b0000] transition-colors border border-[#1a1a1a]/15"
                  >
                    <span>{src.publisher}</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Original Source Link Button */}
          <div className="mt-6 text-center font-sans-ui">
            <a
              href={translatedArticle.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8b0000] hover:bg-[#6b0000] text-white text-xs font-black uppercase tracking-wider rounded transition-colors shadow-sm w-full sm:w-auto justify-center"
            >
              <span>Read Original Story at {translatedArticle.publisher}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
