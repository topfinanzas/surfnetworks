import React from 'react';
import { motion } from 'framer-motion';
import { MetricItem } from '../types';

const metrics: MetricItem[] = [
  { value: "45", label: "Global CTR Increase", suffix: "%" },
  { value: "12", label: "Niche Markets Served", suffix: "+" },
  { value: "2M", label: "Monthly Users", suffix: "+" },
  { value: "98", label: "Ad Fill Rate", suffix: "%" },
];

export const Metrics: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-surf-pearl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-2"
              >
                <span className="text-5xl md:text-6xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-surf-deep to-surf-crest">
                  {metric.value}{metric.suffix}
                </span>
              </motion.div>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};