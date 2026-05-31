# Works PLP + Detail — Build-Ready UI / Component Spec

Scope: the `/works` product-listing page (PLP) and `/works/[id]` detail page, plus the homepage and global-nav touchpoints that link into them. Everything below is expressed in the **existing** Histare design system — no new visual language is introduced. Tailwind v4 is in use (`@tailwindcss/postcss`, no `tailwind.config.js`), so arbitrary-value classes like `text-[#3c597B]`, `rounded-[25px]`, and `style={{ fontFamily: 'Optima' }}` are the established pattern. Page-local animations are declared with `<style jsx>` blocks exactly as `collectors/`, `erbe/`, and `vitrine/` already do.

---

## 0. Design tokens & primitives (reuse, do not redefine)

These are the only values any component below should use. They are lifted from `globals.css` and the existing pages.

- **Page background:** `bg-[#F3F0ED]` (matches `--background` and every inner page).
- **Brand blue:** `#3c597B` (also written `#3c597b` / `#3c5978` in places — treat as one token). Use `text-[#3c597B]`, `border-[#3c597B]`.
- **Body text dark:** `#333333` (titles), `#1e1e1e` (paragraphs), `text-gray-500/600/800` for meta — all already in use.
- **Card surface:** `bg-[rgba(255,253,251,0.5)]` (Figma `rgba(255,253,251,0.5)`).
- **Fonts (via `style={{ fontFamily }}`, NOT Tailwind font classes — that is the repo convention):**
  - `'Optima'` — body, labels, meta, buttons.
  - `'Playfair Display'` — the large page title only (`@import`ed at top of `globals.css`; available 400–900).
  - `'Rofane'` — reserved for the route-transition overlay headings; **do not** use it for the `/works` title (Figma calls for Playfair here).
- **Type ramp from Figma, expressed in arbitrary classes:**
  - Artist label: Optima, uppercase, `text-[13px] tracking-wide uppercase text-[#3c597B]`.
  - Work title: Optima, `text-[18px] text-[#333333]`.
  - Page title "All Works": Playfair, `text-[64px] leading-none text-[#3c597B]` (`style={{ fontFamily: 'Playfair Display' }}`), responsive-down on mobile to `text-[40px]`.
- **Pill button (Load More / View All / Enquire):** `inline-flex items-center justify-center border border-[#3c597B] text-[#3c597B] rounded-[25px] px-8 py-3 text-[13px] uppercase tracking-wide transition-colors hover:bg-[#3c597B] hover:text-[#F3F0ED]` with `style={{ fontFamily: 'Optima' }}`.
- **Card hover:** `transition-transform hover:scale-105` (identical to `insights/page.jsx`).
- **Fade-in keyframe (reuse verbatim):**
  ```css
  @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
  .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
  ```
  Declare once per page in a `<style jsx>` block (same as `collectors/page.jsx`).
- **Navigation:** always via `const { navigate } = useTransition();` from `../context/TransitionContext`, called as `navigate(path, text)`. The `text` arg is the heading shown during the 1200 ms transition overlay; for Works use `navigate('/works', 'All Works')`. Internal anchors keep `href` for SEO/right-click but call `e.preventDefault()` then `navigate(...)` in `onClick`, exactly like `navbar.jsx` and `footerblank.jsx`.

### Shared data model

Reuse the field names already present in `components/landing/work.jsx` so the curated landing strip and the full PLP can share one source. Create `src/app/works/data.js` exporting `works` (the full ~73-item list) and helper selectors. Per-item shape:

```js
{
  id: 12,                       // number | string, used in /works/[id]
  author: 'Pathways To Liberation',   // ARTIST label (existing field name)
  title: 'Pathways To Liberation',    // work title (may equal author for now)
  material: 'Stainless steel, oil-based paint', // MEDIUM facet source
  size: '12 H Ft.',
  year: 2024,                   // new field, used in "Medium | Size | Year"
  availability: 'Available',    // 'Available' | 'On Hold' | 'Sold' — AVAILABILITY facet
  images: ['/images/nava/flower5.png'], // array; [] or missing => placeholder card
  note: '…~80 word curatorial note…'    // detail page only
}
```

Derive facets from this list (deduped, see §2). Keep `isVideo(src)` helper from `work.jsx` (`.mp4`/`.webm` => `<video autoPlay muted loop playsInline>`), since some items are videos.

---

## 1. PLP page scaffold — `src/app/works/page.jsx`

