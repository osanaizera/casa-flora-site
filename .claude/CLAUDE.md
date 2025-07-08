# CLAUDE.md - Casa Flora

## A Regra de Ouro
**Quando em dúvida sobre implementações, SEMPRE pergunte ao desenvolvedor.**
Não faça suposições sobre lógica de negócio, UX/UI ou comportamentos do sistema.

## Contexto do Projeto
Casa Flora é um estúdio de branding que desenvolve marcas sensoriais, autorais e humanas, conectando negócios e pessoas com estratégia, identidade e impacto real. Atuamos em duas frentes principais: 

- **Experiências**: Núcleo focado em marcas que querem elevar a experiência através do branding
- **Hospitalidade**: Branding focado em lugares que fazem a arte de bem receber

Nossos serviços atendem negócios de produtos, serviços e hospitalidade que desejam crescer com consistência, autenticidade e presença. Oferecemos projetos completos de branding e extensões que aprofundam a aplicação e gestão contínua da marca.

### Filosofia da Marca
- **Essência**: Marcas são organismos vivos que crescem de dentro para fora
- **Abordagem**: Estratégia profunda + estética sensível + presença autêntica
- **Diferencial**: Unir visão de negócio com sensibilidade criativa

## Arquitetura do Site

### Estrutura de Páginas
- **Home**: Apresentação da Casa Flora, manifesto, overview dos serviços
- **Experiências**: Branding para marcas criativas, autorais, consultoria estratégica
- **Hospitalidade**: Especialização em hotéis, pousadas, restaurantes, experiências de luxo
- **Cases**: Portfolio de projetos realizados (com storytelling)
- **Sobre**: Ana Bossardi e Pedro Zanin - fundadores, trajetória, filosofia
- **Contato**: Formas de contato, processo de trabalho

### Hierarquia Visual
1. **Home** - Entrada principal, primeiro impacto
2. **Experiências/Hospitalidade** - Divisão estratégica dos serviços
3. **Cases** - Prova social e expertise
4. **Sobre** - Conexão humana e credibilidade
5. **Contato** - Conversão e relacionamento

## Diretrizes de Design & UX/UI

### Estética Principal
- **NÃO É**: Florido, natureza óbvia, estilo FARM
- **É**: Elegante, high-tech, clean, sofisticado
- **Detalhes florais**: Sutis, como Dolce & Gabbana - elegância com toques orgânicos

### Princípios Visuais
- **Minimalismo sofisticado**: Espaços em branco, tipografia limpa
- **Contraste elegante**: Equilíbrio entre tecnológico e orgânico
- **Fotografia**: Arquitetura clean + detalhes florais sutis
- **Movimento**: Micro-animações, transições suaves

### Paleta de Cores
- **Base**: Tons neutros, terrosos, profundos
- **Destaque**: Toques de cores naturais (não vibrantes)
- **Filosofia**: Harmonia > chamamento de atenção

## Funcionalidades Essenciais

### Interatividade
- **Hover states**: Transições suaves em todos os elementos
- **Scroll animations**: Revelação progressiva do conteúdo
- **Loading states**: Feedback visual para todas as ações
- **Responsive design**: Mobile-first, adaptativo

### Performance
- **Otimização de imagens**: WebP, lazy loading
- **Animações**: 60fps, sem janking
- **Carregamento**: Under 3s para First Contentful Paint

## Conteúdo & Tom de Voz

### Personalidade da Marca
- **Arquétipos**: O Sábio (estratégico) + A Criadora (sensível)
- **Tom**: Autêntico, próximo, reflexivo, estratégico
- **Escrita**: Com alma e clareza, perguntas provocativas

### Mensagens-Chave
- "Desenvolvemos marcas sensoriais, autorais e humanas"
- "Conectamos negócios e pessoas com estratégia, identidade e impacto real"
- "Crescer com consistência, autenticidade e presença"
- "Sua marca é um organismo vivo"
- **Experiências**: "Elevamos cada ponto de contato em uma experiência memorável"
- **Hospitalidade**: "Transformamos lugares em experiências de bem receber"
- **Garden**: "O caminho mais completo para estruturar sua marca"
- **Raíz**: "Versão compacta e essencial para organizar sua marca"

