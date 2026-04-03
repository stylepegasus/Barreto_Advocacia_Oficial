import { Moon, Sun } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../contexts/ThemeContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-bg-primary/50 backdrop-blur-md border border-text-primary/10 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg transition-colors duration-300">
          {/* Left Side: Logo + Theme Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/branding/logo/logo-barreto.png" alt="Barreto Advocacia" className="h-[28px] sm:h-8 w-auto object-contain" loading="eager" decoding="async" />
            </div>
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
            <a href="#home" className="text-accent-primary hover:text-text-primary transition-colors">Home</a>
            <a href="#areas" className="text-text-muted hover:text-text-primary transition-colors">Áreas de Atuação</a>
            <a href="#equipe" className="text-text-muted hover:text-text-primary transition-colors">Nossa Equipe</a>
            <a href="#localizacao" className="text-text-muted hover:text-text-primary transition-colors">Localização</a>
          </div>

          {/* Right Side: Actions */}
          <div className="flex items-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-4 sm:px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2.5 hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(52,211,153,0.3)] whitespace-nowrap m-0"
            >
              <WhatsAppIcon className="w-[18px] h-[18px] shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
