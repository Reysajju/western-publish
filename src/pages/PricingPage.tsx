import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Shield, Award } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      description: 'Perfect for first-time authors',
      price: '2,499',
      features: [
        'Professional ghostwriting (up to 30,000 words)',
        'Basic editing and proofreading',
        'Standard cover design',
        'eBook formatting',
        'Amazon KDP publishing',
        'Basic marketing strategy',
        '30-day support',
      ],
      icon: Star,
      color: 'blue',
    },
    {
      name: 'Professional',
      description: 'Most popular for serious authors',
      price: '4,999',
      features: [
        'Professional ghostwriting (up to 60,000 words)',
        'Comprehensive editing',
        'Custom cover design',
        'Print and eBook formatting',
        'Wide distribution (Amazon, B&N, etc.)',
        'Advanced marketing package',
        'Social media promotion',
        '90-day support',
      ],
      icon: Award,
      color: 'purple',
      popular: true,
    },
    {
      name: 'Elite',
      description: 'For authors seeking maximum impact',
      price: '9,999',
      features: [
        'Premium ghostwriting (up to 100,000 words)',
        'Multiple rounds of editing',
        'Premium cover design with options',
        'All format publishing',
        'Global distribution',
        'Comprehensive marketing campaign',
        'PR outreach',
        'Author website',
        'Lifetime support',
      ],
      icon: Shield,
      color: 'green',
    },
  ];

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Pricing - Western Publish | Professional Publishing Services</title>
        <meta 
          name="description" 
          content="Explore our transparent pricing packages for professional publishing services. From basic to elite packages, find the perfect publishing solution for your book." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Publishing Packages for Every Author
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Transparent pricing with no hidden fees. Choose the package that best fits your publishing goals.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  tier.popular ? 'ring-4 ring-blue-500 transform scale-105 md:scale-110 z-10' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <tier.icon className={`h-12 w-12 mx-auto mb-4 text-${tier.color}-600`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-500 mb-6">{tier.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                    <span className="text-gray-500"> USD</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 text-${tier.color}-500 mr-3 mt-1 flex-shrink-0`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Link
                    to="/contact"
                    className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 
                      ${tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What's included in the ghostwriting service?
                </h3>
                <p className="text-gray-600">
                  Our ghostwriting service includes thorough research, content planning, writing, and revisions. 
                  We work closely with you to capture your voice and vision while maintaining professional quality.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  How long does the publishing process take?
                </h3>
                <p className="text-gray-600">
                  The timeline varies depending on the package and book length. Generally, the process takes 3-6 months 
                  from manuscript to published book. We'll provide a detailed timeline during consultation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Can I customize these packages?
                </h3>
                <p className="text-gray-600">
                  Yes! We understand each author's needs are unique. Contact us to discuss customizing any package 
                  to better suit your specific requirements and goals.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What happens after publication?
                </h3>
                <p className="text-gray-600">
                  We provide ongoing support and marketing assistance based on your package level. Our team helps 
                  monitor sales, optimize listings, and implement marketing strategies to ensure your book's success.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Publishing Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our publishing experts to discuss your project 
              and find the perfect package for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-gray-400 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
