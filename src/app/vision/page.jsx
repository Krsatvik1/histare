'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerblank';

export default function Vision() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <Navbar />

      {/* Section 1 - Title */}
      <section className="snap-start snap-always h-screen flex items-center justify-center px-6 md:px-20">
        <h2
          className="text-4xl md:text-5xl text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane' }}
        >
          <span className="italic font-normal">Our </span>Vision
          <span className="italic font-normal"> in </span>Action
        </h2>
      </section>

      {/* Section 2 - Content with Footer */}
      <section className="snap-start snap-always  flex flex-col px-6 md:px-20 pt-60">
        <div className="flex-1 flex items-center justify">
          <div className="text-base md:text-lg leading-relaxed text-[#1e1e1e] space-y-6 max-w-5xl mx-auto font-sans">
            <p className='text-justify'>
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
       <div className='md:-ml-20 pt-30'>
       <Footer />
       </div>
      </section>

    
    </div>
  );
}