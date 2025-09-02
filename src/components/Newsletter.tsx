import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Mail className="h-12 w-12 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-extrabold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest publishing industry insights, marketing tips, and exclusive offers from Western Publish.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form 
            name="newsletter" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            className="max-w-lg mx-auto"
            action="/?success=true"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <div style={{ display: 'none' }}>
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
