import { ShieldCheck, Scale, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function HeroFamilia() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[100vh] flex items-center justify-center overflow-hidden bg-bg-primary">
      
      {/* Imagem de fundo com responsividade */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <picture className="contents">
          <source media="(max-width: 768px)" srcSet="/assets/images/hero/familia-hero-mobile.png" />
          <img
            src="/assets/images/hero/familia-hero-desktop.png"
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            width="1920"
            height="1080"
          />
        </picture>
        {/* Overlay escuro para garantir legibilidade */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50 bg-gradient-to-t from-bg-primary/80 to-transparent"></div>
      </div>

      {/* Floating Glass Elements (Decorative) */}
      <div className="absolute top-1/4 left-[10%] w-32 h-40 bg-text-primary/10 backdrop-blur-3xl border border-white/10 rounded-3xl rotate-12 hidden lg:block shadow-2xl z-10"></div>
      <div className="absolute top-1/3 right-[10%] w-40 h-32 bg-text-primary/10 backdrop-blur-3xl border border-white/10 rounded-3xl -rotate-12 hidden lg:block shadow-2xl z-10"></div>

      {/* Main Content Card - Reforço do Liquid Glass */}
      <div className="relative z-20 max-w-4xl w-full bg-black/40 sm:bg-black/30 backdrop-blur-2xl border border-white/10 sm:border-white/20 rounded-[2rem] p-6 sm:p-10 md:p-14 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] shadow-inner shadow-white/5">
        
        {/* Badges Focados em Família */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent-primary">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-accent-primary/30">
            <Scale className="w-3.5 h-3.5" /> +10 Anos de Experiência
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-accent-primary/30 hidden sm:flex">
            <HeartHandshake className="w-3.5 h-3.5" /> +900 Casos Resolvidos
          </span>
        </div>

        {/* H1 Curto da Marca */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-md">
          Barreto Advocacia <span className="text-accent-primary font-light">/ Família</span>
        </h1>
        
        {/* Linha de Apoio (H2) */}
        <h2 className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed font-light drop-shadow-sm">
          Atendimento especializado e humanizado em Brasília/DF. 
          Protegendo seus direitos e o seu futuro com total sigilo.
        </h2>

        {/* Lista de Atuações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left">
          <div className="flex items-center gap-2.5 text-zinc-200 text-sm sm:text-base font-medium">
            <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" />
            Divórcio (Consensual e Litigioso)
          </div>
          <div className="flex items-center gap-2.5 text-zinc-200 text-sm sm:text-base font-medium">
            <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" />
            Guarda e Regulamentação de Visitas
          </div>
          <div className="flex items-center gap-2.5 text-zinc-200 text-sm sm:text-base font-medium">
            <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" />
            Pensão Alimentícia (Fixação e Revisão)
          </div>
          <div className="flex items-center gap-2.5 text-zinc-200 text-sm sm:text-base font-medium">
            <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" />
            Partilha de Bens Justa
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col items-center gap-4 w-full border-t border-white/10 pt-8 mt-2">
          <a 
            href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+a+p%C3%A1gina+de+voc%C3%AAs+no+Google+e+preciso+de+um+advogado+de+fam%C3%ADlia.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-6 py-3.5 sm:px-10 sm:py-5 rounded-full font-bold flex items-center justify-center gap-3 mx-auto hover:scale-105 transition-transform shadow-[0_0_25px_rgba(52,211,153,0.5)] text-sm sm:text-base w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span>FALAR COM UM ESPECIALISTA AGORA</span>
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-2">
            <div className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sigilo absoluto garantido no Liberty Mall</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
