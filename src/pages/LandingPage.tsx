import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Megaphone, Award, Users, CheckCircle, UserPlus, Edit3, Printer, Target, Star, Mail } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For Netlify forms, we need to submit the form data
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

  return (
    <div className="bg-white">
      <Helmet>
        <title>Western Publish - Professional Ghostwriting, Publishing & Marketing Services</title>
        <meta name="description" content="Transform your ideas into bestselling books with Western Publish. Professional ghostwriting, complete publishing solutions, and strategic marketing services. 500+ books published, 98% client satisfaction." />
        <meta name="keywords" content="ghostwriting, book publishing, book marketing, professional writing, bestseller, author services, manuscript editing, book promotion, publishing company" />
        <link rel="canonical" href="https://westernpublish.com" />
        <meta property="og:title" content="Western Publish - Professional Ghostwriting, Publishing & Marketing Services" />
        <meta property="og:description" content="Transform your ideas into bestselling books with Western Publish. Professional ghostwriting, complete publishing solutions, and strategic marketing services." />
        <meta property="og:url" content="https://westernpublish.com" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                From Ghostwriting to Publishing and Marketing,{' '}
                <span className="text-blue-300">We Cover Everything</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Transform your ideas into bestselling books with our comprehensive publishing ecosystem. 
                Professional writers, publishers, and marketers working together for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
                >
                  View Portfolio
                </Link>
              </div>
              
              {/* Happy Readers Section */}
              <div className="pt-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Happy reader" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Happy reader" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Happy reader" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="Happy reader" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                  <div className="text-blue-100">
                    <span className="font-semibold">500+ authors</span> published their dreams with us
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                  <span className="text-blue-100 ml-2">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                    alt="People reading books happily" 
                    className="w-full h-48 object-cover rounded-2xl mb-6"
                  />
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    📚 Bestsellers
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
                  <p className="text-blue-100 mb-6">Join thousands of successful authors who chose Western Publish</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <span className="text-sm font-medium">Award-Winning Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Publishing Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service you need to transform your manuscript into a bestselling book, 
              all under one roof with seamless collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-blue-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Services Links */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Explore Our Services</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/services/ghostwriting" className="bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 transition-all duration-300 group">
                <PenTool className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900">Ghostwriting</span>
              </Link>
              <Link to="/services/publishing" className="bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 transition-all duration-300 group">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900">Publishing</span>
              </Link>
              <Link to="/services/marketing" className="bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 transition-all duration-300 group">
                <Megaphone className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900">Marketing</span>
              </Link>
              <Link to="/services/editing" className="bg-white hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 transition-all duration-300 group">
                <Edit3 className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-900">Editing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to bestselling success, we provide comprehensive support at every stage of your publishing journey.
            </p>
          </div>

          {/* Ghostwriting Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 rounded-lg p-3 mr-4">
                    <PenTool className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Professional Ghostwriting</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Transform your ideas into compelling narratives with our team of expert ghostwriters. Whether you have a complete concept or just a spark of inspiration, we'll help you craft a book that captures your unique voice and resonates with your target audience.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Business books and thought leadership content</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Memoirs and autobiographies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Fiction novels and series</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Self-help and educational content</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Start Your Ghostwriting Project
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
                <div className="text-center">
                  <Star className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Ghostwriters?</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ 15+ years average experience</p>
                    <p>✓ Published authors in your genre</p>
                    <p>✓ Collaborative writing process</p>
                    <p>✓ Your voice, professionally crafted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Publishing Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 order-2 lg:order-1">
                <div className="text-center">
                  <Printer className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Publishing Excellence</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ Amazon, Barnes & Noble, Apple Books</p>
                    <p>✓ Print-on-demand and eBook formats</p>
                    <p>✓ Professional cover design</p>
                    <p>✓ ISBN and copyright registration</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-600 rounded-lg p-3 mr-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Complete Publishing Solutions</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Navigate the complex world of publishing with confidence. Our comprehensive publishing services ensure your book reaches readers through all major platforms while maintaining the highest quality standards.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Global distribution network</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Professional formatting and layout</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Quality control and proofreading</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Royalty optimization strategies</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Publish Your Book
                </Link>
              </div>
            </div>
          </div>

          {/* Marketing Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600 rounded-lg p-3 mr-4">
                    <Megaphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Strategic Marketing</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Launch your book with impact and sustain long-term success. Our data-driven marketing strategies help you build an author platform, connect with readers, and achieve bestseller status across multiple categories.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Amazon bestseller campaigns</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Social media marketing strategies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Author website and branding</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Media outreach and PR campaigns</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Launch Your Marketing Campaign
                </Link>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <div className="text-center">
                  <Target className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Marketing That Works</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ 300% average sales increase</p>
                    <p>✓ Bestseller list placements</p>
                    <p>✓ Targeted audience building</p>
                    <p>✓ ROI-focused campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editing Section */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-8 order-2 lg:order-1">
                <div className="text-center">
                  <Edit3 className="h-16 w-16 text-green-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Editorial Excellence</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ Developmental editing</p>
                    <p>✓ Line editing and copyediting</p>
                    <p>✓ Proofreading and fact-checking</p>
                    <p>✓ Style guide compliance</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 rounded-lg p-3 mr-4">
                    <Edit3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Professional Editing</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Polish your manuscript to perfection with our comprehensive editing services. Our experienced editors ensure your book meets industry standards while preserving your unique voice and message.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Structural and content editing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Grammar and style refinement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Consistency and flow optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Final proofreading and quality assurance</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Get Professional Editing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Collection Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-indigo-900 to-blue-900 text-white" id="newsletter-signup">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Mail className="h-12 w-12 sm:h-16 sm:w-16 text-blue-300 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Join Our Publishing Newsletter
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get exclusive publishing tips, industry insights, success stories, and special offers delivered to your inbox weekly.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <BookOpen className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Publishing Tips</h3>
                <p className="text-sm text-blue-200">Weekly insights from industry experts</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Success Stories</h3>
                <p className="text-sm text-blue-200">Learn from bestselling authors</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Exclusive Offers</h3>
                <p className="text-sm text-blue-200">Special discounts for subscribers</p>
              </div>
            </div>
          </div>
          
          {/* Newsletter Form */}
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
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 text-gray-900 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
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
                  className="w-full px-4 py-3 text-gray-900 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    <span>Subscribe to Newsletter</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-600 text-white p-3 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Successfully subscribed! Check your email for confirmation.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-600 text-white p-3 rounded-lg">
                  <span>Error subscribing. Please try again.</span>
                </div>
              )}
            </form>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-blue-200 text-sm">
              📧 Your email is safe with us. We never spam and you can unsubscribe anytime. 
              <br className="hidden sm:block" />
              Join 10,000+ authors already subscribed!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-blue-600 mx-auto mb-8" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Publish Your Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join hundreds of successful authors who trusted Western Publish with their literary journey. 
            From concept to bestseller, we're your complete publishing partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get Started Today
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
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