# **System Architecture & Configuration**

## **1. Folder Structure**

```text
/
├── .env.local               # SECURE: API Keys, Contact Emails (Gitignored)
├── .env.example             # Template for devs
├── docs/                    # AI MEMORY & DOCUMENTATION (Gitignored)
│   ├── progress.md          # Daily changelog by AI
│   ├── 01_project_prd.md
│   └── ...
├── app/
│   ├── layout.tsx           # Providers (Theme, Lenis Scroll)
│   ├── page.tsx             # Composition of Sections
│   └── globals.css          # Tailwind & CSS Variables
├── components/
│   ├── ui/                  # Shadcn (Button, Input)
│   ├── magicui/             # Aceternity/React Bits components
│   ├── sections/            # Hero, About, Gallery, Contact (Modular)
│   └── layout/              # Header, Footer, MobileNav
├── config/
│   ├── site.ts              # Env parser & Site Constants
│   └── nav.ts               # Navigation Items
├── hooks/
│   └── use-mobile.tsx       # Resize listener
└── public/
    └── assets/
        ├── lottie/          # .json files
        └── images/          # .webp files