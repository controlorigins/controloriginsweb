# Code Changes (2025-09-02)

## Summary

- Vite base now auto-detects custom domain via CNAME to emit root-relative assets when a CNAME is present.
- GitHub Pages copy script preserves/seeds CNAME from client/public and ensures 404.html and .nojekyll.
- Added DEPLOYMENT.md documenting build and deploy steps.

## Diffs

- Updated vite.config.ts: introduced fs check for CNAME and computed PROD_BASE.
- Updated package.json: improved copy:github PowerShell script.
- Added DEPLOYMENT.md content and fixed markdown lint.

### 2025-09-02 Later Update

- Adjusted `vite.config.ts` to always use a relative production base (`./`) to fix asset 404s on GitHub Pages project site.
- Rebuilt site (`npm run build:github`), updated `docs/index.html` to reference `./assets/...` and pushed to `main`.
