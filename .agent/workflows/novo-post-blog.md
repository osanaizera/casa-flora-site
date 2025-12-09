---
description: Adicionar novo post ao blog Casa Flora
---

# Adicionar Post ao Blog

// turbo-all

## 1. Preparar Imagem
- Criar/escolher imagem de capa (mínimo 1200x630px, máximo ~500KB)
- Salvar em: `public/images/blog/nome-descritivo.jpg`

## 2. Editar Array de Posts
Abrir `src/data/blog-posts.ts` e adicionar novo objeto ao array `blogPosts`:

```typescript
{
  slug: 'url-amigavel-do-post',
  title: 'Título SEO (50-60 chars)',
  excerpt: 'Meta description (120-160 chars)',
  content: `<p>HTML do artigo...</p>`,
  author: 'Equipe Casa Flora',
  date: 'YYYY-MM-DD',
  category: 'Branding',
  readingTime: 'X min',
  imageUrl: '/images/blog/nome.jpg',
  tags: ['Tag1', 'Tag2', 'Tag3'],
},
```

## 3. Verificar Local
```bash
npm run dev
```
- Acessar http://localhost:3000/blog
- Verificar se post aparece e layout está correto

## 4. Deploy
```bash
git add -A
git commit -m "blog: add [título]"
git push
```

## 5. Pós-Deploy (Opcional)
- Verificar sitemap: https://www.casaflora-brand.com.br/sitemap.xml
- Solicitar indexação no Google Search Console

---

## Estrutura HTML do Content

```html
<p>Introdução...</p>

<h2>Subtítulo</h2>
<p>Conteúdo...</p>

<h2>Conclusão</h2>
<p>CTA...</p>
```
