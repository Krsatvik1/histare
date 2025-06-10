'use client';

import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/landing/hero';
import Elephant from './components/landing/elephant';
import Footer from './components/landing/footer';


function Home() {
  return (
    <div>
      <Navbar/>
          <Hero/>
          <Elephant/>
          <Footer/>
    </div>
  )
}

export default Home;
