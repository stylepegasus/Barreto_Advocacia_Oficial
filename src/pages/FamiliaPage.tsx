import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { HeroFamilia } from '../components/HeroFamilia';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export function FamiliaPage() {
  return (
    <main className="flex flex-col relative bg-bg-primary min-h-screen">
      <SEO
        title="Advocacia de Família e Divórcio em Brasília"
        description="Barreto Advocacia é especializada em Direito de Família, Divórcio, Guarda, Pensão e Partilha em Brasília/DF. +10 anos de experiência com atendimento sigiloso e humanizado."
        canonical="/familia"
      />

      {/* Header Fixo Minimalista */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo linkando para Home */}
          <Link to="/" className="flex items-center gap-2 bg-bg-primary/80 backdrop-blur-md p-2 rounded-xl shadow-sm border border-text-primary/10 hover:bg-bg-primary/90 transition-colors">
            <picture>
              <source srcSet="/assets/branding/logo/logo-barreto.webp" type="image/webp" />
              <img
                src="/assets/branding/logo/logo-barreto.png"
                alt="Logotipo da Advocacia Barreto"
                className="h-[24px] sm:h-[30px] w-auto object-contain"
                loading="eager"
                decoding="async"
                width="140"
                height="32"
              />
            </picture>
          </Link>

          {/* Botão WhatsApp Fixo */}
          <a
            href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+Google+e+gostaria+de+falar+sobre+um+caso+de+fam%C3%ADlia.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full font-bold text-[11px] sm:text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(52,211,153,0.3)]"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="hidden sm:inline">Falar com Advogado</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <HeroFamilia />
    </main>
  );
}
