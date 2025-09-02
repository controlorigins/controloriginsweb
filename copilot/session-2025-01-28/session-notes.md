# Session Notes - January 28, 2025

## Session Overview

- **Objective**: Clean up Control Origins website for static deployment only
- **Target**: Remove all server-side components unnecessary for GitHub Pages/Azure Static Web Apps
- **Started**: 2025-01-28

## Current State Analysis

The project currently has a mixed architecture with both static frontend and full-stack backend components:

### Frontend (KEEP)

- React 18 + TypeScript + Vite
- Tailwind CSS v4 with custom theming
- Radix UI components
- Wouter routing (client-side)
- Static data files (JSON)
- All client-side UI components

### Backend (REMOVE)

- Express.js server with middleware
- Drizzle ORM configuration
- PostgreSQL database schema
- User authentication system
- Session management
- API routes and server-side storage

### Build Process (SIMPLIFY)

- Keep: Static build scripts, GitHub Pages deployment, Azure SWA deployment
- Remove: Server build scripts, database scripts, full-stack development scripts

## Identified Components for Removal

### 1. Server Directory

- **Path**: `/server/`
- **Contents**: Express server, routes, storage, Vite SSR setup
- **Impact**: Complete server-side functionality removal

### 2. Database Configuration

- **Files**: `drizzle.config.ts`, `shared/schema.ts`
- **Purpose**: PostgreSQL database setup and user authentication schema
- **Impact**: No database dependency

### 3. Package Dependencies

- **Server**: express, express-session, passport, passport-local
- **Database**: drizzle-orm, drizzle-kit, connect-pg-simple
- **Auth**: memorystore, @types/passport, @types/express-session
- **Build**: tsx, esbuild (for server builds)

### 4. npm Scripts

- **Remove**: dev (full-stack), build:server, db:push, server-related scripts
- **Keep**: dev:static, build:static, build:github, swa:* scripts

### 5. Configuration Files

- **Modify**: tsconfig.json (remove server path references)
- **Remove**: Server-specific configurations

## Next Steps

1. Remove server directory and related files
2. Clean up package.json dependencies
3. Update npm scripts for static-only workflow
4. Modify tsconfig.json paths
5. Update documentation
6. Test static build process
