import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { HowItWorks } from './components/HowItWorks';
import { Metrics } from './components/Metrics';
import { Portfolio } from './components/Portfolio';
import { ContactFooter } from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-surf-pearl overflow-hidden selection:bg-surf-crest selection:text-white">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <Metrics />
        <Portfolio />
        <ContactFooter />
      </main>
    </div>
  );
};

export default App;