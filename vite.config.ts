import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import  sitemap  from 'vite-plugin-sitemap'; // [1] IMPORT: Added the sitemap plugin import.

// --- SITEMAP CONFIGURATION START ---

// 1. Define your static pages based on the src/pages folder analysis
const staticRoutes = [
  '/', 
  '/about', 
  '/blog', 
  '/contact', 
  '/pricing', 
  '/privacy', 
  '/refund-policy', 
  '/terms', 
  
  // Service Pages
  '/services/editing',
  '/services/ghostwriting',
  '/services/marketing',
  '/services/publishing',
];

// 2. Define the slugs for your dynamic blog posts
// NOTE: You MUST update this array whenever you add a new blog post file 
// to src/data/blogs/
const blogSlugs = [
    'book-marketing-strategies-2025',
    'common-editing-mistakes-authors-make',
    'ebook-ghostwriting-services-complete-guide-2025',
    'example-new-blog-post',
    'huawei-declares-war', 
    'self-publishing-vs-traditional-publishing-2025',
];

// 3. Create the array of dynamic blog routes
const dynamicBlogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

// 4. Combine all static and dynamic routes
const allRoutes = staticRoutes.concat(dynamicBlogRoutes);


// --- SITEMAP CONFIGURATION END ---

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // [2] PLUGIN USAGE: Added the sitemap plugin configuration.
    sitemap({
      hostname: 'https://www.westernpublish.com', // 🚨 CRITICAL: REPLACE WITH YOUR ACTUAL DOMAIN (e.g., 'https://western-publish.com')
      dynamicRoutes: allRoutes, // Use the combined array of all static and dynamic URLs
      outDir: 'dist', // Ensures the sitemap.xml is placed in the build output
      changefreq: 'weekly', // Default frequency for search engine crawlers
      priority: 0.8 // Default priority for search engine crawlers
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});