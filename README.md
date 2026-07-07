# muhammadsp Portfolio

A dark-themed 3D creator portfolio landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

1. Unzip this folder and open it in VS Code.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the dev server:
   ```
   npm run dev
   ```
4. Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```
npm run build
npm run preview
```

## Project structure

```
src/
  components/       Reusable pieces (FadeIn, Magnet, ContactButton, LiveProjectButton, AnimatedText)
  sections/         Page sections (Hero, Marquee, About, Services, Projects)
  App.tsx           Assembles all sections in order
  main.tsx          React entry point
  index.css         Global styles + Tailwind directives
```

## Notes

- All images are pulled from the external hosts referenced in the original spec (figma.site, motionsites.ai, higgs.ai/cloudfront). If any of those links go stale, swap in your own image URLs in the relevant section file.
- The Kanit font is loaded from Google Fonts in `index.html`.
