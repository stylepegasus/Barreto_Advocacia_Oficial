import { FileText, Coins, Users, PieChart, ScrollText, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function PracticeAreasFamilia() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRafRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    return () => {
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clampedIndex = Math.max(0, Math.min(areas.length - 1, index));
    const cards = container.children;
    const targetCard = cards[clampedIndex] as HTMLElement | undefined;
    if (targetCard) {
      const isMobile = window.innerWidth < 640;
      const targetLeft = isMobile
        ? targetCard.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2
        : targetCard.offsetLeft - 16;

      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth',
      });
    }
    setActiveIndex(clampedIndex);
  };

  const handleScrollUpdate = () => {
    if (scrollRafRef.current) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = 0;
      const container = scrollRef.current;
      if (!container) return;

      const isMobile = window.innerWidth < 640;
      const referencePos = isMobile
        ? container.scrollLeft + container.clientWidth / 2
        : container.scrollLeft + container.clientWidth * 0.25;

      let closest = 0;
      let minDiff = Infinity;
      Array.from(container.children).forEach((child, idx) => {
        const el = child as HTMLElement;
        const cardCenter = isMobile ? el.offsetLeft + el.clientWidth / 2 : el.offsetLeft;
        const diff = Math.abs(cardCenter - referencePos);
        if (diff < minDiff) {
          minDiff = diff;
          closest = idx;
        }
      });

      setActiveIndex((prev) => (prev !== closest ? closest : prev));
    });
  };

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
    const walk = (x - startX) * 1.4;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollToCard(activeIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollToCard(activeIndex - 1);
    }
  };

  return (
    <section className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 overflow-hidden">
      {/* 1 & 2. Cabeçalho da Seção (Título e Subtítulo) */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-primary mb-4 drop-shadow-md">
          Áreas de <span className="title-highlight font-normal">Atuação</span>
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4 font-light leading-relaxed drop-shadow-sm">
          Atuação estratégica e humanizada nas principais demandas de Direito de Família e Sucessões em Brasília/DF.
        </p>
      </div>

      {/* 3. Imagem em Destaque com WebP otimizado e Fade Out Suave */}
      <div className="relative max-w-4xl mx-auto mb-10 sm:mb-12 overflow-hidden rounded-3xl">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 92% 85% at 50% 50%, black 55%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 92% 85% at 50% 50%, black 55%, transparent 100%)'
          }}
        >
          <picture>
            <source srcSet="/assets/images/areas/familia-areas-bg.webp" type="image/webp" />
            <img
              src="/assets/images/areas/familia-areas-bg.png"
              alt="Atuação em Direito de Família e Sucessões"
              className="w-full h-auto max-h-[360px] sm:max-h-[440px] object-cover sm:object-contain mx-auto block"
              loading="lazy"
              decoding="async"
              width="1672"
              height="941"
            />
          </picture>

          <div className="absolute inset-x-0 top-0 h-20 sm:h-28 bg-gradient-to-b from-bg-primary via-bg-primary/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-bg-primary via-bg-primary/40 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-bg-primary via-bg-primary/40 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Pills de navegação e setas discretas com Apple Liquid Glass */}
      <div className="w-full mb-6 sm:mb-8 flex items-center justify-between gap-3 min-w-0">
        <div
          className="flex items-center gap-2 overflow-x-auto py-1.5 px-1 min-w-0 flex-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {areas.map((area, idx) => (
            <button
              key={area.title}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-pressed={activeIndex === idx}
              className={`apple-glass apple-glass-adaptive px-3.5 sm:px-4 py-2 min-h-[44px] rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 cursor-pointer ${
                activeIndex === idx
                  ? 'border-accent-primary/60 text-accent-primary bg-white/15'
                  : 'text-text-primary/80 hover:text-text-primary'
              }`}
            >
              {area.title}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scrollToCard(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Área anterior"
            className="apple-glass apple-glass-adaptive w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-text-primary/85 hover:text-text-primary disabled:opacity-35 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollToCard(activeIndex + 1)}
            disabled={activeIndex === areas.length - 1}
            aria-label="Próxima área"
            className="apple-glass apple-glass-adaptive w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-text-primary/85 hover:text-text-primary disabled:opacity-35 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 4. Carrossel Fluido com Scroll Snap e Espaçamento Regular (Vidro Secundário) */}
      <div className="relative w-full mb-10 sm:mb-14">
        <div
          ref={scrollRef}
          tabIndex={0}
          role="region"
          aria-label="Carrossel de áreas de atuação em Direito de Família"
          onKeyDown={handleKeyDown}
          onScroll={handleScrollUpdate}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 sm:px-4 scroll-smooth snap-x snap-mandatory touch-pan-x scroll-pl-2 sm:scroll-pl-4 rounded-3xl focus-visible:outline-2 focus-visible:outline-accent-primary ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-[350px] shrink-0 snap-center sm:snap-start transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="liquid-glass-card flex flex-col items-center text-center h-full w-full p-6 sm:p-8">
                <div className="liquid-glass-icon mx-auto mb-6 transition-transform duration-500 group-hover:scale-110">
                  {area.icon}
                </div>
                <h3 className="title-highlight text-xl sm:text-2xl mb-3 relative z-10 font-serif text-center">
                  {area.title}
                </h3>
                <p className="card-text text-xs sm:text-sm leading-relaxed relative z-10 font-normal text-center">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CTA Final da Seção */}
      <div className="flex justify-center w-full relative z-10">
        <a
          href="https://api.whatsapp.com/send/?phone=5561991591105&text=Ol%C3%A1%21+Gostaria+de+falar+com+um+advogado+especialista+em+Direito+de+Fam%C3%ADlia.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="apple-glass apple-glass-whatsapp px-5 sm:px-10 py-3.5 sm:py-4 min-h-[48px] rounded-full font-bold flex items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base w-full sm:w-auto sm:whitespace-nowrap text-center leading-snug"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0 text-emerald-300" />
          <span>Falar com um advogado da área pelo WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
