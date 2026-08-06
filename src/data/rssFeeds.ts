import { RSSFeed, Article } from '../types/newspaper';

export const DEFAULT_RSS_FEEDS: RSSFeed[] = [
  // ============================================================
  // 1. KANNADA NEWS FEEDS (ಕನ್ನಡ — ACTIVE BY DEFAULT FOR FAST LOADING)
  // ============================================================
  { id: 'gnews-kn-news', name: 'Google News — ಕನ್ನಡ ಪತ್ರಿಕೆ', url: 'https://news.google.com/rss/search?q=Kannada&hl=kn&gl=IN&ceid=IN:kn', category: 'World', publisher: 'Google News ಕನ್ನಡ', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 45 },
  { id: 'gnews-kn-karnataka', name: 'Google News — ಕರ್ನಾಟಕ ಸುದ್ದಿ', url: 'https://news.google.com/rss/search?q=ಕರ್ನಾಟಕ&hl=kn&gl=IN&ceid=IN:kn', category: 'Karnataka', publisher: 'Google News ಕರ್ನಾಟಕ', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 40 },
  { id: 'gnews-kn-bengaluru', name: 'Google News — ಬೆಂಗಳೂರು ವರದಿ', url: 'https://news.google.com/rss/search?q=ಬೆಂಗಳೂರು&hl=kn&gl=IN&ceid=IN:kn', category: 'Karnataka', publisher: 'Google News ಬೆಂಗಳೂರು', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 35 },
  { id: 'gnews-kn-mysuru', name: 'Google News — ಮೈಸೂರು ಇತ್ತೀಚೆಗೆ', url: 'https://news.google.com/rss/search?q=ಮೈಸೂರು&hl=kn&gl=IN&ceid=IN:kn', category: 'Karnataka', publisher: 'Google News ಮೈಸೂರು', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 25 },
  { id: 'gnews-kn-sports', name: 'Google News — ಕ್ರೀಡೆ ಕನ್ನಡ', url: 'https://news.google.com/rss/search?q=ಕ್ರೀಡೆ&hl=kn&gl=IN&ceid=IN:kn', category: 'Sports', publisher: 'Google News ಕ್ರೀಡೆ', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 25 },
  { id: 'gnews-kn-tech', name: 'Google News — ತಂತ್ರಜ್ಞಾನ ಕನ್ನಡ', url: 'https://news.google.com/rss/search?q=ತಂತ್ರಜ್ಞಾನ&hl=kn&gl=IN&ceid=IN:kn', category: 'Technology', publisher: 'Google News ತಂತ್ರಜ್ಞಾನ', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 25 },
  { id: 'gnews-kn-biz', name: 'Google News — ವಾಣಿಜ್ಯ ಕನ್ನಡ', url: 'https://news.google.com/rss/search?q=ವಾಣಿಜ್ಯ&hl=kn&gl=IN&ceid=IN:kn', category: 'Business', publisher: 'Google News ವಾಣಿಜ್ಯ', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 25 },
  { id: 'oneindia-kannada-main', name: 'ಒನ್‌ಇಂಡಿಯಾ ಕನ್ನಡ — ಪ್ರಮುಖ ಸುದ್ದಿಗಳು', url: 'https://kannada.oneindia.com/rss/feeds/oneindia-kannada-fb.xml', category: 'World', publisher: 'Oneindia Kannada', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 40 },
  { id: 'oneindia-kannada-news', name: 'ಒನ್‌ಇಂಡಿಯಾ ಕನ್ನಡ — ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-news-fb.xml', category: 'Karnataka', publisher: 'Oneindia Kannada', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 35 },
  { id: 'oneindia-kannada-bengaluru', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಬೆಂಗಳೂರು ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-bengaluru-fb.xml', category: 'Karnataka', publisher: 'Oneindia Bengaluru', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 30 },
  { id: 'oneindia-kannada-mysuru', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಮೈಸೂರು ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-mysuru-fb.xml', category: 'Karnataka', publisher: 'Oneindia Mysuru', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 25 },
  { id: 'oneindia-kannada-mangaluru', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಮಂಗಳೂರು ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-mangaluru-fb.xml', category: 'Karnataka', publisher: 'Oneindia Mangaluru', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 22 },
  { id: 'oneindia-kannada-belagavi', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಬೆಳಗಾವಿ ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-belagavi-fb.xml', category: 'Karnataka', publisher: 'Oneindia Belagavi', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 20 },
  { id: 'oneindia-kannada-dharwad', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಧಾರವಾಡ ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-dharwad-fb.xml', category: 'Karnataka', publisher: 'Oneindia Dharwad', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 18 },
  { id: 'oneindia-kannada-shivamogga', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಶಿವಮೊಗ್ಗ ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-shivamogga-fb.xml', category: 'Karnataka', publisher: 'Oneindia Shivamogga', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 15 },
  { id: 'oneindia-kannada-tumakuru', name: 'ಒನ್‌ಇಂಡಿಯಾ — ತುಮಕೂರು ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-tumakuru-fb.xml', category: 'Karnataka', publisher: 'Oneindia Tumakuru', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 15 },
  { id: 'oneindia-kannada-bidar', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಬೀದರ್ ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-bidar-fb.xml', category: 'Karnataka', publisher: 'Oneindia Bidar', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 12 },
  { id: 'oneindia-kannada-madikeri', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಮಡಿಕೇರಿ ಸುದ್ದಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-madikeri-fb.xml', category: 'Karnataka', publisher: 'Oneindia Madikeri', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 12 },
  { id: 'oneindia-kannada-entertainment', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಚಲನಚಿತ್ರ ಮತ್ತು ಮನರಂಜನೆ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-entertainment-fb.xml', category: 'Entertainment', publisher: 'Oneindia Cinema', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 28 },
  { id: 'oneindia-kannada-ai', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ (AI) ಮತ್ತು ತಂತ್ರಜ್ಞಾನ', url: 'https://kannada.oneindia.com/rss/feeds/artificial-intelligence-fb.xml', category: 'Technology', publisher: 'Oneindia Tech', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 20 },
  { id: 'oneindia-kannada-jobs', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಉದ್ಯೋಗ ಮತ್ತು ವೃತ್ತಿ ಮಾಹಿತಿ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-jobs-fb.xml', category: 'Business', publisher: 'Oneindia Jobs', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 22 },
  { id: 'oneindia-kannada-travel', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ಪ್ರವಾಸ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-travel-fb.xml', category: 'Travel', publisher: 'Oneindia Travel', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 18 },
  { id: 'oneindia-kannada-lifestyle', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಜೀವನಶೈಲಿ ಮತ್ತು ಆರೋಗ್ಯ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-lifestyle-fb.xml', category: 'Health', publisher: 'Oneindia Lifestyle', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 20 },
  { id: 'oneindia-kannada-astrology', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ದಿನಭವಿಷ್ಯ', url: 'https://kannada.oneindia.com/rss/feeds/kannada-astrology-fb.xml', category: 'Entertainment', publisher: 'Oneindia Astrology', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 15 },
  { id: 'oneindia-kannada-partner', name: 'ಒನ್‌ಇಂಡಿಯಾ — ಪ್ರಾಯೋಜಿತ ವಿಶೇಷ ಲೇಖನಗಳು', url: 'https://kannada.oneindia.com/rss/feeds/kannada-partner-content-fb.xml', category: 'Business', publisher: 'Oneindia Partner', language: 'Kannada', status: 'active', isActive: true, lastFetched: 'Just now', itemCount: 10 },

  // ============================================================
  // 2. GOOGLE NEWS TOP STORIES & TOPIC SECTIONS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'gnews-top', name: 'Google News — Top Stories', url: 'https://news.google.com/rss', category: 'World', publisher: 'Google News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 60 },
  { id: 'gnews-world', name: 'Google News — World Desk', url: 'https://news.google.com/rss/headlines/section/topic/WORLD', category: 'World', publisher: 'Google News World', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 50 },
  { id: 'gnews-nation', name: 'Google News — Nation', url: 'https://news.google.com/rss/headlines/section/topic/NATION', category: 'World', publisher: 'Google News Nation', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'gnews-business', name: 'Google News — Business', url: 'https://news.google.com/rss/headlines/section/topic/BUSINESS', category: 'Business', publisher: 'Google News Business', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'gnews-tech', name: 'Google News — Technology', url: 'https://news.google.com/rss/headlines/section/topic/TECHNOLOGY', category: 'Technology', publisher: 'Google News Tech', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'gnews-entertainment', name: 'Google News — Entertainment', url: 'https://news.google.com/rss/headlines/section/topic/ENTERTAINMENT', category: 'Entertainment', publisher: 'Google News Entertainment', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 40 },
  { id: 'gnews-sports', name: 'Google News — Sports', url: 'https://news.google.com/rss/headlines/section/topic/SPORTS', category: 'Sports', publisher: 'Google News Sports', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 40 },
  { id: 'gnews-science', name: 'Google News — Science', url: 'https://news.google.com/rss/headlines/section/topic/SCIENCE', category: 'Science', publisher: 'Google News Science', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'gnews-health', name: 'Google News — Health', url: 'https://news.google.com/rss/headlines/section/topic/HEALTH', category: 'Health', publisher: 'Google News Health', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },

  // ============================================================
  // 3. GOOGLE NEWS — INDIA & POLITICS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'gnews-in-main', name: 'Google News — India Main', url: 'https://news.google.com/rss/search?q=India&hl=en-IN&gl=IN&ceid=IN:en', category: 'World', publisher: 'Google News India', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'gnews-in-politics', name: 'Google News — India Politics', url: 'https://news.google.com/rss/search?q=India+Politics&hl=en-IN&gl=IN&ceid=IN:en', category: 'Politics', publisher: 'Google News India Politics', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'gnews-in-biz', name: 'Google News — India Business', url: 'https://news.google.com/rss/search?q=India+Business&hl=en-IN&gl=IN&ceid=IN:en', category: 'Business', publisher: 'Google News India Biz', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'gnews-in-tech', name: 'Google News — India Tech', url: 'https://news.google.com/rss/search?q=India+Technology&hl=en-IN&gl=IN&ceid=IN:en', category: 'Technology', publisher: 'Google News India Tech', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'gnews-in-sports', name: 'Google News — India Sports', url: 'https://news.google.com/rss/search?q=India+Sports&hl=en-IN&gl=IN&ceid=IN:en', category: 'Sports', publisher: 'Google News India Sports', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'gnews-in-cricket', name: 'Google News — India Cricket', url: 'https://news.google.com/rss/search?q=India+Cricket&hl=en-IN&gl=IN&ceid=IN:en', category: 'Sports', publisher: 'Google News Cricket', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },

  // ============================================================
  // 4. GOOGLE NEWS — KARNATAKA ENGLISH (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'gnews-ka-main', name: 'Google News — Karnataka (EN)', url: 'https://news.google.com/rss/search?q=Karnataka&hl=en-IN&gl=IN&ceid=IN:en', category: 'Karnataka', publisher: 'Google News Karnataka', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'gnews-ka-bengaluru', name: 'Google News — Bengaluru (EN)', url: 'https://news.google.com/rss/search?q=Bengaluru&hl=en-IN&gl=IN&ceid=IN:en', category: 'Karnataka', publisher: 'Google News Bengaluru', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'gnews-ka-mysuru', name: 'Google News — Mysuru (EN)', url: 'https://news.google.com/rss/search?q=Mysuru&hl=en-IN&gl=IN&ceid=IN:en', category: 'Karnataka', publisher: 'Google News Mysuru', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'gnews-ka-hubballi', name: 'Google News — Hubballi (EN)', url: 'https://news.google.com/rss/search?q=Hubballi&hl=en-IN&gl=IN&ceid=IN:en', category: 'Karnataka', publisher: 'Google News Hubballi', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'gnews-ka-mangaluru', name: 'Google News — Mangaluru (EN)', url: 'https://news.google.com/rss/search?q=Mangaluru&hl=en-IN&gl=IN&ceid=IN:en', category: 'Karnataka', publisher: 'Google News Mangaluru', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'gnews-ka-belagavi', name: 'Google News — Belagavi (EN)', url: 'https://news.google.com/rss/search?q=Belagavi&hl=en-IN&gl=IN&ceid=IN:en', category: 'Karnataka', publisher: 'Google News Belagavi', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },

  // ============================================================
  // 5. CANADIAN NEWS FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'cbc-topstories', name: 'CBC News Canada — Top Stories', url: 'https://www.cbc.ca/cmlink/rss-topstories', category: 'World', publisher: 'CBC News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'ctv-top', name: 'CTV News Canada — Top Stories', url: 'https://www.ctvnews.ca/rss/ctvnews-ca-top-stories-public-rss-1.822009', category: 'World', publisher: 'CTV News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'globalnews-ca', name: 'Global News Canada', url: 'https://globalnews.ca/feed/', category: 'World', publisher: 'Global News CA', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'financialpost-ca', name: 'Financial Post Canada', url: 'https://business.financialpost.com/feed/', category: 'Business', publisher: 'Financial Post', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'nationalpost-ca', name: 'National Post Canada', url: 'https://nationalpost.com/feed/', category: 'World', publisher: 'National Post', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'ottawacitizen-ca', name: 'Ottawa Citizen', url: 'https://ottawacitizen.com/feed/', category: 'World', publisher: 'Ottawa Citizen', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'theprovince-ca', name: 'The Province Vancouver', url: 'https://theprovince.com/feed/', category: 'World', publisher: 'The Province', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'lapresse-ca', name: 'La Presse Québec', url: 'https://www.lapresse.ca/actualites/rss', category: 'World', publisher: 'La Presse', language: 'French', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'thestar-ca', name: 'Toronto Star — Top Stories', url: 'https://www.thestar.com/content/thestar/feed.RSSManagerServlet.articles.topstories.rss', category: 'World', publisher: 'Toronto Star', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'torontosun-ca', name: 'Toronto Sun — News', url: 'https://torontosun.com/category/news/feed', category: 'World', publisher: 'Toronto Sun', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },

  // ============================================================
  // 6. AUSTRALIAN NEWS FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'dailytelegraph-au', name: 'The Daily Telegraph AU', url: 'https://www.dailytelegraph.com.au/news/breaking-news/rss', category: 'World', publisher: 'Daily Telegraph AU', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'smh-au', name: 'Sydney Morning Herald', url: 'https://www.smh.com.au/rss/feed.xml', category: 'World', publisher: 'Sydney Morning Herald', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'heraldsun-au', name: 'Herald Sun Melbourne', url: 'https://www.heraldsun.com.au/news/breaking-news/rss', category: 'World', publisher: 'Herald Sun', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'abc-au-1948', name: 'ABC News Australia', url: 'https://www.abc.net.au/news/feed/1948/rss.xml', category: 'World', publisher: 'ABC News AU', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'abc-au-51120', name: 'ABC News Australia Top', url: 'https://www.abc.net.au/news/feed/51120/rss.xml', category: 'World', publisher: 'ABC News AU', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'theage-au', name: 'The Age Australia', url: 'https://www.theage.com.au/rss/feed.xml', category: 'World', publisher: 'The Age', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'couriermail-au', name: 'Courier Mail Brisbane', url: 'https://www.couriermail.com.au/rss', category: 'World', publisher: 'Courier Mail', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'perthnow-au', name: 'Perth Now News', url: 'https://www.perthnow.com.au/news/feed', category: 'World', publisher: 'Perth Now', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'canberratimes-au', name: 'The Canberra Times', url: 'https://www.canberratimes.com.au/rss.xml', category: 'World', publisher: 'Canberra Times', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'brisbanetimes-au', name: 'Brisbane Times', url: 'https://www.brisbanetimes.com.au/rss/feed.xml', category: 'World', publisher: 'Brisbane Times', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'independent-au', name: 'Independent Australia', url: 'http://feeds.feedburner.com/IndependentAustralia', category: 'World', publisher: 'Independent Australia', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'biznews-au', name: 'Business News AU', url: 'https://www.businessnews.com.au/rssfeed/latest.rss', category: 'Business', publisher: 'Business News AU', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'indaily-au', name: 'InDaily Adelaide', url: 'https://indaily.com.au/feed/', category: 'World', publisher: 'InDaily', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'themercury-au', name: 'The Mercury Tasmania', url: 'https://www.themercury.com.au/rss', category: 'World', publisher: 'The Mercury', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },

  // ============================================================
  // 7. BANGLADESH & SOUTH ASIA FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'dailystar-bd', name: 'The Daily Star Bangladesh', url: 'https://www.thedailystar.net/frontpage/rss.xml', category: 'World', publisher: 'The Daily Star BD', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'bd24live', name: 'BD24Live News', url: 'https://www.bd24live.com/feed', category: 'World', publisher: 'BD24Live', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'bdnews24-main', name: 'BDNews24', url: 'https://bdnews24.com/?widgetName=rssfeed&widgetId=1150&getXmlFeed=true', category: 'World', publisher: 'BDNews24', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'banglanews24', name: 'BanglaNews24', url: 'https://www.banglanews24.com/rss/rss.xml', category: 'World', publisher: 'BanglaNews24', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'jugantor-bd', name: 'Jugantor News', url: 'https://www.jugantor.com/feed/rss.xml', category: 'World', publisher: 'Jugantor', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'jagonews24-bd', name: 'Jago News 24', url: 'https://www.jagonews24.com/rss/rss.xml', category: 'World', publisher: 'JagoNews24', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'kalerkantho-bd', name: 'Kaler Kantho', url: 'https://www.kalerkantho.com/rss.xml', category: 'World', publisher: 'Kaler Kantho', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'prothomalo-bd', name: 'Prothom Alo', url: 'https://www.prothomalo.com/feed/', category: 'World', publisher: 'Prothom Alo', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },

  // ============================================================
  // 8. AFRICAN NEWS FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'sowetanlive-sa', name: 'Sowetan Live SA', url: 'https://www.sowetanlive.co.za/rss/?publication=sowetan-live', category: 'World', publisher: 'Sowetan Live', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'techcentral-sa', name: 'TechCentral South Africa', url: 'https://techcentral.co.za/feed', category: 'Technology', publisher: 'TechCentral SA', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'news24-sa', name: 'News24 South Africa Top', url: 'http://feeds.news24.com/articles/news24/TopStories/rss', category: 'World', publisher: 'News24 SA', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'ewn-sa', name: 'Eyewitness News SA (EWN)', url: 'https://ewn.co.za/RSS%20Feeds/Latest%20News', category: 'World', publisher: 'EWN', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'citizen-sa', name: 'The Citizen South Africa', url: 'https://citizen.co.za/feed/', category: 'World', publisher: 'The Citizen SA', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'dailymaverick-sa', name: 'Daily Maverick SA', url: 'https://www.dailymaverick.co.za/dmrss/', category: 'World', publisher: 'Daily Maverick', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'moneyweb-sa', name: 'Moneyweb SA Business', url: 'https://www.moneyweb.co.za/feed/', category: 'Business', publisher: 'Moneyweb', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'iol-sa', name: 'IOL News South Africa', url: 'http://rss.iol.io/iol/news', category: 'World', publisher: 'IOL News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'timeslive-sa', name: 'TimesLIVE South Africa', url: 'https://www.timeslive.co.za/rss/', category: 'World', publisher: 'TimesLIVE', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'thesouthafrican', name: 'The South African', url: 'https://www.thesouthafrican.com/feed/', category: 'World', publisher: 'The South African', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },

  // ============================================================
  // 9. TOP US & UK NEWSPAPERS & AGENCIES (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'axios-main', name: 'Axios', url: 'https://api.axios.com/feed/', category: 'World', publisher: 'Axios', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 28 },
  { id: 'bbc-rss-main', name: 'BBC News Main', url: 'http://feeds.bbci.co.uk/news/rss.xml', category: 'World', publisher: 'BBC News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'guardian-world-rss', name: 'The Guardian World', url: 'https://www.theguardian.com/world/rss', category: 'World', publisher: 'The Guardian', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 40 },
  { id: 'dailymail-uk', name: 'Daily Mail UK Home', url: 'https://www.dailymail.co.uk/home/index.rss', category: 'World', publisher: 'Daily Mail', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 40 },
  { id: 'independent-uk', name: 'The Independent UK', url: 'http://www.independent.co.uk/news/uk/rss', category: 'World', publisher: 'The Independent', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'dailyexpress-uk', name: 'Daily Express UK', url: 'http://feeds.feedburner.com/daily-express-news-showbiz', category: 'World', publisher: 'Daily Express', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'huffpost-world', name: 'HuffPost World News', url: 'https://www.huffpost.com/section/world-news/feed', category: 'World', publisher: 'HuffPost', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'nyt-homepage', name: 'The New York Times', url: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml', category: 'World', publisher: 'The New York Times', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'foxnews-main', name: 'Fox News Latest', url: 'http://feeds.foxnews.com/foxnews/latest', category: 'Politics', publisher: 'Fox News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'wapo-world-main', name: 'Washington Post World', url: 'http://feeds.washingtonpost.com/rss/world', category: 'World', publisher: 'Washington Post', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'wsj-world-main', name: 'Wall Street Journal World', url: 'https://feeds.a.dj.com/rss/RSSWorldNews.xml', category: 'Business', publisher: 'WSJ', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 40 },
  { id: 'latimes-world-nation', name: 'LA Times World & Nation', url: 'https://www.latimes.com/world-nation/rss2.0.xml', category: 'World', publisher: 'LA Times', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'cnn-edition-main', name: 'CNN Edition', url: 'http://rss.cnn.com/rss/edition.rss', category: 'World', publisher: 'CNN', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 40 },
  { id: 'yahoonews-mostviewed', name: 'Yahoo News Most Viewed', url: 'https://news.yahoo.com/rss/mostviewed', category: 'World', publisher: 'Yahoo News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'cnbc-main', name: 'CNBC Financial News', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', category: 'Business', publisher: 'CNBC', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'politico-playbook-main', name: 'Politico Playbook', url: 'https://rss.politico.com/playbook.xml', category: 'Politics', publisher: 'Politico', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'bbc-world-dispatch', name: 'BBC World News', url: 'http://feeds.bbci.co.uk/news/world/rss.xml', category: 'World', publisher: 'BBC News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'reuters-topnews', name: 'Reuters Top News', url: 'https://www.reuters.com/rssFeed/topNews', category: 'World', publisher: 'Reuters', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'reuters-worldnews', name: 'Reuters World News', url: 'https://www.reuters.com/rssFeed/worldNews', category: 'World', publisher: 'Reuters', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 45 },
  { id: 'aljazeera-rss-main', name: 'Al Jazeera Direct', url: 'https://www.aljazeera.com/xml/rss/all.xml', category: 'World', publisher: 'Al Jazeera', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 40 },
  { id: 'dw-xml-all', name: 'DW News All', url: 'https://rss.dw.com/xml/rss-en-all', category: 'World', publisher: 'DW News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'france24-en-main', name: 'France 24 English', url: 'https://www.france24.com/en/rss', category: 'World', publisher: 'France 24', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 32 },
  { id: 'npr-1001', name: 'NPR News', url: 'https://feeds.npr.org/1001/rss.xml', category: 'World', publisher: 'NPR', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'upi-topnews', name: 'United Press International (UPI)', url: 'https://rss.upi.com/news/top_news.rss', category: 'World', publisher: 'UPI', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'csmonitor-world', name: 'Christian Science Monitor', url: 'https://rss.csmonitor.com/feeds/world', category: 'World', publisher: 'CS Monitor', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'euronews-rss', name: 'Euronews Global', url: 'https://www.euronews.com/rss', category: 'World', publisher: 'Euronews', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'rte-ireland', name: 'RTÉ Ireland News', url: 'https://www.rte.ie/rss/news.xml', category: 'World', publisher: 'RTÉ Ireland', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'usatoday-top', name: 'USA Today Nation Top', url: 'http://rssfeeds.usatoday.com/UsatodaycomNation-TopStories', category: 'World', publisher: 'USA Today', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'cbs-latest', name: 'CBS News Latest', url: 'https://www.cbsnews.com/latest/rss/main', category: 'World', publisher: 'CBS News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'nbc-public', name: 'NBC News Public', url: 'http://feeds.nbcnews.com/nbcnews/public/news', category: 'World', publisher: 'NBC News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'abc-topstories', name: 'ABC News US Top Stories', url: 'https://abcnews.go.com/abcnews/topstories', category: 'World', publisher: 'ABC News US', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'thehill-feed', name: 'The Hill Feed', url: 'https://thehill.com/feed', category: 'Politics', publisher: 'The Hill', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'huffpost-front-feed', name: 'HuffPost Front Page', url: 'https://www.huffpost.com/section/front-page/feed', category: 'World', publisher: 'HuffPost', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'time-feed', name: 'TIME Magazine', url: 'https://time.com/feed', category: 'World', publisher: 'TIME', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'nypost-feed', name: 'New York Post Feed', url: 'https://nypost.com/feed', category: 'World', publisher: 'NY Post', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'chicagotribune-feed', name: 'Chicago Tribune', url: 'https://www.chicagotribune.com/feed', category: 'World', publisher: 'Chicago Tribune', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'bostonglobe-nation', name: 'Boston Globe Nation', url: 'https://www.bostonglobe.com/rss/news/nation', category: 'World', publisher: 'Boston Globe', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'propublica-feed', name: 'ProPublica Feed', url: 'https://www.propublica.org/feeds/propublica/main', category: 'Politics', publisher: 'ProPublica', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'dailybeast-feed', name: 'Daily Beast Feed', url: 'https://www.thedailybeast.com/rss', category: 'World', publisher: 'Daily Beast', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'guardian-uk-rss', name: 'The Guardian UK RSS', url: 'https://www.theguardian.com/uk/rss', category: 'World', publisher: 'The Guardian UK', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'independent-world', name: 'The Independent World', url: 'https://www.independent.co.uk/news/world/rss', category: 'World', publisher: 'The Independent', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'telegraph-uk', name: 'The Telegraph UK', url: 'https://www.telegraph.co.uk/news/rss.xml', category: 'World', publisher: 'The Telegraph', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'skynews-home', name: 'Sky News UK Home', url: 'http://feeds.skynews.com/feeds/rss/home.xml', category: 'World', publisher: 'Sky News UK', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'thesun-uk', name: 'The Sun UK', url: 'https://www.thesun.co.uk/feed', category: 'World', publisher: 'The Sun UK', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'mirror-uk', name: 'Daily Mirror UK', url: 'https://www.mirror.co.uk/?service=rss', category: 'World', publisher: 'Daily Mirror', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'metro-uk', name: 'Metro UK News', url: 'https://metro.co.uk/feed', category: 'World', publisher: 'Metro UK', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'standard-uk', name: 'Evening Standard London', url: 'https://www.standard.co.uk/rss', category: 'World', publisher: 'Evening Standard', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },

  // ============================================================
  // 10. BUSINESS & FINANCIAL FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'globeandmail-rss', name: 'Globe and Mail RSS', url: 'https://www.theglobeandmail.com/arc/outboundfeeds/rss/', category: 'Business', publisher: 'Globe and Mail', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'bloomberg-markets-rss', name: 'Bloomberg Markets', url: 'https://feeds.bloomberg.com/markets/news.rss', category: 'Business', publisher: 'Bloomberg', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 40 },
  { id: 'ft-rss', name: 'Financial Times RSS', url: 'https://www.ft.com/?format=rss', category: 'Business', publisher: 'Financial Times', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'forbes-popular-rss', name: 'Forbes Most Popular', url: 'https://www.forbes.com/most-popular/feed/', category: 'Business', publisher: 'Forbes', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'fortune-feed', name: 'Fortune Feed', url: 'https://fortune.com/feed', category: 'Business', publisher: 'Fortune', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'economist-rss', name: 'The Economist Politics', url: 'https://www.economist.com/global-politics/rss.xml', category: 'Business', publisher: 'The Economist', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'businessinsider-rss', name: 'Business Insider RSS', url: 'https://www.businessinsider.com/rss', category: 'Business', publisher: 'Business Insider', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'marketwatch-rss', name: 'MarketWatch Top Stories', url: 'http://feeds.marketwatch.com/marketwatch/topstories', category: 'Business', publisher: 'MarketWatch', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'entrepreneur-latest', name: 'Entrepreneur Magazine', url: 'https://www.entrepreneur.com/latest.rss', category: 'Business', publisher: 'Entrepreneur', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'inc-rss', name: 'Inc. Magazine', url: 'https://www.inc.com/rss', category: 'Business', publisher: 'Inc.', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'fastcompany-rss', name: 'Fast Company', url: 'https://www.fastcompany.com/rss', category: 'Business', publisher: 'Fast Company', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'hbr-rss', name: 'Harvard Business Review RSS', url: 'http://feeds.hbr.org/harvardbusiness', category: 'Business', publisher: 'HBR', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'qz-feed', name: 'Quartz Global Economy', url: 'https://qz.com/feed', category: 'Business', publisher: 'Quartz', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },

  // ============================================================
  // 11. TECHNOLOGY, STARTUPS & AI FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'techcrunch-rss', name: 'TechCrunch RSS', url: 'https://techcrunch.com/feed', category: 'Technology', publisher: 'TechCrunch', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'theverge-rss', name: 'The Verge RSS', url: 'https://www.theverge.com/rss/index.xml', category: 'Technology', publisher: 'The Verge', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'wired-rss', name: 'WIRED RSS', url: 'https://www.wired.com/feed/rss', category: 'Technology', publisher: 'WIRED', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'arstechnica-rss', name: 'Ars Technica RSS', url: 'http://feeds.arstechnica.com/arstechnica/index', category: 'Technology', publisher: 'Ars Technica', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'engadget-rss', name: 'Engadget RSS', url: 'https://www.engadget.com/rss.xml', category: 'Technology', publisher: 'Engadget', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'gizmodo-rss', name: 'Gizmodo RSS', url: 'https://gizmodo.com/rss', category: 'Technology', publisher: 'Gizmodo', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'mashable-feed', name: 'Mashable Feed', url: 'https://mashable.com/feed', category: 'Technology', publisher: 'Mashable', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'cnet-rss', name: 'CNET News RSS', url: 'https://www.cnet.com/rss/news/', category: 'Technology', publisher: 'CNET', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'zdnet-rss', name: 'ZDNet News RSS', url: 'https://www.zdnet.com/news/rss.xml', category: 'Technology', publisher: 'ZDNet', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'venturebeat-rss', name: 'VentureBeat AI & Tech', url: 'http://feeds.feedburner.com/venturebeat/SZYF', category: 'Technology', publisher: 'VentureBeat', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'thenextweb-feed', name: 'The Next Web (TNW)', url: 'https://thenextweb.com/feed', category: 'Technology', publisher: 'TNW', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: '9to5mac-feed', name: '9to5Mac Feed', url: 'https://9to5mac.com/feed', category: 'Technology', publisher: '9to5Mac', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'androidauthority-feed', name: 'Android Authority Feed', url: 'https://www.androidauthority.com/feed', category: 'Technology', publisher: 'Android Authority', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'hackernews-rss-main', name: 'Hacker News RSS', url: 'https://news.ycombinator.com/rss', category: 'Technology', publisher: 'Hacker News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'slashdot-rss-main', name: 'Slashdot RSS', url: 'http://rss.slashdot.org/Slashdot/slashdot', category: 'Technology', publisher: 'Slashdot', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },

  // ============================================================
  // 12. SCIENCE, SPACE & RESEARCH FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'sciencedaily-rss', name: 'ScienceDaily Top News', url: 'https://www.sciencedaily.com/rss/top_news.xml', category: 'Science', publisher: 'ScienceDaily', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'newscientist-feed', name: 'New Scientist Feed', url: 'https://www.newscientist.com/feed/home', category: 'Science', publisher: 'New Scientist', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'nature-journal-rss', name: 'Nature Journal RSS', url: 'http://www.nature.com/nature/current_issue/rss', category: 'Science', publisher: 'Nature', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'sciam-rss', name: 'Scientific American RSS', url: 'http://rss.sciam.com/ScientificAmerican-Global', category: 'Science', publisher: 'Scientific American', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'nasa-image-rss', name: 'NASA Image of the Day', url: 'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss', category: 'Science', publisher: 'NASA', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'spacecom-feeds', name: 'Space.com Feeds', url: 'https://www.space.com/feeds/all', category: 'Science', publisher: 'Space.com', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'techreview-mit', name: 'MIT Technology Review Feed', url: 'https://www.technologyreview.com/feed', category: 'Science', publisher: 'MIT Tech Review', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'livescience-feeds', name: 'LiveScience Feeds', url: 'https://www.livescience.com/feeds/all', category: 'Science', publisher: 'LiveScience', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },

  // ============================================================
  // 13. SPORTS & ATHLETICS FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'espn-rss', name: 'ESPN News RSS', url: 'https://www.espn.com/espn/rss/news', category: 'Sports', publisher: 'ESPN', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'bbcsport-rss', name: 'BBC Sport RSS', url: 'http://feeds.bbci.co.uk/sport/rss.xml', category: 'Sports', publisher: 'BBC Sport', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 35 },
  { id: 'skysports-rss', name: 'Sky Sports RSS', url: 'https://www.skysports.com/rss/12040', category: 'Sports', publisher: 'Sky Sports', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'foxsports-rss', name: 'Fox Sports RSS', url: 'https://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU', category: 'Sports', publisher: 'Fox Sports', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'bleacherreport-feed', name: 'Bleacher Report Feed', url: 'https://bleacherreport.com/articles/feed', category: 'Sports', publisher: 'Bleacher Report', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'yahoosports-rss', name: 'Yahoo Sports RSS', url: 'https://sports.yahoo.com/rss/', category: 'Sports', publisher: 'Yahoo Sports', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'talksport-feed', name: 'talkSPORT Feed', url: 'https://talksport.com/feed', category: 'Sports', publisher: 'talkSPORT', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },

  // ============================================================
  // 14. ENTERTAINMENT, GAMING & CULTURE FEEDS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'rollingstone-feed', name: 'Rolling Stone', url: 'https://www.rollingstone.com/feed', category: 'Entertainment', publisher: 'Rolling Stone', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'variety-feed', name: 'Variety Feed', url: 'https://variety.com/feed', category: 'Entertainment', publisher: 'Variety', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'hollywoodreporter-feed', name: 'Hollywood Reporter', url: 'https://www.hollywoodreporter.com/feed', category: 'Entertainment', publisher: 'Hollywood Reporter', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'vanityfair-rss', name: 'Vanity Fair', url: 'https://www.vanityfair.com/feed/rss', category: 'Entertainment', publisher: 'Vanity Fair', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'newyorker-feed', name: 'The New Yorker', url: 'https://www.newyorker.com/feed/everything', category: 'Entertainment', publisher: 'The New Yorker', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'theatlantic-feed', name: 'The Atlantic', url: 'https://www.theatlantic.com/feed/all', category: 'Entertainment', publisher: 'The Atlantic', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'vox-rss', name: 'Vox RSS', url: 'https://www.vox.com/rss/index.xml', category: 'Entertainment', publisher: 'Vox', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'vice-rss', name: 'Vice News RSS', url: 'https://www.vice.com/en/rss', category: 'Entertainment', publisher: 'Vice', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'buzzfeednews-rss', name: 'BuzzFeed News RSS', url: 'https://www.buzzfeednews.com/rss', category: 'Entertainment', publisher: 'BuzzFeed News', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'lifehacker-rss', name: 'Lifehacker RSS', url: 'https://lifehacker.com/rss', category: 'Entertainment', publisher: 'Lifehacker', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'kotaku-rss', name: 'Kotaku Gaming', url: 'https://kotaku.com/rss', category: 'Gaming', publisher: 'Kotaku', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'polygon-rss', name: 'Polygon RSS', url: 'https://www.polygon.com/rss/index.xml', category: 'Gaming', publisher: 'Polygon', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'ign-rss', name: 'IGN News RSS', url: 'http://feeds.ign.com/ign/news', category: 'Gaming', publisher: 'IGN', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 30 },
  { id: 'pcgamer-rss', name: 'PC Gamer RSS', url: 'https://www.pcgamer.com/rss', category: 'Gaming', publisher: 'PC Gamer', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },
  { id: 'pitchfork-feed', name: 'Pitchfork Music', url: 'https://pitchfork.com/feed/feed-news/rss', category: 'Entertainment', publisher: 'Pitchfork', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 25 },

  // ============================================================
  // 15. GEOPOLITICS & THINK TANKS (INACTIVE BY DEFAULT)
  // ============================================================
  { id: 'foreignaffairs-rss', name: 'Foreign Affairs', url: 'https://www.foreignaffairs.com/rss.xml', category: 'World', publisher: 'Foreign Affairs', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'foreignpolicy-feed', name: 'Foreign Policy', url: 'https://foreignpolicy.com/feed', category: 'World', publisher: 'Foreign Policy', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'projectsyndicate-rss', name: 'Project Syndicate', url: 'https://www.project-syndicate.org/rss', category: 'World', publisher: 'Project Syndicate', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'theintercept-feed', name: 'The Intercept', url: 'https://theintercept.com/feed/?lang=en', category: 'World', publisher: 'The Intercept', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'reason-feed', name: 'Reason Magazine', url: 'https://reason.com/feed', category: 'Politics', publisher: 'Reason', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 },
  { id: 'jacobin-feed', name: 'Jacobin Magazine', url: 'https://jacobin.com/feed', category: 'Politics', publisher: 'Jacobin', language: 'English', status: 'inactive', isActive: false, lastFetched: 'Never', itemCount: 20 }
];

export const INITIAL_ARTICLES: Article[] = [
  // ENGLISH INITIAL ARTICLES
  {
    id: 'art-001',
    title: 'Global Climate Summit Reaches Historic Treaty on Renewable Grid Expansion',
    originalTitle: 'COP31 Delegates Unanimously Ratify $2.5 Trillion Clean Infrastructure Protocol',
    description: 'Representatives from 195 nations have agreed to a monumental binding pact requiring national power grids to integrate 80% renewable sources by 2035.',
    content: 'GENEVA — In what international leaders are hailing as the most significant environmental breakthrough in a generation, delegates at the Global Energy Accord have ratified a comprehensive $2.5 trillion climate transformation framework.',
    link: 'https://rss.nytimes.com',
    pubDate: '2026-08-03T01:15:00Z',
    category: 'Climate',
    publisher: 'The New York Times',
    language: 'English',
    author: 'Elena Rostova & Marcus Vance',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    isBreaking: true,
    isLeadHeadline: true,
    country: 'Switzerland',
    relatedSources: [
      { publisher: 'The New York Times', url: 'https://nytimes.com', title: 'World leaders sign landmark energy deal in Geneva', pubDate: '2026-08-03T01:10:00Z' },
      { publisher: 'BBC News', url: 'https://bbc.com', title: '$2.5tn clean grid pact agreed at COP summit', pubDate: '2026-08-03T01:05:00Z' },
      { publisher: 'Reuters', url: 'https://reuters.com', title: 'Historic energy consensus reached in Geneva', pubDate: '2026-08-03T00:55:00Z' }
    ],
    aiSummary: {
      executiveSummary: 'Global delegates from 195 countries ratified a binding $2.5 trillion treaty establishing renewable grid targets and international climate financing.',
      keyPoints: [
        'Mandates 80% renewable electricity production across signatory nations by 2035.',
        'Establishes a $500 billion international fund for clean infrastructure in developing economies.'
      ],
      timeline: [
        { yearOrTime: '08:00 AM', event: 'Draft proposals submitted by European & Asian delegations.' },
        { yearOrTime: '01:15 AM', event: 'Official signing ceremony concluded in Geneva.' }
      ],
      impactScore: 96
    }
  },
  {
    id: 'art-002',
    title: 'Quantum Computing Milestone: 10,000-Qubit Processor Achieves Fault Tolerant Execution',
    description: 'Researchers at the International Quantum Physics Institute have demonstrated scalable error mitigation, unlocking instant drug synthesis simulations.',
    content: 'CAMBRIDGE — A joint coalition of quantum computer scientists has achieved fault-tolerant execution on a 10,000-qubit processor.',
    link: 'https://techcrunch.com',
    pubDate: '2026-08-03T00:45:00Z',
    category: 'Technology',
    publisher: 'WIRED',
    language: 'English',
    author: 'Dr. Sarah Jenkins',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    isBreaking: false,
    country: 'United Kingdom',
    aiSummary: {
      executiveSummary: 'Scientists achieved a major milestone in quantum hardware by demonstrating continuous logical qubit error correction on a 10,000-qubit device.',
      keyPoints: [
        'Simulated complex protein folding configurations in under 4 seconds.',
        'Reduces decoherence error rates by 99.4% over previous generation hardware.'
      ]
    }
  },

  // KANNADA INITIAL ARTICLES
  {
    id: 'art-kn-001',
    title: 'ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಹಂತ 3 ಕಾಮಗಾರಿಗೆ ಕೇಂದ್ರ ಸಚಿವ ಸಂಪುಟದ ಅನುಮೋದನೆ: 15,600 ಕೋಟಿ ರೂ. ವೆಚ್ಚ',
    originalTitle: 'Bengaluru Namma Metro Phase 3 Approved by Union Cabinet',
    description: 'ಬೆಂಗಳೂರಿನ ಸಂಚಾರ ದಟ್ಟಣೆ ಶಮನಕ್ಕೆ ಹೆಬ್ಬಾಳ ಮತ್ತು ಜೆಪಿ ನಗರ ಸಂಪರ್ಕಿಸುವ ಮೆಟ್ರೋ 3 ನೇ ಹಂತದ ಯೋಜನೆಗೆ ಕೇಂದ್ರ ಸರ್ಕಾರ ಅಂತಿಮ ಅನುಮೋದನೆ ನೀಡಿದೆ.',
    content: 'ಬೆಂಗಳೂರು — ನಗರದ ಕೋಟ್ಯಂತರ ಪ್ರಯಾಣಿಕರಿಗೆ ಸಿಹಿ ಸುದ್ದಿ ಸಿಕ್ಕಿದ್ದು, ನಮ್ಮ ಮೆಟ್ರೋ ಹಂತ-3 ಯೋಜನೆಯ 44.65 ಕಿ.ಮೀ ಉದ್ದದ ಮಾರ್ಗಕ್ಕೆ ಕೇಂದ್ರ ಸಂಪುಟ ಸಭೆ ಅನುಮೋದನೆ ನೀಡಿದೆ.',
    link: 'https://kannada.oneindia.com',
    pubDate: '2026-08-03T01:30:00Z',
    category: 'Karnataka',
    publisher: 'Oneindia Bengaluru',
    language: 'Kannada',
    author: 'ಒನ್‌ಇಂಡಿಯಾ ವರದಿಗಾರ',
    imageUrl: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&w=1200&q=80',
    readTime: '3 ನಿಮಿಷ ಓದು',
    isBreaking: true,
    isLeadHeadline: true,
    country: 'India',
    relatedSources: [
      { publisher: 'Google News Kannada', url: 'https://news.google.com', title: 'ಬೆಂಗಳೂರು ಮೆಟ್ರೋ 3 ನೇ ಹಂತ ಅನುಮೋದನೆ', pubDate: '2026-08-03T01:25:00Z' }
    ],
    aiSummary: {
      executiveSummary: 'ಕೇಂದ್ರ ಸಂಪುಟ ಸಭೆಯು ಬೆಂಗಳೂರು ನಮ್ಮ ಮೆಟ್ರೋ ಹಂತ-3 ಯೋಜನೆಯ 15,611 ಕೋಟಿ ರೂ. ವೆಚ್ಚದ 44.65 ಕಿ.ಮೀ ಮಾರ್ಗಕ್ಕೆ ಅನುಮೋದನೆ ನೀಡಿದೆ.',
      keyPoints: [
        'ಜೆಪಿ ನಗರ 4ನೇ ಹಂತದಿಂದ ಹೆಬ್ಬಾಳ ಮತ್ತು ಹೊಸಹಳ್ಳಿಯಿಂದ ಕಡಬಗೆರೆ ಮಾರ್ಗ ಸೇರ್ಪಡೆ.',
        '2029 ರ ವೇಳೆಗೆ ಕಾಮಗಾರಿ ಪೂರ್ಣಗೊಳಿಸುವ ಗುರಿ.'
      ],
      timeline: [
        { yearOrTime: 'ಬೆಳಿಗ್ಗೆ 10:00', event: 'ಕೇಂದ್ರ ಸಂಪುಟ ಸಭೆಯಲ್ಲಿ ಪ್ರಸ್ತಾಪ ಮಂಡನೆ.' },
        { yearOrTime: 'ಮಧ್ಯಾಹ್ನ 01:30', event: 'ಅಧಿಕೃತ ಅನುಮೋದನೆ ಆದೇಶ ಪ್ರಕಟಣೆ.' }
      ],
      impactScore: 95
    }
  }
];

export const DAILY_EDITORIAL = `As dawn breaks across the globe on this Tuesday, August 3, 2026, humanity stands at an extraordinary nexus of technological capability and planetary responsibility. Today's edition of The World Chronicle reflects a world moving with unprecedented velocity. From the historic $2.5 trillion clean grid pact ratified in Geneva to the 10,000-qubit quantum breakthrough in Cambridge, the boundaries of possibility are expanding before our eyes. Yet, amidst high-speed transit networks and distant exoplanetary atmospheres, the timeless essence of journalism remains unchanged: to seek truth, synthesize complexity, and deliver clarity to citizens everywhere.`;

export const DAILY_EDITORIAL_KANNADA = `ಇಂದು ಆಗಸ್ಟ್ 3, 2026 ರ ಮಂಗಳವಾರದಂದು ಜಾಗತಿಕ ಮಟ್ಟದಲ್ಲಿ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಮಾನವೀಯ ಮೌಲ್ಯಗಳ ಸಮ್ಮಿಲನವನ್ನು ದಿ ವರ್ಲ್ಡ್ ಕ್ರಾನಿಕಲ್ ಪತ್ರಿಕೆ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ. ಬೆಂಗಳೂರಿನ ಮೆಟ್ರೋ ಹಂತ-3 ಯೋಜನೆಯಿಂದ ಹಿಡಿದು ಕ್ವಾಂಟಮ್ ತಂತ್ರಜ್ಞಾನದ ಹೊಸ ಕ್ರಾಂತಿಯವರೆಗೆ ಜಗತ್ತು ನವೀನ ಹಾದಿಯಲ್ಲಿ ಸಾಗಿದೆ. ನೈಜ ಸುದ್ದಿಗಳನ್ನು ನಿಖರವಾಗಿ ಮತ್ತು ಪಾರದರ್ಶಕವಾಗಿ ತಲುಪಿಸುವುದೇ ನಮ್ಮ ಪತ್ರಿಕೋದ್ಯಮದ ಪ್ರಮುಖ ಆಶಯವಾಗಿದೆ.`;
