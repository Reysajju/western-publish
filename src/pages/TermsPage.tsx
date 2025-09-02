import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, Variants } from 'framer-motion';
import { BookOpen, FileText, Users, Shield, CreditCard, BrainCircuit, Clock, Edit, Phone } from 'lucide-react';

const TermsPage: React.FC = () => {
  const terms = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: "By accessing or using any services provided by Western Publish ('we', 'us', 'our'), you ('client', 'you') agree to be bound by these Terms of Service. This constitutes a legally binding agreement. If you do not agree with these terms, you may not use our services."
    },
    {
      icon: Users,
      title: "Description of Services",
      content: "We provide a range of professional services for authors, including but not limited to ghostwriting, editing, book cover design, interior formatting, publishing assistance, and marketing services. The specific scope of services for your project will be detailed in a separate Service Agreement."
    },
    {
      icon: CreditCard,
      title: "Payment and Fees",
      content: "Service fees are based on the package or services selected. A detailed payment schedule will be provided in your Service Agreement. Typically, projects require an upfront deposit, with subsequent payments due at specific project milestones. All payments must be made on time to ensure project continuity. Late payments may result in project suspension."
    },
    {
      icon: BrainCircuit,
      title: "Intellectual Property Rights",
      content: "Upon our receipt of full and final payment for the services rendered, you, the client, become the sole and exclusive owner of the intellectual property (the 'Work'). You will retain 100% of the rights, royalties, and copyright. We retain no rights to the finished Work, but may use it for our portfolio and marketing materials with your prior written consent."
    },
    {
      icon: Shield,
      title: "Confidentiality",
      content: "We are committed to maintaining the strict confidentiality of all client information, project details, and unpublished manuscripts. All our team members and contractors are bound by non-disclosure agreements (NDAs). We will not share, sell, or disclose your personal or project information to any third party without your express consent, unless required by law."
    },
    {
      icon: Clock,
      title: "Project Timelines",
      content: "Project timelines provided are good-faith estimates and can vary based on project complexity, client response times, and the scope of revisions. We will establish a projected timeline in the Service Agreement and make every reasonable effort to meet deadlines. Delays in client feedback or payment may shift the project timeline accordingly."
    },
    {
      icon: Edit,
      title: "Revisions and Approval",
      content: "Our service packages include a specific number of revision rounds. These will be outlined in your Service Agreement. Additional revisions beyond the agreed-upon scope may be subject to additional fees. The client is responsible for timely review and approval at each stage of the project to keep the process moving forward."
    },
    {
      icon: Phone,
      title: "Contact and Notices",
      content: "All official communication regarding your project or these terms should be directed to your assigned project manager or our official contact channels. For legal inquiries, please contact us at legal@westernpublish.com. We will provide notice of any significant changes to these terms via email or our website."
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
        <title>Terms of Service - Western Publish</title>
        <meta 
          name="description" 
          content="Read the official Terms of Service for Western Publish. Understand the agreement governing our ghostwriting, editing, publishing, and marketing services." 
        />
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
            <BookOpen className="h-20 w-20 text-blue-400 mx-auto mb-6" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            This agreement governs your use of our professional publishing services. Please read it carefully.
          </motion.p>
          <motion.div 
            className="mt-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p>Last Updated: August 18, 2025</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {terms.map((term) => (
              <motion.div 
                key={term.title} 
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <term.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{term.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {term.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please don't hesitate to reach out to our legal team for clarification.
          </p>
          <a 
            href="mailto:legal@westernpublish.com" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
          >
            Contact Legal Team
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsPage;
