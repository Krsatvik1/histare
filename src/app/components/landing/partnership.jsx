import React from 'react';

const logoUp = [
  'https://dev-histare.netlify.app/images/partnerLogos/forbes.png',
  'https://dev-histare.netlify.app/images/partnerLogos/iaf.png',
  'https://dev-histare.netlify.app/images/partnerLogos/lazy_cocktails.png',
  'https://dev-histare.netlify.app/images/partnerLogos/gff.png',
  'https://dev-histare.netlify.app/images/partnerLogos/marwah_studios.png',
  'https://dev-histare.netlify.app/images/partnerLogos/mirage.png',
  'https://dev-histare.netlify.app/images/partnerLogos/mercedes.png',
  'https://dev-histare.netlify.app/images/partnerLogos/zee_5.png',
  'https://dev-histare.netlify.app/images/partnerLogos/toi.png',
  'https://dev-histare.netlify.app/images/partnerLogos/yahoo.png',
  'https://dev-histare.netlify.app/images/partnerLogos/hindustan_times.png',
  'https://dev-histare.netlify.app/images/partnerLogos/taksim.png',
  'https://dev-histare.netlify.app/images/partnerLogos/my_money.png',
  'https://dev-histare.netlify.app/images/partnerLogos/rampur.png'
];

const logoDown = [
  'https://dev-histare.netlify.app/images/partnerLogos/domov.png',
  'https://dev-histare.netlify.app/images/partnerLogos/lex_favios.png',
  'https://dev-histare.netlify.app/images/partnerLogos/swan_chambers.png',
  'https://dev-histare.netlify.app/images/partnerLogos/the_asian_age.png',
  'https://dev-histare.netlify.app/images/partnerLogos/iiad.png',
  'https://dev-histare.netlify.app/images/partnerLogos/live_mint.png',
  'https://dev-histare.netlify.app/images/partnerLogos/ani.png',
  'https://dev-histare.netlify.app/images/partnerLogos/the_print.png',
  'https://dev-histare.netlify.app/images/partnerLogos/economic_times.png',
  'https://dev-histare.netlify.app/images/partnerLogos/johnny_walker.png',
  'https://dev-histare.netlify.app/images/partnerLogos/deccan_chronicle.png',
  'https://dev-histare.netlify.app/images/partnerLogos/veritaz.png',
  'https://dev-histare.netlify.app/images/partnerLogos/pot.png',
  'https://dev-histare.netlify.app/images/partnerLogos/jicg.png',
  'https://dev-histare.netlify.app/images/partnerLogos/ignca.png',
  'https://dev-histare.netlify.app/images/partnerLogos/intach.png',
  'https://dev-histare.netlify.app/images/partnerLogos/asavari.png'
];

function Partnership() {
  return (
    <div className="py-16 px-4 md:px-0 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
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
          {[...logoUp, ...logoUp].map((src, index) => (
            <div className="logo" key={`top-${index}`}>
              <img src={src} alt={`Partner ${index}`} width={160} height={80} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row (Scroll Left to Right) */}
      <div className="marquee marquee-right mt-8">
        <div className="track">
          {[...logoDown, ...logoDown].map((src, index) => (
            <div className="logo" key={`bottom-${index}`}>
              <img src={src} alt={`Partner ${index}`} width={160} height={80} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partnership;
