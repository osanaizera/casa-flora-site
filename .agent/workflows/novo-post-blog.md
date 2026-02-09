---
description: Publicar novo post no blog Casa Flora via SDCMS
---

# Publicar Post no Blog (via CMS)

> Posts são gerenciados pelo **SDCMS** (Headless CMS). Nenhuma alteração de código é necessária para publicar conteúdo novo.

## Fluxo Normal (sem código)

### 1. Criar Post no Painel CMS
- Acesse: https://sdcms-web.vercel.app/
- Crie um novo conteúdo do tipo **BLOG**
- Preencha: título, slug, excerpt, conteúdo Markdown, tags, idioma
- Faça upload da imagem de capa (mínimo 1200x630px)
- Preencha os campos SEO: seoTitle (50-60 chars), seoDescription (120-160 chars), seoImage

### 2. Publicar
- Clique em **Publicar** no painel CMS
- O CMS dispara automaticamente um webhook para `/api/sdcms/revalidate`
- O cache ISR é invalidado via `revalidateTag("cms-posts")`
- Em segundos, o site exibe o novo post

### 3. Verificar
- Blog: https://www.casaflora-brand.com.br/blog
- Post: https://www.casaflora-brand.com.br/blog/{slug}
- Sitemap: https://www.casaflora-brand.com.br/sitemap.xml

---

## Estrutura do Conteúdo Markdown

```markdown
# Título Principal

Parágrafo de introdução...

![Imagem descritiva](url-da-imagem)

## Subtítulo

Conteúdo do artigo em **Markdown** completo.

> Blockquotes para destaques

## Conclusão

Texto final com CTA.
```

## Campos SEO no CMS

| Campo | Uso | Exemplo |
|---|---|---|
| `seoTitle` | Tag `<title>` e OG title | "Como Criar uma Marca Memorável" (50-60 chars) |
| `seoDescription` | Meta description e OG description | "Descubra as estratégias..." (120-160 chars) |
| `seoImage` | OG image e hero do post | Upload no CMS (1200x630px) |
| `canonicalUrl` | `<link rel="canonical">` | Deixar vazio para URL padrão |
| `robots` | Meta robots | Deixar vazio (default: index, follow) |
| `tags` | Categorização e filtros | ["Branding", "Hospitalidade"] |

## Arquitetura Técnica (referência)

| Arquivo | Função |
|---|---|
| `src/lib/cms.ts` | Client CMS (server-only, ISR com tags) |
| `src/lib/blog.ts` | Adapter CMS → Post (contrato interno) |
| `src/lib/markdown.ts` | Pipeline unified: remark → rehype → HTML |
| `src/lib/sdcms-assets.ts` | Absolutização de URLs de assets do CMS |
| `src/app/blog/[slug]/page.tsx` | Página do post (JSON-LD, OG, canonical) |
| `src/app/api/sdcms/revalidate/route.ts` | Webhook receiver (HMAC-SHA256) |
| `src/app/sitemap.ts` | Sitemap dinâmico com todos os posts |

## Variáveis de Ambiente Necessárias

```env
CMS_BASE_URL=https://sdcms-web.vercel.app/
CMS_API_KEY=cms_xxx
CMS_WEBHOOK_SECRET=xxx
SITE_URL=https://www.casaflora-brand.com.br
NEXT_PUBLIC_CMS_BASE_URL=https://sdcms-web.vercel.app/
NEXT_PUBLIC_SDCMS_LEAD_PUBLIC_ID=xxx  # opcional, para widget de lead
```

## Troubleshooting

- **Post não aparece**: Verificar webhook no painel CMS → logs em `/api/sdcms/revalidate`
- **Imagens quebradas**: Verificar `next.config.ts` → `remotePatterns` inclui `**.supabase.co`
- **Cache ISR**: Em dev, ISR não funciona — testar com `npm run build && npm start`
