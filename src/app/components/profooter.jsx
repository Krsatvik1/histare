import React from 'react';
import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';

const ProFooter = () => {
  // Function to get current year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="relative text-gray-800 pt-16 pb-8 px-6 sm:px-10 md:px-20 overflow-hidden w-full" style={{backgroundColor: '#F3F0ED'}}>
      {/* Decorative Half Circle */}
      <div className="absolute bottom-0 left-0 z-0 w-[1200px] h-[900px] overflow-hidden pointer-events-none">
        <Image
          src="/images/landing/circle.png"
          alt="Decorative Circle"
          width={1200}
          height={1200}
          className="md:translate-x-[-40%] md:translate-y-[50%] md:opacity-50 opacity-0"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 mb-10 text-center md:text-left">
        
        {/* Address Block */}
        <div className="text-sm sm:text-base text-[#555555] max-w-sm text-center md:text-left md:mr-0 pr-0">
          <p>Histare Concepts Private Limited</p>
          <br />
          <p>
            E 23, Right side, Lower Ground Floor, Poorvi Marg, Vasant Vihar, Delhi 110057
          </p>
          <p>+91-11-40158326</p>
          <p>info@histare.in</p>
        </div>

        {/* Clickable Map */}
        <div className="flex-shrink-0 mb-4 md:mb-0 --md:mr-30">
          <a 
            href="https://maps.app.goo.gl/3VqKz5Q8QcuWA2g67?g_st=aw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src="/images/program/map.png"
              alt="Location Map - Click to open in Google Maps"
              width={320}
              height={200}
              className="w-50 h-30 sm:w-50 sm:h-56 md:w-130 md:h-38 object-cover rounded-lg mx-auto --md:pr-20"
            />
          </a>
        </div>

        {/* Social Icons */}
        {/* <div className="flex flex-row md:flex-col justify-center md:justify-start items-center gap-4 text-xl text-[#555555] sm:pr-10">
          <a href="#"><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/histare/"><FaLinkedin /></a>
          <a href="https://www.youtube.com/@thehistaregroup7950"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
          <a href="https://www.instagram.com/histare.concepts/"><FaInstagram /></a>
        </div> */}
      </div>

      {/* <hr className="w-full border-gray-000" /> */}

      {/* Bottom Row */}
      {/* <div className="relative z-10 mt-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-blank gap-4">
        <span>Privacy Policy | Terms & Conditions</span>
        <p className="text-lg sm:text-xl">{getCurrentYear()}</p>
      </div> */}
    </footer>
  );
};

export default ProFooter;