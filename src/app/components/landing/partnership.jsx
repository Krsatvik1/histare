import React from 'react';
import Image from 'next/image';

const logos = [
  '/images/landing/google.png',
  '/images/landing/pinterest.png',
  '/images/landing/stripe.png',
  '/images/landing/reddit.png',
  '/images/landing/spotify.png',
  // Add more if needed
];

function Partnership() {
  return (
    <div className="py-16 px-4 md:px-20 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl mb-12 text-[#3c597B]"
        style={{ fontFamily: 'Rofane' }}
      >
        <span className="italic font-normal">Our</span>{' '}
        <span className="font-normal">Partners</span>{' '}
        <span className="italic font-normal">and</span>{' '}
        <span className="font-normal">Associates</span>
      </h2>

      {/* Top Row (Scroll Right to Left) */}
      <div className="marquee marquee-left">
        <div className="track">
          {[...logos, ...logos].map((src, index) => (
            <div className="logo" key={`top-${index}`}>
              <Image src={src} alt={`Partner ${index}`} width={160} height={80} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row (Scroll Left to Right) */}
      <div className="marquee marquee-right mt-8">
        <div className="track">
          {[...logos, ...logos].map((src, index) => (
            <div className="logo" key={`bottom-${index}`}>
              <Image src={src} alt={`Partner ${index}`} width={160} height={80} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partnership;
