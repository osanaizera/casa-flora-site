# Casa Flora — Plano Detalhado do Site (Guia Mestre)

Este documento descreve visão, escopo, arquitetura, conteúdo, integrações, qualidade e uma sequência lógica de execução para entregar um site profissional, performático e escalável. Serve como guia de projeto e referência para decisões futuras.

## 1) Visão e Objetivos
- **Propósito:** Apresentar a Casa Flora como referência em branding sensorial, captar leads e demonstrar cases.
- **Metas de negócio:**
  - Leads qualificados: formulário de contato e newsletter.
  - Autoridade: cases detalhados + blog (futuro) para SEO.
  - Conversão: CTAs claros e mensuráveis.
- **KPIs:**
  - Conversão de contato (>2%) e newsletter (>1%).
  - Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
  - SEO: CTR orgânico, palavras-chave alvo, backlinks.

## 2) Público e Narrativa
- **Públicos:** hospitality (hotéis, pousadas, resorts), marcas de produtos e serviços premium.
- **Tarefas do usuário:** conhecer proposta, inspirar-se com cases, entrar em contato.
- **Tom de voz:** elegante, humano, editorial, direto.

## 3) IA e Mapa do Site
- **Páginas principais:**
  - Home (hero, serviços, cases, ethos).
  - Serviços (listagem e detalhamento — opcional via CMS).
  - Cases (listagem) e Case (detalhe: narrativa, fotos, resultados, stack, depoimentos).
  - Sobre (manifesto, fundadores, metodologia).
  - Contato (formulário, canais e política de privacidade).
  - Downloads (materiais ricos para leads — opcional fase 2+).
  - Blog (conteúdo/SEO — fase futura).
- **Páginas legadas/técnicas:** 404, 500, Política de Privacidade, Termos, Cookies.

## 4) Modelagem de Conteúdo (Sanity)
- **Schemas:**
  - `settings` (singleton): nome, descrições, logos, cores, social, OG default.
  - `service`: slug, título, descrição, categorias, destaques, imagens.
  - `case`: slug, título, cliente, locais, ano, serviços, capa, galeria, descrição, resultados, depoimentos, SEO.
  - `author` (para blog e cases): nome, bio, foto, redes.
  - `post` (futuro): slug, título, excerpt, conteúdo (portable text/MDX), tags, SEO.
  - `page` (opcional): páginas institucionais gerenciáveis.
- **Relacionamentos:** case <-> service; post <-> author.
- **Revalidação:** ISR com `revalidateTag` por tipo; webhooks do Sanity ativando revalidate.

## 5) Design System (Tailwind v4 + CSS Vars)
- **Tokens (@theme):**
  - Cores: neutros, acentos (terra/sage/gold), fundo e tinta.
  - Tipografia: família display (Archivo) e body (Inter), escala (h1–h6, body, caption).
  - Espaçamentos, raio, sombras, container.
- **Componentes UI:** Button, Link, Container/Grid, Section, Heading, Input, TextArea, Field, Tag/Badge, Card.
- **Diretrizes:** Tailwind-first (80–90%); CSS Modules pontuais para efeitos complexos.

## 6) Acessibilidade (A11y)
- **Semântica:** landmarks (header/main/footer/nav), headings hierárquicos.
- **Focus:** estados visíveis consistentes; rolagem reduzida quando `prefers-reduced-motion`.
- **ARIA:** componentes interativos (tabs, menus, botões) com atributos adequados.
- **Contraste:** AA mínimo; checagem com tooling.

## 7) Performance e Orçamentos
- **Orçamentos:**
  - JS por rota inicial < 180KB gzip, CSS crítico < 25KB.
  - Imagens otimizadas (next/image), `sizes` e `priority` apenas above-the-fold.
- **Estratégias:**
  - Server Components sempre que possível; lazy para client-only.
  - `next/font` com subset; remover `<link>` de fontes CDN.
  - Caching/headers, compressão Brotli, prefetch leve.
  - Evitar layout shifts (dimensões reservadas).

