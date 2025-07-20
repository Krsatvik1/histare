'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function NowAndBeyondSection() {
  return (
    <div className="bg-white text-black h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth w-full">
      
      {/* Section 1 - Navbar + Logo + Caption */}
      <div className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8">
        <div className="w-full">
          <Navbar />
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/program/now.png"
            alt="Now and Beyond Logo"
            width={500}
            height={500}
            className="mb-4 p-14 w-80 h-80 md:w-[500px] md:h-[500px] object-contain"
          />
          <div className="text-sm md:text-base font-light">
            <p>A window into different worlds</p>
            <p>The ultimate postmodernism</p>
          </div>
        </div>
      </div>

      {/* Section 2 - Description Paragraph */}
      <div className="snap-start min-h-screen w-full flex items-center justify-center px-4 md:px-8">
        <div className="max-w-5xl text-sm md:text-xl font-light text-black leading-relaxed">
          <p className="text-center">
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

      {/* Section 3 - Footer */}
      <div className="snap-start w-full mt-auto">
        <Footer />
      </div>
    </div>
  )
}
