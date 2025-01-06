import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { About } from './components/About';
import { Carousel } from './components/Carousel';
import { Plans } from './components/Plans';
import { MasterSection } from './components/MasterSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <About />
      <Carousel />
      <MasterSection />
      <Plans />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
