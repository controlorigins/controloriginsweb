# Major Version Updates Plan - September 1, 2025

## Updates to Apply (Excluding Tailwind CSS)

### Build System Updates

- **vite**: ^5.4.19 → ^7.1.4 (MAJOR - 2 version jump)
- **@vitejs/plugin-react**: ^4.7.0 → ^5.0.2 (MAJOR - React plugin update)

### Development Dependencies

- **@types/node**: 20.19.11 → 24.3.0 (MAJOR - Node.js 20 LTS → 24 LTS)
- **framer-motion**: ^11.18.2 → ^12.23.12 (MAJOR - Animation library update)

## Excluded (Preserved Current Versions)

- **tailwindcss**: ^3.4.17 (keeping v3.x)
- **@tailwindcss/typography**: ^0.5.16 (keeping current)
- **@tailwindcss/vite**: ^4.1.12 (keeping current)
- **tailwind-merge**: ^2.6.0 (keeping v2.x)
- **tailwindcss-animate**: ^1.0.7 (keeping current)

## Risk Assessment

### High Risk Updates

1. **Vite 7.x**: Major build system changes
   - Breaking changes in plugin API
   - New configuration options
   - Performance improvements but potential compatibility issues

2. **@vitejs/plugin-react 5.x**: React plugin major update
   - Must be compatible with Vite 7
   - May have React 19 optimizations
   - Could affect development server behavior

### Medium Risk Updates

3. **Node.js Types 24.x**: TypeScript types update
   - Reflects Node.js 24 LTS features
   - May have stricter typings
   - Could affect server-side code (though we're client-only)

4. **Framer Motion 12.x**: Animation library major update
   - API changes possible
   - Performance improvements expected
   - May affect existing animations

## Update Strategy

### Phase 1: Vite Ecosystem (High Risk)

- Update Vite and React plugin together
- Test build system compatibility
- Validate development server

### Phase 2: Supporting Dependencies (Medium Risk)

- Update Node.js types
- Update Framer Motion
- Test animation functionality

### Phase 3: Validation

- Complete build testing
- Development server testing
- Animation functionality testing
- Azure SWA compatibility testing

## Expected Benefits

### Vite 7 Improvements

- Better performance and faster builds
- Enhanced plugin ecosystem
- Improved development experience
- Better tree shaking and optimization

### Framer Motion 12 Benefits

- Performance improvements
- New animation features
- Better React 19 compatibility
- Enhanced developer experience

## Rollback Plan

- Git commit point before updates
- Document any breaking changes encountered
- Keep previous package-lock.json for quick rollback
