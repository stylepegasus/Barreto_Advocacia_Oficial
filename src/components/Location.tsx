import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section className="cta-final-premium px-4 sm:px-6 max-w-7xl mx-auto w-full py-16 sm:py-20 rounded-[24px] sm:rounded-[40px] overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
          Conheça o Nosso <span className="text-accent-primary">Escritório</span>
        </h3>
        <p className="text-text-secondary text-base sm:text-lg mb-2 px-4">
          Localizado no coração de Brasília
        </p>
        <p className="text-text-primary font-medium mb-8 max-w-md px-4">
          Liberty Mall, Torre Lado B, Sala 715, Asa Norte, Brasília, DF
        </p>
        
        <p className="text-text-secondary mb-4 text-xs sm:text-sm uppercase tracking-wider font-bold">
          Clique aqui! Venha nos visitar.
        </p>
        <a 
          href="https://maps.app.goo.gl/4rF6fr6WMpUeTttx6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(52,211,153,0.4)] text-sm sm:text-base inline-flex"
        >
          <MapPin className="w-5 h-5" />
          Ver Localização no Google Maps
        </a>
      </div>
    </section>
  );
}
