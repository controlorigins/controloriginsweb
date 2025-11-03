# Control Origins Website - AI Agent Guide

## Project Architecture

**Static React SPA** deploying to Azure Static Web Apps at `controlorigins.com`. This is a corporate consulting website, NOT a full-stack application despite the `/server` directory (Express is dev-only, never deployed).

### Tech Stack
- **React 19** + TypeScript (strict mode)
- **Vite 7** build system (ESNext, bundler resolution)
- **Tailwind CSS v4** with CSS-first `@theme` configuration (no JS config)
- **Radix UI** for accessible primitives + custom components
- **Wouter** for client-side routing (not React Router)
- **Azure Static Web Apps** deployment (single target, no GitHub Pages)

## Critical Build Workflow

**Asset Pipeline**: Assets currently live in `attached_assets/` (non-standard, may refactor to standard `client/public/assets/`). Build scripts copy assets before bundling:

```bash
# Development
npm run dev              # Auto-runs prepare-assets, starts Vite on http://localhost:5173

# Production build
npm run build            # Alias for clean + build:static
npm run build:static     # Prepares assets, builds to dist/public/
npm run preview          # Test production build on http://localhost:4173
```

**Deployment**: Azure Static Web Apps deploys from `dist/public/`. GitHub Actions workflow:
1. Runs `npm run build:static` (includes asset preparation)
2. Deploys `app_location: "/dist/public"` with `skip_app_build: true`

### Asset Imports

```typescript
// Import using @assets alias (currently from attached_assets/)
import heroImg from "@assets/hero/hero-background.jpg";
import logo from "@assets/branding/logo.png";

// Directory structure:
// attached_assets/
//   branding/    - logos, brand assets
//   hero/        - homepage hero images  
//   content/     - general content images
//   solutions/   - solution-specific images
```

## Routing & SPA Configuration

**Wouter** handles client-side routing (see `App.tsx`). Azure SWA config (`client/public/staticwebapp.config.json`):
- **SPA fallback**: All routes → `/index.html` (React handles routing)
- **Asset exclusions**: Prevents `/assets/*`, `/*.js`, `/*.css` from fallback
- **404 handling**: Returns `index.html` with 200 status code
- **Cache strategy**: 1-year immutable cache for assets, 1-hour for HTML

```typescript
// Routing in App.tsx - simple Wouter setup
import { Switch, Route, Router } from "wouter";

<Router base="/">
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/solutions" component={Solutions} />
    <Route component={NotFound} /> {/* Catch-all */}
  </Switch>
</Router>
```

## Styling Architecture

**Tailwind v4 CSS-first**: Configuration lives in `client/src/index.css` using `@theme` directive (NO `tailwind.config.ts`):

```css
@import "tailwindcss";

@theme {
  /* Semantic colors reference CSS variables for theme switching */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  
  /* Border radius scale */
  --radius-lg: 0.5rem;
  
  /* Fonts */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

/* Then theme variables below @theme block */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  /* ... */
}
```

**Component Variants**: Use `class-variance-authority` for complex component states:

```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md", // base
  {
    variants: {
      variant: { default: "bg-primary text-primary-foreground", /* ... */ },
      size: { default: "h-10 px-4 py-2", /* ... */ }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);
```

**Theme Switching**: Custom Context API implementation in `hooks/use-theme.tsx` (NOT a third-party lib):

```typescript
import { useTheme } from "@/hooks/use-theme";

const { theme, setTheme } = useTheme(); // "light" | "dark" | "system"
setTheme("dark"); // Persists to localStorage, updates DOM class
```

## SEO & Meta Tags

**Dynamic SEO**: `SEOHead` component updates meta tags via `useEffect` (runs per-route):

```typescript
import SEOHead from "@/components/seo-head";

<SEOHead 
  title="Solutions | Control Origins"
  description="Comprehensive technology solutions..."
  url="https://controlorigins.com/solutions"
/>
```

