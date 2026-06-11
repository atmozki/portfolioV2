# Dennis Jojo Kuriakose · Portfolio

Personal portfolio site. Built with **React + Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis** smooth scrolling. Quiet editorial design: paper, ink, and one ember accent.

## Editing content

Everything on the page lives in **`src/content.js`**: name, links, about text, work, education, certifications. Edit, save, and the page hot-reloads.

Other knobs:
- **Resume:** drop a PDF into `public/resume.pdf` and set `links.resume` in `content.js` to `'./resume.pdf'`.
- **Page title and SEO tags:** top of `index.html`.
- **Colors and fonts:** the `@theme` block at the top of `src/index.css`.

## Running locally

```bash
npm install      # first time only
npm run dev      # dev server with hot reload
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Deploying to GitHub Pages

Deploys automatically through GitHub Actions on every push to `main`.

1. Create a repo on GitHub (for example `portfolio`).
2. Push this folder:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
4. The site goes live at `https://YOUR_USERNAME.github.io/portfolio/` about a minute later.

The Vite config uses `base: './'`, so the site works at any Pages path without edits. For a custom domain, add it under **Settings → Pages** and create `public/CNAME` containing the domain.

## Structure

```
public/            static files (favicon, resume.pdf, .nojekyll)
src/
  content.js       all page content
  index.css        design tokens and utilities
  App.jsx          section composition + Lenis setup
  components/      Navbar, Hero, Marquee, About, Works, Education, Contact
.github/workflows/ GitHub Pages deploy workflow
```
