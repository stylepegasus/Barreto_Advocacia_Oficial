import { Globe, Instagram, ArrowLeft, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { SEO } from '../components/SEO';
import { trackMetaEvent } from '../lib/metaPixel';

export function AntonioRomanoPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full min-h-screen py-12 px-4 flex flex-col justify-center items-center relative z-10 overflow-x-hidden">
      <SEO
        title="Dr. Antônio A. Romano | Partner Manager - Barreto Advocacia"
        description="Conectando o escritório a parcerias estratégicas de alto valor com visão consultiva, executiva e focada em expansão."
        canonical="/antonio-romano"
      />

      {/* Botão de Voltar Discreto (estilo glass, com animação) */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 px-4 py-2 rounded-full border border-text-primary/10 bg-bg-secondary/40 backdrop-blur-md text-text-secondary hover:text-accent-primary transition-all duration-300 text-xs font-semibold flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 animate-fade-in-up-romano z-20"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Ir para o Site Oficial</span>
      </Link>

      <div className="w-full max-w-md mt-12 relative animate-fade-in-up-romano delay-100">
        {/* Glow de Fundo Decorativo para dar profundidade premium */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary/20 to-accent-primary/10 rounded-[32px] blur-xl opacity-40 pointer-events-none"></div>

        <div className="liquid-glass-card overflow-hidden border border-text-primary/10 bg-bg-secondary/40 backdrop-blur-md rounded-[32px] shadow-2xl relative z-10">
          {/* Capa de Fundo com Imagem Otimizada */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden">
            <img 
              src="/assets/images/hero/hero-background-desktop.webp" 
              alt="Sala de Reuniões da Barreto Advocacia" 
              className="absolute inset-0 w-full h-full object-cover object-[center_35%] transition-transform duration-10000 hover:scale-105"
              loading="eager"
              decoding="async"
            />
            {/* Overlay Escuro e Gradiente de Fusão Inferior */}
            <div className="absolute inset-0 bg-black/45 z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-secondary via-bg-secondary/50 to-transparent z-15"></div>
            
            {/* Logo da Marca Discreto na Capa */}
            <div className="absolute top-4 left-4 z-20">
              <img 
                src="/assets/branding/logo/logo-barreto.png" 
                alt="Barreto Advocacia" 
                className="h-5.5 w-auto object-contain brightness-0 invert opacity-70" 
              />
            </div>
          </div>

          {/* Foto de Perfil (Sobreposta) */}
          <div className="relative -mt-16 flex justify-center z-20 animate-fade-in-up-romano delay-200">
            <div className="relative group">
              <img 
                src="/assets/images/team/dr-antonio-a-romano-team.webp" 
                alt="Dr. Antônio A. Romano" 
                className="w-32 h-32 rounded-full object-cover border-4 border-accent-primary bg-bg-secondary shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-accent-primary/80"
              />
              <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Informações Principais */}
          <div className="px-6 pt-4 pb-6 text-center z-20 relative">
            <div className="animate-fade-in-up-romano delay-200">
              <h1 className="text-2xl font-bold font-serif text-text-primary tracking-tight">
                Dr. Antônio A. Romano
              </h1>
              <p className="text-sm text-accent-primary font-semibold mt-1 px-2">
                Partner Manager na Advocacia Barreto
              </p>
              <p className="text-xs text-text-secondary mt-2 max-w-sm mx-auto leading-relaxed">
                Conectando o escritório a parcerias estratégicas de alto valor com visão consultiva, postura firme e foco em expansão de negócios.
              </p>
            </div>

            {/* Número de Telefone Clicável */}
            <div className="mt-3.5 animate-fade-in-up-romano delay-300">
              <a 
                href="tel:+5527988881800"
                onClick={() => trackMetaEvent('Contact', { contact_method: 'Phone', content_name: 'Telefone Dr Antonio Romano Page' })}
                className="inline-flex items-center gap-2 text-xs text-accent-primary hover:text-accent-primary/80 transition-all duration-300 font-semibold bg-accent-primary/10 hover:bg-accent-primary/15 px-4.5 py-2 rounded-full border border-accent-primary/20 backdrop-blur-md hover:scale-105 active:scale-95 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+55 27 98888-1800</span>
              </a>
            </div>

            {/* CTAs Principais (Subiram na Hierarquia) */}
            <div className="mt-6 space-y-3.5 animate-fade-in-up-romano delay-300">
              {/* Botão WhatsApp */}
              <a 
                href="https://wa.me/5527988881800"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMetaEvent('Contact', { contact_method: 'WhatsApp', content_name: 'WhatsApp Dr Antonio Romano Page' })}
                className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 py-3.5 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(52,211,153,0.25)] hover:shadow-[0_6px_24px_rgba(52,211,153,0.35)] text-sm whitespace-nowrap cursor-pointer text-center"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Falar com o Dr. Antônio no WhatsApp</span>
              </a>

              {/* Botão Salvar Contato */}
              <a 
                href="/assets/contacts/dr-antonio-romano.vcf"
                download="dr-antonio-romano.vcf"
                onClick={() => trackMetaEvent('Contact', { contact_method: 'vCard', content_name: 'vCard Dr Antonio Romano Page' })}
                className="w-full bg-text-primary/5 hover:bg-text-primary/10 border border-text-primary/20 text-text-primary py-3.5 rounded-full font-bold flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm cursor-pointer backdrop-blur-md"
              >
                <span className="text-base shrink-0">👤</span>
                <span>Salvar contato</span>
              </a>
            </div>

            {/* Cards Liquid Glass (Habilidades / Atuação) */}
            <div className="mt-8 space-y-4 text-left animate-fade-in-up-romano delay-400">
              {/* Card 1 */}
              <div className="liquid-glass-card p-0.5 border border-text-primary/5 shadow-sm hover:scale-[1.01] hover:border-accent-primary/20 transition-all duration-300">
                <div className="card-content p-4 text-center">
                  <h4 className="title-highlight text-sm sm:text-base mb-1">Partner Manager</h4>
                  <p className="card-text text-[11px] sm:text-xs opacity-90">
                    Atuação estratégica em negociação e gestão de relacionamentos de alto valor.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="liquid-glass-card p-0.5 border border-text-primary/5 shadow-sm hover:scale-[1.01] hover:border-accent-primary/20 transition-all duration-300">
                <div className="card-content p-4 text-center">
                  <h4 className="title-highlight text-sm sm:text-base mb-1">Parcerias de Alto Valor</h4>
                  <p className="card-text text-[11px] sm:text-xs opacity-90">
                    Desenvolvimento de conexões institucionais e alianças de mercado relevantes.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="liquid-glass-card p-0.5 border border-text-primary/5 shadow-sm hover:scale-[1.01] hover:border-accent-primary/20 transition-all duration-300">
                <div className="card-content p-4 text-center">
                  <h4 className="title-highlight text-sm sm:text-base mb-1">Visão Executiva</h4>
                  <p className="card-text text-[11px] sm:text-xs opacity-90">
                    Estratégias voltadas a resultado, estruturação de contas e abertura de frentes.
                  </p>
                </div>
              </div>
            </div>

            {/* Seção de Links Institucionais Mais Visíveis */}
            <div className="mt-8 pt-6 border-t border-text-primary/10 text-left animate-fade-in-up-romano delay-400">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4 text-center">Atuação & Presença Digital</h4>
              <div className="space-y-3">
                {/* Link Site */}
                <a 
                  href="https://advocaciabarreto.com"
                  className="flex items-center justify-between p-4 rounded-2xl border border-accent-primary/20 bg-accent-primary/5 hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300 group hover:scale-[1.01] active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">Escritório Barreto Advocacia</p>
                      <p className="text-[10px] sm:text-[11px] text-text-secondary">Conheça o site oficial e nossa atuação institucional</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>

                {/* Link Instagram */}
                <a 
                  href="https://instagram.com/barretoadv.esp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl border border-text-primary/10 bg-bg-secondary/40 hover:bg-bg-secondary/80 hover:border-text-primary/20 transition-all duration-300 group hover:scale-[1.01] active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-text-primary/5 flex items-center justify-center text-text-secondary group-hover:scale-110 transition-transform duration-300">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">Siga no Instagram</p>
                      <p className="text-[10px] sm:text-[11px] text-text-secondary">Acompanhe nossa atuação diária e novidades</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Rodapé Oficial Conforme LGPD e Alinhamento do Site */}
      <div className="text-center mt-10 max-w-sm px-4 animate-fade-in-up-romano delay-400">
        <p className="text-[10px] text-text-muted leading-relaxed">
          Site desenvolvido por Luis Gonçalves.
          <br />
          © {currentYear} PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA. Todos os direitos reservados.
          <br />
          Conteúdo e dados protegidos em conformidade com a LGPD e normas de propriedade intelectual.
        </p>
      </div>
    </div>
  );
}
