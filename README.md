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

Every push to `main` builds a static export and publishes it to the **`gh-pages`** branch.

**One-time setup (repo owner):**

1. Open [Settings → Pages](https://github.com/ianmetromet-cmyk/PPMMWUWEB/settings/pages).
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose **Branch:** `gh-pages`, **Folder:** `/ (root)`, then **Save**.

**Share this link:** https://ianmetromet-cmyk.github.io/PPMMWUWEB/

If Pages was never turned on, run `./scripts/enable-github-pages.sh` after `gh auth login`, or use Settings → Pages → Deploy from branch → `gh-pages` → `/ (root)`.
