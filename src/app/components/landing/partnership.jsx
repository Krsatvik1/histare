import React from 'react';
import Image from 'next/image';

const logoUp = [
  'forbes.png',
  'iaf.png',
  'lazy_cocktails.png',
  'gff.png',
  'marwah_studios.png',
  'mirage.png',
  'mercedes.png',
  'zee_5.png',
  'toi.png',
  'yahoo.png',
  'hindustan_times.png',
  'taksim.png',
  'my_money.png',
  'rampur.png',
];

const logoDown = [
  'domov.png',
  'lex_favios.png',
  'swan_chambers.png',
  'the_asian_age.png',
  'iiad.png',
  'live_mint.png',
  'ani.png',
  'the_print.png',
  'economic_times.png',
  'johnny_walker.png',
  'deccan_chronicle.png',
  'veritaz.png',
  'pot.png',
  'jicg.png',
  'ignca.png',
  'intach.png',
  'asavari.png',
];

function Partnership() {
  return (
    <div className=" bg-[#F3F0ED] py-16 px-4 md:px-0 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <h2
        className="text-3xl pb-20 sm:text-4xl md:text-5xl mb-12 text-[#3c597B]"
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
          {[...logoUp, ...logoUp].map((src, index) => (
            <div className="logo" key={`top-${index}`}>
              <Image 
                src={`/images/partnership/${src}`} 
                alt={`Partner ${index}`} 
                width={160} 
                height={80}
                className="object-contain"
                onError={(e) => {
                  console.log(`Failed to load image: /images/partnership/${src}`);
                  e.target.src = '/images/placeholder.png'; // fallback
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row (Scroll Left to Right) */}
      <div className="marquee marquee-right mt-8">
        <div className="track">
          {[...logoDown, ...logoDown].map((src, index) => (
            <div className="logo" key={`bottom-${index}`}>
              <Image 
                src={`/images/partnership/${src}`} 
                alt={`Partner ${index}`} 
                width={160} 
                height={80}
                className="object-contain"
                onError={(e) => {
                  console.log(`Failed to load image: /images/partnership/${src}`);
                  e.target.src = '/images/placeholder.png'; // fallback
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .track {
          display: flex;
          animation-duration: 60s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .marquee-left .track {
          animation-name: scroll-left;
        }

        .marquee-right .track {
          animation-name: scroll-right;
        }

        .logo {
          flex-shrink: 0;
          margin: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Pause animation on hover */
        // .marquee:hover .track {
        //   animation-play-state: paused;
        // }
      `}</style>
    </div>
  );
}

export default Partnership;