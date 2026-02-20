# Workshop Branding Landing Page

## 🎯 Status
✅ LP criada e deployed em produção
📍 URL: https://www.casaflora-brand.com.br/workshop-branding

## 📋 Checklist de Configuração

### Pendências para lançamento:

1. **Link Hotmart** (PRIORITÁRIO)
   - [ ] Criar produto no Hotmart
   - [ ] Atualizar link em `page.tsx` linha 394:
     ```tsx
     href="https://pay.hotmart.com/XXXXXX"
     ```
   - Link aparece em 2 lugares: botão principal de pricing e footer CTA

2. **Imagem Open Graph**
   - [ ] Criar imagem 1200x630px
   - [ ] Incluir: Logo Casa Flora + "Workshop: Branding como Ativo de Negócio" + data
   - [ ] Salvar em: `/public/images/workshop-branding-og.jpg`
   - Melhora compartilhamento em redes sociais

3. **Hero Visual**
   - [ ] Adicionar imagem de fundo para `.workshop-hero__card-bg`
   - Atualmente usando placeholder do Unsplash
   - Sugestão: foto de workshop, material de branding ou composição visual Casa Flora

## 🎨 Design System Usado

- **Tipografia**: Archivo (display) + Inter (body)
- **Cores principais**:
  - Earth 600: `#8b7355` (CTAs, destaques)
  - Neutral 900: `#1a1a1a` (textos principais)
  - Paper: `#FAF7F2` (fundo principal)
- **Espacejamento**: Sistema de 8px (clamp responsivo)
- **Border radius**: 12-24px (modern, clean)

## 📊 Estrutura da LP

1. **Hero** - Chamada principal + informações essenciais (data, horário, formato)
2. **Proposta** - Apresentação do curso (não é tradicional)
3. **Olhar Casa Flora** - 5 pilares (repertório, referência, bagagem, sensibilidade, critério)
4. **Módulos** - 6 módulos principais + 1 bônus (estrutura completa do curso)
5. **O que você vai receber** - 5 benefícios (apostila, ferramentas, construção ao vivo, mentoria, gravações)
6. **Investimento** - Preço promocional R$ 997 (primeiras 5 vagas) vs R$ 1.497
7. **Footer CTA** - Última conversão antes do rodapé

## 🚀 Deploy

- **Repositório**: `osanaizera/casa-flora-site`
- **Branch**: `master`
- **Vercel**: Deploy automático
- **Domínio**: https://www.casaflora-brand.com.br

## 📝 Conteúdo

Todo o copy foi extraído dos documentos fornecidos:
- `Documento_sem_título.docx` (estrutura principal)
- `Casa_Flora_Curso_Posicionamento_de_Alto_Padra_o.pdf` (detalhes dos módulos)
- `A_Metodologia_Casa_Flora_aplicada_na_pra_tica.pdf` (proposta e olhar)

## 🔧 Customizações Futuras

Possíveis melhorias:
1. **Depoimentos** - Adicionar seção com feedback de alunos anteriores
2. **FAQ** - Perguntas frequentes
3. **Timer de contagem regressiva** - Para primeiras 5 vagas
4. **Preview de módulos** - Vídeo ou galeria de imagens
5. **Formulário de interesse** - Para quem quer saber de próximas turmas
6. **Pixels de conversão** - Facebook Pixel, Google Ads, etc.

## 📱 Responsividade

Totalmente responsivo:
- Desktop: grid 2 colunas no hero, módulos completos
- Tablet: ajuste de espaçamentos, grid adaptativo
- Mobile: coluna única, CTAs destacados

## 🎯 Conversão

CTAs estratégicos em:
1. Hero (acima da dobra)
2. Após "O que você vai receber"
3. Footer (última chamada)

Todos os botões levam para `#inscricao` (scroll suave para pricing)

---

**Última atualização**: 20/02/2026, 17:15 BRT
**Desenvolvido com**: Next.js 15 + TypeScript + CSS Modules + Design System Casa Flora
