// src/lib/ga.ts
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (typeof window === 'undefined') return;

  const id = GA_MEASUREMENT_ID;
  if (!id) {
    console.warn('[GA4] VITE_GA_MEASUREMENT_ID não definido. GA não será inicializado.');
    return;
  }

  if (window.gtag) {
    // Já inicializado
    return;
  }

  console.log('[GA4] Inicializando GA4 com ID:', id);

  // Carrega gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  }
  window.gtag = gtag as any;

  window.gtag('js', new Date());
  // send_page_view: false para SPA; page_view manual em cada rota
  window.gtag('config', id, { send_page_view: false });
};

export const trackPageView = (path: string) => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const trackGenerateLead = (leadSource: string) => {
  if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', 'generate_lead', {
    lead_source: leadSource,
    page_path: window.location.pathname,
  });
};
