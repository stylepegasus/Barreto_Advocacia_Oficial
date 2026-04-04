import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initMetaPixel, trackMetaEvent } from '../lib/metaPixel';

export function MetaPixelRouterListener() {
  const location = useLocation();

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    // Disparar PageView e ViewContent a cada mudança de rota (SPA)
    const path = location.pathname + location.search;
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      trackMetaEvent('ViewContent', {
        content_name: path,
        content_category: 'page',
      });
    }
  }, [location]);

  return null;
}
