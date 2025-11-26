
import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-surf-crest font-semibold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-surf-deep mb-8">
              Optimization is in our DNA
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg mx-auto text-gray-600 leading-relaxed"
          >
            <p className="mb-6">
              At <strong>SurfNetworks</strong>, we specialize in the architecture of digital value. Born from a desire to bridge the gap between high-intent users and premium advertisers, we have evolved into a sophisticated technology company that transforms data into action.
            </p>
            <p>
              Our approach is simple yet rigorous: we identify underserved niche markets in the financial, insurance, and lifestyle sectors, and we build robust, content-rich platforms to serve them. By leveraging proprietary programmatic networks and advanced data analytics, we ensure that every interaction delivers measurable results.
            </p>
            <p>
              We don't just participate in the digital economy; we optimize it. Whether through our owned-and-operated properties or our strategic partnerships, SurfNetworks is redefining what it means to connect in the digital age.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-surf-pearl rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-surf-foam/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
};
