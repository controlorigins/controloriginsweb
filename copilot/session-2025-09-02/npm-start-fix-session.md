# NPM Start Script Fix Session - 2025-09-02

## Issue Identified

The `npm run start` command was failing with error:

```
Error: The directory "C:\GitHub\ShareSmallBiz-support\controlorigins-site\dist\public" does not exist. Did you build your project?
```

## Root Cause

The `start` script in package.json runs `npx vite preview` which expects a built project in `dist/public`, but no build exists.

## Current Script Configuration

- `start`: `npx vite preview` - Tries to preview without building first
- `preview`: `npm run build:static && npm run start` - Builds then starts (but creates circular dependency)
- `dev`: `node ./scripts/prepare-icons.mjs && npx vite dev` - Development server
- `dev:static`: `node ./scripts/prepare-icons.mjs && npx vite dev` - Same as dev

## Standard Conventions

According to standard npm conventions and React project patterns:

- `npm start` should start the development server
- `npm run dev` should also start development server (Vite convention)
- `npm run preview` should build and serve production preview
- `npm run build` should create production build

## Recommended Fix

1. Change `start` script to run development server (standard convention)
2. Fix `preview` script to avoid circular dependency
3. Ensure all scripts work correctly

This aligns with the Copilot instructions for the project.
