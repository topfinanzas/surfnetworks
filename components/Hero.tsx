import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity, Globe } from 'lucide-react';
import { Button } from './Button';
import { HERO_CONTENT } from '../constants';
import { WaveDivider } from './WaveDivider';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 md:pb-48 overflow-hidden bg-gradient-to-br from-surf-deep to-surf-dark">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] left-[5%] w-96 h-96 bg-surf-crest/10 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-surf-foam/10 rounded-full blur-3xl" 
        />
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[20%] text-surf-foam/20"
        >
          <Activity size={48} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[35%] left-[15%] text-surf-crest/20"
        >
          <Globe size={64} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          style={{ opacity }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-surf-foam text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-surf-foam animate-pulse"></span>
            Next-Gen Programmatic Networks
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-7xl leading-tight text-white mb-6"
          >
            Surfing the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-surf-foam to-surf-crest">
              Data Wave
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              icon={<ArrowRight size={20} />} 
              onClick={() => scrollToSection('services')}
            >
              {HERO_CONTENT.cta}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Abstract Visual / Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
           <div className="relative w-full aspect-square">
              {/* Isometric-style layers representing stack */}
              <motion.div 
                animate={{ translateY: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-surf-deep to-surf-crest opacity-20 rounded-3xl transform rotate-6 border border-white/10"
              />
              <motion.div 
                animate={{ translateY: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-bl from-surf-crest to-surf-foam opacity-20 rounded-3xl transform -rotate-3 border border-white/10"
              />
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white/5 flex items-center justify-center">
                 {/* Inner Content - Abstract chart */}
                 <div className="w-3/4 h-3/4 relative">
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-surf-crest/40 to-transparent rounded-b-xl"></div>
                    <svg className="w-full h-full text-surf-foam" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,80 C20,70 40,90 60,50 S80,10 100,20 V100 H0 Z" fill="currentColor" fillOpacity="0.3" />
                        <path d="M0,80 C20,70 40,90 60,50 S80,10 100,20" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>

      <WaveDivider color="#F8F9FA" />
    </section>
  );
};
