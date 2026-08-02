# 📰 The World Chronicle (ದಿ ವರ್ಲ್ಡ್ ಕ್ರಾನಿಕಲ್)
> **An AI-Powered Multilingual Broadsheet Newspaper & Global RSS News Aggregation Engine**

[![Next.js / Vite](https://img.shields.io/badge/Frontend-Vite%20%7C%20React%2019-blue.svg)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20v4-38bdf8.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%205.7-3178c6.svg)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg)](https://vercel.com/)

---

## 🌟 Executive Overview

**The World Chronicle** is an autonomous, full-screen digital newspaper application designed in the style of classic 20th-century broadsides (e.g., *The New York Times*, *The Guardian*). Powered by a client-side **Multi-Stage AI Pipeline**, it ingests real-time RSS feeds from **over 150 global publishers and news wire networks**, clusters breaking stories reporting on identical events, generates executive AI summaries, normalizes clickbait headlines, and organizes stories across multi-column broadside desks.

---

## 🚀 Vercel Deployment Guide

We have pre-configured [vercel.json](file:///c:/projects/AllworldNewspaper/vercel.json) for **instant zero-configuration deployment** on Vercel:

### Method 1: Deploy via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Select **Import Git Repository** and choose `sampatakumar/The-World-Chronicle`.
4. Keep framework preset as **Vite** (Vercel automatically detects `vercel.json`).
5. Click **Deploy**!

### Method 2: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## ✨ Key Features & Capability Matrix

- 📜 **Classic Newspaper Broadsheet Mode**: Full-bleed 12-column layout with headline of the day, drop caps, masthead edition header, double-line rules, multi-source publisher badges, and daily AI editorial.
- 📰 **Modern Card Grid Mode**: High-density responsive card view for quick skimming across all devices.
- 🤖 **AI Duplicate Detection & Story Aggregation**: Calculates Jaccard token similarity matrix across 150+ streams to merge identical breaking stories and display verified multi-publisher badges (*e.g., BBC + Reuters + NYT*).
- 🧠 **Multi-Lingual AI Topic Classifier**: Supports 15 category desks (*World, Karnataka, Technology, Business, Science, Sports, Entertainment, Politics, Health, Climate, Education, Gaming, Automobiles, Travel*) with dual English & Kannada script classification.
- 🌐 **Multilingual Engine**: Native support for **English**, **Kannada (ಕನ್ನಡ)**, **Hindi**, **Spanish**, **French**, **German**, **Japanese**, and **Arabic**, plus a unified **ALL — Combined Global Edition**.
- 🔊 **Audio Newspaper Briefing**: Built-in Text-to-Speech (TTS) morning briefing player for hands-free listening.
- 📄 **Broadsheet PDF Export**: Renders high-resolution vector PDF newspaper broadsides using HTML2Canvas and jsPDF.
- 🗺️ **Cartographic Intelligence (World News Map)**: Interactive map view allowing readers to select regional hot-spots and isolate sector dispatches.
- ⚙️ **RSS Feed Admin Control Dashboard**: Full CRUD interface to add, edit, filter, or sync custom RSS feeds with parallel concurrent batch ingestion (10 parallel workers).

---

## 📡 Master RSS Feeds Registry (150+ Active Streams)

Below is the complete table of pre-configured live RSS streams integrated into **The World Chronicle**:

### 1. Google News Topic & Section Feeds
| Publisher | Feed Name | Category | Language | RSS Feed URL |
| :--- | :--- | :--- | :--- | :--- |
| Google News | Top Stories | World | English | `https://news.google.com/rss` |
| Google News World | World Desk | World | English | `https://news.google.com/rss/headlines/section/topic/WORLD` |
| Google News Nation | Nation | World | English | `https://news.google.com/rss/headlines/section/topic/NATION` |
| Google News Business | Business & Markets | Business | English | `https://news.google.com/rss/headlines/section/topic/BUSINESS` |
| Google News Tech | Technology & AI | Technology | English | `https://news.google.com/rss/headlines/section/topic/TECHNOLOGY` |
| Google News Entertainment | Entertainment & Culture | Entertainment | English | `https://news.google.com/rss/headlines/section/topic/ENTERTAINMENT` |
| Google News Sports | World Sports | Sports | English | `https://news.google.com/rss/headlines/section/topic/SPORTS` |
| Google News Science | Science & Space | Science | English | `https://news.google.com/rss/headlines/section/topic/SCIENCE` |
| Google News Health | Health & Medicine | Health | English | `https://news.google.com/rss/headlines/section/topic/HEALTH` |

### 2. Google News India, Karnataka & Kannada (ಕನ್ನಡ)
| Publisher | Feed Name | Category | Language | RSS Feed URL |
| :--- | :--- | :--- | :--- | :--- |
| Google News India | India Main | Politics | English | `https://news.google.com/rss/search?q=India&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News India Politics | India Politics | Politics | English | `https://news.google.com/rss/search?q=India+Politics&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News India Business | India Business | Business | English | `https://news.google.com/rss/search?q=India+Business&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News India Tech | India Technology | Technology | English | `https://news.google.com/rss/search?q=India+Technology&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News India Sports | India Sports | Sports | English | `https://news.google.com/rss/search?q=India+Sports&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News Cricket | India Cricket | Sports | English | `https://news.google.com/rss/search?q=India+Cricket&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News Karnataka | Karnataka Dispatches | Karnataka | English | `https://news.google.com/rss/search?q=Karnataka&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News Bengaluru | Bengaluru City | Karnataka | English | `https://news.google.com/rss/search?q=Bengaluru&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News Mysuru | Mysuru News | Karnataka | English | `https://news.google.com/rss/search?q=Mysuru&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News Hubballi | Hubballi News | Karnataka | English | `https://news.google.com/rss/search?q=Hubballi&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News Mangaluru | Mangaluru News | Karnataka | English | `https://news.google.com/rss/search?q=Mangaluru&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News Belagavi | Belagavi News | Karnataka | English | `https://news.google.com/rss/search?q=Belagavi&hl=en-IN&gl=IN&ceid=IN:en` |
| Google News ಕನ್ನಡ | ಕನ್ನಡ ಪ್ರಮುಖ ಸುದ್ದಿಗಳು | World | Kannada | `https://news.google.com/rss/search?q=Kannada&hl=kn&gl=IN&ceid=IN:kn` |
| Google News ಕರ್ನಾಟಕ | ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸುದ್ದಿ | Karnataka | Kannada | `https://news.google.com/rss/search?q=ಕರ್ನಾಟಕ&hl=kn&gl=IN&ceid=IN:kn` |
| Google News ಬೆಂಗಳೂರು | ಬೆಂಗಳೂರು ವರದಿ | Karnataka | Kannada | `https://news.google.com/rss/search?q=ಬೆಂಗಳೂರು&hl=kn&gl=IN&ceid=IN:kn` |
| Google News ಮೈಸೂರು | ಮೈಸೂರು ಇತ್ತೀಚೆಗೆ | Karnataka | Kannada | `https://news.google.com/rss/search?q=ಮೈಸೂರು&hl=kn&gl=IN&ceid=IN:kn` |
| Google News ಕ್ರೀಡೆ | ಕನ್ನಡ ಕ್ರೀಡಾ ವರದಿ | Sports | Kannada | `https://news.google.com/rss/search?q=ಕ್ರೀಡೆ&hl=kn&gl=IN&ceid=IN:kn` |
| Google News ತಂತ್ರಜ್ಞಾನ | ಕನ್ನಡ ತಂತ್ರಜ್ಞಾನ | Technology | Kannada | `https://news.google.com/rss/search?q=ತಂತ್ರಜ್ಞಾನ&hl=kn&gl=IN&ceid=IN:kn` |

### 3. Oneindia Kannada (18 Feeds)
| Publisher | Feed Name | Category | Language | RSS Feed URL |
| :--- | :--- | :--- | :--- | :--- |
| Oneindia Kannada | ಒನ್‌ಇಂಡಿಯಾ ಕನ್ನಡ — ಪ್ರಮುಖ ಸುದ್ದಿಗಳು | World | Kannada | `https://kannada.oneindia.com/rss/feeds/oneindia-kannada-fb.xml` |
| Oneindia Kannada | ಒನ್‌ಇಂಡಿಯಾ ಕನ್ನಡ — ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-news-fb.xml` |
| Oneindia Bengaluru | ಒನ್‌ಇಂಡಿಯಾ — ಬೆಂಗಳೂರು ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-bengaluru-fb.xml` |
| Oneindia Mysuru | ಒನ್‌ಇಂಡಿಯಾ — ಮೈಸೂರು ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-mysuru-fb.xml` |
| Oneindia Mangaluru | ಒನ್‌ಇಂಡಿಯಾ — ಮಂಗಳೂರು ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-mangaluru-fb.xml` |
| Oneindia Belagavi | ಒನ್‌ಇಂಡಿಯಾ — ಬೆಳಗಾವಿ ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-belagavi-fb.xml` |
| Oneindia Dharwad | ಒನ್‌ಇಂಡಿಯಾ — ಧಾರವಾಡ ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-dharwad-fb.xml` |
| Oneindia Shivamogga | ಒನ್‌ಇಂಡಿಯಾ — ಶಿವಮೊಗ್ಗ ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-shivamogga-fb.xml` |
| Oneindia Tumakuru | ಒನ್‌ಇಂಡಿಯಾ — ತುಮಕೂರು ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-tumakuru-fb.xml` |
| Oneindia Bidar | ಒನ್‌ಇಂಡಿಯಾ — ಬೀದರ್ ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-bidar-fb.xml` |
| Oneindia Madikeri | ಒನ್‌ಇಂಡಿಯಾ — ಮಡಿಕೇರಿ ಸುದ್ದಿ | Karnataka | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-madikeri-fb.xml` |
| Oneindia Cinema | ಒನ್‌ಇಂಡಿಯಾ — ಚಲನಚಿತ್ರ ಮತ್ತು ಮನರಂಜನೆ | Entertainment | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-entertainment-fb.xml` |
| Oneindia Tech | ಒನ್‌ಇಂಡಿಯಾ — ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ (AI) ಮತ್ತು ತಂತ್ರಜ್ಞಾನ | Technology | Kannada | `https://kannada.oneindia.com/rss/feeds/artificial-intelligence-fb.xml` |
| Oneindia Jobs | ಒನ್‌ಇಂಡಿಯಾ — ಉದ್ಯೋಗ ಮತ್ತು ವೃತ್ತಿ ಮಾಹಿತಿ | Business | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-jobs-fb.xml` |
| Oneindia Travel | ಒನ್‌ಇಂಡಿಯಾ — ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ಪ್ರವಾಸ | Travel | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-travel-fb.xml` |
| Oneindia Lifestyle | ಒನ್‌ಇಂಡಿಯಾ — ಜೀವನಶೈಲಿ ಮತ್ತು ಆರೋಗ್ಯ | Health | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-lifestyle-fb.xml` |
| Oneindia Astrology | ಒನ್‌ಇಂಡಿಯಾ — ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ದಿನಭವಿಷ್ಯ | Entertainment | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-astrology-fb.xml` |
| Oneindia Partner | ಒನ್‌ಇಂಡಿಯಾ — ಪ್ರಾಯೋಜಿತ ವಿಶೇಷ ಲೇಖನಗಳು | Business | Kannada | `https://kannada.oneindia.com/rss/feeds/kannada-partner-content-fb.xml` |

### 4. Major International News Networks & Broadsheets
| Publisher | Feed Name | Category | Language | RSS Feed URL |
| :--- | :--- | :--- | :--- | :--- |
| The New York Times | NYT HomePage Top Stories | World | English | `https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml` |
| The New York Times | NYT World Dispatch | World | English | `https://rss.nytimes.com/services/xml/rss/nyt/World.xml` |
| Washington Post | Washington Post World | World | English | `http://feeds.washingtonpost.com/rss/world` |
| Washington Post | Washington Post Politics | Politics | English | `https://feeds.washingtonpost.com/rss/politics` |
| Wall Street Journal | WSJ World News | Business | English | `https://feeds.a.dj.com/rss/RSSWorldNews.xml` |
| BBC News | BBC Main Feed | World | English | `http://feeds.bbci.co.uk/news/rss.xml` |
| BBC News | BBC World Dispatch | World | English | `http://feeds.bbci.co.uk/news/world/rss.xml` |
| Reuters | Reuters Top News Agency | World | English | `https://www.reuters.com/rssFeed/topNews` |
| Reuters | Reuters World News | World | English | `https://www.reuters.com/rssFeed/worldNews` |
| Al Jazeera | Al Jazeera World Direct | World | English | `https://www.aljazeera.com/xml/rss/all.xml` |
| The Guardian | The Guardian UK Edition | World | English | `https://www.theguardian.com/uk/rss` |
| The Guardian | The Guardian World News | World | English | `https://www.theguardian.com/world/rss` |
| CNN | CNN Top Edition Stories | World | English | `http://rss.cnn.com/rss/edition.rss` |
| CNN | CNN International World | World | English | `http://rss.cnn.com/rss/edition_world.rss` |
| LA Times | LA Times World & Nation | World | English | `https://www.latimes.com/world-nation/rss2.0.xml` |
| DW News | Deutsche Welle DW World | World | English | `https://rss.dw.com/xml/rss-en-all` |
| France 24 | France 24 World News | World | English | `https://www.france24.com/en/rss` |
| NPR | NPR Public Radio News | World | English | `https://feeds.npr.org/1001/rss.xml` |
| Axios | Axios Breaking News & Insights | World | English | `https://api.axios.com/feed/` |
| Bloomberg | Bloomberg Financial Markets | Business | English | `https://feeds.bloomberg.com/markets/news.rss` |
| Financial Times | Financial Times Global Economy | Business | English | `https://www.ft.com/?format=rss` |

### 5. US Politics & National Media
| Publisher | Feed Name | Category | Language | RSS Feed URL |
| :--- | :--- | :--- | :--- | :--- |
| Politico | Politico Playbook | Politics | English | `https://rss.politico.com/playbook.xml` |
| Politico | Politico Top Picks | Politics | English | `https://www.politico.com/rss/politicopicks.xml` |
| The Hill | The Hill Capitol Hill News | Politics | English | `https://thehill.com/feed` |
| Fox News | Fox News Latest | Politics | English | `http://feeds.foxnews.com/foxnews/latest` |
| CBS News | CBS News Main Feed | World | English | `https://www.cbsnews.com/latest/rss/main` |
| NBC News | NBC News Top Headlines | World | English | `http://feeds.nbcnews.com/nbcnews/public/news` |
| ABC News US | ABC News US Top Stories | World | English | `https://abcnews.go.com/abcnews/topstories` |
| TIME | TIME Magazine World & Ideas | World | English | `https://time.com/feed` |
| NY Post | New York Post Latest | World | English | `https://nypost.com/feed` |
| HuffPost | HuffPost Front Page | World | English | `https://www.huffpost.com/section/front-page/feed` |
| ProPublica | ProPublica Investigative Journalism | Politics | English | `https://www.propublica.org/feeds/propublica/main` |
| Daily Beast | The Daily Beast Breaking News | World | English | `https://www.thedailybeast.com/rss` |

### 6. Canadian & Australian Media
| Publisher | Feed Name | Category | Language | RSS Feed URL |
| :--- | :--- | :--- | :--- | :--- |
| CBC News | CBC News Canada Top Stories | World | English | `https://www.cbc.ca/cmlink/rss-topstories` |
| CTV News | CTV News Canada Top Stories | World | English | `https://www.ctvnews.ca/rss/ctvnews-ca-top-stories-public-rss-1.822009` |
| Global News CA | Global News Canada Main | World | English | `https://globalnews.ca/feed/` |
| Globe and Mail | The Globe and Mail Outbound | World | English | `https://www.theglobeandmail.com/arc/outboundfeeds/rss/` |
| Financial Post | Financial Post Business Canada | Business | English | `https://business.financialpost.com/feed/` |
| National Post | National Post Canada | World | English | `https://nationalpost.com/feed/` |
| Toronto Star | Toronto Star Top Stories | World | English | `https://www.thestar.com/content/thestar/feed.RSSManagerServlet.articles.topstories.rss` |
| ABC News AU | ABC News Australia Main | World | English | `https://www.abc.net.au/news/feed/51120/rss.xml` |
| Sydney Morning Herald | Sydney Morning Herald | World | English | `https://www.smh.com.au/rss/feed.xml` |
| The Age | The Age Australia | World | English | `https://www.theage.com.au/rss/feed.xml` |
| News.com.au | News.com.au National Latest | World | English | `https://www.news.com.au/content-feeds/latest-news-national/` |

### 7. South Asian, African & Geopolitical Outlets
| Publisher | Feed Name | Category | Language | RSS Feed URL |
| :--- | :--- | :--- | :--- | :--- |
| The Daily Star BD | The Daily Star Bangladesh | World | English | `https://www.thedailystar.net/frontpage/rss.xml` |
| Prothom Alo | Prothom Alo Main Feed | World | English | `https://www.prothomalo.com/feed/` |
| BDNews24 | BDNews24 RSS | World | English | `https://bdnews24.com/?widgetName=rssfeed&widgetId=1150&getXmlFeed=true` |
| News24 SA | News24 South Africa Top | World | English | `http://feeds.news24.com/articles/news24/TopStories/rss` |
| Daily Maverick | Daily Maverick South Africa | World | English | `https://www.dailymaverick.co.za/dmrss/` |
| TimesLIVE | TimesLIVE South Africa | World | English | `https://www.timeslive.co.za/rss/` |
| Foreign Affairs | Foreign Affairs Geopolitics | World | English | `https://www.foreignaffairs.com/rss.xml` |
| Foreign Policy | Foreign Policy Global Analysis | World | English | `https://foreignpolicy.com/feed` |
| Project Syndicate | Project Syndicate World Opinions | World | English | `https://www.project-syndicate.org/rss` |
| The Intercept | The Intercept Independent News | World | English | `https://theintercept.com/feed/?lang=en` |

### 8. Tech, Business, Science, Sports & Culture
| Publisher | Feed Name | Category | Language | RSS Feed URL |
| :--- | :--- | :--- | :--- | :--- |
| TechCrunch | TechCrunch Global Tech & Startups | Technology | English | `https://techcrunch.com/feed/` |
| The Verge | The Verge Tech & Science | Technology | English | `https://www.theverge.com/rss/index.xml` |
| WIRED | WIRED Ideas, Tech & Security | Technology | English | `https://www.wired.com/feed/rss` |
| Ars Technica | Ars Technica Deep Tech | Technology | English | `http://feeds.arstechnica.com/arstechnica/index` |
| Forbes | Forbes Most Popular | Business | English | `https://www.forbes.com/most-popular/feed/` |
| Fortune | Fortune Business & Leadership | Business | English | `https://fortune.com/feed` |
| The Economist | The Economist Global Politics | Business | English | `https://www.economist.com/global-politics/rss.xml` |
| ScienceDaily | ScienceDaily Top Discoveries | Science | English | `https://www.sciencedaily.com/rss/top_news.xml` |
| Nature | Nature Journal Discoveries | Science | English | `http://www.nature.com/nature/current_issue/rss` |
| NASA | NASA Breakthroughs & Image of the Day | Science | English | `https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss` |
| ESPN | ESPN World Sports Network | Sports | English | `https://www.espn.com/espn/rss/news` |
| BBC Sport | BBC Sport Global Headlines | Sports | English | `http://feeds.bbci.co.uk/sport/rss.xml` |
| Kotaku | Kotaku Gaming Culture | Gaming | English | `https://kotaku.com/rss` |
| IGN | IGN Games, Movies & Comics | Gaming | English | `http://feeds.ign.com/ign/news` |

---

## 🛠️ Technology Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript 5.7](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@custom-variant dark (&:where(.dark, .dark *));`
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Generation**: `html2canvas` + `jspdf`
- **Speech Engine**: Web Speech API (`speechSynthesis`)

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sampatakumar/The-World-Chronicle.git
   cd The-World-Chronicle
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🚀 Pushing to GitHub

Run the following commands to push the repository to GitHub:

```bash
git add .
git commit -m "Initial commit: The World Chronicle Broadsheet Newspaper Engine with 150+ RSS Streams"
git branch -M main
git remote add origin https://github.com/sampatakumar/The-World-Chronicle.git
git push -u origin main
```

---

## 📜 License
Distributed under the **MIT License**. See `LICENSE` for more information.
