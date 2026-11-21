# Chandana Potlabathini – Portfolio (v2, animated)

React 18 + Vite + Tailwind CSS 3 + React Router. No animation libraries: everything is CSS plus small React hooks.

## Run it
```bash
npm install
npm run dev        # open the address it prints (usually http://localhost:5173)
npm run build      # production build in dist/
npm run preview    # test the production build locally
```
Do not open index.html by double-clicking; Vite projects need the dev server.

## Edit your content
- Text, skills, jobs, projects, links: `src/data.js`
- Photo: replace `public/profile.jpg`. Resume: replace `public/Chandana-Potlabathini-Resume.pdf`
- Colors: CSS variables at the top of `src/index.css`
- Animations: keyframes in `src/index.css`; hooks/components in `src/components/`

## Animations included
Aurora background, cursor spotlight, scroll-progress bar, letter-by-letter name, typewriter roles, spinning photo ring with orbiting badges, count-up stats, scroll reveals (up/left/right/zoom), 3D tilt cards with glare, skill marquee, self-drawing timeline, button shine, page transitions. All respect "reduce motion".

## Deploy (Netlify)
Build command `npm run build`, publish directory `dist`. `public/_redirects` keeps URLs like `/about` working on refresh.
