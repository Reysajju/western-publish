import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PenTool, BookOpen, Users, Clock, CheckCircle, Star, Award, Target, MessageCircle } from 'lucide-react';

const GhostwritingPage: React.FC = () => {
  const services = [
    {
      title: 'Business Books',
      description: 'Establish thought leadership with professionally written business books that showcase your expertise.',
      features: ['Industry expertise', 'Thought leadership positioning', 'Professional tone', 'Market research'],
      price: 'Starting at $15,000',
    },
    {
      title: 'Memoirs & Autobiographies',
      description: 'Share your life story with compelling narratives that capture your unique voice and experiences.',
      features: ['Personal storytelling', 'Emotional depth', 'Authentic voice', 'Family legacy'],
      price: 'Starting at $12,000',
    },
    {
      title: 'Fiction Novels',
      description: 'Bring your fictional worlds to life with engaging characters and captivating storylines.',
      features: ['Character development', 'Plot structure', 'Genre expertise', 'Creative collaboration'],
      price: 'Starting at $18,000',
    },
    {
      title: 'Self-Help Books',
      description: 'Transform your knowledge into actionable guidance that helps readers achieve their goals.',
      features: ['Practical advice', 'Step-by-step guides', 'Reader engagement', 'Expert positioning'],
      price: 'Starting at $14,000',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We conduct in-depth interviews to understand your vision, goals, and unique voice.',
      duration: '1-2 weeks',
    },
    {
      step: 2,
      title: 'Research & Outline',
      description: 'Our team researches your topic and creates a detailed chapter-by-chapter outline.',
      duration: '2-3 weeks',
    },
    {
      step: 3,
      title: 'Writing & Collaboration',
      description: 'Professional ghostwriters craft your book while maintaining regular communication.',
      duration: '8-16 weeks',
    },
    {
      step: 4,
      title: 'Review & Refinement',
      description: 'You review each chapter and provide feedback for revisions and improvements.',
      duration: '2-4 weeks',
    },
    {
      step: 5,
      title: 'Final Polish',
      description: 'Professional editing and proofreading ensure your book meets publishing standards.',
      duration: '1-2 weeks',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Innovations',
      content: 'Western Publish helped me transform my business insights into a bestselling book. The ghostwriter captured my voice perfectly.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Retired Military Officer',
      content: 'They brought my military memoir to life with such authenticity and respect. Highly recommended for personal stories.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Healthcare Professional',
      content: 'The team understood my vision for a self-help book and delivered beyond my expectations. Professional and collaborative.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Professional Ghostwriting Services - Western Publish</title>
        <meta name="description" content="Transform your ideas into compelling books with our professional ghostwriting services. Business books, memoirs, fiction, and self-help books written by expert ghostwriters." />
        <meta name="keywords" content="ghostwriting services, professional ghostwriter, business book writing, memoir writing, fiction ghostwriter, book writing services" />
        <link rel="canonical" href="https://westernpublish.com/services/ghostwriting" />
        <meta property="og:title" content="Professional Ghostwriting Services - Western Publish" />
        <meta property="og:description" content="Transform your ideas into compelling books with our professional ghostwriting services." />
        <meta property="og:url" content="https://westernpublish.com/services/ghostwriting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <PenTool className="h-12 w-12 sm:h-16 sm:w-16 text-blue-300 mr-4" />
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                  Professional Ghostwriting Services
                </h1>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Transform your ideas, experiences, and expertise into compelling books that resonate with readers worldwide. Our expert ghostwriters bring your vision to life while preserving your unique voice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Start Your Book Project
                </Link>
                <Link 
                  to="#process" 
                  className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
                >
                  Learn Our Process
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Professional ghostwriting and book creation" 
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                <Award className="h-5 w-5 inline mr-2" />
                500+ Books Written
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ghostwriting Services We Offer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From business books to personal memoirs, our expert ghostwriters specialize in various genres and formats to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <Link 
                    to="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Ghostwriting Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative approach that ensures your book captures your unique voice while meeting professional publishing standards.
            </p>
          </div>
          
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">{step.description}</p>
                  <div className="flex items-center text-blue-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Our Ghostwriting Team?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Our experienced ghostwriters combine literary expertise with industry knowledge to create books that achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Users className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Expert Writers</h3>
              <p className="text-blue-100">15+ years average experience across multiple genres and industries</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Target className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Your Voice, Perfected</h3>
              <p className="text-blue-100">We capture and enhance your unique voice while maintaining authenticity</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <MessageCircle className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Collaborative Process</h3>
              <p className="text-blue-100">Regular communication and feedback ensure your vision is realized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Authors Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from authors who trusted us with their stories and achieved their publishing goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Write Your Book?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Let our expert ghostwriters help you transform your ideas into a professionally written book that achieves your goals and resonates with readers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Start Your Ghostwriting Project
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
            >
              Meet Our Writers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GhostwritingPage;