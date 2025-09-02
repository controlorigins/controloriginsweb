# GitHub Pages Cleanup Plan - September 2, 2025

## 🎯 **Objective**

Remove all GitHub Pages related code, content, and tools since the site now exclusively uses Azure Static Web Apps with the controlorigins.com domain.

## 🗑️ **Items to Remove**

### **1. GitHub Pages Build Scripts**
- `build:github` - Builds and copies to docs folder
- `copy:github` - Complex PowerShell script for docs folder management
- `deploy:github` - GitHub Pages deployment script

### **2. docs/ Folder**
- Entire `docs/` folder used for GitHub Pages deployment
- Contains duplicate build artifacts no longer needed

### **3. GitHub Pages Router Logic**
- `getBasePath()` function in App.tsx
- GitHub.io hostname detection logic
- Dynamic base path calculation

### **4. Documentation References**
- GitHub Pages sections in README.md
- DEPLOYMENT.md GitHub Pages instructions
- .github/copilot-instructions.md GitHub Pages content

### **5. Configuration Files**
- Vite config comments about GitHub Pages vs Azure SWA
- Any CNAME file references (already removed)

## ✅ **Items to Keep**

### **Azure SWA Specific**
- `build:static` - Core build script (used by Azure SWA)
- `staticwebapp.config.json` files
- Azure SWA GitHub Actions workflow

### **Core Development**
- `dev`, `dev:static`, `start` scripts
- `clean`, `preview` scripts
- All source code and components

## 🔧 **Implementation Steps**

### **Phase 1: Remove Scripts & Folder**
1. Remove GitHub Pages scripts from package.json
2. Delete docs/ folder completely
3. Update clean script to remove docs references

### **Phase 2: Simplify Router**
1. Remove getBasePath() function from App.tsx
2. Simplify router to use standard "/" base
3. Remove GitHub.io hostname detection

### **Phase 3: Update Configuration**
1. Simplify vite.config.ts
2. Remove GitHub Pages comments and logic
3. Optimize for Azure SWA only

### **Phase 4: Clean Documentation**
1. Remove GitHub Pages sections from README.md
2. Update DEPLOYMENT.md for Azure SWA only
3. Clean .github/copilot-instructions.md

## 📊 **Expected Benefits**

### **Code Simplification**
- Remove ~50 lines of complex PowerShell script
- Eliminate dual deployment path confusion
- Simplify router logic significantly

### **Build Performance**
- Faster builds (no docs folder copying)
- Simpler deployment pipeline
- Reduced maintenance overhead

### **Developer Experience**
- Single deployment target (Azure SWA)
- Clearer documentation
- No GitHub Pages troubleshooting needed

## 🚨 **Risk Assessment**

### **Low Risk**
- All changes are removal-only
- Azure SWA deployment unchanged
- Core functionality preserved

### **Rollback Plan**
- Git history preserves all removed code
- Can restore docs/ folder if needed
- No breaking changes to Azure SWA

## 📋 **Testing Checklist**

After cleanup:
- [ ] Build process works (`npm run build:static`)
- [ ] Development server works (`npm run dev`)
- [ ] Azure SWA deployment works
- [ ] No build errors or warnings
- [ ] Router works correctly on Azure SWA
- [ ] Documentation is accurate
