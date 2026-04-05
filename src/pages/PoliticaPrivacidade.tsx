import { useEffect } from 'react';
import { SEO } from '../components/SEO';

export function PoliticaPrivacidade() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Política de Privacidade e LGPD"
        description="Saiba como a Barreto Advocacia coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD e demais normas de privacidade."
        canonical="https://advocaciabarreto.com/politica-de-privacidade"
      />
      <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent-primary to-emerald-400 bg-clip-text text-transparent mb-12">
          Política de Privacidade
        </h1>
      
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <p className="font-medium text-text-primary">
          A PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA reconhece a importância da sua privacidade e se compromete plenamente com o cumprimento da Lei Geral de Proteção de Dados Pessoais (Lei n.º 13.709/2018 - LGPD).
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Controlador dos Dados</h2>
          <p>
            O Controlador responsável pelo tratamento dos seus dados perante esta política é a <strong>PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA</strong>, 
            inscrita no CNPJ sob o n.º 48.332.162/0001-53, neste ato representada pelo sócio PAULO HENRIQUE SANTOS BARRETO (OAB/DF 57.650), com endereço profissional no Complexo Empresarial Liberty Mall, torre “B”, sala 715, Asa Norte, Brasília/DF.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Dados que Coletamos</h2>
          <p>
            Coletamos informações apenas quando você nos fornece voluntariamente durante seu relacionamento com o nosso escritório. Isso abrange: nome completo, e-mail, telefone, além dos fatos ou dúvidas inseridos no corpo do contato prévio (formulários, WhatsApp, e-mail). 
            <br/><br/>
            Adicionalmente, dados de navegação como endereço IP, informações sobre o dispositivo/browser e páginas visitadas (via <em>cookies / analytics</em>) podem ser coletados automaticamente com objetivo de compilar estatísticas de acesso e melhorar a sua experiência neste site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Finalidades do Tratamento</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Atendimento Especializado:</strong> Para retornar suas mensagens, tirar dúvidas e prosseguir com a eventual contratação de honorários do seu projeto de defesa.</li>
            <li><strong>Divulgação de Notícias e Envios:</strong> Eventual transmissão de atualizações importantes de processos e prestação institucional de conteúdos jurídicos variados.</li>
            <li><strong>Desempenho e Segurança:</strong> Garantia do funcionamento adequado e mitigação das falhas da arquitetura web.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Bases Legais</h2>
          <p>
            O tratamento exercido pelo escritório sustenta-se nas bases autorizativas dispostas no Artigo 7º da LGPD. Trataremos todos os registros estritamente embasados no <strong>Consentimento</strong> concedido pelo titular do dado, no <strong>Legítimo Interesse</strong> (no limite da correspondente necessidade institucional sem intervir em diretos civis) ou mediante o <strong>cumprimento de obrigação legal/regulatória</strong> ditada pela ética da advocacia pela Ordem dos Advogados do Brasil.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Compartilhamento de Informação</h2>
          <p>
            Prezamos enormemente pelo mais profundo <strong>Sigilo Profissional</strong>. Seus dados nunca são comercializados com terceiros. Apenas são compartilhados internamente com os profissionais do escritório para tramitação da demanda ou mediante empresas rigorosas de provedores de hospedagem na nuvem, serviços de e-mail e analytics nos estritos termos de seus contratos e com igual comprometimento de encriptação dos parceiros à LGPD.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Seus Direitos (Direito do Titular)</h2>
          <p>
            Através dos canais oficiais listados abaixo, garantimos de forma gratuita ao titular do dado o direito a exigir a qualquer momento acesso abrangente, correção de eventuais inverdades, atualização, retificação, portabilidade intersistêmica e mesmo solicitação da completa revogação formal de consentimentos. Poderá você solicitar a eliminação dos dados ou impor objeção quanto às operações.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Retenção e Segurança</h2>
          <p>
            Implementamos camadas de políticas técnicas, senhas complexas rigorosas, e metodologias organizacionais apropriadas e proporcionais para a salvaguarda sistemática visando blindar a manipulação sem autorização de suas informações. Os registros serão somente mantidos até atingirem sua finalidade proposta ou esgotar-se o prazo correspondente delimitado em retenção decorrente de imposição por obrigação ética profissional e legal imposta aos advogados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Encarregado de Dados (DPO) e Contato</h2>
          <p>
            Conforme ordenamento normativo, havendo requisição para acesso de dados, pedidos de deleção, denúncia a riscos inerentes de privacidade no sistema e dúvidas gerais acerca das condições contidas neste adendo de política, as correspondências virtuais deverão ser centralizadas ao e-mail institucional na figura de nosso encarregado legal:
            <br/>
            <strong>E-mail: barretoadvocacia01@gmail.com</strong>
          </p>
        </section>

        <div className="mt-12 text-sm">
          <p>Data de atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}.</p>
        </div>
      </div>
    </div>
    </>
  );
}
