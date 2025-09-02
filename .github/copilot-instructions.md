# GitHub Copilot Instructions for Control Origins Website

## Project Overview

This is a **Control Origins corporate website** - a static React TypeScript application optimized for Azure Static Web Apps deployment. The site serves as the primary web presence for Control Origins, showcasing business technology consulting services.

### Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **UI Components**: Radix UI primitives + Custom components
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query + Context API
- **Build Tool**: Vite with optimized chunking
- **Deployment**: Azure Static Web Apps
- **Development**: Vite dev server

## Documentation Structure Requirements

### Session Documentation

**ALWAYS** create documentation in the following structure when generating docs:

```
/copilot/session-{YYYY-MM-DD}/
├── session-notes.md
├── decisions-made.md
├── code-changes.md
└── next-steps.md
```

**Current date format**: Use `2025-09-01` format for today's sessions.

### Documentation Guidelines

- Create session folders for ANY documentation work
- Include timestamps in session notes
- Document all decisions and rationale
- Track code changes with before/after snippets
- Always include next steps and follow-up items

## Build Process & Local Testing

### Development Scripts

```bash
# Clean development - removes all build artifacts
npm run clean

# Frontend-only development (recommended for static site work)
npm run dev:static          # Vite dev server on http://localhost:5173

# Full-stack development (includes Express server)
npm run dev                 # Express + React on configured ports

# Production testing
npm run preview             # Build + preview on http://localhost:4173
```

### Build Scripts

```bash
# Production builds
npm run build               # Clean + static build (primary)
npm run build:static        # Vite build to dist/public/
npm run build:server        # Full-stack build with Express

# Deployment-specific builds
npm run build:static        # Optimized build for Azure Static Web Apps
```

### Local Testing Process

1. **Development Testing**:

   ```bash
   npm run dev              # Start dev server
   # Test at http://localhost:5173
   ```

2. **Production Testing**:

   ```bash
   npm run clean           # Clean slate
   npm run build:static    # Production build
   npm run preview         # Preview server
   # Test at http://localhost:4173
   ```

3. **Production Testing**:

   ```bash
   npm run build:static    # Production build
   npm run preview         # Preview server
   # Test at http://localhost:4173
   ```

## Deployment Targets

### Azure Static Web Apps

- **Path**: Files deploy from `dist/public/` folder
- **Domain**: Custom domain `controlorigins.com` configured in Azure
- **Build**: `npm run build:static`
- **Deploy**: Automated via GitHub Actions workflow
- **Config**: Uses `staticwebapp.config.json` for routing and headers

## Project Structure & File Organization

```
├── client/                 # React application root
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── ui/        # Radix UI + custom components
│   │   │   └── *.tsx      # Feature components
│   │   ├── pages/         # Route components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   └── data/          # Static data (JSON)
│   ├── public/            # Static assets
│   └── index.html         # Main HTML template
├── server/                # Express.js (development only)
├── dist/                  # Build output (Azure SWA deployment)
│   └── public/           # Static site files
├── .github/
│   ├── workflows/        # CI/CD automation
│   └── copilot-instructions.md # This file
└── attached_assets/      # Asset source files
```

## Development Guidelines

### Component Development

- **Use TypeScript**: All components must be typed
- **Radix UI First**: Prefer Radix primitives for UI components
- **CSS Variables**: Use Tailwind + CSS variables for theming
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Follow WCAG guidelines (Radix provides baseline)

### File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `hero-section.tsx`)
- **Pages**: `kebab-case.tsx` (e.g., `not-found.tsx`)
- **Hooks**: `use-*.tsx` (e.g., `use-mobile.tsx`)
- **Types**: `*.types.ts` or inline in component files
- **Utils**: `kebab-case.ts` (e.g., `query-client.ts`)

### Import Patterns

```typescript
// Path aliases configured
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SharedType } from "@shared/schema";
```

### Styling Guidelines

- **Tailwind Classes**: Use utility-first approach
- **CSS Variables**: For theme tokens (defined in `index.css`)
- **Component Variants**: Use `class-variance-authority` for complex variants
- **Responsive**: Always consider mobile, tablet, desktop
- **Dark Mode**: Support both light/dark themes

## Code Quality Standards

### TypeScript

- **Strict Mode**: Enabled in `tsconfig.json`
- **Type Safety**: No `any` types unless absolutely necessary
- **Props Interface**: Define props interfaces for all components
- **Return Types**: Explicitly type function returns when complex

