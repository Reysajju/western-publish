import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, Target, Heart, Lightbulb, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Stories',
      description: 'We believe every story deserves to be told and every author deserves professional support to bring their vision to life.',
    },
    {
      icon: Award,
      title: 'Excellence in Craft',
      description: 'Our team of seasoned professionals maintains the highest standards in writing, editing, publishing, and marketing.',
    },
    {
      icon: Users,
      title: 'Author-Centric Approach',
      description: 'Your success is our success. We work closely with each author to understand their unique voice and goals.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes, from manuscript quality to market performance and reader engagement.',
    },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      bio: 'Former publishing executive with 15+ years experience at major publishing houses. Led successful launches of 50+ bestsellers.',
      expertise: ['Publishing Strategy', 'Author Development', 'Market Analysis'],
      img: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      email: 'sarah@westernpublish.com',
    },
    {
      name: 'Rey Garcia',
      role: 'Senior Strategist',
      bio: 'A master of narrative and strategy, Rey helps authors craft compelling stories and build powerful author platforms that resonate with audiences.',
      expertise: ['Narrative Strategy', 'Author Platforming', 'Content Development'],
      img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      email: 'garcia@westernpublish.com',
    },
    {
      name: 'Emily Chen',
      role: 'Marketing Director',
      bio: 'Digital marketing specialist who has helped authors build six-figure businesses through strategic book marketing campaigns.',
      expertise: ['Digital Marketing', 'Book Launches', 'Author Branding'],
      img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      email: 'emily@westernpublish.com',
    },
    {
      name: 'Marques William',
      role: 'Publishing Manager',
      bio: "A detail-oriented manager with a knack for navigating the complexities of book distribution and production. Marques ensures every author's book meets industry standards and reaches its audience efficiently.",
      expertise: ['Production Management', 'Global Distribution', 'Quality Assurance'],
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      email: 'marques@westernpublish.com',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Who is Western Publish? | Our Story, Mission, and Expert Publishing Team</title>
        <meta name="description" content="Western Publish is your complete book publishing partner. With over 500 published books and a 98% client satisfaction rate, our expert team delivers professional ghostwriting, editing, publishing, and marketing services to turn your manuscript into a bestseller." />
        <meta name="keywords" content="western publish team, book publishing experts, professional editors, bestselling ghostwriters, book marketing specialists, author services company, publishing industry leaders, book publishing success stories" />
        <link rel="canonical" href="https://westernpublish.com/about" />
        <meta property="og:title" content="Who is Western Publish? | Our Story, Mission, and Expert Publishing Team" />
        <meta property="og:description" content="Western Publish is your complete book publishing partner. With over 500 published books and a 98% client satisfaction rate, our expert team delivers professional ghostwriting, editing, publishing, and marketing services to turn your manuscript into a bestseller." />
        <meta property="og:url" content="https://westernpublish.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Western Publish",
            "alternateName": "Western Publishing LLC",
            "description": "Professional book publishing and author services company with expertise in ghostwriting, editing, publishing, and marketing.",
            "foundingDate": "2018",
            "url": "https://westernpublish.com",
            "logo": "https://westernpublish.com/favicon.svg",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "20+"
            },
            "knowsAbout": [
              "Book Publishing",
              "Ghostwriting",
              "Book Marketing",
              "Book Editing",
              "Author Services"
            ],
            "award": [
              {
                "@type": "Award",
                "name": "50+ Bestselling Books"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5"
            },
            "employees": [
              {
                "@type": "Person",
                "name": "Sarah Mitchell",
                "jobTitle": "Founder & CEO",
                "description": "Former publishing executive with 15+ years experience at major publishing houses.",
                "email": "sarah@westernpublish.com"
              },
              {
                "@type": "Person",
                "name": "Emily Chen",
                "jobTitle": "Marketing Director",
                "description": "Digital marketing specialist with expertise in author branding and book launches.",
                "email": "emily@westernpublish.com"
              }
            ],
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Satisfied Author"
              },
              "reviewBody": "Western Publish transformed my manuscript into a bestseller. Their professional team provided exceptional service at every step."
            }
          })}
        </script>
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
            <BookOpen className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tighter">
              Who is Western Publish?
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We are your dedicated literary partner, committed to turning author's dreams into bestselling realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                What is the Story Behind Western Publish?
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Western Publish was founded in 2018 to solve a key problem for authors: navigating the complex publishing world. We noticed that talented writers were often stuck between the high barriers of traditional publishing and the overwhelming challenges of self-publishing.
                </p>
                <p>
                  Our goal was to create a supportive ecosystem. We offer everything an author needs—professional ghostwriting, editing, publishing, and marketing—all in one place. This integrated approach ensures a smooth journey from manuscript to market, maintaining high quality at every step.
                </p>
                <p>
                  Since our founding, we have empowered over 500 authors to see their books published, with many hitting bestseller lists and building successful careers. For us, success isn't just about sales; it's about bringing important stories to the world and helping authors achieve their dreams.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 text-center shadow-xl">
                <Lightbulb className="h-20 w-20 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Our Mission?</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mission is to make professional publishing accessible to all authors. We provide top-tier services, expert advice, and the tools needed to share their stories with a global audience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build with our authors.
            </p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2"
                variants={fadeIn}
              >
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans who bring decades of publishing expertise and a passion for author success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.img} 
                  alt={`${member.name} - ${member.role} at Western Publish | Expert in ${member.expertise.join(', ')} | Professional Book Publishing Services`} 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-md border-4 border-white"
                />
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-sm text-gray-500 hover:text-blue-600 flex items-center justify-center gap-2 mb-4">
                      <Mail className="h-4 w-4" />
                      <span>{member.email}</span>
                    </a>
                  )}
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                </div>
                <div className="space-y-2 mt-auto">
                  <h4 className="font-semibold text-gray-900">Expertise:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to author success and publishing excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Books Published' },
              { number: '50+', label: 'Bestsellers Created' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '7', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl lg:text-6xl font-bold text-blue-300 mb-4">{stat.number}</div>
                <div className="text-blue-100 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's work together to transform your manuscript into a bestselling book that reaches readers worldwide.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center shadow-lg hover:shadow-xl"
          >
            Start Your Publishing Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;