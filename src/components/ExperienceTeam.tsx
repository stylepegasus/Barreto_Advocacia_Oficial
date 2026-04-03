import { useState } from 'react';
import { X } from 'lucide-react';

export function ExperienceTeam() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const team = [
    { 
      name: "Dr. Paulo Barreto", 
      role: "Fundador, Advogado Criminalista, Mestrando em Direito Processual Penal e Especialista em Lei de Drogas e Recursos.", 
      img: "/assets/images/team/dr-paulo-barreto-team.jpg",
      experience: "Com 10 anos de atuação na advocacia criminal, conduz defesas estratégicas em investigações, processos penais e casos de maior sensibilidade, sempre com análise técnica, postura firme e leitura realista de cada cenário.",
      education: "Mestrando em Direito Processual Penal, com especialização em Lei de Drogas e Recursos, reúne formação direcionada à advocacia criminal e atualização constante para atuação precisa em casos complexos.",
      cases: "Atuação em investigações criminais, processos penais, medidas urgentes e recursos, com foco em estratégia defensiva, proteção de direitos e acompanhamento técnico em todas as fases do caso."
    },
    { 
      name: "Dra. Rebecca Castro", 
      role: "Advogada Criminalista, Especializada em Execução Penal e Tribunal do Júri, Pós-Graduada em Criminologia.", 
      img: "/assets/images/team/dra-rebecca-castro-team.jpg",
      experience: "Atua na advocacia criminal com atenção especial a execução penal e Tribunal do Júri, conduzindo casos com sensibilidade, firmeza técnica e cuidado estratégico em cada etapa da defesa.",
      education: "Especializada em Execução Penal e Tribunal do Júri, com pós-graduação em Criminologia, possui formação voltada à compreensão aprofundada da dinâmica criminal e da construção técnica da defesa.",
      cases: "Atuação em pedidos e acompanhamentos na execução penal, procedimentos ligados ao Tribunal do Júri e casos que exigem leitura cuidadosa dos fatos, da prova e da estratégia processual."
    },
    { 
      name: "Dr. Gilmar Freitas", 
      role: "Advogado Especialista em Direito Civil e Processual Civil e Pós-Graduado em Direito Tributário.", 
      img: "/assets/images/team/dr-gilmar-freitas-team.jpg",
      experience: "Atua em demandas cíveis com organização, estratégia e atenção aos detalhes, oferecendo condução jurídica segura em conflitos patrimoniais, obrigações, contratos e questões processuais.",
      education: "Especialista em Direito Civil e Processual Civil, com pós-graduação em Direito Tributário, possui base técnica sólida para atuar em discussões jurídicas que exigem interpretação minuciosa e posicionamento estratégico.",
      cases: "Atuação em demandas contratuais, disputas patrimoniais e conflitos cíveis que exigem planejamento processual, análise técnica e condução consistente ao longo do caso."
    },
    { 
      name: "Dra. Danielle Fernandes", 
      role: "Advogada Especialista em Direito de Família e Direito Administrativo.", 
      img: "/assets/images/team/dra-danielle-fernandes-team.jpg",
      experience: "Atua em demandas de família e administrativas com abordagem humana, técnica e cuidadosa, compreendendo que muitos casos exigem sensibilidade no atendimento e firmeza na orientação jurídica.",
      education: "Especialista em Direito de Família e Direito Administrativo, possui formação voltada à condução responsável de questões familiares, patrimoniais e demandas relacionadas à administração pública.",
      cases: "Atuação em conflitos familiares, reorganização de vínculos jurídicos e demandas administrativas que exigem análise precisa, postura estratégica e acompanhamento próximo do cliente."
    },
    { 
      name: "Dr. Itamar Silveira", 
      role: "Advogado Criminalista, Delegado de Polícia Aposentado e Professor Universitário.", 
      img: "/assets/images/team/dr-itamar-silveira-team.jpg",
      experience: "Reúne experiência prática no sistema de persecução penal e atuação na advocacia criminal, oferecendo visão ampla sobre investigações, procedimentos policiais e definição estratégica da defesa.",
      education: "Sua trajetória combina atuação como advogado criminalista, Delegado de Polícia Aposentado e Professor Universitário, unindo prática, estudo e leitura aprofundada do Direito Penal.",
      cases: "Atuação em casos criminais que exigem compreensão detalhada da investigação, leitura técnica do procedimento policial e orientação estratégica desde as fases iniciais."
    },
    { 
      name: "Dr. Charleson Victor", 
      role: "Advogado Trabalhista, Especialista em Direito e Processo do Trabalho e Especialista em Ciências Criminais.", 
      img: "/assets/images/team/dr-charleson-victor-team.jpg",
      experience: "Atua em demandas trabalhistas com foco na defesa de direitos, análise documental e estratégia processual, sempre com objetividade, atenção aos fatos e clareza na orientação ao cliente.",
      education: "Especialista em Direito e Processo do Trabalho e em Ciências Criminais, reúne formação que fortalece a atuação analítica, a estruturação de teses e a condução técnica das demandas.",
      cases: "Atuação em conflitos trabalhistas, análise de verbas, disputas decorrentes da relação de trabalho e casos que exigem organização probatória e acompanhamento processual cuidadoso."
    },
    { 
      name: "Dra. Renata Machado", 
      role: "Advogada Especialista em Direito Cível e Processo Cível, Direito de Família e Sucessões.", 
      img: "/assets/images/team/dra-renata-machado-team.jpg",
      experience: "Atua em demandas cíveis, familiares e sucessórias com atenção aos detalhes, escuta qualificada e estratégia jurídica alinhada à realidade de cada cliente e de cada conflito.",
      education: "Especialista em Direito Cível e Processo Cível, com atuação em Direito de Família e Sucessões, possui formação voltada à condução técnica e cuidadosa de casos que exigem precisão e sensibilidade.",
      cases: "Atuação em disputas cíveis, questões familiares e demandas sucessórias que exigem clareza na orientação, organização processual e acompanhamento próximo em cada etapa."
    },
    { 
      name: "Luis Gonçalves", 
      role: "Estagiário, Web Designer, Gestor de Tráfego e Estudante de Direito na UPIS.", 
      img: "/assets/images/team/luis-goncalves-team.jpg",
      experience: "Atua no suporte às frentes digitais e institucionais do escritório, contribuindo com organização da presença online, comunicação estratégica e melhoria da experiência de contato com os clientes.",
      education: "Estudante de Direito na UPIS, com atuação complementar em web design e gestão de tráfego, reúne visão prática sobre comunicação, posicionamento digital e experiência aplicada ao ambiente jurídico.",
      cases: "Participação no fortalecimento digital do escritório, estruturação de presença online, apoio à comunicação institucional e melhoria da jornada de contato do cliente com a Barreto Advocacia."
    },
    { 
      name: "Paulo Barreto Filho", 
      role: "Estagiário e Estudante de Direito no CEUB.", 
      img: "/assets/images/team/paulo-barreto-filho-team.jpg",
      experience: "Atua no apoio às rotinas do escritório, contribuindo com organização interna, suporte operacional e acompanhamento das atividades jurídicas, sempre com atenção aos detalhes e dedicação ao aprendizado prático.",
      education: "Estudante de Direito no CEUB, em formação contínua para atuação jurídica responsável, desenvolvendo experiência prática dentro da dinâmica real do escritório.",
      cases: "Apoio às atividades internas, organização de demandas e participação nas rotinas que sustentam o funcionamento operacional e o atendimento da equipe jurídica."
    },
  ];

  return (
    <div className="flex flex-col gap-24">
      {/* SEÇÃO A: 10 ANOS DE EXPERIÊNCIA */}
      <section className="about-office-section section-bg-fade-bottom liquid-glass-section px-4 sm:px-6 max-w-7xl mx-auto w-full py-16 sm:py-20 rounded-[24px] sm:rounded-[40px] overflow-hidden">
        <div className="relative z-[2] flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-accent-primary mb-4">10 Anos de Experiência</h3>
          <p className="text-text-secondary mb-10 sm:mb-12 font-light max-w-2xl text-base sm:text-lg px-4">
            Com trajetória consolidada em Brasília, oferecemos análise objetiva e defesa estratégica.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
            <div className="liquid-glass-card p-1 text-center">
              <div className="card-content flex flex-col items-center justify-center h-full w-full p-4 sm:p-6">
                <div className="title-highlight text-3xl md:text-4xl mb-2 relative z-10">1.180+</div>
                <div className="card-text text-[10px] md:text-xs lg:text-sm uppercase tracking-wider relative z-10 font-bold">Casos Realizados</div>
              </div>
            </div>
            <div className="liquid-glass-card p-1 text-center">
              <div className="card-content flex flex-col items-center justify-center h-full w-full p-4 sm:p-6">
                <div className="title-highlight text-3xl md:text-4xl mb-2 relative z-10">190+</div>
                <div className="card-text text-[10px] md:text-xs lg:text-sm uppercase tracking-wider relative z-10 font-bold">Negócios Fechados</div>
              </div>
            </div>
            <div className="liquid-glass-card p-1 text-center">
              <div className="card-content flex flex-col items-center justify-center h-full w-full p-4 sm:p-6">
                <div className="title-highlight text-3xl md:text-4xl mb-2 relative z-10">50+</div>
                <div className="card-text text-[10px] md:text-xs lg:text-sm uppercase tracking-wider relative z-10 font-bold">Prêmios e Reconhecimentos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO B: CONHEÇA NOSSO TIME */}
      <section className="liquid-glass-section px-4 sm:px-6 max-w-7xl mx-auto w-full py-16 sm:py-20 rounded-[24px] sm:rounded-[40px] overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl text-center font-serif font-bold text-text-primary mb-10 sm:mb-12">
            Conheça Nosso <span className="text-accent-primary">Time</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="liquid-glass-card overflow-hidden group p-1 cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedMember(idx)}
              >
                <div className="card-content flex flex-col h-full w-full p-0 overflow-hidden">
                  <div className="team-photo-wrapper">
                    <img 
                      src={member.img} 
                      alt={`Foto de ${member.name}`} 
                      className="team-photo group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">Ver Perfil</span>
                    </div>
                  </div>
                  <div className="p-6 text-center relative z-10 flex-1 flex flex-col justify-center">
                    <h4 className="title-highlight text-lg font-bold relative z-10 mb-2">{member.name}</h4>
                    <p className="card-text text-xs leading-relaxed opacity-90">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DO MEMBRO DA EQUIPE */}
      {selectedMember !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedMember(null)}
          ></div>
          
          <div className="relative w-full max-w-3xl bg-bg-secondary border border-text-primary/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <img 
                src={team[selectedMember].img} 
                alt={`Foto de ${team[selectedMember].name}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
              <div className="absolute bottom-4 left-4 right-4 md:hidden">
                <h4 className="text-2xl font-serif font-bold text-white mb-1">{team[selectedMember].name}</h4>
              </div>
            </div>

            <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto">
              <div className="hidden md:block mb-6">
                <h4 className="text-3xl font-serif font-bold text-text-primary mb-2">{team[selectedMember].name}</h4>
                <p className="text-accent-primary font-medium text-sm">{team[selectedMember].role}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-accent-primary"></span>
                    Experiência
                  </h5>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {team[selectedMember].experience}
                  </p>
                </div>

                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-accent-primary"></span>
                    Formação
                  </h5>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {team[selectedMember].education}
                  </p>
                </div>

                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-accent-primary"></span>
                    Casos de Destaque
                  </h5>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {team[selectedMember].cases}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
