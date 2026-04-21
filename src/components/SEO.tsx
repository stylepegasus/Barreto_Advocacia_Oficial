import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://www.advocaciabarreto.com';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

function getCanonicalUrl(canonical?: string) {
  const url = new URL(canonical || '/', SITE_URL);
  url.protocol = 'https:';
  url.host = 'www.advocaciabarreto.com';
  url.hash = '';
  url.search = '';
  return url.toString();
}

export function SEO({ title, description, canonical }: SEOProps) {
  const fullTitle = `${title} | Barreto Advocacia`;
  const url = getCanonicalUrl(canonical);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Barreto Advocacia" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
