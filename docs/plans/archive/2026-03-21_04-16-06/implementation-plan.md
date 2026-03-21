# Implementation Plan - Loading Animation Logo

Update the website's loading screen to use the brand's SVG logo with a spinning animation and a white background, ensuring it fades out smoothly after the initial load.

## Proposed Changes

### [Component] Global Loader & Styles

#### [MODIFY] [globals.css](file:///Users/kumarsatvik/Documents/GitHub/histare/src/app/globals.css)
- Update `#global-loader` background color to `#FFFFFF`.
- Implement a `spinning-logo` keyframe animation.
- Clean up or replace old loader styles (`.loader-inner`, `.loader-outer`, `loader-pulse`).
- Ensure `opacity` transition is preserved for the fade-out effect.

#### [MODIFY] [layout.js](file:///Users/kumarsatvik/Documents/GitHub/histare/src/app/layout.js)
- Replace the placeholder loader elements inside `#global-loader` with an `<img>` tag referencing `/loader.svg`.
- Apply the spinning animation class to the logo.

#### [MODIFY] [loader.jsx](file:///Users/kumarsatvik/Documents/GitHub/histare/src/app/components/loader.jsx)
- Ensure the hide logic remains robust.
- Potentially adjust the timeout to align with visual expectations (currently 2000ms).

## Verification Plan

### Automated Tests
- None applicable for this visual transition (requires visual inspection).

### Manual Verification
1. **Initial Load**: Refresh the page to verify that the `#FFFFFF` background and the spinning `/loader.svg` appear immediately.
2. **Animation**: Confirm the logo is spinning smoothly.
3. **Fade Out**: Verify that the loader fades out after approximately 2 seconds, revealing the main content.
4. **Responsive Check**: Ensure the loading logo is appropriately sized on both mobile and desktop.
