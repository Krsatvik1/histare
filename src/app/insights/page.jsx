'use client';

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const reports = [
  { id: 1, title: 'A REFLECTION', type: 'Impact Report' },
  { id: 2, title: 'THE ART GESTALT', type: 'Civic Aesthetics Report' },
  { id: 3, title: 'COLLECTION BUILDING', type: 'Case Study' },
  { id: 4, title: 'SAMAAT PROGRAMME', type: 'Case Study' },
  { id: 5, title: 'THE ART GESTALT I', type: 'Applied Research Report' },
  { id: 6, title: 'HOW SUSTAINABILITY INTERSECTS WITH TRADITIONAL CULTURE', type: 'Exploratory Report' },
  { id: 7, title: 'DIGITAL PAINTINGS', type: 'Exploratory Report' },
  { id: 8, title: 'ABSTRACT EXPRESSIONISM', type: 'Exploratory Report' },
  { id: 9, title: 'CUBISM', type: 'Exploratory Report' },
  { id: 10, title: 'DIGITAL PAINTINGS', type: 'Creative Study' },
  { id: 11, title: 'HOW SUSTAINABILITY TRANSLATES IN EMERGING GALLERIES', type: 'Creative Study' },
  { id: 12, title: 'ABSTRACT EXPRESSIONISM', type: 'Creative Study' },
];

export default function Insights() {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-20 py-24 text-[#1e1e1e] font-sans max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl mt-24 mb-16 text-[#3c597B] text-center"
          style={{ fontFamily: 'Rofane', fontStyle: 'italic' }}
        >
          <span className="not-italic font-normal">Insights</span>
        </h2>

        <p className="text-base md:text-lg text-[#1e1e1e] max-w-3xl mx-auto mb-16 leading-relaxed">
          Histare conducts extensive research to explore diverse aspects of the Indian creative industry, aiming to
          uncover innovative strategies for bolstering arts support with a targeted approach. Additionally, we generate
          studies, reports, and white papers to effectively showcase advancements in our developmental initiatives.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm md:text-base">
          {reports.map((report) => (
            <div key={report.id} className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-700">
                {report.id}
              </div>
              <div className="font-light">{report.title}</div>
              <div className="text-gray-500 text-sm">{report.type}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
