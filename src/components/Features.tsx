import { MessageSquare, Zap, Target, Shield } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Sinceridade no Primeiro Contato",
      desc: "Não vendemos ilusões. Na sua consulta com advogado, você ouve a verdade sobre os riscos e as reais chances do seu processo.",
      benefit: "Decisões baseadas na realidade, sem falsas esperanças."
    },
    {
      icon: Zap,
      title: "Resposta Rápida e Objetiva",
      desc: "Sabemos que a sua urgência não pode esperar. Nosso time está pronto para agir e tirar suas dúvidas de forma direta.",
      benefit: "Você não fica no escuro esperando dias por um retorno."
    },
    {
      icon: Target,
      title: "Defesa Estratégica",
      desc: "Seja em Direito Criminal, Cível, Família ou Empresarial, montamos um plano de ação inteligente e focado na melhor solução prática.",
      benefit: "Menos desgaste emocional e mais eficiência na resolução."
    },
    {
      icon: Shield,
      title: "Segurança e Prioridade",
      desc: "Tratamos cada cliente como único. Seu problema recebe a atenção e a urgência que merece desde o primeiro contato.",
      benefit: "Você sente que finalmente tem alguém lutando por você."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutsRef = useRef<{ [key: number]: ReturnType<typeof setTimeout> }>({});

  // Title Reveal Effect (Scroll Scrubbing optimized with progress caching)
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const spans = title.querySelectorAll('span.reveal-char');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      spans.forEach((span) => {
        const el = span as HTMLElement;
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    let ticking = false;
    let raf = 0;
    let lastProgress = -1;

    const updateReveal = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startReveal = windowHeight * 0.88;
      const endReveal = windowHeight * 0.35;

      let progress = 0;
      if (rect.top <= startReveal) {
        progress = (startReveal - rect.top) / (startReveal - endReveal);
      }
      progress = Math.max(0, Math.min(1, progress));

      if (Math.abs(progress - lastProgress) < 0.002) {
        return;
      }
      lastProgress = progress;

      const totalSpans = spans.length;
      const stagger = 0.8 / Math.max(1, totalSpans);

      spans.forEach((span, index) => {
        const spanElement = span as HTMLElement;

        const letterStart = index * stagger;
        const letterEnd = letterStart + 0.2;

        let letterProgress = (progress - letterStart) / (letterEnd - letterStart);
        letterProgress = Math.max(0, Math.min(1, letterProgress));

        const easeOut = 1 - Math.pow(1 - letterProgress, 3);

        const opacity = easeOut;
        const translateY = 20 * (1 - easeOut);
        const scale = 0.95 + 0.05 * easeOut;

        spanElement.style.opacity = opacity.toString();
        spanElement.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        spanElement.style.transition = 'none';
      });
    };

    const onScroll = () => {
      if (!ticking) {
        raf = requestAnimationFrame(() => {
          updateReveal();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateReveal();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Cards Reveal Effect (One-shot reveal to prevent scroll flicker)
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -5% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        const delay = parseInt(target.dataset.delay || '0', 10);
        const index = parseInt(target.dataset.index || '0', 10);

        timeoutsRef.current[index] = setTimeout(() => {
          target.classList.add('is-visible');
        }, delay);

        observer.unobserve(target);
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  const renderRevealedText = () => {
    const fullText = [
      { text: "Por que devo escolher a ", highlight: false },
      { text: "Barreto Advocacia?", highlight: true }
    ];

    let highlightCharIndex = 0;
    const totalHighlightChars = fullText.filter((s) => s.highlight).reduce((acc, s) => acc + s.text.length, 0);

    return (
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-text-primary mb-4 sm:mb-6 tracking-tight reveal-title" ref={titleRef}>
        {fullText.map((segment, sIdx) => (
          <span key={sIdx} className={segment.highlight ? "font-serif font-bold" : ""}>
            {segment.text.split(' ').map((word, wIdx, arr) => {
              const isLast = wIdx === arr.length - 1;
              if (word === '') {
                if (!isLast) {
                  let extraStyle: React.CSSProperties = {};
                  if (segment.highlight) {
                    const hIndex = highlightCharIndex++;
                    extraStyle = {
                      background: 'var(--title-highlight-gradient)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      backgroundSize: `${totalHighlightChars * 100}% 100%`,
                      backgroundPosition: `${(hIndex / Math.max(1, totalHighlightChars - 1)) * 100}% center`
                    };
                  }
                  return <span key={wIdx} className="reveal-char" style={extraStyle}>&nbsp;</span>;
                }
                return null;
              }
              return (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, cIdx) => {
                    let extraStyle: React.CSSProperties = {};
                    if (segment.highlight) {
                      const hIndex = highlightCharIndex++;
                      extraStyle = {
                        background: 'var(--title-highlight-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        backgroundSize: `${totalHighlightChars * 100}% 100%`,
                        backgroundPosition: `${(hIndex / Math.max(1, totalHighlightChars - 1)) * 100}% center`
                      };
                    }
                    return (
                      <span key={cIdx} className="reveal-char" style={extraStyle}>
                        {char}
                      </span>
                    );
                  })}
                  {!isLast && (() => {
                    let extraStyle: React.CSSProperties = {};
                    if (segment.highlight) {
                      const hIndex = highlightCharIndex++;
                      extraStyle = {
                        background: 'var(--title-highlight-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        backgroundSize: `${totalHighlightChars * 100}% 100%`,
                        backgroundPosition: `${(hIndex / Math.max(1, totalHighlightChars - 1)) * 100}% center`
                      };
                    }
                    return (
                      <span className="reveal-char" style={extraStyle}>
                        &nbsp;
                      </span>
                    );
                  })()}
                </span>
              );
            })}
          </span>
        ))}
      </h2>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="section-with-depth letter-reveal-section relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 rounded-[24px] sm:rounded-[40px]"
    >
      <div className="text-center sticky-title-container reveal-container p-5 sm:p-8">
        {renderRevealedText()}
        <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light section-desc px-2 sm:px-4">
          Entenda por que nosso atendimento jurídico é a escolha certa para quem busca resultados e não tem tempo a perder.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 cards-container">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              data-delay={idx * 90}
              data-index={idx}
              className="reveal-card h-full"
            >
              <div className="liquid-glass-card hover-lift group flex flex-col p-2 md:p-3 h-full">
                <div className="card-content flex flex-col h-full w-full p-5 sm:p-6">
                  {/* Centered Icon inside flex container */}
                  <div className="liquid-glass-icon mx-auto mb-6 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-accent-primary drop-shadow-md" />
                  </div>

                  <h3 className="title-highlight text-lg sm:text-xl mb-3 tracking-wide relative z-10 text-center">{feat.title}</h3>
                  <p className="card-text text-sm leading-relaxed mb-6 flex-grow relative z-10 text-left">{feat.desc}</p>

                  {/* Benefit Section */}
                  <div className="pt-5 w-full mt-auto relative z-10 text-left">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-text-primary/30 via-text-primary/10 to-transparent"></div>
                    <span className="text-accent-primary text-[10px] font-bold uppercase tracking-widest block mb-1.5 opacity-90">O que você ganha:</span>
                    <span className="card-text text-sm block">{feat.benefit}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
