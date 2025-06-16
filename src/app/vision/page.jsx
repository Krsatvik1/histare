'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Vision() {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 py-24 text-[#1e1e1e] font-sans max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-5xl mt-24 mb-32 text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane' }}
        >
          <span className="italic font-normal">Our </span>Vision
          <span className="italic font-normal"> in </span>Action
        </h2>

        <div className="text-base md:text-lg leading-relaxed  text-[#1e1e1e] space-y-6">
          <p>
            At Histare, we harmonize diverse artistic viewpoints with a profound understanding of our patrons' tastes,
            creating a seamless blend of tradition and innovation. This core philosophy underpins every dimension of our
            work—ranging from the curation of immersive displays to the innovation in design and the development of art
            collections. Through sustainable practices and strategic partnerships, we cultivate cultural narratives that are both
            enduring and progressive. Our approach ensures that art not only honors the past but also actively shapes
            the future, fostering transformative, meaningful cultural experiences that leave a lasting impact across
            generations.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
