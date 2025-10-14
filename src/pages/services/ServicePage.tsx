import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { services } from './serviceData';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CalendlyButton from '../../components/CalendlyButton';
import { Service, ServiceSection, ServiceFAQ } from './types';

interface ServicePageProps {
  serviceName: string;
}

function toSlug(text: string) {
  return (text || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceName }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState<Service | undefined>(undefined);

  useEffect(() => {
    try {
      const serviceData = services[serviceName];
      if (!serviceData) {
        setError(`Service "${serviceName}" not found`);
      } else {
        setService(serviceData);
      }
    } catch (err) {
      setError('Failed to load service data');
    } finally {
      setLoading(false);
    }
  }, [serviceName]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <svg className="animate-spin h-12 w-12 text-blue-600 mb-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <span className="text-lg text-blue-600 font-semibold">Loading {serviceName}...</span>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {error || 'Service not found'}
        </h2>
        <Link 
          to="/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{service?.title || serviceName} | Professional Book Services - Western Publish</title>
        <meta name="description" content={`${service?.description || ''} Western Publish (western publishing company) offers expert ${serviceName} including google ad campaigns for books, campaign setup, optimization and reporting.`} />
        <meta name="keywords" content={`google ad campaigns for books, ${serviceName}, western publishing company, western publish, book advertising, book marketing`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://westernpublish.com/services/${toSlug(service?.title || serviceName)}`} />
        <meta property="og:title" content={`${service?.title || serviceName} | Professional Book Services - Western Publish`} />
        <meta property="og:description" content={`${service?.description || ''} Western Publish runs targeted google ad campaigns for books to boost sales and visibility.`} />
        <meta property="og:url" content={`https://westernpublish.com/services/${toSlug(service?.title || serviceName)}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service?.title,
            "description": service?.description,
            "provider": {
              "@type": "Organization",
              "name": "Western Publish",
              "url": "https://westernpublish.com",
              "logo": "https://westernpublish.com/favicon.svg"
            },
            "serviceType": serviceName,
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `${serviceName} Services`,
              "itemListElement": service?.sections?.map(section => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": section.title,
                  "description": section.description
                }
              }))
            },
            "image": service?.image,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://westernpublish.com/services/${toSlug(service?.title || serviceName)}`
            }
          })}
        </script>
        {service?.faqs && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": service.faqs.map((f: { question: string; answer: string }) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <svg className="animate-spin h-12 w-12 text-blue-600 mb-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span className="text-lg text-blue-600 font-semibold">Loading {serviceName}...</span>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    {service.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-x-4">
                    <Link 
                      to="/contact"
                      className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                      Get Started <ArrowRight className="inline ml-2 h-5 w-5" />
                    </Link>
                    <CalendlyButton className="inline-block bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl" />
                  </div>
                </motion.div>
                <motion.div 
                  className="relative mt-8 lg:mt-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <img 
                    src={service.image}
                    alt={service.imageAlt || service.title} 
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our {serviceName} Offerings
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We provide a comprehensive suite of services to ensure your success. Explore what's included in our {serviceName} package.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service?.sections?.map((section: ServiceSection, index: number) => (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <CheckCircle className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{section.description}</p>
                    <ul className="list-disc list-inside text-gray-500 space-y-2">
                      {section.points?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section for AEO */}
          {service?.faqs && service.faqs.length > 0 && (
            <section id="faqs" className="py-20 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {service.faqs.map((faq: ServiceFAQ, i: number) => (
                    <div key={i} className="border rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start with {serviceName}?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Let our experts handle the heavy lifting. Contact us today for a free consultation and let's discuss how we can bring your project to life.
              </p>
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Your Free Consultation
              </Link>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
};

export default ServicePage;
