'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


// Main Page Component
export default function NowAndBeyondSection() {
  return (
    <div className='bg-white'>
      <div className="min-h-screen text-black px-4 py-12 flex flex-col items-center">
        {/* Navbar */}
        <Navbar />

        {/* Logo & Tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/images/program/now.png"
            alt="Now and Beyond"
            width={500}
            height={500}
            className="mb-4"
          />
          <div className="text-sm md:text-base font-light text-black">
            <p>A window into different worlds</p>
            <p>The ultimate postmodernism</p>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl text-sm md:text-base font-light leading-relaxed text-black px-4">
          <p>
            Now and Beyond emerges as a visionary platform dedicated to nurturing creators of tomorrow through
            tech-based artistic expressions. This smart program celebrates complete artistic independence,
            empowering artists to explore new frontiers in New Media, Digital Art, Sonic Art, Interactive Art,
            Video Installations, Multimedia, Meta Media, Digital Sculpture, Experimental Cinema, and beyond.
            By bridging the gap between tradition and innovation, Now and Beyond inspires a new generation of
            visionaries to redefine artistic boundaries and reshape cultural narratives. It envisions a dynamic
            landscape where creativity flourishes through interactive experiences, pushing the limits of
            expression and inviting audiences to engage deeply with evolving forms of artistic expression.
            Through curated exhibitions and immersive showcases, Now and Beyond invites us to envision a future
            where art transcends mediums, forging connections and sparking conversations that resonate far
            beyond the present moment.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
