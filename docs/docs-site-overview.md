# Overview do Site Barreto Advocacia
LEIA este arquivo antes de qualquer edição. Ele mapeia exatamente a estrutura atual do site.

Estrutura Geral da HOME
1. HEADER FIXO (sticky)
   - Logo "BARRETO ADVOCACIA"
   - Ícone modo claro/escuro
   - Botão WhatsApp (header)

2. HERO
   - Título "Barreto Advocacia"
   - Subtítulo "Compromisso com Direito no Excelência"
   - Áreas: Criminal, Cível, Família, Trabalhista
   - CTA principal WhatsApp
   - Contatos (telefone, email)
   - Indicador de scroll (mouse/dedo)

3. SEÇÃO "Por que devo escolher a Barreto Advocacia?"
   - Cards com benefícios (Liquid Glass effect)

4. SEÇÃO ÁREAS DE ATUAÇÃO
   - 4 cards: Criminal, Cível, Família, Trabalhista
   - CTA específico WhatsApp

5. SEÇÃO REUNIÃO PRESENCIAL / REUNIÃO ONLINE
   - 2 cards lado a lado
   - Cada um com botão WhatsApp específico

6. SEÇÃO "10 Anos de Experiência"
   - Cards numéricos
   - Título "10 Anos de Experiência"

7. SEÇÃO "Conheça Nosso Time"
   - 9 cards com fotos
   - Clique abre modal com Experiência/Formação/Casos

8. SEÇÃO DEPOIMENTOS
   - Cards com avaliações
   - Botão "Avaliar no Google Maps"

9. SEÇÃO "Conheça o Nosso Escritório"
   - Endereço completo
   - Botão "Ver Localização no Google Maps"

10. MAPA GOOGLE MAPS
    - Retangular, responsivo
    - Entre "Conheça o Nosso Escritório" e rodapé

11. RODAPÉ
    - Logo
    - Links rápidos
    - Localização
    - Contato (telefone, email)
    - Ícones redes sociais (FB, IG, LinkedIn)
    - SEM mini-mapa

Identidade Visual (NÃO ALTERAR)
Cores:
- Dourado/preto principal
- Verde WhatsApp
- Efeitos Liquid Glass (backdrop-filter)

Tipografia:
- Hierarquia clara
- clamp() para responsividade

Animações:
- Scroll reveal (opacity/transform)
- Modais do time
- Sticky header

Links Críticos (NÃO ALTERAR)
WhatsApp Hero: https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+pelo+o+Google+e+gostaria+de+falar+com+um+advogado.&type=phone_number&app_absent=0
WhatsApp Áreas: https://api.whatsapp.com/send/?phone=5561991591105&text=Ol%C3%A1%21+Vi+as+%C3%A1reas+de+atua%C3%A7%C3%A3o+no+site+e+gostaria+de+falar+com+um+advogado+especialista.&type=phone_number&app_absent=0
Reunião Presencial: https://api.whatsapp.com/send/?phone=5561991591105&text=Ol%C3%A1%21+Vi+o+site+de+voc%C3%AAs+e+gostaria+de+agendar+uma+reuni%C3%A3o+presencial+com+um+advogado.&type=phone_number&app_absent=0
Reunião Online: https://api.whatsapp.com/send/?phone=5561991591105&text=Vi+o+site+de+voc%C3%AAs+e+gostaria+de+marcar+uma+reuni%C3%A3o+online.&type=phone_number&app_absent=0
Google Review: https://search.google.com/local/writereview?placeid=ChIJORpFOFk7WpMR17lKbaOXouk
Google Maps: https://maps.app.goo.gl/4rF6fr6WMpUeTttx6
Telefone: +55 61 99159-1105 (tel:+5561991591105)
E-mail: barretoadvocacia01@gmail.com (mailto:barretoadvocacia01@gmail.com)

Fluxo de Usuário (NÃO QUEBRAR)
Hero → CTA WhatsApp (principal)
Áreas → WhatsApp especialista
Reuniões → WhatsApp agendamento
Time → Modal interno (não sai do site)
Depoimentos → Google Review
Localização → Google Maps

Performance (MANTER)
- Mobile-first, grids fluidos
- Imagens com width/height or aspect-ratio
- Animar só transform/opacity
- Respeitar prefers-reduced-motion
- Links externos with target="_blank" rel="noopener noreferrer"

Arquivos Principais
index.html — estrutura completa
styles.css — todos os estilos
Possivelmente assets/ — imagens, ícones
