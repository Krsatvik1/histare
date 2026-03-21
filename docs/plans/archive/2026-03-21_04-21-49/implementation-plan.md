# Implementation Plan - Replace Elephant Image with Video

Replace the static "Paper Elephant Statue" image with the `Elephant Render.mp4` video for a more dynamic and premium feel.

## Proposed Changes

### [Component] Elephant Statue Render

#### [MODIFY] [elephant.jsx](file:///Users/kumarsatvik/Documents/GitHub/histare/src/app/components/landing/elephant.jsx)
- Replace the `<Image>` component with a standard `<video>` tag.
- Set `src="/Elephant Render.mp4"`.
- Add attributes: `autoPlay`, `loop`, `muted`, `playsInline`.
- Maintain the classes: `object-contain w-80 sm:w-96 md:w-[500px] h-auto`.

## Verification Plan

### Manual Verification
1. **Playback**: Verify the video starts playing automatically on page load.
2. **Looping**: Confirm the video repeats indefinitely.
3. **Muted**: Ensure the video is muted (required for autoplay).
4. **Responsive Sizing**: Verify the video fits correctly on mobile and desktop viewports, matching the original image's dimensions.
