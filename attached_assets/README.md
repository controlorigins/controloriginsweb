# Asset Management Guidelines

## Structure

This directory contains all source images used throughout the Control Origins website, organized by purpose:

```text
📁 attached_assets/
├── 📁 branding/          # Logos, brand assets
├── 📁 hero/              # Homepage hero images
├── 📁 content/           # General content images
└── 📁 solutions/         # Solution-specific images
```

## Naming Conventions

- Use **semantic names** that describe the content, not timestamps
- Use **kebab-case** for file names (lowercase with hyphens)
- Be **descriptive** but concise

### Examples

- ✅ `logo.png`
- ✅ `hero-background.jpg`
- ✅ `greek-theatre.jpg`
- ❌ `logo_1756760288725.png`
- ❌ `IMG_001.jpg`

## Usage in Components

Import assets using the `@assets` alias:

```typescript
import logoPath from "@assets/branding/logo.png";
import heroBg from "@assets/hero/hero-background.jpg";
import solutionImage from "@assets/solutions/compass.jpg";
```

## Build Process

1. **Source Storage**: Original high-quality images stored here
2. **Build Optimization**: Vite automatically optimizes during build
3. **Cache Busting**: Build system adds hashes to filenames
4. **Output**: Optimized assets go to `docs/assets/` for deployment

## Adding New Assets

1. **Place in appropriate folder** based on usage
2. **Use semantic naming** following conventions above
3. **Import in component** using `@assets/folder/filename.ext`
4. **Build and test** to ensure proper optimization

## File Size Guidelines

- **Hero images**: < 1MB (will be compressed during build)
- **Content images**: < 500KB
- **Icons/logos**: < 100KB
- **Solution images**: < 200KB

## Supported Formats

- **Primary**: JPG, PNG
- **Future**: WebP, AVIF (automatic generation planned)
- **Vector**: SVG for icons and simple graphics

## Scripts

- `npm run prune:assets` - Remove unused assets (protects organized folders)
- `scripts/prepare-icons.mjs` - Generate favicons from logo
- Build process automatically optimizes all assets

## Asset Protection

The pruning script protects assets in the organized folders:

- `branding/` - Always protected from pruning
- `hero/` - Always protected from pruning
- `content/` - Always protected from pruning
- `solutions/` - Always protected from pruning

Only loose files in the root `attached_assets/` directory and other unorganized folders will be pruned if unused.

## Notes

- All images are version-controlled in Git
- Build process handles optimization automatically
- Unused assets are detected and can be pruned
- Backwards compatibility maintained for old naming patterns
