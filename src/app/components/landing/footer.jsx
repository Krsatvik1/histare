import React from 'react';
import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative text-gray-800 pt-16 pb-8 px-6 overflow-hidden">
      {/* Decorative Half Circle */}
      <div className="absolute bottom-0 w-[1000px] h-[500px] overflow-hidden z-0">
        <Image
        src="/images/landing/circle.png"
        alt="Decorative Circle"
        width={1000}
        height={1000}
        className="translate-y-[50%] translate-x-32"
        />
        </div>


      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8 mb-4">

        {/* Left Links */}
        <div className="flex flex-col gap-2 text-3xl font-medium text-gray-500" style={{ fontFamily: 'Rofane' }}>
          <a href="#" className="hover:underline">Media</a>
          <a href="#" className="hover:underline">GOI</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>

        {/* Address Block */}
        <div className="text-lg text-gray-500 max-w-sm">
          <p className="">The Histare Group</p>
          <p>Histare Concepts Private Limited</p>
          <br />
          <p>
            E 23, Right side, Lower Ground Floor, Poorvi Marg, Vasant Vihar,
            Delhi 110057
          </p>
          <p>+91-11-40158326</p>
          <p>info@histare.in</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-y-3 text-lg text-gray-700 flex-col">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      <hr className="w-full" />

      {/* Bottom Row */}
      <div className="relative z-10 mt-10 flex justify-between text-xs text-gray-500">
        <span>Privacy Policy | Terms & Conditions</span>
        <p className="text-2xl">2024</p>
      </div>
    </footer>
  );
};

export default Footer;
