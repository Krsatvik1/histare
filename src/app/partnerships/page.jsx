'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Partnerships() {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 --py-24 text-[#1e1e1e] font-sans max-w-5xl mx-auto">
        <div className='flex items-center justify-center h-[100vh]'>
        <h2
          className="text-4xl md:text-5xl mt-24 mb-32 text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane' }}
        >
          <span className="italic font-normal">The </span>Value
          <span className="italic font-normal"> of </span>Partnerships
        </h2>
        </div>

        <div className="text-base md:text-lg leading-relaxed text-[#1e1e1e] space-y-6 h-[100vh]">
          <p>
            Histare bridges the divide between tradition and innovation in the art world, reshaping the conversation
            around cultural heritage and creativity.
          </p>

          <p>
            With a vision that blends diverse art forms and modern design principles, Histare is deeply committed to
            sustainability and fair trade practices, ensuring that every creator’s work is honored and valued.
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
      <Footer />
    </div>
  );
}
