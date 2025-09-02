# Control Origins Website — Build & Deployment

## Overview

Static React + Vite site deployed to Azure Static Web Apps with custom domain controlorigins.com.

## Local Build & Preview

1) Install dependencies
   ```bash
   npm install
   ```

2) Development server
   ```bash
   npm run dev
   ```

3) Production preview (build + serve)
   ```bash
   npm run preview
   ```

## Production Build

Primary build command:
```bash
npm run build:static
```

- Outputs to `dist/public/`
- Optimized for Azure Static Web Apps deployment
- Uses absolute base path `/` for proper asset loading

## Azure Static Web Apps Deployment

The site deploys automatically via GitHub Actions to Azure Static Web Apps:

1) **Triggered by**: Push to main branch
2) **Build Command**: `npm run build:static`
3) **Output Location**: `dist/public/`
4) **Domain**: `controlorigins.com` (configured in Azure)
5) **Routing**: Handled by `staticwebapp.config.json`

## Configuration Files

- **`staticwebapp.config.json`**: Azure SWA routing and headers configuration
- **`vite.config.ts`**: Build configuration optimized for Azure SWA
- **GitHub Actions**: Automated deployment workflow

## Troubleshooting

- **Build failures**: Check `npm run build:static` output for errors
- **Routing issues**: Verify `staticwebapp.config.json` configuration
- **Missing icons**: Ensure `scripts/prepare-icons.mjs` copies logo properly
- **Asset loading**: Verify base path is set to `/` in vite.config.ts
