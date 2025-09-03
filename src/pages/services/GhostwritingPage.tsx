import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { PenTool, BookOpen, Users, CheckCircle, Star, Award, Target, MessageCircle, BrainCircuit, Heart } from 'lucide-react';

const GhostwritingPage: React.FC = () => {
  const services = [
    {
      title: 'Business & Thought Leadership with Western Publish',
      description: 'Western Publish helps you establish your authority and share your expertise with a professionally written book that builds your brand and solidifies your legacy.',
      features: ['In-depth industry research', 'Capture your unique voice', 'Structure complex ideas clearly', 'Position you as an expert'],
      icon: BrainCircuit,
    },
    {
      title: 'Memoir & Autobiography by Western Publish',
      description: 'With Western Publish, you can tell your life story in a compelling narrative that honors your experiences and preserves your legacy for generations to come.',
      features: ['Sensitive and in-depth interviews', 'Authentic voice capturing', 'Craft a captivating story arc', 'Preserve your personal legacy'],
      icon: Heart,
    },
    {
      title: 'Fiction & Story Development at Western Publish',
      description: 'Bring your imaginative worlds to life with Western Publish. We help you develop intricate plots and unforgettable characters that captivate readers from the first page to the last.',
      features: ['Collaborative plot development', 'Engaging character creation', 'Genre-specific storytelling', 'From concept to full manuscript'],
      icon: BookOpen,
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Strategy with Western Publish',
      description: 'We begin with deep-dive interviews to understand your vision, voice, and goals for the book.',
    },
    {
      step: 2,
      title: 'Outline & Structure by Western Publish',
      description: 'Our team creates a comprehensive, chapter-by-chapter outline for your approval, ensuring the structure is solid before writing begins.',
    },
    {
      step: 3,
      title: 'Collaborative Writing at Western Publish',
      description: 'Your ghostwriter crafts the manuscript, delivering chapters for your feedback and revisions in a collaborative process.',
    },
    {
      step: 4,
      title: 'Editing & Polishing with Western Publish',
      description: 'Once the manuscript is complete, it undergoes professional editing and proofreading to ensure it meets the highest publishing standards.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Innovations',
      content: "Western Publish didn't just write a book; they captured my voice and vision perfectly. Their process was seamless, professional, and the final product has been a huge asset for my brand.",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Retired Military Officer',
      content: 'Telling my story was a deeply personal journey, and the Western Publish ghostwriter handled it with incredible respect and skill. They brought my memoir to life in a way I never could have alone.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Healthcare Professional',
      content: 'The Western Publish team transformed my complex ideas into an accessible and engaging self-help book. Their expertise in structuring content for reader impact was invaluable.',
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
        <title>Professional Ghostwriting Services | Expert Book Writers - Western Publish</title>
        <meta name="description" content="Turn your idea into a professionally written book with Western Publish's expert ghostwriting services. We specialize in business books, memoirs, fiction, and more, capturing your unique voice and vision perfectly." />
        <meta name="keywords" content="ghostwriting services, professional ghostwriter, hire a ghostwriter, book writing services, memoir writer, business book writer, fiction ghostwriter, autobiography writer" />
        <link rel="canonical" href="https://westernpublish.com/services/ghostwriting" />
        <meta property="og:title" content="Professional Ghostwriting Services | Expert Book Writers - Western Publish" />
        <meta property="og:description" content="Turn your idea into a professionally written book with Western Publish's expert ghostwriting services. We specialize in business books, memoirs, fiction, and more, capturing your unique voice and vision perfectly." />
        <meta property="og:url" content="https://westernpublish.com/services/ghostwriting" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ghostwriting Services",
            "provider": {
              "@type": "Organization",
              "name": "Western Publish",
              "url": "https://westernpublish.com"
            },
            "description": "Professional ghostwriting services for books, including business books, memoirs, fiction, and autobiographies.",
            "areaServed": "Worldwide",
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "3",
              "offers": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business & Thought Leadership Ghostwriting",
                    "description": "Establish your authority and share your expertise with a professionally written book that builds your brand."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Memoir & Autobiography Ghostwriting",
                    "description": "Tell your life story in a compelling narrative that honors your experiences and preserves your legacy."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fiction & Story Development",
                    "description": "Bring your imaginative worlds to life with expert plot and character development."
                  }
                }
              ]
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Ghostwriting Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Business Books",
                  "itemListElement": ["Industry Research", "Brand Development", "Expert Positioning"]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Memoirs",
                  "itemListElement": ["Personal Interviews", "Legacy Preservation", "Story Development"]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Fiction",
                  "itemListElement": ["Plot Development", "Character Creation", "World Building"]
                }
              ]
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Sarah Johnson",
                "jobTitle": "CEO, Tech Innovations"
              },
              "reviewBody": "Western Publish didn't just write a book; they captured my voice and vision perfectly. The process was seamless, professional, and the final product has been a huge asset for my brand."
            }
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
                <PenTool className="h-10 w-10 text-blue-400 mr-4" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Western Publish's Ghostwriting Services
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                At Western Publish, we believe every great idea deserves a powerful voice. Our professional ghostwriters are masters of their craft, dedicated to transforming your concepts into a powerful, polished book that reflects your unique perspective and vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your Book
                </Link>
                <Link 
                  to="#process" 
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Our Process
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
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ghostwriter collaborating with a client" 
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">How Western Publish Writes Your Story</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Western Publish specializes in a range of genres, ensuring your project is handled by a writer with deep, relevant expertise and a genuine passion for your subject matter.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
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
                    Discuss Your Project
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">The Western Publish Ghostwriting Process</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              At Western Publish, we follow a transparent, four-step collaborative process that guarantees your vision is realized to the highest standard.
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
              {process.map((step) => (
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Why Partner With Western Publish?</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: Users, title: "Vetted Professionals", desc: "At Western Publish, our writers are not just skilled; they are seasoned professionals with years of experience and a portfolio of published works." },
              { icon: MessageCircle, title: "Collaborative Spirit", desc: "Western Publish fosters a collaborative spirit. We work with you, not just for you, ensuring your feedback is integral at every stage." },
              { icon: Target, title: "Your Voice, Perfected", desc: "The core of our talent at Western Publish lies in capturing your unique voice and making it shine on the page, creating a truly authentic work." },
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Success Stories</h2>
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
          <Award className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold mb-6">Ready to Tell Your Story with Western Publish?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Your book is waiting to be written. Let Western Publish start the conversation and turn your idea into a published reality.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-2xl"
          >
            Schedule a Free Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default GhostwritingPage;