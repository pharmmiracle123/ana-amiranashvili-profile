# Ana Amiranashvili — Professional Portfolio

World-class single-page portfolio with light/dark mode, responsive design, and TypeScript.

## Quick start

1. Open `index.html` in a browser (or deploy the whole folder).
2. **Add Ana’s photo**
   - Place the portrait file at: `assets/photo.jpg`
   - Recommended: portrait orientation, min 800×1000px, good lighting, face centered.
   - Formats: `.jpg`, `.webp` or `.png` work (update the `src` in `index.html` if not `.jpg`).

Until a photo is added, a clean fallback with the initial “A” is shown.

## Features

- **Light & Dark mode** — toggle in the header; preference is saved; respects system setting on first visit.
- **Track record** — $4,400 total payments, 2 active projects (Copywriting + Translation), enrollment $206, profile/portfolio setup $620.
- **Platforms** — Micro1, Outlier, Handshake, CrowdGen, Mercor.
- **Full professional content** — About, Experience (NDI, GLOBO, Via Consulting, teaching), Skills, Education, Contact.
- **Responsive** — mobile-first, works on all device sizes including notched phones (safe-area).
- **TypeScript** — source in `js/main.ts`, compiled to `js/main.js`.
- **Accessibility** — skip link, ARIA on menu/theme, reduced-motion support, semantic structure.
- **UI polish** — scroll reveals, sticky header, smooth anchors, professional typography (Cormorant Garamond + DM Sans).

## Structure

```
ana-portfolio/
├── index.html
├── css/styles.css
├── js/
│   ├── main.ts      # TypeScript source
│   └── main.js      # Compiled (used by the page)
├── assets/
│   └── photo.jpg    # ← add portrait here
└── README.md
```

## Deploy

Upload the entire folder to any static host (Netlify, Vercel, GitHub Pages, TaniX, etc.). No build step required for visitors — only `main.js` is loaded.
