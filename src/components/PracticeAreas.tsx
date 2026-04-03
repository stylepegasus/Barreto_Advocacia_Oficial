import { Gavel, Scale, Briefcase, Users } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function PracticeAreas() {
  const areas = [
    {
      icon: <Gavel className="w-8 h-8 text-accent-primary" />,
      title: "CRIMINAL",
      desc: "Defesa estratégica em processos criminais e inquéritos."
    },
    {
      icon: <Scale className="w-8 h-8 text-accent-primary" />,
      title: "CÍVIL",
      desc: "Contratos, família, consumidor e responsabilidade civil."
    },
    {
      icon: <Users className="w-8 h-8 text-accent-primary" />,
      title: "FAMÍLIA",
      desc: "Divórcio, guarda, pensão e inventário."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-accent-primary" />,
      title: "TRABALHISTA",
      desc: "Demissão, direitos trabalhistas e negociações."
    }
  ];

  return (
    <section className="premium-section-subtle px-4 sm:px-6 max-w-7xl mx-auto w-full py-16 sm:py-20 rounded-[24px] sm:rounded-[40px] overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4">
            Áreas de <span className="text-accent-primary">Atuação</span>
          </h3>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
            Não abraçamos todas as causas. Somos especialistas em:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {areas.map((area, idx) => (
            <div key={idx} className="card-premium-glow hover-lift group flex flex-col items-center text-center p-2 md:p-3 rounded-[24px]">
              <div className="card-content flex flex-col items-center text-center h-full w-full p-6">
                <div className="liquid-glass-icon mb-6 group-hover:scale-110 transition-transform duration-500">
                  {area.icon}
                </div>
                <h4 className="title-highlight text-xl mb-4 relative z-10">{area.title}</h4>
                <p className="card-text text-sm leading-relaxed relative z-10">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full px-4">
          <a 
            href="https://api.whatsapp.com/send/?phone=5561991591105&text=Ol%C3%A1%21+Vi+as+%C3%A1reas+de+atua%C3%A7%C3%A3o+no+site+e+gostaria+de+falar+com+um+advogado+especialista.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-neutral-900 px-4 py-3 sm:px-8 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2.5 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(52,211,153,0.4)] text-[11px] sm:text-sm md:text-base w-full sm:w-auto whitespace-nowrap"
          >
            <WhatsAppIcon className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] shrink-0" />
            <span>Falar com um advogado da área pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
