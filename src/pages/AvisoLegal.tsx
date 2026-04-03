import { useEffect } from 'react';

export function AvisoLegal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent-primary to-emerald-400 bg-clip-text text-transparent mb-12">
        Aviso Legal
      </h1>
      
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Conteúdo Meramente Informativo</h2>
          <p>
            Todo o material publicado na plataforma — englobando textos, resumos jurisprudenciais, publicações técnicas, postagens e afins — possui caráter única e exclusivamente <strong>informativo e educacional</strong>. Nenhuma leitura substitui uma avaliação técnica precisa. Logo, nada disponível nesta plataforma constitui ou deve ser interpretado como parecer, recomendação ou consultoria jurídica individualizada para qualquer tipo de causa ou questão submetida.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Ausência de Relação Advogado-Cliente</h2>
          <p>
            Destacamos veementemente que o simples ato de navegação, a leitura atenta do conteúdo, bem como o simples envio inicial de comunicações — seja pelo botão do WhatsApp, e-mail institucional (barretoadvocacia01@gmail.com) ou outro meio — não operam, por si sós, a formação de nenhuma espécie de relação contratual efetiva (advogado e cliente) entre você e a sua equipe. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Sem Promessa de Resultado</h2>
          <p>
            Todo processo e trâmite jurídico encontra-se sujeito à volatilidade do judiciário, além da especificidade dos ritos, das provas produzidas no caso em concreto, prazos legais e à apreciação da Turma Magistrada. Desse modo, nosso escritório atua através do compromisso com as <strong>obrigações de meio</strong>. Reafirmamos com plena nitidez que casos concretos dependem de análise unívoca das minúcias, não havendo, nem de longe ou sob qualquer interpretação, promessa de obtenção de resultados, tampouco a antecipação de um trânsito resolutivo absoluto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Publicidade Moderada na Advocacia</h2>
          <p>
            Informamos que a concepção estrutural e a publicação dos recursos atinentes a este site respeitam de modo pleno a sobriedade indispensável aplicável à advocacia, atuando e mantendo as diretrizes em estrita conformidade com os artigos de publicidade presentes no Estatuto da Advocacia e da OAB, no vigente Código de Ética e Disciplina da OAB, especialmente pelas delimitações traçadas pelo Provimento n.º 205/2021 do Conselho Federal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Orientação para Contato</h2>
          <p>
            Encorajamos o usuário a entrar em contato com os nossos especialistas por intermédio dos nossos canais oficiais (por Whatsapp, agendamento de chamada ou contato presencial no Complexo Empresarial Liberty Mall). Somente no decurso deste contato pormenorizado nós iniciaremos o entendimento sigiloso adequado e qualificado que sua demanda necessita.
          </p>
        </section>

        <div className="mt-12 text-sm">
          <p className="font-semibold text-text-primary">PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA</p>
          <p>Representada por PAULO HENRIQUE SANTOS BARRETO (OAB/DF 57.650)</p>
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}.</p>
        </div>
      </div>
    </div>
  );
}
