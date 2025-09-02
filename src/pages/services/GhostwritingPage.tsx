import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { PenTool, BookOpen, Users, CheckCircle, Star, Award, Target, MessageCircle, BrainCircuit, Heart } from 'lucide-react';

const GhostwritingPage: React.FC = () => {
  const services = [
    {
      title: 'Business & Thought Leadership',
      description: 'Establish your authority and share your expertise with a professionally written book that builds your brand.',
      features: ['In-depth industry research', 'Capture your unique voice', 'Structure complex ideas clearly', 'Position you as an expert'],
      icon: BrainCircuit,
    },
    {
      title: 'Memoir & Autobiography',
      description: 'Tell your life story in a compelling narrative that honors your experiences and preserves your legacy.',
      features: ['Sensitive and in-depth interviews', 'Authentic voice capturing', 'Craft a captivating story arc', 'Preserve your personal legacy'],
      icon: Heart,
    },
    {
      title: 'Fiction & Story Development',
      description: 'Bring your imaginative worlds to life. We help you develop plots and characters that captivate readers.',
      features: ['Collaborative plot development', 'Engaging character creation', 'Genre-specific storytelling', 'From concept to full manuscript'],
      icon: BookOpen,
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Strategy',
      description: 'We begin with deep-dive interviews to understand your vision, voice, and goals for the book.',
    },
    {
      step: 2,
      title: 'Outline & Structure',
      description: 'Our team creates a comprehensive, chapter-by-chapter outline for your approval, ensuring the structure is solid before writing begins.',
    },
    {
      step: 3,
      title: 'Collaborative Writing',
      description: 'Your ghostwriter crafts the manuscript, delivering chapters for your feedback and revisions in a collaborative process.',
    },
    {
      step: 4,
      title: 'Editing & Polishing',
      description: 'Once the manuscript is complete, it undergoes professional editing and proofreading to ensure it meets the highest publishing standards.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Innovations',
      content: 'Western Publish didn\'t just write a book; they captured my voice and vision perfectly. The process was seamless, professional, and the final product has been a huge asset for my brand.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Retired Military Officer',
      content: 'Telling my story was a deeply personal journey, and the ghostwriter handled it with incredible respect and skill. They brought my memoir to life in a way I never could have alone.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Healthcare Professional',
      content: 'The team transformed my complex ideas into an accessible and engaging self-help book. Their expertise in structuring content for reader impact was invaluable.',
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
        <title>Professional Ghostwriting Services - Western Publish</title>
        <meta name="description" content="Turn your idea into a professionally written book. Our expert ghostwriting services cover business books, memoirs, fiction, and more, capturing your unique voice." />
        <meta name="keywords" content="ghostwriting services, professional ghostwriter, hire a ghostwriter, book writing services, memoir writer, business book writer" />
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
                <PenTool className="h-10 w-10 text-blue-400 mr-4" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Ghostwriting Services
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Have a story to tell or expertise to share? Our professional ghostwriters transform your ideas into a powerful, polished book that reflects your voice and vision.
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Your Story, Professionally Written</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in a range of genres, ensuring your project is handled by a writer with relevant expertise and a passion for your subject.
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Proven Ghostwriting Process</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              A transparent, four-step collaborative process that guarantees your vision is realized to the highest standard.
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
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Why Partner With Our Writers?</h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: Users, title: "Vetted Professionals", desc: "Our writers are seasoned professionals with years of experience and published works." },
              { icon: MessageCircle, title: "Collaborative Spirit", desc: "We work with you, not just for you. Your feedback is crucial at every stage." },
              { icon: Target, title: "Your Voice, Perfected", desc: "Our talent lies in capturing your unique voice and making it shine on the page." },
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
          <h2 className="text-4xl font-extrabold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Your book is waiting to be written. Let's start the conversation and turn your idea into a reality.
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