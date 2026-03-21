import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaFacebook
} from 'react-icons/fa6';

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

      <hr className="w-full border-white relative z-20" />

      {/* Bottom Row */}
      <div className="relative z-20 mt-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-4">
        <div className="flex items-center gap-2">
          <Link href="/term" className="text-sm text-white hover:text-gray-300 transition-colors">
            Privacy Policy | Terms & Conditions
          </Link>
          <span className="text-white">|</span>
          <Link href="/contact" className="text-sm text-white hover:text-gray-300 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Centered Social Icons */}
        <div className="flex justify-center items-center gap-4 text-xl text-white md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <a href="https://x.com/HistareConcepts"><FaXTwitter /></a>
          <a href="https://www.linkedin.com/company/histare/?viewAsMember=true"><FaLinkedin /></a>
          <a href="https://www.youtube.com/@thehistaregroup7950"><FaYoutube /></a>
          <a href="https://www.facebook.com/profile.php?id=61585279072771"><FaFacebook /></a>
          <a href="https://www.instagram.com/histare.concepts/?hl=en"><FaInstagram /></a>
        </div>

        <p className="text-lg text-white sm:text-xl">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;