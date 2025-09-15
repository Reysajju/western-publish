import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, BookOpen, TrendingUp, Edit3, Search } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Publishing':
        return BookOpen;
      case 'Marketing':
        return TrendingUp;
      case 'Writing':
        return Edit3;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Publishing & Writing Blog | Expert Tips & Industry Insights - Western Publish</title>
        <meta name="description" content="Stay updated with the latest publishing industry insights, writing tips, and marketing strategies from Western Publish's expert team. Weekly blog posts to help authors succeed with professional advice on ghostwriting, editing, marketing, and publishing." />
        <meta name="keywords" content="publishing blog, writing tips, book marketing, author advice, publishing industry, self-publishing, traditional publishing, book editing, author platform" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Western Publish Team" />
        <meta name="publisher" content="Western Publish" />
        <meta name="copyright" content="Western Publish" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="subject" content="Publishing Industry Blog, Writing Tips, Book Marketing Strategies" />
        <meta name="abstract" content="Expert publishing industry blog with weekly insights on ghostwriting, book editing, marketing strategies, and author success tips from Western Publish's professional team." />
        <meta name="topic" content="Publishing Industry Blog" />
        <meta name="summary" content="Weekly blog posts covering publishing industry trends, writing tips, book marketing strategies, and author success advice from Western Publish's expert team." />
        <meta name="classification" content="Publishing Blog, Writing Resources, Author Education" />
        <meta name="category" content="Publishing > Blog > Industry Insights" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="authors, writers, publishers" />
        <meta name="audience" content="authors, aspiring writers, publishing professionals" />
        <link rel="canonical" href="https://westernpublish.com/blog" />
        <meta property="og:title" content="Publishing & Writing Blog | Expert Tips & Industry Insights - Western Publish" />
        <meta property="og:description" content="Stay updated with the latest publishing industry insights, writing tips, and marketing strategies from Western Publish's expert team. Weekly blog posts to help authors succeed." />
        <meta property="og:url" content="https://westernpublish.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Western Publish" />
        <meta property="og:image" content="https://westernpublish.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Western Publish Blog - Publishing Industry Insights" />
        <meta property="article:publisher" content="https://westernpublish.com" />
        <meta property="article:author" content="Western Publish Team" />
        <meta property="article:section" content="Publishing Blog" />
        <meta property="article:tag" content="Publishing Tips" />
        <meta property="article:tag" content="Writing Advice" />
        <meta property="article:tag" content="Book Marketing" />
        <meta property="article:tag" content="Author Success" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@westernpublish" />
        <meta name="twitter:creator" content="@westernpublish" />
        <meta name="twitter:title" content="Publishing & Writing Blog | Expert Tips & Industry Insights - Western Publish" />
        <meta name="twitter:description" content="Stay updated with the latest publishing industry insights, writing tips, and marketing strategies from Western Publish's expert team. Weekly blog posts to help authors succeed." />
        <meta name="twitter:image" content="https://westernpublish.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="Western Publish Blog - Publishing Industry Insights" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Western Publish Blog",
            "description": "Expert insights on publishing, writing, and book marketing from Western Publish's professional team. Weekly blog posts covering industry trends, writing tips, and author success strategies.",
            "url": "https://westernpublish.com/blog",
            "inLanguage": "en-US",
            "dateCreated": "2018-01-01",
            "dateModified": new Date().toISOString(),
            "keywords": "publishing blog, writing tips, book marketing, author advice, publishing industry, ghostwriting, book editing",
            "about": {
              "@type": "Thing",
              "name": "Book Publishing Industry",
              "description": "Professional book publishing services and industry insights"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Authors, Writers, Publishing Professionals"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Western Publish",
              "url": "https://westernpublish.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://westernpublish.com/favicon.svg",
                "width": 60,
                "height": 60
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": blogPosts.map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "url": `https://westernpublish.com/blog/${post.id}`,
                  "datePublished": post.publishedDate,
                  "author": {
                    "@type": "Person",
                    "name": post.author,
                    "jobTitle": post.authorRole
                  },
                  "image": post.image,
                  "description": post.excerpt
                }
              }))
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "articleBody": post.content.replace(/<[^>]*>/g, '').substring(0, 500) + "...",
              "wordCount": post.content.replace(/<[^>]*>/g, '').split(' ').length,
              "timeRequired": post.readTime,
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "genre": post.category,
              "author": {
                "@type": "Person",
                "name": post.author,
                "jobTitle": post.authorRole,
                "worksFor": {
                  "@type": "Organization",
                  "name": "Western Publish"
                }
              },
              "datePublished": post.publishedDate,
              "dateModified": post.publishedDate,
              "image": {
                "@type": "ImageObject",
                "url": post.image,
                "width": 1260,
                "height": 750,
                "caption": post.imageAlt
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
              "url": `https://westernpublish.com/blog/${post.id}`,
              "keywords": post.tags.join(", "),
              "articleSection": post.category,
              "about": {
                "@type": "Thing",
                "name": post.category,
                "description": `${post.category} insights and advice for authors`
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://westernpublish.com/blog/${post.id}`
              }
            }))
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
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <BookOpen className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tighter">
              Publishing & Writing Insights
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Expert advice, industry insights, and practical tips to help you succeed as an author. 
              Updated weekly by the Western Publish team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'All' && searchTerm === '' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.imageAlt}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <CategoryIcon className="h-4 w-4 mr-1" />
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={post.authorImage} 
                            alt={post.author}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.authorRole}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.publishedDate)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.imageAlt}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <CategoryIcon className="h-4 w-4 mr-1" />
                          {post.category}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                            FEATURED
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.publishedDate)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <img 
                            src={post.authorImage} 
                            alt={post.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-medium text-gray-900">{post.author}</span>
                        </div>
                        <Link 
                          to={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get weekly publishing insights, writing tips, and industry news delivered to your inbox.
            </p>
            <Link 
              to="/#newsletter-signup"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
            >
              Subscribe to Our Newsletter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;