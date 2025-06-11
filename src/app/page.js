'use client';

import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/landing/hero';
import Elephant from './components/landing/elephant';
import Footer from './components/landing/footer';
import Testimonial from './components/landing/testimonial';
import Partnership from './components/landing/partnership';


function Home() {
  return (
    <div>
      <Navbar/>
          <Hero/>
          <Elephant/>
          <Partnership/>
          <Testimonial/>
          <Footer/>
    </div>
  )
}

export default Home;