- `'use client'` at top (needs state + `useTransition`).
- **Do NOT** use scroll-snap here. Unlike `insights/framework`, the PLP is a free-scroll grid. Root is a normal flowing document:
  ```jsx
  <div className="min-h-screen w-full bg-[#F3F0ED]">
  ```
  No `snap-y snap-mandatory`, no `h-screen overflow-y-scroll`, no `.section`/`.snap-start` wrappers.
- **Header / logo bar:** the global `<Navbar />` is already mounted in `layout.js` (fixed, transparent, `z-50`). The PLP only needs top padding to clear it — reuse the contact-page value `pt-24 sm:pt-28 md:pt-32`. Do not render a second navbar or logo.
- **Title block:** centered "All Works" in Playfair brand-blue:
  ```jsx
  <header className="px-6 md:px-20 pt-24 sm:pt-28 md:pt-32 pb-6 text-center">
    <h1 className="text-[40px] md:text-[64px] leading-none text-[#3c597B]"
        style={{ fontFamily: 'Playfair Display' }}>All Works</h1>
  </header>
  ```
- **Page sections, top→bottom:** Title → Filter bar (§2) → Filtered-by chips (§3) → Count line (§4) → Card grid (§5) → Load More (§4) → empty state if applicable (§4) → `<Footer />`.
- **Footer:** import `Footer` from `../components/footerblank` (the variant used by inner pages). Pass `prevPage`/`nextPage` props if a sequence is desired, otherwise render plain. Since the page is free-scroll, omit any `snap-start` wrapper around it.
- **State (all `useState`):** `activeFacet` (which dropdown is open, or `null`), `selected` (`{ medium: Set, availability: Set, artist: Set }`), `artistQuery` (search box text), `visibleCount` (init `16`), `mobileSheetOpen` (bool). Filtering and counts are pure `useMemo` derivations over `works` + `selected` — no fetching, no effects.
- **Container width:** `max-w-7xl mx-auto px-6 md:px-20` wrapping the grid/controls, matching `insights` (`max-w-7xl mx-auto`).

---

## 2. Filter bar — tabs + active underline + per-facet dropdown panels

- **Tab row:** four tabs only — `ALL`, `MEDIUM`, `AVAILABILITY`, `ARTIST`. **Tradition is dropped.** Center the row under the title.
  ```jsx
  <nav className="flex items-center justify-center gap-6 md:gap-10 border-b border-[#3c597B]/20 px-6"
       style={{ fontFamily: 'Optima' }}>
    {['ALL','MEDIUM','AVAILABILITY','ARTIST'].map(tab => (
      <button key={tab} onClick={() => toggleFacet(tab)}
        className="relative py-4 text-[13px] uppercase tracking-wide text-[#3c597B] transition-colors hover:opacity-70">
        {tab}
        {/* active underline */}
        {isActive(tab) && (
          <span className="absolute left-0 -bottom-px h-[2px] w-full bg-[#3c597B]" />
        )}
      </button>
    ))}
  </nav>
  ```
- **Active state:** a tab is "active" (shows the 2px blue underline) when its dropdown is open **or** it currently has selections. `ALL` is active when no facet has selections; clicking `ALL` clears all selections and closes any open panel.
- **Dropdown panel per facet:** clicking `MEDIUM` / `AVAILABILITY` / `ARTIST` opens a panel directly below the tab row, entering with `animate-fadeIn`. Panel surface uses the card token so it reads as part of the system:
  ```jsx
  <div className="animate-fadeIn mx-auto mt-2 max-w-3xl rounded-[12px] border border-[#3c597B]/20
                  bg-[rgba(255,253,251,0.5)] backdrop-blur-sm p-4 md:p-6">
  ```
  Only one panel open at a time (`activeFacet`). Clicking the same tab again, clicking `ALL`, or clicking outside (a backdrop `onClick`) closes it.
- **Multi-select within a facet:** each option is a toggle (checkbox-style row or a selectable pill). Toggling adds/removes from that facet's `Set`. Selected option style mirrors the pill-on state: `bg-[#3c597B] text-[#F3F0ED]`; unselected: `border border-[#3c597B] text-[#3c597B]`.
- **Combining logic — AND across facets, OR within a facet.** A work passes if: (no medium selected OR its medium ∈ selected.medium) AND (no availability selected OR its availability ∈ selected.availability) AND (no artist selected OR its author ∈ selected.artist). Implement once in a `useMemo`:
  ```js
  const filtered = useMemo(() => works.filter(w =>
    (selected.medium.size     === 0 || selected.medium.has(mediumBucket(w))) &&
    (selected.availability.size === 0 || selected.availability.has(w.availability)) &&
    (selected.artist.size     === 0 || selected.artist.has(w.author))
  ), [selected]);
  ```
