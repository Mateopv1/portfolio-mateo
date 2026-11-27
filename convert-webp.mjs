import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function run() {
  const images = await walk(PUBLIC_DIR);

  for (const inputPath of images) {
    const parsed = path.parse(inputPath);
    const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);
    const isLogo = parsed.dir.includes('logos') || parsed.name.includes('logo');
    const maxWidth = isLogo ? 400 : 1200;

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log('Generado:', path.relative(process.cwd(), outputPath));
  }
}

run().catch((err) => {
  console.error('Error convirtiendo imágenes:', err);
  process.exit(1);
});