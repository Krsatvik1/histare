'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerblank';

const reports = [
  {
    id: 1,
    title: 'A Reflection',
    type: 'Impact Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/reflection_ir.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/erbe_project/impact_report.pdf',
  },
  {
    id: 2,
    title: 'The Art Gestalt',
    type: 'Craft practices Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/art_gestalt_cpr.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/erbe_project/art_gestalt.pdf',
  },
  {
    id: 3,
    title: 'Collection Building',
    type: 'Case Study',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/collection_building_case_study.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/collection_building_case_study.pdf',
  },
  {
    id: 4,
    title: 'Smart Programme',
    type: 'Case Study',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/vitrine_case_study.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/vitrine_case_study.pdf',
  },
  {
    id: 5,
    title: 'The Art Gestalt',
    type: 'Market Research Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/mrr_art_gestalt.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/mrr_art_gestalt.pdf',
  },
  {
    id: 6,
    title: 'How Sustainability Has Shaped Up In Traditional Culture',
    type: 'Exploratory Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/nfi.png',
    pdfUrl: 'https://example.com/sustainability1.pdf',
  },
  {
    id: 7,
    title: 'Digital Paintings',
    type: 'Exploratory Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/digital_paintings.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/digital_paintings.pdf',
  },
  {
    id: 8,
    title: 'Abstract Expressionism',
    type: 'Exploratory Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/nfi.png',
    pdfUrl: 'https://example.com/abstract-expressionism1.pdf',
  },
  {
    id: 9,
    title: 'Cubism',
    type: 'Exploratory Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/cubism.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/cubism.pdf',
  },
  {
    id: 10,
    title: 'Indian art and crafts',
    type: 'Market Research Report',
    imageUrl: 'https://dev-histare.netlify.app/images/insightsImages/indian_arts_and_crafts.png',
    pdfUrl: 'https://dev-histare.netlify.app/pdfs/insights/iac_mrr.pdf',
  },
];


export default function Insights() {
  return (
    <>
      <div className="overflow-x-hidden h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* Section 1: Title */}
        <section className="h-screen snap-start flex items-center justify-center text-[#1e1e1e] px-6 md:px-20">
          <h2
            className="text-4xl md:text-5xl text-[#3c597B] text-center"
            style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
          >
            <span className="not-italic font-normal">Insights</span>
          </h2>
        </section>

        {/* Section 2: Description */}
        <section className="h-screen snap-start flex items-center text-[#1e1e1e] px-6 md:px-20">
          <p className="text-base md:text-lg text-[#1e1e1e] max-w-3xl mx-auto leading-relaxed justify-self-auto text-justify">
            Histare conducts extensive research to explore diverse aspects of the Indian creative industry, aiming to
            uncover innovative strategies for bolstering arts support with a targeted approach. Additionally, we generate
            studies, reports, and white papers to effectively showcase advancements in our developmental initiatives.
          </p>
        </section>

        {/* Section 3: Reports Grid with Footer */}
        <section className="min-h-screen snap-start flex flex-col py-20 px-6 md:px-20 md:pb-0">
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex flex-wrap  gap-6 md:gap-12 justify-center ">
                {reports.map((report) => (
                  <a
                    key={report.id}
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light hover:underline transition-transform hover:scale-105 flex justify-center items-center"
                    style={{
                      width: 'calc(50% - 12px)'
                    }}
                  >
                    <div className="flex flex-col items-center space-y-3 text-center w-full mb-5 md:mb-0">
                      <img
                        src={report.imageUrl}
                        alt={report.title}
                        className="w-full h-32 md:h-44 lg:h-[200px] object-cover rounded-lg shadow-md"
                      />
                      <h3 className="text-sm md:text-base font-medium text-[#1e1e1e] leading-tight">
                        {report.title}
                      </h3>
                      <div className="text-gray-500 text-xs md:text-sm">{report.type}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='-ml-20 mb-0 '>
          <Footer />
          </div>
        </section>

        {/* Custom CSS for responsive layout */}
        <style jsx>{`
          @media (min-width: 640px) {
            .flex-wrap > a {
              width: calc(20% - 6px) !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}