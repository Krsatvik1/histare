import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'

export default function ErbeLandingSection() {
  return (
    <div className="bg-[#6B2134] min-h-screen text-white px-4 md:px-8 py-12 flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* Logo + Caption */}
      <div className="mb-12 mt-6 flex flex-col items-center ">
        <Image
          src="/images/landing/erbe.png"
          alt="The ERBE Project"
          width={500}
          height={500}
          className="x"
        />
        <p
          className="text-sm text-center text-gray-200 "
          style={{ fontFamily: 'Rofane' }}
        >
          A Thousand Journeys of a Million Stories
        </p>
      </div>

      {/* Description Paragraph */}
      <div className="max-w-3xl text-sm md:text-base text-gray-200 leading-relaxed mb-32 px-4">
        <p>
The Erbe Project unfolds as a testament to India's artisan families across generations, revealing their profound stories through a rare collection of masterpieces crafted with sustainable materials and ancient techniques. This smart initiative aims to redefine the narrative surrounding these families, transforming perceived helplessness into recognition as custodians of India's oldest creative traditions. By re-evaluating Indian craft and folk arts, curating master artisans, and integrating contemporary design interventions, the project fosters a deep appreciation for visual and performing folk art and craft. It aspires to cultivate a new generation of connoisseurs who honor and preserve the cultural richness embodied in every stitch, stroke, and melody, thus perpetuating the enduring legacy of India's artistic heritage.
        </p>
      </div>

 {/* Section Heading */}
<h2
  className="text-4xl md:text-5xl mb-6 text-white text-center"
  style={{ fontFamily: 'Rofane' }}
>
  <span className="italic font-normal">The</span>{' '}
  <span className="non-italic font-normal">Chronicles</span>
</h2>

{/* Chronicles Paragraph with SVG + Icon */}
<div className="relative w-full max-w-3xl px-4 md:px-2">
  <p className="text-sm md:text-base text-gray-200 leading-relaxed pr-20">
    In the unfolding tapestry of time, 14th September 2022 marked the inception of a
    significant chapter with The Erbe Project. This moment invited contemplation and engagement, heralding
    new possibilities and explorations that beckoned the curious and the discerning alike. It served as a canvas
    upon which innovation and tradition intertwined, poised to resonate with diverse narratives and aspirations.
  </p>

  {/* Plus Icon SVG Button */}
  <button
    className="absolute top-0 right-0 text-white hover:scale-110 transition-transform"
    aria-label="Expand"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5 md:w-6 md:h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  </button>

  {/* Horizontal Line */}
  <hr className="border-t border-gray-400 mt-6" />
</div>

    </div>
  )
}
