import { useEffect, useRef, useState } from 'react';
import { SEO } from '../components/SEO';
import { trackGenerateLead } from '../lib/ga';
import {
  BookOpen, Scale, Brain, Star, ChevronDown, ChevronUp,
  CheckCircle2, Sparkles, GraduationCap, Briefcase, Eye, Layers, Focus
} from 'lucide-react';
import './estudo.css';

// ── Dados dos produtos ─────────────────────────────────────────────────────────
const PRODUTOS = [
  {
    id: 'penal_200',
    slug: 'estudo_200_mapas_penal',
    nome: '200+ Mapas Penais – Direito Penal',
    descricao: 'Mais de 200 mapas mentais cobrindo parte geral, parte especial e leis penais especiais. Perfeito para revisões intensivas de concursos e OAB.',
    idealPara: 'quem precisa dominar Penal de ponta a ponta.',
    imagem: 'https://picsum.photos/seed/penal/480/320',
    destaque: true,
    // IMPORTANTE: SUBSTITUA esta URL pelo link real da Hotmart antes de publicar
    hotmartUrl: '#',
  },
  {
    id: 'adm',
    slug: 'estudo_dir_administrativo',
    nome: 'Direito Administrativo',
    descricao: 'Mapas dos principais temas e leis de Administrativo, como atos administrativos, poderes, licitações e responsabilidade do Estado.',
    idealPara: 'provas de tribunais e carreiras jurídicas em geral.',
    imagem: 'https://picsum.photos/seed/administrativo/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'const',
    slug: 'estudo_dir_constitucional',
    nome: 'Direito Constitucional',
    descricao: 'Constituição organizada em esquemas: direitos fundamentais, organização do Estado, controle de constitucionalidade e mais.',
    idealPara: 'faculdade, OAB e concursos que cobram Constitucional pesado.',
    imagem: 'https://picsum.photos/seed/constitucional/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'eleit',
    slug: 'estudo_dir_eleitoral',
    nome: 'Direito Eleitoral',
    descricao: 'Mapas focados em princípios, sistemas eleitorais, inelegibilidades e crimes eleitorais.',
    idealPara: 'concursos em carreiras eleitorais e políticos.',
    imagem: 'https://picsum.photos/seed/eleitoral/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'empres',
    slug: 'estudo_dir_empresarial',
    nome: 'Direito Empresarial',
    descricao: 'Sociedades, títulos de crédito, falência e recuperação, tudo em mapas que mostram as relações entre institutos.',
    idealPara: 'quem trava com a quantidade de conceitos em Empresarial.',
    imagem: 'https://picsum.photos/seed/empresarial/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'memo',
    slug: 'estudo_manual_memorizacao',
    nome: 'Manual da Memorização',
    descricao: 'Guia prático com técnicas de memorização aplicadas ao estudo jurídico, para você aproveitar ao máximo cada mapa.',
    idealPara: 'quem sente que esquece rápido o que estuda.',
    imagem: 'https://picsum.photos/seed/memorizacao/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'prev',
    slug: 'estudo_dir_previdenciario',
    nome: 'Direito Previdenciário',
    descricao: 'Mapas de benefícios, segurados, custeio e jurisprudência do STJ/STF sobre o RGPS — essencial para provas.',
    idealPara: 'carreiras do INSS, previdenciárias e trabalhistas.',
    imagem: 'https://picsum.photos/seed/previdenciario/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'trib',
    slug: 'estudo_dir_tributario',
    nome: 'Direito Tributário',
    descricao: 'Visão geral do CTN, espécies tributárias, competência, imunidades e obrigação tributária em mapas visuais.',
    idealPara: 'quem precisa de clareza nas lógicas de incidência e alíquotas.',
    imagem: 'https://picsum.photos/seed/tributario/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'civil',
    slug: 'estudo_dir_civil',
    nome: 'Direito Civil',
    descricao: 'Pessoas, negócios jurídicos, obrigações, contratos, responsabilidade civil e família em esquemas objetivos.',
    idealPara: 'quem se perde no tamanho do Código Civil.',
    imagem: 'https://picsum.photos/seed/civil/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'proc_civil',
    slug: 'estudo_dir_proc_civil',
    nome: 'Direito Processual Civil',
    descricao: 'Mapas do CPC/2015: fases do processo, recursos, competência, tutelas e execução estruturados por fluxos.',
    idealPara: 'visualizar o andamento das fatias do processo sem confusão.',
    imagem: 'https://picsum.photos/seed/processo_civil/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'penal_geral',
    slug: 'estudo_dir_penal',
    nome: 'Direito Penal',
    descricao: 'Versão ágil de teoria do crime, penas e institutos chave, simplificando conceitos altamente doutrinários.',
    idealPara: 'entender princípios penais e dosimetria rapidamente.',
    imagem: 'https://picsum.photos/seed/penal_geral/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'proc_penal',
    slug: 'estudo_dir_proc_penal',
    nome: 'Direito Processual Penal',
    descricao: 'Inquérito, ação penal, provas, prisões e habeas corpus organizados com foco na jurisprudência.',
    idealPara: 'concursos e aprimoramento da prática criminal.',
    imagem: 'https://picsum.photos/seed/processo_penal/480/320',
    destaque: false,
    hotmartUrl: '#',
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'Como recebo os mapas depois da compra?',
    a: 'Você será redirecionado para a Hotmart, que enviará o acesso por e‑mail assim que o pagamento for aprovado. A partir de lá, poderá baixar os arquivos e acessar sempre que quiser.',
  },
  {
    q: 'Por quanto tempo terei acesso?',
    a: 'O acesso na Hotmart será por 12 meses. Durante esse período você pode baixar os arquivos e guardar em segurança.',
  },
  {
    q: 'Posso imprimir os mapas?',
    a: 'Sim. Eles são PDFs preparados para serem visualizados no celular, tablet ou computador e também para impressão, se você preferir estudar no papel.',
  },
  {
    q: 'Esses materiais servem para faculdade, OAB e concursos?',
    a: 'Sim. A organização dos mapas foi pensada para auxiliar tanto na graduação quanto na preparação para OAB e concursos que cobram as disciplinas de Direito.',
  },
  {
    q: 'Os mapas substituem a leitura da lei ou da doutrina?',
    a: 'Não. Eles são um complemento visual poderoso para revisão e memorização, mas o estudo sério ainda exige contato com a legislação e a doutrina.',
  },
  {
    q: 'Quem produz os mapas mentais?',
    a: 'Os mapas são produzidos por estudantes de Direito e estagiários do Barreto Advocacia, orientados e revisados por advogados do escritório.',
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function handleComprar(slug: string, url: string) {
  trackGenerateLead(slug);
  if (url && url !== '#') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    // Alerta de placeholder (remover em produção quando as urls forem inseridas)
    alert('As vendas iniciarão em breve. Redirecionamento indisponível neste momento.');
  }
}

// ── Componente FAQ Item ────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string; key?: string | number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="estudo-faq-item liquid-glass-card p-5 cursor-pointer" onClick={() => setOpen(o => !o)}>
      <div className="flex items-start justify-between gap-4">
        <p className="font-semibold text-text-primary text-base leading-snug pr-2">{q}</p>
        <span className="text-accent-primary shrink-0 mt-0.5">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </div>
      {open && (
        <p className="mt-3 text-text-secondary text-sm leading-relaxed border-t border-text-primary/10 pt-3">
          {a}
        </p>
      )}
    </div>
  );
}