## 8) SEO Técnico e Conteúdo
- **Técnico:** metadata por rota (App Router), OG e Twitter per page/case, sitemap e robots automáticos, canonical, hreflang (se i18n no futuro).
- **Estruturado:** JSON-LD para Organization, WebSite, Project/Article (cases/posts).
- **Conteúdo:** títulos claros, headings coerentes, alt text significativo, copy enxuta e escaneável.

## 9) Analytics e Mensuração
- **Ferramentas:** Vercel Analytics (primário); opcionalmente GA4/PostHog.
- **Eventos:** view de seções-chave, cliques de CTA, submissões de formulário, scroll-depth (home/cases), saída para WhatsApp/email.
- **Privacidade:** consent banner (se adicionarmos trackers externos); política de privacidade dedicada.

## 10) Captação de Leads (Arquitetura)
- **Formulário de contato:**
  - Front-end: validação client (Zod) + mensagens acessíveis.
  - Back-end (RSC route handler): validação server, rate limiting (IP + token), antispam (Turnstile/ReCAPTCHA), envio Resend (confirmação + notificação), persistência Notion (linha em DB de leads), logging de auditoria.
  - Respostas: 202/200 em sucesso, 4xx para validação/rate, 5xx em erro.
- **Newsletter:** double opt-in (Resend), lista (Brevo/Mailchimp) ou Notion inicial.
- **Downloads:** gated content (fase 2+), registro no Notion + entrega por email.

## 11) Integrações e Segredos
- **Sanity:** `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_READ_TOKEN`.
- **Notion:** `NOTION_TOKEN`, `NOTION_DATABASE_ID`.
- **Resend:** `RESEND_API_KEY`, `EMAIL_FROM`.
- **Captcha:** `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`.
- **(Opcional) Sentry:** `SENTRY_DSN`.
- **Gestão de env:** `.env.local` (dev), Vars na Vercel (prod), nunca commitar segredos.

## 12) Segurança e Conformidade
- **Rate limiting:** por IP + token, janela deslizante.
- **Validação/sanitização:** Zod server-side, escape de HTML, limite de payload.
- **Headers:** CSP (script/img/style), Referrer-Policy, X-Content-Type-Options, Permissions-Policy, HSTS.
- **Armazenamento:** dados de leads no Notion; nenhum dado sensível no client; retenção definida.

## 13) Infra, Domínio e Deploy
- **Vercel:** projeto conectado ao Git; Preview PRs; produção em main.
- **Domínio registro.br:** preferir nameserver Vercel; alternativa via A/AAAA/CNAME.
- **Emails (Resend):** autenticação SPF/DKIM; teste de reputação.
- **Imagens/CDN:** `next/image` com Vercel Image Optimization.

## 14) Observabilidade e Qualidade
- **Erros:** Sentry front/back (opcional mas recomendado).
- **Logs:** structured logs nas routes; replays (opcional).
- **CI:** lint + typecheck + build + Lighthouse CI básico.

## 15) Testes e QA
- **Unitários:** utilitários e componentes puros.
- **Integração:** rotas de API (contact), páginas dinâmicas (cases).
- **E2E:** Playwright para fluxos críticos (contato, navegação, cases).
- **Matriz de dispositivos:**
  - Mobile: iOS Safari (últimas 2), Android Chrome (últimas 3), pequenas telas 360–480px.
  - Tablet: iPad (Safari), Android Tablet (Chrome).
  - Desktop: Chrome/Edge/Firefox (últimas 2), macOS Safari, monitores 1280 → 2560+.

## 16) Fluxo Editorial e CMS
- **Sanity Studio:** permissões, workflows simples, previews (draft vs published).
- **Content Delivery:** fetch em RSC; fallback de SEO; webhooks para revalidate.
- **Guia editorial:** formatos de imagens, copy guide, checklist de SEO.

