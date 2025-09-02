# Decisions Made - January 28, 2025

## Architecture Decision: Static-Only Deployment

**Decision**: Convert the Control Origins website from a mixed full-stack application to a pure static site for deployment to GitHub Pages and Azure Static Web Apps.

**Rationale**:

- The website is primarily informational/marketing content
- No user authentication or dynamic server-side functionality is required
- Static deployment provides better performance, security, and cost-effectiveness
- Simplifies the build process and reduces maintenance overhead

## Components to Remove

### 1. Server Infrastructure

- **Decision**: Remove entire `/server/` directory
- **Rationale**: Express.js server not needed for static deployment
- **Files**: `server/index.ts`, `server/routes.ts`, `server/storage.ts`, `server/vite.ts`

### 2. Database Layer

- **Decision**: Remove Drizzle ORM and PostgreSQL configuration
- **Rationale**: No server-side data persistence needed for static site
- **Files**: `drizzle.config.ts`, `shared/schema.ts`

### 3. Authentication System

- **Decision**: Remove user authentication and session management
- **Rationale**: Static site doesn't require user login functionality
- **Impact**: Removes passport, express-session, and related auth packages

## Dependencies Cleanup

### Server Dependencies (Remove)

- express
- express-session
- passport
- passport-local
- memorystore
- connect-pg-simple

### Database Dependencies (Remove)

- drizzle-orm
- drizzle-kit
- drizzle-zod

### Build Dependencies (Remove)

- tsx (Node.js TypeScript execution)
- esbuild (for server bundling)

### TypeScript Types (Remove)

- @types/express
- @types/express-session
- @types/passport
- @types/passport-local
- @types/connect-pg-simple

## Scripts Simplification

### Keep

- `dev:static` - Frontend-only development
- `build:static` - Static site build
- `build:github` - GitHub Pages build
- `preview` - Local preview server
- `clean` - Clean build artifacts
- `swa:*` - Azure Static Web Apps scripts

### Remove

- `dev` - Full-stack development
- `build:server` - Server-side build
- `start` - Production server start
- `db:push` - Database migrations

## Configuration Updates

### tsconfig.json

- **Decision**: Remove server path references
- **Change**: Update `include` array to exclude `server/**/*`
- **Change**: Remove server-related path mappings

### package.json

- **Decision**: Update name and description for static site
- **Change**: Remove server-related scripts and dependencies
- **Change**: Keep only frontend and build tooling dependencies

## Risk Assessment

### Low Risk

- Removing server code won't affect static functionality
- All frontend components remain intact
- Build process is already tested and working

### Mitigation

- Create backup of current state before deletion
- Test static build after each major removal
- Verify all existing functionality works in static mode
