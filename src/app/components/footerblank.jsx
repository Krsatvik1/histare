'use client';
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
import { useTransition } from '../context/TransitionContext';

const Footer = ({ prevPage, nextPage }) => {
  const { navigate } = useTransition();

  const handleNavigation = (e, path, label) => {
    e.preventDefault();
    navigate(path, label);
  };

  return (
    <>
      {/* Navigation Section - Full Height */}
      {(prevPage || nextPage) && (
        <div className="min-h-dvh w-full flex items-center justify-center px-6 md:px-20 snap-start">
          <div className="w-full max-w-5xl flex justify-between items-center">
            {/* Previous Page Link */}
            <div className="flex-1">
              {prevPage && (
                <a
                  href={prevPage.href}
                  onClick={(e) => handleNavigation(e, prevPage.href, prevPage.label)}
                  className="inline-flex items-center gap-3 md:gap-4 text-[#3c597B] hover:text-gray-600 transition-colors group cursor-pointer"
                >
                  <span
                    className="text-2xl md:text-4xl transition-transform group-hover:-translate-x-2"
                    style={{ fontFamily: 'Rofane, serif' }}
                  >
                    ‹
                  </span>
                  <span
                    className="text-xl md:text-3xl"
                    style={{ fontFamily: 'Rofane, serif' }}
                  >
                    {prevPage.label}
                  </span>
                </a>
              )}
            </div>

            {/* Next Page Link */}
            <div className="flex-1 text-right">
              {nextPage && (
                <a
                  href={nextPage.href}
                  onClick={(e) => handleNavigation(e, nextPage.href, nextPage.label)}
                  className="inline-flex items-center gap-3 md:gap-4 text-[#3c597B] hover:text-gray-600 transition-colors group justify-end cursor-pointer"
                >
                  <span
                    className="text-xl md:text-3xl"
                    style={{ fontFamily: 'Rofane, serif' }}
                  >
                    {nextPage.label}
                  </span>
                  <span
                    className="text-2xl md:text-4xl transition-transform group-hover:translate-x-2"
                    style={{ fontFamily: 'Rofane, serif' }}
                  >
                    ›
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="relative text-gray-800 px-6 sm:px-10 md:px-20 overflow-hidden bg-transparent md:h-[400px] flex flex-col justify-end pb-8">
        {/* Decorative Half Circle */}


        {/* Content Wrapper */}
        <div className="relative z-20 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-10 mb-10 text-center md:text-left">


          {/* Social Icons */}


        </div>

        <hr className="w-full border-black relative z-20" />

        {/* Bottom Row */}
        <div className="relative z-20 mt-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-2">
            <Link href="/term" className="text-sm text-black hover:text-gray-600 transition-colors">
              Privacy Policy | Terms & Conditions
            </Link>
            <span className="text-black">|</span>
            <Link href="/contact" className="text-sm text-black hover:text-gray-600 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Centered Social Icons */}
          <div className="flex justify-center items-center gap-4 text-xl text-gray-700 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <a href="#"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/histare/"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@thehistaregroup7950"><FaYoutube /></a>
            <a href="#"><FaFacebook /></a>
            <a href="https://www.instagram.com/histare.concepts/"><FaInstagram /></a>
          </div>

          <p className="text-lg text-black sm:text-xl">{new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;