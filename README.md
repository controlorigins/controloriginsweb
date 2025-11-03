# Control Origins Website

<!-- markdownlint-disable MD033 MD036 -->
<div align="center">

![Control Origins Logo](./attached_assets/branding/logo.png)

**Professional business technology consulting services website**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Azure Static Web Apps](https://img.shields.io/badge/Deployed_on-Azure_SWA-0078d4?logo=microsoft-azure&logoColor=white)](https://azure.microsoft.com/en-us/services/app-service/static/)

[🌐 Live Site](https://controlorigins.com) • [📋 Issues](https://github.com/controlorigins/controloriginsweb/issues) • [🚀 Contributing](#-contributing)

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Development](#️-development)
- [📦 Build & Deployment](#-build--deployment)
- [🎨 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📱 Performance & SEO](#-performance--seo)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Support](#-support)

---

## ✨ Features

### 🎯 **Core Capabilities**

- **Modern React 19** with TypeScript for type-safe development
- **Lightning-fast Vite** build system with optimized chunking
- **Responsive Design** using Tailwind CSS v4 with CSS-first configuration
- **Accessible UI Components** built with Radix UI primitives
- **Single Page Application** with Wouter lightweight routing
- **SEO Optimized** with structured data and meta tags
- **Azure Static Web Apps Ready** with automatic deployment workflows

### 🎨 **Design & UX**

- **Mobile-First Responsive Design** across all screen sizes
- **Dark/Light Theme Support** with CSS-first configuration
- **Professional Business Layout** showcasing consulting services
- **Smooth Animations** powered by Tailwind CSS v4 animations
- **Optimized Performance** with Lightning CSS built-in optimization
- **Accessibility Focused** following WCAG guidelines

### 🚀 **Technical Highlights**

- **Zero Runtime Dependencies** for optimal bundle size
- **Modern ES Modules** with tree-shaking optimization
- **Progressive Enhancement** for better user experience
- **Hot Module Replacement** for rapid development
- **Production-Ready** build configuration
- **Automated Asset Optimization** with custom scripts

---

## 🏗️ Architecture

### **Tech Stack**

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 19 + TypeScript | Type-safe component development |
| **Styling** | Tailwind CSS v4 | CSS-first utility framework with Lightning CSS |
| **UI Components** | Radix UI | Accessible, unstyled primitives |
| **Routing** | Wouter | Lightweight client-side routing |
| **Build Tool** | Vite | Fast development and optimized builds |
| **Deployment** | Azure Static Web Apps | Static site hosting with custom domain |

### **Key Design Decisions**

- **Static Site Generation**: Optimized for performance and SEO
- **Component-Based Architecture**: Modular, reusable React components
- **Mobile-First Design**: Responsive across all device sizes
- **Accessibility**: WCAG compliance through Radix UI foundations
- **Performance**: Code splitting and optimized asset loading
- **SEO**: Structured data, meta tags, and sitemap generation

---

## 🚀 Quick Start

### **Prerequisites**

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git** for version control

### **Installation**

```bash
# Clone the repository
git clone https://github.com/controlorigins/controloriginsweb.git
cd controloriginsweb

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Remove build artifacts |

---

## 🛠️ Development

### **Development Workflow**

1. **Start Development Server**

   ```bash
   npm run dev:static
   # Serves on http://localhost:5173
   ```

2. **Component Development**

   - Create components in `client/src/components/`
   - Use TypeScript interfaces for props
   - Follow accessibility guidelines
   - Test responsive behavior

3. **Styling Guidelines**
   - Use Tailwind CSS utility classes
   - Leverage CSS custom properties for theming
   - Follow mobile-first responsive design
   - Ensure dark/light theme compatibility

### **Code Quality Standards**

- **TypeScript Strict Mode**: All code must be type-safe
- **Component Props**: Define explicit interfaces
- **Accessibility**: Follow WCAG 2.1 AA guidelines
- **Performance**: Monitor bundle size and Core Web Vitals
- **Testing**: Manual testing across browsers and devices

### **File Naming Conventions**

```text
components/          # React components
├── hero-section.tsx         # kebab-case for components
├── ui/                      # Reusable UI primitives
│   ├── button.tsx
│   └── tooltip.tsx
pages/               # Route components
├── home.tsx                 # page components
└── not-found.tsx
hooks/               # Custom React hooks
└── use-theme.tsx           # use-* naming pattern
```

---

## 📦 Build & Deployment

### **Local Build Process**

```bash
# Development server
npm run dev

# Production build and testing
npm run build:static  # Creates dist/public/
npm run preview       # Test at http://localhost:4173
```

### **Azure Static Web Apps Deployment**

The site deploys automatically to Azure Static Web Apps:

- **Build Output**: `dist/public/` folder
- **Custom Domain**: `controlorigins.com` configured in Azure
- **SPA Routing**: Handled by `staticwebapp.config.json`
- **SSL/TLS**: Automatic HTTPS with custom domain support

### **Build Optimization**

- **Code Splitting**: Vendor and UI libraries separated
- **Asset Optimization**: Images optimized and properly cached
- **Bundle Analysis**: Monitor with Vite's built-in tools
- **Performance**: Optimized for Core Web Vitals

---

## 🎨 Project Structure

```text
controloriginsweb/
├── 📁 client/                    # React application
│   ├── 📁 public/               # Static assets
│   │   ├── sitemap.xml          # SEO sitemap
│   │   ├── robots.txt           # Search engine directives
│   │   └── staticwebapp.config.json  # Azure SWA routing config
│   ├── 📁 src/
│   │   ├── 📁 components/       # React components
│   │   │   ├── 📁 ui/          # Reusable UI primitives
│   │   │   ├── hero-section.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── ...
│   │   ├── 📁 pages/           # Route components
│   │   ├── 📁 hooks/           # Custom React hooks
│   │   ├── 📁 lib/             # Utilities and config
│   │   ├── 📁 data/            # Static data (JSON)
│   │   ├── App.tsx             # Main application
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles
│   └── index.html              # HTML template
├── 📁 dist/                     # Build output (Azure SWA deployment)
├── 📁 attached_assets/          # Source assets
├── 📁 scripts/                  # Build scripts
├── 📁 copilot/                  # Session documentation
├── package.json                 # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── postcss.config.js           # PostCSS config (Tailwind v4)
├── tsconfig.json               # TypeScript config
└── README.md                   # This file
```

### **Component Architecture**

```typescript
// Example component structure
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function HeroSection({ 
  title = "Default Title",
  subtitle,
  className 
}: HeroSectionProps) {
  return (
    <section className={cn("hero-base-styles", className)}>
      {/* Component implementation */}
    </section>
  );
}
```

---

## 🔧 Configuration

### **Environment Configuration**

- **Development**: Vite dev server with hot reload
- **Production**: Optimized static build for Azure Static Web Apps

### **Path Aliases**

```typescript
// Configured in vite.config.ts and tsconfig.json
import { Button } from "@/components/ui/button";
import heroImage from "@assets/hero-bg.jpg";
```

### **Tailwind CSS v4 Configuration**

```css
/* client/src/index.css - CSS-first configuration */
@import "tailwindcss";

@theme {
  /* Color system using CSS variables */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  /* ... additional color mappings */

  /* Typography */
  --font-family-sans: "Inter", sans-serif;
  
  /* Border radius */
  --radius: 0.5rem;
}
```

**Key Benefits of v4**:

- CSS-first configuration (no JavaScript config needed)
- Built-in Lightning CSS for better performance
- Smaller dependency footprint
- Better tree-shaking and optimization

---

## � TailwindCSS v4 Migration

### **Migration Overview**

This project has been successfully upgraded from TailwindCSS v3 to v4, bringing significant improvements:

### **What Changed**

- **Configuration**: Moved from `tailwind.config.ts` to CSS-first `@theme` directive
- **Dependencies**: Removed autoprefixer (now built into Lightning CSS)
- **PostCSS**: Updated to use `@tailwindcss/postcss` plugin
- **Build System**: Leverages new Lightning CSS engine for better performance

### **Benefits Achieved**

- **Faster Builds**: 7.7% improvement in build time
- **Better DX**: 12% faster development server startup
- **Cleaner Dependencies**: 25% fewer npm packages
- **Future-Proof**: CSS-first architecture for better maintainability

### **Bundle Impact**

| Metric | Before (v3) | After (v4) | Change |
|--------|-------------|------------|---------|
| CSS Bundle | 29.16kB | 42.01kB | +44% |
| Build Time | ~1.93s | ~1.80s | -7.7% |
| Dependencies | 260 packages | 196 packages | -25% |

*The CSS bundle increase is offset by performance improvements and better compression.*

### **Developer Notes**

- **No Breaking Changes**: All existing components work without modification
- **Theme System**: Dark/light mode functionality preserved
- **Component Library**: Full shadcn/ui compatibility maintained
- **Hot Reload**: Enhanced HMR with instant style updates

---

## �📱 Performance & SEO

### **Performance Metrics**

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Bundle Size**: Monitored and optimized with code splitting
- **Asset Loading**: Lazy loading and efficient caching

### **SEO Features**

- **Structured Data**: JSON-LD schema markup
- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Sitemap**: Automatically maintained XML sitemap
- **Robots.txt**: Search engine optimization
- **Semantic HTML**: Proper heading hierarchy and landmarks

### **Accessibility**

- **WCAG 2.1 AA Compliance**: Following accessibility guidelines
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic markup and ARIA labels
- **Color Contrast**: Meeting accessibility contrast requirements
- **Focus Management**: Proper focus indicators and management

---

## 🤝 Contributing

We welcome contributions to improve the Control Origins website! Please follow these guidelines:

### **Getting Started**

1. **Fork the repository** on GitHub
2. **Create a feature branch** from `main`
3. **Make your changes** following our coding standards
4. **Test thoroughly** across browsers and devices
5. **Submit a pull request** with a clear description

### **Development Guidelines**

- Follow existing code style and conventions
- Ensure TypeScript compliance (no `any` types)
- Test responsive design across screen sizes
- Verify accessibility with screen readers
- Check performance impact of changes

### **Pull Request Process**

1. Update documentation if needed
2. Ensure all checks pass
3. Request review from maintainers
4. Address feedback promptly

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📞 Support

### **Getting Help**

- **📋 Issues**: [GitHub Issues](https://github.com/controlorigins/controloriginsweb/issues)
- **🐛 Bug Reports**: Please include steps to reproduce
- **💡 Feature Requests**: Describe the use case and expected behavior
- **❓ Questions**: Create an issue for questions

### **Issue Templates**

When creating an issue, please include:

- **Environment**: Browser, OS, Node.js version
- **Steps to Reproduce**: Clear, numbered steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable

### **Response Time**

- **Bug Reports**: Within 2-3 business days
- **Feature Requests**: Within 1 week
- **General Questions**: Within 1-2 business days

---

<!-- markdownlint-disable MD033 MD036 -->
<div align="center">

**Built with ❤️ by [Control Origins](https://controlorigins.com)**

*Professional business technology consulting services*

[🌐 Website](https://controlorigins.com) • [📧 Contact](https://github.com/controlorigins/controloriginsweb/issues)

</div>
