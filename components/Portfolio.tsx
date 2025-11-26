import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const Portfolio: React.FC = () => {
  // Brand color for KardTrust
  const KARDTRUST_RED = '#dc2626';

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-20 w-1/3 h-full bg-surf-pearl skew-x-12 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-3 py-1 bg-red-50 text-[#dc2626] rounded-full text-sm font-bold mb-4">
              Featured Case Study
            </div>
            
            <div className="mb-6">
              <img 
                src="https://media.topfinanzas.com/images/kardtrust/kardtrust-logo-dark.png" 
                alt="KardTrust Logo" 
                className="h-10 mb-4 object-contain"
              />
              <h2 className="text-4xl font-bold font-display text-surf-deep">
                Setting the Standard
              </h2>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our flagship implementation, <span className="font-semibold text-[#dc2626]">KardTrust.com</span>, demonstrates the power of our optimization model. By focusing on high-intent financial queries, we achieved click-through rates significantly exceeding the global industry average.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Optimized for Financial & Insurance Sectors",
                "Mobile-First UX Architecture",
                "Advanced SEO & Keyword Strategy",
                "High-Yield Programmatic Ad Integration"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#dc2626]" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              onClick={() => window.open('https://kardtrust.com', '_blank')}
              icon={<ExternalLink size={18} />}
              className="!border-[#dc2626] !text-[#dc2626] hover:!bg-[#dc2626] hover:!text-white"
            >
              Visit Portal
            </Button>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-100 bg-white group cursor-pointer" onClick={() => window.open('https://kardtrust.com', '_blank')}>
              
              {/* Browser Mockup Header */}
              <div className="h-10 bg-white border-b flex items-center px-4 justify-between gap-4">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                   <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                 </div>
                 {/* Address Bar */}
                 <div className="flex-1 bg-gray-100 h-7 rounded flex items-center px-3 text-xs text-gray-500 font-medium overflow-hidden">
                    <img src="https://media.topfinanzas.com/images/kardtrust/favicon.png" alt="icon" className="w-4 h-4 mr-2" />
                    kardtrust.com
                 </div>
              </div>

              {/* Screenshot */}
              <div className="aspect-[16/10] bg-gray-50 relative overflow-hidden">
                 <img 
                    src="https://media.topfinanzas.com/images/kardtrust/screenshot.png" 
                    alt="KardTrust Website Interface" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                 />
              </div>

              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-10"
              >
                 <div className="flex items-center gap-3">
                   <div className="bg-red-50 p-2 rounded-full">
                     <TrendingUp className="text-[#dc2626] w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 uppercase font-semibold">CTR Rate</p>
                     <p className="text-xl font-bold text-gray-900">+15.4%</p>
                   </div>
                 </div>
              </motion.div>
            </div>
            
            {/* Decorative blob behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#dc2626]/20 to-surf-crest/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};