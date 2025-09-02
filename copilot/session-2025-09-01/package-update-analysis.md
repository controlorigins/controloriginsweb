# Package Update Analysis - September 1, 2025

## Summary of Outdated Packages

Based on `npm outdated` analysis, here are the packages that can be updated:

## Safe Updates (Minor/Patch versions)

### Production Dependencies

- **@radix-ui/react-dialog**: `1.1.7 → 1.1.15` (patch updates)
- **@radix-ui/react-label**: `2.1.3 → 2.1.7` (patch updates)  
- **@radix-ui/react-slot**: `1.2.0 → 1.2.3` (patch updates)
- **@radix-ui/react-toast**: `1.2.7 → 1.2.15` (patch updates)
- **@radix-ui/react-tooltip**: `1.2.0 → 1.2.8` (patch updates)
- **wouter**: `3.3.5 → 3.7.1` (minor update - should be safe)

### Development Dependencies

- **@tailwindcss/typography**: `0.5.15 → 0.5.16` (patch update)
- **@tailwindcss/vite**: `4.1.3 → 4.1.12` (patch updates)
- **autoprefixer**: `10.4.20 → 10.4.21` (patch update)
- **postcss**: `8.4.47 → 8.5.6` (minor update)
- **@types/react**: `18.3.11 → 18.3.24` (patch updates for React 18)
- **@types/react-dom**: `18.3.1 → 18.3.7` (patch updates for React 18)

## Major Updates Requiring Consideration

### React Ecosystem

- **react**: `18.3.1 → 19.1.1` (MAJOR - breaking changes)
- **react-dom**: `18.3.1 → 19.1.1` (MAJOR - breaking changes)
- **@types/react**: `18.3.24 → 19.1.12` (MAJOR - if upgrading React)
- **@types/react-dom**: `18.3.7 → 19.1.9` (MAJOR - if upgrading React)

### Build Tools

- **vite**: `5.4.19 → 7.1.4` (MAJOR - breaking changes)
- **@vitejs/plugin-react**: `4.3.2 → 5.0.2` (MAJOR - breaking changes)
- **typescript**: `5.6.3 → 5.9.2` (minor but significant)

### Styling

- **tailwindcss**: `3.4.17 → 4.1.12` (MAJOR - breaking changes)
- **tailwind-merge**: `2.6.0 → 3.3.1` (MAJOR - breaking changes)
- **framer-motion**: `11.13.1 → 12.23.12` (MAJOR - breaking changes)

### Node Types

- **@types/node**: `20.16.11 → 24.3.0` (MAJOR - Node.js version jump)

### Icons

- **lucide-react**: `0.453.0 → 0.542.0` (minor but significant icon changes)

## Security Vulnerabilities

### Critical Issues to Address

1. **@azure/static-web-apps-cli** - Multiple vulnerabilities via dependencies
   - Cookie vulnerability (no fix available)
   - Temporary file vulnerability via devcert

2. **Vite/ESBuild** - Development server vulnerability
   - Fixed in newer versions

3. **@babel/helpers** - RegExp complexity issue
   - Can be fixed with `npm audit fix`

## Recommendations

### Phase 1: Safe Updates (Low Risk)

Update all Radix UI components and minor development dependencies:

```bash
npm update @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-slot @radix-ui/react-toast @radix-ui/react-tooltip
npm update @tailwindcss/typography @tailwindcss/vite autoprefixer postcss @types/react @types/react-dom
npm update wouter
```

### Phase 2: Security Fixes (Medium Risk)

```bash
npm audit fix
```

### Phase 3: Major Updates (High Risk - Requires Testing)

These should be done one at a time with thorough testing:

1. **Vite 7.x upgrade** - Will fix security issues but may have breaking changes
2. **React 19 upgrade** - Major framework update, requires compatibility testing
3. **Tailwind CSS v4** - Significant changes to configuration and utilities

## Packages to Consider Removing

### Development Dependencies

- **@replit/vite-plugin-cartographer**: Only needed for Replit environment
- **@replit/vite-plugin-runtime-error-modal**: Only needed for Replit environment
- **@azure/static-web-apps-cli**: Has security vulnerabilities, consider using GitHub Actions instead

### Analysis

Since this is for static deployment, the Replit-specific plugins can be removed if not developing on Replit platform.

## Action Plan

1. **Immediate**: Apply safe updates (Phase 1)
2. **Next**: Run `npm audit fix` for automatic security fixes
3. **Planned**: Gradually upgrade major dependencies with testing
4. **Consider**: Remove Replit-specific dependencies if not needed
