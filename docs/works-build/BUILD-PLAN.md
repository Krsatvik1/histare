# Works PLP + Detail — Build Plan

Joins the prep artifacts (`artworks.json`, `medium-map.json`, `image-map.json`, `ui-spec.md`)
into one buildable plan. The enriched data module is already generated at
`src/app/works/data/artworks.js` (default export array + `ARTISTS` / `MEDIUM_CATEGORIES` /
`AVAILABILITIES` named exports). This document is the ordered task plan that consumes it, plus
the data shape, the filter facets and their option lists, and the conflicts found between
artifacts that the implementer must resolve.

---

## Data shape (enriched module)

`src/app/works/data/artworks.js` — `export default` an array of 73 records. Each record is the
raw `artworks.json` record plus three derived fields:

```js
{
  id: 1,                                  // number, stable, used in /works/[id]
  title: 'Ophelia and Amrita (...)',      // work title
  artist: 'Anaushka Rao',                 // ARTIST facet source
  medium: 'Digital',                      // raw medium string (MEDIUM facet source)
  size: '11.3 in x 16 in',
  year: 2024,                             // number | null
  yearLabel: '2024',                      // display string (e.g. '1984 - 2005', '' when unknown)
  availability: 'For Sale',               // AVAILABILITY facet source
  note: '…curatorial note…',              // detail page only
  imageIncluded: true,                    // authoritative "is there a real image" flag

  // --- derived in this module ---
  mediumCategory: 'Digital',              // bucket from medium-map by raw medium (null if unmapped)
  image: '/images/art/works/cellImage_0_0.jpg', // public path, or null when no real image
  hasImage: true                          // boolean: imageIncluded === true && a filename exists
}
```

Named exports (all sorted, deduped):

- `ARTISTS` — 28 unique artist names, locale-sorted.
- `MEDIUM_CATEGORIES` — 7 buckets: `Digital`, `Mixed Media`, `Painting`, `Photography`, `Printmaking`, `Sculpture`, `Works on Paper`.
- `AVAILABILITIES` — 3 states (as they exist in the data): `For Enquiry`, `For Sale`, `Sold out`.

Counts: **73 works · 57 with image · 16 without · 28 artists · 7 medium categories · 3 availabilities.**

---

## Filter facets + option lists

Per `ui-spec.md` §2 the filter bar has four tabs: `ALL`, `MEDIUM`, `AVAILABILITY`, `ARTIST`
(Tradition is dropped). Logic is **AND across facets, OR within a facet**. The enriched module
supplies the option lists directly, so no derivation is needed at build time.

| Facet | Source field | Options (from data) |
|---|---|---|
| **MEDIUM** | `mediumCategory` | `Digital`, `Mixed Media`, `Painting`, `Photography`, `Printmaking`, `Sculpture`, `Works on Paper` (7) — render as toggle pills |
| **AVAILABILITY** | `availability` | `For Enquiry`, `For Sale`, `Sold out` (3) — toggle pills |
| **ARTIST** | `artist` | 28 names, alpha-sorted — searchable + scrollable list (`ARTISTS` export) |

> The enriched module already buckets medium via `medium-map`, so the spec's proposed
> `mediumBucket(work)` mapper is unnecessary — filter directly on `w.mediumCategory` and feed
> the panel from `MEDIUM_CATEGORIES`.

---

## Ordered build plan (21 tasks)

Maps the 21 tasks in the task list to the `ui-spec.md` sections and the enriched data module.
Ordered so each task only depends on earlier ones.

**Foundation (data — DONE)**
1. Generate the enriched data module `src/app/works/data/artworks.js` (default array + `ARTISTS`/`MEDIUM_CATEGORIES`/`AVAILABILITIES`). — *complete; this plan documents its shape.*
2. Add `getById(id)` and `recommendFor(work, n)` helpers (spec §7/§9). Recommendation order: same artist → same `mediumCategory` → random top-up to `n`, excluding current and de-duping by `id`. Can live in `data/artworks.js` or a sibling `data/helpers.js`.

**Shared primitives**
3. Build `src/app/works/WorkCard.jsx` (spec §5): card → `/works/[id]`, `aspect-[3/4]` framed image, `hover:scale-105`, artist label + title meta. Use `work.hasImage` / `work.image`; render the "Image coming soon" monogram placeholder otherwise.
4. Add the missing-image placeholder branch inside `WorkCard` (spec §5) keyed off `hasImage` (the module already resolves `image` to `null` when absent).
5. Keep the `isVideo(src)` helper from `components/landing/work.jsx` available to `WorkCard` for `.mp4`/`.webm` sources.

**PLP scaffold**
6. Create `src/app/works/page.jsx` shell (spec §1): `'use client'`, free-scroll `min-h-screen w-full bg-[#F3F0ED]`, navbar clearance `pt-24 sm:pt-28 md:pt-32`, `max-w-7xl mx-auto px-6 md:px-20` container.
7. Add the "All Works" Playfair title header (spec §1) and the per-page `@keyframes fadeIn` / `.animate-fadeIn` `<style jsx>` block (spec §0).
8. Wire PLP state (spec §1): `activeFacet`, `selected = { medium:Set, availability:Set, artist:Set }`, `artistQuery`, `visibleCount` (init 16), `mobileSheetOpen`.

