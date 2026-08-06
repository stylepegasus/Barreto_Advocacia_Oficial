import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const filesToConvert = [
  'public/assets/branding/logo/logo-barreto.png',
  'public/assets/branding/logo/logo-footer.png',
];

async function convertFiles() {
  for (const file of filesToConvert) {
    const originalPath = path.resolve(file);
    const dir = path.dirname(originalPath);
    const ext = path.extname(originalPath);
    const basename = path.basename(originalPath, ext);
    const webpPath = path.join(dir, `${basename}.webp`);

    if (fs.existsSync(originalPath)) {
      await sharp(originalPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      console.log(`Converted ${file} to WebP`);
    } else {
      console.log(`Skipped ${file} - not found`);
    }
  }
}

convertFiles().catch(console.error);
