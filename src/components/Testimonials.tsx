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
  const timeoutsRef = useRef<{ [key: number]: ReturnType<typeof setTimeout> }>({});

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
    const text = "Testemunhos";
    const totalHighlightChars = text.length;
    let highlightCharIndex = 0;

    return (
      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-2 tracking-tight reveal-title" ref={titleRef}>
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
      </h2>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="premium-section-subtle letter-reveal-section relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16"
    >
      <div className="text-center sticky-title-container reveal-container p-6 sm:p-8">
        {renderRevealedText()}
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 relative z-10 cards-container max-w-3xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            data-delay={idx * 90}
            data-index={idx}
            className="reveal-card"
          >
            <div className="liquid-glass-card hover-lift testimonial-quote-bg p-2 md:p-3 text-center rounded-[24px]">
              <div className="card-content flex flex-col items-center h-full w-full p-6 md:p-8">
                <div className="flex justify-center gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                  ))}
                </div>
                <p className="card-text text-base sm:text-lg md:text-xl mb-6 relative z-10 italic">"{t.text}"</p>
                <h3 className="title-highlight text-base relative z-10 font-bold">- {t.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 text-center relative z-10">
        <p className="text-text-secondary mb-4">Deixe sua avaliação no Google Maps</p>
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJORpFOFk7WpMR17lKbaOXouk"
          target="_blank"
          rel="noopener noreferrer"
          className="apple-glass apple-glass-adaptive text-text-primary px-6 py-3 min-h-[44px] rounded-full font-medium inline-flex items-center justify-center gap-2"
        >
          <MapPin className="w-5 h-5 text-accent-primary shrink-0" />
          <span>Avaliar no Google Maps</span>
        </a>
      </div>
    </section>
  );
}
