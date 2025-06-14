'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "We like Histare Group's endeavors in propelling the Indian inventive arena. Their efforts will certainly energise the changing art & design landscape.",
    name: 'Professor Gaurav Sharma',
    role: 'Head of Department of Art and Design, Sharda University',
  },
  {
    text: "Histare’s innovative implementation of AI assisted tools for advanced systemizations shall be of great value to creative specialists for populating art in the digital environment.",
    name: 'Sanjeev Chopra',
    role: 'CEO, Electrorporate Park, Ministry of Electronics and Information Technology, GOI',
  },
  {
    text: "I am very happy to learn of Histare's future plans which gives great prominence to India's artistic traditions. Akhil comes from a venerable business family of Delhi and the arts and I am glad he is focussing on the arts as his passion.",
    name: 'Jalabala Vaidya',
    role: "Artistic Director of the Akshara Theatre\nIndia's leading stage actress",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Slide direction

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // always right to left
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000); // Auto change every 2 sec

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
    }),
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <h2
          className="text-4xl md:text-5xl mb-12 text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane' }}
        >
          Testimonials
        </h2>

        {/* Testimonial Card */}
        <div className="relative min-h-[350px] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute w-full border border-[#f1d394] rounded-lg p-20 text-[#333]"
            >
              <p className="text-lg leading-relaxed mb-6">{testimonials[index].text}</p>
              <p className="text-right font-semibold text-[#1e1e1e]">
                {testimonials[index].name}
                <br />
                <span className="font-normal text-sm whitespace-pre-line">
                  {testimonials[index].role}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 w-2 rounded-full ${
                i === index ? 'bg-[#3c597B]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
