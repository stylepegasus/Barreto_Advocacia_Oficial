import { Star, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Ivone Abreu",
      text: "Fui muito bem atendida. A equipe foi rápida e resolveu meu problema com clareza.",
    },
    {
      name: "Marcela Campos",
      text: "Profissionais excelentes. Me explicaram tudo sem termos difíceis e ganharam a causa.",
    },
    {
      name: "Elisa",
      text: "Recomendo. O atendimento pelo WhatsApp foi muito prático e direto ao ponto.",
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
      
      const startReveal = windowHeight * 0.85;
      const endReveal = windowHeight * 0.25;
      
      let progress = 0;
      if (rect.top <= startReveal) {
        progress = (startReveal - rect.top) / (startReveal - endReveal);
      }
      progress = Math.max(0, Math.min(1, progress));

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
        const translateY = 24 * (1 - easeOut);
        const scale = 0.95 + 0.05 * easeOut;

        spanElement.style.opacity = opacity.toString();
        spanElement.style.transform = `translateY(${translateY}px) scale(${scale})`;
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
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  const renderRevealedText = () => {
    const text = "Testemunhos";
    const totalHighlightChars = text.length;
    let highlightCharIndex = 0;
    
    return (
      <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight reveal-title" ref={titleRef}>
        <span className="inline-block whitespace-nowrap">
          {text.split('').map((char, cIdx) => {
            const hIndex = highlightCharIndex++;
            const extraStyle = {
              background: 'var(--title-highlight-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: `${totalHighlightChars * 100}% 100%`,
              backgroundPosition: `${(hIndex / Math.max(1, totalHighlightChars - 1)) * 100}% center`
            };
            return (
              <span key={cIdx} className="reveal-char" style={extraStyle}>
                {char}
              </span>
            );
          })}
        </span>
      </h3>
    );
  };

  return (
    <section ref={sectionRef} className="premium-section-subtle letter-reveal-section relative px-4 sm:px-6 max-w-7xl mx-auto w-full py-16 sm:py-20">
      <div className="text-center sticky-title-container reveal-container p-6 sm:p-8">
        {renderRevealedText()}
      </div>
      
      <div className="flex flex-col gap-6 sm:gap-8 relative z-10 cards-container max-w-3xl mx-auto">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            ref={el => cardsRef.current[idx] = el}
            data-delay={idx * 150 + 100}
            data-index={idx}
            className="reveal-card"
          >
            <div className="card-premium-glow testimonial-quote-bg p-2 md:p-3 text-center transition-all duration-500 hover:-translate-y-2 rounded-[24px]">
              <div className="card-content flex flex-col h-full w-full p-6 md:p-8">
                <div className="flex justify-center gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                  ))}
                </div>
                <p className="card-text text-lg md:text-xl mb-6 relative z-10 italic">"{t.text}"</p>
                <h5 className="title-highlight text-base relative z-10 font-bold">- {t.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col items-center justify-center mt-16 text-center relative z-10">
        <p className="text-text-secondary mb-4">Deixe sua avaliação no Google Maps</p>
        <a 
          href="https://search.google.com/local/writereview?placeid=ChIJORpFOFk7WpMR17lKbaOXouk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 border border-white/20 text-text-primary px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/20 transition-colors backdrop-blur-sm inline-flex"
        >
          <MapPin className="w-5 h-5 text-accent-primary" />
          Avaliar no Google Maps
        </a>
      </div>
    </section>
  );
}
