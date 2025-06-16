'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const icons = Array.from({ length: 10 }, (_, i) => `/images/essence/e${i + 1}.png`);

export default function FullPageEssence() {
  return (
    <div className="min-h-screen gap-5 flex flex-col justify-between text-[#3c597B] overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-start px-4 py-16 space-y-20">

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl mt-24 mb-32 text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane' }}
        >
          <span className="font-normal italic">Our </span>
          <span>Essence</span>
        </h1>

        {/* Ethical World Section */}
        <div className="w-full  max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-start text-center md:text-left gap-10 px-4">
          {/* Left Side - Text */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="uppercase text-[#2c3e50] font-medium text-sm md:text-base">
              Creating an Ethical World
            </h3>
            <p className="text-[#2c3e50] text-sm md:text-base leading-relaxed">
              The world requires to bring change within the principles of traditional trade practices
              and set up businesses that put people first to build a more sustainable future for all.
            </p>
          </div>

          {/* Right Side - Statement */}
          <div
            className="md:w-1/2 text-3xl md:text-4xl font-serif text-center md:text-right"
            style={{ fontFamily: 'Rofane' }}
          >
            Integrity <span className="italic">Shapes</span><br />
            <span className="font-normal">Existence</span>
          </div>
        </div>

        {/* Icons Section */}
        <div className="w-full py-14 ">
          <div className="flex animate-scrollInfinite space-x-12 w-max px-4">
            {[...icons, ...icons].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`icon-${index}`}
                width={80}
                height={40}
                className="min-w-[80px] h-auto"
              />
            ))}
          </div>
        </div>

        {/* Enduring Balance Section */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-10 px-4">
          {/* Left - Title */}
          <div className="md:w-1/2">
            <h2
              className="text-3xl md:text-4xl font-light text-[#3c597B]"
              style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
            >
              <span className="italic">Enduring</span><br />
              <span className="not-italic">Balance</span>
            </h2>
          </div>

          {/* Right - Text */}
          <div className="md:w-1/2 text-sm md:text-base leading-relaxed space-y-2">
            <h3 className="uppercase font-medium text-sm md:text-base text-[#2c3e50]">
              Indian Culture for a Sustainable Future
            </h3>
            <p className="text-[#2c3e50]">
              Histare incorporates India’s cultural inheritance within the SDG framework.
              A cultural model is valuable for the creation of collective narratives and has
              the ability to bind people.
            </p>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="w-full max-w-4xl px-4 mt-6">
          <Image
            src="/images/essence/bottom.png"
            alt="Cultural Innovation"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
