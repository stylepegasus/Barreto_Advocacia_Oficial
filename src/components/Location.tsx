import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section className="cta-final-premium max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 rounded-[24px] sm:rounded-[40px] overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
          Conheça o Nosso <span className="text-accent-primary">Escritório</span>
        </h2>
        <p className="text-text-secondary text-base sm:text-lg mb-2 px-4">
          Localizado no coração de Brasília
        </p>
        <p className="text-text-primary font-medium mb-8 max-w-md mx-auto px-4">
          Liberty Mall, Torre Lado B, Sala 715, Asa Norte, Brasília, DF
        </p>

        <p className="text-text-secondary mb-4 text-xs sm:text-sm uppercase tracking-wider font-bold">
          Clique aqui! Venha nos visitar.
        </p>
        <a
          href="https://maps.app.goo.gl/4rF6fr6WMpUeTttx6"
          target="_blank"
          rel="noopener noreferrer"
          className="apple-glass apple-glass-whatsapp px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] rounded-full font-bold inline-flex items-center justify-center gap-2.5 text-sm sm:text-base text-center"
        >
          <MapPin className="w-5 h-5 shrink-0 text-emerald-300" />
          <span>Ver Localização no Google Maps</span>
        </a>
      </div>
    </section>
  );
}