## Estrutura Técnica

### Stack Tecnológico
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (utility-first)
- **Animações**: Framer Motion
- **Imagens**: Next/Image com otimização
- **Fonts**: Google Fonts ou fonts locais

### Padrões de Código
- **Componentes**: Modulares, reutilizáveis
- **Nomenclatura**: PascalCase para componentes, camelCase para props
- **Estrutura**: Atomic design (atoms, molecules, organisms)
- **TypeScript**: Tipagem estrita, interfaces bem definidas

## Anchor Comments Guidelines

### Prefixos para Comentários
- `AIDEV-NOTE:` - Informações importantes sobre implementação
- `AIDEV-TODO:` - Tarefas futuras ou melhorias
- `AIDEV-QUESTION:` - Dúvidas para discussão com o desenvolvedor

### Exemplos de Uso
```javascript
// AIDEV-NOTE: Animação crítica para UX - mantém 60fps
// AIDEV-TODO: Implementar lazy loading para imagens do portfolio
// AIDEV-QUESTION: Devemos usar Server Components aqui?
```

## Portfolio de Serviços

### Projetos de Branding

#### Garden — Projeto Completo de Branding
- **Descrição**: Caminho mais completo para estruturar marca com estratégia, identidade e aplicação prática
- **Inclui**: Diagnóstico profundo, posicionamento estratégico, universo simbólico e visual, plano de ativação
- **Ideal para**: Negócios que precisam de estruturação completa da marca

#### Raíz — Projeto Pocket de Branding
- **Descrição**: Versão compacta e essencial para estruturar essência e identidade visual
- **Características**: Ágil e estratégico, formato pocket
- **Ideal para**: Negócios que precisam organizar a marca mas ainda não estão no momento de projeto completo

### Extensões e Projetos Complementares

#### Plano de Ativação na Prática
- **Função**: Tradução do brandbook em plano de ação concreto
- **Inclui**: Planejamento de lançamento, aplicação nos pontos físicos e digitais, análise de resultados
- **Diferencial**: Acompanhamento da implementação e suporte estratégico

#### Branding & Performance — Gestão de Marca Contínua
- **Função**: Acompanhamento estratégico e criativo contínuo
- **Inclui**: Planejamento de campanhas, ações e conteúdos
- **Objetivo**: Garantir que a marca permaneça viva e coerente

#### Colméia — Cultura Organizacional & Rituais
- **Função**: Transformar time em embaixadores da marca
- **Formato**: Workshops e materiais internos
- **Ideal para**: Negócios onde atendimento e alinhamento da equipe fazem diferença

#### Pólen — Jornada de Encantamento
- **Função**: Mapeamento da experiência do cliente em todos os pontos de contato
- **Objetivo**: Gerar conexão, encantamento e rentabilidade
- **Resultado**: Plano de ações para otimizar cada momento da jornada

#### Arquitetura de Marca
- **Função**: Organização e alinhamento estratégico de marcas e sub-marcas
- **Objetivo**: Garantir clareza, coerência e conexões estratégicas
- **Ideal para**: Negócios com múltiplas marcas ou expansão planejada

#### Naming — Criação de Nome para Marcas
- **Processo**: Estratégico de criação de nomes memoráveis
- **Inclui**: Curadoria, pesquisa de mercado, verificação de disponibilidade
- **Resultado**: Nomes alinhados ao posicionamento e prontos para uso

### Home Page
- **Hero**: Manifesto visual + call-to-action
- **Núcleos**: Experiências (elevar experiências) + Hospitalidade (arte de bem receber)
- **Diferencial**: Por que Casa Flora transforma marcas em experiências
- **Social proof**: Cases que mostram transformação real

### Experiências
- **Foco**: Marcas que querem elevar a experiência através do branding
- **Setores**: Clínicas, lojas, espaços de serviços
  - **Saúde**: Clínicas médicas, odontológicas, estéticas
  - **Confeitaria**: Docerias, confeitarias, brigadeiros gourmet
  - **Beleza**: Salões, clínicas estéticas, spas urbanos
  - **Moda**: Lojas de roupa, ateliês, boutiques
  - **Advocacia**: Escritórios jurídicos, consultorias legais
  - **Arquitetura**: Escritórios de arquitetura, design de interiores
