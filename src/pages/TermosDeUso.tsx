import { useEffect } from 'react';
import { SEO } from '../components/SEO';

export function TermosDeUso() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Termos de Uso do Site"
        description="Conheça os Termos de Uso do site Barreto Advocacia e entenda as condições de navegação, responsabilidade e uso das informações."
        canonical="/termos-de-uso"
      />
      <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent-primary to-emerald-400 bg-clip-text text-transparent mb-12">
          Termos de Uso
        </h1>
      
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Objeto dos Termos</h2>
          <p>
            O site Barreto Advocacia Oficial oferece informações institucionais sobre a <strong>PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA</strong>, 
            conteúdos jurídicos de caráter meramente informativo e canais de contato com a equipe. Nenhuma funcionalidade deste site configura consultoria jurídica individualizada ou qualquer garantia e promessa de resultado relacionada a demandas específicas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Aceitação dos Termos</h2>
          <p>
            Ao acessar e navegar no nosso site, o usuário declara ter lido, compreendido e concordado com as condições descritas nestes Termos de Uso, assim como em nossa Política de Privacidade, Política de Cookies e Aviso Legal. Caso não concorde com tais condições, solicitamos que não utilize a nossa página e seus formulários.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Uso Adequado do Site</h2>
          <p>
            O usuário se compromete a usar as ferramentas deste site da maneira a qual lhe foi destinada, sendo absolutamente vedada a utilização do mesmo para fins ilegais, disparo irrazoável de mensagens de spam, distribuição de malwares, phishing, bem como qualquer tentativa de engenharia reversa, invasão sistêmica ou prática de raspagem de dados (scraping automatizado excessivo). A violação dessa diretriz enseja as sanções civis e criminais cabíveis de acordo com a legislação do Brasil.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Propriedade Intelectual</h2>
          <p>
            Ressaltamos que textos divulgados, logotipos institucionais, disposição de layouts, fotografias das instalações ou da equipe e o código fonte original pertencem com exclusividade à <strong>PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA</strong>, exceto onde expressamente indicado o contrário (como imagens adquiridas por licença ou com citação de direito de imagem). Fica terminantemente proibida a cópia, sublicenciamento, distribuição e reprodução não autorizada do nosso material.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Limitação de Responsabilidade</h2>
          <p>
            As matérias, os artigos e demais informações jurídicas publicadas pontualmente no site têm caráter educativo e genérico, elaboradas apenas com o intuito de informar o público sobre os seus direitos. Nenhuma dessas informações substitui a necessidade da competente <strong>consulta individual</strong> com um advogado de nossa equipe ou de sua confiança. Os cenários concretos submetidos sofrem drásticas alterações práticas conforme os fatos e não asseguram o mesmo êxito.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Atualizações dos Termos</h2>
          <p>
            O escritório, zelando pela sua atualização regulatória, pode revisar, de tempos em tempos e a qualquer momento, estes Termos de Uso (de acordo com as exigências administrativas da advocacia), entrando os mesmos em vigor tão logo ocorra a sua publicação no site. Manter-se informado e revisitar periodicamente esta página para verificar seu teor consolidado é parte das responsabilidades do usuário.
          </p>
        </section>

        <div className="mt-12 text-sm">
          <p className="font-semibold text-text-primary">PAULO BARRETO SOCIEDADE INDIVIDUAL DE ADVOCACIA</p>
          <p>CNPJ: 48.332.162/0001-53</p>
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}.</p>
        </div>
      </div>
    </div>
    </>
  );
}
