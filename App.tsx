
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { AboutUs } from './components/AboutUs';
import { Founders } from './components/Founders';
import { HowItWorks } from './components/HowItWorks';
import { Metrics } from './components/Metrics';
import { Portfolio } from './components/Portfolio';
import { ContactFooter } from './components/ContactFooter';
import { Terms } from './components/Terms';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CookiePolicy } from './components/CookiePolicy';

const LandingPage: React.FC = () => (
  <>
    <Hero />
    <ValueProposition />
    <AboutUs />
    <Founders />
    <HowItWorks />
    <Metrics />
    <Portfolio />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative w-full min-h-screen bg-surf-pearl overflow-hidden selection:bg-surf-crest selection:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <ContactFooter />
      </div>
    </Router>
  );
};

export default App;
