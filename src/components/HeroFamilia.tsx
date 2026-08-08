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
      // Executa apenas em telas desktop com mouse
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
      
      const x = (e.clientX - window.innerWidth / 2) / 20;
      const y = (e.clientY - window.innerHeight / 2) / 20;

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

      const scrollY = window.scrollY;
      parallaxTitle.style.setProperty('--scroll-y', `${scrollY}px`);

      if (!reduceMotion && mediaRef.current && !ticking) {
        animationFrameId = requestAnimationFrame(() => {
          const intensity = 0.16;
          const offset = scrollY * intensity;
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
    <section ref={heroRef} className="hero-section relative pt-32 pb-20 px-6 min-h-[100vh] flex items-center justify-center overflow-hidden bg-bg-primary">
      
      {/* Imagem de fundo com responsividade e efeito parallax */}
      <div ref={mediaRef} className="hero-parallax-media absolute inset-0 z-0" aria-hidden="true">
        <picture className="contents">
          <source media="(max-width: 768px)" srcSet="/assets/images/hero/familia-hero-mobile.png" />
          <img
            src="/assets/images/hero/familia-hero-desktop.png"
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            width="1920"
            height="1080"
          />
        </picture>
      </div>

      {/* Overlay escuro gradiente suave para destacar o ambiente com luz quente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40 z-1 pointer-events-none"></div>

      {/* Elementos decorativos flutuantes em vidro */}
      <div className="absolute top-1/4 left-[10%] w-32 h-40 bg-text-primary/10 backdrop-blur-3xl border border-white/10 rounded-3xl rotate-12 hidden lg:block shadow-2xl z-10"></div>
      <div className="absolute top-1/3 right-[10%] w-40 h-32 bg-text-primary/10 backdrop-blur-3xl border border-white/10 rounded-3xl -rotate-12 hidden lg:block shadow-2xl z-10"></div>

      {/* Card Principal - Liquid Glass Reforçado */}
      <div className="hero-content relative z-20 max-w-4xl w-full bg-black/45 sm:bg-black/35 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 sm:p-10 md:p-14 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] shadow-inner shadow-white/10">
        
        {/* Badges Focados em Família */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent-primary">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-accent-primary/30">
            <Scale className="w-3.5 h-3.5" /> +10 Anos de Experiência
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-accent-primary/30 hidden sm:flex">
            <HeartHandshake className="w-3.5 h-3.5" /> +900 Casos Resolvidos
          </span>
        </div>

        {/* H1 com Parallax e Efeito Glow de Mouse */}
        <h1 
          ref={titleRef} 
          className="hero-title parallax-title text-text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold tracking-tight drop-shadow-lg" 
          data-text="Barreto Advocacia / Família"
        >
          Barreto Advocacia <span className="title-highlight font-light">/ Família</span>
        </h1>
        
        {/* Linha de Apoio (H2) Persuasiva e Curta */}
        <h2 className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto mb-8 leading-relaxed font-light drop-shadow-md">
          Defesa estratégica e sigilosa em Direito de Família em Brasília/DF, resolvendo seu divórcio, guarda e pensão com o mínimo de desgaste possível.
        </h2>

        {/* Lista de Atuações com Ícones Semânticos e Acabamento Liquid Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto mb-10 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md text-zinc-100 text-sm sm:text-base font-medium hover:border-accent-primary/40 hover:bg-white/[0.09] transition-all">
            <FileText className="w-5 h-5 text-accent-primary shrink-0" />
            <span>Divórcio (Consensual e Litigioso)</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md text-zinc-100 text-sm sm:text-base font-medium hover:border-accent-primary/40 hover:bg-white/[0.09] transition-all">
            <Users className="w-5 h-5 text-accent-primary shrink-0" />
            <span>Guarda e Regulamentação de Visitas</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md text-zinc-100 text-sm sm:text-base font-medium hover:border-accent-primary/40 hover:bg-white/[0.09] transition-all">
            <Coins className="w-5 h-5 text-accent-primary shrink-0" />
            <span>Pensão Alimentícia (Fixação e Revisão)</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md text-zinc-100 text-sm sm:text-base font-medium hover:border-accent-primary/40 hover:bg-white/[0.09] transition-all">
            <PieChart className="w-5 h-5 text-accent-primary shrink-0" />
            <span>Partilha de Bens Justa</span>
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col items-center gap-4 w-full border-t border-white/10 pt-8 mt-2">
          <a 
            href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+a+p%C3%A1gina+de+voc%C3%AAs+no+Google+e+preciso+de+um+advogado+de+fam%C3%ADlia.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-6 py-3.5 sm:px-10 sm:py-5 rounded-full font-bold flex items-center justify-center gap-3 mx-auto hover:scale-105 transition-transform shadow-[0_0_25px_rgba(52,211,153,0.5)] text-sm sm:text-base w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span>FALAR COM UM ESPECIALISTA AGORA</span>
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-2">
            <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sigilo absoluto garantido no Liberty Mall</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
