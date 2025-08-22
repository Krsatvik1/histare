'use client';

import React, { useState } from 'react';
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

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <a href="/"><img src="/images/navbar/logo.png" alt="Histare Logo" className="h-16 w-auto" /></a>
        </div>
        <div className="pointer-events-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-gray-600 text-2xl p-10 cursor-pointer transition-transform duration-300"
          >
            {menuOpen ? '✕' : '⋮'}
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
            className="fixed top-0 right-0 h-full w-full bg-[#fdfaf7] z-40 shadow-xl flex flex-col"
          >
            {/* Background Circle */}
            <div className="absolute bottom-0 right-0 w-[700px] h-[700px] z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/landing/circle.png"
                alt="Decorative Circle"
                width={800}
                height={800}
                className="-scale-x-100 translate-x-[30%] translate-y-[60%] opacity-100"
              />
            </div>

            

            {/* Social Media Icons - Vertical Stack on Right - Aligned with bottom content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-[30%] right-10 z-20"
            >
              <div className="flex flex-col gap-6 ">
                <motion.a 
                  href="#" 
                  className="text-gray-700 hover:text-gray-900 text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/histare/" 
                  className="text-gray-700 hover:text-gray-900 text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://www.youtube.com/@thehistaregroup7950" 
                  className="text-gray-700 hover:text-gray-900 text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaYoutube />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-700 hover:text-gray-900 text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/histare.concepts/" 
                  className="text-gray-700 hover:text-gray-900 text-2xl transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </motion.div>

            {/* Menu Content Container */}
            <div className="relative z-10 flex flex-col h-full">
              
              {/* Navigation Links - Main Content - Moved to bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col justify-end px-10 text-[#333333] text-2xl font-[Rofane] space-y-4 pb-16 h-full"
              >
                <a href="/framework" className="hover:text-gray-600 transition-colors">Our Framework</a>
                <a href="/history" className="hover:text-gray-600 transition-colors">Our History</a>
                <a href="/partnerships" className="hover:text-gray-600 transition-colors">The Value of Partnerships</a>
                <a href="/vision" className="hover:text-gray-600 transition-colors">Our Vision in Action</a>
                <a href="/essence" className="hover:text-gray-600 transition-colors">Our Essence</a>
                <a href="/insights" className="hover:text-gray-600 transition-colors">Insights</a>
                <a href="/media" className="hover:text-gray-600 transition-colors">In the Spotlight</a>
                <a href="/goi" className="hover:text-gray-600 transition-colors">G O I</a>
                
                {/* Contact Us with Privacy Policy on separate lines */}
                <div className="flex justify-between items-start">
                  <a href="/contact" className="hover:text-gray-600 transition-colors">Contact Us</a>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col items-end text-sm text-gray-600 gap-1"
                  >
                     <p className="text-lg text-gray-800" style={{fontFamily:'Optima'}}>
                      {new Date().getFullYear()}
                    </p>
                    
                    <Link 
                      href="/term" 
                      className="hover:text-gray-800 transition-colors"style={{fontFamily:'Optima'}}
                    >
                      Privacy Policy | Terms & Conditions
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