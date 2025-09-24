import { BlogPost } from '../blogPosts';

export const post: BlogPost = {
  id: 'example-new-blog-post',
  title: 'How to Add a New Blog Post - Example Template',
  excerpt: 'This is an example template showing how to easily add new blog posts to the Western Publish website. Simply copy this file and modify the content.',
  content: `
      <p>This is an example blog post template that demonstrates how easy it is to add new content to the Western Publish blog. Simply follow these steps:</p>

      <h2>Step 1: Create a New Blog File</h2>
      <p>Create a new file in the <code>src/data/blogs/</code> directory with a descriptive filename ending in <code>.ts</code>. For example: <code>your-blog-post-title.ts</code></p>

      <h2>Step 2: Copy This Template</h2>
      <p>Copy the content of this file and modify the following fields:</p>
      <ul>
        <li><strong>id:</strong> A unique identifier (usually matches the filename)</li>
        <li><strong>title:</strong> The main headline of your blog post</li>
        <li><strong>excerpt:</strong> A brief summary for previews</li>
        <li><strong>content:</strong> The full HTML content of your post</li>
        <li><strong>author:</strong> Author's name</li>
        <li><strong>authorRole:</strong> Author's position/title</li>
        <li><strong>publishedDate:</strong> Publication date in YYYY-MM-DD format</li>
        <li><strong>category:</strong> Main category (Publishing, Marketing, Writing, etc.)</li>
        <li><strong>tags:</strong> Array of relevant tags</li>
        <li><strong>featured:</strong> Set to true if this should be a featured post</li>
      </ul>

      <h2>Step 3: Add to Index</h2>
      <p>Add your new blog post to the <code>src/data/blogs/index.ts</code> file by:</p>
      <ol>
        <li>Adding an export statement at the top</li>
        <li>Adding the import to the main blogPosts.ts file</li>
      </ol>

      <h2>Step 4: Update Main Blog List</h2>
      <p>Your new blog post will automatically appear in the blog listing once you've completed the above steps.</p>

      <h2>Content Formatting Tips</h2>
      <p>When writing your content, you can use HTML tags for formatting:</p>
      <ul>
        <li>Use <code>&lt;h2&gt;</code> and <code>&lt;h3&gt;</code> for section headings</li>
        <li>Use <code>&lt;p&gt;</code> for paragraphs</li>
        <li>Use <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> for bullet lists</li>
        <li>Use <code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code> for numbered lists</li>
        <li>Use <code>&lt;strong&gt;</code> for bold text</li>
        <li>Use <code>&lt;em&gt;</code> for italic text</li>
        <li>Use <code>&lt;code&gt;</code> for inline code</li>
      </ul>

      <p>That's it! Your new blog post will be live on the website.</p>
    `,
  author: 'Western Publish Team',
  authorRole: 'Content Management',
  authorImage: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
  publishedDate: '2025-01-21',
  readTime: '5 min read',
  category: 'Tutorial',
  tags: ['Blog Management', 'Content Creation', 'Website Tutorial'],
  image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  imageAlt: 'Person writing a blog post on a laptop',
  featured: false,
  lastModified: '2025-01-21',
  readingTime: 5,
  wordCount: 800,
  category_slug: 'tutorial',
};