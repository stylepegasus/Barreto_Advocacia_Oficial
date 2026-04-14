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
        title="Advogado em Brasília - Criminal, Cível e Trabalhista"
        description="Barreto Advocacia é um escritório em Brasília especializado em Direito Criminal, Cível e Trabalhista. Atendimento ágil, sigiloso e estratégico para defender seus direitos."
        canonical="https://advocaciabarreto.com/"
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
