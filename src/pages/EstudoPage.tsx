import { useEffect, useRef, useState } from 'react';
import { SEO } from '../components/SEO';
import { trackGenerateLead } from '../lib/ga';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './estudo.css';

// ── Dados dos produtos (Mantidos) ─────────────────────────────────────────────
const PRODUTOS = [
  {
    id: 'penal_200',
    slug: 'estudo_200_mapas_penal',
    nome: '200+ Mapas Penais – Direito Penal',
    descricao: 'Tudo o que você precisa revisar em Penal, organizado em mais de 200 mapas.',
    idealPara: 'quem está levando Penal a sério para provas.',
    imagem: 'https://picsum.photos/seed/penal/640/400',
    destaque: true,
    hotmartUrl: '#',
  },
  {
    id: 'const',
    slug: 'estudo_dir_constitucional',
    nome: 'Direito Constitucional',
    descricao: 'Constituição em mapas: direitos, organização do Estado, controle de constitucionalidade.',
    idealPara: 'faculdade, OAB e concursos que cobram muito Constitucional.',
    imagem: 'https://picsum.photos/seed/constitucional/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'adm',
    slug: 'estudo_dir_administrativo',
    nome: 'Direito Administrativo',
    descricao: 'Mapas dos principais temas e leis de Administrativo, poderes, licitações.',
    idealPara: 'provas de tribunais e carreiras jurídicas em geral.',
    imagem: 'https://picsum.photos/seed/administrativo/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'civil',
    slug: 'estudo_dir_civil',
    nome: 'Direito Civil',
    descricao: 'Pessoas, obrigações, contratos, responsabilidade civil e família estruturados.',
    idealPara: 'quem precisa dominar o imenso Código Civil.',
    imagem: 'https://picsum.photos/seed/civil/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'proc_civil',
    slug: 'estudo_dir_proc_civil',
    nome: 'Direito Processual Civil',
    descricao: 'Mapas do CPC/2015: fases do processo, recursos e execução.',
    idealPara: 'visualizar o andamento das fatias do processo.',
    imagem: 'https://picsum.photos/seed/processo_civil/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'proc_penal',
    slug: 'estudo_dir_proc_penal',
    nome: 'Direito Processual Penal',
    descricao: 'Inquérito, ação penal, provas, prisões e ritos organizados visualmente.',
    idealPara: 'concursos e aprimoramento da prática criminal.',
    imagem: 'https://picsum.photos/seed/processo_penal/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'trib',
    slug: 'estudo_dir_tributario',
    nome: 'Direito Tributário',
    descricao: 'Visão geral do CTN, espécies tributárias e competência em mapas.',
    idealPara: 'estudantes que buscam clareza nas alíquotas e princípios.',
    imagem: 'https://picsum.photos/seed/tributario/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'prev',
    slug: 'estudo_dir_previdenciario',
    nome: 'Direito Previdenciário',
    descricao: 'Mapas de benefícios, segurados e custeio — essencial para provas.',
    idealPara: 'carreiras do INSS e previdenciárias.',
    imagem: 'https://picsum.photos/seed/previdenciario/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'empres',
    slug: 'estudo_dir_empresarial',
    nome: 'Direito Empresarial',
    descricao: 'Sociedades, títulos de crédito, falência e recuperação organizados.',
    idealPara: 'quem trava com a quantidade de detalhes de Empresarial.',
    imagem: 'https://picsum.photos/seed/empresarial/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'eleit',
    slug: 'estudo_dir_eleitoral',
    nome: 'Direito Eleitoral',
    descricao: 'Mapas focados em princípios, sistemas, inelegibilidades e crimes.',
    idealPara: 'concursos eleitorais e prática política.',
    imagem: 'https://picsum.photos/seed/eleitoral/640/400',
    destaque: false,
    hotmartUrl: '#',
  },
  {
    id: 'memo',
    slug: 'estudo_manual_memorizacao',
    nome: 'Manual da Memorização',
    descricao: 'Guia prático com técnicas aplicadas ao estudo jurídico.',
    idealPara: 'reter informações complexas para avaliações.',
    imagem: 'https://picsum.photos/seed/memorizacao/640/400',
    destaque: false,
    hotmartUrl: '#',
  }
];

// ── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'Como recebo os materiais?',
    a: 'Você receberá o acesso por e-mail, via Hotmart, logo após a confirmação do pagamento.',
  },
  {
    q: 'Por quanto tempo terei acesso?',
    a: 'Seu acesso fica disponível na plataforma por 12 meses. Você pode baixar os PDFs durante este período.',
  },
  {
    q: 'Posso imprimir?',
    a: 'Sim. Os PDFs são otimizados para leitura em telas, mas ficam ótimos impressos.',
  },
  {
    q: 'Serve para faculdade, OAB e concursos?',
    a: 'Sim, a estrutura dos mapas foca diretamente no que é essencial nestas três jornadas.',
  },
  {
    q: 'Os mapas substituem a lei seca ou a doutrina?',
    a: 'Não. Eles são a melhor ferramenta para revisão e memorização rápida, não substituindo a base principal.',
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
    alert('As vendas iniciarão em breve. Redirecionamento indisponível neste momento.');
  }
}

// ── Componente FAQ Item ────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="estudo-faq-item liquid-glass-card p-6 cursor-pointer mb-4" onClick={() => setOpen(o => !o)}>
      <div className="flex items-start justify-between gap-4">
        <p className="font-semibold text-text-primary text-xl leading-snug">{q}</p>
        <span className="text-accent-primary shrink-0">
          {open ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </span>
      </div>
      {open && (
        <p className="mt-4 text-text-secondary text-lg leading-relaxed border-t border-text-primary/10 pt-4">
          {a}
        </p>
      )}
    </div>
  );
}

