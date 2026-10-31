import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Meetings } from '../components/Meetings';
import { PracticeAreas } from '../components/PracticeAreas';
import { ExperienceTeam } from '../components/ExperienceTeam';
import { Testimonials } from '../components/Testimonials';
import { Location } from '../components/Location';
import { MapEmbed } from '../components/MapEmbed';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <main className="flex flex-col gap-24 pb-24">
      <SEO
        title="Barreto Advocacia | Advogado em Brasília - Criminal, Cível e Família"
        description="Escritório em Brasília com atuação em Direito Criminal, Cível, Família e Empresarial. Atendimento ágil, estratégico e sigiloso."
        ogTitle="Barreto Advocacia | Advogado em Brasília - Criminal, Cível e Família"
        ogDescription="Defesa estratégica e atendimento sigiloso em Direito Criminal, Cível, Família e Empresarial em Brasília/DF."
        twitterTitle="Barreto Advocacia | Advogado em Brasília - Criminal, Cível e Família"
        twitterDescription="Atendimento jurídico estratégico e sigiloso em Direito Criminal, Cível, Família e Empresarial em Brasília/DF."
        canonical="/"
      />
      <div id="home"><Hero /></div>
      <div id="diferenciais"><Features /></div>
      <div id="atendimento"><Meetings /></div>
      <div id="areas"><PracticeAreas /></div>
      <div id="equipe"><ExperienceTeam /></div>
      <div id="depoimentos"><Testimonials /></div>
      <div id="localizacao"><Location /></div>
      <MapEmbed />
    </main>
  );
}
