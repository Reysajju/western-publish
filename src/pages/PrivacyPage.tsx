import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Mail, Database, ChevronRight } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number.',
        'Project Information: Manuscript content, publishing goals, and creative notes.',
        'Communication Records: Emails, call notes, and messages.',
        'Usage Data: Anonymized website analytics and user interactions.',
        'Payment Information: Processed securely by our third-party payment partners (e.g., Stripe, PayPal). We do not store your credit card details.',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and personalize our ghostwriting, publishing, and marketing services.',
        'To communicate with you about your projects, provide updates, and answer inquiries.',
        'To process payments and manage your account securely.',
        'To improve our website, services, and customer experience.',
        'To send you our newsletter and promotional content, but only with your explicit consent.',
        'To comply with legal obligations and protect our intellectual and business rights.',
      ],
    },
    {
      icon: Mail,
      title: 'Email & Data Practices',
      content: [
        'We only add you to marketing lists with your explicit consent (opt-in).',
        'Any bulk email lists you provide for marketing campaigns are handled with strict confidentiality and used only for the agreed-upon purpose.',
        'We will never sell, rent, or share your personal data or email lists with third parties for their marketing purposes.',
        'Every marketing email we send includes a clear and easy one-click unsubscribe link.',
        'We adhere to GDPR, CCPA, and CAN-SPAM regulations in all our data handling practices.',
      ],
    },
    {
      icon: UserCheck,
      title: 'Information Sharing',
      content: [
        'With trusted service providers (editors, designers) under strict non-disclosure agreements.',
        'If required by law, court order, or other governmental request.',
        'During a business transfer, such as a merger or acquisition, with continued protection.',
        'With your explicit consent for a specific purpose (e.g., a testimonial).',
        'We emphasize again: We do not sell your personal information.',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'Utilizing SSL/TLS encryption for all data transmitted to and from our website.',
        'Storing data on secure, access-controlled servers with regular security audits.',
        'Implementing strict internal access controls so only authorized personnel can view your data.',
        'Regularly training our team on the latest data protection and privacy best practices.',
        'Maintaining secure, encrypted backups to prevent data loss.',
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
      },
    },
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <Helmet>
        <title>Privacy Policy - Western Publish | Your Data Protection & Security</title>
        <meta name="description" content="Review the Western Publish privacy policy. Learn how we collect, use, and rigorously protect your personal and project information. We never sell your data." />
        <meta name="keywords" content="privacy policy, data protection, western publish privacy, author privacy, GDPR compliance" />
        <link rel="canonical" href="https://westernpublish.com/privacy" />
      </Helmet>
      
      <motion.section 
        className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            <Shield className="h-20 w-20 text-blue-400 mx-auto mb-6" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Your trust is our most important asset. This policy details our unwavering commitment to protecting your privacy and your creative work.
          </motion.p>
          <motion.div 
            className="mt-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p>Last Updated: January 2025</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Privacy Commitment</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                At Western Publish, we understand that sharing your manuscript, ideas, and personal information requires immense trust. This Privacy Policy outlines our solemn promise to protect your privacy and details how we handle your data with the utmost care, in full compliance with global privacy laws like GDPR, CCPA, and the CAN-SPAM Act.
              </p>
              <div className="bg-blue-100 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg">
                <p className="text-blue-800 font-semibold">
                  Our Core Promise: We will never sell your personal information. Your creative work and personal data are treated with the highest level of confidentiality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {sections.map((section) => (
              <motion.div key={section.title} variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <section.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-4 flex-grow">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <UserCheck className="h-16 w-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Your Data, Your Rights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to transparency and empowering you to control your data.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { title: "Access Your Data", desc: "Request a complete copy of the personal information we hold about you." },
              { title: "Correct Inaccuracies", desc: "Easily update or correct any personal information that is out of date." },
              { title: "Delete Your Data", desc: "Request the permanent deletion of your personal data from our systems." },
              { title: "Limit Processing", desc: "Object to or request restrictions on how we process your personal data." },
              { title: "Data Portability", desc: "Receive your data in a machine-readable format to transfer to another service." },
              { title: "Opt-Out of Marketing", desc: "Unsubscribe from our marketing communications at any time, no questions asked." },
            ].map(right => (
              <motion.div key={right.title} variants={itemVariants} className="bg-gray-50 rounded-xl p-6 text-center shadow-lg hover:bg-blue-50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{right.title}</h3>
                <p className="text-gray-600">{right.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our dedicated privacy team is here to help. If you have any questions about this policy or wish to exercise your rights, please reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <p className="text-lg">
              <strong>Email:</strong> <a href="mailto:privacy@westernpublish.com" className="text-blue-400 hover:text-blue-300">privacy@westernpublish.com</a>
            </p>
            <p className="text-lg">
              <strong>Response Time:</strong> We commit to responding within 24-48 hours.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
          >
            Contact Our Privacy Team
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPage;