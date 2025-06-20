'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa'

// Footer Component
const Footer = () => {
  return (
    <footer className="relative text-gray-800 pt-16 pb-8 px-6 sm:px-10 md:px-20 overflow-hidden bg-white">
      {/* Decorative Half Circle */}
      <div className="absolute bottom-0 left-0 z-0 w-[1200px] h-[900px] overflow-hidden pointer-events-none">
        <Image
          src="/images/landing/circle.png"
          alt="Decorative Circle"
          width={1200}
          height={1200}
          className="md:translate-x-[-40%] md:translate-y-[50%] md:opacity-50 opacity-0"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between items-center md:items-end gap-10 mb-10 text-center md:text-left">
        {/* Left Links */}
        <div
          className="flex md:flex-col gap-8 text-3xl font-medium text-gray-500 items-center md:items-start"
          style={{ fontFamily: 'Rofane' }}
        >
          <a href="#" className="hover:underline">Media</a>
          <a href="#" className="hover:underline">GOI</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>

        {/* Address */}
        <div className="text-sm sm:text-base text-gray-500 max-w-sm text-center md:text-left">
          <p>The Histare Group</p>
          <p>Histare Concepts Private Limited</p>
          <br />
          <p>
            E 23, Right side, Lower Ground Floor, Poorvi Marg, Vasant Vihar, Delhi 110057
          </p>
          <p>+91-11-40158326</p>
          <p>info@histare.in</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row md:flex-col justify-center md:justify-start items-center gap-4 text-xl text-gray-700">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <hr className="w-full border-gray-300" />

      {/* Bottom Row */}
      <div className="relative z-10 mt-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-4">
        <span>Privacy Policy | Terms & Conditions</span>
        <p className="text-lg sm:text-xl">2024</p>
      </div>
    </footer>
  )
}

// Main Page Component
export default function NowAndBeyondSection() {
  return (
    <>
      <div className="bg-white min-h-screen text-black px-4 py-12 flex flex-col items-center">
        {/* Navbar */}
        <Navbar />

        {/* Logo & Tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/images/landing/now.png"
            alt="Now and Beyond"
            width={500}
            height={500}
            className="mb-4"
          />
          <div className="text-sm md:text-base font-light text-black">
            <p>A window into different worlds</p>
            <p>The ultimate postmodernism</p>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl text-sm md:text-base font-light leading-relaxed text-black px-4">
          <p>
            Now and Beyond emerges as a visionary platform dedicated to nurturing creators of tomorrow through
            tech-based artistic expressions. This smart program celebrates complete artistic independence,
            empowering artists to explore new frontiers in New Media, Digital Art, Sonic Art, Interactive Art,
            Video Installations, Multimedia, Meta Media, Digital Sculpture, Experimental Cinema, and beyond.
            By bridging the gap between tradition and innovation, Now and Beyond inspires a new generation of
            visionaries to redefine artistic boundaries and reshape cultural narratives. It envisions a dynamic
            landscape where creativity flourishes through interactive experiences, pushing the limits of
            expression and inviting audiences to engage deeply with evolving forms of artistic expression.
            Through curated exhibitions and immersive showcases, Now and Beyond invites us to envision a future
            where art transcends mediums, forging connections and sparking conversations that resonate far
            beyond the present moment.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