- **MEDIUM options:** derive distinct medium buckets from the data. Because raw `material` strings are long and comma-laden ("Nero Marquina marble, Pure brass Wire, Lapis Lazuli"), bucket them into a small controlled list (e.g. Marble, Metal/Brass, Wool/Silk Textile, Wood, Mixed Media, Paint/Paper) via a `mediumBucket(work)` mapper in `data.js`. Render buckets as toggle pills, wrap-flowed.
- **AVAILABILITY options:** the three states — `Available`, `On Hold`, `Sold`. Toggle pills.
- **ARTIST list (~28 after dedupe):** too many for plain pills, so this panel is **searchable + scrollable**:
  - A search input at top: `<input className="w-full rounded-[8px] border border-[#3c597B]/40 bg-transparent px-3 py-2 text-[14px] text-[#333] placeholder:text-gray-400 focus:outline-none focus:border-[#3c597B]" placeholder="Search artists…" />` bound to `artistQuery`.
  - A scroll region beneath: `max-h-[280px] overflow-y-auto` (inherits the brand-blue webkit scrollbar from `globals.css`). Each row is a toggle: small checkbox indicator + artist name in Optima `text-[14px]`. Selected row gets `text-[#3c597B] font-semibold`.
  - Filter the list client-side by `artistQuery` (case-insensitive `includes`). Show "No artists match" when empty.
  - Sort artists alphabetically; dedupe via `[...new Set(works.map(w => w.author))]`.

---

## 3. "FILTERED BY" removable chips + Clear all

Renders only when at least one selection exists, directly below the filter bar, entering with `animate-fadeIn`.

```jsx
<div className="animate-fadeIn mx-auto max-w-7xl px-6 md:px-20 py-3 flex flex-wrap items-center gap-2"
     style={{ fontFamily: 'Optima' }}>
  <span className="text-[13px] uppercase tracking-wide text-[#3c597B] mr-1">Filtered by</span>
  {allSelectedChips.map(({ facet, value }) => (
    <button key={facet+value} onClick={() => removeChip(facet, value)}
      className="inline-flex items-center gap-2 rounded-[25px] border border-[#3c597B]
                 text-[#3c597B] px-3 py-1 text-[12px] uppercase tracking-wide
                 transition-colors hover:bg-[#3c597B] hover:text-[#F3F0ED]">
      {value}
      <span aria-hidden className="text-[14px] leading-none">×</span>
    </button>
  ))}
  <button onClick={clearAll}
    className="ml-2 text-[12px] uppercase tracking-wide text-gray-500 underline underline-offset-2 hover:text-[#3c597B]">
    Clear all
  </button>
</div>
```

- Chips are the **pill** style (border `#3c597B`, `rounded-[25px]`) per Figma, one per selected value across all facets. The `×` removes just that value from its facet `Set`.
- `Clear all` resets all three `Set`s and `artistQuery`. Each removal/clear re-runs the `filtered` memo and re-derives the count; `visibleCount` resets to 16 on any filter change so the user starts from the top of the new result set.

---

## 4. Count line + Load More batching + empty state

- **Count line:** above the grid, right- or center-aligned, Optima uppercase:
  ```jsx
  <p className="text-[13px] uppercase tracking-wide text-[#3c597B] text-center py-2"
     style={{ fontFamily: 'Optima' }}>
    Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} works
  </p>
  ```
  When no filters are active, `filtered.length === 73` so it reads "SHOWING 16 OF 73 WORKS". The denominator always reflects the current filtered set, not the global 73.
- **Batching:** the grid maps `filtered.slice(0, visibleCount)`. The **Load More Works** pill appears only while `visibleCount < filtered.length`:
  ```jsx
  {visibleCount < filtered.length && (
    <div className="flex justify-center py-10">
      <button onClick={() => setVisibleCount(c => c + 16)}
        className="border border-[#3c597B] text-[#3c597B] rounded-[25px] px-8 py-3
                   text-[13px] uppercase tracking-wide transition-colors
                   hover:bg-[#3c597B] hover:text-[#F3F0ED]"
        style={{ fontFamily: 'Optima' }}>
        Load More Works
      </button>
    </div>
  )}
  ```
  Each click reveals **+16** more cards. No pagination, no fetch — pure slice.
