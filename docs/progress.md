# Project Progress Log

## [2025-11-27] Initial Setup & Core UI
- **Setup**: Initialized Git, configured `.gitignore`, and created `config/site.ts`.
- **Dependencies**: Installed `shadcn-ui`, `framer-motion`, `lucide-react`, `zustand`, `zod`.
- **UI Components**:
    - Created `Header` with responsive navigation and mobile menu.
    - Created `Footer` with site links.
    - Created `Marquee` component for announcements.
    - Created `Hero` section with animated background and entrance effects.
    - Created `About` section with mission/vision cards.
    - Created `Exhibits` section with 3D tilt cards.
    - Created `Gallery` section with masonry layout and lightbox.
    - Created `Contact` section with validated form.
- **Pages**:
    - Implemented `/about`, `/exhibits`, `/gallery`, and `/contact` pages.
- **SEO**:
    - Created `app/sitemap.ts` and `app/robots.ts`.
    - Configured dynamic meta tags via `layout.tsx` and `siteConfig`.
- **Styling**: Updated `globals.css` with HSL color variables matching the PRD.