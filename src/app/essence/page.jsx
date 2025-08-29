'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footerblank';

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
          className="text-4xl md:text-8xl text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane' }}
        >
          <span className="font-normal italic">Our </span>
          <span>Essence</span>
        </h1>
      </section>

      {/* Section 2: Ethical World + Carousel */}
      <section className="snap-start snap-always h-screen flex flex-col justify-center text-[#3c597B] px-4 pt-16">
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
            mask: linear-gradient(
              90deg,
              transparent,
              white 10%,
              white 90%,
              transparent
            );
            -webkit-mask: linear-gradient(
              90deg,
              transparent,
              white 10%,
              white 90%,
              transparent
            );
          }

          .icons-scroll-track {
            display: flex;
            animation: scrollIcons 40s linear infinite;
            width: fit-content;
            align-items: center;
            gap: 80px;
          }

          .icons-scroll-track:hover {
            animation-play-state: paused;
          }

          .icon-item {
            flex-shrink: 0;
            width: 480px;
            height: 150px;
            object-fit: contain;
            transition: transform 0.3s ease;
          }

          .icon-item:hover {
            transform: scale(1.1);
          }

          @media (max-width: 1024px) {
            .icon-item {
              width: 420px;
              height: 120px;
            }
            .icons-scroll-track {
              gap: 70px;
            }
          }

          @media (max-width: 768px) {
            .icon-item {
              width: 300px;
              height: 90px;
            }
            .icons-scroll-track {
              gap: 60px;
            }
          }

          @media (max-width: 480px) {
            .icon-item {
              width: 225px;
              height: 68px;
            }
            .icons-scroll-track {
              gap: 45px;
            }
          }
        `}</style>

        {/* Top Half - Ethical World Content */}
        <div className="flex-1 flex items-center justify-center mb-2">
          <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-start text-center md:text-left gap-10">
            {/* Left Side - Text */}
            <div className="md:w-1/2 space-y-2">
              <h3 className="uppercase text-[#2c3e50] font-medium text-base md:text-lg">
                Creating an Ethical World
              </h3>
              <p className="text-[#2c3e50] text-base md:text-lg leading-tight text-justify">
                The world requires to bring change within the principles of traditional trade practices
                and set up businesses that put people first to build a more sustainable future for all.
              </p>
            </div>

            {/* Right Side - Statement */}
            <div
              className="md:w-1/2 text-4xl md:text-5xl font-serif text-center md:text-right"
              style={{ fontFamily: 'Rofane' }}
            >
              Integrity <span className="italic">Shapes</span><br />
              <span className="font-normal">Existence</span>
            </div>
          </div>
        </div>

        {/* Bottom Half - Icons Carousel */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full py-8 icons-scroll-container">
            <div className="icons-scroll-track">
              {/* First set of icons */}
              {icons.map((src, index) => (
                <Image
                  key={`first-${index}`}
                  src={src}
                  alt={`icon-${index + 1}`}
                  width={960}
                  height={300}
                  className="icon-item"
                  style={{ objectFit: 'contain' }}
                />
              ))}
              {/* Second set of icons for seamless loop */}
              {icons.map((src, index) => (
                <Image
                  key={`second-${index}`}
                  src={src}
                  alt={`icon-${index + 1}`}
                  width={960}
                  height={300}
                  className="icon-item"
                  style={{ objectFit: 'contain' }}
                />
              ))}
              {/* Third set for extra smoothness */}
              {icons.map((src, index) => (
                <Image
                  key={`third-${index}`}
                  src={src}
                  alt={`icon-${index + 1}`}
                  width={480}
                  height={150}
                  className="icon-item"
                  style={{ objectFit: 'contain' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Enduring Balance + Bottom Image */}
      <section className="snap-start snap-always h-screen flex flex-col justify-center text-[#3c597B] px-4 pt-16">
        {/* Top Half - Enduring Balance Content */}
        <div className="flex-1 flex items-center justify-center mb-8">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-10">
            {/* Left - Title */}
            <div className="md:w-1/2">
              <h2
                className="text-4xl md:text-5xl font-light text-[#3c597B]"
                style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
              >
                <span className="italic">Enduring</span><br />
                <span className="not-italic">Balance</span>
              </h2>
            </div>

            {/* Right - Text */}
            <div className="md:w-1/2 text-base md:text-lg space-y-2">
              <h3 className="uppercase font-medium text-base md:text-lg text-[#2c3e50]">
                Indian Culture for a Sustainable Future
              </h3>
              <p className="text-[#2c3e50] text-justify leading-tight" style={{fontFamily:'Optima'}}>
                Histare incorporates India's cultural inheritance within the SDG framework.
                A cultural model is valuable for the creation of collective narratives and has
                the ability to bind people.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Half - Bottom Image */}
        <div className="flex-1 flex items-center justify-center pb-4 md:pb-12">
          <div className="w-full max-w-5xl px-4">
            <Image
              src="/images/essence/bottom.svg"
              alt="Cultural Innovation"
              width={500}
              height={300}
              className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}