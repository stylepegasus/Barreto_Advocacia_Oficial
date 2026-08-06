import { useState, useRef, useEffect } from 'react';

export function MapEmbed() {
  const [loadIframe, setLoadIframe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" } // Load early before user scrolls fully into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="map-section">
      <div className="map-container flex items-center justify-center bg-bg-secondary" ref={containerRef}>
        {!loadIframe ? (
          <div className="text-center p-8">
            <p className="text-text-secondary">Carregando mapa interativo...</p>
          </div>
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.298242410312!2d-47.8868435241372!3d-15.78686408485987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b5938451a39%3A0xe9a297a36d4ab9d7!2sBarreto%20Advocacia%20Especializada!5e0!3m2!1spt-BR!2sbr!4v1711920000000!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Barreto Advocacia"
            width="100%"
            height="100%"
          ></iframe>
        )}
      </div>
    </section>
  );
}
