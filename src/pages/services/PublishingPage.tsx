import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Printer, Globe, Smartphone, CheckCircle, Star, Award, Target, Package } from 'lucide-react';

const PublishingPage: React.FC = () => {
  const packages = [
    {
      name: 'Essential Publishing',
      price: '$2,999',
      description: 'Perfect for first-time authors who want professional publishing without breaking the bank.',
      features: [
        'Professional formatting (print & eBook)',
        'Basic cover design',
        'ISBN assignment',
        'Amazon KDP setup',
        'Copyright registration',
        'Author copies (10 print books)',
        'Basic distribution setup',
      ],
      popular: false,
    },
    {
      name: 'Professional Publishing',
      price: '$4,999',
      description: 'Our most popular package with comprehensive publishing services and wider distribution.',
      features: [
        'Everything in Essential',
        'Premium cover design with revisions',
        'Extended distribution network',
        'Barnes & Noble, Apple Books setup',
        'Professional book description',
        'Author copies (25 print books)',
        'Basic marketing materials',
        'Launch strategy consultation',
      ],
      popular: true,
    },
    {
      name: 'Premium Publishing',
      price: '$7,999',
      description: 'Complete publishing solution with maximum reach and professional marketing support.',
      features: [
        'Everything in Professional',
        'Custom cover design (unlimited revisions)',
        'Global distribution network',
        'Audiobook preparation',
        'Professional editing review',
        'Author copies (50 print books)',
        'Complete marketing package',
        'PR and media outreach',
        'Bestseller campaign strategy',
      ],
      popular: false,
    },
  ];

  const distributionChannels = [
    { name: 'Amazon', logo: '📚', description: 'Kindle Direct Publishing and print-on-demand' },
    { name: 'Barnes & Noble', logo: '📖', description: 'NOOK Press and in-store availability' },
    { name: 'Apple Books', logo: '🍎', description: 'iBooks Store for iOS devices' },
    { name: 'Google Play', logo: '📱', description: 'Google Play Books platform' },
    { name: 'Kobo', logo: '📘', description: 'International eBook distribution' },
    { name: 'IngramSpark', logo: '🌟', description: 'Global print and digital distribution' },
  ];

  const publishingProcess = [
    {
      step: 1,
      title: 'Manuscript Review',
      description: 'We review your manuscript for publishing readiness and provide recommendations.',
      duration: '1-2 days',
    },
    {
      step: 2,
      title: 'Design & Formatting',
      description: 'Professional cover design and interior formatting for print and digital formats.',
      duration: '1-2 weeks',
    },
    {
      step: 3,
      title: 'ISBN & Copyright',
      description: 'ISBN assignment, copyright registration, and legal publishing requirements.',
      duration: '3-5 days',
    },
    {
      step: 4,
      title: 'Distribution Setup',
      description: 'Upload to all major platforms and configure distribution settings.',
      duration: '1 week',
    },
    {
      step: 5,
      title: 'Launch & Marketing',
      description: 'Coordinate book launch and implement initial marketing strategies.',
      duration: '2-4 weeks',
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Book Publishing Services - Western Publish</title>
        <meta name="description" content="Professional book publishing services with global distribution. From formatting to marketing, we handle everything to get your book to readers worldwide." />
        <meta name="keywords" content="book publishing, self publishing, Amazon KDP, book distribution, ISBN, copyright, book formatting, cover design" />
        <link rel="canonical" href="https://westernpublish.com/services/publishing" />
        <meta property="og:title" content="Book Publishing Services - Western Publish" />
        <meta property="og:description" content="Professional book publishing services with global distribution." />
        <meta property="og:url" content="https://westernpublish.com/services/publishing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-green-300 mr-4" />
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                  Professional Book Publishing
                </h1>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-green-100 mb-8 leading-relaxed">
                Transform your manuscript into a professionally published book available worldwide. We handle everything from formatting to distribution, so you can focus on what matters most - your story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Publish Your Book
                </Link>
                <Link 
                  to="#packages" 
                  className="border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
                >
                  View Packages
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Professional book publishing and distribution" 
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                <Globe className="h-5 w-5 inline mr-2" />
                Global Distribution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Global Distribution Network
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Your book will be available on all major platforms, reaching millions of readers worldwide through our comprehensive distribution network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {distributionChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{channel.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.name}</h3>
                <p className="text-gray-600">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publishing Packages */}
      <section id="packages" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Publishing Packages
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect publishing package for your needs and budget. All packages include professional quality and global distribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                    }`}
                  >
                    Choose This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publishing Process */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Publishing Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that takes your manuscript from completion to global availability in just a few weeks.
            </p>
          </div>
          
          <div className="space-y-8">
            {publishingProcess.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white rounded-xl shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">{step.description}</p>
                  <div className="flex items-center text-green-600">
                    <Package className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Publishing */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-green-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Western Publish?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver professional publishing services that get results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Globe className="h-12 w-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-green-100">Distribute to 190+ countries worldwide</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Printer className="h-12 w-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Print & Digital</h3>
              <p className="text-green-100">Both print-on-demand and eBook formats</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Award className="h-12 w-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Professional Quality</h3>
              <p className="text-green-100">Industry-standard formatting and design</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Target className="h-12 w-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Marketing Support</h3>
              <p className="text-green-100">Launch strategies and promotional tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smartphone className="h-16 w-16 text-green-600 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Publish Your Book?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of authors who have successfully published their books with Western Publish. Let us handle the technical details while you focus on your next writing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Start Publishing Today
            </Link>
            <Link 
              to="/services/ghostwriting" 
              className="border-2 border-gray-400 text-gray-700 hover:border-green-600 hover:text-green-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
            >
              Need Writing Help?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublishingPage;