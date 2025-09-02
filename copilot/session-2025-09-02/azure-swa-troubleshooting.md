# Azure Static Web App Troubleshooting Session

**Date**: September 2, 2025
**Site**: controlorigins.com

## Issues Identified

### 1. Content Security Policy (CSP) Error

- **Error**: `Content-Security-Policy: The page's settings blocked a style (style-src-elem) at https://fonts.googleapis.com/css2?family=Inter... from being applied because it violates the following directive: "style-src 'self' 'unsafe-inline'"`
- **Root Cause**: CSP policy doesn't allow external stylesheets from fonts.googleapis.com
- **Impact**: Google Fonts not loading, affecting typography

### 2. JavaScript Module Loading Error

- **Error**: `Loading failed for the module with source "https://controlorigins.com/assets/index-9WNOqrT6.js"`
- **Root Cause**: Likely related to CSP restrictions or missing MIME type handling
- **Impact**: Application not loading/functioning

### 3. Cloudflare Zaraz Script Error

- **Error**: Loading failed for Cloudflare's zaraz/s.js script
- **Root Cause**: External script blocked by CSP or not properly configured
- **Impact**: Analytics/tracking not working

## Latest Issue (Update 2)

### Site Shows Briefly Then Goes Blank

- **Error**: `Loading failed for the <script> with source "https://controlorigins.com/cdn-cgi/zaraz/s.js?z=..."`
- **Root Cause**: Cloudflare Zaraz script is injected by Cloudflare proxy but blocked by CSP
- **Impact**: Site loads momentarily then goes blank due to script failure

### Additional Fixes Applied

1. **Cloudflare Zaraz Support**: Added `https://controlorigins.com` to script-src for Cloudflare-injected scripts
2. **Connect Sources**: Added `https://cloudflareinsights.com` for Cloudflare analytics
3. **Removed Problematic Headers**:
   - Removed `Cross-Origin-Embedder-Policy: require-corp`
   - Removed `Cross-Origin-Opener-Policy: same-origin`
   - Removed `upgrade-insecure-requests` directive
4. **Simplified CORS**: Let Azure SWA handle CORS naturally

## Current CSP Configuration (Updated)

```csp
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.cloudflare.com https://controlorigins.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://cloudflareinsights.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'
```

## Solutions Required

1. Update CSP to allow Google Fonts
2. Review and fix JavaScript module serving
3. Add Cloudflare Zaraz to allowed sources if needed
4. Test build and deployment process
