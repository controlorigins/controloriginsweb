# GitHub Pages Portfolio Images 404 Troubleshooting

**Date**: September 2, 2025  
**Issue**: Portfolio images showing 404 errors on GitHub Pages deployment

## Problem Description

Portfolio images are returning 404 errors when accessed on GitHub Pages:

- Error URLs: `https://markhazleton.github.io/assets/portfolio/ProjectMechanics.png`
- Expected location: `docs/assets/portfolio/ProjectMechanics.png` ✓ (exists)
- Images referenced in: `client/src/data/projects.json` with `/assets/portfolio/` paths

## Investigation Results

### 1. File Structure Analysis

- ✅ Portfolio images exist in `docs/assets/portfolio/` with correct names (not hashed)
- ✅ Assets preparation script working correctly
- ✅ Build process copying files to deployment folder
- ✅ Base URL configuration using relative paths (`./assets/`)

### 2. URL Pattern Analysis

The error URL shows images being requested from:

```
https://markhazleton.github.io/assets/portfolio/ProjectMechanics.png
```

But the correct URL should be:

```
https://markhazleton.github.io/controlorigins-site/assets/portfolio/ProjectMechanics.png
```

### 3. Root Cause

The issue is that the JSON file uses absolute paths (`/assets/portfolio/`) which resolve to the GitHub domain root instead of the repository subdirectory.

## Solution Strategy

Need to update the image paths in `projects.json` to use relative paths that work with the base configuration.

## Files to Modify

- `client/src/data/projects.json` - Update image paths from `/assets/portfolio/` to `./assets/portfolio/`
