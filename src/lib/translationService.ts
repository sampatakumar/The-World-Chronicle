import { Article, Category } from '../types/newspaper';

export type SupportedLanguage = 
  | 'All'
  | 'English' 
  | 'Kannada' 
  | 'Hindi' 
  | 'Spanish' 
  | 'French' 
  | 'German' 
  | 'Japanese' 
  | 'Arabic';

export interface UIStringDictionary {
  mastheadTitle: string;
  mastheadSub: string;
  newspaperMode: string;
  blogMode: string;
  worldMap: string;
  rssDashboard: string;
  syncFeeds: string;
  syncing: string;
  audioBriefing: string;
  downloadPdf: string;
  headlineOfTheDay: string;
  dailyEditorial: string;
  topStories: string;
  worldDesk: string;
  techDesk: string;
  marketsDesk: string;
  scienceDesk: string;
  sportsDesk: string;
  readMore: string;
  aiExecutiveBriefing: string;
  aiStoryAggregation: string;
  verifiedOutlets: string;
  searchPlaceholder: string;
  weatherInfo: string;
}

export const UI_TRANSLATIONS: Record<SupportedLanguage, UIStringDictionary> = {
  All: {
    mastheadTitle: 'The World Chronicle',
    mastheadSub: 'Vol. CXLVIII — No. 44,910 • The Combined Global Daily Broadsheet',
    newspaperMode: 'Newspaper Mode',
    blogMode: 'Blog Mode',
    worldMap: 'World Map',
    rssDashboard: 'RSS Dashboard',
    syncFeeds: 'Sync Feeds',
    syncing: 'Syncing Feeds...',
    audioBriefing: 'Audio Briefing',
    downloadPdf: 'Download PDF',
    headlineOfTheDay: 'HEADLINE OF THE DAY',
    dailyEditorial: 'DAILY EDITORIAL',
    topStories: 'TOP STORIES OF THE HOUR',
    worldDesk: 'WORLD DESK',
    techDesk: 'TECHNOLOGY & INNOVATION',
    marketsDesk: 'MARKETS & FINANCE',
    scienceDesk: 'SCIENCE & EXPLORATION',
    sportsDesk: 'SPORTS & ENTERTAINMENT',
    readMore: 'Continue Reading Full Article & Timeline',
    aiExecutiveBriefing: 'AI EXECUTIVE BRIEFING',
    aiStoryAggregation: 'AI Story Aggregation',
    verifiedOutlets: 'Outlets Verified',
    searchPlaceholder: 'Search combined global news...',
    weatherInfo: 'WEATHER: GLOBAL FAIR • 22°C'
  },
  English: {
    mastheadTitle: 'The World Chronicle',
    mastheadSub: 'Vol. CXLVIII — No. 44,910 • The Independent Global Daily Broadsheet',
    newspaperMode: 'Newspaper Mode',
    blogMode: 'Blog Mode',
    worldMap: 'World Map',
    rssDashboard: 'RSS Dashboard',
    syncFeeds: 'Sync Feeds',
    syncing: 'Syncing Feeds...',
    audioBriefing: 'Audio Briefing',
    downloadPdf: 'Download PDF',
    headlineOfTheDay: 'HEADLINE OF THE DAY',
    dailyEditorial: 'DAILY EDITORIAL',
    topStories: 'TOP STORIES OF THE HOUR',
    worldDesk: 'WORLD DESK',
    techDesk: 'TECHNOLOGY & INNOVATION',
    marketsDesk: 'MARKETS & FINANCE',
    scienceDesk: 'SCIENCE & EXPLORATION',
    sportsDesk: 'SPORTS & ENTERTAINMENT',
    readMore: 'Continue Reading Full Article & Timeline',
    aiExecutiveBriefing: 'AI EXECUTIVE BRIEFING',
    aiStoryAggregation: 'AI Story Aggregation',
    verifiedOutlets: 'Outlets Verified',
    searchPlaceholder: 'Search news, topics, keywords...',
    weatherInfo: 'WEATHER: GLOBAL FAIR • 22°C'
  },
  Kannada: {
    mastheadTitle: 'ದಿ ವರ್ಲ್ಡ್ ಕ್ರಾನಿಕಲ್',
    mastheadSub: 'ಸಂಪುಟ CXLVIII — ಸಂ. 44,910 • ಸ್ವತಂತ್ರ ಜಾಗತಿಕ ಮತ್ತು ದಿನಪತ್ರಿಕೆ',
    newspaperMode: 'ದಿನಪತ್ರಿಕೆ ಮೋಡ್',
    blogMode: 'ಬ್ಲಾಗ್ ಮೋಡ್',
    worldMap: 'ವಿಶ್ವ ನಕ್ಷೆ',
    rssDashboard: 'ಆರ್‌ಎಸ್‌ಎಸ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    syncFeeds: 'ಸುದ್ಧಿ ಅಪ್‌ಡೇಟ್ ಮಾಡಿ',
    syncing: 'ಅಪ್‌ಡೇಟ್ ಆಗುತ್ತಿದೆ...',
    audioBriefing: 'ಆಡಿಯೋ ವರದಿ',
    downloadPdf: 'ಪಿಡಿಎಫ್ ಡೌನ್‌ಲೋಡ್',
    headlineOfTheDay: 'ಇಂದಿನ ಮುಖ್ಯ ವರದಿ',
    dailyEditorial: 'ದೈನಂದಿನ ಸಂಪಾದಕೀಯ',
    topStories: 'ಗಂಟೆಯ ಪ್ರಮುಖ ಸುದ್ದಿಗಳು',
    worldDesk: 'ವಿಶ್ವ ಸುದ್ದಿ ವಿಭಾಗ',
    techDesk: 'ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ನಾವೀನ್ಯತೆ',
    marketsDesk: 'ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಹಣಕಾಸು',
    scienceDesk: 'ವಿಜ್ಞಾನ ಮತ್ತು ಸಂಶೋಧನೆ',
    sportsDesk: 'ಕ್ರೀಡೆ ಮತ್ತು ಮನರಂಜನೆ',
    readMore: 'ಪೂರ್ಣ ಲೇಖನ ಮತ್ತು ವಿವರಗಳನ್ನು ಓದಿ',
    aiExecutiveBriefing: 'ಎಐ ಕಾರ್ಯಾಚರಣೆ ವಿವರಣೆ',
    aiStoryAggregation: 'ಎಐ ಸುದ್ದಿ ಸಂಕಲನ',
    verifiedOutlets: 'ಪರಿಶೀಲಿಸಿದ ಮೂಲಗಳು',
    searchPlaceholder: 'ಸುದ್ದಿ, ವಿಷಯಗಳು, ಕೀವರ್ಡ್‌ಗಳನ್ನು ಹುಡುಕಿ...',
    weatherInfo: 'ಹವಾಮಾನ: ಜಾಗತಿಕ ನಿರ್ಮಲ • 22°C'
  },
  Hindi: {
    mastheadTitle: 'द वर्ल्ड क्रॉनिकल',
    mastheadSub: 'खंड CXLVIII — संख्या 44,910 • स्वतंत्र वैश्विक दैनिक समाचार पत्र',
    newspaperMode: 'अखबार मोड',
    blogMode: 'ब्लॉग मोड',
    worldMap: 'विश्व मानचित्र',
    rssDashboard: 'आरएसएस डैशबोर्ड',
    syncFeeds: 'फीड सिंक करें',
    syncing: 'सिंक हो रहा है...',
    audioBriefing: 'ऑडियो ब्रीफिंग',
    downloadPdf: 'पीडीएफ डाउनलोड',
    headlineOfTheDay: 'आज की मुख्य खबर',
    dailyEditorial: 'दैनिक संपादकीय',
    topStories: 'इस घंटे की बड़ी खबरें',
    worldDesk: 'विश्व डेस्क',
    techDesk: 'प्रौद्योगिकी और नवाचार',
    marketsDesk: 'बाज़ार और वित्त',
    scienceDesk: 'विज्ञान और खोज',
    sportsDesk: 'खेल और मनोरंजन',
    readMore: 'पूरा लेख और घटनाक्रम पढ़ें',
    aiExecutiveBriefing: 'एआई संक्षिप्त विवरण',
    aiStoryAggregation: 'एआई समाचार एकत्रीकरण',
    verifiedOutlets: 'सत्यापित स्रोत',
    searchPlaceholder: 'समाचार, विषय, कीवर्ड खोजें...',
    weatherInfo: 'मौसम: वैश्विक साफ • 22°C'
  },
  Spanish: {
    mastheadTitle: 'El Crónica Mundial',
    mastheadSub: 'Vol. CXLVIII — N.º 44.910 • Periódico Diario Global Independiente',
    newspaperMode: 'Modo Periódico',
    blogMode: 'Modo Blog',
    worldMap: 'Mapa Mundial',
    rssDashboard: 'Panel RSS',
    syncFeeds: 'Sincronizar Feeds',
    syncing: 'Sincronizando...',
    audioBriefing: 'Resumen en Audio',
    downloadPdf: 'Descargar PDF',
    headlineOfTheDay: 'TITULAR DEL DÍA',
    dailyEditorial: 'EDITORIAL DIARIO',
    topStories: 'NOTICIAS DESTACADAS',
    worldDesk: 'SECCIÓN MUNDIAL',
    techDesk: 'TECNOLOGÍA E INNOVACIÓN',
    marketsDesk: 'MERCADOS Y FINANZAS',
    scienceDesk: 'CIENCIA Y EXPLORACIÓN',
    sportsDesk: 'DEPORTES Y ENTRETENIMIENTO',
    readMore: 'Continuar Leyendo Artículo Completo',
    aiExecutiveBriefing: 'RESUMEN EJECUTIVO IA',
    aiStoryAggregation: 'Agregación de Noticias IA',
    verifiedOutlets: 'Medios Verificados',
    searchPlaceholder: 'Buscar noticias, temas, palabras clave...',
    weatherInfo: 'TIEMPO: DESPEJADO GLOBAL • 22°C'
  },
  French: {
    mastheadTitle: 'La Chronique Mondiale',
    mastheadSub: 'Vol. CXLVIII — N° 44 910 • Le Journal Quotidien Global Indépendant',
    newspaperMode: 'Mode Journal',
    blogMode: 'Mode Blog',
    worldMap: 'Carte du Monde',
    rssDashboard: 'Tableau RSS',
    syncFeeds: 'Synchroniser Feeds',
    syncing: 'Synchronisation...',
    audioBriefing: 'Briefing Audio',
    downloadPdf: 'Télécharger PDF',
    headlineOfTheDay: 'UN DE LA JOURNÉE',
    dailyEditorial: 'ÉDITORIAL DU JOUR',
    topStories: 'À LA UNE CETTE HEURE',
    worldDesk: 'RUBRIQUE MONDE',
    techDesk: 'TECHNOLOGIE & INNOVATION',
    marketsDesk: 'MARCHÉS & FINANCES',
    scienceDesk: 'SCIENCES & EXPLORATION',
    sportsDesk: 'SPORTS & DIVERTISSEMENT',
    readMore: 'Lire L\'Article Complet',
    aiExecutiveBriefing: 'SYNTHÈSE EXÉCUTIVE IA',
    aiStoryAggregation: 'Agrégation de Nouvelles IA',
    verifiedOutlets: 'Sources Vérifiées',
    searchPlaceholder: 'Rechercher des actualités, thèmes...',
    weatherInfo: 'MÉTÉO: BEAU TEMPS • 22°C'
  },
  German: {
    mastheadTitle: 'Die Weltchronik',
    mastheadSub: 'Band CXLVIII — Nr. 44.910 • Die Unabhängige Globale Tageszeitung',
    newspaperMode: 'Zeitungsmodus',
    blogMode: 'Blogmodus',
    worldMap: 'Weltkarte',
    rssDashboard: 'RSS Dashboard',
    syncFeeds: 'Feeds Synchronisieren',
    syncing: 'Synchronisiere...',
    audioBriefing: 'Audio-Briefing',
    downloadPdf: 'PDF Herunterladen',
    headlineOfTheDay: 'SCHLAGZEILE DES TAGES',
    dailyEditorial: 'TÄGLICHER LEITARTIKEL',
    topStories: 'TOP-MELDUNGEN DER STUNDE',
    worldDesk: 'WELTRESSORT',
    techDesk: 'TECHNOLOGIE & INNOVATION',
    marketsDesk: 'MÄRKTE & FINANZEN',
    scienceDesk: 'WISSENSCHAFT & FORSCHUNG',
    sportsDesk: 'SPORT & UNTERHALTUNG',
    readMore: 'Vollständigen Artikel Lesen',
    aiExecutiveBriefing: 'KI-ZUSAMMENFASSUNG',
    aiStoryAggregation: 'KI-Nachrichten-Aggregation',
    verifiedOutlets: 'Verifizierte Quellen',
    searchPlaceholder: 'Nachrichten, Themen suchen...',
    weatherInfo: 'WETTER: GLOBAL HEITER • 22°C'
  },
  Japanese: {
    mastheadTitle: 'ザ・ワールド・クロニクル',
    mastheadSub: '第CXLVIII巻 — 第44,910号 • 独立系国際日刊総合紙',
    newspaperMode: '新聞モード',
    blogMode: 'ブログモード',
    worldMap: '世界マップ',
    rssDashboard: 'RSSダッシュボード',
    syncFeeds: 'フィード同期',
    syncing: '同期中...',
    audioBriefing: '音声ニュース要約',
    downloadPdf: 'PDFダウンロード',
    headlineOfTheDay: '本日の主要ニュース',
    dailyEditorial: '社説・論説',
    topStories: '最新の注目ニュース',
    worldDesk: '国際面',
    techDesk: 'IT・テクノロジー',
    marketsDesk: '経済・金融',
    scienceDesk: '科学・宇宙',
    sportsDesk: 'スポーツ・エンタメ',
    readMore: '記事の全文と詳細を見る',
    aiExecutiveBriefing: 'AI要約・ポイント分析',
    aiStoryAggregation: 'AI複数メディア統合',
    verifiedOutlets: '検証済み報道機関',
    searchPlaceholder: 'ニュース、キーワードを検索...',
    weatherInfo: '天候: 世界的に快晴 • 22°C'
  },
  Arabic: {
    mastheadTitle: 'ذا وورلد كرونيكل',
    mastheadSub: 'المجلد CXLVIII — العدد 44,910 • الصحيفة اليومية العالمية المستقلة',
    newspaperMode: 'وضع الجريدة',
    blogMode: 'وضع المدونة',
    worldMap: 'خريطة العالم',
    rssDashboard: 'لوحة RSS',
    syncFeeds: 'تحديث الأخبار',
    syncing: 'جاري التحديث...',
    audioBriefing: 'الموجز الصوتي',
    downloadPdf: 'تحميل PDF',
    headlineOfTheDay: 'العنوان الرئيسي لليوم',
    dailyEditorial: 'الافتتاحية اليومية',
    topStories: 'أبرز أخبار الساعة',
    worldDesk: 'الأخبار العالمية',
    techDesk: 'التكنولوجيا والابتكار',
    marketsDesk: 'الأسواق والمال',
    scienceDesk: 'العلوم والاكتشافات',
    sportsDesk: 'الرياضة والترفيه',
    readMore: 'قراءة المقال الكامل والجدول الزمني',
    aiExecutiveBriefing: 'الملخص التنفيذي بالذكاء الاصطناعي',
    aiStoryAggregation: 'تجميع الأخبار بالذكاء الاصطناعي',
    verifiedOutlets: 'المصادر المؤكدة',
    searchPlaceholder: 'البحث في الأخبار والمواضيع...',
    weatherInfo: 'الطقس: صحو عالمياً • 22°C'
  }
};

