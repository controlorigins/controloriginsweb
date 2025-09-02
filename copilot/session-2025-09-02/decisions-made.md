# Decisions Made (2025-09-02)

- Use CNAME presence to set Vite base to "/" for custom domain deployments; fallback to "/controlorigins-site/" otherwise.
- Preserve/seed CNAME during docs/ copy to avoid losing custom domain config.
- Keep SPA fallback via copying docs/index.html to docs/404.html on every build.
- Document build and deployment process in DEPLOYMENT.md.
- Add dev:static script alias for consistency with project docs.

## 2025-09-02 Later Decision

- Switch to relative Vite `base: './'` in production. Rationale: GitHub Pages serves project sites under `/repo/`, so root-absolute asset URLs 404. Relative paths work for both project subpaths and custom domains.
