import { ShieldCheck, Phone, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';
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
      if (window.innerWidth < 768) {
        return;
      }

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
      className="hero-section section-bg-fade-bottom relative pt-28 sm:pt-32 pb-24 sm:pb-28 min-h-[100vh] min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <div ref={mediaRef} className="hero-parallax-media" aria-hidden="true">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/images/hero/hero-background-mobile.webp" type="image/webp" />
          <img
            src="/assets/images/hero/hero-background-desktop.webp"
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1024"
            height="540"
          />
        </picture>
      </div>
      <div className="hero-overlay"></div>

      {/* Floating Glass Elements (Decorative, strictly absolute so they never affect flex centering) */}
      <div
        aria-hidden="true"
        className="apple-glass apple-glass-static apple-glass-floating apple-glass-refractive absolute top-1/4 left-[8%] w-24 h-32 rounded-2xl rotate-12 hidden xl:block z-10 pointer-events-none"
      ></div>
      <div
        aria-hidden="true"
        className="apple-glass apple-glass-static apple-glass-floating apple-glass-refractive absolute top-1/3 right-[8%] w-32 h-24 rounded-2xl -rotate-12 hidden xl:block z-10 pointer-events-none"
      ></div>

      {/* Standardized Section Container */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-20">
        {/* Main Content Card - Liquid Glass Refinado */}
        <div className="hero-content max-w-4xl w-full mx-auto liquid-glass-card apple-glass-refractive rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-14 lg:p-16 text-center shadow-2xl flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 ref={titleRef} className="hero-title parallax-title text-text-primary !mb-0" data-text="Barreto Advocacia">
              Barreto Advocacia
              <span className="sr-only"> - Advogado em Brasília</span>
            </h1>
            <h2 className="hero-subtitle !mb-0 max-w-2xl mx-auto">
              Compromisso com o Direito. Excelência no Resultado.
            </h2>
            <div className="hero-areas">
              CRIMINAL - CÍVEL - FAMÍLIA - EMPRESARIAL
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <a
              href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-glass apple-glass-whatsapp px-5 py-3.5 sm:px-8 sm:py-4 min-h-[48px] rounded-full font-bold flex items-center justify-center gap-2.5 mx-auto text-xs sm:text-sm md:text-base w-full sm:w-auto sm:whitespace-nowrap text-center leading-snug"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] shrink-0 text-emerald-300" />
              <span>AVALIAR MEU CASO PELO WHATSAPP</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-text-muted text-[11px] sm:text-xs md:text-sm font-medium text-center">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Resposta rápida. Sigilo absoluto garantido.</span>
            </div>

            {/* Contact Details */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-6 pt-2 text-xs sm:text-sm text-text-secondary">
              <a
                href="tel:+5561991591105"
                className="group relative flex items-center justify-center gap-2 py-1.5 min-h-[44px] hover:text-accent-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary shrink-0" />
                <span>+55 61 99159-1105</span>
              </a>
              <span className="hidden sm:block text-text-primary/20" aria-hidden="true">•</span>
              <a
                href="mailto:barretoadvocacia01@gmail.com"
                className="group relative flex items-center justify-center gap-2 py-1.5 min-h-[44px] hover:text-accent-primary transition-colors break-all sm:break-normal"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary shrink-0" />
                <span>barretoadvocacia01@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator positioned cleanly below the card */}
      <div className="scroll-indicator absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none" aria-hidden="true">
        <div className="scroll-indicator-icon"></div>
      </div>
    </section>
  );
}
