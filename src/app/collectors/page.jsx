'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import Navbar from '../components/navbar'
import ProFooter from '../components/profooterblank'

export default function CollectorsAffaire() {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded(prev => !prev)
  }

  return (
    <div className="bg-[#2B3730] h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth text-gray-100 w-full">

      {/* Section 1 - Navbar + Logo */}
      <div className="snap-start min-h-screen w-full flex flex-col items-center justify-center">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/program/collectors.png"
            alt="Collectors' Affaire"
            width={500}
            height={500}
            className="mb-4"
          />
          <p className="text-sm-4x1 text-base text-gray-300 sm:text-4xl md:text-2xl lg:text-2xl tracking-wide" style={{ fontFamily: 'Playfair Display' }}>
  Find. Collect. Admire.
</p>
        </div>
      </div>

      {/* Section 2 - Intro Paragraph */}
      <div className="snap-start min-h-screen w-full flex items-center justify-center px-3">
        <div className="max-w-5xl text-sm md:text-xl text-gray-300 text-center leading-tight">
          <p className='text-justify' style={{fontFamily:'Optima'}}>
            Collectors' Affaire stands as a tribute to the guardians of art, whether individual collectors or esteemed institutions. It is a heartfelt homage to those who preserve and share their collections with boundless passion. Step into a world where distinguished art collectors command attention, showcasing masterpieces curated over lifetimes. This is an odyssey of collection, revelation, and research,they continue to inspire. The platform spotlights seasoned collectors, artists, and enthusiasts, delving into the rich stories and cultural significance within each piece. Join us in honoring these custodians of creativity — the keepers of meaning and legacy within every stroke and sculpture. Together, we celebrate their unwavering commitment and the enduring spirit that enriches our collective artistic journey.
          </p>
        </div>
      </div>

      {/* Section 3 - Chronicles + Expandable Artwork */}
      <div className="snap-start min-h-screen w-full flex flex-col px-4">
        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-start py-16 pb-0"> 
          <h2
            className="text-4xl md:text-5xl mb-8 text-white text-center"
            style={{ fontFamily: 'Rofane' }}
          >
            <span className="italic font-normal">The</span>{' '}
            <span className="non-italic font-normal">Chronicles</span>
          </h2>

          <div className="relative w-full max-w-4xl">
            {/* First paragraph */}
            <p className="text-sm md:text-base text-gray-300 leading-tight pr-20 md:pr-30 lg:pr-70 xl:pr-70" style={{ textAlign: 'justify',fontFamily:'Optima' }}>
  In May 2017, the Collectors' Affaire was launched in a collaborative effort hosted by Dolly Jain Singh and Namrata Mumtaz Singh. This exhibition showcased a stunning display of rare pashmina shawls and exquisite chintzes, complemented by contemporary artworks that celebrated the richness of Indian craftsmanship.
</p>

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
            {expanded && (
              <div className="mt-3 animate-fadeIn">
                {/* Second paragraph */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed pr-20 md:pr-30 lg:pr-60 xl:pr-70" style={{ textAlign: 'justify',fontFamily:'Optima' }}>
                  A special highlight of the evening was the preview of 'Maya,' a captivating piece by artist Rajiv Kumar, housed under the patronage of Rakesh Malhotra. This striking piece brought together art enthusiasts and collectors, fostering an atmosphere of appreciation for the intricate beauty of traditional and modern artistry.
                </p>

                {/* Artwork section */}
               
                <div className="flex flex-col md:flex-row items-start gap-10 pt-5 lg:pl-20">
                  <Image
                    src="/images/program/maya-red.png"
                    alt="Maya by Rajiv Kumar"
                    width={250}
                    height={350}
                    className="object-contain "
                  />
                  
                  <div className="text-sm text-gray-300 flex flex-col gap-2" style={{fontFamily:'Optima'}}>
                    <p><span className="font-semibold">Artist:</span> Rajiv Kumar</p>
                    <p><span className="font-semibold">Title:</span> Maya</p>
                    <p><span className="font-semibold">Medium:</span> Acrylic on Canvas</p>
                    <p><span className="font-semibold">Size:</span> 91.4 W x 152.4 H x 0.5 D cm</p>
                  </div>

                </div>
              </div>
            )}
             <hr className="border-t  mt-10" />
          </div>
         
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
      `}</style>
    </div>
  )
}