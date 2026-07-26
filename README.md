# Accredian Enterprise Landing Page Clone

A pixel-perfect, production-ready full-stack web application built for the **Full Stack Developer Internship Assessment**. This application replicates the **Accredian Enterprise** landing page based on reference design specifications, featuring custom responsive components, accessible modal dialogs, and a functional Next.js API endpoint for lead enquiries.

![Next.js](https://img.shields.io/badge/Next.js-16.2.11-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=flat-square&logo=tailwindcss)

---

## 🚀 Live Demo & Deployment

* **Framework**: Next.js (App Router architecture)
* **Deployment Target**: Vercel-ready with zero additional configuration required.

---

## 🛠️ Tech Stack & Key Features

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom tokens, responsive breakpoints, and glassmorphism styling
* **Icons**: [Lucide React](https://lucide.react.dev/) for vector icons
* **API & Backend**: Next.js App Router API Route (`/api/enquire`) handling lead form validation, payload processing, and mock database persistence
* **UI & Accessibility**:
  * Reusable UI primitives (`Button`, `Modal`, `EnquireModal`).
  * Accessible keyboard navigation (ESC key modal closure, focus trap).
  * Interactive 7-step connected timeline flow with responsive fallback.
  * Fully responsive mobile hamburger drawer navigation.

---

## 📂 Project Architecture & Folder Structure

```
accredian-enterprise-clone/
├── app/
│   ├── api/
│   │   └── enquire/
│   │       └── route.ts          # Next.js API Route for lead enquiries (POST)
│   ├── globals.css               # Global CSS & Tailwind CSS v4 directives
│   ├── layout.tsx                # Root Layout & Metadata
│   └── page.tsx                  # Landing Page Shell (Client State & Composition)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky Navigation Header & Mobile Drawer
│   │   └── Footer.tsx            # Enterprise Footer & Links
│   ├── sections/
│   │   ├── Hero.tsx              # Hero Banner Section
│   │   ├── Stats.tsx             # "Our Track Record" Metric Pills Section
│   │   ├── Clients.tsx           # "Our Proven Partnerships" Logo Grid
│   │   ├── Edge.tsx              # "The Accredian Edge" 7-Step Connected Timeline
│   │   ├── DomainExpertise.tsx   # "Our Domain Expertise" 7-Card Grid
│   │   └── CourseSegmentation.tsx # "Tailored Course Segmentation" Cards
│   └── ui/
│       ├── Button.tsx            # Reusable Button Primitive
│       ├── Modal.tsx             # Reusable Accessible Dialog Primitive
│       └── EnquireModal.tsx      # Interactive Lead Generation Modal
├── public/
│   └── images/
│       └── hero.png              # Transparent Hero Banner Image Asset
├── package.json                  # Dependencies & Build Scripts
├── tsconfig.json                 # TypeScript Configuration
└── next.config.ts                # Next.js Configuration
```

---

## ⚡ Setup & Local Installation

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
* Node.js v18.0 or higher
* npm or yarn

### 2. Clone Repository & Install Dependencies
```bash
git clone https://github.com/your-username/accredian-enterprise-clone.git
cd accredian-enterprise-clone
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🤖 AI Usage & Contribution Log

In accordance with the evaluation requirements, here is the log of AI tool assistance during development:

| Area / Task | AI Contribution Summary |
| :--- | :--- |
| **Initial Audit & Architecture Analysis** | Automated code inspection of workspace files, mapping active vs empty stub components, and creating a step-by-step refactoring strategy. |
| **Visual Precision & UI Matching** | Multi-step visual comparison of reference screenshots against rendered components, adjusting typography scales, colors (`#1B76FF`, `#EEF5FF`), padding, and flex layouts. |
| **Component Refactoring** | Refactored `Navbar.tsx`, `Hero.tsx`, `Stats.tsx`, `Clients.tsx`, and `Edge.tsx` into clean TypeScript functional components with custom SVG vector brand logos. |
| **Interactive Lead System & API Route** | Generated `app/api/enquire/route.ts` API endpoint, reusable `Modal.tsx`, `Button.tsx`, and `EnquireModal.tsx` form handling with validation state. |
| **Production Verification & TypeScript Audit** | Verified zero-error compilation with `tsc --noEmit` and static page bundle generation via `next build`. |

---

## 💡 Manual Improvements & Future Enhancements

### Recommended Manual Improvements:
1. **Dynamic Database Persistence**: Connect `/api/enquire/route.ts` to a PostgreSQL (Prisma/Drizzle) or MongoDB database instance to permanently store enterprise lead submissions.
2. **Email Notifications**: Integrate Nodemailer or Resend API in `/api/enquire/route.ts` to trigger instant email notifications to sales representatives upon lead submission.
3. **SVG Brand Logo Asset Pipeline**: Replace inline SVG brand paths in `Clients.tsx` with dedicated SVG asset files in `public/logos/` for long-term maintainability.

### Future Scope:
* **Internationalization (i18n)**: Add multi-language support (English/Spanish/Hindi) for global enterprise clients.
* **Analytics**: Integrate Google Analytics 4 / PostHog event tracking on CTA clicks and form conversions.
* **CMS Integration**: Connect course cards in `CourseSegmentation.tsx` to a headless CMS (Sanity / Contentful).
