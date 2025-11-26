import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-surf-pearl min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-surf-deep mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-500 font-medium mb-8">
              Last Updated: October 26, 2025
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to SurfNetworks. These Terms of Service ("Terms") govern your use of our website and services provided by Surf Networks Inc. ("we," "us," or "our"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">2. Use of Services</h2>
            <p>
              SurfNetworks provides digital advertising optimization and content platform services. You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the website complies with all applicable laws and regulations.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">3. Intellectual Property</h2>
            <p>
              The content, features, and functionality of this website, including but not limited to text, graphics, logos, and software, are the exclusive property of Surf Networks Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">4. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">5. Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Surf Networks Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Panama, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mt-6 shadow-sm">
              <p className="font-bold text-surf-deep mb-2">Surf Networks Inc.</p>
              <p className="mb-1">Calle 50, Edificio BMW</p>
              <p className="mb-1">Esquina con Vía Porras</p>
              <p className="mb-4">Panamá</p>
              <p>Email: <a href="mailto:info@surfnetworks.com" className="text-surf-crest hover:text-surf-deep transition-colors">info@surfnetworks.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};