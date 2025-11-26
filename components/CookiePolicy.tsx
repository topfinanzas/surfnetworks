import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const CookiePolicy: React.FC = () => {
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
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-500 font-medium mb-8">
              Last Updated: October 26, 2025
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Surf Networks Inc. uses cookies to improve your experience on our website.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">2. How We Use Cookies</h2>
            <p>
              We use cookies to understand how you use our website and to improve your experience. This includes personalizing content and advertising, providing social media features, and analyzing traffic.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Strictly Necessary Cookies:</strong> These are essential for you to browse the website and use its features, such as accessing secure areas of the site.</li>
              <li><strong>Performance Cookies:</strong> These cookies collect information about how you use our website, for instance, which pages you go to most often. This data may be used to help optimize our website and make it easier for you to navigate.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make while browsing. For instance, we may store your geographic location in a cookie to ensure that we show you our website localized for your area.</li>
              <li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
            </ul>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">4. Managing Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-surf-crest hover:text-surf-deep">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-surf-crest hover:text-surf-deep">www.allaboutcookies.org</a>.
            </p>
            <p className="mt-4">
              Find out how to manage cookies on popular browsers:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><a href="https://support.google.com/accounts/answer/61416" target="_blank" rel="noopener noreferrer" className="text-surf-crest hover:text-surf-deep">Google Chrome</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-surf-crest hover:text-surf-deep">Microsoft Edge</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-surf-crest hover:text-surf-deep">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-surf-crest hover:text-surf-deep">Apple Safari</a></li>
            </ul>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">5. Changes to This Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We encourage you to review this policy periodically to stay informed about how we are using cookies.
            </p>

            <h2 className="text-surf-deep font-display font-bold mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
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
