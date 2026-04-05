import { useEffect } from 'react';
import { SEO } from '../components/SEO';

export function PoliticaCookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Política de Cookies"
        description="Entenda como a Barreto Advocacia utiliza cookies para melhorar sua experiência de navegação e personalizar conteúdos."
        canonical="https://advocaciabarreto.com/politica-de-cookies"
      />
      <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent-primary to-emerald-400 bg-clip-text text-transparent mb-12">
          Política de Cookies
        </h1>
      
      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">O que são Cookies?</h2>
          <p>
            Utilizamos ferramentas transparentes focadas na melhoria de performance e experiência. Os cookies compõem-se de curtos arquivos originados na visualização e mantidos através do browser localmente em seu computador e dispositivo celular. São fundamentais para a fluidez do website na retenção de comportamentos sem interações constantes ou perda de continuidade no fluxo de página.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Tipos de Cookies Utilizados</h2>
          <p className="mb-4">No domínio de nosso escritório poderemos manipular três instâncias primárias desta modalidade de arquivo:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Cookies Estritamente Necessários:</strong> Obrigatórios e vitais para o funcionamento mínimo e trânsito do usuário pelos links do site sem inconsistência, além auxiliar no armazenamento inicial e de segurança preventiva da plataforma.
            </li>
            <li>
              <strong>Cookies de Desempenho e Estatística:</strong> Essenciais para acompanhamento demográfico despersonalizado das visualizações perante os serviços auxiliares do website da equipe e no dimensionamento estrutural contábil analítico (ex. via Google Analytics ou recursos providos de terceiros), reportando taxa de lentidão da rede.
            </li>
            <li>
              <strong>Cookies de Funcionalidade:</strong> Presenciam de atributos utilitários de retenção referencial individual ou global das definições de interações da interface (como escolha manual preestabelecida de acessibilidade no local que recordam das suas atuações pré-programáveis e simplificam preenchimento virtual dos fluxos contínuos entre idas ou retornos da requisição visual efetuada de onde o usuário esteve logado com as marcações salvas da página em visitas anteriores).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Gerenciamento no seu Navegador</h2>
          <p>
            Informamos da possibilidade efetiva das decisões exclusivas do visitante diante as diretrizes que determinam autorizações quanto ao mantimento livre nas configurações do aparelho físico sendo o uso por meio da customização presente em seu respectivo portal móvel ou de mesa (Chrome, Firefox, Safari ou Microsoft Edge). Após o emprego e implantação gradual futura do banner informativo de rastreabilidade (consent management provider), o usuário será amparado pela viabilidade técnica da capacidade de autorizar ou retirar com exclusividade autorizações direcionadas a ramificações supérfluas (analíticas/publicitárias).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Nossa Respeitabilidade em Dados</h2>
          <p>
            Recomendamos acentuadamente associar a documentação integral contida neste documento em observância às elucidações explícitas contidas dentro de nosso núcleo de processamento através da <a href="/politica-de-privacidade" className="text-accent-primary hover:underline">Política de Privacidade</a> do escritório sob as sanções do ordenamento jurídico das determinações garantistas e de sigilo.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
