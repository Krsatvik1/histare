'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import ProFooter from '../components/profooterblank'
import MorePrograms from '../components/MorePrograms';

export default function CollectorsAffaire() {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded(prev => !prev)
  }

  return (
    <div className="bg-[#6B2134] h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth text-gray-100 w-full">

      {/* Section 1 - Navbar + Logo */}
      <div className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4">
        <div className="w-full">

        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/program/erbe.webp"
            alt="Collectors' Affaire"
            width={500}
            height={500}
            className="mb-4"
          />
          <p className="text-sm-4x1 text-base text-gray-300 sm:text-4xl md:text-2xl lg:text-2xl tracking-wide" style={{ fontFamily: 'Playfair Display' }}>
            A Thousand Journeys of a Million Stories
          </p>
        </div>
      </div>

      {/* Section 2 - Intro Paragraph */}
      <div className="snap-start min-h-screen w-full flex items-center justify-center px-3">
        <div className="max-w-5xl text-sm md:text-xl text-gray-300 text-center leading-tight">
          <p className='text-justify' style={{ textAlign: 'justify', fontFamily: 'Optima' }}>
            The Erbe Project unfolds as a testament to India's artisan families across generations, revealing their profound stories through a rare collection of masterpieces crafted with sustainable materials and ancient techniques. This smart initiative aims to redefine the narrative surrounding these families, transforming perceived helplessness into recognition as custodians of India's oldest creative traditions. By re-evaluating Indian craft and folk arts, curating master artisans, and integrating contemporary design interventions, the project fosters a deep appreciation for visual and performing folk art and craft. It aspires to cultivate a new generation of connoisseurs who honor and preserve the cultural richness embodied in every stitch, stroke, and melody, thus perpetuating the enduring legacy of India's artistic heritage.
          </p>
        </div>
      </div>

      {/* Section 3 & 4 - Chronicles + Expandable Artwork + Footer */}
      <div className="snap-start min-h-screen w-full flex flex-col px-4">
        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-start py-16">
          <h2
            className="text-4xl md:text-5xl mb-8 text-white text-center"
            style={{ fontFamily: 'Rofane' }}
          >
            <span className="italic font-normal">The</span>{' '}
            <span className="non-italic font-normal">Chronicles</span>
          </h2>

          <div className="relative w-full max-w-4xl">
            {/* First paragraph */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed pr-20 md:pr-30 lg:pr-70 xl:pr-70" style={{ textAlign: 'justify', fontFamily: 'Optima' }}>
              In the unfolding tapestry of time, 14th September 2024 marked the inception of a significant chapter with The Erbe Project. This moment invited contemplation and engagement, heralding new possibilities and explorations that beckoned the curious and the discerning alike. It served as a canvas upon which innovation and tradition intertwined, poised to resonate with diverse narratives and aspirations.
            </p>
            <hr className="border-t  mt-10" />

            {/* Toggle Button */}
            <button
              className=" absolute top-10 right-0  text-gray-400 hover:text-white hover:scale-110 transition-all duration-200 z-20"
              aria-label={expanded ? "Collapse" : "Expand"}
              onClick={handleToggle}
            >
              {expanded ? (
                // Minus icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              ) : (
                // Plus icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-7 h-7 sm: pl-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              )}
            </button>

            {/* Expanded content with smooth animation */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              <div className="w-full flex justify-center">
                <div className="relative w-full max-w-3xl" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/2EZ-XA0q_yo?si=Sh3iuDNmvuDIR4UJ"
                    title="The Erbe Project"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* More Programs Section */}
      <MorePrograms currentProgram="erbe" />

      {/* Footer Section */}
      <div className="snap-start w-full">
        <ProFooter />
      </div>

      {/* Custom CSS for fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 1000px;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}