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

  const id = typeof GA_MEASUREMENT_ID === 'string' ? GA_MEASUREMENT_ID.trim() : '';
  if (!id || !/^G-[A-Z0-9]+$/i.test(id)) {
    return;
  }

  if (window.gtag) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  }
  window.gtag = gtag as any;

  window.gtag('js', new Date());
  window.gtag('config', id, { send_page_view: false });

  const loadScript = () => {
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(loadScript, { timeout: 2500 });
  } else {
    setTimeout(loadScript, 1200);
  }
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