## 17) Roadmap por Fases (Sequência Lógica)
1. Base e Higiene
   - Tailwind @theme (cores, tipografia, spacing); migrar Archivo para `next/font`.
   - Tipografia utilitária (h1/h2/h3, body sizes). Corrigir ESLint/TS estritos.
   - Componentes UI básicos (Button, Container, Heading, Input, TextArea, Field).
   - Unificar Header com mobile e mover para layout global.
   - Performance inicial: imagens hero, prioridade e `sizes` corretos.
   - DoD: build verde, Lighthouse > 85 em Home desktop/mobile.
2. Modularização e Páginas
   - Portar seções para Tailwind; CSS Modules apenas para efeitos complexos.
   - Ajustar Home final (hero, serviços, cases highlights, ethos) responsivo.
   - Páginas estáticas: Sobre, Serviços (estático inicialmente), Contato.
   - DoD: todas as páginas responsivas, sem console warnings.
3. CMS e Rotas Dinâmicas
   - Sanity: schemas (settings, service, case, author, post básico), Studio + GROQ.
   - Listagem de cases `/cases` + detalhe `/cases/[slug]` com SEO/OG per case.
   - Serviços via CMS (opcional nesta fase) ou dados locais tipados.
   - DoD: conteúdo gerenciado via Studio; revalidate funcionando.
4. Leads e Integrações
   - API `app/api/contact/route.ts`: Zod, rate limit, Turnstile, Resend, Notion.
   - Templates de email (confirmação ao lead, notificação interna).
   - Newsletter (double opt-in) e event tracking dos CTAs.
   - DoD: fluxo de contato auditável, e-mails entregues, lead no Notion.
5. SEO/Performance/Qualidade
   - JSON-LD por página, sitemap/robots, canonical; assets otimizados.
   - Auditoria Lighthouse e WebPageTest; budgets aplicados; Bundle Analyzer.
   - A11y QA: foco, ARIA, contraste; Playwright E2E dos fluxos críticos.
   - DoD: Core Web Vitals “verde”; Lighthouse > 90; testes passando.
6. Go-Live e Operação
   - Domínio registro.br apontado, SSL, redirecionos www/root.
   - Env vars na Vercel; políticas de privacidade; consent se necessário.
   - Documentação de operação e handoff.
   - DoD: deploy estável; monitoramento ativo; time treinado.

## 18) Riscos e Mitigações
- **Performance de imagens:** mitigar com next/image, `sizes`, compressão e lazy.
- **E-mails em spam:** autenticar domínio (SPF/DKIM), reputação, conteúdo claro.
- **CMS complexidade:** começar pequeno (cases/settings), evoluir posts depois.
- **Escopo visual:** controlar via design tokens e componentes; evitar CSS ad-hoc.
- **Leis de privacidade:** política clara; consent se houver tracking além de Analytics da Vercel.

## 19) Critérios de Aceite (geral)
- **Qualidade:** sem erros de console, tipagem estrita, lint sem erros.
- **Acessibilidade:** navegação por teclado, foco visível, contrastes AA.
- **SEO:** metadados completos, OG por página-chave, sitemap OK.
- **Perf:** budgets atendidos; C WV “verde” em mobile e desktop.
- **Leads:** contato funcional, confirmações enviadas, registro no Notion.

## 20) Processo de Código
- **Branches:** main (prod), feature/*, fix/*.
- **PRs:** lint + typecheck + build + pré-visualização + checklist (SEO/A11y/Perf).
- **Commits:** convencionais (feat/fix/chore/docs/refactor/test/build).

## 21) Checklists Resumidos
- **Página nova:** SEO (title/desc/OG), A11y (headings/aria/focus), Perf (imagens/sizes), QA responsivo, analytics events.
- **Formulário:** validação client/server, rate limit, captcha, email, persistência, erros amigáveis, logs.
- **Case:** conteúdo (texto, imagens), SEO per-case, OG, structured data, navegação anterior/próximo.

—
Este documento é vivo. Ajustes são esperados conforme feedback do time e dados em produção.

