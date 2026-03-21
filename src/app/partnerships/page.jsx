'use client';

import React from 'react';


import Footer from '../components/footerblank';

export default function Partnerships() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">


      {/* Section 1 - Title */}
      <section className="snap-start --bg-red-200 snap-always min-h-screen flex items-center justify-center px-6 md:px-20">
        <h2
          className="text-4xl md:text-8xl text-[#3c597B] text-center"
          style={{ fontFamily: 'Playfair Display' }}
        >
          <span className="italic font-normal" style={{ fontFamily: 'Playfair Display' }}>The </span>Value
          <span className="italic font-normal " style={{ fontFamily: 'Playfair Display' }}> of </span>
          <span style={{ fontFamily: 'Playfair Display' }}>Partnerships</span>
        </h2>
      </section>

      {/* Section 2 - Content */}
      <section className="snap-start snap-always min-h-screen flex items-center justify-center px-6 md:px-20 pt-9">
        <div className="text-base md:text-lg leading-tight text-[#1e1e1e] space-y-2 max-w-5xl mx-auto font-sans text-justify pt-0" style={{ fontFamily: 'Optima' }}>
          <p>
            Histare bridges the divide between tradition and innovation in the art world, reshaping the conversation
            around cultural heritage and creativity.
          </p><br />

          <p>
            With a vision that blends diverse art forms and modern design principles, Histare is deeply committed to
            sustainability and fair trade practices, ensuring that every creator's work is honored and valued.
          </p><br />

          <p>
            Histare goes beyond to transform art into a powerful catalyst for change. By fostering collaboration among
            creators, designers, and visionaries, it creates a space where tradition evolves and contemporary creativity
            flourishes.
          </p><br />

          <p>
            Rather than simply curating, Histare builds connections—linking the old with the new, the local with the
            global, and the creator with the patrons. It emphasizes the preservation of cultural heritage while
            welcoming new ideas and perspectives in the arts.
          </p><br />

          <p>
            Histare stands out as the only organization in India that operates at the intersection of diverse art genres
            and design principles, pioneering a holistic approach to arts and culture.
          </p>
        </div>
      </section>

      <Footer
        prevPage={{ label: "Our History", href: "/history" }}
        nextPage={{ label: "Our Vision in Action", href: "/vision" }}
      />

    </div>
  );
}