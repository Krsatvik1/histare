'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import ProFooter from '../components/profooter'

export default function TheVitrinePage() {
  const [firstExpanded, setFirstExpanded] = useState(false)
  const [secondExpanded, setSecondExpanded] = useState(false)

  const handleFirstToggle = () => {
    setFirstExpanded(prev => !prev)
  }

  const handleSecondToggle = () => {
    setSecondExpanded(prev => !prev)
  }

  return (
    <div className="bg-[#0E2B4C] h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth text-white w-full">
      
      {/* Section 1 - Navbar + Logo + Caption */}
      <div className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/program/vitrine.png"
            alt="The Vitrine Logo"
            width={500}
            height={500}
            className="mb-4 w-80 h-80 md:w-[500px] md:h-[500px] object-contain"
          />
          <p className="text-sm md:text-base text-gray-300 leading-tight text-center tracking-wide">
            Crafting a Legacy of Indian Art Pre Modern,<br />
            Modern & Contemporary
          </p>
        </div>
      </div>

      {/* Section 2 - Intro Paragraph */}
      <div className="snap-start min-h-screen w-full flex items-center justify-center px-4 md:px-8">
        <div className="max-w-5xl text-sm md:text-xl text-gray-300 leading-relaxed">
          <p className='text-justify'>
            The Vitrine emerges as a visionary platform, seamlessly weaving together India's rich tapestry of pre-modern,
            modern and contemporary art. This curated space fosters dialogue between generations of artists through
            diverse mediums, providing a window into the transformation of India's aesthetic sensibility. From
            traditional masterpieces to cutting-edge digital expressions, The Vitrine places emphasis on contextual
            appreciation and scholarly engagement. The initiative brings together collectors, historians, and emerging
            voices to contribute to a holistic understanding of Indian art's past, present, and evolving future. Whether
            showcasing archival treasures or avant-garde interpretations, The Vitrine is a testament to the enduring
            vitality and relevance of artistic expression. It is an evolving visual diary that informs, provokes, and
            redefines the personal and cultural narratives embedded within India's artistic journey.
          </p>
        </div>
      </div>

      {/* Section 3 - Chronicles + Expandable Content + Footer */}
      <div className="snap-start min-h-screen w-full flex flex-col px-4 md:px-8">
        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-start py-8 md:py-16 overflow-y-auto">
          {/* Section Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-8 text-white text-center"
            style={{ fontFamily: 'Rofane' }}
          >
            <span className="italic font-normal">The</span>{' '}
            <span className="non-italic font-normal">Chronicles</span>
          </h2>

          {/* First Story Paragraph + Toggle Button */}
          <div className="relative w-full max-w-4xl mb-8">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed pr-8 md:pr-16 lg:pr-60"style={{ textAlign: 'justify' ,fontFamily:'Optima'}}>
              In December 2019, a pivotal chapter emerged with the introduction of The Vitrine. Its presentation
              showcased rare expressions from modern Indian artists. The immersive experience encouraged art
              appreciators to delve into storytelling and discipline, guided by contextual knowledge and
              curatorial precision, enriching each tapestry that resonated with multitude of voices and
              articulations.
            </p>

            {/* First Toggle Button */}
            <button
              className="absolute top-0 right-0 md:top-2 md:right-4 text-gray-400 hover:text-white active:scale-95 transition-all duration-200 z-20 p-2 -m-2 touch-manipulation"
              aria-label={firstExpanded ? "Collapse" : "Expand"}
              onClick={handleFirstToggle}
              type="button"
            >
              {firstExpanded ? (
                // Minus icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              ) : (
                // Plus icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              )}
            </button>
            {/* First Expandable Content - Middle Event Image */}
          {firstExpanded && (
            <div className="w-full max-w-4xl mb-8 animate-fadeIn">
              <Image
                src="/images/program/main.png"
                alt="Event Ceremony"
                width={900}
                height={600}
                className="w-full h-auto rounded-lg mt-5"
              />
            </div>
          )}

            <hr className="border-t border-gray-500 mt-6" />
          </div>

          

          {/* Second Story Paragraph + Toggle Button */}
          <div className="relative w-full max-w-4xl mb-8">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed pr-8 md:pr-16 lg:pr-60" style={{ textAlign: 'justify' ,fontFamily:'Optima'}}>
              September 2021 heralded a transformative moment with the unveiling of The Vitrine in collaboration
              with Modern Masters. This event spotlighted previously unseen collections from across India and
              celebrated the coexistence of heritage and innovation. Rare archival gems met freshly curated
              contemporary works, showcasing a vibrant archive that channels a diverse array of expression and
              aspiration.
            </p>

            {/* Second Toggle Button */}
            <button
              className="absolute top-0 right-0 md:top-2 md:right-4 text-gray-400 hover:text-white active:scale-95 transition-all duration-200 z-20 p-2 -m-2 touch-manipulation"
              aria-label={secondExpanded ? "Collapse" : "Expand"}
              onClick={handleSecondToggle}
              type="button"
            >
              {secondExpanded ? (
                // Minus icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              ) : (
                // Plus icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              )}
            </button>
            {secondExpanded && (
            <div className="w-full max-w-4xl mb-8 animate-fadeIn">
              <Image
                src="/images/program/bottom.png"
                alt="Art Grid"
                width={900}
                height={600}
                className="w-full h-auto rounded-lg mt-5"
              />
            </div>
          )}

            <hr className="border-t border-gray-500 mt-6" />
          </div>

          {/* Second Expandable Content - Bottom Image Grid */}
          
        </div>

        {/* Footer at bottom */}
        <div className="w-full mt-auto">
          <ProFooter />
        </div>
      </div>

      {/* Custom CSS for fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        /* Mobile-specific improvements */
        @media (max-width: 768px) {
          .touch-manipulation {
            touch-action: manipulation;
          }
        }
      `}</style>
    </div>
  )
}