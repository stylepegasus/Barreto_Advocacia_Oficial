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
      desc: "Seja com um advogado criminal, cível ou trabalhista, montamos um plano de ação inteligente e focado na melhor solução prática.",
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
  const timeoutsRef = useRef<{[key: number]: NodeJS.Timeout}>({});

  // Title Reveal Effect (Scroll Scrubbing)
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const spans = title.querySelectorAll('span.reveal-char');
    let ticking = false;
    let raf: number;

    const updateReveal = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Define the scroll window for the reveal effect
      const startReveal = windowHeight * 0.85; // Start when section is 85% down the viewport
      const endReveal = windowHeight * 0.25;   // Finish when section is 25% down the viewport
      
      let progress = 0;
      if (rect.top <= startReveal) {
        progress = (startReveal - rect.top) / (startReveal - endReveal);
      }
      progress = Math.max(0, Math.min(1, progress));

      const totalSpans = spans.length;
      const stagger = 0.8 / Math.max(1, totalSpans); // 80% of the scroll is used for staggering

      spans.forEach((span, index) => {
        const spanElement = span as HTMLElement;
        
        const letterStart = index * stagger;
        const letterEnd = letterStart + 0.2; // 20% duration for each letter
        
        let letterProgress = (progress - letterStart) / (letterEnd - letterStart);
        letterProgress = Math.max(0, Math.min(1, letterProgress));
        
        // Ease-out cubic for smoother letter animation
        const easeOut = 1 - Math.pow(1 - letterProgress, 3);

        const opacity = easeOut;
        const translateY = 24 * (1 - easeOut);
        const scale = 0.95 + 0.05 * easeOut;

        spanElement.style.opacity = opacity.toString();
        spanElement.style.transform = `translateY(${translateY}px) scale(${scale})`;
        spanElement.style.transition = 'none'; // Disable CSS transitions for scrubbing
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
    updateReveal(); // Initial call

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Cards Reveal Effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -20% 0px'
    };

    const revealCards = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const delay = parseInt(target.dataset.delay || '0');
        const index = parseInt(target.dataset.index || '0');

        if (entry.isIntersecting) {
          timeoutsRef.current[index] = setTimeout(() => {
            target.classList.add('is-visible');
          }, delay);
        } else {
          if (timeoutsRef.current[index]) {
            clearTimeout(timeoutsRef.current[index]);
          }
          target.classList.remove('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(revealCards, observerOptions);
    
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
      // Clear all timeouts on unmount
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  const renderRevealedText = () => {
    const fullText = [
      { text: "Por que devo escolher a ", highlight: false },
      { text: "Barreto Advocacia?", highlight: true }
    ];
    
    let charIndex = 0;
    let highlightCharIndex = 0;
    const totalHighlightChars = fullText.filter(s => s.highlight).reduce((acc, s) => acc + s.text.length, 0);
    
    return (
      <h3 className="text-3xl md:text-5xl font-serif font-bold text-text-primary mb-6 tracking-tight reveal-title" ref={titleRef}>
        {fullText.map((segment, sIdx) => (
          <span key={sIdx} className={segment.highlight ? "font-serif font-bold" : ""}>
            {segment.text.split(' ').map((word, wIdx, arr) => {
              const isLast = wIdx === arr.length - 1;
              if (word === '') {
                if (!isLast) {
                  const index = charIndex++;
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
                    const index = charIndex++;
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
                    const index = charIndex++;
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
      </h3>
    );
  };

  return (
    <section ref={sectionRef} className="section-with-depth letter-reveal-section relative px-4 sm:px-6 max-w-7xl mx-auto w-full py-16 sm:py-20 rounded-[24px] sm:rounded-[40px]">
      <div className="text-center sticky-title-container reveal-container p-6 sm:p-8">
        {renderRevealedText()}
        <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light section-desc px-4">
          Entenda por que nosso atendimento jurídico é a escolha certa para quem busca resultados e não tem tempo a perder.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10 cards-container">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div 
              key={idx} 
              ref={el => {
                cardsRef.current[idx] = el;
              }}
              data-delay={idx * 200 + 400}
              data-index={idx}
              className="reveal-card"
            >
              <div className="liquid-glass-card hover-lift group flex flex-col items-start text-left p-2 md:p-3 h-full">
                <div className="card-content flex flex-col h-full w-full items-start text-left">
                  {/* Liquid Glass Icon Container */}
                  <div className="liquid-glass-icon mb-8 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-accent-primary drop-shadow-md" />
                  </div>

                  <h4 className="title-highlight text-xl mb-4 tracking-wide relative z-10">{feat.title}</h4>
                  <p className="card-text text-sm leading-relaxed mb-8 flex-grow relative z-10">{feat.desc}</p>
                  
                  {/* Benefit Section */}
                  <div className="pt-6 w-full mt-auto relative z-10">
                    {/* Subtle gradient divider */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-text-primary/30 via-text-primary/10 to-transparent"></div>
                    <span className="text-accent-primary text-[10px] font-bold uppercase tracking-widest block mb-2 opacity-90">O que você ganha:</span>
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
