import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, Moon, Sun, Sparkles } from 'lucide-react';
import CalendlyButton from './CalendlyButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Newsletter from './Newsletter';
import ParticleBackground from './ParticleBackground';
import ModernButton from './ModernButton';
import FloatingElements from './FloatingElements';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { 
      name: 'Services', 
      href: '#', 
      current: location.pathname.startsWith('/services'),
      dropdown: [
        { name: 'Editing', href: '/services/editing' },
        { name: 'Fiction Writing', href: '/services/fiction-writing' },
        { name: 'Marketing', href: '/services/marketing' },
        { name: 'Non Fiction Writing', href: '/services/non-fiction-writing' },
        { name: 'Publishing', href: '/services/publishing' },
        { name: 'Story Book Writing', href: '/services/story-book-writing' },
        { name: 'Audio Book', href: '/services/audio-book' },
        { name: 'Biography Writing', href: '/services/biography-writing' },
        { name: 'Book Trailer', href: '/services/book-trailer' },
        { name: 'Children Book Writing', href: '/services/children-book-writing' },
        { name: 'Designing', href: '/services/designing' },
        { name: 'Google Ads', href: '/services/google-ads' },
        { name: 'Facebook & Instagram Ads', href: '/services/facebook-instagram-ads' },
        { name: 'TikTok Ads', href: '/services/tiktok-ads' },
        { name: 'Amazon Ads', href: '/services/amazon-ads' },
        { name: 'LinkedIn Ads', href: '/services/linkedin-ads' },
        { name: 'Content Marketing', href: '/services/content-marketing' },
        { name: 'Social Media Presence', href: '/services/social-media-presence' },
        { name: 'Email Marketing', href: '/services/email-marketing' },
        { name: 'Podcast / YouTube Appearances', href: '/services/podcast-youtube-appearances' },
        { name: 'Goodreads & Book Reviews', href: '/services/goodreads-book-reviews' },
        { name: 'Press Releases', href: '/services/press-releases' },
        { name: 'Virtual Book Launch', href: '/services/virtual-book-launch' },
        { name: 'Collaborations', href: '/services/collaborations' },
        { name: 'Book Clubs', href: '/services/book-clubs' },
        { name: 'Email / Cold Outreach', href: '/services/email-cold-outreach' },
      ]
    },
    { name: 'Blog', href: '/blog', current: location.pathname === '/blog' || location.pathname.startsWith('/blog/') },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950' : 'bg-gradient-to-br from-secondary-50 via-white to-primary-50'}`}>
      <ParticleBackground theme={isDarkMode ? 'dark' : 'light'} />
      <FloatingElements className="fixed inset-0 z-0" />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Western Publish",
            "url": "https://westernpublish.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://westernpublish.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Western Publish",
              "logo": "https://westernpublish.com/favicon.svg"
            }
          })}
        </script>
      </Helmet>

      {/* Modern Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'glass backdrop-blur-xl shadow-glass' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-18">
            {/* Modern Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.div 
                  className="relative p-2 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple-600 shadow-glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <BookOpen className="h-6 w-6 text-white" />
                  <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent-orange-500 animate-pulse" />
                </motion.div>
                <span className="text-xl font-display font-bold gradient-text-primary" itemProp="name">
                  Western Publish
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <motion.div 
                  key={item.name} 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        item.current 
                          ? 'text-primary-400 bg-white/10' 
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}>
                        {item.name}
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 glass rounded-xl shadow-glass border border-white/20 py-2 z-50"
                          >
                            <div className="grid grid-cols-1 gap-1 px-2 max-h-80 overflow-y-auto">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        item.current 
                          ? 'text-primary-400 bg-white/10' 
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>

              <ModernButton variant="gradient" size="md" className="ml-4">
                Schedule Meeting →
              </ModernButton>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
              
              <motion.button
                type="button"
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Modern Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden glass border-t border-white/20"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigation.map((item) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="px-4 py-2 text-lg font-medium text-white/90 border-b border-white/20">
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-1 max-h-40 overflow-y-auto">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                          item.current
                            ? 'text-primary-400 bg-white/10'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                <motion.div 
                  className="pt-4 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <ModernButton 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Schedule Meeting →
                  </ModernButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content with modern wrapper */}
      <main className="relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </main>

      <Newsletter />

      {/* Modern Footer */}
      <motion.footer 
        className="relative z-10 mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="glass border-t border-white/20">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple-600 shadow-glow">
                    <BookOpen className="h-6 w-6 text-white" />
                    <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent-orange-500 animate-pulse" />
                  </div>
                  <span className="text-2xl font-display font-bold gradient-text-primary">Western Publish</span>
                </motion.div>
                <p className="text-white/70 mb-6 text-lg leading-relaxed">
                  From ghostwriting to publishing and marketing, we cover everything your literary journey needs with cutting-edge innovation.
                </p>
                <div className="text-white/60 space-y-2">
                  <p className="flex items-center space-x-2">
                    <span className="text-primary-400">📞</span>
                    <span>+1 (505) 396-2071 ext 800</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-primary-400">✉️</span>
                    <span>publish@westernpublish.com</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-primary-400">📍</span>
                    <span>Albuquerque, NM</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/90 tracking-wider uppercase mb-4">
                  Services
                </h3>
                <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                  {(navigation.find(nav => nav.name === 'Services')?.dropdown || []).slice(0, 8).map((service) => (
                    <motion.div 
                      key={service.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    >
                      <Link 
                        to={service.href} 
                        className="text-white/70 hover:text-primary-400 text-sm transition-colors duration-200 block"
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white/90 tracking-wider uppercase mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'About', href: '/about' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Contact', href: '/contact' },
                    { name: 'Privacy Policy', href: '/privacy' },
                    { name: 'Terms of Service', href: '/terms' },
                    { name: 'Refund Policy', href: '/refund' },
                  ].map((item) => (
                    <li key={item.name}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      >
                        <Link 
                          to={item.href} 
                          className="text-white/70 hover:text-primary-400 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <motion.div 
              className="mt-12 border-t border-white/20 pt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-white/60 text-sm">
                © 2025 Western Publish. All rights reserved. Built with modern technology for the future of publishing.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;