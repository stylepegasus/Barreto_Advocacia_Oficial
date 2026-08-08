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
  "description": "Escritório especializado em Direito de Família em Brasília/DF: divórcio consensual e litigioso, guarda de filhos, partilha de bens, inventário e pensão alimentícia.",
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
    "Partilha de Bens",
    "Inventário",
    "Pensão Alimentícia",
    "União Estável"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Áreas de Atuação em Direito de Família",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Divórcio" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Guarda de Filhos" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventário e Herança" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Partilha de Bens" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pensão Alimentícia" } }
    ]
  },
  "parentOrganization": {
    "@type": "LegalService",
    "name": "Barreto Advocacia",
    "url": "https://www.advocaciabarreto.com"
  }
};

export function FamiliaPage() {
  return (
    <main className="flex flex-col relative bg-bg-primary min-h-screen">
      <SEO
        title="Advocacia Familiar | Divórcio, Guarda e Herança"
        description="Especialistas em Direito de Família em Brasília/DF. Divórcio consensual ou litigioso, guarda de filhos, partilha de bens e inventário. Consulta humanizada. Ligue agora."
        canonical="/familia"
        schema={familiaSchema}
      />

      {/* Header Fixo Minimalista */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo linkando para Home */}
          <Link to="/" className="flex items-center gap-2 liquid-glass-nav p-2 sm:px-3 rounded-2xl shadow-lg hover:border-accent-primary/40 transition-all">
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

      {/* 1. Hero Content */}
      <HeroFamilia />

      {/* 2. Áreas de Atuação Exclusivas de Família (Cards Empilhados com Desempilhamento Lateral) */}
      <PracticeAreasFamilia />

      {/* 3. Por que escolher a Barreto Advocacia */}
      <WhyChooseBarretoFamilia />

      {/* 4. Opções de Reunião: Presencial e Online */}
      <MeetingsFamilia />

      {/* 5. Seção de Equipe (Dr. Gilmar e Dra. Danielle em destaque) */}
      <TeamFamilia />

      {/* 6. 10 Anos de Experiência */}
      <Experience10YearsFamilia />

      {/* 7. Testemunhos de Clientes */}
      <Testimonials />

      {/* 8. Conheça o Nosso Escritório / Localização */}
      <Location />

      {/* 9. Mapa Interativo do Google Maps */}
      <MapEmbed />

      {/* 10. Rodapé Institucional */}
      <Footer />
    </main>
  );
}
