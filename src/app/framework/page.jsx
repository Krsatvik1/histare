'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Frameworks() {
  return (
    <div>
      <Navbar />
       
      <div className="px-6 md:px-20 py-16 justify-center text-[#1e1e1e] font-sans max-w-5xl mx-auto p-16">
        <div className='h-[100vh] flex items-center justify-center'>
          <h2
            className="text-4xl md:text-5xl --mt-24 mb-32 text-[#3c597B] text-center"
          style={{ fontFamily: "Rofane", fontStyle: "italic" }}
          >
            <span className="italic font-normal">Our </span>
            <span className="not-italic font-normal">Framework</span>
          </h2>
          </div>
        {/* Vision */}
        <div className="flex flex-col md:flex-row md:items-start my-20">
          <h2 className="md:w-1/3 text-3xl md:text-4xl font-serif italic text-[#3c597B] mb-4 md:mb-0">
            The Vision
          </h2>
          <p className="md:w-2/3 text-base md:text-lg leading-relaxed">
            Histare envisions becoming a global leader in the business of art and design by preserving, celebrating, and reimagining India’s artistic and cultural legacy with the aim to inspire a global appreciation of India’s cultural wealth while driving its relevance in contemporary and future contexts.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#f1d394] mb-20" />

        {/* Mission */}
        <div className="flex flex-col md:flex-row md:items-start mb-20">
          <h2 className="md:w-1/3 text-3xl md:text-4xl font-serif italic text-[#3c597B] mb-4 md:mb-0">
            The Mission
          </h2>
          <div className="md:w-2/3 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Our mission is to connect India’s vast artistic heritage with discerning patrons worldwide, fostering an ecosystem where creativity thrives and creators are empowered. Through innovative design principles, sustainable methodologies, and meaningful collaborations, Histare seeks to transform the landscape of art and culture. We aim to:
            </p>
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                <strong>Promote Innovation:</strong> Reimagine traditional art forms through contemporary design interventions to ensure their continued relevance.
              </li>
              <li>
                <strong>Empower Creators:</strong> Offer platforms and resources to artisans and designers, enabling them to sustain their practices and achieve global recognition.
              </li>
              <li>
                <strong>Foster Sustainability:</strong> Embed environmentally conscious practices into every aspect of our work, from art production to curation.
              </li>
              <li>
                <strong>Drive Collaboration:</strong> Build partnerships with stakeholders across industries to expand the reach and impact of Indian art and design.
              </li>
            </ol>
            <p>
              Through this comprehensive approach, Histare is committed to creating a lasting impact on the art and design world, shaping a future where tradition and innovation harmoniously coexist.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#f1d394] mb-20" />

        {/* Purpose */}
        <div className="flex flex-col md:flex-row md:items-start">
          <h2 className="md:w-1/3 text-3xl md:text-4xl font-serif italic text-[#3c597B] mb-4 md:mb-0">
            The Purpose
          </h2>
          <p className="md:w-2/3 text-base md:text-lg leading-relaxed">
            Histare passionately preserves India’s artistic legacy through traditional, contemporary, and modern art. It showcases creators’ masterpieces globally while intertwining tradition with innovation, empowering future creators, and practicing a transformative legacy that resonates through generations.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
