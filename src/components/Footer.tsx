import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { trackMetaEvent } from '../lib/metaPixel';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Helper to determine if we should just use hash or full path for anchor links
  const getHref = (hash: string) => {
    if (location.pathname === '/') {
      return hash;
    }
    return `/${hash}`;
  };

  return (
    <footer className="py-8 sm:py-12 border-t border-text-primary/10 bg-text-primary/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="liquid-glass-card rounded-[24px] sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 shadow-2xl">

          {/* Logo & About */}
          <div className="flex flex-col items-start lg:col-span-1 min-w-0">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="min-h-[44px] flex items-center">
                <picture>
                  <source srcSet="/assets/branding/logo/logo-footer.webp" type="image/webp" />
                  <img
                    src="/assets/branding/logo/logo-footer.png"
                    alt="Logotipo da Advocacia Barreto"
                    className="h-10 md:h-12 w-10 md:w-12 object-contain aspect-square"
                    loading="lazy"
                    width="48"
                    height="48"
                  />
                </picture>
              </Link>
            </div>
            <p className="text-text-secondary text-sm text-left">
              Defendendo seus direitos com excelência, ética e dedicação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="min-w-0">
            <h3 className="text-text-primary font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href={getHref('#home')} className="hover:text-accent-primary transition-colors">Home</a></li>
              <li><a href={getHref('#areas')} className="hover:text-accent-primary transition-colors">Áreas de Atuação</a></li>
              <li><a href={getHref('#equipe')} className="hover:text-accent-primary transition-colors">Nossa Equipe</a></li>
              <li><a href={getHref('#localizacao')} className="hover:text-accent-primary transition-colors">Localização</a></li>
              <li><span className="text-text-muted/60 font-medium cursor-not-allowed">Estudos e Mapas Mentais (em breve)</span></li>
            </ul>
          </div>

          {/* Institucional (Legal Links) */}
          <div className="min-w-0">
            <h3 className="text-text-primary font-semibold mb-6">Institucional</h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link to="/termos-de-uso" className="hover:text-accent-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-accent-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/politica-de-cookies" className="hover:text-accent-primary transition-colors">Política de Cookies</Link></li>
              <li><Link to="/aviso-legal" className="hover:text-accent-primary transition-colors">Aviso Legal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="text-text-primary font-semibold mb-6">Contato</h3>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <a
                  href="tel:+5561991591105"
                  onClick={() => trackMetaEvent('Contact', { contact_method: 'Phone', content_name: 'Link Telefone Footer' })}
                  className="group relative flex items-center gap-2 hover:text-accent-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-primary shrink-0" />
                  <span>+55 61 99159-1105</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:barretoadvocacia01@gmail.com"
                  onClick={() => trackMetaEvent('Contact', { contact_method: 'Email', content_name: 'Link Email Footer' })}
                  className="group relative flex items-center gap-2 hover:text-accent-primary transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-accent-primary shrink-0" />
                  <span>barretoadvocacia01@gmail.com</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/people/Barreto-Advocacia/61567819823685/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Barreto Advocacia"
                className="apple-glass apple-glass-adaptive w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-text-primary hover:text-accent-primary"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/barretoadv.esp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Barreto Advocacia"
                className="apple-glass apple-glass-adaptive w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-text-primary hover:text-accent-primary"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/luis-goncalves336/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Luis Gonçalves"
                className="apple-glass apple-glass-adaptive w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-text-primary hover:text-accent-primary"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Legal e Desenvolvedor */}
        <div className="text-center pt-4 border-t border-text-primary/5">
          <p className="text-xs text-text-muted leading-relaxed">
            Site desenvolvido por Luis Gonçalves. © {currentYear} PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA. Todos os direitos reservados.
            <br className="hidden sm:block" /> Conteúdo e dados protegidos em conformidade com a LGPD e normas de propriedade intelectual.
          </p>
        </div>

      </div>
    </footer>
  );
}
