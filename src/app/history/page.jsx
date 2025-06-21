'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function History() {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 py-24 text-[#1e1e1e] font-sans max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-5xl mt-24 mb-32 text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
        >
          <span className="italic font-normal">Our </span>
          <span className="not-italic font-normal">History</span>
        </h2>

        <div className="text-base md:text-lg leading-relaxed   text-[#1e1e1e] space-y-6">
          <p>
            The Histare Group revives the legacy of ‘Roshan Lal Sita Ram,’ founded in the 1930s by the family of Late
            Smt. Roop Rani Seth Vadehra and Late Shri Sita Ram Vadehra. Established in 2019 by the late Smt. Simran
            Wahi Vadehra, Histare honours this profound cultural heritage while propelling it forward into the future.
          </p>

          <p>
            Histare is more than just a tribute to the past; it is a vibrant continuation of this rich legacy,
            dedicated to ensuring the growth and preservation of India’s artisanal traditions. The organization is built
            on the belief that tradition and innovation can coexist, allowing the artistry and creativity of past
            generations to remain both relevant and inspiring for future creators.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
