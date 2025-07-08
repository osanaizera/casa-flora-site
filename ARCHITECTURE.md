# Casa Flora Site - Arquitetura e Estrutura do Projeto

## Stack Tecnológica Escolhida

### Frontend Framework
- **Next.js 15** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **ESLint** para linting

### Razões da Escolha

1. **Next.js 15 com App Router**: Framework React moderno com:
   - Server-side rendering (SSR) nativo
   - Otimização automática de performance
   - Geração de sites estáticos (SSG)
   - API routes integradas
   - Suporte a SEO nativo
   - Excelente para captura de leads

2. **TypeScript**: 
   - Reduz bugs em produção
   - Melhor experiência de desenvolvimento
   - Facilita manutenção e escalabilidade
   - Padrão da indústria para projetos profissionais

3. **Tailwind CSS**:
   - Design system consistente
   - Desenvolvimento rápido
   - Otimização automática do CSS
   - Responsividade fácil
   - Fácil customização

## Estrutura de Pastas

```
casa-flora-site/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página inicial
│   │   ├── sobre/              # Página sobre a empresa
│   │   ├── servicos/           # Página de serviços
│   │   ├── cases/              # Cases de sucesso
│   │   ├── blog/               # Blog para SEO e conteúdo
│   │   ├── produtos/           # Catálogo de produtos
│   │   ├── downloads/          # Materiais para download
│   │   └── contato/            # Formulário de contato
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   ├── ui/                 # Componentes básicos (Button, Input, etc.)
│   │   ├── forms/              # Formulários específicos
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── sections/           # Seções específicas das páginas
│   │   └── shared/             # Componentes compartilhados
│   │
│   ├── lib/                    # Utilitários e configurações
│   │   ├── utils/              # Funções utilitárias
│   │   ├── hooks/              # Custom hooks
│   │   ├── services/           # APIs e serviços externos
│   │   └── validations/        # Schemas de validação
│   │
│   ├── types/                  # Definições de tipos TypeScript
│   ├── data/                   # Dados estáticos e configurações
│   ├── assets/                 # Recursos estáticos
│   │   ├── images/             # Imagens do projeto
│   │   ├── icons/              # Ícones customizados
│   │   └── videos/             # Vídeos
│   └── styles/                 # Estilos globais e customizações
│
├── content/                    # Conteúdo do site
│   ├── blog/                   # Posts do blog (MDX)
│   ├── cases/                  # Cases de sucesso
│   ├── produtos/               # Informações de produtos
│   └── downloads/              # Materiais para download
│
├── public/                     # Arquivos públicos
│   ├── images/                 # Imagens públicas
│   ├── videos/                 # Vídeos públicos
│   └── downloads/              # Arquivos para download
│
└── docs/                       # Documentação do projeto
```

## Funcionalidades Planejadas

### 1. Captura de Leads
- Formulários otimizados em múltiplas páginas
- Newsletter signup
- Downloads de materiais (PDF, guias)
- Formulários de contato personalizados

### 2. SEO e Marketing
- Blog integrado para content marketing
- Meta tags otimizadas
- Schema markup para Google
- Sitemap automático
- Open Graph para redes sociais

### 3. Showcase de Produtos/Serviços
- Galeria de fotos profissionais
- Vídeos demonstrativos
- Cases de sucesso com depoimentos
- Catálogo de produtos

### 4. Performance e UX
- Carregamento otimizado de imagens
- Lazy loading automático
- Design responsivo
- Animações suaves
- Tempo de carregamento otimizado

## Próximos Passos

1. Configurar componentes base (Header, Footer, Layout)
2. Implementar sistema de formulários
3. Integrar CMS para gerenciamento de conteúdo
4. Configurar analytics e tracking
5. Implementar sistema de SEO
6. Adicionar animações e micro-interações
7. Configurar pipeline de deploy

## Dependências Adicionais Recomendadas

```bash
# Formulários e validação
npm install react-hook-form @hookform/resolvers zod

# Animações
npm install framer-motion

# Ícones
npm install lucide-react

# Utilitários
npm install clsx tailwind-merge

# CMS (opcional)
npm install @sanity/client @sanity/image-url

# Analytics
npm install @vercel/analytics
```

Este projeto está estruturado para ser escalável, performático e otimizado para conversão de leads, utilizando as melhores práticas do desenvolvimento web moderno.