import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Megaphone, Award, Users, CheckCircle, Edit3, Printer, Target, Star, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setSubmitStatus('success');
      setEmail('');
      setName('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const features = [
    {
      icon: PenTool,
      title: 'Professional Ghostwriting',
      description: 'Expert writers who bring your ideas to life with compelling, authentic content that resonates with your audience.',
    },
    {
      icon: BookOpen,
      title: 'Complete Publishing Solutions',
      description: 'From manuscript to market-ready book, we handle every aspect of the publishing process with precision and care.',
    },
    {
      icon: Megaphone,
      title: 'Strategic Marketing',
      description: 'Data-driven marketing campaigns that amplify your reach and connect you with your target readers effectively.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Books Published' },
    { number: '10M+', label: 'Words Written' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Bestsellers' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>What is Western Publish? | Your Partner in Publishing Success</title>
        <meta name="description" content="What is Western Publish? We are a premier partner for authors, offering expert ghostwriting, publishing, and marketing services. As a dba of Western Publishing LLC, we turn ideas into bestsellers. 500+ books published, 98% client satisfaction." />
        <meta name="keywords" content="what is western publish, ghostwriting, book publishing, book marketing, author services, western publishing llc" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://westernpublish.com" />
        <meta property="og:title" content="What is Western Publish? | Your Partner in Publishing Success" />
        <meta property="og:description" content="What is Western Publish? We are a premier partner for authors, offering expert ghostwriting, publishing, and marketing services. As a dba of Western Publishing LLC, we turn ideas into bestsellers. 500+ books published, 98% client satisfaction." />
        <meta property="og:url" content="https://westernpublish.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Western Publish" />
        <meta property="og:image" content="https://westernpublish.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Western Publish - Professional Book Publishing Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@westernpublish" />
        <meta name="twitter:creator" content="@westernpublish" />
        <meta name="twitter:title" content="What is Western Publish? | Your Partner in Publishing Success" />
        <meta name="twitter:description" content="What is Western Publish? We are a premier partner for authors, offering expert ghostwriting, publishing, and marketing services. 500+ books published, 98% client satisfaction." />
        <meta name="twitter:image" content="https://westernpublish.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="Western Publish - Professional Book Publishing Services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Western Publish",
            "description": "Premier book publishing services including ghostwriting, editing, marketing and publishing.",
            "url": "https://westernpublish.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://westernpublish.com/favicon.svg",
              "width": 60,
              "height": 60
            },
            "foundingDate": "2018",
            "numberOfEmployees": "20-50",
            "slogan": "Your Complete Publishing Partner",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Publishing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Ghostwriting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Book Publishing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Book Marketing"
                  }
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://westernpublish.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://twitter.com/westernpublish",
              "https://www.linkedin.com/company/western-publish",
              "https://facebook.com/westernpublish",
              "https://instagram.com/westernpublish"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-505-396-2071",
              "contactType": "customer service",
              "email": "publish@westernpublish.com",
              "availableLanguage": ["English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1209 MOUNTAIN ROAD PL NE STE R",
              "addressLocality": "ALBUQUERQUE",
              "addressRegion": "NM",
              "postalCode": "87110",
              "addressCountry": "US"
            },
            "offers": {
              "@type": "AggregateOffer",
              "offers": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Ghostwriting",
                    "description": "Expert writers who bring your ideas to life with compelling, authentic content.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Western Publish"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Complete Publishing Solutions",
                    "description": "End-to-end publishing services from manuscript to market-ready book.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Western Publish"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Strategic Marketing",
                    "description": "Data-driven marketing campaigns to connect with target readers effectively.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Western Publish"
                    }
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
                What is Western Publish?{' '}
                <span className="text-blue-300">Your Complete Publishing Partner</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                We are a comprehensive ecosystem for authors. Western Publish, a dba of Western Publishing LLC, provides professional writers, publishers, and marketers dedicated to your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl text-center"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/services/publishing" 
                  className="border-2 border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                >
                  Explore Our Services
                </Link>
              </div>
              
              <div className="pt-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Western Publish author success story - Professional ghostwriting client" className="w-10 h-10 rounded-full border-2 border-white shadow-md" />
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Western Publish bestselling author - Book marketing success" className="w-10 h-10 rounded-full border-2 border-white shadow-md" />
                    <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Western Publish published author testimonial" className="w-10 h-10 rounded-full border-2 border-white shadow-md" />
                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Western Publish expert team member" className="w-10 h-10 rounded-full border-2 border-white shadow-md" />
                  </div>
                  <div className="text-blue-100">
                    <span className="font-semibold">500+ authors</span> have realized their publishing dreams with us.
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                  <span className="text-blue-100 ml-2">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                    alt="Published book by Western Publish author displayed on elegant wooden desk with reading glasses, showcasing professional publishing quality" 
                    className="w-full h-48 object-cover rounded-2xl mb-6 shadow-lg"
                  />
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-3">
                    📚 Bestsellers
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
                  <p className="text-blue-100 mb-6">Join hundreds of successful authors who chose Western Publish.</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <span className="text-sm font-medium">Award-Winning Publishing Team</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              A Complete Publishing Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service you need to transform your manuscript into a bestselling book, 
              all under one roof with seamless collaboration.
            </p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group text-center p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:bg-blue-50 transform hover:-translate-y-2 border"
                variants={fadeIn}
              >
                <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300 transform group-hover:scale-110">
                  <feature.icon className="h-12 w-12 text-blue-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to bestselling success, we provide comprehensive support at every stage of your publishing journey.
            </p>
          </div>

          {[
            {
              icon: PenTool,
              title: 'Professional Ghostwriting',
              description: 'Transform your ideas into compelling narratives with our team of expert ghostwriters. We help you craft a book that captures your unique voice and resonates with your target audience.',
              points: [
                'Business books and thought leadership',
                'Memoirs and autobiographies',
                'Fiction novels and series',
                'Self-help and educational content',
              ],
              cta: 'Start Your Ghostwriting Project',
              color: 'blue',
              info: {
                icon: Star,
                title: 'Why Our Ghostwriters?',
                points: ['15+ years average experience', 'Published authors in your genre', 'Collaborative writing process', 'Your voice, professionally crafted'],
              },
            },
            {
              icon: BookOpen,
              title: 'Complete Publishing',
              description: 'Navigate the complex world of publishing with confidence. Our services ensure your book reaches readers through all major platforms while maintaining the highest quality standards.',
              points: [
                'Global distribution network',
                'Professional formatting and layout',
                'Quality control and proofreading',
                'Royalty optimization strategies',
              ],
              cta: 'Publish Your Book',
              color: 'indigo',
              info: {
                icon: Printer,
                title: 'Publishing Excellence',
                points: ['Amazon, Barnes & Noble, Apple Books', 'Print-on-demand and eBook formats', 'Professional cover design', 'ISBN and copyright registration'],
              },
              reverse: true,
            },
            {
              icon: Megaphone,
              title: 'Strategic Marketing',
              description: 'Launch your book with impact and sustain long-term success. Our data-driven marketing strategies help you build an author platform and connect with readers.',
              points: [
                'Amazon bestseller campaigns',
                'Social media marketing',
                'Author website and branding',
                'Media outreach and PR campaigns',
              ],
              cta: 'Launch Your Marketing Campaign',
              color: 'purple',
              info: {
                icon: Target,
                title: 'Marketing That Works',
                points: ['300% average sales increase', 'Bestseller list placements', 'Targeted audience building', 'ROI-focused campaigns'],
              },
            },
            {
              icon: Edit3,
              title: 'Professional Editing',
              description: 'Polish your manuscript to perfection with our comprehensive editing services. Our experienced editors ensure your book meets industry standards while preserving your unique voice.',
              points: [
                'Structural and content editing',
                'Grammar and style refinement',
                'Consistency and flow optimization',
                'Final proofreading and quality assurance',
              ],
              cta: 'Get Professional Editing',
              color: 'green',
              info: {
                icon: Edit3,
                title: 'Editorial Excellence',
                points: ['Developmental editing', 'Line editing and copyediting', 'Proofreading and fact-checking', 'Style guide compliance'],
              },
              reverse: true,
            },
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`order-1 ${service.reverse ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className={`bg-${service.color}-600 rounded-lg p-3 mr-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-3xl lg:text-4xl font-bold text-gray-900`}>{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3 mb-8">
                    {service.points.map((point, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact" 
                    className={`bg-${service.color}-600 hover:bg-${service.color}-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  >
                    {service.cta}
                  </Link>
                </div>
                <div className={`bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-3xl p-8 order-2 ${service.reverse ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <service.info.icon className={`h-16 w-16 text-${service.color}-600 mx-auto mb-6`} />
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.info.title}</h4>
                    <div className="space-y-4 text-gray-700">
                      {service.info.points.map((point, i) => <p key={i}>✓ {point}</p>)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Email Collection Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-blue-900 text-white" id="newsletter-signup">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <Mail className="h-16 w-16 text-blue-300 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Publishing Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get exclusive publishing tips, industry insights, success stories, and special offers delivered to your inbox weekly.
            </p>
          </motion.div>
          
          <div className="max-w-md mx-auto">
            <form 
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleNewsletterSubmit} 
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <div className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-5 py-3 text-gray-900 bg-white/90 rounded-lg border-2 border-transparent focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-300/50 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-5 py-3 text-gray-900 bg-white/90 rounded-lg border-2 border-transparent focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-300/50 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    <span>Subscribe Now</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-600 text-white p-3 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Success! Check your email to confirm.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-600 text-white p-3 rounded-lg">
                  <span>Error subscribing. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-blue-600 mx-auto mb-8" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Publish Your Masterpiece?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join hundreds of successful authors who trusted Western Publish with their literary journey. 
            From concept to bestseller, we're your complete publishing partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
            >
              Get Started Today
            </Link>
            <Link 
              to="/contact" 
              className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;