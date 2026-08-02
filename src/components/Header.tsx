import React from 'react';
import { 
  Newspaper, 
  LayoutGrid, 
  Settings, 
  Search, 
  Volume2, 
  Download, 
  RefreshCw, 
  Moon, 
  Sun, 
  Globe, 
  Map,
  Sparkles
} from 'lucide-react';
import { ViewMode, Category } from '../types/newspaper';
import { SupportedLanguage, UI_TRANSLATIONS, CATEGORY_TRANSLATIONS } from '../lib/translationService';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  selectedLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  isSyncing: boolean;
  onForceSync: () => void;
  onExportPDF: () => void;
  onToggleAudioPlayer: () => void;
  isAudioPlaying: boolean;
  lastSyncTime: string;
}

const CATEGORIES: Category[] = [
  'All', 
  'World', 
  'Karnataka',
  'Technology', 
  'Business', 
  'Science', 
  'Sports', 
  'Entertainment', 
  'Politics', 
  'Health', 
  'Climate',
  'Education',
  'Gaming',
  'Automobiles',
  'Travel'
];

const LANGUAGES: SupportedLanguage[] = [
  'All',
  'English',
  'Kannada',
  'Hindi',
  'Spanish',
  'French',
  'German',
  'Japanese',
  'Arabic'
];

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLanguage,
  onLanguageChange,
  isDarkMode,
  onToggleDarkMode,
  isSyncing,
  onForceSync,
  onExportPDF,
  onToggleAudioPlayer,
  isAudioPlaying,
  lastSyncTime
}) => {
  const t = UI_TRANSLATIONS[selectedLanguage] || UI_TRANSLATIONS.English;
  const categoryNames = CATEGORY_TRANSLATIONS[selectedLanguage] || CATEGORY_TRANSLATIONS.English;

  return (
    <header className="no-print sticky top-0 z-40 bg-[#f4f0e4] dark:bg-[#1a1a1a] border-b-2 border-stone-950 dark:border-[#444444] shadow-md transition-colors text-stone-950 dark:text-stone-100">
      
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#1c1917] text-[#e7e5e4] text-xs px-3 sm:px-6 py-2 flex flex-wrap justify-between items-center font-sans-ui border-b border-[#333]">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1 font-bold text-[#d4af37] uppercase tracking-widest text-[10px]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> AI Broadsheet Chronicle
          </span>
          <span className="hidden sm:inline text-stone-500">|</span>
          <span className="hidden md:inline text-stone-300 font-semibold text-[11px]">
            Last Sync: {lastSyncTime ? new Date(lastSyncTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Just now'}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-stone-300">
          <button 
            onClick={onForceSync}
            disabled={isSyncing}
            className="flex items-center gap-1 min-h-[36px] px-2 hover:text-[#d4af37] transition-colors disabled:opacity-50 font-semibold text-xs"
            title="Fetch fresh RSS feeds now"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#d4af37]' : ''}`} />
            <span className="hidden sm:inline">{isSyncing ? t.syncing : t.syncFeeds}</span>
          </button>

          <button 
            onClick={onToggleAudioPlayer}
            className={`flex items-center gap-1 min-h-[36px] px-2 transition-colors text-xs ${isAudioPlaying ? 'text-[#d4af37] font-bold' : 'hover:text-white'}`}
            title="Listen to Audio Newspaper Briefing"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-semibold">{t.audioBriefing}</span>
          </button>

          <button 
            onClick={onExportPDF}
            className="flex items-center gap-1 min-h-[36px] px-2 hover:text-[#d4af37] transition-colors font-semibold text-xs"
            title="Download Broadsheet PDF Edition"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.downloadPdf}</span>
          </button>

          {/* Language Selector Dropdown */}
          <div className="flex items-center gap-1 border-l border-stone-700 pl-2 sm:pl-3">
            <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value as SupportedLanguage)}
              className="bg-stone-900 border border-stone-700 text-xs text-amber-300 font-bold px-2 py-1 rounded cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang} className="bg-stone-900 text-stone-100">
                  {lang === 'All' ? '🌐 ALL — Global' :
                   lang === 'English' ? 'EN — English' :
                   lang === 'Kannada' ? 'KN — ಕನ್ನಡ' :
                   lang === 'Hindi' ? 'HI — हिंदी' :
                   lang === 'Spanish' ? 'ES — Español' :
                   lang === 'French' ? 'FR — Français' :
                   lang === 'German' ? 'DE — Deutsch' :
                   lang === 'Japanese' ? 'JA — 日本語' :
                   'AR — العربية'}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={onToggleDarkMode}
            className="p-1.5 rounded min-h-[36px] min-w-[36px] flex items-center justify-center hover:bg-stone-800 transition-colors"
            title="Toggle Dark Ink Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-300" />}
          </button>
        </div>
      </div>

      {/* Main Header Banner with Masthead & Desktop Layout Alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Mode Switcher Buttons */}
        <div className="flex items-center gap-1 bg-[#e5dfce] dark:bg-[#262626] p-1.5 rounded-lg border border-stone-950/30 dark:border-[#444] shrink-0">
          <button
            onClick={() => onViewChange('newspaper')}
            className={`flex items-center gap-2 px-3 py-2 rounded-md font-sans-ui text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              currentView === 'newspaper'
                ? 'bg-[#1c1917] text-[#faf8f2] shadow-sm'
                : 'text-stone-950 dark:text-[#ccc] hover:text-[#000] dark:hover:text-white'
            }`}
          >
            <Newspaper className="w-4 h-4 text-[#8b0000] dark:text-amber-400" />
            <span>{t.newspaperMode}</span>
          </button>

          <button
            onClick={() => onViewChange('blog')}
            className={`flex items-center gap-2 px-3 py-2 rounded-md font-sans-ui text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              currentView === 'blog'
                ? 'bg-[#1c1917] text-[#faf8f2] shadow-sm'
                : 'text-stone-950 dark:text-[#ccc] hover:text-[#000] dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4 text-[#8b0000] dark:text-amber-400" />
            <span>{t.blogMode}</span>
          </button>

          <button
            onClick={() => onViewChange('worldmap')}
            className={`flex items-center gap-2 px-3 py-2 rounded-md font-sans-ui text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              currentView === 'worldmap'
                ? 'bg-[#1c1917] text-[#faf8f2] shadow-sm'
                : 'text-stone-950 dark:text-[#ccc] hover:text-[#000] dark:hover:text-white'
            }`}
          >
            <Map className="w-4 h-4 text-[#8b0000] dark:text-amber-400" />
            <span>{t.worldMap}</span>
          </button>

          <button
            onClick={() => onViewChange('dashboard')}
            className={`flex items-center gap-2 px-3 py-2 rounded-md font-sans-ui text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
              currentView === 'dashboard'
                ? 'bg-[#8b0000] text-white shadow-sm'
                : 'text-stone-950 dark:text-[#ccc] hover:text-[#8b0000]'
            }`}
            title="RSS Feed Admin Dashboard"
          >
            <Settings className="w-4 h-4" />
            <span>{t.rssDashboard}</span>
          </button>
        </div>

        {/* Center: Masthead Title */}
        <div className="text-center cursor-pointer my-1 md:my-0 flex-1 px-2" onClick={() => onViewChange('newspaper')}>
          <h1 className="font-masthead text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-stone-950 dark:text-[#f3f0e6]">
            {t.mastheadTitle}
          </h1>
          <p className="font-serif-headline italic text-xs text-stone-800 dark:text-[#a8a29e] tracking-widest mt-0.5 font-bold">
            {t.mastheadSub}
          </p>
        </div>

        {/* Right Side: Real-Time Search Bar */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-700 dark:text-stone-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-[#fcfbfa] dark:bg-[#222222] text-xs font-sans-ui text-stone-950 dark:text-[#eee] font-bold pl-9 pr-3 py-2 rounded-md border border-stone-950/30 dark:border-[#555] focus:outline-none focus:ring-2 focus:ring-[#8b0000]"
          />
        </div>

      </div>

      {/* Category Navigation Bar (Clean Scrollable Strip across All 15 Categories) */}
      <div className="bg-[#e4ddcc] dark:bg-[#202020] border-t border-b border-stone-950/20 dark:border-[#333] overflow-x-auto scrollbar-none touch-pan-x">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-sans-ui font-bold">
          
          <div className="flex items-center gap-1.5 py-1.5 w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 rounded transition-all whitespace-nowrap uppercase tracking-wider text-[11px] font-black min-h-[36px] shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#8b0000] text-white shadow-xs'
                    : 'text-stone-950 dark:text-[#ccc] hover:bg-[#d5cebc] dark:hover:bg-[#333]'
                }`}
              >
                {categoryNames[cat] || cat}
              </button>
            ))}
          </div>

        </div>
      </div>

    </header>
  );
};
