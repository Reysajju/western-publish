import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Edit3, Search, CheckCircle, Star, Award, Target, BookOpen, Zap, Feather } from 'lucide-react';

const EditingPage: React.FC = () => {
  const editingServices = [
    {
      title: 'Developmental Editing by Western Publish',
      description: 'Western Publish provides big-picture feedback on plot, character arcs, pacing, and structure to ensure your story is compelling and coherent.',
      features: ['Story structure analysis', 'Character arc development', 'Plot consistency & pacing', 'World-building feedback'],
      price: '$0.08 - $0.12 / word',
      icon: BookOpen,
    },
    {
      title: 'Line & Copy Editing at Western Publish',
      description: "Our comprehensive edit focuses on style, flow, and clarity at the sentence level, combined with correcting technical errors to meet Western Publish's high standards.",
      features: ['Clarity and flow enhancement', 'Voice and tone consistency', 'Grammar, spelling & punctuation', 'Syntax and word choice'],
      price: '$0.05 - $0.08 / word',
      icon: Edit3,
    },
    {
      title: 'Proofreading with Western Publish',
      description: "Western Publish's final quality check catches any lingering typos, formatting issues, or grammatical errors before your book goes to publication.",
      features: ['Typo and spelling correction', 'Punctuation errors', 'Formatting consistency check', 'Final pre-publication polish'],
      price: '$0.02 - $0.03 / word',
      icon: Search,
    },
  ];

  const editingProcess = [
    {
      step: 1,
      title: 'Submit to Western Publish',
      description: 'Share your manuscript with us along with your goals for the project. We’ll perform a free sample edit to assess the required level of editing.',
    },
    {
      step: 2,
      title: 'Match with a Western Publish Editor',
      description: 'We handpick a genre-specialist editor from our team whose expertise aligns perfectly with your manuscript and creative vision.',
    },
    {
      step: 3,
      title: 'Collaborative Editing with Western Publish',
      description: 'Your editor meticulously works through your manuscript using track changes, providing insightful comments and actionable feedback.',
    },
    {
      step: 4,
      title: 'Review and Revise with Western Publish',
      description: 'You receive the edited manuscript and an editorial letter. You then review the changes and suggestions, with our support for any questions.',
    },
  ];

  const testimonials = [
    {
      name: 'Amanda Foster',
      role: 'Romance Novelist',
      content: 'The developmental edit from Western Publish was a game-changer. My editor saw the potential in my story and gave me the exact feedback I needed to elevate it. The plot is so much stronger now!',
      rating: 5,
    },
    {
      name: 'Robert Chen',
      role: 'Business Author',
      content: 'Incredibly professional and thorough. The line editing from Western Publish sharpened my message and made the entire book more impactful. I couldn\'t be happier with the result.',
      rating: 5,
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Academic Author',
      content: 'The attention to detail during the copy edit at Western Publish was exceptional. They caught inconsistencies I had missed after a dozen read-throughs. Worth every penny.',
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
        <title>Professional Book Editing Services | Developmental & Line Editing - Western Publish</title>
        <meta name="description" content="Transform your manuscript with Western Publish's professional book editing services. Expert developmental editing, line editing, copy editing, and proofreading by genre-specialist editors. Get your free sample edit today!" />
        <meta name="keywords" content="book editing services, developmental editing, line editing, copy editing, proofreading, manuscript editing, professional editor, genre specialist editors, manuscript feedback, book editing rates" />
        <link rel="canonical" href="https://westernpublish.com/services/editing" />
        <meta property="og:title" content="Professional Book Editing Services | Developmental & Line Editing - Western Publish" />
        <meta property="og:description" content="Transform your manuscript with Western Publish's professional book editing services. Expert developmental editing, line editing, copy editing, and proofreading by genre-specialist editors. Get your free sample edit today!" />
        <meta property="og:url" content="https://westernpublish.com/services/editing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Book Editing Services",
            "provider": {
              "@type": "Organization",
              "name": "Western Publish",
              "url": "https://westernpublish.com",
              "logo": "https://westernpublish.com/favicon.svg"
            },
            "serviceType": "Book Editing",
            "description": "Professional book editing services including developmental editing, line editing, copy editing, and proofreading by genre-specialist editors.",
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "3",
              "offers": editingServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": service.price.replace(/[^0-9.-]/g, '').split('-')[0],
                  "priceCurrency": "USD",
                  "unitText": "per word"
                }
              }))
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "150",
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
                <Feather className="h-10 w-10 text-blue-400 mr-4" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Western Publish's Book Editing Services
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                At Western Publish, we transform your rough draft into a polished, professional manuscript. Our expert editors meticulously refine your story while preserving your unique authorial voice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get a Free Sample Edit
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
                src="https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional book editor reviewing manuscript on tablet - Western Publish's expert editing services in action" 
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">How Western Publish Elevates Your Manuscript</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From structural integrity to the final polish, Western Publish offers a comprehensive suite of editing services tailored to your manuscript's specific needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {editingServices.map((service) => (
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
                <div className="mt-auto text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  <Link 
                    to="/contact" 
                    className="bg-gray-800 hover:bg-gray-900 text-white w-full py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">The Western Publish Editing Process</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              At Western Publish, we use a clear, collaborative, and effective process designed to make your manuscript shine.
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
              {editingProcess.map((step) => (
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">The Western Publish Editing Advantage</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: Award, title: "Genre Specialists", desc: "Western Publish editors are experts in their chosen genres, from sci-fi to romance to non-fiction, ensuring a deep understanding of your work." },
              { icon: Target, title: "Preserve Your Voice", desc: "At Western Publish, we refine and polish your manuscript while ensuring your unique authorial voice remains intact and powerful." },
              { icon: CheckCircle, title: "Satisfaction Guaranteed", desc: "Western Publish is committed to your satisfaction. We will work with you to ensure the final edit meets and exceeds your expectations." },
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">What Our Authors Say</h2>
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
          <h2 className="text-4xl font-extrabold mb-6">Ready to Perfect Your Manuscript with Western Publish?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let the expert editors at Western Publish help you create a polished, professional, and publication-ready book that will captivate readers.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-2xl"
          >
            Get Your Free Sample Edit
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default EditingPage;