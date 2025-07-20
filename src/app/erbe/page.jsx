"use client"
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import ProFooter from '../components/profooter'

export default function ErbeLandingSection() {
  return (
    <div className="bg-[#6B2134] h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth text-white w-full">
      
      {/* Section 1 - Navbar + Logo + Caption */}
      <div className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/program/erbe.png"
            alt="The ERBE Project"
            width={500}
            height={500}
            className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain"
          />
          <p
            className="text-lg md:text-xl lg:text-2xl text-center text-gray-200 tracking-wide"
            style={{ fontFamily: 'Rofane' }}
          >
            A Thousand Journeys of a Million Stories
          </p>
        </div>
      </div>

      {/* Section 2 - Description Paragraph */}
      <div className="snap-start min-h-screen w-full flex items-center justify-center px-4 md:px-8">
        <div className="max-w-5xl text-sm md:text-xl text-gray-200 leading-relaxed text-center">
          <p className='justify-center'>
            The Erbe Project unfolds as a testament to India's artisan families across generations, revealing their profound stories through a rare collection of masterpieces crafted with sustainable materials and ancient techniques. This smart initiative aims to redefine the narrative surrounding these families, transforming perceived helplessness into recognition as custodians of India's oldest creative traditions. By re-evaluating Indian craft and folk arts, curating master artisans, and integrating contemporary design interventions, the project fosters a deep appreciation for visual and performing folk art and craft. It aspires to cultivate a new generation of connoisseurs who honor and preserve the cultural richness embodied in every stitch, stroke, and melody, thus perpetuating the enduring legacy of India's artistic heritage.
          </p>
        </div>
      </div>

      {/* Section 3 - Chronicles + Footer */}
      <div className="snap-start min-h-screen w-full flex flex-col px-4 md:px-8">
        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-start py-16">
          {/* Section Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-8 text-white text-center"
            style={{ fontFamily: 'Rofane' }}
          >
            <span className="italic font-normal">The</span>{' '}
            <span className="non-italic font-normal">Chronicles</span>
          </h2>

          {/* Chronicles Paragraph with SVG + Icon */}
          <div className="relative w-full max-w-4xl">
            <p className="text-sm md:text-base text-gray-200 leading-relaxed pr-8 md:pr-16 lg:pr-20" style={{ textAlign: 'justify' }}>
              In the unfolding tapestry of time, 14th September 2022 marked the inception of a
              significant chapter with The Erbe Project. This moment invited contemplation and engagement, heralding
              new possibilities and explorations that beckoned the curious and the discerning alike. It served as a canvas
              upon which innovation and tradition intertwined, poised to resonate with diverse narratives and aspirations.
            </p>

            {/* Plus Icon SVG Button */}
            <button
              className="absolute top-0 right-0 md:top-2 md:right-4 text-gray-200 hover:text-white active:scale-95 transition-all duration-200 z-20 p-2 -m-2 touch-manipulation"
              aria-label="Expand"
              type="button"
            >
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
            </button>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-400 mt-8" />
          </div>
        </div>

       <ProFooter />
      </div>

      {/* Custom CSS for smooth scrolling */}
      <style jsx>{`
        /* Ensure smooth scroll behavior */
        html {
          scroll-behavior: smooth;
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