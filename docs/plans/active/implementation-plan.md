# Implementation Plan - Erbe Project Slideshow

Convert the single YouTube video display on the Erbe Project page into a dynamic slideshow containing the video and a series of project photographs.

## User Review Required

> [!NOTE]
> The slideshow will use a 16:9 aspect ratio to match the YouTube video. Images will be set to `object-cover` or `object-contain` within this frame to maintain consistency.

## Proposed Changes

### [Page] Erbe Project

#### [MODIFY] [erbe/page.jsx](file:///Users/kumarsatvik/Documents/GitHub/histare/src/app/erbe/page.jsx)
- Introduce a `currentIndex` state to track the active slide.
- Define an array of slides containing the YouTube URL and image paths.
- Replace the static `iframe` container with a slideshow structure:
    - Main display area (16:9 aspect ratio).
    - Navigation buttons (Left/Right overlay or below).
    - Slide indicators (dots).
- Implement slide transitions (e.g., using Framer Motion if available, or simple state-based rendering).

## Verification Plan

### Manual Verification
1. **Initial State**: Verify the YouTube video is the first slide shown.
2. **Navigation**: Click 'Next' to cycle through the project photos.
3. **Looping**: Ensure the slideshow loops back to the beginning after the last image.
4. **Responsive Check**: Verify the slideshow maintains its aspect ratio and fits correctly on different screen sizes.
