import React, { useState } from 'react';
import { Article } from '../types/newspaper';
import { Globe, MapPin, ChevronRight, Sparkles } from 'lucide-react';

interface WorldNewsMapProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

interface RegionMarker {
  id: string;
  name: string;
  countryCode: string;
  lat: number;
  lng: number;
  x: number; // percentage
  y: number; // percentage
}

const REGIONS: RegionMarker[] = [
  { id: 'usa', name: 'North America (USA)', countryCode: 'USA', lat: 37, lng: -95, x: 22, y: 35 },
  { id: 'uk', name: 'United Kingdom', countryCode: 'UK', lat: 55, lng: -3, x: 46, y: 26 },
  { id: 'swiss', name: 'Switzerland / EU Summit', countryCode: 'Switzerland', lat: 46, lng: 8, x: 50, y: 31 },
  { id: 'france', name: 'France & Europe', countryCode: 'France', lat: 46, lng: 2, x: 48, y: 33 },
  { id: 'spain', name: 'Spain & Mediterranean', countryCode: 'Spain', lat: 40, lng: -3, x: 47, y: 37 },
  { id: 'japan', name: 'Japan & East Asia', countryCode: 'Japan', lat: 36, lng: 138, x: 84, y: 36 },
  { id: 'india', name: 'India & South Asia', countryCode: 'India', lat: 20, lng: 78, x: 70, y: 46 },
  { id: 'me', name: 'Middle East', countryCode: 'Middle East', lat: 25, lng: 45, x: 60, y: 42 }
];

export const WorldNewsMap: React.FC<WorldNewsMapProps> = ({
  articles,
  onSelectArticle
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionMarker>(REGIONS[0]);

  // Find articles for this region
  const regionArticles = articles.filter(a => 
    a.country?.toLowerCase().includes(selectedRegion.countryCode.toLowerCase()) ||
    a.title.toLowerCase().includes(selectedRegion.countryCode.toLowerCase()) ||
    a.description.toLowerCase().includes(selectedRegion.countryCode.toLowerCase())
  );

  const displayArticles = regionArticles.length > 0 ? regionArticles : articles.slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-sans-ui transition-colors">
      
      {/* Map Header */}
      <div className="border-b border-stone-300 dark:border-stone-800 pb-4 mb-6">
        <div className="flex items-center gap-2 text-[#8b0000] font-bold text-xs uppercase tracking-widest mb-1">
          <Globe className="w-4 h-4" /> Cartographic Intelligence
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100">
          Interactive World News Dispatch
        </h2>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          Click on any global hot-spot marker to isolate local dispatches and regional bulletins.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Cols: Map Canvas */}
        <div className="lg:col-span-8 bg-[#1a1c23] p-4 rounded-xl border border-stone-800 relative overflow-hidden shadow-2xl min-h-[380px] flex flex-col justify-between">
          
          {/* Map Grid Pattern background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 flex justify-between items-center text-xs text-stone-400 font-mono">
            <span>PROJECTION: MERCATOR GLOBAL</span>
            <span className="text-[#c29b38]">SATELLITE SYNC: ACTIVE</span>
          </div>

          {/* Map Markers */}
          <div className="relative z-10 w-full h-[320px] my-4">
            {REGIONS.map((reg) => {
              const isSelected = selectedRegion.id === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg)}
                  style={{ left: `${reg.x}%`, top: `${reg.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute w-8 h-8 rounded-full ${isSelected ? 'bg-red-500/40 animate-ping' : 'bg-amber-500/20 group-hover:animate-ping'}`}></span>
                    <div className={`p-2 rounded-full border transition-all ${
                      isSelected 
                        ? 'bg-[#8b0000] text-white border-white scale-125 z-20 shadow-lg' 
                        : 'bg-stone-900/90 text-amber-400 border-amber-400/50 hover:scale-110'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                  <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap text-[10px] font-bold px-2 py-0.5 rounded shadow ${
                    isSelected ? 'bg-[#8b0000] text-white' : 'bg-stone-900/90 text-stone-300'
                  }`}>
                    {reg.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 text-[11px] text-stone-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>CURRENTLY VIEWING: <strong className="text-white uppercase">{selectedRegion.name}</strong></span>
          </div>

        </div>

        {/* Right 4 Cols: Regional News Feed */}
        <div className="lg:col-span-4 bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="border-b border-stone-200 dark:border-stone-800 pb-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8b0000]">REGIONAL BULLETIN</span>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">{selectedRegion.name}</h3>
              <p className="text-xs text-stone-500 mt-0.5">{displayArticles.length} active stories in this sector</p>
            </div>

            <div className="space-y-4">
              {displayArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="group cursor-pointer p-3 rounded-lg bg-stone-50 dark:bg-[#252525] border border-stone-200 dark:border-stone-700/50 hover:border-[#8b0000] transition-colors"
                >
                  <span className="text-[10px] font-bold text-[#8b0000] uppercase tracking-wider">{article.category}</span>
                  <h4 className="font-serif-headline text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#8b0000] dark:group-hover:text-amber-400 leading-snug my-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 font-sans-ui">
                    {article.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 text-right">
            <button
              onClick={() => onSelectArticle(displayArticles[0])}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#8b0000] dark:text-amber-400 hover:underline uppercase tracking-wider"
            >
              <span>Read Sector Lead Story</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </main>
  );
};
