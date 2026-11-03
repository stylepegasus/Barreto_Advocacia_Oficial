import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { HeroFamilia } from '../components/HeroFamilia';
import { PracticeAreasFamilia } from '../components/PracticeAreasFamilia';
import { WhyChooseBarretoFamilia } from '../components/WhyChooseBarretoFamilia';
import { MeetingsFamilia } from '../components/MeetingsFamilia';
import { TeamFamilia } from '../components/TeamFamilia';
import { Experience10YearsFamilia } from '../components/Experience10YearsFamilia';
import { Testimonials } from '../components/Testimonials';
import { Location } from '../components/Location';
import { MapEmbed } from '../components/MapEmbed';
import { Footer } from '../components/Footer';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

const familiaSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Barreto Advocacia — Direito de Família",
  "description": "Atuação em divórcio, guarda, pensão alimentícia, partilha de bens e inventário em Brasília/DF. Atendimento humanizado, técnico e sigiloso.",
  "url": "https://www.advocaciabarreto.com/familia",
  "telephone": "+5561991591105",
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
  },
  "serviceType": [
    "Divórcio Consensual",
    "Divórcio Litigioso",
    "Guarda de Filhos",
    "Pensão Alimentícia",
    "Partilha de Bens",
    "Inventário",
    "União Estável"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Áreas de Atuação em Direito de Família",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Divórcio" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Guarda e Visitas" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pensão Alimentícia" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Partilha de Bens" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventário e Herança" } }
    ]
  },
  "parentOrganization": {
    "@type": "LegalService",
    "name": "Barreto Advocacia",
    "url": "https://www.advocaciabarreto.com"
  }
};

export function FamiliaPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let rafId = 0;

    const updateScroll = () => {
      const next = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== next ? next : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="flex flex-col relative bg-bg-primary min-h-screen">
      <SEO
        title="Advogado de Família em Brasília | Divórcio, Guarda e Pensão | Barreto Advocacia"
        description="Atuação em divórcio, guarda, pensão alimentícia, partilha de bens e inventário em Brasília/DF. Atendimento humanizado, técnico e sigiloso."
        ogTitle="Advogado de Família em Brasília | Divórcio, Guarda e Pensão | Barreto Advocacia"
        ogDescription="Defesa estratégica em Direito de Família em Brasília/DF: divórcio, guarda, pensão alimentícia, partilha e inventário."
        twitterTitle="Advogado de Família em Brasília | Divórcio, Guarda e Pensão | Barreto Advocacia"
        twitterDescription="Atuação técnica e sigilosa em Direito de Família em Brasília/DF: divórcio, guarda, pensão alimentícia, partilha e inventário."
        canonical="/familia"
        schema={familiaSchema}
      />

      {/* Header Fixo Minimalista com Apple Liquid Glass */}
      <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo linkando para Home */}
          <Link
            to="/"
            aria-label="Voltar para a página inicial da Barreto Advocacia"
            className={`apple-glass apple-glass-nav apple-glass-refractive flex items-center justify-center gap-2 px-3.5 py-2 min-h-[44px] min-w-[44px] rounded-full shrink-0 ${
              isScrolled ? 'is-scrolled' : ''
            }`}
          >
            <div
              className="pointer-events-none absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
              aria-hidden="true"
            />
            <picture>
              <source srcSet="/assets/branding/logo/logo-barreto.webp" type="image/webp" />
              <img
                src="/assets/branding/logo/logo-barreto.png"
                alt="Logotipo da Advocacia Barreto"
                className="h-[26px] w-[26px] sm:h-[30px] sm:w-[30px] aspect-square object-contain shrink-0 block"
                loading="eager"
                decoding="async"
                width="30"
                height="30"
              />
            </picture>
          </Link>

          {/* Botão WhatsApp Fixo */}
          <a
            href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+Google+e+gostaria+de+falar+sobre+um+caso+de+fam%C3%ADlia.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-glass apple-glass-whatsapp px-4 py-2.5 sm:px-5 sm:py-2.5 min-h-[44px] rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-emerald-300" />
            <span className="hidden sm:inline">Falar com Advogado</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 pb-16 sm:pb-24">
        {/* 1. Hero Content */}
        <HeroFamilia />

        {/* 2. Áreas de Atuação Exclusivas de Família (Carrossel com Navegação Apple Glass) */}
        <PracticeAreasFamilia />

        {/* 3. Por que escolher a Barreto Advocacia */}
        <WhyChooseBarretoFamilia />

        {/* 4. Opções de Reunião: Presencial e Online */}
        <MeetingsFamilia />

        {/* 5. Seção de Equipe */}
        <TeamFamilia />

        {/* 6. 10 Anos de Experiência */}
        <Experience10YearsFamilia />

        {/* 7. Testemunhos de Clientes */}
        <Testimonials />

        {/* 8. Conheça o Nosso Escritório / Localização */}
        <Location />

        {/* 9. Mapa Interativo do Google Maps */}
        <MapEmbed />
      </div>

      {/* 10. Rodapé Institucional */}
      <Footer />
    </main>
  );
}
