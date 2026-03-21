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
    img: "/images/insights/Reflection_TEP_Histare.jpg",
    pdf: "/pdf/Reflection_TEP_Histare.pdf",
    pdf_title: "Reflection_TEP_Histare.pdf"
  },
  {
    id: 2,
    title: 'The Art Gestalt',
    type: 'Craft practices Report',
    img: "/images/insights/The-Art-GestaltCraftPractiseReport_Histare.jpg",
    pdf: "/pdf/The Art GestaltCraftPractiseReport_Histare.pdf",
    pdf_title: "The Art GestaltCraftPractiseReport_Histare.pdf"
  },
  {
    id: 3,
    title: 'Arthakya',
    type: 'Case Study',
    img: "/images/insights/Collection-Building-Case-study.jpg",
    pdf: "/pdf/Collection Building Case study.pdf",
  },
  {
    id: 4,
    title: 'The Vitrine',
    type: 'Case Study',
    img: "/images/insights/The-Vitrine-case-study.jpg",
    pdf: "/pdf/The Vitrine case study.pdf",
  },
  {
    id: 5,
    title: 'Art Gestalt',
    type: 'Market Research Report',
    img: "/images/insights/MRR---Art-Gestalt.jpg",
    pdf: "/pdf/MRR - Art Gestalt.pdf",
  },
  {
    id: 6,
    title: 'How Sustainability Has Shaped Up In Traditional Culture',
    type: 'Exploratory Report',
    img: "/images/insights/How-Sustainability-Has-Shaped-Up-in-Traditional-Culture.jpg",
    pdf: "/pdf/How Sustainability Has Shaped Up in Traditional Culture.pdf",
  },
  {
    id: 7,
    title: 'Digital Paintings',
    type: 'Exploratory Report',
    img: "/images/insights/Digital-Paintings-.jpg",
    pdf: "/pdf/Digital Paintings .pdf",
  },
  {
    id: 8,
    title: 'Abstract Expressionism',
    type: 'Exploratory Report',
    img: "/images/insights/Abstract-Expressionism.jpg",
    pdf: "/pdf/Abstract Expressionism.pdf",
  },
  {
    id: 9,
    title: 'Cubism',
    type: 'Exploratory Report',
    img: "/images/insights/Cubism.jpg",
    pdf: "/pdf/Cubism.pdf",
  },
  {
    id: 10,
    title: 'Market Research Report',
    type: 'Market Research Report',
    img: "/images/insights/MARKET-RESEARCH-REPORT.jpg",
    pdf: "/pdf/MARKET RESEARCH REPORT_4 SEPT.pdf",
  },
  {
    id: 11,
    title: 'Habitat CTB',
    type: 'Case Study',
    img: "/images/insights/Habitat-CTB.jpg",
    pdf: "/pdf/Habitat CTB.pdf",
  },
  {
    id: 12,
    title: 'Post Auction - Habitat for Humanity',
    type: 'Impact Report',
    img: "/images/insights/Post-Auction_Habitat-for-Humanity.jpg",
    pdf: "/pdf/Post Auction_Habitat for Humanity.pdf",
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
          <section className="snap-start">
            <Footer
              prevPage={{ label: "Our Essence", href: "/essence" }}
              nextPage={{ label: "In the Spotlight", href: "/media" }}
            />
          </section>

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