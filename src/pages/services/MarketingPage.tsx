import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Megaphone, TrendingUp, Target, CheckCircle, Star, Award, BarChart, Zap, Globe, Share2, Podcast } from 'lucide-react';

const MarketingPage: React.FC = () => {
  const marketingServices = [
    {
      title: 'Author Platform & Branding',
      description: 'Build a powerful author brand with a professional website, social media presence, and email list that connects with your ideal readers.',
      features: ['Custom author website design', 'Social media strategy & setup', 'Email list building & lead magnets', 'Consistent brand identity'],
      icon: Globe,
    },
    {
      title: 'Book Launch & Bestseller Campaign',
      description: 'Execute a high-impact launch strategy designed to hit bestseller lists and maximize initial sales velocity.',
      features: ['Amazon category & keyword optimization', 'Coordinated launch week promotion', 'Advanced reader team management', 'Paid advertising launch burst'],
      icon: Award,
    },
    {
      title: 'Ongoing Digital Marketing',
      description: 'Sustain your book\'s momentum with long-term marketing efforts, including ads, content marketing, and social media management.',
      features: ['Amazon & social media ad management', 'Content marketing & blog strategy', 'Monthly performance analytics', 'Continuous audience growth'],
      icon: TrendingUp,
    },
    {
      title: 'PR & Media Outreach',
      description: 'Gain credibility and reach a wider audience by getting featured on podcasts, blogs, and other media outlets.',
      features: ['Custom media kit creation', 'Targeted podcast & media pitching', 'Press release writing & distribution', 'Interview & appearance coaching'],
      icon: Podcast,
    },
  ];

  const marketingProcess = [
    {
      step: 1,
      title: 'Strategy & Audience Deep Dive',
      description: 'We start by defining your target reader and crafting a bespoke marketing strategy tailored to your book and goals.',
    },
    {
      step: 2,
      title: 'Pre-Launch Foundation',
      description: 'We build your author platform, create marketing assets, and generate early buzz with an advance reader team.',
    },
    {
      step: 3,
      title: 'High-Impact Launch',
      description: 'We execute a coordinated, multi-channel campaign during launch week to maximize visibility and sales.',
    },
    {
      step: 4,
      title: 'Sustain & Grow',
      description: 'Post-launch, we analyze data and implement ongoing marketing tactics to ensure long-term, sustainable success.',
    },
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Business Author',
      content: 'The bestseller campaign was a resounding success, hitting #1 in three categories! The strategic approach made all the difference. The ROI has been phenomenal.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Fiction Author',
      content: 'Their social media strategy was brilliant. They built a community of 25,000 engaged fans for me before the book even came out. I had a built-in audience on day one.',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      role: 'Self-Help Author',
      content: 'The PR team was relentless. They secured 15 podcast interviews and features on major blogs, which drove incredible awareness and sales. I couldn\'t have done it without them.',
      rating: 5,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <Helmet>
        <title>Book Marketing Services to Reach More Readers - Western Publish</title>
        <meta name="description" content="Professional book marketing services designed to build your author brand, launch your book to bestseller status, and drive long-term sales." />
        <meta name="keywords" content="book marketing, author marketing, book promotion, Amazon bestseller campaign, social media for authors, book PR" />
      </Helmet>
      
      <motion.section 
        className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Megaphone className="h-10 w-10 text-blue-400 mr-4" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Book Marketing Services
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Your book deserves to be discovered. Our data-driven marketing strategies connect your work with its ideal audience, build your author platform, and drive sustainable sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Plan Your Launch
                </Link>
                <Link 
                  to="#services" 
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Marketing analytics dashboard showing growth" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Results-Driven Marketing Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full suite of marketing services designed to build your audience and sell more books.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {marketingServices.map((service) => (
              <motion.div key={service.title} variants={itemVariants} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="flex items-center mb-5">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link 
                    to="/contact" 
                    className="bg-gray-800 hover:bg-gray-900 text-white w-full text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Strategic Marketing Process</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              A proven, four-phase approach to build momentum and drive long-term success for your book.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketingProcess.map((step) => (
                <motion.div key={step.step} variants={itemVariants} className="relative text-center">
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold border-4 border-gray-900 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Why Our Marketing Works</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: BarChart, title: "Data-Driven Strategy", desc: "Every decision is backed by market research, analytics, and a deep understanding of reader behavior." },
              { icon: Target, title: "Holistic Approach", desc: "We integrate branding, social media, PR, and advertising for a powerful, unified campaign." },
              { icon: Share2, title: "Long-Term Partnership", desc: "We focus on building a sustainable author career, not just a one-time launch spike." },
            ].map(item => (
              <motion.div key={item.title} variants={itemVariants} className="text-center p-6">
                <div className="mx-auto bg-blue-100 rounded-full p-4 w-24 h-24 flex items-center justify-center mb-6">
                  <item.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Marketing Success Stories</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Zap className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold mb-6">Ready to Find Your Readers?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build a marketing strategy that turns your book into a must-read. Schedule a free consultation to get started.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-2xl"
          >
            Get a Free Marketing Plan
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default MarketingPage;