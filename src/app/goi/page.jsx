import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const GOI = () => {
  return (
    <>
      <Navbar />

      <section className="w-full py-32 ">
        <div className="w-full flex flex-col items-center text-center space-y-12">
          <h2
            className="text-4xl md:text-5xl text-[#3c597B]"
            style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
          >
            <span className="not-italic font-normal">
              Government of India Recognition
            </span>
          </h2>

          {/* DPIIT Logo - Increased size */}
          <img
            src="https://dev-histare.netlify.app/images/goi/dpiit.png"
            alt="DPIIT Logo"
            className="w-72 sm:w-56"
          />

          {/* Startup India Logo - Increased size */}
          <img
            src="https://dev-histare.netlify.app/images/goi/startup_india.png"
            alt="Startup India Logo"
            className="w-80 sm:w-72"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GOI;
