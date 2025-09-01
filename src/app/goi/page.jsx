import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerblank';

const GOI = () => {
  return (
    <>
      <Navbar />

      <section className="h-[100vh] w-full pt-15 --bg-red-200 flex flex-col justify-center">
        <div className="w-full flex flex-col items-center text-center space-y-8 --bg-blue-200">
          <h2
            className="text-3xl md:text-4xl text-[#3c597B] pb-12"
            style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
          >
            <span className="not-italic font-normal">
              Government of India Recognition
            </span>
          </h2>

          {/* DPIIT Logo - Reduced size */}
          <img
            src="https://dev-histare.netlify.app/images/goi/dpiit.png"
            alt="DPIIT Logo"
            className="w-48 sm:w-40"
          />

          {/* Startup India Logo - Reduced size */}
          <img
            src="https://dev-histare.netlify.app/images/goi/startup_india.png"
            alt="Startup India Logo"
            className="w-56 sm:w-48"
          />
          
        </div>
        {/* <Footer /> */}
      </section>

     
    </>
  );
};

export default GOI;