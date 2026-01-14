'use client';

import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import Footer from '../components/footerblank';

const CustomPDFViewer = dynamic(() => import('../components/CustomPDFViewer'), {
  ssr: false,
});

const reports = [
  {
    id: 1,
    title: 'A Reflection',
    type: 'Impact Report',
    img: "/images/insights/reflection.png",
    pdf: "/pdf/impact.pdf",
    pdf_title: "impact.pdf"
  },
  {
    id: 2,
    title: 'The Art Gestalt',
    type: 'Craft practices Report',
    img: "/images/insights/gestalt.png",
    pdf: "/pdf/gestalt.pdf",
    pdf_title: "gestalt.pdf"
  },
  {
    id: 3,
    title: 'Arthakya',
    type: 'Case Study',
    img: "/images/insights/building.png",
    pdf: "/pdf/collection_building_case_study.pdf",
  },
  {
    id: 4,
    title: 'Rangavistara',
    type: 'Case Study',
    img: "/images/insights/smart.png",
    pdf: "/pdf/vitrine_case_study.pdf",
  },
  {
    id: 5,
    title: 'The Art Gestalt',
    type: 'Market Research Report',
    img: "/images/insights/art_gestalt.png",
    pdf: "/pdf/Art.pdf",
  },
  {
    id: 6,
    title: 'How Sustainability Has Shaped Up In Traditional Culture',
    type: 'Exploratory Report',
    img: "/images/insights/sustainability.png",
    pdf: "/pdf/Sustainability.pdf",
  },
  {
    id: 7,
    title: 'Digital Paintings',
    type: 'Exploratory Report',
    img: "/images/insights/digital.png",
    pdf: "/pdf/digital.pdf",
  },
  {
    id: 8,
    title: 'Abstract Expressionism',
    type: 'Exploratory Report',
    img: "/images/insights/abstract.png",
    pdf: "/pdf/Abstract.pdf",
  },
  {
    id: 9,
    title: 'Cubism',
    type: 'Exploratory Report',
    img: "/images/insights/cubism.png",
    pdf: "/pdf/Cubism.pdf",
  },
  {
    id: 10,
    title: 'Indian art and crafts',
    type: 'Market Research Report',
    img: "/images/insights/indian.png",
    pdf: "/pdf/indian.pdf",
  },
];

export default function Insights() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (report) => {
    setSelectedPdf({ url: report.pdf, title: report.title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf(null);
  };

  return (
    <>
      <div className="overflow-x-hidden h-screen snap-y snap-mandatory overflow-y-scroll">


        {/* Section 1: Title */}
        <section className="h-screen snap-start flex items-center justify-center text-[#1e1e1e] px-6 md:px-20">
          <h2
            className="text-4xl md:text-8xl text-[#3c597B] text-center"
            style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
          >
            <span className="not-italic font-normal">Insights</span>
          </h2>
        </section>

        {/* Section 2: Description */}
        <section className="h-screen snap-start flex items-center text-[#1e1e1e] px-6 md:px-20">
          <p className="text-base md:text-lg text-[#1e1e1e] max-w-3xl mx-auto leading-relaxed justify-self-auto text-justify" style={{ fontFamily: 'Optima' }}>
            Histare conducts extensive research to explore diverse aspects of the Indian creative industry, aiming to
            uncover innovative strategies for bolstering arts support with a targeted approach. Additionally, we generate
            studies, reports, and white papers to effectively showcase advancements in our developmental initiatives.
          </p>
        </section>

        {/* Section 1 - Header */}
        <div className="snap-start min-h-screen w-full flex flex-col">
          <div className="flex-1 flex items-center justify-center px-6 md:px-20 --pt-24 --bg-red-200">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center">
                {reports.map((report) => (
                  <button
                    key={report.id}
                    onClick={() => handleCardClick(report)}
                    className="--bg-red-200 p-[20px] --h-[400px] flex flex-col justify-start font-light transition-transform hover:scale-105 w-full max-w-[200px] cursor-pointer border-none --bg-transparent p-0"
                  >
                    <div className="--bg-blue-200 flex flex-col items-center justify-start space-y-3 text-center w-full">
                      <div className="w-full aspect-[4/4] relative overflow-hidden rounded-lg shadow-md bg-gray-100">
                        <img
                          src={report.img}
                          alt={report.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <h3 className="text-sm md:text-base font-medium text-[#1e1e1e] leading-tight px-1">
                        {report.title}
                      </h3>
                      <div className="text-gray-500 text-xs md:text-sm">{report.type}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Footer - No padding, full width */}
          {/* <section className="snap-start">
          <Footer />
        </section> */}
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && selectedPdf && (
        <CustomPDFViewer
          url={selectedPdf.url}
          title={selectedPdf.title}
          onClose={closeModal}
        />
      )}
    </>
  );
}