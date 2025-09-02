# GitHub Pages 404 Troubleshooting Guide - September 2, 2025

## Issue Analysis

**Problem**: Accessing `https://markhazleton.github.io/controlorigins-site/` returns 404
**Repository**: `markhazleton/controlorigins-site`
**Expected URL**: Should serve the Control Origins website

## Root Cause Analysis

### 1. **GitHub Pages Configuration Issue**

The 404 error suggests GitHub Pages is not properly configured for this repository. Several potential causes:

1. **Pages not enabled** - GitHub Pages might not be enabled in repository settings
2. **Wrong source configuration** - Pages might not be set to deploy from `docs/` folder
3. **Branch mismatch** - Pages might be configured for wrong branch
4. **Custom domain conflict** - CNAME file might be causing routing issues

### 2. **Repository Structure Verification** ✅

The repository structure is correct:

- Source code in `client/`
- Built files properly copied to `docs/`
- `.nojekyll` file present
- 404.html for SPA routing
- All assets properly referenced

## Immediate Fix Steps

### Step 1: Verify GitHub Pages Settings

**Manual Check Required**: Go to your GitHub repository settings:

1. Navigate to: `https://github.com/markhazleton/controlorigins-site/settings/pages`
2. Verify configuration:
   - **Source**: Should be "Deploy from a branch"
   - **Branch**: Should be "main"
   - **Folder**: Should be "/ (root)" or "/docs"
   - **Custom domain**: Remove if present initially

### Step 2: Fix Base URL Configuration

**Issue**: The site might have incorrect base URL for GitHub Pages subdirectory

**Solution**: Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/controlorigins-site/' : './',
  // ... rest of config
});
```

### Step 3: Rebuild with Correct Base Path

```bash
# Set production environment and rebuild
NODE_ENV=production npm run build:static
npm run copy:github
git add docs/
git commit -m "Fix base path for GitHub Pages"
git push origin main
```

### Step 4: Alternative - Remove Custom Domain Temporarily

The `CNAME` file might be causing conflicts. Try removing it temporarily:

```bash
# Remove CNAME to test basic GitHub Pages functionality
rm docs/CNAME
rm client/public/CNAME
git add .
git commit -m "Remove CNAME for testing"
git push origin main
```

## Expected Timeline

- **Configuration changes**: Immediate
- **Build deployment**: 2-5 minutes
- **GitHub Pages propagation**: 5-10 minutes
- **DNS propagation** (if custom domain): Up to 24 hours

## Testing Steps

### 1. Basic GitHub Pages Test

After removing CNAME, test: `https://markhazleton.github.io/controlorigins-site/`

### 2. Check GitHub Actions

Monitor the deployment at: `https://github.com/markhazleton/controlorigins-site/actions`

### 3. Verify Assets

Check that assets load correctly:

- `https://markhazleton.github.io/controlorigins-site/assets/index-[hash].css`
- `https://markhazleton.github.io/controlorigins-site/assets/index-[hash].js`

## Advanced Troubleshooting

### If 404 Persists

1. **Check GitHub Actions logs** for deployment errors
2. **Verify file permissions** - all files should be readable
3. **Test with simple HTML** - create minimal index.html to test
4. **Check repository visibility** - must be public for GitHub Pages

### Custom Domain Setup (After Basic Works)

1. **Add CNAME back**: Only after basic GitHub Pages works
2. **Configure DNS**: Point domain to GitHub Pages
3. **Wait for propagation**: Allow up to 24 hours
4. **Enable HTTPS**: In repository settings

## Alternative Solutions

### Option 1: Use GitHub Actions for Deployment

Replace docs folder deployment with GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - run: npm ci
      - run: npm run build:static
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/public
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option 2: Alternative Hosting

If GitHub Pages continues to have issues:

- **Netlify**: Drag-and-drop `dist/public` folder
- **Vercel**: Connect GitHub repository
- **Azure Static Web Apps**: Use existing configuration

## Status Check Commands

```bash
# Check current deployment status
curl -I https://markhazleton.github.io/controlorigins-site/

# Verify files are accessible
curl https://markhazleton.github.io/controlorigins-site/index.html

# Check GitHub Pages API
curl https://api.github.com/repos/markhazleton/controlorigins-site/pages
```

## Next Steps Priority

1. **HIGH**: Check GitHub repository Pages settings manually
2. **HIGH**: Remove CNAME temporarily to test basic functionality  
3. **MEDIUM**: Update base URL configuration for subdirectory
4. **LOW**: Consider GitHub Actions deployment as alternative
