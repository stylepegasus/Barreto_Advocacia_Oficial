import { FileText, Coins, Users, PieChart, ScrollText } from 'lucide-react';
import { useRef, useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function PracticeAreasFamilia() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative px-4 sm:px-6 max-w-7xl mx-auto w-full py-16 sm:py-24 my-4 overflow-hidden">
      
      {/* 1 & 2. Cabeçalho da Seção (Título e Subtítulo) */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-primary mb-4 drop-shadow-md">
          Áreas de <span className="title-highlight font-normal">Atuação</span>
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 font-light leading-relaxed drop-shadow-sm">
          Atuação estratégica e humanizada nas principais demandas de Direito de Família e Sucessões em Brasília/DF.
        </p>
      </div>

      {/* 3. Imagem em Destaque com Fade Out Suave Integrado */}
      <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16 px-2 sm:px-4">
        <div className="absolute inset-0 bg-accent-primary/10 rounded-full blur-3xl -z-10 scale-95 pointer-events-none"></div>

        <div 
          className="relative overflow-hidden rounded-3xl"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 92% 85% at 50% 50%, black 55%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 92% 85% at 50% 50%, black 55%, transparent 100%)'
          }}
        >
          <img
            src="/assets/images/areas/familia-areas-bg.png"
            alt="Atuação em Direito de Família e Sucessões"
            className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-cover sm:object-contain mx-auto block"
            loading="lazy"
            decoding="async"
            width="1280"
            height="720"
          />

          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-bg-primary via-bg-primary/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-bg-primary via-bg-primary/40 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-bg-primary via-bg-primary/40 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {/* 4. Sequência com Visual de Cards Empilhados e Desempilhamento ao Arrastar */}
      <div className="relative max-w-6xl mx-auto mb-12 sm:mb-16">
        {/* Vinhetas laterais para dissolução contínua sem cortes secos */}
        <div className="absolute top-0 right-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-bg-primary to-transparent z-30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-bg-primary to-transparent z-30 pointer-events-none"></div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex -space-x-3 sm:-space-x-6 md:-space-x-8 overflow-x-auto pb-8 pt-4 px-4 sm:px-8 scroll-smooth snap-x snap-mandatory ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {areas.map((area, idx) => (
            <div 
              key={idx} 
              style={{ zIndex: 10 + idx }}
              className="w-[82vw] sm:w-[360px] md:w-[380px] shrink-0 snap-start transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:z-40 focus-within:z-40 p-1"
            >
              <div className="liquid-glass-card flex flex-col items-center text-center h-full w-full p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20">
                <div className="liquid-glass-icon mb-6 transition-transform duration-500 group-hover:scale-110">
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
      </div>

      {/* 5. CTA Final da Seção */}
      <div className="flex justify-center w-full px-4 relative z-10">
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
    </section>
  );
}
