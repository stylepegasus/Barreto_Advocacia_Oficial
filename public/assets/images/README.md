# Organização de Imagens e Assets

Esta pasta foi estruturada para manter os assets visuais do projeto organizados e escaláveis.
Como estamos usando o Vite, os arquivos colocados na pasta `public` são servidos diretamente na raiz do site.

## Estrutura de Pastas

- `/assets/images/backgrounds/` - Imagens usadas como fundo de seções (ex: `hero-bg.jpg`).
- `/assets/images/cards/` - Imagens utilizadas dentro de cartões de conteúdo.
- `/assets/images/team/` - Fotos dos advogados e membros da equipe.
- `/assets/images/logos/` - Logotipos do escritório e de parceiros.
- `/assets/images/icons/` - Ícones customizados em SVG ou PNG.

## Como usar a imagem da Hero

1. Salve a imagem que você anexou no chat.
2. Renomeie o arquivo para `hero-bg.jpg`.
3. Coloque o arquivo dentro da pasta `/public/assets/images/backgrounds/`.

O componente `Hero.tsx` já está configurado para buscar a imagem exatamente neste caminho.
