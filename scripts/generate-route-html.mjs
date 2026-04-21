import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://www.advocaciabarreto.com';
const DIST_DIR = path.resolve('dist');
const ROUTES = [
  'estudo',
  'termos-de-uso',
  'politica-de-privacidade',
  'politica-de-cookies',
  'aviso-legal',
];

const indexPath = path.join(DIST_DIR, 'index.html');
const indexHtml = await readFile(indexPath, 'utf8');

function routeHtml(route) {
  const canonicalUrl = `${SITE_URL}/${route}`;

  return indexHtml
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    );
}

await Promise.all(
  ROUTES.map(async (route) => {
    const routeDir = path.join(DIST_DIR, route);
    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, 'index.html'), routeHtml(route));
  }),
);
