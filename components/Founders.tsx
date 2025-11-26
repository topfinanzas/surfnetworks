
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export const Founders: React.FC = () => {
  return (
    <section className="py-20 bg-surf-pearl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-surf-deep"
          >
            Leadership
          </motion.h2>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-[#1A2233] rounded-2xl p-8 max-w-sm w-full shadow-2xl border border-gray-800"
          >
            <div className="flex flex-col items-center">
              <div className="mb-6 relative">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#2A3449] shadow-lg">
                  <img 
                    src="https://media.topfinanzas.com/images/surfnetworks/francis-lock.webp" 
                    alt="Francis Lock" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Francis Lock</h3>
              
              <div className="text-center mb-8">
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Digital media strategy, commercialization, and advertising. Entrepreneur.
                </p>
                <p className="text-sm leading-relaxed text-gray-300">
                  <strong className="text-[#3E92CC]">TOP Focus:</strong> buy-side Performance Advertising, networks, and data analytics.
                </p>
              </div>

              <a 
                href="https://www.linkedin.com/in/francislock/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-[#2D64BC] hover:bg-[#245299] text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>LinkedIn</span>
                  <div className="bg-white rounded-sm p-0.5">
                    <Linkedin size={14} className="text-[#2D64BC] fill-current" />
                  </div>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