/**
 * Category names translations
 */
export const CATEGORY_TRANSLATIONS: Record<SupportedLanguage, Record<Category, string>> = {
  All: {
    All: 'All',
    World: 'World',
    Karnataka: 'Karnataka',
    Technology: 'Technology',
    Business: 'Business',
    Science: 'Science',
    Sports: 'Sports',
    Entertainment: 'Entertainment',
    Politics: 'Politics',
    Health: 'Health',
    Climate: 'Climate',
    Education: 'Education',
    Gaming: 'Gaming',
    Automobiles: 'Automobiles',
    Travel: 'Travel'
  },
  English: {
    All: 'All',
    World: 'World',
    Karnataka: 'Karnataka',
    Technology: 'Technology',
    Business: 'Business',
    Science: 'Science',
    Sports: 'Sports',
    Entertainment: 'Entertainment',
    Politics: 'Politics',
    Health: 'Health',
    Climate: 'Climate',
    Education: 'Education',
    Gaming: 'Gaming',
    Automobiles: 'Automobiles',
    Travel: 'Travel'
  },
  Kannada: {
    All: 'ಎಲ್ಲಾ',
    World: 'ವಿಶ್ವ',
    Karnataka: 'ಕರ್ನಾಟಕ',
    Technology: 'ತಂತ್ರಜ್ಞಾನ',
    Business: 'ವ್ಯಾಪಾರ',
    Science: 'ವಿಜ್ಞಾನ',
    Sports: 'ಕ್ರೀಡೆ',
    Entertainment: 'ಮನರಂಜನೆ',
    Politics: 'ರಾಜಕೀಯ',
    Health: 'ಆರೋಗ್ಯ',
    Climate: 'ಹವಾಮಾನ',
    Education: 'ಶಿಕ್ಷಣ',
    Gaming: 'ಗೇಮಿಂಗ್',
    Automobiles: 'ವಾಹನಗಳು',
    Travel: 'ಪ್ರವಾಸ'
  },
  Hindi: {
    All: 'सभी',
    World: 'विश्व',
    Karnataka: 'कर्नाटक',
    Technology: 'तकनीक',
    Business: 'व्यापार',
    Science: 'विज्ञान',
    Sports: 'खेल',
    Entertainment: 'मनोरंजन',
    Politics: 'राजनीति',
    Health: 'स्वास्थ्य',
    Climate: 'जलवायु',
    Education: 'शिक्षा',
    Gaming: 'गेमिंग',
    Automobiles: 'ऑटोमोबाइल',
    Travel: 'यात्रा'
  },
  Spanish: {
    All: 'Todos',
    World: 'Mundo',
    Karnataka: 'Karnataka',
    Technology: 'Tecnología',
    Business: 'Negocios',
    Science: 'Ciencia',
    Sports: 'Deportes',
    Entertainment: 'Entretenimiento',
    Politics: 'Política',
    Health: 'Salud',
    Climate: 'Clima',
    Education: 'Educación',
    Gaming: 'Videojuegos',
    Automobiles: 'Automóviles',
    Travel: 'Viajes'
  },
  French: {
    All: 'Tous',
    World: 'Monde',
    Karnataka: 'Karnataka',
    Technology: 'Technologie',
    Business: 'Économie',
    Science: 'Science',
    Sports: 'Sports',
    Entertainment: 'Divertissement',
    Politics: 'Politique',
    Health: 'Santé',
    Climate: 'Climat',
    Education: 'Éducation',
    Gaming: 'Jeux Vidéo',
    Automobiles: 'Automobiles',
    Travel: 'Voyage'
  },
  German: {
    All: 'Alle',
    World: 'Welt',
    Karnataka: 'Karnataka',
    Technology: 'Technologie',
    Business: 'Wirtschaft',
    Science: 'Wissenschaft',
    Sports: 'Sport',
    Entertainment: 'Unterhaltung',
    Politics: 'Politik',
    Health: 'Gesundheit',
    Climate: 'Klima',
    Education: 'Bildung',
    Gaming: 'Gaming',
    Automobiles: 'Automobile',
    Travel: 'Reisen'
  },
  Japanese: {
    All: 'すべて',
    World: '国際',
    Karnataka: 'カルナータカ',
    Technology: 'テクノロジー',
    Business: '経済',
    Science: '科学',
    Sports: 'スポーツ',
    Entertainment: 'エンタメ',
    Politics: '政治',
    Health: '医療',
    Climate: '気候',
    Education: '教育',
    Gaming: 'ゲーム',
    Automobiles: '自動車',
    Travel: '旅行'
  },
  Arabic: {
    All: 'الكل',
    World: 'العالم',
    Karnataka: 'كارناتاكا',
    Technology: 'التكنولوجيا',
    Business: 'الأعمال',
    Science: 'العلوم',
    Sports: 'الرياضة',
    Entertainment: 'الترفيه',
    Politics: 'السياسة',
    Health: 'الصحة',
    Climate: 'المناخ',
    Education: 'التعليم',
    Gaming: 'الألعاب',
    Automobiles: 'السيارات',
    Travel: 'السفر'
  }
};

/**
 * Translate an article object into the selected language
 */
export function translateArticle(article: Article, lang: SupportedLanguage): Article {
  if (!lang || lang === 'All' || lang === article.language) return article;

  return {
    ...article,
    category: article.category
  };
}
