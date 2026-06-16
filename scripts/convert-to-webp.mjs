import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/assets/images');

// Função recursiva para varrer diretórios
async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const outputName = entry.name.substring(0, entry.name.length - ext.length) + '.webp';
        const outputPath = path.join(dir, outputName);

        try {
          console.log(`Convertendo: ${fullPath} -> ${outputPath}`);
          
          let pipeline = sharp(fullPath);

          // Otimizações adicionais específicas para o hero background de celular que tem 1.8MB!
          if (entry.name === 'hero-background-mobile.png') {
            // Se for o background de celular, podemos redimensionar para uma largura máxima realista (ex: 800px)
            // já que a imagem original tem um peso absurdo de 1.8MB e provavelmente resolução exagerada.
            pipeline = pipeline.resize({ width: 800, withoutEnlargement: true });
          }

          await pipeline
            .webp({ quality: 82, effort: 6 })
            .toFile(outputPath);

          console.log(`✅ Sucesso: ${outputName}`);
          
          // Deletar a imagem antiga para não duplicar assets
          fs.unlinkSync(fullPath);
          console.log(`🗑️ Removida imagem original: ${entry.name}`);
        } catch (err) {
          console.error(`❌ Erro ao processar ${entry.name}:`, err.message);
        }
      }
    }
  }
}

console.log('Iniciando conversão de imagens para WebP...');
processDirectory(IMAGES_DIR)
  .then(() => console.log('🎉 Conversão concluída com sucesso!'))
  .catch(err => console.error('Erro na conversão:', err));
