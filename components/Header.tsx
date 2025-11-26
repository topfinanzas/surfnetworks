import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surf-deep/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-surf-crest p-2 rounded-lg group-hover:bg-surf-foam transition-colors">
             <Waves className="text-white w-6 h-6" />
          </div>
          <span className={`font-display font-bold text-2xl tracking-tight ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            SurfNetworks
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                isScrolled ? 'text-gray-200 hover:text-white' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-surf-foam transition-all group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 rounded-full bg-surf-crest text-white text-sm font-semibold hover:bg-surf-foam hover:text-surf-deep transition-all shadow-lg hover:shadow-surf-foam/50"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surf-deep border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-surf-foam"
                >
                  {item.label}
                </a>
              ))}
              <a 
                 href="#contact"
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="text-center px-5 py-3 rounded-lg bg-surf-crest text-white font-semibold"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};