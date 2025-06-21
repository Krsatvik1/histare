'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import ProFooter from '../components/profooter'

export default function TheVitrinePage() {
  return (
    <div className='bg-[#0E2B4C]'>
    <div className=" min-h-screen text-white px-4 py-12 flex flex-col items-center">
      <Navbar />

      {/* Top Logo */}
      <div className="flex flex-col items-center text-center mb-10 h-lvh justify-center">
        <Image
          src="/images/program/vitrine.png"
          alt="The Vitrine Logo"
          width={500}
          height={500}
          className="mb-4 p-14"
        />
        <p className="text-sm md:text-base text-gray-300 leading-tight">
          Crafting a Legacy of Indian Art <br />
          Pre Modern, Modern & Contemporary
        </p>
      </div>

      {/* Intro Paragraph */}
      <div className="max-w-3xl text-sm md:text-base text-gray-300 text-justify leading-relaxed mb-20">
        <p>
          The Vitrine emerges as a visionary platform, seamlessly weaving together India’s rich tapestry of pre-modern,
          modern and contemporary art. This curated space fosters dialogue between generations of artists through
          diverse mediums, providing a window into the transformation of India’s aesthetic sensibility. From
          traditional masterpieces to cutting-edge digital expressions, The Vitrine places emphasis on contextual
          appreciation and scholarly engagement. The initiative brings together collectors, historians, and emerging
          voices to contribute to a holistic understanding of Indian art’s past, present, and evolving future. Whether
          showcasing archival treasures or avant-garde interpretations, The Vitrine is a testament to the enduring
          vitality and relevance of artistic expression. It is an evolving visual diary that informs, provokes, and
          redefines the personal and cultural narratives embedded within India’s artistic journey.
        </p>
      </div>

      {/* Section Heading */}
      <h2
        className="text-4xl md:text-5xl mb-10 text-white text-center"
        style={{ fontFamily: 'Rofane' }}
      >
        <span className="italic font-normal">The</span>{' '}
        <span className="non-italic font-normal">Chronicles</span>
      </h2>

      {/* First Story Paragraph + Plus */}
      <div className="relative w-full max-w-3xl px-4 md:px-0 mb-12">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed pr-20">
          In December 2019, a pivotal chapter emerged with the introduction of The Vitrine. Its presentation
          showcased rare expressions from modern Indian artists. The immersive experience encouraged art
          appreciators to delve into storytelling and discipline, guided by contextual knowledge and
          curatorial precision, enriching each tapestry that resonated with multitude of voices and
          articulations.
        </p>
        <button
          className="absolute top-0 right-0 text-gray-400 hover:scale-110 transition-transform"
          aria-label="Expand"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <hr className="border-t border-gray-500 mt-8" />
      </div>

      {/* Middle Event Image */}
      <div className="w-full max-w-3xl mb-12">
        <Image
          src="/images/program/main.png"
          alt="Event Ceremony"
          width={900}
          height={600}
          className="w-full h-auto"
        />
      </div>

      {/* Second Story Paragraph + Plus */}
      <div className="relative w-full max-w-3xl px-4 md:px-0 mb-12">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed pr-10">
          September 2021 heralded a transformative moment with the unveiling of The Vitrine in collaboration
          with Modern Masters. This event spotlighted previously unseen collections from across India and
          celebrated the coexistence of heritage and innovation. Rare archival gems met freshly curated
          contemporary works, showcasing a vibrant archive that channels a diverse array of expression and
          aspiration.
        </p>
        <button
          className="absolute top-0 right-0 text-gray-400 hover:scale-110 transition-transform"
          aria-label="Expand"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <hr className="border-t border-gray-500 mt-8" />
      </div>

      {/* Bottom Image Grid (single image for now as per your input) */}
      <div className="w-full max-w-3xl mb-20">
        <Image
          src="/images/program/bottom.png"
          alt="Art Grid"
          width={900}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </div><ProFooter/></div>
  )
}
