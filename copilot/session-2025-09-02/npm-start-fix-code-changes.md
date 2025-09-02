# NPM Start Script Fix - Code Changes

## Changes Made

### package.json

Fixed two script entries:

```json
// Before:
"start": "npx vite preview",
"preview": "npm run build:static && npm run start",

// After:
"start": "node ./scripts/prepare-icons.mjs && npx vite dev",
"preview": "npm run build:static && npx vite preview",
```

## Rationale

1. **`start` script**: Changed from `npx vite preview` to `node ./scripts/prepare-icons.mjs && npx vite dev`
   - Follows standard npm convention where `npm start` starts development server
   - Includes icon preparation step consistent with other dev scripts
   - Now works without requiring a pre-existing build

2. **`preview` script**: Changed from `npm run build:static && npm run start` to `npm run build:static && npx vite preview`
   - Eliminated circular dependency (preview → start → preview)
   - Directly calls `npx vite preview` after building
   - Maintains the build-then-serve functionality

## Test Results

- ✅ `npm start` - Successfully starts development server at <http://localhost:5173/>
- ✅ `npm run preview` - Successfully builds and serves production preview at <http://localhost:4173/>
- ✅ No circular dependencies
- ✅ Follows standard npm script conventions