// ── Componente Card de Produto ─────────────────────────────────────────────────
function ProdutoCard({ produto }: { produto: typeof PRODUTOS[number] }) {
  return (
    <div className={`estudo-produto-card liquid-glass-card hover-lift flex flex-col overflow-hidden h-full ${produto.destaque ? 'estudo-produto-destaque shadow-xl' : ''}`}>
      {produto.destaque && (
        <div className="absolute top-4 right-4 bg-accent-primary text-[#0d0d0d] text-sm font-bold px-4 py-1.5 rounded-full z-20">
          🔥 Mais Procurado
        </div>
      )}
      <img
        src={produto.imagem}
        alt={`Material: ${produto.nome}`}
        className="w-full h-56 object-cover border-b border-[#C5A880]/10"
        loading="lazy"
      />
      <div className="relative z-10 p-8 flex flex-col flex-1">
        <h3 className="font-bold text-text-primary text-2xl mb-3 leading-tight">{produto.nome}</h3>
        <p className="text-text-secondary text-base leading-relaxed mb-6 flex-1">{produto.descricao}</p>
        <p className="text-text-primary text-sm font-semibold mb-8">
          <span className="text-accent-primary uppercase tracking-wider text-xs mr-2 border border-accent-primary/30 px-2 py-1 rounded-sm">Ideal para:</span>
          {produto.idealPara}
        </p>
        <button
          onClick={() => handleComprar(produto.slug, produto.hotmartUrl)}
          className="estudo-btn-primary w-full text-base py-4"
        >
          Ver detalhes
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

  // Parallax suave
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !parallaxRef.current) return;

    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!heroRef.current || !parallaxRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const offset = rect.top * -0.15;
        parallaxRef.current!.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <SEO
        title="Estudo — Barreto Advocacia"
        description="Mapas de Direito para estudar em menos tempo."
        canonical="https://advocaciabarreto.com/estudo"
      />

      <div className="estudo-page font-sans text-text-primary bg-bg-primary">

        {/* ── 1. HERO ───────────────────────────────────────────── */}
        <section id="hero" ref={heroRef} className="estudo-hero-section relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-[#111] opacity-70" aria-hidden="true" />
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/estudo-hero-adv/1920/1080')] bg-cover bg-center mix-blend-overlay opacity-10" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="liquid-glass-card p-10 md:p-14 border border-[#C5A880]/20 shadow-2xl backdrop-blur-md rounded-[32px]">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-[#C5A880]">
                Mapas de Direito para estudar em menos tempo
              </h1>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                Materiais visuais criados dentro do Barreto Advocacia, em Brasília, para você revisar Penal, Processo Civil, Constitucional e outras matérias sem se afogar em PDFs.
              </p>
              <p className="text-sm md:text-base text-accent-primary font-medium tracking-wide mb-10 uppercase">
                Pensado para faculdade, OAB e concursos — em um formato que seu cérebro entende.
              </p>
              <button
                onClick={() => scrollToSection('materiais')}
                className="estudo-btn-primary text-lg px-8 py-5 rounded-full tracking-wide shadow-lg hover:-translate-y-1 transition-transform w-full md:w-auto"
              >
                Ver materiais de estudo
              </button>
            </div>
          </div>
        </section>

        {/* ── 2. MÉTRICAS ───────────────────────────────────────── */}
        <section className="py-20 bg-bg-primary">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { n: '12+', t: 'Disciplinas', d: 'Das principais áreas cobradas em provas e concursos.' },
              { n: '200+', t: 'Mapas penais', d: 'Parte geral, parte especial e leis especiais.' },
              { n: '1', t: 'Escritório BSB', d: 'Conteúdo produzido dentro do Barreto Advocacia.' },
              { n: '100%', t: 'Digital', d: 'Acesse de onde estiver, no seu ritmo.' },
            ].map(m => (
              <div key={m.n} className="text-center md:text-left flex flex-col gap-2">
                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#C5A880] to-[#8A6D3B]">{m.n}</span>
                <span className="text-xl font-bold uppercase tracking-widest text-text-primary mt-2">{m.t}</span>
                <span className="text-text-secondary leading-relaxed">{m.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. O QUE SÃO ──────────────────────────────────────── */}
        <section className="py-24 bg-bg-secondary border-y border-[#C5A880]/10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">O que são esses materiais?</h2>
            <p className="text-2xl text-text-secondary leading-snug mb-16 max-w-3xl mx-auto">
              São mapas mentais e guias práticos de Direito, organizados por disciplina, para você visualizar o conteúdo inteiro em poucas páginas.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                 "Formato PDF, fácil de ver no celular ou imprimir.",
                 "Organizado para revisões rápidas e véspera de prova.",
                 "Produzido por estudantes e estagiários do Barreto, com revisão de advogados."
              ].map((bullet, i) => (
                <div key={i} className="flex gap-4 p-8 border border-text-primary/10 rounded-[28px] bg-bg-primary">
                  <div className="w-8 h-8 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0 font-bold">✓</div>
                  <p className="text-lg text-text-primary font-medium">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. VITRINE DE MATERIAIS ───────────────────────────── */}
        <section id="materiais" className="py-32 bg-bg-primary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 grid lg:grid-cols-2 gap-8 items-end">
              <div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                  Escolha o que faz sentido para você agora
                </h2>
                <p className="text-xl text-text-secondary">
                  Comece por Penal, Processo Civil ou monte seu próprio combo de disciplinas.
                </p>
              </div>
            </div>
            {/* Grid Rogue Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {PRODUTOS.map(produto => (
                <ProdutoCard key={produto.id} produto={produto} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. POR QUE FOI CRIADO ─────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-bg-primary to-[#111]">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Por que um escritório resolveu fazer mapas mentais?
              </h2>
              <div className="space-y-6 text-xl text-text-secondary leading-relaxed">
                <p>
                  Porque a gente vê todos os dias, na prática, como o Direito é complexo para quem ainda está na graduação ou se preparando para provas.
                </p>
                <p>
                  E montar mapas virou parte do nosso próprio estudo interno. Abrimos essa experiência para você também.
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#C5A880]/30 shadow-[0_0_80px_rgba(197,168,128,0.15)] flex items-center justify-center">
                <span className="text-8xl">💡</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. FAQ ────────────────────────────────────────────── */}
        <section className="py-32 bg-[#0c0c0c]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight">
              Tirando a prova limpa
            </h2>
            <div className="flex flex-col gap-2">
              {FAQ_ITEMS.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA FINAL ──────────────────────────────────────── */}
        <section className="py-32 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#120f0c] border-t border-[#C5A880]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C5A880]/10 via-transparent to-transparent opacity-60" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
              Pronto para ver o Direito em mapas?
            </h2>
            <p className="text-2xl text-text-secondary mb-16 font-light">
              Comece por uma disciplina ou vá direto para o pacote de mapas penais.
            </p>
            <button
              onClick={() => scrollToSection('materiais')}
              className="bg-accent-primary text-[#0d0d0d] text-xl font-bold px-12 py-6 rounded-full hover:bg-white transition-colors duration-300 shadow-[0_10px_40px_rgba(197,168,128,0.3)]"
            >
              Ver materiais de estudo
            </button>
          </div>
        </section>

      </div>
    </>
  );
}
