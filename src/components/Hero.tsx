import { ShieldCheck, Phone, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { CopyText } from './CopyText';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    const parallaxTitle = titleRef.current;

    if (!heroSection || !parallaxTitle) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Only run on desktop
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
      
      const x = (e.clientX - window.innerWidth / 2) / 20; // Sensibilidade
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
      const scrollY = window.scrollY;
      parallaxTitle.style.setProperty('--scroll-y', `${scrollY}px`);

      if (!reduceMotion && mediaRef.current && !ticking) {
        animationFrameId = requestAnimationFrame(() => {
          const intensity = window.innerWidth < 768 ? 0.08 : 0.16;
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
    
    // Initial setup call
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
    <section ref={heroRef} className="hero-section section-bg-fade-bottom relative pt-32 pb-20 px-6 min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div ref={mediaRef} className="hero-parallax-media" aria-hidden="true"></div>
      <div className="hero-overlay"></div>

      {/* Floating Glass Elements (Decorative) */}
      <div className="absolute top-1/4 left-1/4 w-24 h-32 bg-text-primary/5 backdrop-blur-xl border border-text-primary/10 rounded-2xl rotate-12 hidden lg:block shadow-2xl z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-24 bg-text-primary/5 backdrop-blur-xl border border-text-primary/10 rounded-2xl -rotate-12 hidden lg:block shadow-2xl z-10"></div>

      {/* Main Content Card */}
      <div className="hero-content relative z-20 max-w-4xl w-full bg-text-primary/5 backdrop-blur-xl border border-text-primary/10 rounded-3xl p-5 sm:p-8 md:p-16 text-center shadow-2xl">
        <h1 ref={titleRef} className="hero-title parallax-title text-text-primary" data-text="Barreto Advocacia">
          Barreto Advocacia
          <span className="sr-only"> - Advogado em Brasília</span>
        </h1>
        <h2 className="hero-subtitle">
          Compromisso com o Direito. Excelência no Resultado.
        </h2>
        <div className="hero-areas mb-8 md:mb-10">
          Criminal - Civil - Família - Trabalhista
        </div>
        
        <div className="flex flex-col items-center gap-4 w-full">
          <a 
            href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-4 py-3 sm:px-8 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2.5 mx-auto hover:scale-105 transition-transform shadow-[0_0_20px_rgba(52,211,153,0.4)] text-[11px] sm:text-sm md:text-base w-full sm:w-auto whitespace-nowrap"
          >
            <WhatsAppIcon className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] shrink-0" />
            <span>AVALIAR MEU CASO PELO WHATSAPP</span>
          </a>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-text-muted text-[11px] sm:text-xs md:text-sm font-medium text-center">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
            <span>Resposta rápida. Sigilo absoluto garantido.</span>
          </div>

          {/* Contact Details */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-6 mt-4 text-xs sm:text-sm text-text-secondary">
            <a 
              href="tel:+5561991591105" 
              className="group relative flex items-center gap-2 hover:text-accent-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary" />
              <span>+55 61 99159-1105</span>
            </a>
            <span className="hidden sm:block text-text-primary/20">•</span>
            <a 
              href="mailto:barretoadvocacia01@gmail.com" 
              className="group relative flex items-center gap-2 hover:text-accent-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary" />
              <span>barretoadvocacia01@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="scroll-indicator-icon"></div>
      </div>
    </section>
  );
}
