import { FileText, Coins, Users, PieChart, ScrollText } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function PracticeAreasFamilia() {
  const areas = [
    {
      icon: <FileText className="w-7 h-7 text-accent-primary" />,
      title: "Divórcio",
      desc: "Condução ágil e estratégica de divórcio consensual, litigioso, extrajudicial em cartório e dissolução de união estável."
    },
    {
      icon: <Coins className="w-7 h-7 text-accent-primary" />,
      title: "Pensão Alimentícia",
      desc: "Fixação justa, pedidos de revisão, execução de valores pendentes e exoneração de pensão com respaldo técnico."
    },
    {
      icon: <Users className="w-7 h-7 text-accent-primary" />,
      title: "Guarda e Visitas",
      desc: "Definição de guarda compartilhada ou unilateral, regulamentação de convivência e proteção do bem-estar dos filhos."
    },
    {
      icon: <PieChart className="w-7 h-7 text-accent-primary" />,
      title: "Partilha de Bens",
      desc: "Divisão patrimonial segura e equilibrada, proteção de acervo e prevenção contra fraudes ou ocultação de bens."
    },
    {
      icon: <ScrollText className="w-7 h-7 text-accent-primary" />,
      title: "Inventário e Herança",
      desc: "Abertura e condução de inventário judicial e extrajudicial em cartório, partilha de herança e planejamento sucessório."
    }
  ];

  return (
    <section className="relative px-4 sm:px-6 max-w-7xl mx-auto w-full py-20 sm:py-24 overflow-hidden rounded-[28px] sm:rounded-[48px] my-6">
      
      {/* Imagem de Fundo Fotográfica com Integração Atmosférica */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <picture className="contents">
          <img
            src="/assets/images/areas/familia-areas-bg.png"
            alt=""
            className="w-full h-full object-cover scale-105"
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
          />
        </picture>

        {/* Gradientes de Fusão Superior, Inferior e Central para evitar recortes bruscos */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-black/55 to-bg-primary"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-80"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-primary mb-4 drop-shadow-md">
            Áreas de <span className="title-highlight font-normal">Atuação</span>
          </h2>
          <p className="text-zinc-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 font-light leading-relaxed drop-shadow-sm">
            Atuação estratégica e humanizada nas principais demandas de Direito de Família e Sucessões em Brasília/DF.
          </p>
        </div>
        
        {/* Grid dos 5 Cards Exclusivos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16 max-w-6xl mx-auto">
          {areas.map((area, idx) => (
            <div 
              key={idx} 
              className={`hover-lift group flex flex-col items-center text-center p-2 rounded-[24px] ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none' : ''
              }`}
            >
              <div className="liquid-glass-card flex flex-col items-center text-center h-full w-full p-6 sm:p-8">
                <div className="liquid-glass-icon mb-6 group-hover:scale-110 transition-transform duration-500">
                  {area.icon}
                </div>
                <h3 className="title-highlight text-xl sm:text-2xl mb-3 relative z-10 font-serif">
                  {area.title}
                </h3>
                <p className="card-text text-xs sm:text-sm text-zinc-300 leading-relaxed relative z-10 font-normal">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA da Seção */}
        <div className="flex justify-center w-full px-4">
          <a 
            href="https://api.whatsapp.com/send/?phone=5561991591105&text=Ol%C3%A1%21+Gostaria+de+falar+com+um+advogado+especialista+em+Direito+de+Fam%C3%ADlia.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-6 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[0_0_25px_rgba(52,211,153,0.45)] text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-nowrap"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Falar com um advogado da área pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
