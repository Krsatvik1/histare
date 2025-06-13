'use client';

import React from 'react'
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
    <div>
      <Navbar/>
          <Hero/>
          <Elephant/>
          <Work/>
          <Interest/>
          <Programe/>
          <Partnership/>
          <Testimonial/>
          <Footer/>
    </div>
  )
}

export default Home;
