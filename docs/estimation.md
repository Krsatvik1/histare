# Histare.net 2.0 - Project Estimation

## ⏱️ Summary of Estimated Hours

| Phase | Description | Estimated Hours |
| :--- | :--- | :--- |
| **Phase 1** | **Component Expansion & UX Architecture** | **13 - 17 Hours** |
| **Phase 2** | **Visual Polish & Mobile Compliance** | **5 - 7 Hours** |
| **Phase 3** | **Core Optimization (Optional)** | **4 - 6 Hours** |
| **Total** | **Project Total** | **22 - 30 Hours** |

---

## 💰 Financial Estimate

| Item | Details |
| :--- | :--- |
| **Total Estimated Hours** | **22 - 30 Hours** |
| **Hourly Rate** | **₹1,000 INR** |
| **Total Estimated Cost** | **₹22,000 - ₹30,000 INR** |

---

## 📝 Terms & Conditions

### Payment Terms
*   **No Advance Payment:** Work will commence without an upfront deposit.
*   **Payment on Completion:** Full payment is due immediately upon the completion of all scope items mentioned in this document.

### Bug Fixes & Revisions
*   **Bugs / Visual Discrepancies:** If a feature discussed is implemented but does not visually match the intended effect, we will strive to get it as close as possible to the design. These fixes are **Free of Cost**.
*   **Scope Changes / Revisions:**
    *   **First Revision:** One round of changes per section (outside the original scope) is included **Free of Cost**.
    *   **Subsequent Revisions:** Any further changes beyond the first round per section will incur an **Added Cost** based on the hourly rate.

---

## 📉 Detailed Breakdown

### 🟢 PHASE 1: COMPONENT EXPANSION & UX ARCHITECTURE (13 - 17h)

| Task ID | Item | Complexity | Est. Hours | Why / Value | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1.1** | **Global Navigation (Desktop)** | Medium | 4h | **Critical UX:** Current hamburger menu on desktop hides key sections, reducing discoverability. A visible top bar is standard for premium sites. | Implement Horizontal Top Bar (Logo, Links, CTA). CSS Media Query logic. |
| **1.2** | **Global Footer Integration** | Low | 2h | **Completeness:** Pages currently end abruptly ("dead ends"). A footer anchors the site and provides essential legal/social trust signals. | Build component based on VD design. Inject into Layout. |
| **1.3** | **Page+CTA Template** | Low | 1h | **User Flow:** Prevents bounce rates by guiding users to the "Next Step" (e.g., History -> Vision) instead of leaving them stuck. | Create HOC/Wrapper for "Next Step" flow. |
| **1.4** | **Marquee Bug Fix** | High | 3 - 4h | **Bug Fix:** The "Frozen" marquee looks broken and unprofessional. Fixing it is essential for the "Premium" feel. | Debug `Art.jsx`/`Work.jsx` scroll logic. Fix "Frozen" state. |
| **1.5** | **Envisioning Section Refactor** | Medium | 2h | **Readability:** A "Wall of Text" is hard to scan. A Grid/Masonry layout improves engagement and visual interest. | Convert "Wall of Text" to Grid/Masonry layout. |
| **1.6** | **Works Page Video** | Low | 1h | **Client Request:** Moving media is more engaging than static images and better showcases the "Works". | Replace static image with looping video. |
| **1.7** | **Contact Page Draggable** | Low | 1h | **Interactivity:** Adds a "delight" factor and makes the map underneath accessible without hiding the contact info. | Implement Framer Motion drag for contact card. |
| **1.8** | **New Features** | Low | 1 - 2h | **Functionality:** Required for marketing (Banner), support (Chatbot), and operations (Drive). | Conditional Banner, Verloop Script, G-Drive Button UI. |

### 🟡 PHASE 2: VISUAL POLISH & MOBILE COMPLIANCE (5 - 7h)

| Task ID | Item | Complexity | Est. Hours | Why / Value | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **2.1** | **Global Loader** | Low | 2h | **Perceived Performance:** Masks the initial "white screen" flash while Next.js hydrates, making the site feel faster. | Implement VD design (CSS/SVG). |
| **2.2** | **Essence Animation Fix** | Medium | 2h | **Quality Assurance:** Glitchy animations detract from the "Premium" brand image. | Fix glitchy SVG icons. |
| **2.3** | **Mobile Touch Targets** | Low | 1h | **SEO & Usability:** Google penalizes sites with small touch targets. Essential for mobile users. | Enforce 48px min-height/width for Lighthouse. |
| **2.4** | **Viewer Readability** | Low | 1 - 2h | **Usability:** Current PDF/Image view is hard to read on mobile. Essential for consuming content. | Improve PDF/Image layout for mobile (Optional scope). |

### 🔴 PHASE 3: CORE OPTIMIZATION (OPTIONAL) (4 - 6h)

| Task ID | Item | Complexity | Est. Hours | Why / Value | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **3.1** | **Lenis Scroll Migration** | High | 3 - 4h | **Experience:** Native CSS Snap can feel "sticky" or desync. Lenis offers a smooth, app-like scroll experience. | Replace CSS Snap with Lenis. Fix sync issues. |
| **3.2** | **Asset Optimization** | Low | 1 - 2h | **Performance:** Large SVGs/Images slow down the site (LCP). Optimization improves load times and SEO. | Compress SVGs, convert images to WebP. |

---

## ⚠️ Assumptions & Risks
*   **Design Availability:** Estimates assume VD provides Footer and Loader designs promptly.
*   **Marquee Complexity:** The "Frozen" bug in the marquee might be a deep conflict with the current CSS Snap behavior. If it requires a full rewrite of the component, it may lean towards the higher end of the estimate.
*   **Lenis Compatibility:** Migrating to Lenis might require adjusting existing scroll-triggered animations (e.g., `framer-motion` `whileInView`).
