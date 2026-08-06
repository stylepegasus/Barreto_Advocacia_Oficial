# Auditoria SEO e Técnico - Advocacia Barreto (Fase 1)

## 1. Diagnóstico Técnico

### 1.1 SEO On-Page
- **Titles e Meta Descriptions:** A implementação via `SEO.tsx` com `react-helmet-async` é funcional, mas pode ser otimizada para ser mais rica, focando em palavras-chave long-tail e intenções de busca específicas para advogados em Brasília (Criminal, Civil, Trabalhista).
- **Headings (H1, H2, H3):** A hierarquia semântica precisa ser validada. Frequentemente em SPAs, os componentes acabam gerando múltiplos H1s ou H2s puramente estéticos. É crucial garantir uma árvore de headings que conte a história do serviço.
- **Links Internos e Âncoras:** O site usa navegação baseada em âncoras na Home. Os atributos descritivos e semânticos podem ser melhorados para acessibilidade e rastreio do Google.

### 1.2 SEO Técnico
- **Sitemap e Robots.txt:** Ambos estão presentes e funcionais na pasta `public`. Sendo um sitemap estático, ele atende bem à estrutura atual, mas deve ser mantido sincronizado com novas páginas de políticas ou artigos.
- **Canonical:** O componente `SEO.tsx` já gera URLs canônicas corretamente.
- **Schema (Rich Snippets):** Há um bloco JSON-LD para `LegalService` inserido diretamente no `index.html`. Isso é um bom começo, mas impede a geração de schemas específicos por rota e dificulta a expansão com propriedades adicionais como FAQ ou Reviews.

### 1.3 Performance e Core Web Vitals
- **Code Splitting:** O `App.tsx` utiliza `React.lazy()` corretamente para páginas secundárias (termos, políticas), reduzindo o payload da Home.
- **Imagens e Assets:** É necessário revisar os componentes (ex: `Hero`, `ExperienceTeam`) para garantir o uso de `loading="lazy"` nas imagens abaixo da dobra e formatos modernos.
- **Renderização e Loaders:** O `index.html` possui um loader global com CSS/JS inline e timeout de segurança. Embora melhore a experiência inicial, precisa ser monitorado para não penalizar o LCP (Largest Contentful Paint).

### 1.4 Aspectos GEO (SEO Local - Brasília)
- **Foco Local:** O site tem forte apelo para Brasília/DF. O schema no `index.html` já endereça isso, mas o conteúdo on-page pode enfatizar pontos de referência locais, bairros e fóruns relevantes, de forma sutil e natural nos componentes de `Location.tsx` e `Footer.tsx`.
- **Google Maps:** O componente `MapEmbed.tsx` reforça o sinal local para mecanismos de busca.

### 1.5 Oportunidades AEO / AIO (Otimização para IA e Respostas)
- **Estrutura de Perguntas e Respostas:** A maior oportunidade de tráfego qualificado é responder dúvidas jurídicas em linguagem natural. IAs e motores de busca priorizam blocos de "FAQ". A falta de uma seção de dúvidas estruturada e com `FAQPage` schema é uma lacuna atual.
- **Semântica:** O conteúdo focado em "Defesa Estratégica" e "Resposta Rápida" deve estar em blocos de parágrafos facilmente processáveis por LLMs (ex: listas, bullet points claros).

---

## 2. Plano de Ação por Fases

### Fase 2: Estrutura Base, SEO Técnico e Performance (Prioridade Alta)
- **O que será feito:**
  - Migrar e expandir o Schema de `LegalService` do `index.html` para o `SEO.tsx`, tornando-o dinâmico e mais completo (horários, redes sociais).
  - Revisar a hierarquia de Headings (H1/H2) em `Hero.tsx`, `Features.tsx` e `PracticeAreas.tsx`.
  - Aplicar otimizações de performance (lazy loading e verificação de tamanhos) nas imagens, se ausentes.
- **Arquivos a alterar:** `index.html`, `src/components/SEO.tsx`, `src/components/Hero.tsx`, `src/components/Features.tsx`.
- **Como será testado:**
  - Execução de build (`npm run build`).
  - Verificação visual no Preview da Vercel.
  - Validação do schema no "Rich Results Test" do Google.

### Fase 3: AEO/AIO e Refinamento de GEO SEO (Prioridade Média)
- **O que será feito:**
  - Criar um componente de `FAQ.tsx` (Perguntas Frequentes) integrado à `Home.tsx` para capturar intenção de busca de topo de funil (ex: "preciso de advogado criminalista em brasília?", "como funciona a consulta?").
  - Injetar o schema `FAQPage` atrelado a essa nova seção.
  - Melhorar as menções de SEO local no `Location.tsx` e `Footer.tsx`.
- **Arquivos a alterar:** Novo `src/components/FAQ.tsx`, `src/pages/Home.tsx`, `src/components/Location.tsx`, `src/components/Footer.tsx`.
- **Como será testado:**
  - Verificação de renderização da seção na Home no preview da Vercel.
  - Teste de schema para o `FAQPage`.

### Fase 4: Otimizações Finais de Acessibilidade (Prioridade Baixa)
- **O que será feito:**
  - Adicionar e revisar atributos de acessibilidade (ARIA labels, alt texts detalhados) nos botões, ícones (como o `WhatsAppIcon.tsx`) e modais.
- **Arquivos a alterar:** Diversos componentes de UI.
- **Como será testado:**
  - Executar auditoria de Acessibilidade pelo Lighthouse no preview da Vercel.

---

## Proposta para Início Imediato (Fase 2)
Para começar, proponho focarmos nos **arquivos base**: `index.html` (limpar o schema estático), `src/components/SEO.tsx` (centralizar e enriquecer os dados estruturados) e revisão dos Headings nos componentes do topo da página inicial (`Hero` e `Features`). Isso trará a fundação técnica necessária para as próximas fases sem afetar a estética ou o tom jurídico do site.
