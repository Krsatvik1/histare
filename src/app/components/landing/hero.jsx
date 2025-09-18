"use client"
import React from 'react';

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
    {/* Background Video */}
    <video
      className="absolute w-full h-full object-cover object-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 filter blur-[5px] opacity-70"
      src="/bg.mp4"
      autoPlay
      muted
      loop
      playsInline
    />

    {/* Overlay for better text readability */}
    <div className="absolute top-0 left-0 w-full h-full z-10"></div>

    {/* Foreground Content */}
    <div className="relative z-20 flex flex-col items-center text-center">
      <h1
        className="md:text-9xl text-6xl font-serif text-[#3c5978] mb-4 max-w-5xl"
        style={{ fontFamily: 'Rofane' }}
      >
        Envisioning <br /> Artistic Mastery
      </h1>
      <p className="text-[16px] sm:text-[18px] md:text-[22px] text-[#333333] max-w-lg sm:max-w-2xl !p-0 w-full">
  Histare nurtures India's primitive and prospective expressions
  <br className="hidden sm:inline" />
  through cultural evolution.
</p>


    </div>
  </section>
);

export default Hero;