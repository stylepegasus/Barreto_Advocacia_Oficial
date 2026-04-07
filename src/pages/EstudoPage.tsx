import { useEffect, useRef, useState } from 'react';
import { SEO } from '../components/SEO';
import { trackGenerateLead } from '../lib/ga';
import {
  BookOpen, Scale, Users, Brain, Star, ChevronDown, ChevronUp,
  CheckCircle2, Sparkles, GraduationCap, Briefcase, Award, Download, Clock, RefreshCw
} from 'lucide-react';
import './estudo.css';

// ── Dados dos produtos ─────────────────────────────────────────────────────────
const PRODUTOS = [
  {
    id: 'penal_200',
    slug: 'estudo_200_mapas_penal',
    nome: '200+ Mapas Penais – Direito Penal',
    descricao:
      'Kit com mais de 200 mapas mentais de Direito Penal, cobrindo parte geral, parte especial e principais leis penais especiais cobradas em concursos e OAB. Ideal para revisões intensivas.',
    icone: '⚖️',
    destaque: true,
    // SUBSTITUA esta URL pelo link real da Hotmart antes de publicar
    hotmartUrl: '#',
  },
  {
    id: 'adm',
    slug: 'estudo_dir_administrativo',
    nome: 'Direito Administrativo',
    descricao:
      'Mapas mentais das principais leis e temas de Direito Administrativo para concursos e faculdade, com foco em organização e memorização.',
    icone: '🏛️',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'const',
    slug: 'estudo_dir_constitucional',
    nome: 'Direito Constitucional',
    descricao:
      'Mapeamento completo da Constituição Federal — direitos fundamentais, organização do Estado e controle de constitucionalidade em esquemas visuais.',
    icone: '📜',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'eleit',
    slug: 'estudo_dir_eleitoral',
    nome: 'Direito Eleitoral',
    descricao:
      'Mapas que cobrem o Código Eleitoral, partidos, financiamento, crimes eleitorais e jurisprudência do TSE mais cobrada em provas.',
    icone: '🗳️',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'empres',
    slug: 'estudo_dir_empresarial',
    nome: 'Direito Empresarial',
    descricao:
      'Esquemas visuais sobre sociedades, contratos mercantis, recuperação judicial e falência — o que mais cai em OAB segunda fase e concursos.',
    icone: '🏢',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'memo',
    slug: 'estudo_manual_memorizacao',
    nome: 'Manual da Memorização',
    descricao:
      'Guia prático com técnicas de memorização aplicadas ao estudo jurídico, para aproveitar ao máximo seus mapas e resumos.',
    icone: '🧠',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'prev',
    slug: 'estudo_dir_previdenciario',
    nome: 'Direito Previdenciário',
    descricao:
      'Mapas de benefícios, segurados, custeio e jurisprudência do STJ/STF sobre o RGPS — essencial para INSS e carreiras trabalhistas.',
    icone: '🛡️',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'trib',
    slug: 'estudo_dir_tributario',
    nome: 'Direito Tributário',
    descricao:
      'Visão geral do CTN, espécies tributárias, competência, imunidades e obrigação tributária em mapas de fácil revisão.',
    icone: '💰',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'civil',
    slug: 'estudo_dir_civil',
    nome: 'Direito Civil',
    descricao:
      'Pessoas, negócios jurídicos, obrigações, contratos, responsabilidade civil e família mapeados com hierarquia lógica clara.',
    icone: '📋',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'proc_civil',
    slug: 'estudo_dir_proc_civil',
    nome: 'Direito Processual Civil',
    descricao:
      'Mapas do CPC/2015: fases do processo, recursos, competência, tutelas e execução — do básico ao avançado de forma visual.',
    icone: '⚙️',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'penal2',
    slug: 'estudo_dir_penal',
    nome: 'Direito Penal',
    descricao:
      'Versão compacta dos principais institutos penais: teoria do crime, penas, extinção da punibilidade e leis especiais essenciais.',
    icone: '🔒',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'proc_penal',
    slug: 'estudo_dir_proc_penal',
    nome: 'Direito Processual Penal',
    descricao:
      'Mapas do CPP: inquérito, ação penal, competência, provas, medidas cautelares, recursos e habeas corpus de forma esquematizada.',
    icone: '🔍',
    destaque: false,
    hotmartUrl: '#',
  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'Como recebo os materiais após a compra?',
    a: 'Após a confirmação do pagamento, você recebe acesso imediato pela plataforma Hotmart. O link de acesso é enviado automaticamente para o e-mail cadastrado.',
  },
  {
    q: 'Por quanto tempo terei acesso?',
    a: 'O acesso é válido por 12 meses a partir da data de compra (período sujeito a revisão conforme política da Hotmart e do escritório).',
  },
  {
    q: 'Posso baixar e imprimir os mapas?',
    a: 'Sim. Os materiais estão disponíveis em formato PDF de alta resolução, adequados para impressão em qualquer tamanho.',
  },
  {
    q: 'Os materiais são atualizados?',
    a: 'Sim. Correções e atualizações decorrentes de mudanças legislativas relevantes são incorporadas ao material durante o período de acesso.',
  },
  {
    q: 'Os mapas substituem o estudo da lei seca ou das doutrinas?',
    a: 'Não. Os mapas são ferramentas de revisão e organização, complementando — e não substituindo — o estudo aprofundado da legislação e doutrina.',
  },
  {
    q: 'Quem produz os mapas mentais?',
    a: 'Os mapas são elaborados por estudantes de Direito e estagiários do Barreto Advocacia, orientados por advogados que atuam diariamente em Brasília.',
  },
  {
    q: 'Esses materiais servem para faculdade, OAB e concursos?',
    a: 'Sim. O conteúdo é organizado para atender diferentes perfis: graduação, OAB (1ª e 2ª fase) e concursos públicos jurídicos em geral.',
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
function scrollToVitrine() {
  document.getElementById('vitrine')?.scrollIntoView({ behavior: 'smooth' });
}

function handleComprar(slug: string, url: string) {
  trackGenerateLead(slug);
  // SUBSTITUA '#' pela URL real da Hotmart antes de publicar
  if (url && url !== '#') {
    window.open(url, '_blank', 'noopener,noreferrer');
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
    <div className={`estudo-produto-card liquid-glass-card hover-lift flex flex-col ${produto.destaque ? 'estudo-produto-destaque' : ''}`}>
      {produto.destaque && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-[#C5A880] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap z-20">
          ✨ Mais vendido
        </div>
      )}
      <div className="relative z-10 p-6 flex flex-col flex-1">
        <span className="text-4xl mb-4 block" role="img" aria-label={produto.nome}>{produto.icone}</span>
        <h3 className="font-bold text-text-primary text-lg mb-2 leading-snug">{produto.nome}</h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">{produto.descricao}</p>
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
        title="Estudos e Mapas Mentais de Direito"
        description="Mapas mentais e materiais de estudo em Direito Penal, Constitucional, Administrativo, Civil, Trabalho e mais, produzidos pelo Barreto Advocacia em Brasília para estudantes e concurseiros."
        canonical="https://advocaciabarreto.com/estudo"
      />

      <div className="estudo-page">

        {/* ── HERO ───────────────────────────────────────────────────────────── */}
        <section id="estudo-home" ref={heroRef} className="estudo-hero-section">
          {/* Parallax Background */}
          <div ref={parallaxRef} className="estudo-hero-bg" aria-hidden="true" />
          {/* Overlay */}
          <div className="estudo-hero-overlay" aria-hidden="true" />

          <div className="estudo-hero-content max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Card Glass */}
              <div className="estudo-hero-card liquid-glass-card reveal-on-scroll">
                <div className="relative z-10 p-8 sm:p-10">
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent-primary mb-4 opacity-90">
                    Barreto Advocacia • Brasília
                  </span>
                  <h1 className="estudo-hero-title font-serif">
                    Mapas mentais de Direito feitos por quem vive a prática em Brasília
                  </h1>
                  <p className="estudo-hero-subtitle mt-4 mb-6">
                    Estude para a faculdade, OAB ou concursos com mapas ilustrados de Direito produzidos pelo time do Barreto Advocacia — escritório referência em Brasília — focados em revisão rápida, memorização e entendimento prático.
                  </p>

                  <ul className="estudo-bullets mb-8">
                    <li><CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" /><span>200+ mapas de Direito Penal, Processo Penal, Constitucional, Administrativo e muito mais.</span></li>
                    <li><CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" /><span>Organização por matérias e leis especiais mais cobradas em provas.</span></li>
                    <li><CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" /><span>Conteúdo direto ao ponto, pronto para revisar na véspera sem perder detalhes importantes.</span></li>
                    <li><CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" /><span>Formato digital em PDF, para acessar no celular, tablet ou imprimir.</span></li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      id="estudo-hero-cta-principal"
                      onClick={() => {
                        trackGenerateLead('estudo_hero');
                        scrollToVitrine();
                      }}
                      className="estudo-btn-primary"
                    >
                      <Sparkles className="w-4 h-4" /> Quero estudar com os mapas
                    </button>
                    <button
                      id="estudo-hero-cta-secundario"
                      onClick={scrollToVitrine}
                      className="estudo-btn-secondary"
                    >
                      Ver todos os materiais disponíveis
                    </button>
                  </div>
                </div>
              </div>

              {/* Ilustração Hero */}
              <div className="estudo-hero-illustration reveal-on-scroll hidden lg:flex items-center justify-center">
                <div className="estudo-illustration-card liquid-glass-card p-8 text-center">
                  <div className="text-8xl mb-4" role="img" aria-label="Mapas mentais">📚</div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {['Penal', 'Civil', 'Constitucional', 'Administrativo', 'Tributário', 'Processual'].map(m => (
                      <span key={m} className="estudo-badge">
                        {m}
                      </span>
                    ))}
                  </div>
                  <p className="text-text-muted text-xs mt-4">12 disciplinas jurídicas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARA QUEM É ───────────────────────────────────────────────────── */}
        <section id="para-quem" className="estudo-section liquid-glass-section">
          <div className="estudo-section-radial" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="estudo-section-title title-highlight">Para quem são esses materiais?</h2>
              <p className="estudo-section-desc max-w-2xl mx-auto mt-4">
                Os mapas mentais do Barreto Advocacia foram pensados para estudantes de Direito, estagiários e concurseiros que precisam revisar grandes volumes de conteúdo em pouco tempo, sem abrir mão de qualidade técnica. Se você sente que estuda muito, mas esquece rápido, esse material é para você.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8 text-accent-primary" />,
                  titulo: 'Faculdade de Direito',
                  texto: 'Para quem quer chegar às provas já com a matéria organizada em esquemas e revisões rápidas.',
                },
                {
                  icon: <Scale className="w-8 h-8 text-accent-primary" />,
                  titulo: 'Concursos e carreiras jurídicas',
                  texto: 'Para quem busca mapear as principais leis e temas cobrados nas provas objetivas e discursivas.',
                },
                {
                  icon: <Briefcase className="w-8 h-8 text-accent-primary" />,
                  titulo: 'Estagiários e futuros advogados',
                  texto: 'Para quem já atua no dia a dia do Direito e precisa conectar teoria e prática com mais clareza.',
                },
              ].map(item => (
                <div key={item.titulo} className="liquid-glass-card hover-lift reveal-on-scroll p-7 flex flex-col gap-4">
                  <div className="liquid-glass-icon">{item.icon}</div>
                  <h3 className="font-bold text-text-primary text-lg leading-snug">{item.titulo}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VITRINE DOS MATERIAIS ─────────────────────────────────────────── */}
        <section id="vitrine" className="estudo-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="estudo-section-title title-highlight">Materiais disponíveis</h2>
              <p className="estudo-section-desc max-w-2xl mx-auto mt-4">
                Comece com o pacote completo de mapas mentais ou escolha as disciplinas que mais precisa reforçar agora. Os materiais estão disponíveis na Hotmart com acesso imediato após a compra.
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

        {/* ── POR QUE BARRETO ADVOCACIA ─────────────────────────────────────── */}
        <section id="por-que" className="estudo-section liquid-glass-section">
          <div className="estudo-section-radial" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-on-scroll">
                <h2 className="estudo-section-title title-highlight mb-5">
                  Conteúdo criado dentro de um escritório que respira Direito todos os dias
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Os mapas são elaborados por estudantes de Direito e estagiários do Barreto Advocacia, orientados por advogados que atuam diariamente em causas criminais, cíveis e trabalhistas em Brasília. Você estuda com material que conecta a teoria das provas com a prática dos tribunais.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: <Award className="w-5 h-5 text-accent-primary" />, texto: 'Escritório com atuação ativa em Brasília/DF' },
                    { icon: <Brain className="w-5 h-5 text-accent-primary" />, texto: 'Equipe que estuda e pratica Direito ao mesmo tempo' },
                    { icon: <BookOpen className="w-5 h-5 text-accent-primary" />, texto: 'Foco em provas reais, não em teoria abstrata' },
                  ].map(item => (
                    <div key={item.texto} className="flex items-start gap-3">
                      <div className="liquid-glass-icon shrink-0">{item.icon}</div>
                      <p className="text-text-primary font-medium pt-2">{item.texto}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini bios dos estudantes */}
              <div className="flex flex-col gap-5 reveal-on-scroll">
                {[
                  {
                    nome: 'Estudante A',
                    cargo: 'Estagiário • Barreto Advocacia',
                    frase: '"Uso os mapas para revisar Penal antes de cada audiência. Ajuda demais a lembrar o que lemos semanas atrás."',
                    emoji: '👨‍💼',
                  },
                  {
                    nome: 'Estudante B',
                    cargo: 'Estagiária • Barreto Advocacia',
                    frase: '"Criei o hábito de fechar matérias com um mapa. Meu rendimento nas provas da faculdade melhorou muito."',
                    emoji: '👩‍💼',
                  },
                ].map(p => (
                  <div key={p.nome} className="liquid-glass-card testimonial-quote-bg hover-lift p-6 flex gap-4 items-start">
                    <span className="text-4xl" role="img" aria-label={p.nome}>{p.emoji}</span>
                    <div>
                      <p className="text-text-secondary text-sm italic leading-relaxed mb-2 relative z-10">{p.frase}</p>
                      <p className="text-accent-primary font-semibold text-sm">{p.nome}</p>
                      <p className="text-text-muted text-xs">{p.cargo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BÔNUS E EXPERIÊNCIA ───────────────────────────────────────────── */}
        <section id="bonus" className="estudo-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="estudo-section-title title-highlight">Bônus e experiência de estudo</h2>
              <p className="estudo-section-desc max-w-xl mx-auto mt-4">
                Além do conteúdo, você recebe uma experiência de estudo pensada para quem tem pouco tempo mas quer resultados reais.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Download className="w-6 h-6 text-accent-primary" />, titulo: 'Acesso imediato', texto: 'Comprou, recebeu. Acesso na hora pela Hotmart.' },
                { icon: <Clock className="w-6 h-6 text-accent-primary" />, titulo: 'Estude pelo celular', texto: 'PDF otimizado para visualização em qualquer dispositivo.' },
                { icon: <RefreshCw className="w-6 h-6 text-accent-primary" />, titulo: 'Atualizações inclusas', texto: 'Mudanças legislativas incorporadas durante o período de acesso.' },
                { icon: <Users className="w-6 h-6 text-accent-primary" />, titulo: 'Suporte do escritório', texto: 'Dúvidas sobre o material? A equipe está disponível por e-mail.' },
              ].map(item => (
                <div key={item.titulo} className="liquid-glass-card hover-lift reveal-on-scroll p-6 text-center flex flex-col items-center gap-3">
                  <div className="liquid-glass-icon">{item.icon}</div>
                  <h3 className="font-bold text-text-primary text-base">{item.titulo}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ───────────────────────────────────────────────────── */}
        <section id="depoimentos" className="estudo-section liquid-glass-section">
          <div className="estudo-section-radial" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="estudo-section-title title-highlight">O que dizem nossos alunos</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { nome: 'Lucas M.', curso: 'Estudante de Direito • Brasília', texto: 'Passei a revisar Penal em metade do tempo usando os mapas. Fica muito mais fácil ver o conjunto da lei em uma página só.' },
                { nome: 'Mariana O.', curso: 'Concurseira • Carreira Policial', texto: 'Fui nas provas muito mais segura depois de usar os mapas para fechar cada matéria. O de Administrativo é incrível.' },
                { nome: 'Rafael S.', curso: 'Estagiário • Escritório em DF', texto: 'O Manual da Memorização mudou minha rotina de estudos. As técnicas funcionam mesmo para volumes grandes de conteúdo.' },
              ].map(dep => (
                <div key={dep.nome} className="liquid-glass-card testimonial-quote-bg hover-lift reveal-on-scroll p-7 flex flex-col gap-3">
                  <div className="flex gap-1 text-amber-400" aria-label="5 estrelas">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-text-secondary text-sm italic leading-relaxed relative z-10">"{dep.texto}"</p>
                  <div className="mt-auto pt-3 border-t border-text-primary/10">
                    <p className="font-semibold text-text-primary text-sm">{dep.nome}</p>
                    <p className="text-text-muted text-xs">{dep.curso}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section id="faq" className="estudo-section">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="estudo-section-title title-highlight">Perguntas frequentes</h2>
            </div>
            <div className="flex flex-col gap-4">
              {FAQ_ITEMS.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
            <p className="text-center text-text-muted text-xs mt-8 max-w-xl mx-auto">
              ⚠️ Os materiais têm caráter exclusivamente educacional e não constituem consultoria jurídica ou promessa de aprovação em provas.
            </p>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
        <section id="cta-final" className="estudo-section estudo-cta-final">
          <div className="estudo-cta-radial" aria-hidden="true" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="liquid-glass-card reveal-on-scroll p-10 sm:p-14">
              <div className="relative z-10">
                <span className="text-5xl mb-4 block" role="img" aria-label="Mapas">📖</span>
                <h2 className="estudo-section-title title-highlight mb-4">
                  Comece hoje a estudar com mapas que realmente conversam com a prática
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Escolha o material ideal para sua fase ou comece pelo kit completo de mapas penais. Em poucos minutos você recebe acesso digital pela Hotmart.
                </p>
                <p className="text-xs text-text-muted mb-8 italic">
                  Lançamento da área de estudos do Barreto Advocacia — materiais com valor promocional de primeira turma. Valores e condições podem mudar conforme novos conteúdos forem adicionados.
                </p>
                <button
                  id="estudo-cta-final-btn"
                  onClick={() => {
                    trackGenerateLead('estudo_cta_final');
                    scrollToVitrine();
                  }}
                  className="estudo-btn-primary text-base px-8 py-4"
                >
                  <BookOpen className="w-5 h-5" /> Ver materiais e comprar na Hotmart
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
