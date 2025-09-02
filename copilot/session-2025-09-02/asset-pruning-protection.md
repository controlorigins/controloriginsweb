# Asset Pruning Protection Update - September 2, 2025

## Change Summary

Updated the asset pruning script (`scripts/prune-assets.mjs`) to protect the newly organized asset folders from being pruned, ensuring that assets are preserved for future use.

## Changes Made

### 1. Protected Directories

The following directories are now protected from pruning:

- `attached_assets/branding/`
- `attached_assets/hero/`
- `attached_assets/content/`
- `attached_assets/solutions/`

### 2. Script Updates

**File**: `scripts/prune-assets.mjs`

```javascript
// Added protection logic in getAllAssetFiles()
const isInProtectedDir = relativePath.startsWith('branding\\') || 
                        relativePath.startsWith('branding/') ||
                        relativePath.startsWith('hero\\') || 
                        relativePath.startsWith('hero/') ||
                        relativePath.startsWith('content\\') || 
                        relativePath.startsWith('content/') ||
                        relativePath.startsWith('solutions\\') || 
                        relativePath.startsWith('solutions/');

return isImageFile && !isInProtectedDir;
```

### 3. Documentation Updates

**File**: `attached_assets/README.md`

- Added "Asset Protection" section explaining which folders are protected
- Updated script description to mention protection behavior

## Behavior

### Protected Assets

- ✅ All assets in organized folders (`branding/`, `hero/`, `content/`, `solutions/`) are preserved
- ✅ These assets will never be removed by the pruning script
- ✅ Safe to store assets for future use in these directories

### Pruned Assets

- ❌ Loose files in root `attached_assets/` directory (if unused)
- ❌ Files in unorganized folders like `portfolio/` (if unused)
- ❌ Any image files not referenced in code and not in protected directories

## Testing Results

Verification showed:

- Protected assets remain untouched: ✅
- Unused loose files are removed: ✅
- Protection message displays after pruning: ✅

## Impact

This change ensures that:

1. **Asset safety** - Organized assets are never accidentally deleted
2. **Future planning** - Assets can be stored for future use without risk
3. **Clean workspace** - Unused loose files are still cleaned up
4. **Clear feedback** - Users are informed about protection behavior

## Command Usage

```bash
npm run prune:assets
```

Output example:

```text
Removed unused asset: old-file.png
Pruned 1 unused asset(s).
Note: Assets in branding/, hero/, content/, and solutions/ folders are protected from pruning.
```
