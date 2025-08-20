'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerblank';

export default function History() {
  return (
    <div className="bg-white snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen w-full">
      
      {/* Section 1 - Header */}
      <div className="snap-start min-h-screen w-full flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6 md:px-20">
          <h2
            className="text-4xl md:text-5xl text-[#3c597B] text-center"
            style={{ fontFamily: "Rofane", fontStyle: "italic" }}
          >
            <span className="italic font-normal">Our </span>
            <span className="not-italic font-normal">History</span>
          </h2>
        </div>
      </div>

      {/* Section 2 - Content with Footer */}
      <div className="snap-start min-h-screen w-full flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6 md:px-20">
          <div className="max-w-5xl w-full">
            <p className="text-base md:text-lg leading-relaxed text-[#1e1e1e] text-justify "style={{ fontFamily: 'Optima' }}>
              The Histare Group revives the legacy of 'Roshan Lal Sita Ram,' founded in the 1930s by the family of Late
              Smt. Roop Rani Seth Vadehra and Late Shri Sita Ram Vadehra. Established in 2019 by the late Smt. Simran
              Wahi Vadehra, Histare honours this profound cultural heritage while propelling it forward into the future.
             <br /><br /> Histare is more than just a tribute to the past; it is a vibrant continuation of this rich legacy,
              dedicated to ensuring the growth and preservation of India's artisanal traditions. The organization is built
              on the belief that tradition and innovation can coexist, allowing the artistry and creativity of past
              generations to remain both relevant and inspiring for future creators.
            </p>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      
      {/* Custom CSS for smooth scrolling */}
      <style jsx>{`
        /* Ensure smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Mobile-specific improvements */
        @media (max-width: 768px) {
          .touch-manipulation {
            touch-action: manipulation;
          }
        }
      `}</style>
      
    </div>
  );
}