'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const icons = Array.from({ length: 10 }, (_, i) => `/images/essence/e${i + 1}.png`);

export default function FullPageEssence() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Section 1: Title */}
      <section className="snap-start snap-always h-screen flex items-center justify-center text-[#3c597B] px-4">
        <h1
          className="text-4xl md:text-5xl text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane' }}
        >
          <span className="font-normal italic">Our </span>
          <span>Essence</span>
        </h1>
      </section>

      {/* Section 2: Ethical World */}
      <section className="snap-start snap-always h-screen flex items-center justify-center text-[#3c597B] px-4">
        <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left gap-10">
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
      </section>

      {/* Section 3: Icons */}
{/* Section 3: Icons */}
<section className="snap-start snap-always h-screen flex items-center justify-center text-[#3c597B] px-4">
  <style jsx>{`
    @keyframes scrollIcons {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .icons-scroll-container {
      overflow: hidden;
      width: 100%;
    }

    .icons-scroll-track {
      display: flex;
      animation: scrollIcons 60s linear infinite;
      width: fit-content;
    }

    .icons-scroll-track:hover {
      animation-play-state: paused;
    }

    .icon-item {
      flex-shrink: 0;
    }
  `}</style>

  <div className="w-full py-14 icons-scroll-container">
    <div className="icons-scroll-track space-x-20 px-4">
      {[...icons, ...icons].map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`icon-${index}`}
          width={120}
          height={60}
          className="icon-item min-w-[120px] h-auto"
        />
      ))}
    </div>
  </div>
</section>


      {/* Section 4: Enduring Balance */}
      <section className="snap-start snap-always h-screen flex items-center justify-center text-[#3c597B] px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
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
              Histare incorporates India's cultural inheritance within the SDG framework.
              A cultural model is valuable for the creation of collective narratives and has
              the ability to bind people.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Bottom Image */}
      <section className="snap-start snap-always h-screen flex items-center justify-center text-[#3c597B] px-4">
        <div className="w-full max-w-4xl">
          <Image
            src="/images/essence/bottom.png"
            alt="Cultural Innovation"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Section 6: Footer */}
      <section className="snap-start ">
        <Footer />
      </section>
    </div>
  );
}
