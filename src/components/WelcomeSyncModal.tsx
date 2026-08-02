import React from 'react';
import { Rss, Sparkles, RefreshCw, Globe, ShieldCheck, X, ArrowUp } from 'lucide-react';
import { SupportedLanguage } from '../lib/translationService';

interface WelcomeSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSync: () => void;
  isSyncing: boolean;
  syncMessage: string;
  selectedLanguage: SupportedLanguage;
  feedCount: number;
}

export const WelcomeSyncModal: React.FC<WelcomeSyncModalProps> = ({
  isOpen,
  onClose,
  onSync,
  isSyncing,
  syncMessage,
  selectedLanguage,
  feedCount
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      
      {/* Animated Arrow Pointing Up to Upper Header Sync Button */}
      <div className="fixed top-12 right-28 z-50 hidden md:flex flex-col items-center gap-1 text-amber-400 animate-bounce pointer-events-none">
        <ArrowUp className="w-8 h-8 stroke-[3] text-amber-400 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
        <span className="bg-[#8b0000] text-white font-sans-ui text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-lg border border-amber-400">
          Upper Sync Feeds Button ↑
        </span>
      </div>

      {/* Modal Dialog Card */}
      <div className="bg-[#faf8f2] dark:bg-[#1a1a1a] text-stone-950 dark:text-stone-100 w-full max-w-xl rounded-2xl border-4 border-[#8b0000] dark:border-amber-500 shadow-2xl overflow-hidden font-sans-ui relative transition-all transform scale-100">
        
        {/* Decorative Top Banner */}
        <div className="bg-[#8b0000] text-white px-6 py-4 flex items-center justify-between border-b border-[#6b0000]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
            <span className="text-xs font-black uppercase tracking-widest text-amber-300">
              THE WORLD CHRONICLE — GLOBAL EDITION
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            title="Dismiss Welcome Modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 text-center">
          
          {/* Animated Pulsing RSS Icon Badge */}
          <div className="mx-auto w-16 h-16 rounded-full bg-[#8b0000]/10 dark:bg-amber-400/10 flex items-center justify-center mb-5 border-2 border-[#8b0000]/30 dark:border-amber-400/30 shadow-inner relative">
            <Rss className="w-8 h-8 text-[#8b0000] dark:text-amber-400 animate-bounce" />
          </div>

          <h2 className="font-serif-headline text-2xl sm:text-4xl font-black leading-tight text-stone-950 dark:text-[#f3f0e6] mb-3">
            Welcome to The World Chronicle
          </h2>

          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-medium leading-relaxed max-w-md mx-auto mb-6">
            Connect to <strong className="text-[#8b0000] dark:text-amber-400 font-extrabold">{feedCount}+ live international RSS streams</strong> (BBC, Reuters, NYT, Google News & Oneindia Kannada). Tap below or click the upper <span className="underline font-bold text-[#8b0000] dark:text-amber-400">Sync Feeds ↑</span> button to fetch breaking headlines.
          </p>

          {/* Features Highlights Pills */}
          <div className="grid grid-cols-3 gap-2.5 mb-8 text-[11px] font-bold text-stone-800 dark:text-stone-300">
            <div className="bg-[#f0ece1] dark:bg-[#252525] p-3 rounded-lg border border-stone-300 dark:border-stone-700 flex flex-col items-center gap-1">
              <Globe className="w-4 h-4 text-[#8b0000] dark:text-amber-400" />
              <span>150+ Global Feeds</span>
            </div>
            <div className="bg-[#f0ece1] dark:bg-[#252525] p-3 rounded-lg border border-stone-300 dark:border-stone-700 flex flex-col items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#8b0000] dark:text-amber-400" />
              <span>AI Summaries</span>
            </div>
            <div className="bg-[#f0ece1] dark:bg-[#252525] p-3 rounded-lg border border-stone-300 dark:border-stone-700 flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#8b0000] dark:text-amber-400" />
              <span>Multi-Source Badges</span>
            </div>
          </div>

          {/* Syncing Progress Banner */}
          {isSyncing && (
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-900 dark:text-amber-300 text-xs font-bold animate-pulse flex items-center justify-center gap-3">
              <RefreshCw className="w-4 h-4 animate-spin text-[#8b0000] dark:text-amber-400" />
              <span>{syncMessage || 'Ingesting live RSS dispatches...'}</span>
            </div>
          )}

          {/* Primary Action Button (Pulsing Intro Button) */}
          <div className="space-y-3">
            <button
              onClick={onSync}
              disabled={isSyncing}
              className="w-full py-4 px-6 bg-[#8b0000] hover:bg-[#6b0000] text-white text-xs sm:text-sm font-black uppercase tracking-widest rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 border-2 border-amber-400/50 disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>
                {isSyncing 
                  ? 'Syncing Live Feeds...' 
                  : '⚡ Sync Live Global Feeds Now (150+ Streams)'
                }
              </span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 text-xs font-extrabold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Continue Reading Current Edition &rarr;
            </button>
          </div>

        </div>

        {/* Modal Footer Stamp */}
        <div className="bg-[#e8e2d2] dark:bg-[#202020] px-6 py-2.5 text-center text-[10px] font-mono text-stone-600 dark:text-stone-400 border-t border-stone-300 dark:border-stone-800">
          THE WORLD CHRONICLE • AUTOMATED RSS WORKER • 2026 EDITION
        </div>

      </div>

    </div>
  );
};
