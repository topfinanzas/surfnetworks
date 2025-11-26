import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-20 w-1/3 h-full bg-surf-pearl skew-x-12 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-3 py-1 bg-surf-foam/20 text-surf-deep rounded-full text-sm font-bold mb-4">
              Featured Case Study
            </div>
            <h2 className="text-4xl font-bold font-display text-surf-deep mb-6">
              KardTrust: Setting the Standard
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our flagship implementation, <span className="font-semibold text-surf-crest">KardTrust.com</span>, demonstrates the power of our optimization model. By focusing on high-intent financial queries, we achieved click-through rates significantly exceeding the global industry average.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Optimized for Financial & Insurance Sectors",
                "Mobile-First UX Architecture",
                "Advanced SEO & Keyword Strategy",
                "High-Yield Programmatic Ad Integration"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-surf-crest w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              onClick={() => window.open('https://kardtrust.com', '_blank')}
              icon={<ExternalLink size={18} />}
            >
              Visit Portal
            </Button>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-100 bg-white">
              {/* Abstract representation of the website since we don't have a real screenshot */}
              <div className="aspect-video bg-gray-50 flex flex-col relative">
                {/* Header */}
                <div className="h-12 bg-white border-b flex items-center px-4 justify-between">
                   <div className="w-24 h-4 bg-gray-200 rounded"></div>
                   <div className="flex gap-2">
                     <div className="w-16 h-4 bg-gray-100 rounded"></div>
                     <div className="w-16 h-4 bg-gray-100 rounded"></div>
                   </div>
                </div>
                {/* Hero */}
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-400 p-8 flex items-center">
                   <div className="w-2/3 space-y-3">
                      <div className="w-full h-6 bg-white/20 rounded"></div>
                      <div className="w-3/4 h-6 bg-white/20 rounded"></div>
                      <div className="w-32 h-8 bg-white rounded mt-4"></div>
                   </div>
                </div>
                {/* Content Grid */}
                <div className="p-6 grid grid-cols-3 gap-4">
                   <div className="h-32 bg-white shadow-sm rounded p-3 space-y-2">
                      <div className="w-8 h-8 bg-blue-100 rounded mb-2"></div>
                      <div className="w-full h-3 bg-gray-100 rounded"></div>
                      <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                   </div>
                   <div className="h-32 bg-white shadow-sm rounded p-3 space-y-2">
                      <div className="w-8 h-8 bg-green-100 rounded mb-2"></div>
                      <div className="w-full h-3 bg-gray-100 rounded"></div>
                      <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                   </div>
                   <div className="h-32 bg-white shadow-sm rounded p-3 space-y-2">
                      <div className="w-8 h-8 bg-purple-100 rounded mb-2"></div>
                      <div className="w-full h-3 bg-gray-100 rounded"></div>
                      <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                   </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-10"
              >
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full">
                     <TrendingUp className="text-green-600 w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 uppercase font-semibold">CTR Rate</p>
                     <p className="text-xl font-bold text-gray-900">+15.4%</p>
                   </div>
                 </div>
              </motion.div>
            </div>
            
            {/* Decorative blob behind */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-surf-crest/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};