Component updates: `document.title`, meta description/keywords, Open Graph tags, Twitter Cards, and injects JSON-LD structured data dynamically.

**Static SEO Files**: `client/public/sitemap.xml` and `robots.txt` maintained manually.

## TypeScript Configuration

```json
// tsconfig.json - Key settings
{
  "compilerOptions": {
    "strict": true,              // No any, strict null checks
    "module": "ESNext",          // Modern ES modules
    "moduleResolution": "bundler", // Vite bundler mode
    "allowImportingTsExtensions": true, // .tsx imports OK
    "paths": { "@/*": ["./client/src/*"] }
  }
}
```

**Import Aliases**:
- `@/` → `client/src/` (components, hooks, lib, pages)
- `@assets/` → `attached_assets/` (images, icons)

## Component Patterns

### File Structure
```
client/src/
├── components/
│   ├── ui/              # Radix UI + shadcn/ui primitives (button, toast, tooltip)
│   ├── hero-section.tsx # Feature components (kebab-case)
│   └── seo-head.tsx
├── pages/               # Route components (home.tsx, not-found.tsx)
├── hooks/               # Custom hooks (use-theme.tsx, use-mobile.tsx)
├── data/                # Static JSON (projects.json, solutions.json)
└── lib/                 # Utils (utils.ts with cn() helper)
```

### Component Template
```typescript
interface MyComponentProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function MyComponent({ 
  title = "Default",
  children,
  className 
}: MyComponentProps) {
  return (
    <section className={cn("base-styles", className)}>
      {/* Implementation */}
    </section>
  );
}
```

**Key Utilities**: `cn()` from `lib/utils.ts` merges Tailwind classes using `clsx` + `tailwind-merge`.

## Common Development Tasks

### Adding a New Page
1. Create `client/src/pages/my-page.tsx`
2. Add route in `App.tsx`: `<Route path="/my-page" component={MyPage} />`
3. Update `client/public/sitemap.xml` if public
4. Add `SEOHead` component with page-specific metadata

### Adding a New Component
1. Create in `client/src/components/my-component.tsx`
2. Use TypeScript interfaces for props
3. Import with `@/components/my-component`
4. For UI primitives, add to `components/ui/` folder

### Styling a Component
```typescript
// Use cn() to merge classes conditionally
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  variant === "primary" && "primary-class",
  className
)}>
```

### Accessing Static Data
```typescript
import projects from "@/data/projects.json";
import solutions from "@/data/solutions.json";

// JSON files export typed arrays
projects.forEach(project => console.log(project.title));
```

## Troubleshooting

### Assets Not Loading
```bash
# Assets MUST be prepared before dev/build
node ./scripts/prepare-assets.mjs
# Or use npm scripts that auto-prepare:
npm run dev              # Includes prepare-assets
npm run build:static     # Includes prepare-assets
```

### Build Failures
```bash
# Nuclear option - full clean rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build:static
```

### TypeScript Errors
- Check `tsconfig.json` paths match file locations
- Ensure strict mode compliance (no `any` types)
- Use `allowImportingTsExtensions: true` for `.tsx` imports

### Routing Not Working Locally
- Vite dev server handles SPA routing automatically
- Azure SWA uses `staticwebapp.config.json` for production routing
- 404s should render React's `NotFound` component (returns 200 status)

## Key Files Reference

| File | Purpose |
|------|---------|
| `vite.config.ts` | Build config, path aliases, manual chunks |
| `client/src/index.css` | Tailwind v4 `@theme` config, CSS variables |
| `client/src/App.tsx` | Wouter router setup, theme provider |
| `client/public/staticwebapp.config.json` | Azure SWA routing, cache headers, security headers |
| `.github/workflows/azure-static-web-apps-*.yml` | CI/CD pipeline |
| `scripts/prepare-assets.mjs` | Asset copy script (source → public) |
| `tsconfig.json` | TypeScript strict mode, path aliases |

---

*Last updated: November 2025*
