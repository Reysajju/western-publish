import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, BookOpen, Users, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (505) 396-2071 ext 800', 'Mon-Fri 9am-6pm MST'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['publish@westernpublish.com', 'info@westernpublish.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['1209 MOUNTAIN ROAD PL NE STE R', 'ALBUQUERQUE, NM 87110'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9am - 6pm MST', 'Weekend: By appointment'],
    },
  ];

  const services = [
    'Ghostwriting',
    'Book Publishing',
    'Marketing & Promotion',
    'Editing & Proofreading',
    'Cover Design',
    'Author Branding',
    'Consultation',
    'Other',
  ];

  const faqs = [
    {
      question: 'How long does the publishing process take?',
      answer: 'The timeline varies by project scope, but typically ranges from 3-6 months for ghostwriting and publishing, 2-3 months for publishing existing manuscripts, and 1-2 months for marketing campaigns.',
    },
    {
      question: "What's included in your publishing packages?",
      answer: 'Our packages are comprehensive and include editing, formatting, cover design, ISBN assignment, distribution setup, and marketing support. Specific inclusions vary by package level to best suit your needs.',
    },
    {
      question: 'Do you work with first-time authors?',
      answer: 'Absolutely! We specialize in guiding first-time authors through the entire process, from initial concept to a published book and beyond. Our team is here to support you every step of the way.',
    },
    {
      question: 'What genres do you work with?',
      answer: 'We work with a wide variety of genres including business books, memoirs, fiction, self-help, academic texts, and more. Our diverse team has expertise across multiple literary fields.',
    },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="bg-white">
      <Helmet>
        <title>How to Contact Western Publish? | Get in Touch</title>
        <meta name="description" content="Have a question about your book project? Contact Western Publish, a dba of Western Publishing LLC. We offer professional ghostwriting, publishing, and marketing services. Reach out for a free consultation." />
        <meta name="keywords" content="contact western publish, book publishing consultation, ghostwriting services, publishing quote, western publishing llc" />
        <link rel="canonical" href="https://westernpublish.com/contact" />
        <meta property="og:title" content="How to Contact Western Publish? | Get in Touch" />
        <meta property="og:description" content="Have a question about your book project? Contact Western Publish for professional ghostwriting, publishing, and marketing services. Reach out for a free consultation." />
        <meta property="og:url" content="https://westernpublish.com/contact" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <MessageCircle className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tighter">
              How Can You Reach Us?
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to start your publishing journey? We're here to answer your questions and help you 
              find the perfect solution for your book.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Project</h2>
              <p className="text-gray-600 mb-8">
                Tell us about your project and we'll get back to you within 24 hours with a personalized proposal.
              </p>
              
              <form 
                name="contact"
                method="POST"
                action="/?success=true"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    placeholder="e.g., Business book, Memoir, Fiction novel"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    placeholder="Describe your book idea, target audience, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  <span>Send My Project Details</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Have questions about our services? Want to discuss your project before getting started? 
                  We're here to help. Western Publish is a dba of Western Publishing LLC.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-blue-100 rounded-lg p-3 w-12 h-12 mb-4">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div 
                className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-xl p-8 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-6">Why Choose Western Publish?</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-300">500+</div>
                    <div className="text-blue-100 text-sm">Books Published</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-300">98%</div>
                    <div className="text-blue-100 text-sm">Happy Clients</div>
                  </div>
                </div>
                <p className="text-blue-100 mt-6 text-center">
                  Join hundreds of successful authors who trusted us with their stories.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;