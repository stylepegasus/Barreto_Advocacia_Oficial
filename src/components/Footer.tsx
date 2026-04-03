import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    <footer className="px-4 sm:px-6 py-8 sm:py-12 border-t border-text-primary/10 bg-text-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-text-primary/5 backdrop-blur-md border border-text-primary/10 rounded-[24px] sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 shadow-lg">
          
          {/* Logo & About */}
          <div className="flex flex-col items-start lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/">
                <img 
                  src="/assets/branding/logo/logo-footer.png"
                  alt="Barreto Advocacia"
                  className="h-8 md:h-12 w-auto object-contain"
                  loading="lazy"
                />
              </Link>
            </div>
            <p className="text-text-secondary text-sm">
              Defendendo seus direitos com excelência, ética e dedicação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-text-primary font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href={getHref('#home')} className="hover:text-accent-primary transition-colors">Home</a></li>
              <li><a href={getHref('#areas')} className="hover:text-accent-primary transition-colors">Áreas de Atuação</a></li>
              <li><a href={getHref('#equipe')} className="hover:text-accent-primary transition-colors">Nossa Equipe</a></li>
              <li><a href={getHref('#localizacao')} className="hover:text-accent-primary transition-colors">Localização</a></li>
            </ul>
          </div>

          {/* Institucional (Legal Links) */}
          <div>
            <h4 className="text-text-primary font-semibold mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><Link to="/termos-de-uso" className="hover:text-accent-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-accent-primary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/politica-de-cookies" className="hover:text-accent-primary transition-colors">Política de Cookies</Link></li>
              <li><Link to="/aviso-legal" className="hover:text-accent-primary transition-colors">Aviso Legal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <a 
                  href="tel:+5561991591105" 
                  className="group relative flex items-center gap-2 hover:text-accent-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-primary" />
                  <span>+55 61 99159-1105</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:barretoadvocacia01@gmail.com" 
                  className="group relative flex items-center gap-2 hover:text-accent-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent-primary" />
                  <span>barretoadvocacia01@gmail.com</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/people/Barreto-Advocacia/61567819823685/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-text-primary/10 flex items-center justify-center text-text-primary hover:bg-accent-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/barretoadv.esp/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-text-primary/10 flex items-center justify-center text-text-primary hover:bg-accent-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/luis-goncalves336/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-text-primary/10 flex items-center justify-center text-text-primary hover:bg-accent-primary hover:text-white transition-colors">
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
