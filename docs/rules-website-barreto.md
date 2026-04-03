# Regras do Projeto Barreto Advocacia
ATENÇÃO: Leia e siga estas regras em TODO comando. Se não puder seguir alguma, PARE e peça autorização explícita antes de editar qualquer arquivo.

1. O QUE NÃO ALTERAR NUNCA (SEM AUTORIZAÇÃO)
- Todos os textos/copy já aprovados (nomes, descrições, CTAs).
- URLs de WhatsApp, Google Maps, Google Review e redes sociais.
- Estrutura de seções (hero, benefícios, áreas de atuação, time, depoimentos, localização, rodapé).
- Layout geral, proporções e alinhamento entre seções.
- Animações e transições já implementadas (scroll reveal, modais, sticky header).
- Identidade visual (cores dourado/preto, Liquid Glass, tipografia).
- Responsividade já aprovada (mobile-first, grids fluidos).

2. O QUE SÓ ALTERAR COM PLANO APROVADO
- Qualquer mudança visual (imagens de fundo, efeitos, espaçamentos).
- Ajustes de performance (otimização de imagens, lazy loading).
- Adições pequenas (indicadores, ícones, micro-interações).

3. COMO EXECUTAR QUALQUER MUDANÇA
1) Leia este arquivo e `/docs-site-overview.md` (se existir).
2) Proponha um PLANO em 3–5 passos específicos.
3) Mostre DIFFs limitados (máximo 2 arquivos por vez).
4) Só aplique após autorização explícita.
5) Teste em Browser Agent: 360px, 768px, 1440px.
6) Confirme que nada quebrou (sem overflow, sem texto cortado).

4. PERFORMANCE E RESPONSIVIDADE
- Mobile-first sempre.
- Animar apenas `transform` e `opacity`.
- Imagens com `width/height` ou `aspect-ratio`.
- `loading="lazy"` para imagens abaixo da dobra.
- Respeitar `prefers-reduced-motion`.
- Evitar `position: absolute` when `flex/grid` resolve.

5. LINKS E CONTATOS (NÃO ALTERAR)
Telefone oficial: +55 61 99159-1105 (tel:+5561991591105)
E-mail: barretoadvocacia01@gmail.com (mailto:barretoadvocacia01@gmail.com)
WhatsApp Hero: https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0
WhatsApp Áreas: https://api.whatsapp.com/send/?phone=5561991591105&text=Ol%C3%A1%21+Vi+as+%C3%A1reas+de+atua%C3%A7%C3%A3o+no+site+e+gostaria+de+falar+com+um+advogado+especialista.&type=phone_number&app_absent=0
Reunião Presencial: https://api.whatsapp.com/send/?phone=5561991591105&text=Ol%C3%A1%21+Vi+o+site+de+voc%C3%AAs+e+gostaria+de+agendar+uma+reuni%C3%A3o+presencial+com+um+advogado.&type=phone_number&app_absent=0
Reunião Online: https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+e+gostaria+de+marcar+uma+reuni%C3%A3o+online.&type=phone_number&app_absent=0
Google Review: https://search.google.com/local/writereview?placeid=ChIJORpFOFk7WpMR17lKbaOXouk
Google Maps: https://maps.app.goo.gl/4rF6fr6WMpUeTttx6
Facebook: https://www.facebook.com/people/Barreto-Advocacia/61567819823685/
Instagram: https://instagram.com/barretoadv.esp/
LinkedIn: https://www.linkedin.com/in/luis-goncalves336/

TODO link externo: target="_blank" rel="noopener noreferrer"

6. SEÇÕES CRÍTICAS (NÃO REMOVER/ALTERAR)
- Hero (CTAs, telefone, e-mail)
- "Por que devo escolher a Barreto Advocacia?"
- Cards de benefícios (Liquid Glass)
- Áreas de Atuação + CTA específico
- Reunião Presencial/Online
- 10 Anos de Experiência
- Conheça Nosso Time + modais
- Depoimentos + Google Review
- Conheça o Nosso Escritório + mapa
- Rodapé (sem mini-mapa)

7. ANTES DE QUALQUER COMMIT
1) git diff --staged
2) Verificar que só os arquivos esperados mudaram
3) Browser Agent: mobile, tablet, desktop
4) Confirmar Core Web Vitals não pioraram
