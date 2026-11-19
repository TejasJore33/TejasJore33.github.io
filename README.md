# Developer Portfolio

A one-page developer portfolio built with **React + Vite + TypeScript + Tailwind CSS v4**,
ready to deploy on **GitHub Pages** and serve from a free **`tejasj.is-a.dev`** subdomain.

Sections: Hero (with code card and count-up stats) · tech ticker · About · Skills · Experience ·
Projects · GitHub graph · Process · Deployment & DevOps · Why me · FAQ · Contact · Footer.

## 1. Add your content

**All text, links and lists are in [`src/data/site.ts`](src/data/site.ts).** Search for `TODO`.
You never need to edit the components to change content.

A few more places to update:

| File | What to change |
| --- | --- |
| `index.html` | `<title>`, meta description, `og:url` |
| `public/favicon.svg` | your initials (set to `TJ`) |
| `public/CNAME` | your subdomain (set to `tejasj.is-a.dev`) |
| `public/projects/*.jpg` | optional project screenshots, referenced as `image: '/projects/x.jpg'` |
| `public/resume.pdf` | optional, then set `profile.resumeUrl = '/resume.pdf'` |

Icons come from [lucide.dev](https://lucide.dev/icons). Import any icon in `site.ts` and use it.

## 2. Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
npm run lint
```

## 3. Deploy to GitHub Pages

1. Create a GitHub repo named **`TejasJore33.github.io`** (recommended: it is served from the root URL,
   so the site works even before the custom domain is active) and push this project to the `main` branch.
2. In the repo, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Each push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes the site.
   Before the custom domain is active, the site is at `https://<user>.github.io/<repo>/`.
   Assets may 404 there because `base` is `/`. That is expected and goes away once the
   custom domain is set.

## 4. Get your `is-a.dev` subdomain

1. Fork **https://github.com/is-a-dev/register**.
2. Copy [`is-a-dev/tejasj.json`](is-a-dev/tejasj.json) into the fork's `domains/` folder
   as `domains/tejasj.json`.
3. Fill in your GitHub username and email. Keep the record as
   `"CNAME": "<your-github-username>.github.io"`.
4. Open a pull request and follow the PR template and the checklist in the
   [is-a.dev docs](https://docs.is-a.dev). Your site must be live and development-related.
5. After the PR is merged, go to **Settings → Pages → Custom domain** in your portfolio repo,
   enter `tejasj.is-a.dev`, save, and tick **Enforce HTTPS** once the certificate is issued.
   `public/CNAME` keeps the domain set on every deploy.

> The is-a.dev JSON format can change. Check the register repo's README before submitting.

## Project structure

```
src/
  data/site.ts          ← all content
  components/           ← one file per section, plus shared bits (Reveal, SectionHeading, StatCounter, icons)
  hooks/                ← useInView (scroll reveal), useCountUp (animated numbers)
  index.css             ← Tailwind import, theme tokens, shared utility classes
.github/workflows/deploy.yml
is-a-dev/tejasj.json    ← file for the is-a.dev registration PR
```
