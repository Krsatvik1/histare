import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative text-gray-800 px-6 sm:px-10 md:px-20 overflow-hidden bg-transparent md:h-[400px] flex flex-col justify-end pb-8">
      {/* Decorative Half Circle */}
      <div className="absolute bottom-0 left-0 z-0 w-[1200px] h-[900px] overflow-hidden pointer-events-none">
        <Image
          src="/images/landing/circle.png"
          alt="Decorative Circle"
          width={1200}
          height={1200}
          className="md:translate-x-[-40%] md:translate-y-[50%] md:opacity-80 opacity-0"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-10 mb-10 text-center md:text-left">
      

        {/* Social Icons */}
        
       
      </div>

      <hr className="w-full border-black relative z-20" />

      {/* Bottom Row */}
      <div className="relative z-20 mt-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-4">
      <Link href="/term" className="text-sm text-black hover:text-white transition-colors">
         Privacy Policy | Terms & Conditions
    </Link>
    <div className="flex flex-column md:flex-row justify-center md:justify-start items-center gap-4 text-xl text-gray-700">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <p className="text-lg text-black sm:text-xl">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;