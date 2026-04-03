import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-8 sm:py-12 border-t border-text-primary/10 bg-text-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-text-primary/5 backdrop-blur-md border border-text-primary/10 rounded-[24px] sm:rounded-3xl p-6 sm:p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 shadow-lg">
          
          {/* Logo & About */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/assets/branding/logo/logo-footer.png"
                alt="Barreto Advocacia"
                className="h-8 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-text-secondary text-sm">
              Defendendo seus direitos com excelência, ética e dedicação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#home" className="hover:text-accent-primary transition-colors">Home</a></li>
              <li><a href="#areas" className="hover:text-accent-primary transition-colors">Áreas de Atuação</a></li>
              <li><a href="#equipe" className="hover:text-accent-primary transition-colors">Nossa Equipe</a></li>
              <li><a href="#localizacao" className="hover:text-accent-primary transition-colors">Localização</a></li>
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
      </div>
    </footer>
  );
}