// ── Componente Card de Produto ─────────────────────────────────────────────────
function ProdutoCard({ produto }: { produto: typeof PRODUTOS[number] }) {
  return (
    <div className={`estudo-produto-card liquid-glass-card hover-lift flex flex-col overflow-hidden ${produto.destaque ? 'estudo-produto-destaque' : ''}`}>
      {produto.destaque && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-[#C5A880] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
          ✨ Mais Procurado
        </div>
      )}
      {/* Imagem adicionada na vitrine nova */}
      <img 
        src={produto.imagem} 
        alt={`Mockup dos materiais de ${produto.nome}`} 
        className="w-full h-48 object-cover border-b border-[#C5A880]/10"
        loading="lazy"
      />

      <div className="relative z-10 p-6 flex flex-col flex-1">
        <h3 className="font-bold text-text-primary text-lg mb-2 leading-snug">{produto.nome}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{produto.descricao}</p>
        <p className="text-text-muted text-xs font-medium mb-6 flex-1">
          <span className="text-accent-primary">Ideal para: </span> {produto.idealPara}
        </p>
        <button
          onClick={() => handleComprar(produto.slug, produto.hotmartUrl)}
          className="estudo-btn-primary w-full"
          aria-label={`Comprar ${produto.nome} na Hotmart`}
        >
          Comprar na Hotmart
        </button>
      </div>
    </div>
  );
}

