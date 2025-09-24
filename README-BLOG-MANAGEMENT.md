# Blog Management Guide

This guide explains how to easily add new blog posts to the Western Publish website.

## Quick Start

1. **Create a new blog file** in `src/data/blogs/` directory
2. **Copy the template** from `example-new-blog-post.ts`
3. **Update the content** with your blog post details
4. **Add to index** by updating `src/data/blogs/index.ts`
5. **Update main list** by adding to `src/data/blogPosts.ts`

## Detailed Steps

### Step 1: Create New Blog File

Create a new TypeScript file in the `src/data/blogs/` directory. Use a descriptive filename that matches your blog post title, for example:
- `how-to-write-bestseller.ts`
- `marketing-tips-2025.ts`
- `editing-checklist.ts`

### Step 2: Use the Template

Copy the content from `src/data/blogs/example-new-blog-post.ts` and modify these fields:

```typescript
export const post: BlogPost = {
  id: 'your-unique-id', // Should match filename
  title: 'Your Blog Post Title',
  excerpt: 'Brief summary of your post...',
  content: `Your full HTML content here...`,
  author: 'Author Name',
  authorRole: 'Author Title',
  authorImage: 'https://path-to-author-image.jpg',
  publishedDate: '2025-01-21', // YYYY-MM-DD format
  readTime: '8 min read',
  category: 'Publishing', // Publishing, Marketing, Writing, etc.
  tags: ['Tag1', 'Tag2', 'Tag3'],
  image: 'https://path-to-featured-image.jpg',
  imageAlt: 'Description of the image',
  featured: false, // Set to true for featured posts
  // Optional fields
  lastModified: '2025-01-21',
  readingTime: 8,
  wordCount: 2000,
  category_slug: 'publishing',
};
```

### Step 3: Add to Index File

Update `src/data/blogs/index.ts`:

```typescript
// Add your export at the top
export { post as yourBlogPostName } from './your-blog-filename';

// The export will be automatically included in allBlogPosts array
```

### Step 4: Update Main Blog List

Update `src/data/blogPosts.ts`:

```typescript
// Add to imports
import {
  // ... existing imports
  yourBlogPostName
} from './blogs';

// Add to the blogPosts array
export const blogPosts: BlogPost[] = [
  // ... existing posts
  yourBlogPostName
].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
```

## Content Formatting

Use HTML tags in your content string:

- `<h2>` and `<h3>` for headings
- `<p>` for paragraphs
- `<ul>` and `<li>` for bullet lists
- `<ol>` and `<li>` for numbered lists
- `<strong>` for bold text
- `<em>` for italic text
- `<code>` for inline code

## Categories

Use these standard categories:
- Publishing
- Marketing
- Writing
- Tutorial
- Industry News

## Images

Use high-quality images from Pexels or other stock photo sites. Recommended size: 1260x750px.

## SEO Best Practices

- Write descriptive titles (50-60 characters)
- Create compelling excerpts (150-160 characters)
- Use relevant tags
- Include alt text for images
- Use proper heading structure (H2, H3)

## Publishing

Once you've completed all steps, your blog post will automatically appear on the blog page, sorted by publication date (newest first).

## Example File Structure

```
src/data/blogs/
├── index.ts                                    # Main index file
├── example-new-blog-post.ts                   # Template file
├── ebook-ghostwriting-services-complete-guide-2025.ts
├── common-editing-mistakes-authors-make.ts
├── book-marketing-strategies-2025.ts
├── self-publishing-vs-traditional-publishing-2025.ts
├── huawei-declares-war-on-nvidia.ts
└── your-new-blog-post.ts                      # Your new post
```

This system makes it easy to manage blog content without touching the main application code!