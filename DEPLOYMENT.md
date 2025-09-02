# Control Origins Website — Build & Deployment

## Overview

- Static React + Vite site deployed to GitHub Pages via the docs/ folder.
- Custom domain supported via CNAME file stored in client/public/CNAME.

## Local Build & Preview

1) Install dependencies
 - npm install

2) Development server
 - npm run dev

3) Production preview (build + serve)
 - npm run preview

## Production Build

- Primary build: npm run build:static
 	- Outputs to dist/public
 	- Base path auto-detected:
  		- If CNAME exists (client/public or docs), base = "/"
  		- Else base = "/controlorigins-site/" (repo name)

## GitHub Pages Publish

1) Build and copy to docs/
 - npm run build:github
 - Copies dist/public/* to docs/
 - Ensures docs/404.html mirrors index.html for SPA routing
 - Preserves or seeds docs/CNAME from client/public/CNAME
 - Ensures docs/.nojekyll exists

2) Commit and push (optional helper)
 - npm run deploy:github

## Checks

- Custom domain: client/public/CNAME should contain controlorigins.com
- After build: dist/public/index.html should reference assets with the correct base
- After copy: docs/ contains index.html, 404.html, assets/, .nojekyll, and CNAME

## Troubleshooting

- Base path incorrect on GitHub Pages
 	- If using custom domain, ensure client/public/CNAME exists before build
 	- If publishing under username.github.io/repo, base must include "/repo/"
- Icons missing
 	- scripts/prepare-icons.mjs copies a logo_*.png to required icons in client/public
 	- Ensure attached_assets contains a logo_*.png