- **Empty / no-results state:** when `filtered.length === 0` (over-constrained filters), hide the grid and Load More, and render a centered block (Optima, brand-blue accent) with a `Clear all filters` action that calls `clearAll`:
  ```jsx
  <div className="flex flex-col items-center justify-center text-center py-24 px-6"
       style={{ fontFamily: 'Optima' }}>
    <p className="text-[18px] text-[#333]">No works match these filters.</p>
    <p className="text-[14px] text-gray-500 mt-2">Try removing a filter or two.</p>
    <button onClick={clearAll}
      className="mt-6 border border-[#3c597B] text-[#3c597B] rounded-[25px] px-8 py-3
                 text-[13px] uppercase tracking-wide hover:bg-[#3c597B] hover:text-[#F3F0ED]">
      Clear all filters
    </button>
  </div>
  ```

---

## 5. Work card + missing-image placeholder + responsive grid

- **Grid:** responsive 2 / 3 / 4 columns (mobile→desktop), matching the `insights` spacing language:
  ```jsx
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6
                  max-w-7xl mx-auto px-6 md:px-20">
  ```
- **Card component** (`src/app/works/WorkCard.jsx`) — a button/anchor wrapping image + meta, navigating to the detail page. Uses `navigate` (transition overlay) with the work's title as the overlay text:
  ```jsx
  <a href={`/works/${work.id}`}
     onClick={(e) => { e.preventDefault(); navigate(`/works/${work.id}`, work.title); }}
     className="group flex flex-col w-full cursor-pointer transition-transform hover:scale-105"
     style={{ fontFamily: 'Optima' }}>
    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg
                    bg-[rgba(255,253,251,0.5)]">
      {hasImage ? (
        isVideo(src)
          ? <video src={src} className="w-full h-full object-cover" muted loop playsInline />
          : <img src={src} alt={work.title}
                 className="w-full h-full object-cover object-center" />
      ) : (
        /* missing-image placeholder */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3
                        bg-[rgba(255,253,251,0.5)] text-[#3c597B]">
          <img src="/images/navbar/logo.png" alt="" className="h-12 w-auto opacity-60" />
          <span className="text-[12px] uppercase tracking-wide opacity-70">Image coming soon</span>
        </div>
      )}
    </div>
    <p className="mt-3 text-[13px] uppercase tracking-wide text-[#3c597B] line-clamp-1">{work.author}</p>
    <p className="text-[18px] text-[#333333] leading-snug line-clamp-2">{work.title}</p>
  </a>
  ```
- **Image area:** fixed `aspect-[3/4]` portrait so the grid stays even regardless of source dimensions; surface is the card token so an empty frame still reads as a card.
- **Missing-image placeholder:** card-surface background + Histare monogram (`/images/navbar/logo.png`, the existing brand mark) + "Image coming soon" in Optima uppercase brand-blue. `hasImage = Array.isArray(work.images) && work.images.length > 0 && work.images[0]`.
- **Hover:** `hover:scale-105` on the whole card (exactly the `insights` interaction) — no shadow change, no overlay, to stay consistent.
- **Meta:** artist label (Optima 13px uppercase brand-blue) above title (Optima 18px `#333`), per Figma stacking.
- **Link target:** `/works/[id]`.

---

## 6. Mobile — "Filters" button → bottom sheet

On `< md`, the horizontal four-tab row + dropdown panels are awkward, so collapse the controls into a single trigger that opens a bottom sheet.

- **Trigger** (visible only on mobile, `md:hidden`), placed where the tab row sits:
  ```jsx
  <div className="md:hidden flex justify-center py-3">
    <button onClick={() => setMobileSheetOpen(true)}
      className="inline-flex items-center gap-2 border border-[#3c597B] text-[#3c597B]
                 rounded-[25px] px-6 py-2 text-[13px] uppercase tracking-wide"
      style={{ fontFamily: 'Optima' }}>
      Filters {selectedCount > 0 && <span className="ml-1">({selectedCount})</span>}
    </button>
  </div>
  ```
  The full desktop tab row is `hidden md:flex`.