// ── Página Principal ───────────────────────────────────────────────────────────
export function EstudoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parallax suave (scroll) com prefers-reduced-motion
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !parallaxRef.current) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!heroRef.current || !parallaxRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 768;
        const factor = isMobile ? -0.08 : -0.16;
        const offset = rect.top * factor;
        parallaxRef.current!.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const cards = document.querySelectorAll('.reveal-on-scroll');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Estudos e Mapas Mentais de Direito | Barreto Advocacia"
        description="Estude Direito como quem está dentro de um escritório de advocacia. Conheça nossos mapas mentais para Faculdade, OAB e Concursos."
        canonical="https://advocaciabarreto.com/estudo"
      />

      <div className="estudo-page">

        {/* ── 1. HERO ───────────────────────────────────────────────────────────── */}
        <section id="estudo-home" ref={heroRef} className="estudo-hero-section">
          <div ref={parallaxRef} className="estudo-hero-bg estudo-hero-bg-accent" aria-hidden="true" />
          <div className="estudo-hero-overlay" aria-hidden="true" />

          <div className="estudo-hero-content max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Textos */}
              <div className="estudo-hero-card liquid-glass-card reveal-on-scroll border border-[#C5A880]/30 shadow-2xl">
                <div className="relative z-10 p-8 sm:p-10">
                  <h1 className="estudo-hero-title font-serif">
                    Estude Direito como quem está dentro de um escritório de advocacia
                  </h1>
                  <p className="estudo-hero-subtitle mt-4 mb-6">
                    Mapas mentais ilustrados, organizados matéria por matéria, criados pelo time do Barreto Advocacia em Brasília para você revisar Penal, Processo Penal, Constitucional, Civil, Trabalho e muito mais em bem menos tempo.
                  </p>

                  <ul className="estudo-bullets mb-8 border-l border-accent-primary/20 pl-4">
                    <li><CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" /><span>200+ mapas penais cobrindo parte geral, parte especial e leis penais especiais.</span></li>
                    <li><CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" /><span>Disciplinas essenciais: Administrativo, Constitucional, Civil, Processo Civil, Trabalho, Tributário, Previdenciário, Eleitoral e mais.</span></li>
                    <li><CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" /><span>Conteúdo direto ao ponto para revisar na véspera de prova, OAB ou concurso.</span></li>
                    <li><CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" /><span>Mapas produzidos por estudantes e estagiários do Barreto, orientados por advogados que atuam diariamente em casos reais.</span></li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      id="estudo-hero-cta-principal"
                      onClick={() => {
                        trackGenerateLead('estudo_hero');
                        scrollToSection('materiais');
                      }}
                      className="estudo-btn-primary py-4 px-8 text-[1.05rem]"
                    >
                      <Sparkles className="w-4 h-4" /> Quero ver os mapas
                    </button>
                    <button
                      id="estudo-hero-cta-secundario"
                      onClick={() => scrollToSection('problema')}
                      className="estudo-btn-secondary py-4 px-6"
                    >
                      Entenda como funciona
                    </button>
                  </div>
                </div>
              </div>

              {/* Imagem ilustrativa */}
              <div className="reveal-on-scroll lg:flex items-center justify-center p-4">
                <img 
                  src="https://picsum.photos/seed/direito-mapas-hero/640/480" 
                  alt="Mapas mentais de Direito exibidos em um tablet sobre a mesa"
                  className="rounded-3xl shadow-2xl border-4 border-white/10 w-full object-cover aspect-[4/3] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. O PROBLEMA ─────────────────────────────────────────────────────── */}
        <section id="problema" className="estudo-section border-b border-[#C5A880]/10 bg-bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center reveal-on-scroll">
            <h2 className="estudo-section-title text-4xl mb-6 text-text-primary">
              Você estuda horas e sente que o conteúdo some da cabeça?
            </h2>
            <p className="estudo-section-desc max-w-2xl mx-auto text-[1.1rem]">
              Muitos estudantes de Direito e concurseiros vivem a mesma rotina: PDFs gigantes, aulas longas, centenas de artigos de lei… mas, na hora da prova, parece que tudo se mistura. Falta um jeito visual de organizar o conteúdo e revisar rápido o que realmente cai.
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
              {[
                {texto: 'Dificuldade para lembrar a sequência de artigos e incisos.'},
                {texto: 'Pouco tempo para revisar tudo antes das provas ou da OAB.'},
                {texto: 'Sensação de estar sempre recomeçando do zero a cada matéria.'}
              ].map((dor, i) => (
                <div key={i} className="bg-bg-secondary p-6 border border-[#C5A880]/20 rounded-2xl shadow-sm">
                  <div className="text-red-500 mb-3"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                  <p className="text-text-secondary text-sm">{dor.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. COMO RESOLVEMOS ISSO ───────────────────────────────────────────── */}
        <section id="como-funciona" className="estudo-section liquid-glass-section relative">
          <div className="estudo-section-radial opacity-50" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 reveal-on-scroll">
              <h2 className="estudo-section-title title-highlight">Mapas mentais que transformam lei seca em esquemas claros</h2>
              <p className="estudo-section-desc max-w-2xl mx-auto mt-4 text-[1.05rem]">
                Nossos materiais não são resumos soltos. São mapas desenhados para você enxergar a matéria inteira em poucas páginas, com destaques visuais, cores e estruturas pensadas para memorização.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  icon: <Eye className="w-8 h-8 text-accent-primary" />, 
                  t: 'Visual', 
                  d: 'Cada mapa organiza artigos, parágrafos, prazos e exceções em blocos visuais, facilitando a criação de associações na sua memória.' 
                },
                { 
                  icon: <Layers className="w-8 h-8 text-accent-primary" />, 
                  t: 'Organizado por prova', 
                  d: 'As disciplinas e leis mais cobradas em concursos e na OAB vêm agrupadas para você saber por onde começar e o que revisar primeiro.' 
                },
                { 
                  icon: <Focus className="w-8 h-8 text-accent-primary" />, 
                  t: 'Conectado à prática', 
                  d: 'Os mapas são produzidos por estudantes e estagiários do Barreto, com revisão de advogados que lidam com esses temas na prática forense.' 
                },
              ].map(beneficio => (
                <div key={beneficio.t} className="liquid-glass-card hover-lift reveal-on-scroll p-8 text-center flex flex-col items-center gap-4">
                  <div className="liquid-glass-icon p-4 bg-accent-primary/10 rounded-full">{beneficio.icon}</div>
                  <h3 className="font-bold text-text-primary text-xl leading-snug">{beneficio.t}</h3>
                  <p className="text-text-secondary text-[0.95rem] leading-relaxed">{beneficio.d}</p>
                </div>
              ))}
            </div>

            <div className="reveal-on-scroll w-full flex justify-center">
              <img 
                src="https://picsum.photos/seed/estudo-direito-1/1200/300" 
                alt="Banner representativo das faixas de mapas em mesa de estudo"
                className="w-full h-auto object-cover max-h-64 rounded-3xl border border-[#C5A880]/20 shadow-xl opacity-90"
              />
            </div>
          </div>
        </section>

        {/* ── 4. VITRINE DE MATERIAIS ───────────────────────────────────────────── */}
        <section id="materiais" className="estudo-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 reveal-on-scroll">
              <h2 className="estudo-section-title title-highlight">Escolha o material ideal para a sua fase</h2>
              <p className="estudo-section-desc max-w-3xl mx-auto mt-5 text-[1.1rem]">
                Você pode começar pelo pacote completo de Penal ou montar seu próprio kit com as disciplinas que mais precisa reforçar agora. Nesta primeira versão, estes são os materiais que o Barreto Advocacia vai disponibilizar na Hotmart:
              </p>
            </div>

            <div className="estudo-vitrine-grid">
              {PRODUTOS.map(produto => (
                <div key={produto.id} className="reveal-on-scroll">
                  <ProdutoCard produto={produto} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. POR QUE ESTUDAR COM O BARRETO ──────────────────────────────────── */}
        <section id="por-que" className="estudo-section bg-[#111] dark:bg-[#080808] border-y border-[#C5A880]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-on-scroll">
                <span className="text-accent-primary font-bold tracking-widest text-sm uppercase mb-3 block">Sobre o Material</span>
                <h2 className="estudo-section-title title-highlight mb-5">
                  Não é só mais um material genérico de internet
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8 text-[1.1rem]">
                  Há muitos mapas mentais por aí, mas poucos são criados dentro de um escritório que respira Direito todos os dias. No Barreto Advocacia, os mapas nascem da combinação entre a necessidade dos estudantes e a visão prática de quem atua em casos reais em Brasília.
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { t: 'Visão de quem está na faculdade', d: 'Dois estudantes do nosso time, que também são estagiários do escritório, organizam os conteúdos como gostariam de ter recebido no primeiro dia de curso.' },
                    { t: 'Revisão de advogados', d: 'Os esquemas passam por revisão de advogados do Barreto, garantindo rigor técnico e alinhamento com a jurisprudência mais relevante.' },
                    { t: 'Foco em provas e prática', d: 'Os mapas destacam o que cai com frequência em provas e também o que mais aparece na rotina dos processos.' },
                  ].map(item => (
                    <div key={item.t} className="flex gap-4">
                      <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-accent-primary" /></div>
                      <div>
                        <h4 className="font-bold text-text-primary text-[1.05rem]">{item.t}</h4>
                        <p className="text-text-secondary text-sm mt-1">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placeholder da equipe */}
              <div className="reveal-on-scroll hidden lg:block">
                <img 
                  src="https://picsum.photos/seed/equipe-advocacia/600/700" 
                  alt="Membros da equipe de advocacia conversando" 
                  className="w-full h-auto rounded-3xl object-cover shadow-2xl border border-white/5"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. PARA QUEM É ────────────────────────────────────────────────────── */}
        <section id="para-quem" className="estudo-section liquid-glass-section">
          <div className="estudo-section-radial" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 reveal-on-scroll">
              <h2 className="estudo-section-title title-highlight">Para quem estes mapas foram pensados</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { t: 'Estudantes de Direito', c: 'Que querem chegar nas provas com a matéria enxuta e revisada, sem depender só de textos enormes e sublinhados.', icon: <GraduationCap className="w-10 h-10 text-accent-primary" /> },
                { t: 'Concurseiros e OAB', c: 'Que precisam revisar muitas disciplinas ao mesmo tempo e querem um mapa visual do que está mais sendo cobrado.', icon: <BookOpen className="w-10 h-10 text-accent-primary" /> },
                { t: 'Estagiários e advogados', c: 'Que desejam organizar o raciocínio jurídico de cada área para usar no dia a dia do escritório.', icon: <Briefcase className="w-10 h-10 text-accent-primary" /> },
              ].map(item => (
                <div key={item.t} className="liquid-glass-card hover-lift reveal-on-scroll p-8 text-center flex flex-col items-center">
                   <div className="mb-5 bg-bg-secondary p-4 rounded-3xl">{item.icon}</div>
                   <h3 className="font-bold text-lg mb-3">{item.t}</h3>
                   <p className="text-text-secondary text-sm leading-relaxed">{item.c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. DEPOIMENTOS ─────────────────────────────────────────────────────── */}
        <section id="depoimentos" className="estudo-section bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 reveal-on-scroll">
              <h2 className="estudo-section-title title-highlight">O que quem já usou o método comenta</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* @TODO: SUBSTITUIR ESTES DEPOIMENTOS POR TEXTOS E PESSOAS REAIS QUANDO ESTIVEREM DISPONÍVEIS */}
              {[
                { nome: 'Estudante A.', curso: 'Universitário', texto: 'Nunca tinha conseguido revisar tanta coisa em tão pouco tempo. Os mapas de Penal salvaram minha preparação para a prova.' },
                { nome: 'Aluno B.', curso: 'Exame de Ordem', texto: 'Gostei do fato de ser material feito por quem está no escritório. Sinto que conecta melhor com os casos práticos e me ajudou na 2ª fase.' },
                { nome: 'Aluna C.', curso: 'Concurseira', texto: 'Usei os mapas para a faculdade e eles também serviram perfeitamente de base para minhas revisões de reta final de concurso. Maravilhoso!' },
              ].map(dep => (
                <div key={dep.nome} className="liquid-glass-card testimonial-quote-bg hover-lift reveal-on-scroll p-8 flex flex-col gap-4 border border-[#C5A880]/10">
                  <div className="flex gap-1 text-amber-400" aria-label="5 estrelas">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-text-secondary text-[0.95rem] italic leading-relaxed relative z-10">"{dep.texto}"</p>
                  <div className="mt-auto pt-4 border-t border-text-primary/10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#C5A880]/20 rounded-full flex items-center justify-center font-bold text-accent-primary">{dep.nome[0]}</div>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">{dep.nome}</p>
                      <p className="text-text-muted text-[0.7rem] uppercase tracking-wider">{dep.curso}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ─────────────────────────────────────────────────────────────── */}
        <section id="faq" className="estudo-section">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 reveal-on-scroll">
              <h2 className="estudo-section-title title-highlight">Perguntas frequentes</h2>
              <p className="text-text-secondary mt-3">Tire todas as suas dúvidas sobre acesso e conteúdo dos materiais.</p>
            </div>
            <div className="flex flex-col gap-4 reveal-on-scroll">
              {FAQ_ITEMS.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CTA FINAL ───────────────────────────────────────────────────────── */}
        <section id="cta-final" className="estudo-section estudo-cta-final relative overflow-hidden mt-6">
          <div className="estudo-cta-radial opacity-70" aria-hidden="true" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="liquid-glass-card reveal-on-scroll p-10 sm:p-14 border border-[#C5A880]/40 shadow-2xl">
              <div className="relative z-10">
                <span className="text-5xl mb-6 block" role="img" aria-label="Foco">🚀</span>
                <h2 className="estudo-section-title title-highlight mb-6">
                  Comece hoje a estudar Direito com mais clareza e menos confusão
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8 text-[1.1rem]">
                  Escolha o material que mais faz sentido para a sua fase ou comece pelo pacote de Penal. Em poucos minutos você recebe o acesso pela Hotmart e já pode abrir seus primeiros mapas.
                </p>
                <div className="flex justify-center">
                  <button
                    id="estudo-cta-final-btn"
                    onClick={() => {
                      trackGenerateLead('estudo_cta_final');
                      scrollToSection('materiais');
                    }}
                    className="estudo-btn-primary text-lg px-10 py-5 w-full sm:w-auto font-bold uppercase tracking-wide"
                  >
                    Ver materiais e comprar na Hotmart
                  </button>
                </div>
                <p className="text-xs text-text-muted mt-8 italic max-w-lg mx-auto">
                  Aviso ético: os materiais têm caráter exclusivamente educacional, desenvolvidos com foco na preparação para OAB, provas e rotina acadêmica. Não promovem ganho ou promessa garantida.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
