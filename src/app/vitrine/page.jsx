'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import ProFooter from '../components/profooterblank'

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
      <div className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 md:pb-0">
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
        <div className="max-w-6xl text-sm md:text-xl text-gray-300 leading-relaxed">
          <p className='text-justify'>
          The Vitrine emerges as a visionary platform, seamlessly weaving together India’s rich tapestry of pre-modern, modern, and contemporary art. This smart program transcends time and genre, curating a vibrant narrative that celebrates the evolution of Indian artistry. From the pioneering movements of Group 1890 and the Bengal School to the avant-garde expressions of Neo Tantric and Narrative Group artists, it explores diverse artistic landscapes. Embracing post-independent movements like the Bombay Progressive Artists’ Group and Delhi Silpi Chakra, The Vitrine amplifies the intersection of art and activism. It illuminates late 19th-century academic realists and their nationalist ethos, alongside the spiritual essence of Chola mandala art. Through curated exhibitions and dialogues, The Vitrine fosters a deeper understanding and appreciation of India’s artistic heritage, uniting past and present voices in a harmonious dialogue. This initiative invites audiences to reflect, engage, and rediscover the profound cultural narratives embedded within India’s artistic journey.
          </p>
        </div>
      </div>

      {/* Section 3 - Chronicles + Expandable Content + Footer */}
      <div className="snap-start min-h-screen w-full flex flex-col px-4 md:px-8">
        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-start py-8 md:py-16  md:pb-0 overflow-y-auto">
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
            In December 2019, a pivotal chapter emerged with the introduction of The Vitrine. This occasion encouraged reflection and interaction, 
            ushering in a realm of possibilities and discoveries that appealed to both the inquisitive and the perceptive. It became a vibrant
             platform where contemporary Indian art converged with European-Indian fusion live performances, creating a rich tapestry that 
             resonated with a multitude of stories and ambitions.
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
                src="/images/program/vitrine2019.png"
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
            September 2018 heralded a transformative moment with the unveiling of The Vitrine in collaboration with Marwah Studios. 
            This event sparked introspection and dialogue, opening doors to a myriad of opportunities and insights that captivated 
            the curious and the discerning. It transformed into a dynamic space where contemporary Indian art flourished, weaving 
            together a rich narrative that echoed a diverse array of experiences and aspirations.
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
                src="/images/program/vitrine2018.png"
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
        <div className="w-full mt-auto -ml-8 text-white">
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