**Filter bar**
9. Build the four-tab row + active underline (spec §2), `ALL` clears selections.
10. Build the MEDIUM dropdown panel (spec §2) — toggle pills sourced from `MEDIUM_CATEGORIES`.
11. Build the AVAILABILITY dropdown panel (spec §2) — toggle pills sourced from `AVAILABILITIES`. **Use the real values `For Enquiry` / `For Sale` / `Sold out`, not the spec's placeholder labels (see Conflicts).**
12. Build the ARTIST dropdown panel (spec §2) — search input bound to `artistQuery` + `max-h-[280px]` scroll list sourced from `ARTISTS`; "No artists match" empty state.
13. Implement the `filtered` `useMemo` (spec §2): AND across facets, OR within; filter `medium` on `w.mediumCategory`, `availability` on `w.availability`, `artist` on `w.artist`.

**Results UI**
14. Build the "FILTERED BY" removable chip row + `Clear all` (spec §3); each filter change resets `visibleCount` to 16.
15. Build the count line "SHOWING {min(visibleCount, filtered.length)} OF {filtered.length} WORKS" (spec §4).
16. Build the responsive card grid `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` mapping `filtered.slice(0, visibleCount)` (spec §5).
17. Build the "Load More Works" pill (+16 per click, shown only while `visibleCount < filtered.length`) and the empty / no-results state with `Clear all filters` (spec §4).

**Mobile**
18. Build the mobile "Filters" trigger + Framer Motion bottom sheet (spec §6), reusing the same facet toggles + AND/OR logic + artist search; sticky `Clear all` / `Show N works` footer.

**Detail page**
19. Create `src/app/works/[id]/page.jsx` (spec §7): resolve by `params.id` via `getById`; "Work not found" fallback; two-column responsive layout (image-first on mobile), text block (artist / title / `material | size | year` spec line built from `medium`+`size`+`yearLabel` — skip empties), availability badge, justified note, Enquire CTA → `/contact`.
20. Build the detail image frame + carousel (spec §7): `object-contain`, arrows + dots only when `image` count > 1 (current data is single-image per work, so most render frame-only; placeholder at frame size when `hasImage` is false). Add the "You may also like" strip using `recommendFor` + `WorkCard`.

**Integration**
21. Wire entry points (spec §8): "View All Works" pill + `useTransition` in `components/landing/work.jsx`; `All Works` link in `components/navbar.jsx`; `Works` link in `components/footer.jsx` (+ `footerblank.jsx`). All navigation via `navigate(path, text)` with overlay text `'All Works'` for the PLP.

---

## CONFLICTS between artifacts

1. **Image count mismatch (image-map vs `imageIncluded`).** `image-map.json` supplies a filename
   for **all 73** ids (`cellImage_0_0.jpg` … `cellImage_0_72.jpg`), but only **57** records have
   `imageIncluded: true`. The 16 records with `imageIncluded: false`
   (ids 6, 9, 14, 19, 21, 36, 38, 39, 40, 41, 42, 43, 44, 48, 50, 56) still have a mapped
   filename. **Resolution applied:** `hasImage` follows the authoritative `imageIncluded` flag and
   `image` is set to `null` for those 16, so they render the "Image coming soon" placeholder. If
   those 16 filenames actually point to real assets, flip the rule to trust the image-map and
   regenerate.

2. **AVAILABILITY values disagree with the UI spec.** `ui-spec.md` (§0 data model, §2, §7 badge)
   assumes `Available` / `On Hold` / `Sold`. The data uses `For Sale` / `Sold out` / `For Enquiry`.
   The build must use the **real** values (carried in `AVAILABILITIES`). The detail-page badge
   color map needs remapping: `For Sale` → brand-blue outline, `Sold out` → filled brand-blue,
   `For Enquiry` → gray outline.

3. **Field-name drift between spec and data.** The spec's shared model uses `author`, `material`,
   `images: []`. The enriched module uses `artist`, `medium`, and a single `image` string
   (plus `hasImage`). Components written against the spec's names must read `work.artist` /
   `work.medium` / `work.image` instead. The carousel's multi-image arrows/dots (spec §7) are
   effectively dead in current data (one image per work) but should stay for future multi-image
   records.

4. **`mediumBucket()` mapper is redundant.** Spec §2 proposes deriving medium buckets at runtime
   from long comma-laden `material` strings. The prep already did this in `medium-map.json`
   (every one of the 35 distinct raw mediums is mapped — **0 unmapped, 0 unused map entries**), and
   the enriched module exposes the result as `mediumCategory` + `MEDIUM_CATEGORIES`. Drop the
   runtime mapper and filter on `mediumCategory`.

5. **Artist / item counts differ from the spec's estimates.** Spec mentions "~73 items" and
   "~28 after dedupe / ~28 artists". Actual: **73 items, 28 unique artists** (no near-duplicate
   artist names detected under case/space-insensitive comparison). No dedupe conflict — counts
   line up — but the PLP `visibleCount` denominator and count line should read from
   `filtered.length`, not a hardcoded 73.

6. **`year` can be `null` / `yearLabel` empty.** Six records have `year: null` (the `For Enquiry`
   pieces) and some `yearLabel` values are ranges (`'1984 - 2005'`). The detail-page spec line and
   any sort/display must use `yearLabel` for display and tolerate empty/`null` — do not assume a
   numeric year exists.
