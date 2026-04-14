// src/lib/metaPixel.ts

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const initMetaPixel = () => {
  if (typeof window === 'undefined') return;

  const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

  if (!META_PIXEL_ID) {
    console.warn('[META_PIXEL] VITE_META_PIXEL_ID não definido. Pixel não será inicializado.');
    return;
  }

  if (window.fbq) {
    return; // Já inicializado
  }

  console.log('[META_PIXEL] Inicializando Pixel com ID:', META_PIXEL_ID);

  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s);
    }
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq && window.fbq('init', META_PIXEL_ID);
  window.fbq && window.fbq('track', 'PageView');
};

export const trackMetaEvent = (
  eventName: string,
  params?: Record<string, any>,
  eventId?: string
) => {
  if (typeof window === 'undefined' || !window.fbq) return;

  if (eventId) {
    // Quarto parâmetro é eventID para deduplicação com Conversions API
    if (params) {
      (window.fbq as any)('track', eventName, params, { eventID: eventId });
    } else {
      (window.fbq as any)('track', eventName, {}, { eventID: eventId });
    }
  } else if (params) {
    window.fbq('track', eventName, params);
  } else {
    window.fbq('track', eventName);
  }
};
