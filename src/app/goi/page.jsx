import React from 'react';

import Footer from '../components/footerblank';

const GOI = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto w-full">
      <section className="snap-start snap-always h-dvh w-full flex flex-col items-center justify-center p-6">
        <div className="w-full flex flex-col items-center text-center space-y-12">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#3c597B] leading-tight px-4"
            style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
          >
            <span className="not-italic font-normal">
              Government of India Recognition
            </span>
          </h2>

          <div className="flex flex-col items-center space-y-8">
            {/* DPIIT Logo - Reduced size */}
            <img
              src="/images/goi/dpiit.png"
              alt="DPIIT Logo"
              className="w-48 sm:w-56"
            />

            {/* Startup India Logo - Reduced size */}
            <img
              src="/images/goi/startup_india.png"
              alt="Startup India Logo"
              className="w-56 sm:w-64"
            />
          </div>
        </div>
      </section>

      <Footer
        prevPage={{ label: "In the Spotlight", href: "/media" }}
        nextPage={{ label: "Contact Us", href: "/contact" }}
      />
    </div>



  );
};

export default GOI;