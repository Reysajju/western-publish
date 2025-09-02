import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Printer, Globe, CheckCircle, Award, Target, Package, Palette, FileSignature } from 'lucide-react';

const PublishingPage: React.FC = () => {
  const packages = [
    {
      name: 'Essential Publishing',
      price: '$2,999',
      description: 'For authors who need professional publishing essentials to get their book to market.',
      features: [
        'Professional Interior Formatting',
        'Standard Cover Design (2 Concepts)',
        'ISBN Assignment & Barcode',
        'Amazon KDP & IngramSpark Setup',
        'Copyright Registration Guidance',
        '10 Author Copies',
      ],
      popular: false,
    },
    {
      name: 'Professional Publishing',
      price: '$4,999',
      description: 'Our most popular package, offering comprehensive services for a polished, wide-reaching launch.',
      features: [
        'Everything in Essential, plus:',
        'Premium Cover Design (3 Concepts)',
        'Expanded Distribution (B&N, Apple etc.)',
        'Professional Book Description Copywriting',
        'Look Inside Feature Setup',
        '25 Author Copies',
        'Basic Marketing Kit',
      ],
      popular: true,
    },
    {
      name: 'Bestseller Publishing',
      price: '$7,999',
      description: 'The ultimate all-in-one solution for authors aiming for maximum impact and bestseller status.',
      features: [
        'Everything in Professional, plus:',
        'Custom Cover Design (Unlimited Revisions)',
        'Audiobook Production & Distribution',
        'Author Website & Landing Page',
        'Full Pre-launch Marketing Campaign',
        '50 Author Copies',
        'Dedicated Launch Manager',
      ],
      popular: false,
    },
  ];

  const publishingProcess = [
    {
      step: 1,
      title: 'Manuscript Finalization',
      description: 'We ensure your manuscript is professionally edited and proofread, ready for the design phase.',
      icon: FileSignature,
    },
    {
      step: 2,
      title: 'Design & Formatting',
      description: 'Our designers create a stunning cover and a clean, professional interior layout for both print and ebook.',
      icon: Palette,
    },
    {
      step: 3,
      title: 'Setup & Registration',
      description: 'We handle all the technical details: ISBN assignment, copyright registration, and setting up your publisher accounts.',
      icon: Package,
    },
    {
      step: 4,
      title: 'Global Distribution',
      description: 'We upload your book to our global network, making it available for sale on Amazon, B&N, and thousands of other retailers.',
      icon: Globe,
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
        <title>Book Publishing Services | From Manuscript to Market - Western Publish</title>
        <meta name="description" content="Professional book publishing services with global distribution. We handle cover design, formatting, ISBN, and distribution to Amazon, B&N, and more." />
        <meta name="keywords" content="book publishing services, self-publishing company, book distribution, professional book formatting, cover design, publish on Amazon" />
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
                <BookOpen className="h-10 w-10 text-blue-400 mr-4" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Book Publishing Services
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your finished manuscript into a professionally published book available to readers worldwide. We manage the entire process, so you can focus on writing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Publish Your Book
                </Link>
                <Link 
                  to="#packages" 
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  View Packages
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
                src="https://images.pexels.com/photos/3847633/pexels-photo-3847633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Stack of professionally published books" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section id="packages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Publishing Packages for Every Author</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the all-inclusive package that best fits your goals and budget.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {packages.map((pkg) => (
              <motion.div 
                key={pkg.name} 
                variants={itemVariants}
                className={`relative bg-gray-50 rounded-2xl p-8 shadow-lg flex flex-col h-full ${pkg.popular ? 'ring-4 ring-blue-600 transform lg:scale-105 z-10' : 'hover:shadow-xl'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6 h-16">{pkg.description}</p>
                  <div className="text-5xl font-extrabold text-gray-900 mb-6">{pkg.price}</div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                  >
                    Choose Package
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Publishing Process</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined, transparent process that takes your manuscript from your desktop to the global marketplace.
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
              {publishingProcess.map((step) => (
                <motion.div key={step.step} variants={itemVariants} className="relative text-center">
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold border-4 border-gray-900 mb-4">
                      <step.icon className="h-12 w-12 text-white" />
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Why Choose Western Publish?</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: Globe, title: "Global Distribution", desc: "Reach readers in over 190 countries through Amazon, IngramSpark, and more." },
              { icon: Award, title: "Professional Quality", desc: "Our team ensures your book meets the highest industry standards of design and production." },
              { icon: Target, title: "Author-Centric Approach", desc: "You retain 100% of your rights and royalties. We're your partner, not your publisher." },
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

      <section className="py-24 bg-blue-600 text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Printer className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold mb-6">Ready to See Your Book in Print?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's bring your book to the world. Contact us for a free consultation to discuss your publishing goals.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-2xl"
          >
            Get Your Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default PublishingPage;