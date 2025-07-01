import React from 'react'

const interests = [
  "Art Exhibitions and Auctions",
  "Condition Reporting",
  "BNPL (Buy Now, Pay Later) of Art Collections",
  "AMC (Annual Maintenance Contract) of Art Collections",
  "Fractal Ownership",
  "Insurance of Art Collections",
  "Authentication",
  "Maintenance Planning",
  "Building Art Collections",
  "Art Restoration",
  "Valuation of Art Collections",
  "Heritage Restoration",
  "Documentation - Photographic and Written",
  "Research",
  "Artistic Design Intervention and Innovation"
];

export default function Interest() {
  return (
    <div className="px-6 py-12 text-center min-h-screen">
      <h2
        className="text-4xl md:text-5xl mb-12 text-[#3c597B]"
        style={{ fontFamily: 'Rofane' }}
      >
      <i>  Our </i>Spectrum <i> of</i> Interests
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {interests.map((title, index) => (
          <div key={index} className="flex flex-col items-center text-sm text-[#3c597B]">
            <img
              src={`/images/landing/i${index + 1}.png`}
              alt={title}
              className="w-16 h-16 mb-4"
            />
            <p className="max-w-[150px]">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
