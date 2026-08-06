# ashutoshaay26.github.io

Personal website of **Ashutosh Kakadiya** — Senior Machine Learning Scientist.
Built with [Astro](https://astro.build/) and deployed to GitHub Pages.

Live at **https://ashutoshaay26.github.io**

## Tech stack

- **Astro 5** — static site generation
- Vanilla CSS design system with light/dark theming (`data-theme`)
- Fonts: Fraunces (display), Inter (body), Courier Prime (mono)
- `@astrojs/sitemap` for `sitemap.xml`

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Structure

```
src/
  data/         profile + content (experience, publications, talks, awards, ...)
  content/blog/ blog posts (Markdown content collection)
  components/   Header, Footer, PageHeader, ThemeToggle, SocialLinks
  layouts/      Base.astro (HTML shell, SEO, theme script)
  pages/        one file per route
  styles/       global.css (design tokens + base styles)
public/         static assets served at the site root (images, files, favicon)
```

To update content, edit the typed data files in `src/data/` or add a Markdown
file under `src/content/blog/`.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it via GitHub Pages.

> Requires the repository's **Settings → Pages → Source** to be set to
> **GitHub Actions**.
