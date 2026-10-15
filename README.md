# PPMMWU website

The Planned Parenthood Mar Monte Workers United site, built with Next.js and Tailwind CSS from the [Figma design](https://www.figma.com/design/Oc9DaAAZrIusK7uCN2dzAE/PPMMWU-Editable-Website-Design?node-id=49-505).

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

- **Pages:** `src/app/page.tsx` (Home), `src/app/news/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`
- **Outside links** (Linktree, Member Action Team, Bargaining Principles) and the contact form endpoint: `src/lib/site.ts`
- **News article links:** the `href` fields at the top of `src/app/news/page.tsx`
- **Member quotes** for the Our Voices gallery: the `voices` list in `src/app/contact/page.tsx`
- **Images:** `src/assets/`

## Deployment

Every push to `main` builds a static export and publishes it to GitHub Pages via `.github/workflows/deploy.yml`.
In the repo settings, set **Pages → Build and deployment → Source** to **GitHub Actions** (one-time setup).
