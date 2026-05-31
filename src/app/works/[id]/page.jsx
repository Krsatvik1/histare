'use client';

import React, { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../../components/footerblank';
import WorkCard from '../WorkCard';
import { useTransition } from '../../context/TransitionContext';
import artworks from '../data/artworks';

// availability badge styling for the real data values
const badgeClass = (availability) => {
  switch (availability) {
    case 'Sold out':
      return 'bg-[#3c597B] text-[#F3F0ED] border border-[#3c597B]';
    case 'For Enquiry':
      return 'border border-gray-400 text-gray-500';
    case 'For Sale':
    default:
      return 'border border-[#3c597B] text-[#3c597B]';
  }
};

function recommend(current, n = 4) {
  const exclude = new Set([current.id]);
  const picks = [];
  const add = (arr) => {
    for (const w of arr) {
      if (picks.length >= n) break;
      if (!exclude.has(w.id)) {
        picks.push(w);
        exclude.add(w.id);
      }
    }
  };
  add(artworks.filter((w) => w.artist === current.artist));
  add(artworks.filter((w) => w.mediumCategory === current.mediumCategory));
  add([...artworks].sort(() => Math.random() - 0.5));
  return picks;
}

export default function WorkDetailPage() {
  const params = useParams();
  const { navigate } = useTransition();
  // The route segment is a slug like "2_untitled"; resolve by its numeric id prefix
  // (also tolerates a bare id and an exact slug match).
  const work = useMemo(() => {
    const raw = String(params.id ?? '');
    const idNum = parseInt(raw.split('_')[0], 10);
    return (
      artworks.find((w) => w.slug === raw) ||
      artworks.find((w) => w.id === idNum) ||
      null
    );
  }, [params.id]);

  const images = useMemo(() => {
    if (!work) return [];
    if (Array.isArray(work.images) && work.images.length) return work.images;
    return work.image ? [work.image] : [];
  }, [work]);

  const related = useMemo(() => (work ? recommend(work) : []), [work]);
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState(false);

  if (!work) {
    return (
      <div
        className="min-h-screen w-full bg-[#F3F0ED] flex flex-col items-center justify-center px-6 text-center"
        style={{ fontFamily: 'Optima' }}
      >
        <p className="text-[20px] text-[#333] mb-6">Work not found.</p>
        <button
          onClick={() => navigate('/works', 'All Works')}
          className="border border-[#3c597B] text-[#3c597B] rounded-[25px] px-8 py-3 text-[13px] uppercase tracking-wide hover:bg-[#3c597B] hover:text-[#F3F0ED]"
        >
          Back to All Works
        </button>
      </div>
    );
  }

  const hasImage = images.length > 0 && !imgError;
  const multi = images.length > 1;
  const specLine = [work.medium, work.size, work.yearLabel].filter(Boolean).join('  |  ');

  return (
    <div className="min-h-screen w-full bg-[#F3F0ED]" style={{ fontFamily: 'Optima' }}>
      <div className="pt-24 sm:pt-28 md:pt-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Text block */}
          <div className="order-2 md:order-1 w-full md:w-2/5">
            <p className="text-[13px] uppercase tracking-wide text-[#3c597B]">{work.artist}</p>
            <h1 className="text-[28px] md:text-[34px] leading-tight text-[#333333] mt-1">{work.title}</h1>
            {specLine && <p className="text-[14px] text-gray-600 mt-2">{specLine}</p>}

            <span
              className={`inline-flex rounded-[25px] px-4 py-1 mt-4 text-[12px] uppercase tracking-wide ${badgeClass(
                work.availability
              )}`}
            >
              {work.availability}
            </span>

            {work.note && (
              <p className="text-[15px] leading-relaxed text-[#1e1e1e] text-justify mt-6 max-w-prose">
                {work.note}
              </p>
            )}

            <button
              onClick={() => navigate('/contact', 'Contact Us')}
              className="mt-8 border border-[#3c597B] text-[#3c597B] rounded-[25px] px-8 py-3 text-[13px] uppercase tracking-wide transition-colors hover:bg-[#3c597B] hover:text-[#F3F0ED]"
            >
              Enquire
            </button>
          </div>

          {/* Image / carousel */}
          <div className="order-1 md:order-2 w-full md:w-3/5">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[rgba(255,253,251,0.5)]">
              {hasImage ? (
                <Image
                  src={images[current]}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  onError={() => setImgError(true)}
                  className="object-contain p-6 md:p-12"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#3c597B]">
                  <img src="/images/navbar/logo.png" alt="" className="h-16 w-auto opacity-60" />
                  <span className="text-[12px] uppercase tracking-wide opacity-70">Image coming soon</span>
                </div>
              )}

              {multi && (
                <>
                  <button
                    aria-label="Previous"
                    onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
                    className="absolute top-1/2 -translate-y-1/2 left-3 text-[#3c597B] hover:opacity-70"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    aria-label="Next"
                    onClick={() => setCurrent((c) => (c + 1) % images.length)}
                    className="absolute top-1/2 -translate-y-1/2 right-3 text-[#3c597B] hover:opacity-70"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>

            {multi && (
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Image ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === current ? 'bg-[#3c597B]' : 'bg-[#3c597B]/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* You may also like */}
        {related.length > 0 && (
          <div className="max-w-7xl mx-auto mt-24">
            <p className="text-[13px] uppercase tracking-wide text-[#3c597B] text-center mb-8">
              You may also like
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {related.map((w) => (
                <WorkCard key={w.id} work={w} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
