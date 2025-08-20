'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 z-50">
        <div>
          <a href="/"><img src="/images/navbar/logo.png" alt="Histare Logo" className="h-16 w-auto" /></a>
        </div>
        <div>
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
            className="fixed top-0 right-0 h-full w-full bg-[#fdfaf7] z-40 shadow-xl flex flex-col justify-end"
          >
            {/* Background Circle */}
            <div className="absolute bottom-0 right-0 w-[700px] h-[700px] z-0 pointer-events-none overflow-hidden">
              <Image
                src="/images/landing/circle.png"
                alt="Decorative Circle"
                width={800}
                height={800}
                className="-scale-x-100 translate-x-[30%] translate-y-[60%] opacity-60"
              />
            </div>

            {/* Animated Text Content at the bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative z-10 px-10 py-16 text-[#333333] text-2xl font-[Rofane] space-y-4 flex flex-col"
            >
              <a href="/framework">Our Framework</a>
              <a href="/history">Our History</a>
              <a href="/partnerships">The Value of Partnerships</a>
              <a href="/vision">Our Vision in Action</a>
              <a href="/essence">Our Essence</a>
              <a href="/insights">Insights</a>
              <a href="media">In the Spotlight</a>
              <a href="/goi">G O I</a>
              <a href="/contact">Contact Us</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;