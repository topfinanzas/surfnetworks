import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, BarChart3, DollarSign } from 'lucide-react';
import { WaveDivider } from './WaveDivider';
import { StepItem } from '../types';

const steps: StepItem[] = [
  {
    title: "Analyze & Identify",
    description: "We identify high-value niche markets in finance, travel, and insurance using advanced SEO metrics.",
    icon: Search
  },
  {
    title: "Create & Optimize",
    description: "We deploy mobile-first content portals populated with useful, high-intent information.",
    icon: PenTool
  },
  {
    title: "Distribute & Engage",
    description: "Users are acquired through organic search and optimized inbound marketing funnels.",
    icon: BarChart3
  },
  {
    title: "Monetize",
    description: "Programmatic networks deliver relevant ads, maximizing returns while maintaining user trust.",
    icon: DollarSign
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="pt-32 pb-48 md:pt-48 md:pb-64 bg-surf-deep text-white relative overflow-hidden">
      <WaveDivider position="top" color="#F8F9FA" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-surf-foam font-semibold tracking-wider uppercase text-sm">Our Methodology</span>
          <h2 className="text-4xl font-bold font-display mt-2">The Flow of Success</h2>
        </motion.div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-surf-dark/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-surf-foam/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-surf-crest to-surf-deep rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                  <step.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-surf-foam">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <WaveDivider position="bottom" color="#F8F9FA" />
    </section>
  );
};