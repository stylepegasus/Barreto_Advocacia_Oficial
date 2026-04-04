import { WhatsAppIcon } from './WhatsAppIcon';
import { trackMetaEvent } from '../lib/metaPixel';

export function Meetings() {
  const handleLeadClick = (meetingType: string) => {
    const eventId = `lead-${Date.now()}`;
    
    // Pixel Event
    trackMetaEvent('Lead', {
      content_name: `Agendamento ${meetingType}`,
      content_category: 'lead',
    }, eventId);

    // CAPI Event
    fetch('/api/meta-conversions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: 'Lead',
        event_id: eventId,
        event_source_url: window.location.href,
        // E-mail e telefone virão pré-preenchidos se possível num chat bot
      }),
    }).catch(() => {});
  };
  return (
    <section className="liquid-glass-section px-4 sm:px-6 max-w-7xl mx-auto w-full py-16 sm:py-20 rounded-[24px] sm:rounded-[40px] overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Presencial */}
        <div 
          className="liquid-glass-card card-reuniao group rounded-[24px] min-h-[300px] sm:min-h-[350px] flex items-center p-0 hover:scale-[1.02] transition-transform duration-500"
          style={{ backgroundImage: "url('/assets/images/contact-options/reuniao-presencial.png')" }}
        >
          <div className="content relative z-[2] p-6 sm:p-8 md:p-12 w-full md:w-3/4 flex flex-col justify-center">
            <h4 className="title-highlight text-xl sm:text-2xl mb-2 sm:mb-3 text-white drop-shadow-sm">Reunião Presencial</h4>
            <p className="text-white/95 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed drop-shadow-sm font-medium">
              Atendimento direto e personalizado.<br />
              Ideal para casos complexos que exigem análise detalhada.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5561991591105&text=Ol%C3%A1%21+Vi+o+site+de+voc%C3%AAs+e+gostaria+de+agendar+uma+reuni%C3%A3o+presencial+com+um+advogado.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLeadClick('Reunião Presencial')}
              className="self-start px-5 sm:px-6 py-2 rounded-full border border-white/30 text-white text-xs sm:text-sm hover:bg-white/10 transition-colors backdrop-blur-sm inline-flex items-center gap-2.5"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" />
              <span>Clique aqui</span>
            </a>
          </div>
        </div>

        {/* Online */}
        <div 
          className="liquid-glass-card card-reuniao group rounded-[24px] min-h-[300px] sm:min-h-[350px] flex items-center p-0 hover:scale-[1.02] transition-transform duration-500"
          style={{ backgroundImage: "url('/assets/images/contact-options/reuniao-online.jpg')" }}
        >
          <div className="content relative z-[2] p-6 sm:p-8 md:p-12 w-full md:w-3/4 flex flex-col justify-center">
            <h4 className="title-highlight text-xl sm:text-2xl mb-2 sm:mb-3 text-white drop-shadow-sm">Reunião Online</h4>
            <p className="text-white/95 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed drop-shadow-sm font-medium">
              Consulta ágil pelo WhatsApp.<br />
              Resposta objetiva sobre seu caso em até 30 minutos.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+e+gostaria+de+marcar+uma+reuni%C3%A3o+online.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLeadClick('Reunião Online')}
              className="self-start px-5 sm:px-6 py-2 rounded-full border border-white/30 text-white text-xs sm:text-sm hover:bg-white/10 transition-colors backdrop-blur-sm inline-flex items-center gap-2.5"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" />
              <span>Clique aqui</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