- **Bottom sheet** (use Framer Motion — already a dependency, `framer-motion@12`, and the established pattern in `navbar.jsx`):
  ```jsx
  <AnimatePresence>
    {mobileSheetOpen && (
      <>
        <motion.div className="fixed inset-0 z-40 bg-black/30"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setMobileSheetOpen(false)} />
        <motion.div className="fixed bottom-0 left-0 right-0 z-50 max-h-[85dvh] overflow-y-auto
                               rounded-t-[20px] bg-[#F3F0ED] p-5"
          initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'Optima' }}>
          {/* grab handle */}
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[#3c597B]/30" />
          {/* accordion sections: MEDIUM / AVAILABILITY / ARTIST — same toggle pills + artist search/scroll as §2 */}
          {/* sticky footer actions */}
          <div className="sticky bottom-0 bg-[#F3F0ED] pt-3 flex gap-3">
            <button onClick={clearAll} className="flex-1 rounded-[25px] border border-[#3c597B] text-[#3c597B] py-3 text-[13px] uppercase tracking-wide">Clear all</button>
            <button onClick={() => setMobileSheetOpen(false)} className="flex-1 rounded-[25px] bg-[#3c597B] text-[#F3F0ED] py-3 text-[13px] uppercase tracking-wide">Show {filtered.length} works</button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
  ```
  - Sheet body reuses the exact same facet toggles, AND/OR logic, and artist search/scroll from §2 (each facet as a stacked accordion section instead of a popover).
  - `Show N works` applies and closes (selections are already live via shared state, so it just closes the sheet); `Clear all` resets.
  - The "FILTERED BY" chip row (§3) still renders under the title on mobile so removal is one tap without reopening the sheet.

---

## 7. Detail page — `src/app/works/[id]/page.jsx`

- `'use client'`. Free-scroll (no snap). Resolve the work by `params.id` against `works`; if not found, render a "Work not found" centered block + a pill linking back to `/works`.
- **Layout:** responsive two-column on `md+`, stacked on mobile, clearing the fixed navbar:
  ```jsx
  <div className="min-h-screen w-full bg-[#F3F0ED] pt-24 sm:pt-28 md:pt-32 px-6 md:px-20">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
      {/* LEFT: text block (md:w-2/5, on mobile renders BELOW the image — order classes) */}
      {/* RIGHT: large framed image + carousel (md:w-3/5) */}
    </div>
  </div>
  ```
  On mobile the image comes first then the text (`order-2 md:order-1` on text, `order-1 md:order-2` on image), so users see the work before the note.
- **Text block** (Optima):
  - Artist label: `text-[13px] uppercase tracking-wide text-[#3c597B]` → `work.author`.
  - Title: `text-[28px] md:text-[34px] text-[#333333] leading-tight` → `work.title` (scaled up from the 18px card title; keep Optima, not Playfair, since Playfair is reserved for the PLP page title).
  - Spec line: `text-[14px] text-gray-600` → `{work.material} | {work.size} | {work.year}` (render with literal " | " separators; skip empties gracefully).
  - **Availability badge:** small pill reflecting state, color-coded within the existing palette:
    - Available → `border border-[#3c597B] text-[#3c597B]`
    - On Hold → `border border-gray-400 text-gray-500`
    - Sold → `bg-[#3c597B] text-[#F3F0ED]`
    ```jsx
    <span className="inline-flex rounded-[25px] px-4 py-1 text-[12px] uppercase tracking-wide …">{work.availability}</span>
    ```
  - Note: `text-[15px] leading-relaxed text-[#1e1e1e] text-justify max-w-prose` → the ~80-word `work.note`.
  - **Enquire CTA** → routes to `/contact` via the transition system:
    ```jsx
    <button onClick={() => navigate('/contact', 'Contact Us')}
      className="mt-6 border border-[#3c597B] text-[#3c597B] rounded-[25px] px-8 py-3
                 text-[13px] uppercase tracking-wide transition-colors
                 hover:bg-[#3c597B] hover:text-[#F3F0ED]"
      style={{ fontFamily: 'Optima' }}>Enquire</button>
    ```
    (Transition text `'Contact Us'` matches the label the navbar already uses for `/contact`.)
