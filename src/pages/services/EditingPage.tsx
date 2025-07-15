import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Edit3, FileText, Search, CheckCircle, Star, Award, Target, BookOpen, Zap } from 'lucide-react';

const EditingPage: React.FC = () => {
  const editingServices = [
    {
      title: 'Developmental Editing',
      description: 'Big-picture editing that focuses on structure, content, and overall narrative flow.',
      features: ['Story structure analysis', 'Character development', 'Plot consistency', 'Pacing optimization'],
      price: '$0.08 - $0.12 per word',
      icon: BookOpen,
      turnaround: '2-4 weeks',
    },
    {
      title: 'Line Editing',
      description: 'Sentence-level editing that improves clarity, flow, and style while preserving your voice.',
      features: ['Sentence structure', 'Word choice optimization', 'Tone consistency', 'Style enhancement'],
      price: '$0.05 - $0.08 per word',
      icon: Edit3,
      turnaround: '1-3 weeks',
    },
    {
      title: 'Copy Editing',
      description: 'Technical editing that corrects grammar, punctuation, and ensures consistency.',
      features: ['Grammar & punctuation', 'Spelling correction', 'Consistency checks', 'Fact verification'],
      price: '$0.03 - $0.05 per word',
      icon: FileText,
      turnaround: '1-2 weeks',
    },
    {
      title: 'Proofreading',
      description: 'Final polish to catch any remaining errors before publication.',
      features: ['Typo detection', 'Formatting consistency', 'Final quality check', 'Publication readiness'],
      price: '$0.02 - $0.03 per word',
      icon: Search,
      turnaround: '3-7 days',
    },
  ];

  const editingProcess = [
    {
      step: 1,
      title: 'Manuscript Assessment',
      description: 'We review your manuscript to determine the appropriate level of editing needed.',
      duration: '1-2 days',
    },
    {
      step: 2,
      title: 'Editor Assignment',
      description: 'Match you with an editor who specializes in your genre and understands your goals.',
      duration: '1 day',
    },
    {
      step: 3,
      title: 'Editing Process',
      description: 'Your editor works through your manuscript with detailed comments and suggestions.',
      duration: 'Varies by service',
    },
    {
      step: 4,
      title: 'Review & Feedback',
      description: 'Receive your edited manuscript with comprehensive feedback and recommendations.',
      duration: '1 day',
    },
    {
      step: 5,
      title: 'Revision Support',
      description: 'Optional follow-up support to help you implement changes and answer questions.',
      duration: 'As needed',
    },
  ];

  const editorExpertise = [
    { genre: 'Fiction', specialists: 15, description: 'Novels, short stories, and creative writing' },
    { genre: 'Non-Fiction', specialists: 12, description: 'Business books, memoirs, and educational content' },
    { genre: 'Academic', specialists: 8, description: 'Research papers, dissertations, and scholarly works' },
    { genre: 'Technical', specialists: 6, description: 'Manuals, guides, and specialized documentation' },
    { genre: 'Children\'s', specialists: 5, description: 'Picture books, middle grade, and young adult' },
    { genre: 'Self-Help', specialists: 10, description: 'Personal development and instructional books' },
  ];

  const testimonials = [
    {
      name: 'Amanda Foster',
      role: 'Romance Novelist',
      content: 'The developmental editing transformed my manuscript. The editor helped me strengthen character arcs and improve pacing dramatically.',
      rating: 5,
    },
    {
      name: 'Robert Chen',
      role: 'Business Author',
      content: 'Professional, thorough, and insightful. The line editing made my business book much more engaging and readable.',
      rating: 5,
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Academic Author',
      content: 'Exceptional attention to detail. The copy editing caught inconsistencies I never would have noticed. Highly recommended.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Professional Book Editing Services - Western Publish</title>
        <meta name="description" content="Professional book editing services including developmental editing, line editing, copy editing, and proofreading. Expert editors for all genres." />
        <meta name="keywords" content="book editing, developmental editing, line editing, copy editing, proofreading, manuscript editing, professional editor" />
        <link rel="canonical" href="https://westernpublish.com/services/editing" />
        <meta property="og:title" content="Professional Book Editing Services - Western Publish" />
        <meta property="og:description" content="Professional book editing services including developmental editing, line editing, copy editing, and proofreading." />
        <meta property="og:url" content="https://westernpublish.com/services/editing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-cyan-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Edit3 className="h-12 w-12 sm:h-16 sm:w-16 text-teal-300 mr-4" />
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                  Professional Book Editing
                </h1>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-teal-100 mb-8 leading-relaxed">
                Polish your manuscript to perfection with our comprehensive editing services. From developmental editing to final proofreading, we ensure your book meets professional publishing standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Your Quote
                </Link>
                <Link 
                  to="#services" 
                  className="border-2 border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-teal-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Professional book editing and manuscript review" 
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                <Award className="h-5 w-5 inline mr-2" />
                Expert Editors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editing Services */}
      <section id="services" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Editing Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From big-picture story development to final proofreading, we offer every level of editing your manuscript needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {editingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 rounded-lg p-3 mr-4">
                    <service.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-teal-600 font-medium">{service.turnaround}</p>
                  </div>
                </div>
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
                  <span className="text-xl font-bold text-teal-600">{service.price}</span>
                  <Link 
                    to="/contact" 
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editor Expertise */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert Editors for Every Genre
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our team includes specialized editors with deep expertise in various genres and writing styles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {editorExpertise.map((expertise, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expertise.genre}</h3>
                <div className="text-3xl font-bold text-teal-600 mb-2">{expertise.specialists}</div>
                <div className="text-sm text-gray-500 mb-3">Specialist Editors</div>
                <p className="text-gray-600 text-sm">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Process */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Editing Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures your manuscript receives the attention and expertise it deserves.
            </p>
          </div>
          
          <div className="space-y-8">
            {editingProcess.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white rounded-xl shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">{step.description}</p>
                  <div className="flex items-center text-teal-600">
                    <Zap className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Editing */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Our Editors?
            </h2>
            <p className="text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
              Our editors combine technical expertise with creative insight to enhance your manuscript while preserving your unique voice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Award className="h-12 w-12 text-teal-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry Experience</h3>
              <p className="text-teal-100">10+ years average experience in professional editing</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Target className="h-12 w-12 text-teal-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Genre Specialists</h3>
              <p className="text-teal-100">Editors matched to your specific genre and style</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <CheckCircle className="h-12 w-12 text-teal-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Quality Guarantee</h3>
              <p className="text-teal-100">Satisfaction guaranteed or we'll revise at no charge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Authors Say About Our Editing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from authors who trusted us to polish their manuscripts to perfection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
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
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 text-teal-600 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Perfect Your Manuscript?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Don't let editing errors diminish your story's impact. Our professional editors will help you create a polished, publication-ready manuscript that readers will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get Your Editing Quote
            </Link>
            <Link 
              to="/services/ghostwriting" 
              className="border-2 border-gray-400 text-gray-700 hover:border-teal-600 hover:text-teal-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
            >
              Need Writing Help?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditingPage;