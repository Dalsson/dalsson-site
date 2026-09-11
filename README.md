# dalsson.com

Static marketing site for Dalsson, an independent Workday practice. Two pages, no build step, no dependencies.

## Pages

| File | URL once deployed | What it is |
|------|-------------------|------------|
| `index.html` | `/` | Main site: hero, domains, how we work, AI suite, HR as a Service teaser, contact |
| `hr-as-a-service.html` | `/hr-as-a-service` | Standalone HR as a Service page: pricing tiers, interactive cost calculator, guarantees, benefit matrix, best practices |

`vercel.json` turns on clean URLs, so `/hr-as-a-service.html` is served at `/hr-as-a-service`. Internal links already use the clean paths.

## Deploy to Vercel

### Option A — drag and drop (no tools needed)
1. Go to https://vercel.com/new
2. Drag this whole folder onto the page (or zip it first and upload the zip).
3. Click Deploy. You get a live `*.vercel.app` URL in about a minute.

### Option B — Vercel CLI
```bash
npm i -g vercel
cd dalsson-site
vercel          # preview deploy, follow the prompts
vercel --prod   # promote to production
```

### Option C — Git
Push this folder to a GitHub repo, then in Vercel choose "Import Project" and select it. Framework preset: **Other**. No build command, output directory is the repo root.

## Custom domain
In the Vercel project: Settings → Domains → add `dalsson.com`, then point your DNS as Vercel instructs (an A record or the Vercel nameservers). HTTPS is automatic.

## Notes
- Everything is self contained. Fonts load from Google Fonts and a few illustrative photos load from Unsplash; both are external CDNs, so the site needs internet to render those (normal for a public site).
- No server, no environment variables, no database.

## Assets & SEO included
- `favicon.svg` (plus `favicon-32.png`) and `apple-touch-icon.png` — the dalsson "d." mark
- `og-default.png` / `og-hraas.png` — 1200x630 social preview images (Open Graph + Twitter)
- `site.webmanifest` — installable web-app metadata
- `robots.txt` and `sitemap.xml` — for search indexing
- Open Graph and Twitter Card meta tags live in each page's head

### One thing to update before going live
The canonical, sitemap, robots and Open Graph URLs all use `https://dalsson.com`. If you launch on a temporary `*.vercel.app` domain first, find-and-replace `https://dalsson.com` with your live URL in `index.html`, `hr-as-a-service.html`, `sitemap.xml` and `robots.txt`. Once the real domain is attached, nothing else changes.
