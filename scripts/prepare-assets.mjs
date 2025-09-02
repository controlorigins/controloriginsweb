import { promises as fs } from 'fs';
import path from 'path';

const repoRoot = path.resolve(process.cwd());
const assetsDir = path.join(repoRoot, 'attached_assets');
const publicDir = path.join(repoRoot, 'client', 'public');

async function ensureDir(dir) {
  try { 
    await fs.mkdir(dir, { recursive: true }); 
  } catch (err) {
    // Ignore if directory already exists
    if (err.code !== 'EEXIST') throw err;
  }
}

async function copyFile(src, dest) {
  try {
    await ensureDir(path.dirname(dest));
    await fs.copyFile(src, dest);
    console.log(`✓ Copied: ${path.relative(repoRoot, src)} → ${path.relative(repoRoot, dest)}`);
  } catch (err) {
    console.error(`✗ Failed to copy ${src} to ${dest}:`, err.message);
    throw err;
  }
}

async function copyDirectory(srcDir, destDir, dirName) {
  try {
    await fs.access(srcDir);
    const files = await fs.readdir(srcDir);
    
    if (files.length === 0) {
      console.log(`⚠ No files found in ${dirName} directory`);
      return;
    }

    await ensureDir(destDir);
    
    for (const file of files) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      
      const stat = await fs.stat(srcFile);
      if (stat.isFile()) {
        await copyFile(srcFile, destFile);
      }
    }
    
    console.log(`✓ Completed ${dirName} directory (${files.length} files)`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`⚠ ${dirName} directory not found: ${srcDir}`);
    } else {
      console.error(`✗ Error processing ${dirName} directory:`, err.message);
      throw err;
    }
  }
}

async function prepareFavicons() {
  console.log('\n📱 Preparing favicons and brand assets...');
  
  // Try new organized location first
  const brandingDir = path.join(assetsDir, 'branding');
  let logoSrc;
  
  try {
    const brandingLogo = path.join(brandingDir, 'logo.png');
    await fs.access(brandingLogo);
    logoSrc = brandingLogo;
    console.log('✓ Using organized logo from branding/logo.png');
  } catch {
    // Fallback to old pattern for backwards compatibility
    try {
      const files = await fs.readdir(assetsDir);
      const logo = files.find(f => /^logo_.*\.png$/i.test(f));
      if (!logo) throw new Error('No logo found');
      logoSrc = path.join(assetsDir, logo);
      console.log(`✓ Using legacy logo: ${logo}`);
    } catch {
      console.error('✗ No logo found in attached_assets or attached_assets/branding');
      throw new Error('Logo file required for favicon generation');
    }
  }

  // Copy logo variants to public directory
  await copyFile(logoSrc, path.join(publicDir, 'apple-touch-icon.png'));
  await copyFile(logoSrc, path.join(publicDir, 'favicon-32x32.png'));
}

async function preparePortfolioAssets() {
  console.log('\n💼 Preparing portfolio assets...');
  
  const portfolioSrcDir = path.join(assetsDir, 'portfolio');
  const portfolioDestDir = path.join(publicDir, 'assets', 'portfolio');
  
  await copyDirectory(portfolioSrcDir, portfolioDestDir, 'portfolio');
}

async function prepareOtherAssets() {
  console.log('\n🖼️ Preparing other static assets...');
  
  // Hero images
  const heroSrcDir = path.join(assetsDir, 'hero');
  const heroDestDir = path.join(publicDir, 'assets', 'hero');
  await copyDirectory(heroSrcDir, heroDestDir, 'hero');
  
  // Content images  
  const contentSrcDir = path.join(assetsDir, 'content');
  const contentDestDir = path.join(publicDir, 'assets', 'content');
  await copyDirectory(contentSrcDir, contentDestDir, 'content');
  
  // Solution images
  const solutionsSrcDir = path.join(assetsDir, 'solutions');
  const solutionsDestDir = path.join(publicDir, 'assets', 'solutions');
  await copyDirectory(solutionsSrcDir, solutionsDestDir, 'solutions');
}

async function main() {
  console.log('🚀 Preparing all assets from attached_assets/ to client/public/...\n');
  
  try {
    // Ensure public directory exists
    await ensureDir(publicDir);
    await ensureDir(path.join(publicDir, 'assets'));
    
    // Prepare all asset types
    await prepareFavicons();
    await preparePortfolioAssets();
    await prepareOtherAssets();
    
    console.log('\n✅ Asset preparation completed successfully!');
    console.log('📁 Assets are now ready for development and build processes.');
    
  } catch (err) {
    console.error('\n❌ Asset preparation failed:', err.message);
    process.exit(1);
  }
}

// Self-executing when called directly
await main();

export { main as prepareAssets };
