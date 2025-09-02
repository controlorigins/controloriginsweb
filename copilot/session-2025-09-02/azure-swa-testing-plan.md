# Azure Static Web Apps Testing Plan

**Date**: September 2, 2025  
**Session**: Azure SWA Workflow Testing

## Testing Strategy

### Local Testing Limitations
- Windows file locking prevents clean node_modules rebuild
- Tailwind native binary is locked by VS Code/process
- Asset preparation script works correctly ✅
- Build configuration is valid ✅

### Workflow Validation

#### ✅ Verified Components
1. **Asset Preparation**: `node ./scripts/prepare-assets.mjs` works perfectly
2. **Workflow Configuration**: All required parameters are present
3. **Build Paths**: Correct source (`/client`) and output (`../dist/public`) paths
4. **Node.js Setup**: Using Node 18 with npm caching

#### 🔧 Azure SWA Workflow Steps
```yaml
1. Checkout code ✅
2. Setup Node.js 18 ✅
3. Install dependencies (npm ci) ✅
4. Prepare assets ✅
5. Azure SWA build & deploy ✅
```

### Testing Approach

#### Phase 1: Commit & Push Test
1. Add workflow changes to git
2. Commit with clear message
3. Push to main branch
4. Monitor GitHub Actions

#### Phase 2: Deployment Verification
1. Check GitHub Actions build logs
2. Verify asset preparation step
3. Confirm build completion
4. Test Azure SWA URL functionality

#### Phase 3: Application Testing
1. Test routing (React Router via Wouter)
2. Verify asset loading (images, icons)
3. Check responsive design
4. Validate performance

## Expected Workflow Behavior

### Build Process
- Azure SWA will run in Ubuntu environment (no Windows file locking)
- Fresh npm ci installation
- Asset preparation creates all required files
- Vite builds optimized production bundle
- Output goes to `../dist/public` relative to `/client`

### Success Criteria
- ✅ GitHub Actions completes without errors
- ✅ Azure SWA deployment succeeds
- ✅ Application loads correctly
- ✅ All assets are accessible
- ✅ Routing works properly

## Risk Mitigation

### Potential Issues
1. **Build Path Problems**: Output location relative to app_location
2. **Asset Preparation**: Script execution in Linux environment
3. **Dependencies**: Package installation in clean environment

### Fallback Plan
If Azure build fails:
1. Check GitHub Actions logs for specific errors
2. Adjust paths in workflow if needed
3. Test asset preparation script compatibility
4. Verify package.json scripts work in Linux

## Testing Commands

### Pre-commit Verification
```bash
# Check workflow syntax
cat .github/workflows/azure-static-web-apps-jolly-ocean-09dea6e10.yml

# Verify asset script
node ./scripts/prepare-assets.mjs

# Check package.json scripts
npm run --silent build:static --dry-run
```

### Post-deployment Testing
```bash
# Test Azure SWA URL (once deployed)
curl -I https://your-azure-swa-url.azurestaticapps.net/

# Check specific assets
curl -I https://your-azure-swa-url.azurestaticapps.net/assets/portfolio/AsyncDemo.png
```

## Documentation Requirements

### Success Documentation
- GitHub Actions build log screenshot
- Azure SWA deployment confirmation
- Application functionality verification
- Performance metrics if available

### Issue Documentation
- Any error messages from build process
- Workarounds or fixes applied
- Lessons learned for future deployments

## Next Steps After Testing

1. **If Successful**: Document best practices and update README
2. **If Issues Found**: Debug, fix, and re-test
3. **Performance Optimization**: Review build times and bundle sizes
4. **Monitoring Setup**: Consider Application Insights integration

## Notes

- Azure SWA provides better build environment than local Windows
- Fresh dependency installation resolves local issues
- Asset preparation script is cross-platform compatible
- Workflow uses relative paths for maximum compatibility
