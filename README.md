# Portfolio | Sk. Shafi Masthan Koushik

A modern, minimal, dark-themed personal portfolio built with **Next.js**, **Tailwind CSS**, and **TypeScript**. It features a slate/gray background with emerald/green accents and uses no external UI libraries.

## Features

- **Hero** — typing animation cycling through roles, quick contact pills, and a stats bar
- **About** — circular avatar, quick-fact cards, and technical skills badges
- **Projects** — responsive cards with gradient placeholders, tech tags, and hover effects
- **Contact** — email, GitHub, and LinkedIn links with social icons
- **Sticky Navbar** — transparent at top, gains backdrop blur on scroll, mobile hamburger menu
- **Scroll-triggered fade-in animations** — custom IntersectionObserver (`Reveal`) component
- **Back to Top** button that appears after scrolling 300px
- **Download Resume** button linked to a PDF
- Fully **responsive** for all screen sizes

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- [TypeScript](https://www.typescriptlang.org)
- Fonts: Inter (body), Space Grotesk (headings) via `next/font`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # global styles + custom Tailwind utilities
│   ├── layout.tsx       # root layout + fonts
│   └── page.tsx         # single-page portfolio (Hero, About, Projects, Contact, Footer)
└── components/
    ├── BackToTop.tsx    # floating back-to-top button
    ├── Navbar.tsx       # sticky navbar with mobile menu
    ├── Reveal.tsx       # scroll-triggered fade-in wrapper
    └── Typewriter.tsx   # typing/erasing text animation
```

## Customization

- **Projects**: edit the `projects` array at the top of `src/app/page.tsx`
- **Photo**: replace the avatar placeholder in the About section and add your image to `public/`
- **Resume**: replace `public/knk_resume.pdf` with your latest resume
- **Contact details**: update email/phone/social links throughout `src/app/page.tsx`

## Deployment

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
