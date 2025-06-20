'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'

export default function CollectorsAffaire() {
  return (
    <div className="bg-[#2B3730] min-h-screen text-gray-100 px-4 py-12 flex flex-col items-center">
      <Navbar />

      {/* Logo Image */}
      <div className="flex flex-col items-center text-center mb-10">
        <Image
          src="/images/landing/collectors.png"
          alt="Collectors' Affaire"
          width={500}
          height={500}
          className="mb-6"
        />
        <p className="text-sm md:text-base text-gray-300 tracking-wide">
          Find. Collect. Admire.
        </p>
      </div>

      {/* Intro Paragraph */}
      <div className="max-w-3xl text-sm md:text-base text-gray-300 text-center leading-relaxed mb-20">
        <p>
          Collectors’ Affaire stands as a tribute to the guardians of art, whether individual collectors or esteemed institutions. It is a heartfelt homage to those who preserve and share their collections with boundless passion. Step into a world where distinguished art collectors command attention, showcasing masterpieces curated over lifetimes. This is an odyssey of collection, revelation, and research, as they continue to inspire. The platform spotlights seasoned collectors, artists, and enthusiasts, delving into the rich stories and cultural significance within each piece. Join us in honoring these custodians of creativity — the keepers of meaning and legacy within every stroke and sculpture. Together, we celebrate their unwavering commitment and the enduring spirit that enriches our collective artistic journey.
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

      {/* Chronicle Paragraph + Plus Button */}
      <div className="relative w-full max-w-3xl px-4 md:px-0 mb-12">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed pr-20">
          In May 2017, the Collectors’ Affaire was launched in a collaborative effort hosted by Dolly Jain Singh and Namrata Mumtaz Singh. This exhibition showcased a stunning display of rare pashmina shawls and exquisite chintzes, complemented by contemporary artworks that celebrated the richness of Indian craftsmanship. <br /><br />
          A special highlight of the evening was the preview of ‘Maya,’ a captivating piece by artist Rajiv Kumar, housed under the patronage of Rakesh Malhotra. This striking piece brought together art enthusiasts and collectors, fostering an atmosphere of appreciation for the intricate beauty of traditional and modern artistry.
        </p>

        {/* Plus Button */}
        <button
          className="absolute top-0 right-0 text-gray-400 hover:scale-110 transition-transform"
          aria-label="Expand"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>

        <hr className="border-t border-gray-500 mt-8" />
      </div>

      {/* Artwork Image & Info */}
      <div className="flex flex-col md:flex-row items-end  gap-5">
        <Image
          src="/images/program/maya-red.png"
          alt="Maya by Rajiv Kumar"
          width={300}
          height={450}
          className="mb-4"
        />
        <div className="text-sm text-gray-300 flex gap-2 mb-2 flex-col  ">
          <p>Artist: Rajiv Kumar</p>
          <p>Title: Maya</p>
          <p>Medium: Acrylic on Canvas</p>
          <p>Size: 91.4 W x 152.4 H x 0.5 D cm</p>
        </div>
      </div>
    </div>
  )
}
