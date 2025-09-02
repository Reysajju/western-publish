import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, Variants } from 'framer-motion';
import { CircleDollarSign, Percent, XCircle, CheckCircle, Mail } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
  const policies = [
    {
      title: "General Policy",
      content: "Our goal is your complete satisfaction. This policy outlines refund eligibility for our services. Because our work is customized and labor-intensive, refunds are handled on a milestone basis. All refund requests must be submitted in writing to your project manager.",
      icon: CircleDollarSign,
    },
    {
      title: "Ghostwriting & Editing Services",
      content: "These services are non-refundable once a project milestone has been delivered and approved. If you cancel before the first milestone delivery, you may be eligible for up to a 75% refund of your initial deposit, less any work already completed.",
      icon: Percent,
    },
    {
      title: "Publishing & Design Services",
      content: "For services like cover design and interior formatting, work is non-refundable once the design process has begun. For full publishing packages, setup fees are non-refundable. Other costs may be partially refunded if cancellation occurs before distribution.",
      icon: Percent,
    },
    {
      title: "Marketing & Advertising Services",
      content: "Monthly service fees for marketing are non-refundable for the current month. Any prepaid ad spend that has not yet been used at the time of cancellation will be fully refunded to you.",
      icon: Percent,
    },
    {
      title: "Non-Refundable Items",
      content: "Certain costs are non-refundable. These include third-party fees (like ISBN registration), consultation fees, and any completed and approved project milestones. We cannot refund for work that you have already approved.",
      icon: XCircle,
    },
    {
      title: "Our Satisfaction Guarantee",
      content: "If you are not satisfied with a draft or design, we will work with you through the allotted revision rounds to make it right. Our commitment is to deliver a final product that meets the agreed-upon standards and your expectations.",
      icon: CheckCircle,
    },
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
        <title>Refund Policy - Western Publish</title>
        <meta 
          name="description" 
          content="Understand the refund policy for Western Publish's ghostwriting, editing, and publishing services. We are committed to client satisfaction and transparency." 
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
            <CircleDollarSign className="h-20 w-20 text-blue-400 mx-auto mb-6" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Refund Policy
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            We are committed to client satisfaction and transparency. Here’s how we handle refunds.
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {policies.map((policy) => (
              <motion.div 
                key={policy.title} 
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col text-center"
              >
                <div className="mx-auto bg-blue-100 rounded-full p-4 mb-6">
                  <policy.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{policy.title}</h2>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {policy.content}
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
          <Mail className="h-12 w-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            How to Request a Refund
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            To initiate a refund request, please contact your project manager or email our support team directly. We review all requests within 5-7 business days.
          </p>
          <a 
            href="mailto:support@westernpublish.com" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
          >
            Contact Support
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;
