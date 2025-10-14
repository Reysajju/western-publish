import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import CalendlyButton from './CalendlyButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Newsletter from './Newsletter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

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
    <div className="min-h-screen bg-primary">
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
      {/* Navigation */}
      <nav className="bg-dark shadow-lg sticky top-0 z-50 border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-accent-blue" />
                <span className="text-xl font-bold text-neutral-white" itemProp="name">Western Publish</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
                            <CalendlyButton 
                className="bg-accent-blue text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors duration-200"
                text="Schedule Meeting →"
              />
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 hover:text-accent-blue ${
                          item.current
                            ? 'text-accent-blue border-b-2 border-accent-blue'
                            : 'text-neutral-light hover:text-accent-blue'
                        }`}
                      >
                        <span>{item.name}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        className={`absolute top-full left-0 mt-1 w-64 bg-dark-light rounded-lg shadow-xl border border-secondary transition-all duration-300 z-50 max-h-96 overflow-y-auto ${
                          isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-neutral-light hover:bg-secondary hover:text-accent-blue first:rounded-t-lg last:rounded-b-lg transition-colors duration-200 border-b border-secondary/30 last:border-b-0"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent-blue ${
                        item.current
                          ? 'text-accent-blue border-b-2 border-accent-blue'
                          : 'text-neutral-light hover:text-accent-blue'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-light hover:text-accent-blue"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-dark-light border-t border-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-light border-t border-secondary">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <div className="px-3 py-2 text-base font-medium text-neutral-light border-b border-secondary">
                        {item.name}
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-6 py-2 text-sm text-neutral-medium hover:text-accent-blue hover:bg-secondary transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        item.current
                          ? 'text-accent-blue bg-secondary'
                          : 'text-neutral-medium hover:text-accent-blue hover:bg-secondary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/privacy"
                className="block px-3 py-2 text-base font-medium text-neutral-medium hover:text-accent-blue hover:bg-secondary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <div className="px-3 py-4">
                <CalendlyButton 
                  className="w-full bg-accent-blue text-white px-4 py-3 rounded-lg font-medium text-base hover:bg-blue-700 transition-colors duration-200 text-center"
                  text="Schedule a Call"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Newsletter />

      {/* Footer */}
      <footer className="bg-dark text-neutral-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-accent-blue" />
                <span className="text-xl font-bold">Western Publish</span>
              </div>
              <p className="text-neutral-medium mb-4">
                From ghostwriting to publishing and marketing, we cover everything your literary journey needs.
              </p>
              <div className="text-neutral-medium text-sm space-y-1">
                <p>📞 +1 (505) 396-2071 ext 800</p>
                <p>✉️ publish@westernpublish.com</p>
                <p>📍 Albuquerque, NM</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-light tracking-wider uppercase mb-4">
                Services
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-2">
                {(navigation.find(nav => nav.name === 'Services')?.dropdown || []).map((service) => (
                  <div key={service.name}>
                    <Link to={service.href} className="text-neutral-medium hover:text-accent-blue text-sm">
                      {service.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-light tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-neutral-medium hover:text-accent-blue">About</Link></li>
                <li><Link to="/blog" className="text-neutral-medium hover:text-accent-blue">Blog</Link></li>
                <li><Link to="/contact" className="text-neutral-medium hover:text-accent-blue">Contact</Link></li>
                <li><Link to="/privacy" className="text-neutral-medium hover:text-accent-blue">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-neutral-medium hover:text-accent-blue">Terms of Service</Link></li>
                <li><Link to="/refund" className="text-neutral-medium hover:text-accent-blue">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-secondary pt-8 text-center sm:text-left">
            <p className="text-neutral-medium text-sm text-center">
              © 2025 Western Publish. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;