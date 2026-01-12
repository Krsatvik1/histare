# Global Loader Design Guidelines

**Target Audience:** Visual Designer (VD)
**Output:** Figma File (.fig)
**Constraint:** Use **Figma Tools Only** (Shapes, Vectors, Text). **NO** raster images.

---

## 1. Animation Mechanics
Please design the loader using one or more of the following animation techniques suitable for SVG/CSS implementation:

*   **Rotation:** Continuous 360-degree spin of an element or group.
*   **Stroke Animation:** "Draw" the path of a shape or text using `stroke-dasharray` and `stroke-dashoffset`.
*   **Opacity/Fade:** Elements fading in and out in a sequence.
*   **Scale/Morph:** Simple scaling (0 to 1) or morphing between two vector shapes with the same node count.

---

## 2. Design Constraints (Figma Friendly)
To ensure the animation runs smoothly on the website, please follow these rules in Figma:

*   **Keep it Vector:** Use only Shapes, Lines, and Text layers. Do not use images (PNG/JPG).
*   **Simplicity is Key:** Avoid complex effects like "Layer Blur", "Drop Shadow", or "Inner Shadow".
*   **Clean Layers:** Name your layers clearly (e.g., "Circle Outer", "Line Top"). Group related elements together.

---

## 3. Looping Requirements
The animation must loop seamlessly without a visible "jump" or "reset".

*   **How to achieve this:** Ensure the **Start State (0%)** and **End State (100%)** of the animation are visually identical.
*   *Example:* If an object rotates, it should complete a full 360 degrees so it ends exactly where it started.
