import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { trackMetaEvent } from '../lib/metaPixel';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  // Helper to determine if we should just use hash or full path
  const getHref = (hash: string) => {
    if (location.pathname === '/') {
      return hash;
    }
    return `/${hash}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="bg-bg-primary/80 backdrop-blur-md border border-text-primary/10 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg transition-colors duration-300 relative z-20">
          {/* Left Side: Logo + Theme Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
              <img src="/assets/branding/logo/logo-barreto.png" alt="Barreto Advocacia" className="h-[28px] sm:h-8 w-auto object-contain" loading="eager" decoding="async" />
            </Link>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-text-primary/10 text-text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* Center: Links (Desktop only) */}
          <div className="hidden lg:flex items-center gap-8 text-sm">
            <a href={getHref('#home')} className="text-text-muted hover:text-text-primary transition-colors">Home</a>
            <a href={getHref('#areas')} className="text-text-muted hover:text-text-primary transition-colors">Áreas de Atuação</a>
            <a href={getHref('#equipe')} className="text-text-muted hover:text-text-primary transition-colors">Nossa Equipe</a>
            <a href={getHref('#localizacao')} className="text-text-muted hover:text-text-primary transition-colors">Localização</a>
          </div>

          {/* Right Side: Actions & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a 
              href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMetaEvent('Contact', { contact_method: 'WhatsApp', content_name: 'Botão WhatsApp Header' })}
              className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2.5 hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(52,211,153,0.3)] whitespace-nowrap m-0 hidden sm:flex"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] shrink-0" />
              <span>WhatsApp</span>
            </a>
            
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-text-primary hover:bg-text-primary/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-bg-primary/95 backdrop-blur-xl border border-text-primary/10 rounded-2xl shadow-xl flex flex-col gap-2 z-10 lg:hidden shadow-black/20">
            <a 
              href={getHref('#home')} 
              onClick={closeMenu}
              className="p-3 text-text-primary hover:bg-text-primary/5 rounded-xl font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href={getHref('#areas')} 
              onClick={closeMenu}
              className="p-3 text-text-primary hover:bg-text-primary/5 rounded-xl font-medium transition-colors"
            >
              Áreas de Atuação
            </a>
            <a 
              href={getHref('#equipe')} 
              onClick={closeMenu}
              className="p-3 text-text-primary hover:bg-text-primary/5 rounded-xl font-medium transition-colors"
            >
              Nossa Equipe
            </a>
            <a 
              href={getHref('#localizacao')} 
              onClick={closeMenu}
              className="p-3 text-text-primary hover:bg-text-primary/5 rounded-xl font-medium transition-colors"
            >
              Localização
            </a>
            <div className="pt-2 border-t border-text-primary/10 mt-2">
              <a 
                href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  closeMenu();
                  trackMetaEvent('Contact', { contact_method: 'WhatsApp', content_name: 'Botão WhatsApp Menu Mobile' });
                }}
                className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 p-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity"
              >
                <WhatsAppIcon className="w-[18px] h-[18px] shrink-0" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
