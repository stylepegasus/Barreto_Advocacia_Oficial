import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://www.advocaciabarreto.com';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

function getCanonicalUrl(canonical?: string) {
  const url = new URL(canonical || '/', SITE_URL);
  url.protocol = 'https:';
  url.host = 'www.advocaciabarreto.com';
  url.hash = '';
  url.search = '';
  return url.toString();
}

export function SEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  const fullTitle = `${title} | Barreto Advocacia`;
  const url = getCanonicalUrl(canonical);
  const image = ogImage || `${SITE_URL}/assets/branding/logo/logo-barreto.png`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Barreto Advocacia",
    "legalName": "PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA",
    "url": "https://www.advocaciabarreto.com/",
    "telephone": "+5561991591105",
    "email": "barretoadvocacia01@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Complexo Empresarial Liberty Mall, Torre B, Sala 715, Asa Norte",
      "addressLocality": "Brasília",
      "addressRegion": "DF",
      "postalCode": "70712-903",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brasília"
    }
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Barreto Advocacia" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
