import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import SummerCamp from './components/SummerCamp';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Programs />
      <SummerCamp />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}