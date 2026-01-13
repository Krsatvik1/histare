'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ✅ Only apply scroll effect on mobile (screens smaller than 768px)
      const isMobile = window.innerWidth < 768;
      // console.log(window.innerWidth , is)
      if (isMobile) {
        const scrollHeight = window.scrollY;
        console.log(scrollHeight)
        setScrolled(scrollHeight > 0); // turn opaque as soon as scrolling starts
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      handleScroll(); // recalc on resize
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isHinting, setIsHinting] = useState(false);

  useEffect(() => {
    // Trigger hint animation after loader finishes (2000ms + delay)
    const startTimer = setTimeout(() => {
      setIsHinting(true);

      // Revert back to dots after a short duration
      const endTimer = setTimeout(() => {
        setIsHinting(false);
      }, 1200); // Stay expanded for 1.2s

      return () => clearTimeout(endTimer);
    }, 2800); // Start at 2.8s (Loader is 2s + 0.8s buffer)

    return () => clearTimeout(startTimer);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-2.5 md:top-0 left-0 w-full flex items-center justify-between p-5 --bg-red-200 py-0 sm:p-6 z-50 pointer-events-none transition-all duration-300 ${scrolled ? 'bg-[#F3F0ED] --backdrop-blur-sm --shadow-sm' : 'bg-transparent'
          }`}
      >
        <div className="pointer-events-auto">
          <a href="/">
            <img
              src="/images/navbar/logo.png"
              alt="Histare Logo"
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </a>
        </div>
        <div className="pointer-events-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="focus:outline-none text-gray-600 p-5 sm:p-8 md:p-10 cursor-pointer transition-transform duration-300 flex items-center justify-center"
          >
            {menuOpen ? (
              <span className="text-xl sm:text-2xl">✕</span>
            ) : (
              // Animated Hamburger (Dots <-> Lines)
              <div className="flex flex-col gap-[5px] items-end w-[24px]">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-[4px] bg-gray-600 rounded-full"
                    initial={{ width: "4px" }}
                    animate={{ width: (isHovered || isHinting) ? "24px" : "4px" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1], // Premium "out-quart" feel
                      delay: i * 0.1 // Stagger effect for "left to right" feel
                    }}
                  />
                ))}
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* AnimatePresence for conditional rendering */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full --bg-[#fdfaf7] backdrop-blur-sm shadow-sm  bg-[#F3F0ED] z-40 shadow-xl flex flex-col"
          >
            {/* Background Circle */}
            <div className="absolute bottom-0 right-0 w-[500px] sm:w-[600px] md:w-[700px] h-[500px] sm:h-[600px] md:h-[700px] z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/landing/circle.png"
                alt="Decorative Circle"
                width={800}
                height={800}
                className="-scale-x-100 translate-x-[30%] translate-y-[60%] opacity-100"
              />
            </div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-[30%] right-4 sm:right-6 md:right-10 z-20"
            >
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                <motion.a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-xl sm:text-xl md:text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/histare/"
                  className="text-gray-700 hover:text-gray-900 text-xl sm:text-xl md:text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@thehistaregroup7950"
                  className="text-gray-700 hover:text-gray-900 text-xl sm:text-xl md:text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaYoutube />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 text-xl sm:text-xl md:text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/histare.concepts/"
                  className="text-gray-700 hover:text-gray-900 text-lg sm:text-xl md:text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </motion.div>

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col justify-end px-6 sm:px-8 md:px-10 text-[#333333] text-xl sm:text-xl md:text-2xl font-[Rofane] space-y-3 sm:space-y-3 md:space-y-4 pb-10 sm:pb-14 md:pb-16 h-full"
              >
                <a href="/framework" className="hover:text-gray-600 transition-colors">Our Framework</a>
                <a href="/history" className="hover:text-gray-600 transition-colors">Our History</a>
                <a href="/partnerships" className="hover:text-gray-600 transition-colors">The Value of Partnerships</a>
                <a href="/vision" className="hover:text-gray-600 transition-colors">Our Vision in Action</a>
                <a href="/essence" className="hover:text-gray-600 transition-colors">Our Essence</a>
                <a href="/insights" className="hover:text-gray-600 transition-colors">Insights</a>
                <a href="/media" className="hover:text-gray-600 transition-colors">In the Spotlight</a>
                <a href="/goi" className="hover:text-gray-600 transition-colors">G O I</a>

                {/* Contact + Privacy */}
                <div className="flex justify-between items-start">
                  <a href="/contact" className="hover:text-gray-600 transition-colors">Contact Us</a>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col items-end text-sm sm:text-sm text-gray-600 gap-1"
                  >
                    <p
                      className="text-base sm:text-base md:text-lg text-gray-800"
                      style={{ fontFamily: 'Optima' }}
                    >
                      {new Date().getFullYear()}
                    </p>
                    <Link
                      href="/term"
                      className="hover:text-gray-800 transition-colors text-sm sm:text-sm"
                      style={{ fontFamily: 'Optima' }}
                    >
                      Terms & Conditions
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