- **Framed image + carousel:**
  - Single large frame: `relative w-full aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden bg-[rgba(255,253,251,0.5)] border border-[#3c597B]/15` (the "frame"). `<img>`/`<video>` `object-contain` so full artworks aren't cropped on the detail page (PLP crops, detail does not).
  - Local state `current` (index into `work.images`).
  - **Carousel arrows + dots render only when `work.images.length > 1`:**
    - Prev/next arrows absolutely positioned, brand-blue, e.g. `absolute top-1/2 -translate-y-1/2 left-3 / right-3 text-[#3c597B] text-3xl select-none` (use `‹` / `›` glyphs as `footerblank.jsx` does, or `lucide-react` `ChevronLeft/Right` which is already a dependency). Wrap-around on index.
    - Dots row below the frame: one dot per image, active = `bg-[#3c597B]`, inactive = `bg-[#3c597B]/30`, `h-2 w-2 rounded-full`, click to jump.
  - If there is exactly one image, render the frame only (no arrows, no dots). If zero images, render the §5 missing-image placeholder at frame size.
- **"You may also like" (recommendations)** — a strip/row of up to 4 `WorkCard`s below the two-column block, titled `You may also like` (Optima 13px uppercase brand-blue, like a section eyebrow). Selection algorithm, fill in priority order until 4 are collected (always excluding the current work and de-duping by `id`):
  1. **Same artist** — other works where `author === current.author`.
  2. **Same medium bucket** — works where `mediumBucket(w) === mediumBucket(current)`.
  3. **Random** — shuffle the remaining pool to top up to 4.
  Render with the same `WorkCard` grid (`grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`). Reuse `WorkCard` from §5 verbatim so cards behave identically (hover, placeholder, `navigate` to that work's `/works/[id]`).
- Footer: `<Footer />` from `../../components/footerblank` at the bottom.

---

## 8. Homepage + global-nav integration

- **Homepage "View All Works" pill** — add to `src/app/components/landing/work.jsx`. The component currently has the infinite-scroll strip; add the pill near the `nav.svg` section header (desktop) and within `MobileStoryView`'s container (mobile) so both views can reach the PLP. The component must consume the transition context:
  ```jsx
  import { useTransition } from '../../context/TransitionContext';
  // inside Work():
  const { navigate } = useTransition();
  // …
  <div className="flex justify-center py-6">
    <button onClick={() => navigate('/works', 'All Works')}
      className="border border-[#3c597B] text-[#3c597B] rounded-[25px] px-8 py-3
                 text-[13px] uppercase tracking-wide transition-colors
                 hover:bg-[#3c597B] hover:text-[#F3F0ED]"
      style={{ fontFamily: 'Optima' }}>View All Works</button>
  </div>
  ```
  The overlay text `'All Works'` matches the PLP `<h1>` so the route transition lands on the same words. (`work.jsx` is already `'use client'`, so the hook is safe.)
- **Navbar link** — add a `Works` entry to the slide-out menu in `src/app/components/navbar.jsx`, in the same `<a … onClick={(e) => handleNavigation(e, '/works', 'All Works')}>` pattern as the existing items (e.g. just after `Our Vision in Action`, before `Insights`), using the menu's `font-[Rofane]` styling already on the container. Label text in the menu reads `All Works`.
- **Footer link** — add `Works` to the left-links column in `src/app/components/footer.jsx` (and `footerblank.jsx` if that variant is used on the works pages), e.g. `<a href="/works" className="hover:underline">Works</a>` alongside `Media / Insights / GOI`, keeping the `style={{ fontFamily: 'Rofane' }}` already on the group. (The plain `footer.jsx` uses raw `<a href>`; that's fine — it matches the existing links there.)

---

## 9. File / component inventory (what to create vs. edit)

- **Create** `src/app/works/data.js` — `works` array (~73 items, shared shape), `mediumBucket(work)`, `artists` (deduped, sorted), `mediums`, `availabilities`, `getById(id)`, `recommendFor(work, n)`.
- **Create** `src/app/works/page.jsx` — PLP (§1–§6).
- **Create** `src/app/works/[id]/page.jsx` — detail (§7).
- **Create** `src/app/works/WorkCard.jsx` — shared card (§5), used by PLP grid and detail "You may also like".
- **Create** `src/app/works/FilterBar.jsx` (optional split) — tabs + dropdown panels + mobile sheet (§2, §6); or keep inline in `page.jsx`.
- **Edit** `src/app/components/landing/work.jsx` — add "View All Works" pill + `useTransition` (§8).
- **Edit** `src/app/components/navbar.jsx` — add `All Works` menu link (§8).
- **Edit** `src/app/components/footer.jsx` (+ `footerblank.jsx`) — add `Works` link (§8).
- Each new page declares its own `@keyframes fadeIn` / `.animate-fadeIn` in a `<style jsx>` block (§0), matching `collectors`/`vitrine`.
