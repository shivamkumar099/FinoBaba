import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Professionals } from './components/Professionals';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-16"> {/* Added padding-top to account for fixed header */}
        <Hero />
        <Services />
        <Professionals />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;