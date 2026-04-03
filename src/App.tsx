import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Meetings } from './components/Meetings';
import { PracticeAreas } from './components/PracticeAreas';
import { ExperienceTeam } from './components/ExperienceTeam';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { MapEmbed } from './components/MapEmbed';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-[128px]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-24 pb-24">
          <div id="home"><Hero /></div>
          <div id="diferenciais"><Features /></div>
          <div id="atendimento"><Meetings /></div>
          <div id="areas"><PracticeAreas /></div>
          <div id="equipe"><ExperienceTeam /></div>
          <div id="depoimentos"><Testimonials /></div>
          <div id="localizacao"><Location /></div>
          <MapEmbed />
        </main>
        <Footer />
      </div>
    </div>
  );
}
