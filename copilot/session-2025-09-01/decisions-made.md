# Decisions Made - September 1, 2025

## Architecture Decisions

### 1. Dual Deployment Strategy

**Decision**: Maintain support for both GitHub Pages and Azure Static Web Apps  
**Rationale**:

- GitHub Pages provides free hosting with custom domain support
- Azure SWA offers enterprise features and better performance
- Different clients may prefer different platforms
- Provides redundancy and flexibility

**Implementation**: Separate build scripts and GitHub Actions workflows for each platform

### 2. Static-First Development Approach  

**Decision**: Prioritize static site development over full-stack Express setup  
**Rationale**:

- Primary use case is static corporate website
- Better performance and security for static content
- Easier deployment and maintenance
- Express server maintained for development convenience only

**Implementation**: `npm run dev:static` as primary development command

### 3. Build Tool Configuration

**Decision**: Use Vite with manual code splitting  
**Rationale**:

- Vite provides fast development experience
- Manual chunking allows better control over bundle optimization
- Separating vendor, UI, and app code improves caching
- Smaller initial bundle size for better performance

**Implementation**:

```javascript
manualChunks: {
  vendor: ['react', 'react-dom'],
  ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
}
```

### 4. Session Documentation Structure

**Decision**: Implement `/copilot/session-{date}/` folder structure  
**Rationale**:

- Provides clear historical record of changes
- Helps with debugging and rollback procedures
- Improves collaboration and knowledge transfer
- Aligns with best practices for AI-assisted development

**Implementation**: Mandatory structure for all GitHub Copilot sessions

## Technology Decisions

### 1. Azure Static Web Apps CLI Integration

**Decision**: Use `@azure/static-web-apps-cli` for local development  
**Rationale**:

- Provides authentic local environment for SWA features
- Better testing of routing and configuration
- Recommended by Microsoft Azure best practices
- Simplifies deployment pipeline

**Alternative Considered**: Manual configuration files  
**Why Rejected**: CLI handles configuration automatically and reduces errors

### 2. PowerShell Commands for Windows

**Decision**: Use PowerShell commands in npm scripts  
**Rationale**:

- Primary development environment is Windows
- PowerShell provides robust file manipulation
- Cross-platform compatibility maintained through npm scripts abstraction
- Better error handling than basic shell commands

**Implementation**:

```json
"clean": "powershell -Command \"Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue; Remove-Item -Recurse -Force docs/assets -ErrorAction SilentlyContinue\""
```

### 3. Separate Build Commands

**Decision**: Create specific build commands for each deployment target  
**Rationale**:

- GitHub Pages requires files in `docs/` folder
- Azure SWA uses different configuration requirements
- Clearer developer experience with explicit commands
- Reduces deployment errors

**Commands Created**:

- `npm run build:static` - Core Vite build
- `npm run build:github` - Build + copy to docs/
- `npm run swa:build` - SWA-specific build

## Configuration Decisions

### 1. Asset Organization

**Decision**: Maintain `attached_assets/` as source, build to `dist/public/assets/`  
**Rationale**:

- Clear separation between source and built assets
- Vite handles optimization and hashing automatically
- Preserves original high-quality assets for future use
- Standard build tool pattern

### 2. GitHub Actions Workflows

**Decision**: Separate workflows for GitHub Pages and Azure SWA  
**Rationale**:

- Different triggers and requirements for each platform
- Easier to maintain and debug
- Allows independent deployment strategies
- Better security isolation

**Files Created**:

- `.github/workflows/deploy-github-pages.yml`
- `.github/workflows/deploy-azure-swa.yml`

### 3. TypeScript Configuration

**Decision**: Maintain strict TypeScript configuration  
**Rationale**:

- Prevents runtime errors in production
- Better development experience with IDE support
- Easier refactoring and maintenance
- Industry best practice for React applications

## Documentation Decisions

### 1. Comprehensive Copilot Instructions

**Decision**: Create detailed `.github/copilot-instructions.md` with full project context  
**Rationale**:

- Provides GitHub Copilot with complete project understanding
- Reduces need for repetitive explanations
- Ensures consistent code generation patterns
- Improves AI-assisted development quality

**Sections Included**:

- Project overview and tech stack
- Build process and testing procedures
- File organization and naming conventions
- Deployment instructions for both platforms
- Troubleshooting and emergency procedures

### 2. Multi-Level Documentation

**Decision**: Create both detailed (`DEPLOYMENT.md`) and quick-start (`BUILD.md`) documentation  
**Rationale**:

- Different audiences need different levels of detail
- Quick reference for experienced developers
- Comprehensive guide for new team members or complex operations
- Reduces support burden

## Security and Performance Decisions

### 1. Asset Caching Strategy

**Decision**: Implement aggressive caching for static assets  
**Rationale**:

- Static assets rarely change
- Improves site performance significantly
- Reduces bandwidth costs
- Vite's hash-based naming enables safe long-term caching

**Implementation**: Cache headers configured in both GitHub Pages and Azure SWA

### 2. Build Optimization

**Decision**: Enable minification and compression for production builds  
**Rationale**:

- Reduces bundle size significantly
- Improves page load times
- Standard practice for production deployments
- Minimal impact on build time

**Results**: ~350kB total bundle, ~102kB gzipped

## Risk Mitigation Decisions

### 1. Multiple Deployment Targets

**Decision**: Support both GitHub Pages and Azure SWA simultaneously  
**Risk Mitigated**: Single point of failure for hosting  
**Implementation**: Separate build processes ensure both targets remain functional

### 2. Comprehensive Testing Process

**Decision**: Require local testing before deployment  
**Risk Mitigated**: Broken production deployments  
**Implementation**: `npm run preview` command for local production testing

### 3. Rollback Procedures

**Decision**: Document clear rollback procedures for each platform  
**Risk Mitigated**: Extended downtime during deployment issues  
**Implementation**: Git-based rollback for GitHub Pages, Azure portal for SWA

## Future Decisions Deferred

### 1. Content Management System

**Status**: Deferred  
**Rationale**: Current static content approach is sufficient for corporate website needs  
**Future Consideration**: Headless CMS integration if content updates become frequent

### 2. Advanced Analytics

**Status**: Deferred  
**Rationale**: Basic analytics sufficient for current needs  
**Future Consideration**: Google Analytics or Azure Application Insights integration

### 3. Progressive Web App Features

**Status**: Deferred  
**Rationale**: Corporate website doesn't require offline functionality  
**Future Consideration**: Service worker implementation for improved caching

## Decision Impact Summary

**Positive Impacts**:

- Improved development workflow with clear build commands
- Better performance through optimized bundling
- Reduced deployment complexity through automation
- Enhanced maintainability through comprehensive documentation

**Trade-offs Accepted**:

- Additional complexity of dual deployment support
- Windows-specific PowerShell commands in scripts
- Manual maintenance of multiple configuration files

**Success Metrics**:

- Build time: ~2.10s (acceptable)
- Bundle size: ~350kB total (reasonable for feature set)
- Deployment automation: 100% automated via GitHub Actions
- Documentation coverage: Comprehensive for all major workflows
