import { RSSFeed, Article, Category } from '../types/newspaper';
import { DEFAULT_RSS_FEEDS, INITIAL_ARTICLES } from '../data/rssFeeds';
import { processArticlesWithAI } from './aiPipeline';

const FEEDS_STORAGE_KEY = 'world_chronicle_rss_feeds_v4';
const ARTICLES_STORAGE_KEY = 'world_chronicle_articles_v4';
const LAST_SYNC_KEY = 'world_chronicle_last_sync_v4';

// Fast public CORS proxies
const CORS_PROXIES = [
  (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
];

/**
 * Read stored or default RSS Feeds list
 */
export function getStoredFeeds(): RSSFeed[] {
  try {
    const stored = localStorage.getItem(FEEDS_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length >= 20) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read feeds from localStorage:', e);
  }
  return DEFAULT_RSS_FEEDS;
}

/**
 * Save RSS Feeds list to localStorage
 */
export function saveFeeds(feeds: RSSFeed[]): void {
  try {
    localStorage.setItem(FEEDS_STORAGE_KEY, JSON.stringify(feeds));
  } catch (e) {
    console.error('Failed to save feeds to localStorage:', e);
  }
}

/**
 * Get stored articles or default broadsheet stories
 */
export function getStoredArticles(): Article[] {
  try {
    const stored = localStorage.getItem(ARTICLES_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read articles from localStorage:', e);
  }
  return INITIAL_ARTICLES;
}

/**
 * Save processed articles to localStorage
 */
export function saveArticles(articles: Article[]): void {
  try {
    localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(articles));
  } catch (e) {
    console.error('Failed to save articles to localStorage:', e);
  }
}

/**
 * Get last sync timestamp
 */
export function getLastSyncTime(): string {
  return localStorage.getItem(LAST_SYNC_KEY) || new Date().toISOString();
}

/**
 * Set last sync timestamp
 */
export function setLastSyncTime(timestamp: string): void {
  localStorage.setItem(LAST_SYNC_KEY, timestamp);
}

/**
 * Check if hourly sync is due
 */
export function isSyncNeeded(): boolean {
  const lastSync = getLastSyncTime();
  if (!lastSync) return true;
  
  const lastSyncDate = new Date(lastSync).getTime();
  const now = new Date().getTime();
  const ONE_HOUR = 60 * 60 * 1000;
  
  return (now - lastSyncDate) >= ONE_HOUR;
}

/**
 * Fetch and Parse XML RSS content for a single feed URL
 */
async function fetchAndParseRSSFeed(feed: RSSFeed): Promise<Article[]> {
  let xmlText = '';
  
  // Try proxies in sequence with 5-second aggressive timeout per proxy
  for (const proxyFn of CORS_PROXIES) {
    try {
      const proxyUrl = proxyFn(feed.url);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch(proxyUrl, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      if (response.ok) {
        xmlText = await response.text();
        if (xmlText && (xmlText.includes('<rss') || xmlText.includes('<feed') || xmlText.includes('<channel') || xmlText.includes('<item'))) {
          break;
        }
      }
    } catch (err) {
      // Continue to next proxy
    }
  }

  if (!xmlText) {
    throw new Error(`Fetch timeout/error for ${feed.url}`);
  }

  // Parse XML using DOMParser
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  const items = xmlDoc.querySelectorAll('item, entry');
  
  const parsedArticles: Article[] = [];

  items.forEach((item, index) => {
    if (index >= 10) return; // Limit 10 items per feed for optimal memory performance

    const titleRaw = item.querySelector('title')?.textContent || 'Untitled Story';
    const descriptionRaw = item.querySelector('description, summary, content')?.textContent || '';
    
    // Clean HTML tags & CDATA
    const tempDivTitle = document.createElement('div');
    tempDivTitle.innerHTML = titleRaw;
    const titleClean = (tempDivTitle.textContent || tempDivTitle.innerText || titleRaw).trim();

    const tempDivDesc = document.createElement('div');
    tempDivDesc.innerHTML = descriptionRaw;
    const descriptionClean = (tempDivDesc.textContent || tempDivDesc.innerText || descriptionRaw).trim();
    const descriptionSnippet = descriptionClean.slice(0, 260) + (descriptionClean.length > 260 ? '...' : '');

    const link = item.querySelector('link')?.textContent || item.querySelector('link')?.getAttribute('href') || feed.url;
    const pubDateStr = item.querySelector('pubDate, published, updated')?.textContent || new Date().toISOString();
    const author = item.querySelector('author, dc\\:creator, creator')?.textContent || feed.publisher;
    
    // Extract Image URL
    let imageUrl = '';
    const enclosure = item.querySelector('enclosure');
    if (enclosure && enclosure.getAttribute('type')?.startsWith('image')) {
      imageUrl = enclosure.getAttribute('url') || '';
    }
    if (!imageUrl) {
      const mediaContent = item.querySelector('media\\:content, content');
      if (mediaContent) {
        imageUrl = mediaContent.getAttribute('url') || '';
      }
    }
    
    // Default category image fallback
    if (!imageUrl) {
      const defaultImages: Record<Category, string> = {
        All: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
        World: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        Karnataka: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&w=800&q=80',
        Technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        Business: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        Science: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
        Sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
        Entertainment: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
        Politics: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
        Health: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
        Climate: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
        Education: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
        Gaming: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
        Automobiles: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
        Travel: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'
      };
      imageUrl = defaultImages[feed.category] || defaultImages.World;
    }

    const wordCount = descriptionSnippet.split(' ').length + 30;
    const readTime = feed.language === 'Kannada'
      ? `${Math.max(2, Math.ceil(wordCount / 40))} ನಿಮಿಷ ಓದು`
      : `${Math.max(2, Math.ceil(wordCount / 60))} min read`;

    parsedArticles.push({
      id: `rss-${feed.id}-${index}-${Date.now()}`,
      title: titleClean,
      description: descriptionSnippet,
      content: descriptionClean,
      link,
      pubDate: new Date(pubDateStr).toISOString(),
      category: feed.category,
      publisher: feed.publisher,
      language: feed.language || 'English',
      author,
      imageUrl,
      readTime
    });
  });

  return parsedArticles;
}

/**
 * Parallel Batch Ingestion Scheduler (Fetches 10 feeds concurrently for high speed)
 */
export async function syncAllFeeds(
  feeds: RSSFeed[],
  onProgress?: (msg: string, percent: number) => void
): Promise<{ updatedArticles: Article[]; updatedFeeds: RSSFeed[] }> {
  const allFetchedArticles: Article[] = [];
  const updatedFeeds = [...feeds];
  const BATCH_SIZE = 10;

  for (let i = 0; i < feeds.length; i += BATCH_SIZE) {
    const chunk = feeds.slice(i, i + BATCH_SIZE);
    const progressPercent = Math.round(((i + chunk.length) / feeds.length) * 100);
    onProgress?.(`Syncing feeds ${i + 1}–${Math.min(i + chunk.length, feeds.length)} of ${feeds.length}...`, progressPercent);

    const batchResults = await Promise.allSettled(
      chunk.map(feed => fetchAndParseRSSFeed(feed))
    );

    batchResults.forEach((result, idx) => {
      const realIndex = i + idx;
      const feed = feeds[realIndex];

      if (result.status === 'fulfilled') {
        allFetchedArticles.push(...result.value);
        updatedFeeds[realIndex] = {
          ...feed,
          status: 'active',
          lastFetched: new Date().toISOString().replace('T', ' ').slice(0, 16),
          itemCount: result.value.length,
          errorMessage: undefined
        };
      } else {
        updatedFeeds[realIndex] = {
          ...feed,
          status: 'error',
          errorMessage: result.reason?.message || 'CORS / Network timeout'
        };
      }
    });
  }

  // Merge newly fetched articles with existing initial broadside stories
  const existing = getStoredArticles();
  const combined = [...allFetchedArticles, ...existing];
  
  // Deduplicate and run AI pipeline
  const processed = processArticlesWithAI(combined);

  saveFeeds(updatedFeeds);
  saveArticles(processed);
  setLastSyncTime(new Date().toISOString());

  return {
    updatedArticles: processed,
    updatedFeeds
  };
}
