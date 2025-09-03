import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Megaphone, TrendingUp, Target, CheckCircle, Star, Award, BarChart, Zap, Globe, Share2, Podcast } from 'lucide-react';

const MarketingPage: React.FC = () => {
  const marketingServices = [
    {
      title: 'Author Platform & Branding by Western Publish',
      description: 'Western Publish helps you build a powerful author brand with a professional website, social media presence, and email list that connects with your ideal readers.',
      features: ['Custom author website design', 'Social media strategy & setup', 'Email list building & lead magnets', 'Consistent brand identity'],
      icon: Globe,
    },
    {
      title: 'Book Launch & Bestseller Campaign with Western Publish',
      description: 'With Western Publish, you can execute a high-impact launch strategy designed to hit bestseller lists and maximize initial sales velocity.',
      features: ['Amazon category & keyword optimization', 'Coordinated launch week promotion', 'Advanced reader team management', 'Paid advertising launch burst'],
      icon: Award,
    },
    {
      title: 'Ongoing Digital Marketing by Western Publish',
      description: "Western Publish helps sustain your book's momentum with long-term marketing efforts, including ads, content marketing, and social media management.",
      features: ['Amazon & social media ad management', 'Content marketing & blog strategy', 'Monthly performance analytics', 'Continuous audience growth'],
      icon: TrendingUp,
    },
    {
      title: 'PR & Media Outreach with Western Publish',
      description: 'Gain credibility and reach a wider audience. Western Publish gets you featured on podcasts, blogs, and other media outlets.',
      features: ['Custom media kit creation', 'Targeted podcast & media pitching', 'Press release writing & distribution', 'Interview & appearance coaching'],
      icon: Podcast,
    },
  ];

  const marketingProcess = [
    {
      step: 1,
      title: 'Strategy & Audience Deep Dive with Western Publish',
      description: 'We start by defining your target reader and crafting a bespoke marketing strategy tailored to your book and goals.',
    },
    {
      step: 2,
      title: 'Pre-Launch Foundation by Western Publish',
      description: 'We build your author platform, create marketing assets, and generate early buzz with an advance reader team.',
    },
    {
      step: 3,
      title: 'High-Impact Launch with Western Publish',
      description: 'We execute a coordinated, multi-channel campaign during launch week to maximize visibility and sales.',
    },
    {
      step: 4,
      title: 'Sustain & Grow with Western Publish',
      description: 'Post-launch, we analyze data and implement ongoing marketing tactics to ensure long-term, sustainable success.',
    },
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Business Author',
      content: 'The bestseller campaign by Western Publish was a resounding success, hitting #1 in three categories! Their strategic approach made all the difference. The ROI has been phenomenal.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Fiction Author',
      content: "Western Publish's social media strategy was brilliant. They built a community of 25,000 engaged fans for me before the book even came out. I had a built-in audience on day one.",
      rating: 5,
    },
    {
      name: 'Maria Santos',
      role: 'Self-Help Author',
      content: "The PR team at Western Publish was relentless. They secured 15 podcast interviews and features on major blogs, which drove incredible awareness and sales. I couldn't have done it without them.",
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
        <title>Book Marketing Services | Author Platform Building & Bestseller Campaigns - Western Publish</title>
        <meta name="description" content="Launch your book successfully with Western Publish's professional book marketing services. We build your author platform, run bestseller campaigns, manage PR, and drive sustainable sales. Get your free marketing plan today!" />
        <meta name="keywords" content="book marketing services, author platform building, book promotion, Amazon bestseller campaign, social media for authors, book PR, book launch strategy, author branding, book marketing plan" />
        <link rel="canonical" href="https://westernpublish.com/services/marketing" />
        <meta property="og:title" content="Book Marketing Services | Author Platform Building & Bestseller Campaigns - Western Publish" />
        <meta property="og:description" content="Launch your book successfully with Western Publish's professional book marketing services. We build your author platform, run bestseller campaigns, manage PR, and drive sustainable sales. Get your free marketing plan today!" />
        <meta property="og:url" content="https://westernpublish.com/services/marketing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Book Marketing Services",
            "provider": {
              "@type": "Organization",
              "name": "Western Publish",
              "url": "https://westernpublish.com",
              "logo": "https://westernpublish.com/favicon.svg"
            },
            "serviceType": "Book Marketing",
            "description": "Professional book marketing services designed to build your author brand, launch your book to bestseller status, and drive long-term sales.",
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": marketingServices.length.toString(),
              "offers": marketingServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                },
                "deliveryMethod": "Online Service"
              }))
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Book Marketing Services",
              "itemListElement": marketingServices.map(service => ({
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "offers": {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "serviceOutput": service.features
                  }
                }
              }))
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "100",
              "bestRating": "5"
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating.toString(),
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name,
                "jobTitle": testimonial.role
              },
              "reviewBody": testimonial.content
            }))
          })}
        </script>
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
              <div className="flex items-center mb-4 text-blue-400">
                <Megaphone className="h-10 w-10 text-blue-400 mr-4" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Strategic Book Marketing by Western Publish
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Your book deserves to be discovered. Western Publish's data-driven marketing strategies connect your work with its ideal audience, build your author platform, and drive sustainable sales.
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
                alt="Book marketing analytics dashboard showing successful author campaign results - Western Publish's data-driven marketing approach" 
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Western Publish's Marketing Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Western Publish offers a full suite of marketing services designed to build your audience and sell more books, ensuring your message reaches the right people.
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">The Western Publish Marketing Process</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              At Western Publish, we use a proven, four-phase approach to build momentum and drive long-term success for your book.
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Why Western Publish Marketing Works</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: BarChart, title: "Data-Driven Strategy", desc: "At Western Publish, every decision is backed by market research, analytics, and a deep understanding of reader behavior." },
              { icon: Target, title: "Holistic Approach", desc: "Western Publish integrates branding, social media, PR, and advertising for a powerful, unified campaign." },
              { icon: Share2, title: "Long-Term Partnership", desc: "Western Publish focuses on building a sustainable author career, not just a one-time launch spike. We're your long-term partner." },
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
          <h2 className="text-4xl font-extrabold mb-6">Ready to Find Your Readers with Western Publish?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let Western Publish build a marketing strategy that turns your book into a must-read. Schedule a free consultation to get started.
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