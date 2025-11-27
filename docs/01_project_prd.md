# **Project Requirements Document (PRD) (v1.0)**

**Project:** Government Science Park – Digital Experience Platform  
**Architecture:** Single Page Application (SPA) / Landing Page  
**Date:** 2025-11-24

## **1. Objective**

To develop a world-class, immersive, and mobile-first landing page for the Government Science Park. The platform must bridge the gap between "Institutional Trust" and "Futuristic Science" using advanced animations, 3D interaction, and fluid accessibility.
**Constraint:** The site must be 100% configurable via Environment Variables (Name, Address, Timings, Contact) to allow future changes without code deployments.

## **2. Target Audience**

* **Students/Schools:** Looking for educational tours and practical science models.
* **General Public:** Weekend visitors looking for "Tech & Science" experiences.
* **Government Officials:** Showcasing the modernization of educational infrastructure.

## **3. Core Features & User Stories**

| Feature | User Story | Tech Implementation |
| :--- | :--- | :--- |
| **Configurable Identity** | As an admin, I want to change the Park Name, Marquee Text, or Address via `.env` files so I don't touch code. | `config/site.ts` reading `process.env`. |
| **Immersive Hero** | As a visitor, I want to be "wowed" immediately by a science-themed interactive background. | Aceternity `BackgroundBeams` or React Bits `Particles`. |
| **Marquee Alerts** | As a visitor, I need to know today's timing or special notices immediately below the header. | Animate UI `InfiniteMovingCards` (Text Mode). |
| **Interactive Exhibits** | As a user, I want to see what models (Physics/Bio) are available before visiting. | Aceternity `FocusCards` with 3D Tilt. |
| **Visual Gallery** | As a user, I want to browse high-quality images of the park. | Masonry Layout with Framer Motion `LayoutGroup`. |
| **Smart Contact** | As a user, I want to email the park easily without opening my mail app manually. | React Hook Form + EmailJS (Frontend Only). |

## **4. Technical Stack**

* **Framework:** Next.js 14+ (App Router).
* **Styling:** Tailwind CSS (Rem-based, HSLA variables).
* **Animation:** Framer Motion (Orchestration), Aceternity UI (Hero/Cards), React Bits (Cursor/Micro-interactions).
* **State:** Zustand (UI State), Context API (Theme).
* **Assets:** Local Lottie JSONs, SVGs, and WebP images.

## **5. Success Metrics**

* **Performance:** 100/100 Lighthouse Score (Performance, A11y, SEO).
* **Responsiveness:** Zero layout shifts (CLS) on mobile devices (360px viewport).
* **Configurability:** 100% of text content in Header, Footer, and Contact is dynamic.