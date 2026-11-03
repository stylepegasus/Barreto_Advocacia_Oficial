import { ShieldCheck, Scale, HeartHandshake, FileText, Users, Coins, PieChart } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function HeroFamilia() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    const parallaxTitle = titleRef.current;

    if (!heroSection || !parallaxTitle) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;

      parallaxTitle.style.setProperty('--mouse-x', `${x}px`);
      parallaxTitle.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseLeave = () => {
      parallaxTitle.style.setProperty('--mouse-x', '0px');
      parallaxTitle.style.setProperty('--mouse-y', '0px');
    };

    let animationFrameId: number;
    let ticking = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleScroll = () => {
      if (window.innerWidth < 768) return;

      if (!reduceMotion && mediaRef.current && !ticking) {
        animationFrameId = requestAnimationFrame(() => {
          const offset = window.scrollY * 0.14;
          if (mediaRef.current) {
            mediaRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.1)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section relative pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-[100vh] min-h-[100svh] flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Imagem de fundo com WebP otimizado e efeito parallax */}
      <div ref={mediaRef} className="hero-parallax-media absolute inset-0 z-0" aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/images/hero/familia-hero-mobile.webp" type="image/webp" />
          <source media="(min-width: 769px)" srcSet="/assets/images/hero/familia-hero-desktop.webp" type="image/webp" />
          <img
            src="/assets/images/hero/familia-hero-desktop.png"
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1672"
            height="941"
          />
        </picture>
      </div>

      {/* Overlay escuro gradiente suave para destacar o ambiente com luz quente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40 z-1 pointer-events-none"></div>

      {/* Elementos decorativos flutuantes em vidro (estritamente absolutos) */}
      <div
        aria-hidden="true"
        className="apple-glass apple-glass-static apple-glass-floating apple-glass-refractive absolute top-1/4 left-[8%] w-28 h-36 rounded-3xl rotate-12 hidden xl:block z-10 pointer-events-none"
      ></div>
      <div
        aria-hidden="true"
        className="apple-glass apple-glass-static apple-glass-floating apple-glass-refractive absolute top-1/3 right-[8%] w-36 h-28 rounded-3xl -rotate-12 hidden xl:block z-10 pointer-events-none"
      ></div>

      {/* Container padronizado */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-20">
        {/* Card Principal - Liquid Glass Reforçado */}
        <div className="hero-content max-w-4xl w-full mx-auto liquid-glass-card apple-glass-refractive rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 md:p-14 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col items-center gap-6 sm:gap-8">
          {/* Badges Focados em Família com Apple Liquid Glass */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent-primary">
            <span className="apple-glass apple-glass-static flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full">
              <Scale className="w-3.5 h-3.5 shrink-0" /> +10 Anos de Experiência
            </span>
            <span className="apple-glass apple-glass-static flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full">
              <HeartHandshake className="w-3.5 h-3.5 shrink-0" /> +1.200 Casos Resolvidos
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            {/* H1 com Parallax suave e tipografia nítida */}
            <h1
              ref={titleRef}
              className="hero-title parallax-title text-text-primary text-2xl sm:text-4xl md:text-5xl lg:text-6xl !mb-0 font-bold tracking-tight drop-shadow-lg"
            >
              Barreto Advocacia <span className="title-highlight font-light">/ Família</span>
            </h1>

            {/* Linha de Apoio (H2) Persuasiva e Curta */}
            <h2 className="text-xs sm:text-base md:text-lg lg:text-xl text-zinc-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
              Defesa estratégica e sigilosa em Direito de Família em Brasília/DF, com atuação em divórcio, guarda, pensão alimentícia, partilha de bens e inventário, buscando conduzir cada etapa com clareza, técnica e menor desgaste possível.
            </h2>
          </div>

          {/* Lista de Atuações com Ícones Semânticos e Acabamento Apple Liquid Glass */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full max-w-2xl mx-auto text-left">
            <div className="apple-glass apple-glass-static rounded-2xl flex items-center gap-3 p-3.5 min-h-[48px] min-w-0 text-zinc-100 text-xs sm:text-sm md:text-base font-medium">
              <FileText className="w-5 h-5 text-accent-primary shrink-0" />
              <span className="min-w-0">Divórcio (Consensual e Litigioso)</span>
            </div>
            <div className="apple-glass apple-glass-static rounded-2xl flex items-center gap-3 p-3.5 min-h-[48px] min-w-0 text-zinc-100 text-xs sm:text-sm md:text-base font-medium">
              <Users className="w-5 h-5 text-accent-primary shrink-0" />
              <span className="min-w-0">Guarda e Regulamentação de Visitas</span>
            </div>
            <div className="apple-glass apple-glass-static rounded-2xl flex items-center gap-3 p-3.5 min-h-[48px] min-w-0 text-zinc-100 text-xs sm:text-sm md:text-base font-medium">
              <Coins className="w-5 h-5 text-accent-primary shrink-0" />
              <span className="min-w-0">Pensão Alimentícia (Fixação e Revisão)</span>
            </div>
            <div className="apple-glass apple-glass-static rounded-2xl flex items-center gap-3 p-3.5 min-h-[48px] min-w-0 text-zinc-100 text-xs sm:text-sm md:text-base font-medium">
              <PieChart className="w-5 h-5 text-accent-primary shrink-0" />
              <span className="min-w-0">Partilha de Bens Justa</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 w-full border-t border-white/10 pt-6 sm:pt-8">
            <a
              href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+a+p%C3%A1gina+de+voc%C3%AAs+no+Google+e+preciso+de+um+advogado+de+fam%C3%ADlia.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-glass apple-glass-whatsapp px-5 py-3.5 sm:px-10 sm:py-4 min-h-[48px] rounded-full font-bold flex items-center justify-center gap-2.5 sm:gap-3 mx-auto text-xs sm:text-base w-full sm:w-auto text-center leading-snug"
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-emerald-300" />
              <span>FALAR COM UM ESPECIALISTA AGORA</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <div className="flex items-center justify-center gap-2 text-zinc-300 text-xs sm:text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atendimento 100% sigiloso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
