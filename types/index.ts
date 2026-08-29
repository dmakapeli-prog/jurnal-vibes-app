export type ArticleCategory =
  | 'berita'
  | 'lifestyle'
  | 'loker'
  | 'sport'
  | 'otomotif'
  | 'science'
  | 'health'
  | 'tech'
  | 'kuliner'
  | 'wisata'
  | 'hiburan';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  categoryLabel: string;
  imageUrl: string;
  imageAlt?: string;
  author: string;
  readTime?: string;
  isHero?: boolean;
  isEditorsPick?: boolean;
  badge?: string; // 'VIRAL' | 'HOT' | 'LATEST'
  isSaved?: boolean;
  createdAt: string; // ISO date or time string
  publishedDate: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryRange: string;
  type: 'Full-Time' | 'Part-Time' | 'Freelance' | 'Remote' | 'Magang';
  region: 'Sukabumi Kota' | 'Cikole' | 'Cibadak' | 'Pelabuhanratu' | 'Lainnya';
  description: string;
  requirements: string[];
  benefits: string[];
  applyEmail: string;
  isSaved?: boolean;
  createdAt: string;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
}

export interface Reel {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl?: string;
  imageAlt?: string;
}
