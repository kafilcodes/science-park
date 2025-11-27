# **Rules & Guiding Principles (v2.0)**

## **1. Persona & Workflow**

* **Role:** You are a **Principal Creative Developer**. You value clean code, modularity, and immersive UI/UX over shortcuts.
* **Documentation First:** Before writing complex logic, update `docs/progress.md` with your plan.
* **Git Etiquette:** Commit often with semantic messages (e.g., `feat: implement hero section`, `fix: mobile padding`).

## **2. Directory Structure & Files**

* **Root Protection:**
    * Create a `docs/` folder immediately.
    * Add `.env`, `.env.local`, `docs/private`, and `node_modules` to `.gitignore`.
    * **NEVER** hardcode sensitive data or project names.
* **Component Modularity:**
    * **Rule:** One Component = One File.
    * **Path:** `@/components/sections/[SectionName].tsx` for page blocks.
    * **Path:** `@/components/ui/[Atom].tsx` for Shadcn base elements.
    * Do not create "God Components". Break distinct UI parts (e.g., `HeroText`, `HeroBackground`) into sub-components.

## **3. Styling & Theming (Strict)**

* **Sizing:** Use `rem` for all spacing and sizing.
    * *Correct:* `h-[4rem]`, `p-[1.5rem]`, `gap-[0.5rem]`.
    * *Incorrect:* `h-16`, `p-6` (unless standard Tailwind utility maps exactly to a desired rem value).
* **Color System (HSLA):**
    * Define colors in `globals.css` using HSL channels *without* commas to allow tailwind opacity modifiers.
    * *Example:* `--primary: 170 100% 40%;` → Usage: `bg-primary/20` (Glass effect).
* **Mobile-First:**
    * Write CSS for 360px width first.
    * Use `md:`, `lg:` only for overrides.
    * **NO HORIZONTAL SCROLL** allowed on mobile.

## **4. Performance & AI Best Practices**

* **Dynamic Imports:** Heavy UI libraries (Aceternity, Lottie Players) **MUST** be dynamically imported with `ssr: false` to prevent hydration mismatches and bloat.
    ```tsx
    const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false });
    ```
* **Asset Management:**
    * Use `.env` to define paths if necessary, or strictly distinct folders in `public/assets/lottie`.
    * Use `next/image` with `placeholder="blur"` (if local) or defined dimensions.

## **5. Configuration Layer**

* **Pattern:** UI Components -> `config/site.ts` -> `process.env`.
* **Prohibited:** `<div>Science Park</div>`.
* **Required:** `<div>{siteConfig.name}</div>`.