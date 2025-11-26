import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Anchor, Smartphone, Layers } from 'lucide-react';
import { FeatureCardProps } from '../types';

const features: FeatureCardProps[] = [
  {
    title: "Programmatic Optimizations",
    description: "Maximize advertising returns through intelligent, automated network adjustments tailored to niche markets.",
    icon: Zap,
    delay: 0.1
  },
  {
    title: "SEO & Inbound Strategy",
    description: "Top, middle, and bottom-of-funnel content strategies designed to capture organic traffic and reduce acquisition costs.",
    icon: Target,
    delay: 0.2
  },
  {
    title: "High-Performance Content",
    description: "Mobile-first portals like KardTrust that exceed global CTR averages through superior UX and relevant data.",
    icon: TrendingUp,
    delay: 0.3
  },
  {
    title: "Niche Market Focus",
    description: "Specialized networks in finance, insurance, travel, and lifestyle categories for targeted audience reach.",
    icon: Anchor,
    delay: 0.4
  },
  {
    title: "Mobile-First Design",
    description: "Optimized experiences for the mobile web, ensuring engagement where users spend most of their time.",
    icon: Smartphone,
    delay: 0.5
  },
  {
    title: "Full-Funnel Integration",
    description: "Seamlessly connecting user acquisition, engagement, and monetization into a unified revenue engine.",
    icon: Layers,
    delay: 0.6
  }
];

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-surf-crest/10 transition-all group"
    >
      <div className="w-14 h-14 bg-surf-pearl rounded-xl flex items-center justify-center mb-6 group-hover:bg-surf-deep transition-colors duration-300">
        <Icon className="w-7 h-7 text-surf-deep group-hover:text-surf-foam transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-surf-deep mb-3 font-display">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export const ValueProposition: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surf-pearl relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold font-display text-surf-deep mb-4"
          >
            Navigating the Digital Ocean
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            We combine deep technical expertise with creative content strategies to deliver value for both users and advertisers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};