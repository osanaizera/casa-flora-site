# Diagnóstico: Blog Casa Flora x SDCMS (2026-03-07)

## Resumo

O blog não estava conectado ao SDCMS porque o site chamava endpoints antigos (`/api/public/content`) que hoje retornam `404`.

O SDCMS atual responde nos endpoints:

- `GET /api/content`
- `GET /api/content/:slug`

## Evidências (testes executados)

Com as variáveis de ambiente do projeto (`CMS_BASE_URL`, `CMS_API_KEY`):

- `GET {CMS_BASE_URL}/api/content?limit=1&type=BLOG&includeContent=false` -> `200`
- `GET {CMS_BASE_URL}/api/public/content?limit=1&type=BLOG&includeContent=false` -> `404`
- `GET {CMS_BASE_URL}/api/content/:slug` -> `200`
- `GET {CMS_BASE_URL}/api/public/content/:slug` -> `404`

## Correções aplicadas

1. Atualizado cliente CMS:
   - `src/lib/cms.ts`
   - De: `/api/public/content`
   - Para: `/api/content`

2. Atualizado healthcheck:
   - `src/app/api/sdcms/health/route.ts`
   - De: `/api/public/content?limit=1&includeContent=false`
   - Para: `/api/content?limit=1&includeContent=false`

3. Atualizado handoff local:
   - `src/app/integration-handoff.md`
   - Referências trocadas para `/api/content`

## Como validar rapidamente

1. Healthcheck do site:
   - `GET /api/sdcms/health`
   - Esperado: `cmsOk: true`

2. Página do blog:
   - `GET /blog`
   - Esperado: posts carregados do SDCMS (quando houver conteúdo publicado)

3. Logs de build/deploy:
   - Não deve mais aparecer erro `SDCMS fetch error 404` para `/api/public/content`.
