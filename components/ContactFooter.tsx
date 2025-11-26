import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Instagram, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { FOOTER_LINKS, NAV_ITEMS } from '../constants';
import { WaveDivider } from './WaveDivider';

export const ContactFooter: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-surf-deep text-white relative pt-32 md:pt-48 pb-8">
      <WaveDivider position="top" color={isHome ? "#FFFFFF" : "#F8F9FA"} className="-mt-1" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-surf-crest to-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl transform -translate-y-12 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Catch the Wave?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join us in redefining digital advertising. Let's discuss how SurfNetworks can optimize your programmatic strategy.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-full bg-white text-surf-deep placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-surf-foam flex-grow"
              />
              <Button variant="white" icon={<ArrowRight size={18} />}>
                Connect
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="mb-6">
               <img src="https://media.topfinanzas.com/images/surfnetworks/logo-surfnetworks-clear.webp" alt="SurfNetworks" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Optimizing digital landscapes through data-driven content and programmatic networks.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-surf-crest transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-surf-foam transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 hover:text-surf-foam transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SurfNetworks, Inc. All rights reserved.</p>
        </div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-surf-crest text-white rounded-full shadow-lg flex items-center justify-center hover:bg-surf-foam hover:text-surf-deep transition-colors"
            aria-label="Back to Top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};