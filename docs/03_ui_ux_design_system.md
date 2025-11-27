# **Design System & Principles (v2.0)**

## **1. Design Philosophy**

* **Glass & Science:** The UI represents a "Laboratory of the Future." usage of frosted glass (`backdrop-blur`), subtle glowing borders, and floating elements is mandatory.
* **Motion Semantics:**
    * **Entry:** Staggered Fade-Up (elements don't just appear; they flow in).
    * **Hover:** Physical feedback (Scale 1.05, Glow intensity increase).
    * **Scroll:** Parallax effects for depth.
    * **Exit:** Fade-Down (elements don't just disappear; they flow out).


* **Microinteractions:** Use meaningful and tasteful microinteractions and animations to enhance the user experience. they are very important part of the design system.


    
    

## **2. Color Palette**

| Role | Name | HSLA Value | Tailwind Variable | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | Science Teal | `172 66% 50%` | `var(--primary)` | Main Brand, Gradients |
| **Secondary** | Deep Space | `222 47% 11%` | `var(--secondary)` | Dark Mode Background |
| **Accent** | Electric Lime | `136 53% 43%` | `var(--accent)` | CTAs, Highlights |
| **Surface** | Glass White | `0 0% 100%` | `var(--card)` | Cards (with opacity) |

* **Dark Mode Strategy:** The site defaults to a dark, immersive scientific theme. Light mode should be clean, clinical, and high-contrast.

## **3. Typography**

* **Headings:** *Space Grotesk* or *Outfit* (Google Fonts). Geometric, futuristic.
* **Body:** *Inter*. Highly readable, variable font.
* **Scaling:**
    * H1: `2.5rem` (mobile) -> `4.5rem` (desktop).
    * Body: `1rem` (base).

## **4. Spacing System (4pt Grid)**

* All padding and margins must align to a 4px (0.25rem) grid.
* **Micro:** `0.25rem`, `0.5rem`.
* **Macro:** `2rem`, `4rem`, `8rem` (Section gaps).

## **5. Iconography & Assets**

* **Utility Icons:** `lucide-react` (Stroke width: 1.5px).
* **Feature Icons:** `animate-ui` (Animated on hover/view).
* **Illustrations:** Lottie JSONs stored in `public/assets/lottie/`.