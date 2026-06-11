# Sanjuksha Nirgude — Portfolio

Personal portfolio site built with React, Vite, TypeScript, and TailwindCSS v4.

Live at: https://sanjuksha.github.io

## Local development

```bash
pnpm install
pnpm run dev
```

## Deploying changes

Every time you make changes and want to push them live, run these three commands:

```bash
# 1. Save your source code to GitHub
git add .
git commit -m "describe what you changed"
git push

# 2. Build and deploy the live site
pnpm run deploy
```

`pnpm run deploy` builds the site and pushes the compiled output to the `gh-pages` branch, which GitHub Pages serves at https://sanjuksha.github.io. The site updates within ~1 minute.

## Project structure

```
src/app/
├── components/       # All sections (About, Projects, Leadership, etc.)
├── pages/            # ProjectPage (individual project detail pages)
├── data/             # Project data, images, and video mappings
images/               # All image assets
videos/               # Demo video files
public/               # Static files served at root URL (PDFs, etc.)
```

## Adding new content

- **New project**: add an entry to `src/app/data/projects.ts` and images to `src/app/data/projectImages.ts`
- **New video**: drop the file in `videos/` and add the mapping to `src/app/data/projectVideos.ts`
- **Resume or PDFs**: place files in `public/` and reference them as `/filename.pdf`