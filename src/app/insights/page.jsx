'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const reports = [
  {
    id: 1,
    title: 'A REFLECTION',
    type: 'Impact Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/reflection_ir.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/erbe_project/impact_report.pdf',
  },
  {
    id: 2,
    title: 'THE ART GESTALT',
    type: 'Craft practices Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/art_gestalt_cpr.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/erbe_project/art_gestalt.pdf',
  },
  {
    id: 3,
    title: 'COLLECTION BUILDING',
    type: 'Case Study',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/collection_building_case_study.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/collection_building_case_study.pdf',
  },
  {
    id: 4,
    title: 'SMART PROGRAMME',
    type: 'Case Study',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/vitrine_case_study.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/vitrine_case_study.pdf',
  },
  {
    id: 5,
    title: 'THE ART GESTALT',
    type: 'Market Research Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/mrr_art_gestalt.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/mrr_art_gestalt.pdf',
  },
  {
    id: 6,
    title: 'HOW SUSTAINABILITY HAS SHAPED UP IN TRADITIONAL CULTURE',
    type: 'Exploratory Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/nfi.png',
    pdfUrl: 'https://example.com/sustainability1.pdf',
  },
  {
    id: 7,
    title: 'DIGITAL PAINTINGS',
    type: 'Exploratory Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/digital_paintings.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/digital_paintings.pdf',
  },
  {
    id: 8,
    title: 'ABSTRACT EXPRESSIONISM',
    type: 'Exploratory Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/nfi.png',
    pdfUrl: 'https://example.com/abstract-expressionism1.pdf',
  },
  {
    id: 9,
    title: 'CUBISM',
    type: 'Exploratory Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/cubism.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/cubism.pdf',
  },
  {
    id: 10,
    title: 'INDIAN ART AND CRAFTS',
    type: 'Market Research Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/indian_arts_and_crafts.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/iac_mrr.pdf',
  },
  {
    id: 11,
    title: 'HOW SUSTAINABILITY HAS SHAPED UP IN TRADITIONAL CULTURE',
    type: 'Creative Study',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/how_sustainability_has_shaped.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/how_sustainability_has_shaped.pdf',
  },
  {
    id: 12,
    title: 'ABSTRACT EXPRESSIONISM',
    type: 'Creative Study',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/abstract_expressionism.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/abstract_expressionism.pdf',
  },
];

export default function Insights() {
  return (
    <>
    <div className="overflow-hidden">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Section 1: Title */}
      <section className="h-screen flex items-center justify-center text-[#1e1e1e] px-6 md:px-20">
        <h2
          className="text-4xl md:text-5xl text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
        >
          <span className="not-italic font-normal">Insights</span>
        </h2>
      </section>

      {/* Section 2: Description */}
      <section className="h-screen flex items-center justify-center text-[#1e1e1e] px-6 md:px-20">
        <p className="text-base md:text-lg text-[#1e1e1e] max-w-3xl mx-auto leading-relaxed text-center">
          Histare conducts extensive research to explore diverse aspects of the Indian creative industry, aiming to
          uncover innovative strategies for bolstering arts support with a targeted approach. Additionally, we generate
          studies, reports, and white papers to effectively showcase advancements in our developmental initiatives.
        </p>
      </section>

      {/* Section 3: Reports Grid */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm md:text-base">
            {reports.map((report) => (
              <a
                key={report.id} 
                href={report.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light hover:underline"
              >
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src={report.imageUrl}
                    alt={report.title}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded shadow"
                  />
                  {report.title}
                  <div className="text-gray-500 text-sm">{report.type}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Footer */}
     
    </div>
    <Footer/>
    </>
  );
}