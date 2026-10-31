import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://www.advocaciabarreto.com';
const DIST_DIR = path.resolve('dist');
const ROUTES = [
  'familia',
  'estudo',
  'termos-de-uso',
  'politica-de-privacidade',
  'politica-de-cookies',
  'aviso-legal',
  'antonio-romano',
];

const ROUTE_META = {
  familia: {
    title: 'Advogado de Família em Brasília | Divórcio, Guarda e Pensão | Barreto Advocacia',
    description:
      'Atuação em divórcio, guarda, pensão alimentícia, partilha de bens e inventário em Brasília/DF. Atendimento humanizado, técnico e sigiloso.',
    ogTitle: 'Advogado de Família em Brasília | Divórcio, Guarda e Pensão | Barreto Advocacia',
    ogDescription:
      'Defesa estratégica em Direito de Família em Brasília/DF: divórcio, guarda, pensão alimentícia, partilha e inventário.',
    twitterTitle: 'Advogado de Família em Brasília | Divórcio, Guarda e Pensão | Barreto Advocacia',
    twitterDescription:
      'Atuação técnica e sigilosa em Direito de Família em Brasília/DF: divórcio, guarda, pensão alimentícia, partilha e inventário.',
  },
};

const indexPath = path.join(DIST_DIR, 'index.html');
const indexHtml = await readFile(indexPath, 'utf8');

function routeHtml(route) {
  const canonicalUrl = `${SITE_URL}/${route}`;
  let html = indexHtml
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    );

  const meta = ROUTE_META[route];
  if (meta) {
    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
      .replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${meta.description}" />`,
      )
      .replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${meta.ogTitle}" />`,
      )
      .replace(
        /<meta property="og:description" content="[^"]*" \/>/,
        `<meta property="og:description" content="${meta.ogDescription}" />`,
      )
      .replace(
        /<meta name="twitter:title" content="[^"]*" \/>/,
        `<meta name="twitter:title" content="${meta.twitterTitle}" />`,
      )
      .replace(
        /<meta name="twitter:description" content="[^"]*" \/>/,
        `<meta name="twitter:description" content="${meta.twitterDescription}" />`,
      );
  }

  return html;
}

await Promise.all(
  ROUTES.map(async (route) => {
    const routeDir = path.join(DIST_DIR, route);
    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, 'index.html'), routeHtml(route));
  }),
);
