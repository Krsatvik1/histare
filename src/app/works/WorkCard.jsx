'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTransition } from '../context/TransitionContext';

// Shared artwork card used by the PLP grid and the detail "You may also like" row.
// Artwork fills the cream tile (object-cover), matching Figma's filled-card treatment.
// next/image resizes the (often very large) high-res source down to display size.
export default function WorkCard({ work }) {
  const { navigate } = useTransition();
  const [imgError, setImgError] = useState(false);
  const showImage = work.hasImage && work.image && !imgError;

  return (
    <a
      href={`/works/${work.slug}`}
      onClick={(e) => {
        e.preventDefault();
        navigate(`/works/${work.slug}`, work.title);
      }}
      className="group flex flex-col w-full cursor-pointer"
      style={{ fontFamily: 'Optima' }}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[rgba(255,253,251,0.5)]">
        {showImage ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => setImgError(true)}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#3c597B]">
            <img src="/images/navbar/logo.png" alt="" className="h-12 w-auto opacity-60" />
            <span className="text-[12px] uppercase tracking-wide opacity-70">Image coming soon</span>
          </div>
        )}
      </div>
      <p className="mt-3 text-[13px] uppercase tracking-wide text-[#3c597B] line-clamp-1">{work.artist}</p>
      <p className="text-[18px] text-[#333333] leading-snug line-clamp-2">{work.title}</p>
    </a>
  );
}
