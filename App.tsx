import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { HowItWorks } from './components/HowItWorks';
import { Metrics } from './components/Metrics';
import { Portfolio } from './components/Portfolio';
import { ContactFooter } from './components/ContactFooter';
import { Terms } from './components/Terms';

const LandingPage: React.FC = () => (
  <>
    <Hero />
    <ValueProposition />
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
          </Routes>
        </main>
        <ContactFooter />
      </div>
    </Router>
  );
};

export default App;