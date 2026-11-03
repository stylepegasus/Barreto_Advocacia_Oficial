// src/lib/metaPixel.ts

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const initMetaPixel = () => {
  if (typeof window === 'undefined') return;

  const rawId = import.meta.env.VITE_META_PIXEL_ID;
  const META_PIXEL_ID = typeof rawId === 'string' ? rawId.trim() : '';

  // Only initialize if a valid numeric Meta Pixel ID is configured
  if (!META_PIXEL_ID || !/^\d+$/.test(META_PIXEL_ID)) {
    return;
  }

  if (window.fbq) {
    return;
  }

  const loadPixel = () => {
    if (window.fbq) return;
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

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(loadPixel, { timeout: 2500 });
  } else {
    setTimeout(loadPixel, 1200);
  }
};

export const trackMetaEvent = (
  eventName: string,
  params?: Record<string, any>,
  eventId?: string
) => {
  if (typeof window === 'undefined' || !window.fbq) return;

  if (eventId) {
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
