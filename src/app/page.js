'use client';

import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/landing/hero';
import Elephant from './components/landing/elephant';


function Home() {
  return (
    <div>
      <Navbar/>
          <Hero/>
          <Elephant/>
    </div>
  )
}

export default Home;
