import { promises as fs } from 'fs';
import path from 'path';

const repoRoot = path.resolve(process.cwd());
const assetsDir = path.join(repoRoot, 'attached_assets');
const publicDir = path.join(repoRoot, 'client', 'public');

async function ensureDir(dir) {
  try { await fs.mkdir(dir, { recursive: true }); } catch {}
}

async function getLogoPng() {
  // Try new organized location first
  const brandingLogo = path.join(assetsDir, 'branding', 'logo.png');
  try {
    await fs.access(brandingLogo);
    return brandingLogo;
  } catch {
    // Fallback to old pattern for backwards compatibility
    const files = await fs.readdir(assetsDir);
    const logo = files.find(f => /^logo_.*\.png$/i.test(f));
    if (!logo) throw new Error('No logo found in attached_assets or attached_assets/branding');
    return path.join(assetsDir, logo);
  }
}

async function copyIfMissing(src, dest) {
  try {
    await fs.copyFile(src, dest);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await ensureDir(path.dirname(dest));
      await fs.copyFile(src, dest);
    } else {
      throw err;
    }
  }
}

async function main() {
  await ensureDir(publicDir);
  const logoSrc = await getLogoPng();
  await copyIfMissing(logoSrc, path.join(publicDir, 'apple-touch-icon.png'));
  await copyIfMissing(logoSrc, path.join(publicDir, 'favicon-32x32.png'));
}

await main();
