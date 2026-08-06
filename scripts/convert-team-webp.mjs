import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/assets/images/team';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.match(/\.(png|jpe?g)$/i)) {
    const inputPath = path.join(dir, file);
    const basename = path.basename(file, path.extname(file));
    const webpPath = path.join(dir, `${basename}.webp`);

    if (!fs.existsSync(webpPath)) {
      sharp(inputPath).webp({ quality: 80 }).toFile(webpPath);
      console.log(`Converted ${file} to WebP`);
    }
  }
}
