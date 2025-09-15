import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const shareUrl = `https://westernpublish.com/blog/${post.id}`;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>{post.title} | Western Publish Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="publisher" content="Western Publish" />
        <meta name="copyright" content="Western Publish" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="30 days" />
        <meta name="subject" content={`${post.category} - ${post.title}`} />
        <meta name="abstract" content={post.excerpt} />
        <meta name="topic" content={post.category} />
        <meta name="summary" content={post.excerpt} />
        <meta name="classification" content={`Publishing Blog > ${post.category}`} />
        <meta name="category" content={`Publishing > Blog > ${post.category}`} />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="authors, writers, publishers" />
        <meta name="audience" content="authors, aspiring writers, publishing professionals" />
        <meta name="date" content={post.publishedDate} />
        <link rel="canonical" href={`https://westernpublish.com/blog/${post.id}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:image:width" content="1260" />
        <meta property="og:image:height" content="750" />
        <meta property="og:image:alt" content={post.imageAlt} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Western Publish" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:modified_time" content={post.publishedDate} />
        <meta property="article:section" content={post.category} />
        <meta property="article:publisher" content="https://westernpublish.com" />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta name="twitter:image:alt" content={post.imageAlt} />
        <meta name="twitter:site" content="@westernpublish" />
        <meta name="twitter:creator" content="@westernpublish" />
        <meta name="twitter:domain" content="westernpublish.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "articleBody": post.content.replace(/<[^>]*>/g, ''),
            "wordCount": post.content.replace(/<[^>]*>/g, '').split(' ').length,
            "timeRequired": post.readTime,
            "inLanguage": "en-US",
            "isAccessibleForFree": true,
            "genre": post.category,
            "image": {
              "@type": "ImageObject",
              "url": post.image,
              "width": 1260,
              "height": 750,
              "caption": post.imageAlt
            },
            "author": {
              "@type": "Person",
              "name": post.author,
              "jobTitle": post.authorRole,
              "worksFor": {
                "@type": "Organization",
                "name": "Western Publish"
              },
              "image": post.authorImage
            },
            "publisher": {
              "@type": "Organization",
              "name": "Western Publish",
              "logo": {
                "@type": "ImageObject",
                "url": "https://westernpublish.com/favicon.svg",
                "width": 60,
                "height": 60
              }
            },
            "datePublished": post.publishedDate,
            "dateModified": post.publishedDate,
            "keywords": post.tags.join(", "),
            "articleSection": post.category,
            "about": {
              "@type": "Thing",
              "name": post.category,
              "description": `${post.category} insights and advice for authors`
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": shareUrl
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://westernpublish.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://westernpublish.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": shareUrl
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-white">{post.author}</p>
                  <p className="text-sm">{post.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.publishedDate)}
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src={post.image} 
                  alt={post.imageAlt}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl mb-8 shadow-lg"
                />
                
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Share */}
                <motion.div
                  className="bg-gray-50 rounded-xl p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share Article
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      Share on Twitter
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      Share on LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      Share on Facebook
                    </button>
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  className="bg-gray-50 rounded-xl p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Related Posts */}
                <motion.div
                  className="bg-gray-50 rounded-xl p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter(p => p.id !== post.id && p.category === post.category)
                      .slice(0, 3)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{relatedPost.readTime}</p>
                        </Link>
                      ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Publishing Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let Western Publish help you transform your ideas into a professionally published book.
            </p>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;