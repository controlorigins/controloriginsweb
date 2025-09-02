import { promises as fs } from 'fs';
import path from 'path';

const repoRoot = path.resolve(process.cwd());
const assetsDir = path.join(repoRoot, 'attached_assets');
const srcDirs = [
  path.join(repoRoot, 'client', 'src'),
  path.join(repoRoot, 'client', 'index.html'),
];

async function listFilesRecursive(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map(async (dirent) => {
      const res = path.resolve(dir, dirent.name);
      if (dirent.isDirectory()) return listFilesRecursive(res);
      return res;
    })
  );
  return files.flat();
}

async function getAllAssetFiles() {
  const files = await listFilesRecursive(assetsDir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const relativePath = path.relative(assetsDir, file);
    const isImageFile = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.avif'].includes(ext);
    
    // Exclude files in the main organized directories (keep them safe from pruning)
    const isInProtectedDir = relativePath.startsWith('branding\\') || 
                            relativePath.startsWith('branding/') ||
                            relativePath.startsWith('hero\\') || 
                            relativePath.startsWith('hero/') ||
                            relativePath.startsWith('content\\') || 
                            relativePath.startsWith('content/') ||
                            relativePath.startsWith('solutions\\') || 
                            relativePath.startsWith('solutions/');
    
    return isImageFile && !isInProtectedDir;
  });
}

async function collectReferencedAssetNames() {
  const referenced = new Set();
  const scanPaths = [];
  for (const p of srcDirs) {
    try {
      const stat = await fs.stat(p);
      if (stat.isDirectory()) {
        scanPaths.push(...(await listFilesRecursive(p)));
      } else if (stat.isFile()) {
        scanPaths.push(p);
      }
    } catch {}
  }

  // Updated regex to handle nested paths like @assets/branding/logo.png
  const assetImportRegex = /@assets\/([^"'\)\s>]+)\b/g;

  for (const file of scanPaths) {
    const ext = path.extname(file).toLowerCase();
    if (!['.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.md'].includes(ext)) continue;
    try {
      const content = await fs.readFile(file, 'utf8');
      let match;
      while ((match = assetImportRegex.exec(content)) !== null) {
        referenced.add(match[1]);
      }
    } catch {}
  }
  return referenced;
}

async function pruneAssets() {
  try {
    const referenced = await collectReferencedAssetNames();
    const allAssetFiles = await getAllAssetFiles();

    const toDelete = allAssetFiles.filter((fullPath) => {
      const relativePath = path.relative(assetsDir, fullPath);
      const normalizedPath = relativePath.replace(/\\/g, '/'); // Normalize for cross-platform
      return !referenced.has(normalizedPath);
    });

    for (const fullPath of toDelete) {
      try {
        await fs.unlink(fullPath);
        const relativePath = path.relative(assetsDir, fullPath);
        console.log(`Removed unused asset: ${relativePath}`);
      } catch (err) {
        const relativePath = path.relative(assetsDir, fullPath);
        console.warn(`Failed to remove ${relativePath}: ${err.message}`);
      }
    }

    console.log(`Pruned ${toDelete.length} unused asset(s).`);
    console.log('Note: Assets in branding/, hero/, content/, and solutions/ folders are protected from pruning.');
  } catch (err) {
    console.error('Asset prune failed:', err);
    process.exit(1);
  }
}

await pruneAssets();
