import { useState, useCallback } from 'react';
import { TeamMemberModal, type TeamMember } from './TeamMemberModal';

export function TeamFamilia() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleCloseModal = useCallback(() => {
    setSelectedMember(null);
  }, []);

  const team: TeamMember[] = [
    {
      name: "Dr. Gilmar Freitas",
      role: "Advogado com atuação em Direito de Família, Sucessões e Cível, com pós-graduação em Direito Civil e Processo Civil e em Direito Imobiliário e Condominial.",
      img: "/assets/images/team/dr-gilmar-freitas-team.webp",
      alt: "Dr. Gilmar Freitas, advogado com atuação em Direito de Família, Sucessões e Cível",
      experience: "Atua em demandas de família, partilhas patrimoniais e conflitos civis com organização, estratégia e atenção aos detalhes, oferecendo condução jurídica segura em conflitos patrimoniais, acordos e questões processuais.",
      education: "Pós-Graduado em Direito Civil e Processo Civil – Lato Sensu e em Direito Imobiliário e Condominial – Lato Sensu, possui formação voltada à atuação estratégica em demandas patrimoniais, contratuais, civis e de família.",
      cases: "Atuação em divórcios, partilhas patrimoniais, contratos e conflitos que exigem planejamento processual, análise técnica e condução consistente ao longo do caso."
    },
    {
      name: "Dr. Paulo Barreto",
      role: "Fundador, Advogado Criminalista, Mestrando em Direito Processual Penal e Especialista em Lei de Drogas e Recursos.",
      img: "/assets/images/team/dr-paulo-barreto-team.webp",
      alt: "Dr. Paulo Barreto, fundador e advogado criminalista da Barreto Advocacia em Brasília",
      experience: "Com 10 anos de atuação na advocacia criminal, conduz defesas estratégicas em investigações, processos penais e casos de maior sensibilidade, sempre com análise técnica, postura firme e leitura realista de cada cenário.",
      education: "Mestrando em Direito Processual Penal, com especialização em Lei de Drogas e Recursos, reúne formação direcionada à advocacia criminal e atualização constante para atuação precisa em casos complexos.",
      cases: "Atuação em investigações criminais, processos penais, medidas urgentes e recursos, com foco em estratégia defensiva, proteção de direitos e acompanhamento técnico em todas as fases do caso."
    },
    {
      name: "Dra. Cleide Alves",
      role: "Advogada Criminalista e Especialista em Tribunal do Júri.",
      img: "/assets/images/team/cleide-alves.jpg",
      alt: "Dra. Cleide Alves, advogada criminalista e especialista em Tribunal do Júri",
      description: "Advogada Criminalista com atuação dedicada à defesa técnica em processos criminais e especialização em Tribunal do Júri. Sua atuação conecta-se diretamente à vertente Criminal do escritório, com foco na análise rigorosa dos autos, na construção de teses defensivas e na condução estratégica de demandas que exigem preparo técnico, clareza e atenção aos detalhes.",
      experience: "Atuação em defesa criminal com foco na análise de provas, estruturação de teses e acompanhamento estratégico de processos criminais.",
      education: "Advogada Criminalista e Especialista em Tribunal do Júri.",
      areas: "Direito Criminal e Tribunal do Júri.",
      cases: "Defesa em processos criminais, análise técnica dos autos e atuação em demandas relacionadas ao Tribunal do Júri."
    },
    {
      name: "Dr. Itamar Silveira",
      role: "Advogado Criminalista, Delegado de Polícia Aposentado e Professor Universitário.",
      img: "/assets/images/team/dr-itamar-silveira-team.webp",
      alt: "Dr. Itamar Silveira, advogado criminalista da Barreto Advocacia em Brasília",
      experience: "Reúne experiência prática no sistema de persecução penal e atuação na advocacia criminal, oferecendo visão ampla sobre investigações, procedimentos policiais e definição estratégica da defesa.",
      education: "Sua trajetória combina atuação como advogado criminalista, Delegado de Polícia Aposentado e Professor Universitário, unindo prática, estudo e leitura aprofundada do Direito Penal.",
      cases: "Atuação em casos criminais que exigem compreensão detalhada da investigação, leitura técnica do procedimento policial e orientação estratégica desde as fases iniciais."
    },
    {
      name: "Dr. Antônio A. Romano",
      role: "Partner Manager com atuação estratégica em negociação, gestão de relacionamentos e desenvolvimento de parcerias de alto valor.",
      img: "/assets/images/team/dr-antonio-a-romano-team.webp",
      alt: "Dr. Antônio A. Romano - Barreto Advocacia",
      experience: "Atua na construção e fortalecimento de relacionamentos estratégicos com visão executiva, conduzindo negociações relevantes, alinhando interesses institucionais e ampliando oportunidades com postura firme, consultiva e orientada a resultado.",
      education: "Reúne competências associadas a funções de alta responsabilidade em gestão de contas, alianças estratégicas e expansão de mercado, com perfil próximo ao de Account Manager, Gerente de Alianças e Business Development Manager.",
      cases: "Destaca-se na estruturação de parcerias estratégicas, retenção e evolução de relacionamentos corporativos, negociação com stakeholders de alto nível e abertura de novas frentes de negócio com autoridade, consistência e forte capacidade de articulação."
    },
    {
      name: "Luis Gonçalves",
      role: "Estagiário, Web Designer, Gestor de Tráfego e Estudante de Direito na UPIS.",
      img: "/assets/images/team/luis-goncalves-team.webp",
      alt: "Luis Gonçalves, estagiário e estudante de Direito na UPIS",
      experience: "Atua no suporte às frentes digitais e institucionais do escritório, contribuindo com organização da presença online, comunicação estratégica e melhoria da experiência de contato com os clientes.",
      education: "Estudante de Direito na UPIS, com atuação complementar em web design e gestão de tráfego, reúne visão prática sobre comunicação, posicionamento digital e experiência aplicada ao ambiente jurídico.",
      cases: "Participação no fortalecimento digital do escritório, estruturação de presença online, apoio à comunicação institucional e melhoria da jornada de contato do cliente com a Barreto Advocacia."
    },
    {
      name: "Paulo Barreto Filho",
      role: "Estagiário e Estudante de Direito no CEUB.",
      img: "/assets/images/team/paulo-barreto-filho-team.webp",
      alt: "Paulo Barreto Filho, estagiário e estudante de Direito no CEUB",
      experience: "Atua no suporte às rotinas do escritório, contribuindo com organização interna, suporte operacional e acompanhamento das atividades jurídicas, sempre com atenção aos detalhes e dedicação ao aprendizado prático.",
      education: "Estudante de Direito no CEUB, em formação contínua para atuação jurídica responsável, desenvolvendo experiência prática dentro da dinâmica real do escritório.",
      cases: "Apoio às atividades internas, organização de demandas e participação nas rotinas que sustentam o funcionamento operacional e o atendimento da equipe jurídica."
    },
    {
      name: "Carlos Eduardo",
      role: "Estagiário e Estudante de Direito na Anhanguera.",
      img: "/assets/images/team/carlos-eduardo.jpg",
      alt: "Carlos Eduardo, estagiário e estudante de Direito na Anhanguera",
      description: "Estagiário e estudante de Direito na Anhanguera, com atuação de apoio na área de Direito de Família. Colabora na organização de documentos, estruturação de peças e preparo técnico de demandas relacionadas a divórcio, pensão alimentícia, guarda, convivência e partilha de bens. Também contribui com apoio em tecnologia da informação, fortalecendo a organização interna e os processos digitais do escritório.",
      experience: "Apoio na estruturação de peças e documentos de Direito de Família, com foco em pensão alimentícia, guarda, convivência e partilha de bens.",
      education: "Estudante de Direito na Anhanguera.",
      areas: "Direito de Família e apoio em tecnologia da informação.",
      cases: "Organização documental, estruturação de peças e apoio operacional em demandas de Direito de Família."
    },
    {
      name: "Laura Luna Mendeiros",
      role: "Estagiária e Estudante de Direito no CEUB.",
      img: "/assets/images/team/laura-luna-mendeiros.jpg",
      alt: "Laura Luna Mendeiros, estagiária e estudante de Direito no CEUB",
      description: "Estagiária e estudante de Direito no CEUB, com atuação de apoio nas áreas Criminal e de Família. Contribui com a organização interna de documentos, acompanhamento de rotinas processuais e preparo de materiais que sustentam a atuação técnica do escritório. Sua atuação reforça a estrutura operacional das demandas de defesa criminal e das questões familiares conduzidas pela equipe.",
      experience: "Apoio na organização interna de documentos e rotinas das áreas Criminal e de Família.",
      education: "Estudante de Direito no CEUB.",
      areas: "Apoio em Direito Criminal e Direito de Família.",
      cases: "Organização documental, acompanhamento de rotinas e apoio operacional em demandas criminais e familiares."
    },
  ];

  return (
    <section
      id="equipe"
      className="liquid-glass-section max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-20 rounded-[24px] sm:rounded-[40px] overflow-hidden"
    >
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl text-center font-serif font-bold text-text-primary mb-10 sm:mb-12">
          Conheça Nosso <span className="text-accent-primary">Time</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {team.map((member, idx) => (
            <div
              key={member.name}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-expanded={selectedMember === idx}
              aria-label={`Ver perfil completo de ${member.name}`}
              className="liquid-glass-card hover-lift overflow-hidden group p-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-primary touch-manipulation"
              onClick={() => setSelectedMember(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedMember(idx);
                }
              }}
            >
              <div className="card-content flex flex-col h-full w-full p-0 overflow-hidden">
                <div className="team-photo-wrapper">
                  <picture>
                    <source srcSet={member.img.replace(/\.(png|jpe?g)$/i, '.webp')} type="image/webp" />
                    <img
                      src={member.img}
                      alt={member.alt}
                      className="team-photo group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="800"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="apple-glass px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center text-white text-sm font-medium rounded-full pointer-events-none">
                      Ver Perfil
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 text-center relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="title-highlight text-lg font-bold relative z-10 mb-2">{member.name}</h3>
                  <p className="card-text text-xs leading-relaxed opacity-90">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TeamMemberModal
        member={selectedMember !== null ? team[selectedMember] : null}
        onClose={handleCloseModal}
        titleId="team-familia-modal-title"
      />
    </section>
  );
}
