import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Waves, Linkedin, Twitter } from 'lucide-react';
import { Button } from './Button';
import { FOOTER_LINKS } from '../constants';
import { WaveDivider } from './WaveDivider';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-surf-deep text-white relative pt-32 md:pt-48 pb-8">
      <WaveDivider position="top" color="#FFFFFF" className="-mt-1" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-surf-crest to-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl transform -translate-y-12 mb-12 relative overflow-hidden">
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
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="bg-white/10 p-2 rounded-lg">
                 <Waves className="w-6 h-6 text-surf-foam" />
               </div>
               <span className="font-display font-bold text-2xl">SurfNetworks</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Optimizing digital landscapes through data-driven content and programmatic networks.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-surf-crest transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-surf-crest transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-surf-crest transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-surf-foam transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-surf-foam transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-surf-foam transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-surf-foam transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-surf-foam transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SurfNetworks, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};