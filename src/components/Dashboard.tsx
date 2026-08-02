import React, { useState } from 'react';
import { RSSFeed, Category } from '../types/newspaper';
import { SupportedLanguage } from '../lib/translationService';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  RefreshCw, 
  Rss, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw,
  Sparkles,
  Globe
} from 'lucide-react';

interface DashboardProps {
  feeds: RSSFeed[];
  onAddFeed: (feed: Omit<RSSFeed, 'id' | 'status' | 'lastFetched' | 'itemCount'>) => void;
  onUpdateFeed: (feed: RSSFeed) => void;
  onDeleteFeed: (id: string) => void;
  onResetFeeds: () => void;
  onForceSync: () => void;
  isSyncing: boolean;
}

const CATEGORIES: Category[] = [
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
  'English',
  'Kannada',
  'Hindi',
  'Spanish',
  'French',
  'German',
  'Japanese',
  'Arabic'
];

export const Dashboard: React.FC<DashboardProps> = ({
  feeds,
  onAddFeed,
  onUpdateFeed,
  onDeleteFeed,
  onResetFeeds,
  onForceSync,
  isSyncing
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFeed, setEditingFeed] = useState<RSSFeed | null>(null);
  const [filterLang, setFilterLang] = useState<string>('All');

  // Form State
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState<Category>('Karnataka');
  const [publisher, setPublisher] = useState('');
  const [language, setLanguage] = useState<SupportedLanguage>('Kannada');

  const openAddModal = () => {
    setEditingFeed(null);
    setName('');
    setUrl('');
    setCategory('Karnataka');
    setPublisher('');
    setLanguage('Kannada');
    setIsModalOpen(true);
  };

  const openEditModal = (feed: RSSFeed) => {
    setEditingFeed(feed);
    setName(feed.name);
    setUrl(feed.url);
    setCategory(feed.category);
    setPublisher(feed.publisher);
    setLanguage(feed.language || 'English');
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !url.trim() || !publisher.trim()) return;

    if (editingFeed) {
      onUpdateFeed({
        ...editingFeed,
        name: name.trim(),
        url: url.trim(),
        category,
        publisher: publisher.trim(),
        language
      });
    } else {
      onAddFeed({
        name: name.trim(),
        url: url.trim(),
        category,
        publisher: publisher.trim(),
        language,
        isCustom: true
      });
    }
    setIsModalOpen(false);
  };

  const displayedFeeds = filterLang === 'All' 
    ? feeds 
    : feeds.filter(f => f.language === filterLang);

  return (
    <main className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8 font-sans-ui transition-colors text-stone-950 dark:text-stone-100">
      
      {/* Dashboard Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#f3efe2] dark:bg-[#1e1e1e] p-5 sm:p-6 rounded-xl border-2 border-stone-950 dark:border-stone-800 shadow-xs mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2 text-[#8b0000] dark:text-amber-400 font-bold text-xs uppercase tracking-widest mb-1">
            <Rss className="w-4 h-4" /> Multilingual RSS Ingestion Engine
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-stone-950 dark:text-stone-100">
            RSS Feed Control Center ({feeds.length} Active Streams)
          </h2>
          <p className="text-xs text-stone-800 dark:text-stone-400 mt-1 font-semibold">
            Configured with 120+ global RSS networks, Google News, Bing News, Oneindia Kannada, and 1-hour automated background sync.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={onForceSync}
            disabled={isSyncing}
            className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-colors disabled:opacity-50 shadow-xs"
          >
            <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Syncing Feeds...' : 'Sync All Feeds Now'}</span>
          </button>

          <button
            onClick={openAddModal}
            className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 bg-stone-950 hover:bg-black text-white dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-lg text-xs font-black uppercase tracking-wider transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add RSS Feed</span>
          </button>

          <button
            onClick={onResetFeeds}
            className="p-2.5 text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white transition-colors"
            title="Reset to Default RSS Feeds"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metrics & Language Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#1e1e1e] p-4 rounded-xl border border-stone-950/20 dark:border-stone-800 mb-6 shadow-2xs">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
          <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" /> {feeds.filter(f => f.status === 'active').length} Active Feeds
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
            <Sparkles className="w-4 h-4" /> {feeds.filter(f => f.language === 'Kannada').length} Kannada Feeds
          </span>
        </div>

        {/* Filter by language */}
        <div className="flex items-center gap-2 text-xs font-bold w-full sm:w-auto">
          <Globe className="w-4 h-4 text-[#8b0000]" />
          <span>Filter:</span>
          <select
            value={filterLang}
            onChange={(e) => setFilterLang(e.target.value)}
            className="bg-stone-100 dark:bg-stone-800 border border-stone-950/30 dark:border-stone-700 rounded px-3 py-1.5 text-xs text-stone-950 dark:text-white font-bold w-full sm:w-auto"
          >
            <option value="All">All Languages ({feeds.length})</option>
            <option value="Kannada">Kannada (ಕನ್ನಡ) ({feeds.filter(f => f.language === 'Kannada').length})</option>
            <option value="English">English ({feeds.filter(f => f.language === 'English').length})</option>
          </select>
        </div>
      </div>

      {/* Feeds Table */}
      <div className="bg-white dark:bg-[#1e1e1e] rounded-xl border-2 border-stone-950 dark:border-stone-800 overflow-hidden shadow-xs">
        <div className="px-4 sm:px-6 py-4 border-b-2 border-stone-950 dark:border-stone-800 flex justify-between items-center bg-[#f3efe2] dark:bg-[#151515]">
          <h3 className="font-black text-stone-950 dark:text-stone-100 text-sm uppercase tracking-wider">
            Active RSS Sources ({displayedFeeds.length})
          </h3>
        </div>

        <div className="overflow-x-auto touch-pan-x">
          <table className="w-full text-left text-xs font-sans-ui min-w-[700px]">
            <thead className="bg-stone-200 dark:bg-[#181818] text-stone-950 dark:text-stone-300 uppercase tracking-wider font-extrabold border-b border-stone-950/20 dark:border-stone-800">
              <tr>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Language</th>
                <th className="py-3.5 px-4">Feed Name & Publisher</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">RSS Feed URL</th>
                <th className="py-3.5 px-4">Last Fetched</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 dark:divide-stone-800 font-medium">
              {displayedFeeds.map((feed) => (
                <tr key={feed.id} className="hover:bg-[#f8f5eb] dark:hover:bg-[#252525] transition-colors">
                  <td className="py-3.5 px-4">
                    {feed.status === 'active' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-red-500/15 text-red-700 dark:text-red-400 border border-red-500/30" title={feed.errorMessage}>
                        <AlertTriangle className="w-3 h-3" /> Error
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider ${
                      feed.language === 'Kannada' 
                        ? 'bg-[#8b0000] text-white' 
                        : 'bg-stone-900 text-white dark:bg-stone-700'
                    }`}>
                      {feed.language || 'English'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-stone-950 dark:text-stone-100">
                    <div>{feed.name}</div>
                    <div className="text-[10px] text-stone-600 dark:text-stone-400 font-medium">{feed.publisher}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-stone-200 dark:bg-stone-800 font-bold text-stone-900 dark:text-stone-300 border border-stone-950/15">
                      {feed.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-stone-700 dark:text-stone-400 truncate max-w-xs font-mono text-[11px]" title={feed.url}>
                    {feed.url}
                  </td>
                  <td className="py-3.5 px-4 text-stone-700 dark:text-stone-400 font-bold">
                    {feed.lastFetched || 'Never'}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditModal(feed)}
                        className="p-1.5 hover:bg-stone-200 dark:hover:bg-stone-700 rounded text-stone-800 dark:text-stone-300 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                        title="Edit Feed"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onDeleteFeed(feed.id)}
                        className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-red-600 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                        title="Remove Feed"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Feed Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf8f2] dark:bg-[#1a1a1a] rounded-xl border-2 border-stone-950 dark:border-stone-800 p-5 sm:p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-black text-stone-950 dark:text-stone-100 mb-4">
              {editingFeed ? 'Edit RSS Feed' : 'Add New RSS Feed'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-stone-900 dark:text-stone-300 mb-1">
                  Feed Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ಒನ್‌ಇಂಡಿಯಾ ಕನ್ನಡ — ಬೆಂಗಳೂರು ಸುದ್ದಿ"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white dark:bg-[#252525] border border-stone-950/30 dark:border-stone-700 rounded px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-[#8b0000] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-stone-900 dark:text-stone-300 mb-1">
                  Publisher / Outlet
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Oneindia Kannada"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                  className="w-full bg-white dark:bg-[#252525] border border-stone-950/30 dark:border-stone-700 rounded px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-[#8b0000] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-stone-900 dark:text-stone-300 mb-1">
                  RSS Feed URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://kannada.oneindia.com/rss/feeds/kannada-bengaluru-fb.xml"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-white dark:bg-[#252525] border border-stone-950/30 dark:border-stone-700 rounded px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-[#8b0000] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-stone-900 dark:text-stone-300 mb-1">
                    Feed Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                    className="w-full bg-white dark:bg-[#252525] border border-stone-950/30 dark:border-stone-700 rounded px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-[#8b0000] focus:outline-none"
                  >
                    {LANGUAGES.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-stone-900 dark:text-stone-300 mb-1">
                    Category Desk
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                    className="w-full bg-white dark:bg-[#252525] border border-stone-950/30 dark:border-stone-700 rounded px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-[#8b0000] focus:outline-none"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-stone-950/20 dark:border-stone-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-extrabold text-stone-700 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8b0000] hover:bg-[#6b0000] text-white text-xs font-black rounded shadow-xs"
                >
                  {editingFeed ? 'Save Changes' : 'Add Feed'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
};
