import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { CheckCircle, Star, Award, Shield, ChevronDown } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pricingTiers = [
    {
      name: 'Essential',
      description: 'For authors ready to publish.',
      price: '2,499',
      features: [
        'Professional ghostwriting (up to 30,000 words)',
        'Copy editing and proofreading',
        'Standard cover design',
        'eBook formatting & distribution',
        'Amazon KDP publishing',
        '30-day post-launch support',
      ],
      icon: Star,
      color: 'blue',
    },
    {
      name: 'Professional',
      description: 'Our most popular package.',
      price: '4,999',
      features: [
        'Everything in Essential, plus:',
        'Professional ghostwriting (up to 60,000 words)',
        'Comprehensive developmental editing',
        'Custom cover design with 2 concepts',
        'Print and eBook formatting',
        'Wide distribution (Amazon, B&N, etc.)',
        'Author website setup',
        '90-day post-launch support',
      ],
      icon: Award,
      color: 'purple',
      popular: true,
    },
    {
      name: 'Bestseller',
      description: 'For maximum market impact.',
      price: '9,999',
      features: [
        'Everything in Professional, plus:',
        'Premium ghostwriting (up to 100,000 words)',
        'Multiple rounds of editing',
        'Premium cover design with 3 concepts',
        'Hardcover, paperback, and eBook',
        'Comprehensive marketing & PR campaign',
        'Audiobook production (narration & distribution)',
        'Lifetime author support',
      ],
      icon: Shield,
      color: 'green',
    },
  ];

  const faqs = [
    {
      question: "What's included in the ghostwriting service?",
      answer: "Our ghostwriting service includes thorough research, content planning, writing, and revisions. We work closely with you through interviews and feedback sessions to capture your unique voice and vision while ensuring the manuscript is of professional quality."
    },
    {
      question: "How long does the publishing process take?",
      answer: "The timeline varies depending on the package and the complexity of the book. On average, the process takes 3-6 months from our initial consultation to your book being published and available for sale. We'll provide a detailed, personalized timeline when you start."
    },
    {
      question: "Can I customize a package?",
      answer: "Absolutely! We understand that every author's journey is unique. These packages are a starting point. We encourage you to schedule a free consultation to discuss your specific needs, and we can create a custom package tailored just for you."
    },
    {
      question: "Who owns the rights to the book?",
      answer: "You do. 100%. As the author, you retain all rights, royalties, and creative control over your work. Our role is to provide the professional services to bring your story to life. Your name goes on the cover, and the copyright is registered in your name."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <Helmet>
        <title>Pricing - Western Publish | Professional Publishing Services</title>
        <meta 
          name="description" 
          content="Explore our transparent pricing packages for professional publishing services. From essential to bestseller packages, find the perfect publishing solution for your book." 
        />
      </Helmet>

      <motion.section 
        className="pt-24 pb-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Publishing Packages for Every Author
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Transparent pricing with no hidden fees. Choose the package that best fits your publishing goals and budget.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pricingTiers.map((tier) => (
              <motion.div 
                key={tier.name}
                variants={itemVariants}
                className={`relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col h-full ${
                  tier.popular ? 'ring-4 ring-blue-600 transform lg:scale-105 z-10' : 'shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center flex-grow">
                  <tier.icon className={`h-12 w-12 mx-auto mb-4 text-${tier.color}-500`} />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-500 mb-6">{tier.description}</p>
                  <div className="my-8">
                    <span className="text-5xl font-extrabold text-gray-900">${tier.price}</span>
                    <span className="text-gray-500 text-lg"> USD</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className={`inline-block w-full text-center py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105
                      ${tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-300 shadow-md'
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                      }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left p-6 font-semibold text-lg text-gray-800"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Start Your Publishing Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free, no-obligation consultation with our publishing experts to discuss your project and find the perfect package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              to="/about" 
              className="bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PricingPage;
