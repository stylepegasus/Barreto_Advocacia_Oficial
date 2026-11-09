import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { trackMetaEvent } from '../lib/metaPixel';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    let ticking = false;
    let rafId = 0;

    const updateScroll = () => {
      const next = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== next ? next : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const getHref = (hash: string) => {
    if (location.pathname === '/') {
      return hash;
    }
    return `/${hash}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`apple-glass apple-glass-nav apple-glass-static rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 relative z-20 ${
            isScrolled ? 'is-scrolled' : ''
          }`}
        >
          {/* Subtle top specular light line */}
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent"
            aria-hidden="true"
          />

          {/* Left Side: Logo + Theme Toggle (flex-1 on lg for exact center alignment) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 lg:flex-1 min-w-0">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center justify-center min-h-[44px] min-w-[44px] shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2"
            >
              <picture>
                <source srcSet="/assets/branding/logo/logo-barreto.webp" type="image/webp" />
                <img
                  src="/assets/branding/logo/logo-barreto.png"
                  alt="Logotipo da Advocacia Barreto em Brasília"
                  className="h-[28px] w-[28px] sm:h-8 sm:w-8 aspect-square object-contain shrink-0 block"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="32"
                  height="32"
                />
              </picture>
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              className="apple-glass apple-glass-adaptive w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-text-primary shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* Center: Links (Desktop only) — Mathematically centered */}
          <div className="hidden lg:flex items-center justify-center gap-6 text-sm font-medium shrink-0">
            <a href={getHref('#home')} className="text-text-primary hover:text-accent-primary px-2 py-1.5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2">Home</a>
            <a href={getHref('#areas')} className="text-text-primary hover:text-accent-primary px-2 py-1.5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2">Áreas de Atuação</a>
            <a href={getHref('#equipe')} className="text-text-primary hover:text-accent-primary px-2 py-1.5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2">Nossa Equipe</a>
            <a href={getHref('#localizacao')} className="text-text-primary hover:text-accent-primary px-2 py-1.5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2">Localização</a>
          </div>

          {/* Right Side: Actions & Mobile Toggle (flex-1 justify-end on lg) */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-3 lg:flex-1 min-w-0">
            <a
              href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMetaEvent('Contact', { contact_method: 'WhatsApp', content_name: 'Botão WhatsApp Header' })}
              className="apple-glass apple-glass-whatsapp px-5 py-2.5 min-h-[44px] rounded-full font-semibold text-sm hidden sm:flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 m-0 focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] shrink-0 text-emerald-300" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="lg:hidden apple-glass apple-glass-adaptive w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-primary rounded-full shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu — Centered items, rounded-3xl */}
        {isOpen && (
          <div className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 mt-2.5 p-4 apple-glass apple-glass-nav-menu apple-glass-static rounded-3xl flex flex-col items-center text-center gap-1.5 z-30 lg:hidden">
            <a
              href={getHref('#home')}
              onClick={closeMenu}
              className="w-full px-4 py-3 min-h-[44px] flex items-center justify-center text-text-primary hover:bg-text-primary/10 rounded-2xl font-medium transition-colors"
            >
              Home
            </a>
            <a
              href={getHref('#areas')}
              onClick={closeMenu}
              className="w-full px-4 py-3 min-h-[44px] flex items-center justify-center text-text-primary hover:bg-text-primary/10 rounded-2xl font-medium transition-colors"
            >
              Áreas de Atuação
            </a>
            <a
              href={getHref('#equipe')}
              onClick={closeMenu}
              className="w-full px-4 py-3 min-h-[44px] flex items-center justify-center text-text-primary hover:bg-text-primary/10 rounded-2xl font-medium transition-colors"
            >
              Nossa Equipe
            </a>
            <a
              href={getHref('#localizacao')}
              onClick={closeMenu}
              className="w-full px-4 py-3 min-h-[44px] flex items-center justify-center text-text-primary hover:bg-text-primary/10 rounded-2xl font-medium transition-colors"
            >
              Localização
            </a>
            <div className="w-full pt-2 border-t border-text-primary/10 mt-1">
              <a
                href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  closeMenu();
                  trackMetaEvent('Contact', { contact_method: 'WhatsApp', content_name: 'Botão WhatsApp Menu Mobile' });
                }}
                className="w-full apple-glass apple-glass-whatsapp px-4 py-3 min-h-[44px] rounded-2xl font-semibold text-sm flex items-center justify-center gap-2.5"
              >
                <WhatsAppIcon className="w-[18px] h-[18px] shrink-0 text-emerald-300" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
