import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Megaphone, TrendingUp, Users, Target, CheckCircle, Star, Award, BarChart, Zap } from 'lucide-react';

const MarketingPage: React.FC = () => {
  const marketingServices = [
    {
      title: 'Amazon Bestseller Campaign',
      description: 'Strategic launch campaigns designed to achieve bestseller status on Amazon in your category.',
      features: ['Category research & optimization', 'Launch timing strategy', 'Review generation system', 'Keyword optimization'],
      price: 'Starting at $3,999',
      icon: Award,
    },
    {
      title: 'Social Media Marketing',
      description: 'Build your author platform and engage with readers across all major social media platforms.',
      features: ['Content creation & scheduling', 'Community management', 'Influencer partnerships', 'Paid advertising campaigns'],
      price: 'Starting at $1,999/month',
      icon: Users,
    },
    {
      title: 'Author Website & Branding',
      description: 'Professional author website and complete branding package to establish your online presence.',
      features: ['Custom website design', 'Brand identity development', 'SEO optimization', 'Email marketing setup'],
      price: 'Starting at $2,499',
      icon: Target,
    },
    {
      title: 'PR & Media Outreach',
      description: 'Get featured in podcasts, blogs, and media outlets to increase your book\'s visibility.',
      features: ['Media kit creation', 'Podcast booking', 'Press release distribution', 'Interview preparation'],
      price: 'Starting at $2,999',
      icon: Megaphone,
    },
  ];

  const marketingProcess = [
    {
      step: 1,
      title: 'Strategy Development',
      description: 'We analyze your book, target audience, and goals to create a customized marketing strategy.',
      duration: '1 week',
    },
    {
      step: 2,
      title: 'Pre-Launch Preparation',
      description: 'Build anticipation with advance reader copies, reviews, and social media buzz.',
      duration: '4-6 weeks',
    },
    {
      step: 3,
      title: 'Launch Campaign',
      description: 'Execute coordinated launch activities across all channels for maximum impact.',
      duration: '2 weeks',
    },
    {
      step: 4,
      title: 'Post-Launch Optimization',
      description: 'Monitor performance and adjust strategies to maintain momentum and sales.',
      duration: 'Ongoing',
    },
  ];

  const successMetrics = [
    { metric: '300%', description: 'Average sales increase' },
    { metric: '85%', description: 'Bestseller achievement rate' },
    { metric: '50K+', description: 'Social media followers gained' },
    { metric: '200+', description: 'Media placements secured' },
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Business Author',
      content: 'Western Publish\'s marketing campaign helped my book reach #1 in three Amazon categories. The ROI was incredible.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Fiction Author',
      content: 'Their social media strategy built me a loyal readership of 25,000 followers before my book even launched.',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      role: 'Self-Help Author',
      content: 'The PR team got me featured on 15 podcasts and major blogs. My book sales exceeded all expectations.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Book Marketing Services - Western Publish</title>
        <meta name="description" content="Professional book marketing services to make your book a bestseller. Amazon campaigns, social media marketing, PR outreach, and author branding." />
        <meta name="keywords" content="book marketing, Amazon bestseller, author branding, book promotion, social media marketing, PR outreach, book launch" />
        <link rel="canonical" href="https://westernpublish.com/services/marketing" />
        <meta property="og:title" content="Book Marketing Services - Western Publish" />
        <meta property="og:description" content="Professional book marketing services to make your book a bestseller." />
        <meta property="og:url" content="https://westernpublish.com/services/marketing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Megaphone className="h-12 w-12 sm:h-16 sm:w-16 text-purple-300 mr-4" />
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                  Book Marketing That Gets Results
                </h1>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
                Transform your book into a bestseller with our data-driven marketing strategies. We help authors build their platform, reach their target audience, and achieve sustainable success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Launch Your Campaign
                </Link>
                <Link 
                  to="#services" 
                  className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Book marketing and promotion strategies" 
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                <TrendingUp className="h-5 w-5 inline mr-2" />
                300% Sales Increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Marketing Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our marketing campaigns consistently deliver measurable results for authors across all genres.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{metric.metric}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Marketing Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From bestseller campaigns to long-term author platform building, we offer complete marketing solutions tailored to your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-lg p-3 mr-4">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
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
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <Link 
                    to="/contact" 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Marketing Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic approach that builds momentum from pre-launch through long-term success.
            </p>
          </div>
          
          <div className="space-y-8">
            {marketingProcess.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white rounded-xl shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">{step.description}</p>
                  <div className="flex items-center text-purple-600">
                    <BarChart className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Marketing */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Our Marketing Works
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge digital marketing strategies to deliver results that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <BarChart className="h-12 w-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Data-Driven Strategy</h3>
              <p className="text-purple-100">Every campaign is backed by market research and analytics</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Target className="h-12 w-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Targeted Approach</h3>
              <p className="text-purple-100">Reach your ideal readers with precision targeting</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Zap className="h-12 w-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Multi-Channel Campaigns</h3>
              <p className="text-purple-100">Coordinated marketing across all relevant platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Marketing Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from authors who trusted us with their book marketing campaigns.
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
          <TrendingUp className="h-16 w-16 text-purple-600 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Make Your Book a Bestseller?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Don't let your book get lost in the crowd. Our proven marketing strategies will help you reach your target audience and achieve the success your book deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Start Your Marketing Campaign
            </Link>
            <Link 
              to="/services/publishing" 
              className="border-2 border-gray-400 text-gray-700 hover:border-purple-600 hover:text-purple-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 text-center"
            >
              Need Publishing Help?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;