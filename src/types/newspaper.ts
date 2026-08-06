import { SupportedLanguage } from '../lib/translationService';

export type ViewMode = 'newspaper' | 'blog' | 'dashboard' | 'archive' | 'worldmap';

export type Category = 
  | 'All' 
  | 'World' 
  | 'Karnataka'
  | 'Technology' 
  | 'Business' 
  | 'Science' 
  | 'Sports' 
  | 'Entertainment' 
  | 'Politics' 
  | 'Health' 
  | 'Climate'
  | 'Education'
  | 'Gaming'
  | 'Automobiles'
  | 'Travel';

export interface AISummary {
  executiveSummary: string;
  keyPoints: string[];
  timeline?: { yearOrTime: string; event: string }[];
  impactScore?: number;
}

export interface RelatedSource {
  publisher: string;
  url: string;
  title: string;
  pubDate: string;
}

export interface Article {
  id: string;
  title: string;
  originalTitle?: string;
  description: string;
  content: string;
  link: string;
  pubDate: string;
  category: Category;
  publisher: string;
  publisherLogo?: string;
  author?: string;
  imageUrl?: string;
  readTime: string;
  isBreaking?: boolean;
  isLeadHeadline?: boolean;
  clusterId?: string;
  relatedSources?: RelatedSource[];
  aiSummary?: AISummary;
  country?: string;
  language?: SupportedLanguage;
}

export interface RSSFeed {
  id: string;
  name: string;
  url: string;
  category: Category;
  publisher: string;
  language: SupportedLanguage;
  status: 'active' | 'inactive' | 'error' | 'syncing';
  lastFetched: string;
  itemCount: number;
  errorMessage?: string;
  isCustom?: boolean;
  isActive?: boolean;
}

export interface NewspaperEdition {
  id: string;
  date: string;
  editionName: string;
  leadArticle: Article;
  topStories: Article[];
  categorizedArticles: Record<Category, Article[]>;
  aiEditorial: string;
}