- **Diferencial**: Transformar cada ponto de contato em uma experiência memorável
- **Processo**: Compreender a jornada do cliente para criar marca que eleva cada momento

### Hospitalidade
- **Foco**: Branding para lugares que fazem a arte de bem receber
- **Setores**: Espaços de acolhimento e experiências gastronômicas
  - **Hotéis**: Hotéis boutique, pousadas, resorts urbanos
  - **Resorts**: Resorts de praia, montanha, experiências imersivas
  - **Restaurantes**: Alta gastronomia, bistrôs, experiências culinárias
  - **Spas**: Spas de resort, day spas, retiros de bem-estar
- **Diferencial**: Branding sensorial que transforma espaços em experiências de acolhimento
- **Especialização**: Criar marcas que fazem as pessoas se sentirem especiais desde o primeiro contato

### Sobre
- **Ana Bossardi**: Fundadora, trajetória, filosofia
- **Pedro Zanin**: Co-fundador, expertise em hospitalidade
- **Fotos**: Profissionais, autênticas, que transmitam confiança
- **História**: Desde 2019, evolução do estúdio

## O Que a IA NUNCA Deve Fazer

❌ **Alterar a essência da marca** - Manter sempre alinhado com diretrizes
❌ **Criar design "florido"** - Lembrar: elegância high-tech com toques sutis
❌ **Linguagem corporativa fria** - Manter tom humano e autêntico
❌ **Ignorar responsividade** - Sempre pensar mobile-first
❌ **Performance secundária** - Otimização é prioridade

## Referências de Estilo

### Referências de Estilo

### Inspirações Visuais
- **Arquitetura**: Casas modernas com vidro, linhas clean
- **Fotografia**: Retratos profissionais, ambientes sofisticados
- **Tipografia**: Serifas elegantes + sans-serif modernas
- **Layout**: Editorial, espaços brancos, hierarquia clara

### Evitar
- **Clichês de natureza**: Folhas, flores óbvias
- **Cores vibrantes**: Manter paleta sofisticada
- **Excessos**: Menos é mais, elegância pela simplicidade

## Nomenclatura dos Serviços (Significados)

### Projetos Principais
- **Garden**: Jardim completo, crescimento estruturado
- **Raíz**: Fundação, essência, base sólida

### Extensões (Metáforas Orgânicas)
- **Pólen**: Elemento que conecta, fertiliza experiências
- **Colméia**: Organização coletiva, cultura em harmonia
- **Branding & Performance**: Gestão contínua, marca viva
- **Arquitetura de Marca**: Estrutura organizacional
- **Naming**: Criação do nome, identidade verbal

## Processo de Desenvolvimento

### Prioridades
1. **UX/UI primeiro**: Experiência do usuário é fundamental
2. **Performance**: Site rápido e responsivo
3. **Conversão**: Cada página deve ter propósito claro
4. **Manutenibilidade**: Código limpo e bem documentado

### Validação
- **Teste mobile**: Sempre verificar em dispositivos
- **Acessibilidade**: Contraste, alt texts, navegação por teclado
- **SEO**: Meta tags, structured data, sitemap

## Persona do Cliente

### Experiências
- **Perfil**: Mulher empreendedora, 28-45 anos
- **Necessidade**: Marca com presença e identidade real
- **Setores**: Criativo, bem-estar, educação, gastronomia

### Hospitalidade
- **Perfil**: Gestores de hotéis, restaurantes, experiências
- **Necessidade**: Diferenciação no mercado de luxo
- **Foco**: Experiência sensorial + estratégia comercial

## Métricas de Sucesso

### Técnicas
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Lighthouse Score**: 90+ em todas as categorias
- **Responsividade**: Perfeita em todos os breakpoints

### Negócio
- **Taxa de conversão**: Contatos qualificados
- **Tempo na página**: Engajamento com conteúdo
- **Taxa de rejeição**: Interesse genuíno nos serviços

---

**Lembre-se**: Casa Flora é sofisticação com alma. Cada linha de código deve refletir essa essência - tecnologia com sensibilidade, estratégia com afeto, presença com propósito.