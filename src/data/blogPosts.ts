export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  lastModified?: string;
  readingTime?: number;
  wordCount?: number;
  category_slug?: string;
}

// Import all blog posts from the blogs directory
import {
  ebookGhostwritingGuide2025,
  commonEditingMistakes,
  bookMarketingStrategies2025,
  selfPublishingVsTraditional2025,
  exampleNewBlogPost,
  huaweiDeclaresWar
} from './blogs';

export const blogPosts: BlogPost[] = [
  ebookGhostwritingGuide2025,
  commonEditingMistakes,
  bookMarketingStrategies2025,
  selfPublishingVsTraditional2025,
  exampleNewBlogPost,
  huaweiDeclaresWar
].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());