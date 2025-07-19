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
    <footer className="relative text-gray-800 pt-16 pb-8 px-6 sm:px-10 md:px-20 overflow-hidden bg-transparent">
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
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-10 mb-10 text-center md:text-left">
        
        {/* Left Links */}
        <div
          className="flex md:flex-col gap-8 text-3xl sm:text-3xl font-medium text-gray-500 items-center md:items-start"
          style={{ fontFamily: 'Rofane' }}
        >
          <a href="/media" className="hover:underline">Media</a>
          <a href="/insights" className="hover:underline">Insights</a>
          <a href="/goi" className="hover:underline">GOI</a>
        </div>

        {/* Address Block */}
        <div className="text-sm sm:text-base text-gray-500 max-w-sm text-center md:text-left">
          <p>The Histare Group</p>
          <p>Histare Concepts Private Limited</p>
          <br />
          <p>
            E 23, Right side, Lower Ground Floor, Poorvi Marg, Vasant Vihar, Delhi 110057
          </p>
          <p>+91-11-40158326</p>
          <p>info@histare.in</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row md:flex-col justify-center md:justify-start items-center gap-4 text-xl text-gray-700">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <hr className="w-full border-gray-300" />

      {/* Bottom Row */}
      <div className="relative z-10 mt-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-4">
      <Link href="/term" className="text-sm text-gray-400 hover:text-white transition-colors">
         Privacy Policy | Terms & Conditions
    </Link>
        <p className="text-lg sm:text-xl">2025</p>
      </div>
    </footer>
  );
};

export default Footer;
