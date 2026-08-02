import React, { useState, useEffect } from 'react';
import { ViewMode, Category, Article, RSSFeed } from './types/newspaper';
import { SupportedLanguage } from './lib/translationService';
import { 
  getStoredFeeds, 
  saveFeeds, 
  getStoredArticles, 
  getLastSyncTime, 
  isSyncNeeded, 
  syncAllFeeds 
} from './lib/rssService';
import { DEFAULT_RSS_FEEDS, INITIAL_ARTICLES } from './data/rssFeeds';
import { Header } from './components/Header';
import { NewspaperLayout } from './components/NewspaperLayout';
import { BlogLayout } from './components/BlogLayout';
import { Dashboard } from './components/Dashboard';
import { WorldNewsMap } from './components/WorldNewsMap';
import { ArticleModal } from './components/ArticleModal';
import { AudioPlayer } from './components/AudioPlayer';
import { WelcomeSyncModal } from './components/WelcomeSyncModal';

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('newspaper');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('English'); // English default
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [feeds, setFeeds] = useState<RSSFeed[]>(() => getStoredFeeds());
  const [articles, setArticles] = useState<Article[]>(() => getStoredArticles());
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true); // Open animated intro modal on load
  const [lastSyncTime, setLastSyncTimeState] = useState<string>(() => getLastSyncTime());

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Automated 1-Hour Sync Check on Mount & Interval
  useEffect(() => {
    if (isSyncNeeded()) {
      handleForceSync();
    }

    const interval = setInterval(() => {
      if (isSyncNeeded()) {
        handleForceSync();
      }
    }, 10 * 60 * 1000); // Check every 10 mins if 1 hour has elapsed

    return () => clearInterval(interval);
  }, []);

  const handleForceSync = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncMessage('Initializing RSS Ingestion Worker...');

    try {
      const result = await syncAllFeeds(feeds, (msg, percent) => {
        setSyncMessage(`${msg} (${percent}%)`);
      });

      setArticles(result.updatedArticles);
      setFeeds(result.updatedFeeds);
      setLastSyncTimeState(new Date().toISOString());
    } catch (err) {
      console.error('RSS Sync Error:', err);
    } finally {
      setIsSyncing(false);
      setSyncMessage('');
    }
  };

  // RSS Feed Management Handlers
  const handleAddFeed = (newFeedData: Omit<RSSFeed, 'id' | 'status' | 'lastFetched' | 'itemCount'>) => {
    const newFeed: RSSFeed = {
      ...newFeedData,
      id: `custom-feed-${Date.now()}`,
      status: 'active',
      lastFetched: 'Pending sync',
      itemCount: 0
    };

    const updated = [newFeed, ...feeds];
    setFeeds(updated);
    saveFeeds(updated);
    handleForceSync();
  };

  const handleUpdateFeed = (updatedFeed: RSSFeed) => {
    const updated = feeds.map(f => f.id === updatedFeed.id ? updatedFeed : f);
    setFeeds(updated);
    saveFeeds(updated);
  };

  const handleDeleteFeed = (id: string) => {
    const updated = feeds.filter(f => f.id !== id);
    setFeeds(updated);
    saveFeeds(updated);
  };

  const handleResetFeeds = () => {
    setFeeds(DEFAULT_RSS_FEEDS);
    saveFeeds(DEFAULT_RSS_FEEDS);
    setArticles(INITIAL_ARTICLES);
  };

  const handleExportPDF = () => {
    window.print();
  };

  const handleSpeakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  // 1. Language Filter: Match language or unicode script
  const languageMatchedArticles = articles.filter(art => {
    if (selectedLanguage === 'Kannada') {
      return art.language === 'Kannada' || /[\u0C80-\u0CFF]/.test(art.title);
    }
    if (selectedLanguage === 'English') {
      return art.language === 'English' || !/[\u0C80-\u0CFF]/.test(art.title);
    }
    return true;
  });

  const displayArticlesList = languageMatchedArticles.length > 0 ? languageMatchedArticles : articles;

  // 2. Search & Category Filter
  const filteredArticles = displayArticlesList.filter(art => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.description.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q) ||
      art.publisher.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-paper-texture transition-colors">
      
      {/* Header with Masthead, Controls & Language Switcher */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
        isSyncing={isSyncing}
        onForceSync={() => setIsWelcomeOpen(true)}
        onExportPDF={handleExportPDF}
        onToggleAudioPlayer={() => setIsAudioOpen(prev => !prev)}
        isAudioPlaying={isAudioOpen}
        lastSyncTime={lastSyncTime}
      />

      {/* Sync Status Banner */}
      {isSyncing && (
        <div className="no-print bg-[#8b0000] text-white text-xs font-sans-ui py-1.5 px-4 text-center font-bold flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span>{syncMessage || 'Automated RSS Ingestion Worker Running...'}</span>
        </div>
      )}

      {/* Main View Router */}
      {currentView === 'newspaper' && (
        <NewspaperLayout
          articles={filteredArticles}
          selectedCategory={selectedCategory}
          selectedLanguage={selectedLanguage}
          onSelectArticle={setSelectedArticle}
        />
      )}

      {currentView === 'blog' && (
        <BlogLayout
          articles={filteredArticles}
          selectedCategory={selectedCategory}
          selectedLanguage={selectedLanguage}
          onSelectArticle={setSelectedArticle}
        />
      )}

      {currentView === 'worldmap' && (
        <WorldNewsMap
          articles={filteredArticles}
          onSelectArticle={setSelectedArticle}
        />
      )}

      {currentView === 'dashboard' && (
        <Dashboard
          feeds={feeds}
          onAddFeed={handleAddFeed}
          onUpdateFeed={handleUpdateFeed}
          onDeleteFeed={handleDeleteFeed}
          onResetFeeds={handleResetFeeds}
          onForceSync={handleForceSync}
          isSyncing={isSyncing}
        />
      )}

      {/* Animated Welcome / Sync Feeds Intro Modal */}
      <WelcomeSyncModal
        isOpen={isWelcomeOpen}
        onClose={() => setIsWelcomeOpen(false)}
        onSync={handleForceSync}
        isSyncing={isSyncing}
        syncMessage={syncMessage}
        selectedLanguage={selectedLanguage}
        feedCount={feeds.length}
      />

      {/* Article Detail Broadsheet Modal */}
      <ArticleModal
        article={selectedArticle}
        selectedLanguage={selectedLanguage}
        onClose={() => setSelectedArticle(null)}
        onSpeak={handleSpeakText}
      />

      {/* Floating Audio Newspaper Briefing Player */}
      <AudioPlayer
        articles={filteredArticles}
        isOpen={isAudioOpen}
        onClose={() => setIsAudioOpen(false)}
      />

    </div>
  );
}
export default App;
