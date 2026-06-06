# FlashOS — Website

Marketing landing page + browsable OS catalog for [FlashOS](https://github.com/RAGExSOULL/flashos),
the one-click OS downloader and USB flasher.

Built with **React 18 + Vite** and **Framer Motion**, matching the FlashOS app
brand (dark `#0d0d0f`, purple `#6c63ff`/`#9d95ff`, Inter + DM Mono).

## Sections

- **Hero** — headline, CTAs, live stats, and an animated app-window mockup
- **Features** — bento-grid of the core capabilities
- **How it works** — 5-step pipeline + firmware/partition-logic table
- **Operating systems** — filterable catalog (All / Windows / Linux), 14 families
- **Download** — per-platform installer cards (Windows / Linux / macOS)
- **Footer**

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

- **Supported OSes / stats** — `src/data/osCatalog.js`
- **Links & version** — `src/data/site.js` (update `GITHUB_URL` to your repo)
- **Design tokens / styles** — `src/index.css` (`:root` variables at the top)
- **Icons** — `src/components/Icons.jsx`

## Notes

The site is fully responsive (375 / 768 / 1024 / 1440), respects
`prefers-reduced-motion`, has no horizontal overflow on mobile, and uses inline
SVG icons (no emoji) throughout.
