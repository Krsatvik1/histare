'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/footerblank';
import WorkCard from './WorkCard';
import artworks, { ARTISTS, MEDIUM_CATEGORIES, AVAILABILITIES } from './data/artworks';

const FACETS = ['ALL', 'MEDIUM', 'AVAILABILITY', 'ARTIST'];
const BATCH = 16;

const countBy = (key) =>
  artworks.reduce((acc, w) => {
    acc[w[key]] = (acc[w[key]] || 0) + 1;
    return acc;
  }, {});
const MEDIUM_COUNTS = countBy('mediumCategory');
const AVAIL_COUNTS = countBy('availability');
const ARTIST_COUNTS = countBy('artist');

export default function WorksPage() {
  const [activeFacet, setActiveFacet] = useState(null);
  const [selected, setSelected] = useState({
    medium: new Set(),
    availability: new Set(),
    artist: new Set(),
  });
  const [artistQuery, setArtistQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(BATCH);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  const selectedCount =
    selected.medium.size + selected.availability.size + selected.artist.size;

  useEffect(() => {
    setVisibleCount(BATCH);
  }, [selected]);

  const filtered = useMemo(
    () =>
      artworks.filter(
        (w) =>
          (selected.medium.size === 0 || selected.medium.has(w.mediumCategory)) &&
          (selected.availability.size === 0 || selected.availability.has(w.availability)) &&
          (selected.artist.size === 0 || selected.artist.has(w.artist))
      ),
    [selected]
  );

  const toggleValue = (facet, value) => {
    setSelected((prev) => {
      const next = new Set(prev[facet]);
      next.has(value) ? next.delete(value) : next.add(value);
      return { ...prev, [facet]: next };
    });
  };

  const clearAll = () => {
    setSelected({ medium: new Set(), availability: new Set(), artist: new Set() });
    setArtistQuery('');
    setActiveFacet(null);
  };

  const onTab = (tab) => {
    if (tab === 'ALL') {
      clearAll();
      return;
    }
    setActiveFacet((cur) => (cur === tab ? null : tab));
  };

  const isActive = (tab) => {
    if (tab === 'ALL') return selectedCount === 0;
    if (tab === 'MEDIUM') return activeFacet === 'MEDIUM' || selected.medium.size > 0;
    if (tab === 'AVAILABILITY')
      return activeFacet === 'AVAILABILITY' || selected.availability.size > 0;
    if (tab === 'ARTIST') return activeFacet === 'ARTIST' || selected.artist.size > 0;
    return false;
  };

  const chips = [
    ...[...selected.medium].map((v) => ({ facet: 'medium', value: v })),
    ...[...selected.availability].map((v) => ({ facet: 'availability', value: v })),
    ...[...selected.artist].map((v) => ({ facet: 'artist', value: v })),
  ];

  const artistList = ARTISTS.filter((a) =>
    a.toLowerCase().includes(artistQuery.trim().toLowerCase())
  );

  const PillOption = ({ facet, value, count }) => {
    const on = selected[facet].has(value);
    return (
      <button
        onClick={() => toggleValue(facet, value)}
        className={`rounded-[25px] px-4 py-1.5 text-[12px] uppercase tracking-wide transition-colors ${
          on
            ? 'bg-[#3c597B] text-[#F3F0ED] border border-[#3c597B]'
            : 'border border-[#3c597B] text-[#3c597B] hover:bg-[#3c597B]/10'
        }`}
      >
        {value} <span className="opacity-60">({count})</span>
      </button>
    );
  };

  const MediumOptions = (
    <div className="flex flex-wrap gap-2">
      {MEDIUM_CATEGORIES.map((m) => (
        <PillOption key={m} facet="medium" value={m} count={MEDIUM_COUNTS[m] || 0} />
      ))}
    </div>
  );

  const AvailabilityOptions = (
    <div className="flex flex-wrap gap-2">
      {AVAILABILITIES.map((a) => (
        <PillOption key={a} facet="availability" value={a} count={AVAIL_COUNTS[a] || 0} />
      ))}
    </div>
  );

  const ArtistOptions = (
    <div>
      <input
        value={artistQuery}
        onChange={(e) => setArtistQuery(e.target.value)}
        placeholder="Search artists"
        className="w-full max-w-xs border-b border-[#3c597B]/30 bg-transparent pb-2 mb-6 text-[15px] text-[#333] placeholder:text-gray-400 focus:outline-none focus:border-[#3c597B]"
      />
      {artistList.length === 0 ? (
        <p className="text-[14px] text-gray-500 py-2">No artists match.</p>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-x-10">
          {artistList.map((a) => {
            const on = selected.artist.has(a);
            return (
              <button
                key={a}
                onClick={() => toggleValue('artist', a)}
                className="block w-full text-left py-[5px] text-[14px] break-inside-avoid transition-colors"
              >
                <span className={on ? 'text-[#3c597B] font-medium' : 'text-[#555] hover:text-[#3c597B]'}>{a}</span>
                <span className="text-gray-400"> ({ARTIST_COUNTS[a] || 0})</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  const panelFor = (facet) =>
    facet === 'MEDIUM' ? MediumOptions : facet === 'AVAILABILITY' ? AvailabilityOptions : ArtistOptions;

  const line = 'border-t border-[#3c597B]/20';

  return (
    <div className="min-h-screen w-full bg-[#F3F0ED]" style={{ fontFamily: 'Optima' }}>
      {/* Title (logo + menu come from the global fixed Navbar) */}
      <header className="px-6 md:px-16 pt-24 sm:pt-28 md:pt-28 pb-5 text-center">
        <h1
          className="text-[40px] md:text-[64px] leading-none capitalize text-[#3c597B]"
          style={{ fontFamily: 'Playfair Display' }}
        >
          All Works
        </h1>
      </header>

      <div className="max-w-[1300px] mx-auto px-6 md:px-16">
        {/* divider */}
        <div className={line} />

        {/* Desktop filter tabs — left aligned */}
        <div className="relative">
          <nav className="hidden md:flex items-center justify-start gap-10 lg:gap-14">
            {FACETS.map((tab) => (
              <button
                key={tab}
                onClick={() => onTab(tab)}
                className={`relative py-4 text-[16px] md:text-[18px] uppercase tracking-wide transition-colors ${
                  isActive(tab) ? 'text-[#3c597B]' : 'text-[#555] hover:text-[#3c597B]'
                }`}
              >
                {tab}
                {isActive(tab) && tab !== 'ALL' && (
                  <span className="absolute left-0 -bottom-px h-[2px] w-full bg-[#3c597B]" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile filter trigger */}
          <div className="md:hidden flex justify-start py-3">
            <button
              onClick={() => setMobileSheetOpen(true)}
              className="inline-flex items-center gap-2 border border-[#3c597B] text-[#3c597B] rounded-[25px] px-6 py-2 text-[13px] uppercase tracking-wide"
            >
              Filters {selectedCount > 0 && <span>({selectedCount})</span>}
            </button>
          </div>

          {/* Desktop dropdown panel — flat, on the page background, under the tabs */}
          {activeFacet && (
            <div className="hidden md:block animate-fadeIn pt-2 pb-6">{panelFor(activeFacet)}</div>
          )}
        </div>

        {/* divider */}
        <div className={line} />

        {/* FILTERED BY */}
        <div className="py-3 flex flex-wrap items-center gap-2 min-h-[44px]">
          <span className="text-[12px] uppercase tracking-wide text-[#555] mr-1">Filtered by</span>
          {chips.map(({ facet, value }) => (
            <button
              key={facet + value}
              onClick={() => toggleValue(facet, value)}
              className="inline-flex items-center gap-2 rounded-[25px] border border-[#3c597B] text-[#3c597B] px-3 py-1 text-[12px] uppercase tracking-wide transition-colors hover:bg-[#3c597B] hover:text-[#F3F0ED]"
            >
              {value}
              <span aria-hidden className="text-[14px] leading-none">×</span>
            </button>
          ))}
          {selectedCount > 0 && (
            <button
              onClick={clearAll}
              className="ml-2 text-[12px] uppercase tracking-wide text-gray-500 underline underline-offset-2 hover:text-[#3c597B]"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Grid / empty state */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-24 px-6">
            <p className="text-[18px] text-[#333]">No works match these filters.</p>
            <p className="text-[14px] text-gray-500 mt-2">Try removing a filter or two.</p>
            <button
              onClick={clearAll}
              className="mt-6 border border-[#3c597B] text-[#3c597B] rounded-[25px] px-8 py-3 text-[13px] uppercase tracking-wide hover:bg-[#3c597B] hover:text-[#F3F0ED]"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-2">
            {filtered.slice(0, visibleCount).map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        )}

        {/* Bottom: short divider, count, load more */}
        {filtered.length > 0 && (
          <div className="flex flex-col items-center pt-16 pb-4">
            <div className="w-[295px] border-t border-[#3c597B]/25" />
            <p className="text-[13px] uppercase tracking-wide text-[#555] text-center pt-5">
              Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} works
            </p>
            {visibleCount < filtered.length && (
              <button
                onClick={() => setVisibleCount((c) => c + BATCH)}
                className="mt-6 border border-[#3c597B] text-[#3c597B] rounded-[25px] px-10 py-3 text-[20px] transition-colors hover:bg-[#3c597B] hover:text-[#F3F0ED]"
              >
                Load More Works
              </button>
            )}
          </div>
        )}
      </div>

      <Footer />

      {/* Mobile filter sheet */}
      <AnimatePresence>
        {mobileSheetOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSheetOpen(false)}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 max-h-[85dvh] overflow-y-auto rounded-t-[20px] bg-[#F3F0ED] p-5 md:hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: 'Optima' }}
            >
              <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[#3c597B]/30" />

              <p className="text-[13px] uppercase tracking-wide text-[#3c597B] mb-2">Medium</p>
              <div className="mb-6">{MediumOptions}</div>

              <p className="text-[13px] uppercase tracking-wide text-[#3c597B] mb-2">Availability</p>
              <div className="mb-6">{AvailabilityOptions}</div>

              <p className="text-[13px] uppercase tracking-wide text-[#3c597B] mb-2">Artist</p>
              <div className="mb-6">{ArtistOptions}</div>

              <div className="sticky bottom-0 bg-[#F3F0ED] pt-3 flex gap-3">
                <button
                  onClick={clearAll}
                  className="flex-1 rounded-[25px] border border-[#3c597B] text-[#3c597B] py-3 text-[13px] uppercase tracking-wide"
                >
                  Clear all
                </button>
                <button
                  onClick={() => setMobileSheetOpen(false)}
                  className="flex-1 rounded-[25px] bg-[#3c597B] text-[#F3F0ED] py-3 text-[13px] uppercase tracking-wide"
                >
                  Show {filtered.length} works
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
