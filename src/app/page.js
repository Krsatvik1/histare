'use client';

import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/landing/hero';
import Elephant from './components/landing/elephant';
import Footer from './components/landing/footer';
import Testimonial from './components/landing/testimonial';
import Partnership from './components/landing/partnership';
import Programe from './components/landing/programe';
import Work from './components/landing/work';
import Interest from './components/landing/interest';

function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Navbar />
      
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <Elephant />
      </div>
      <div className="snap-start">
        <Work />
      </div>
      <div className="snap-start">
        <Interest />
      </div>
      <div className="snap-start">
        <Programe />
      </div>
      <div className="snap-start">
        <Partnership />
      </div>
      <div className="snap-start">
        <Testimonial />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