### Performance

- **Code Splitting**: Manual chunks configured in Vite
- **Asset Optimization**: Images optimized, lazy loading where appropriate
- **Bundle Size**: Monitor with Vite build analysis
- **Caching**: Proper cache headers for static assets

### SEO & Meta Tags

- **Structured Data**: JSON-LD schema included
- **Open Graph**: Complete OG meta tags
- **Twitter Cards**: Social media optimization
- **Sitemap**: Maintained in `client/public/sitemap.xml`
- **Robots.txt**: Configured for search engines

## Common Tasks & Patterns

### Adding New Components

1. Create component in appropriate `components/` subfolder
2. Export from component file
3. Add to `components/ui/index.ts` if UI component
4. Include proper TypeScript interfaces
5. Follow accessibility guidelines
6. Test responsive behavior

### Modifying Build Process

1. Update `package.json` scripts if needed
2. Modify `vite.config.ts` for Vite configuration
3. Update GitHub Actions workflows for CI/CD changes
4. Test both GitHub Pages and Azure SWA deployments
5. Document changes in session folder

### Adding New Pages

1. Create page component in `client/src/pages/`
2. Add route to `App.tsx` using Wouter
3. Update navigation if needed
4. Add to sitemap if public page
5. Test routing on both deployment targets

### Performance Optimization

1. Analyze bundle size: `npm run build:static` and check output
2. Use Vite's rollup bundle analyzer
3. Optimize images in `attached_assets/`
4. Implement lazy loading for heavy components
5. Monitor Core Web Vitals

## Troubleshooting Common Issues

### Build Failures

```bash
# Clear everything and rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build:static
```

### Development Server Issues

```bash
# Port conflicts - Vite uses 5173, Express uses configured port
# Check package.json scripts for port configurations
# Use npm run dev:static for frontend-only development
```

### Deployment Issues

- **Azure SWA**: Check GitHub Actions workflow and build output
- **Custom Domain**: DNS configuration and CNAME file
- **Asset Loading**: Check relative vs absolute paths

### CSS/Styling Issues

- **Tailwind**: Check `tailwind.config.ts` content paths
- **CSS Variables**: Verify definitions in `client/src/index.css`
- **Component Styles**: Ensure Radix styles are imported
- **Theme Issues**: Check theme provider and CSS variable values

## Security & Best Practices

### Code Security

- **No Secrets**: Never commit API keys or secrets
- **Dependency Updates**: Regular `npm audit` and updates
- **Type Safety**: Maintain strict TypeScript configuration
- **Input Validation**: Use Zod for runtime validation where needed

### Static Site Security

- **Content Security Policy**: Configure via meta tags or headers
- **HTTPS Only**: Both platforms provide HTTPS by default
- **Asset Integrity**: Subresource integrity for external assets
- **XSS Prevention**: React provides built-in protection

## Performance Monitoring

### Core Web Vitals

- **LCP**: Optimize hero image loading
- **FID**: Minimize JavaScript execution time
- **CLS**: Ensure stable layout during load
- **INP**: Optimize interaction responsiveness

### Monitoring Tools

- **Lighthouse**: Built into Chrome DevTools
- **PageSpeed Insights**: Google's web performance tool
- **Azure Application Insights**: Available with Azure SWA
- **GitHub Actions**: Can include performance testing

## Communication & Collaboration

### Documentation Requirements

- **Decision Records**: Document architectural decisions
- **Change Logs**: Track significant changes in session folders
- **API Documentation**: Document any data structures or APIs
- **Deployment Notes**: Keep deployment instructions current

### Code Review Guidelines

- **TypeScript Compliance**: Ensure type safety
- **Performance Impact**: Consider bundle size and load time
- **Accessibility**: Verify WCAG compliance
- **Browser Compatibility**: Test across target browsers
- **Mobile Responsiveness**: Always test mobile layout

## Emergency Procedures

### Rollback Process

1. **Azure SWA**: Check GitHub Actions deployment status
2. **Local Testing**: `npm run preview` to test before deployment

### Critical Issues

1. **Build Broken**: Use last known good configuration
2. **Site Down**: Check GitHub Actions status
3. **Performance Issues**: Use Lighthouse to identify bottlenecks
4. **Security Issues**: Immediate dependency updates and redeployment

---

**Remember**: Always use the session documentation structure `/copilot/session-{date}/` for any work sessions, follow the build process exactly as documented, and test thoroughly before going live.
