'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerblank';

export default function Partnerships() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <Navbar />

      {/* Section 1 - Title */}
      <section className="snap-start snap-always min-h-screen flex items-center justify-center px-6 md:px-20">
        <h2
          className="text-4xl md:text-5xl text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane' }}
        >
          <span className="italic font-normal">The </span>Value
          <span className="italic font-normal"> of </span>Partnerships
        </h2>
      </section>

      {/* Section 2 - Content with Footer */}
      <section className="snap-start snap-always  flex flex-col px-6 md:px-20 pt-26 ">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-base md:text-lg leading-relaxed text-[#1e1e1e] space-y-6 max-w-5xl mx-auto font-sans">
            <p>
              Histare bridges the divide between tradition and innovation in the art world, reshaping the conversation
              around cultural heritage and creativity.
            </p>

            <p>
              With a vision that blends diverse art forms and modern design principles, Histare is deeply committed to
              sustainability and fair trade practices, ensuring that every creator's work is honored and valued.
            </p>

            <p>
              Histare goes beyond to transform art into a powerful catalyst for change. By fostering collaboration among
              creators, designers, and visionaries, it creates a space where tradition evolves and contemporary creativity
              flourishes.
            </p>

            <p>
              Rather than simply curating, Histare builds connections—linking the old with the new, the local with the
              global, and the creator with the patrons. It emphasizes the preservation of cultural heritage while
              welcoming new ideas and perspectives in the arts.
            </p>

            <p>
              Histare stands out as the only organization in India that operates at the intersection of diverse art genres
              and design principles, pioneering a holistic approach to arts and culture.
            </p>
          </div>
        </div>
       <div className='md:-ml-20'> <Footer /></div>
      </section>

     
    </div>
  );
}