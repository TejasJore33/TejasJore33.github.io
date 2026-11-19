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

## 3. Deployment (already set up)

- Repo: https://github.com/TejasJore33/TejasJore33.github.io
- Live: https://tejasjore33.github.io (soon also https://tejasj.is-a.dev)
- GitHub Pages source is **GitHub Actions**. Every push to `main` runs
  `.github/workflows/deploy.yml`, which builds and publishes the site automatically.

## 4. Claim `tejasj.is-a.dev` (do this yourself — is-a.dev does not accept AI-made PRs)

1. Open https://github.com/is-a-dev/register/fork and create the fork.
2. In your fork, click **Add file → Create new file**, name it `domains/tejasj.json`
   and paste the contents of [`is-a-dev/tejasj.json`](is-a-dev/tejasj.json). Commit it.
3. Click **Contribute → Open pull request**. Keep their PR template exactly as it is
   (do not delete any comments). Only:
   - tick every checkbox by changing `[ ]` to `[x]`,
   - put `https://tejasjore33.github.io` between the WEBSITE_PREVIEW markers,
   - write one or two sentences in your own words between the WEBSITE_PURPOSE markers
     (e.g. what the site is: your personal developer portfolio).
4. Watch the PR. If a maintainer requests changes, make them — otherwise it gets closed.
5. **Only after it is merged**: repo **Settings → Pages → Custom domain** → enter
   `tejasj.is-a.dev` → Save, then tick **Enforce HTTPS** once it is available.

Rules worth knowing: the site must be complete and software-related, not commercial, and
messaging maintainers to hurry a review gets the PR marked low priority.
See https://docs.is-a.dev for details.

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
