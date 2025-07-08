# Casa Flora - Design System

## 🎨 **Filosofia Visual**

### Conceito Central
**"Elegância High-Tech com Alma Orgânica"**

A Casa Flora quebra o óbvio do florido constante. Nosso design é limpo, sofisticado e tecnológico, com toques orgânicos sutis que emergem em detalhes fotográficos, texturas e micro-interações. Inspiração: **Dolce & Gabbana** - elegância refinada com detalhes naturais estratégicos.

### Princípios Visuais
- **Minimalismo Sofisticado**: Espaços brancos generosos, hierarquia clara
- **Tecnologia Humana**: Interface moderna com warmth sutil
- **Organic Details**: Natureza não óbvia, mas presente em texturas e formas
- **Editorial Luxury**: Layouts que respiram, tipografia como arte

---

## 🎨 **Paleta de Cores**

### Cores Primárias
```css
/* Neutros Sofisticados */
--neutral-900: #1a1a1a    /* Charcoal - textos principais */
--neutral-800: #2d2d2d    /* Graphite - títulos secundários */
--neutral-600: #666666    /* Warm Gray - textos de apoio */
--neutral-400: #9d9d9d    /* Light Gray - placeholders */
--neutral-200: #e8e8e8    /* Soft Gray - borders sutis */
--neutral-100: #f5f5f5    /* Off White - backgrounds */
--neutral-50:  #fafafa    /* Pure White - áreas de destaque */
```

### Cores de Destaque
```css
/* Terra Sofisticada */
--earth-600: #8b7355     /* Warm Brown - CTAs primários */
--earth-400: #a68b5b     /* Light Brown - hovers */
--earth-200: #d4c4a8     /* Soft Beige - backgrounds sutis */

/* Verde Sutil */
--sage-600: #7a8471      /* Sage Green - acentos orgânicos */
--sage-400: #9ba088      /* Light Sage - hovers sutis */
--sage-200: #c8d1c0      /* Soft Sage - backgrounds delicados */

/* Accent Luxo */
--accent-gold: #d4af37    /* Gold - detalhes premium */
--accent-warm: #f4f1ed    /* Warm White - áreas especiais */
```

### Hierarquia de Uso
- **Dominant (70%)**: Neutros 50-200
- **Secondary (20%)**: Terra 200-600
- **Accent (10%)**: Sage e Gold em detalhes

---

## 📝 **Tipografia**

### Fonte Principal - Serifada Editorial
```css
/* Playfair Display ou similar */
font-family: 'Playfair Display', serif;
```
**Uso**: Títulos principais, hero headlines, citações importantes
**Características**: Elegante, editorial, com personalidade

### Fonte Secundária - Sans Moderna
```css
/* Inter ou similar */
font-family: 'Inter', sans-serif;
```
**Uso**: Textos corridos, navegação, CTAs, informações técnicas
**Características**: Clean, legível, tech-friendly

### Hierarquia Tipográfica
```css
/* Headlines */
.h1 { font-size: 3.5rem; font-weight: 300; line-height: 1.1; }
.h2 { font-size: 2.5rem; font-weight: 400; line-height: 1.2; }
.h3 { font-size: 1.8rem; font-weight: 500; line-height: 1.3; }
.h4 { font-size: 1.3rem; font-weight: 600; line-height: 1.4; }

/* Body Text */
.body-large { font-size: 1.1rem; line-height: 1.6; }
.body-regular { font-size: 1rem; line-height: 1.5; }
.body-small { font-size: 0.9rem; line-height: 1.4; }
.caption { font-size: 0.8rem; line-height: 1.3; }
```

---

## 🖼️ **Fotografia & Imagens**

### Estilo Fotográfico
- **Arquitetura Clean**: Linhas modernas, materiais premium
- **Portraits Profissionais**: Lighting suave, backgrounds minimalistas
- **Detalhes Orgânicos**: Texturas naturais, elementos florais sutis
- **Lifestyle Sofisticado**: Momentos autênticos em ambientes elegantes

### Tratamento Visual
- **Saturação**: Levemente reduzida (-10 a -20%)
- **Contraste**: Médio-alto para definição
- **Temperatura**: Ligeiramente warm (+100K)
- **Highlights**: Suaves, sem queima
- **Shadows**: Detalhes preservados

### Composição
- **Espaços Negativos**: Generosos, respiram
- **Regra dos Terços**: Aplicada consistentemente
- **Profundidade**: Blur sutil em backgrounds
- **Crop Ratios**: 16:9 (hero), 4:3 (portfolio), 1:1 (destaques)

---

## 🎯 **Componentes Base**

### Botões
```css
/* Botão Primário */
.btn-primary {
  background: var(--earth-600);
  color: white;
  padding: 14px 32px;
  border-radius: 2px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary:hover {
  background: var(--earth-400);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 115, 85, 0.3);
}

/* Botão Secundário */
.btn-secondary {
  background: transparent;
  color: var(--neutral-800);
  padding: 14px 32px;
  border: 1px solid var(--neutral-300);
  border-radius: 2px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--neutral-100);
  border-color: var(--earth-600);
  color: var(--earth-600);
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid var(--neutral-200);
}

.card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
```

### Formulários
```css
.form-input {
  width: 100%;
  padding: 16px 20px;
  border: 1px solid var(--neutral-300);
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: var(--earth-600);
  outline: none;
  box-shadow: 0 0 0 3px rgba(139, 115, 85, 0.1);
}
```

---

## 🌐 **Layout & Grid**

### Grid System
```css
/* Container Principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Grid Flexível */
.grid {
  display: grid;
  gap: 32px;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

### Espaçamento
```css
/* Sistema de Espaçamento */
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 32px;
--space-xl: 48px;
--space-2xl: 64px;
--space-3xl: 96px;
```

---

## ✨ **Animações & Micro-interações**

### Transições Base
```css
/* Padrão Universal */
.transition-base {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover Elevação */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* Fade In */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Animações Scroll
- **Parallax Sutil**: Elementos hero com movimento suave
- **Stagger Animation**: Cards aparecem sequencialmente
- **Progress Indicators**: Barras de progresso animadas
- **Smooth Scrolling**: Navegação fluida entre seções

---

## 📱 **Responsividade**

### Breakpoints
```css
/* Mobile First */
@media (min-width: 480px)  { /* Small phones */ }
@media (min-width: 768px)  { /* Tablets */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large screens */ }
```

### Adaptações Mobile
- **Tipografia**: Redução de 20-30% nos tamanhos
- **Espaçamento**: Padding/margin reduzidos
- **Touch Targets**: Mínimo 44px de área tocável
- **Navegação**: Drawer menu com animação suave

---

## 🎪 **Seções Específicas**

### Hero Section
```css
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--neutral-50) 0%, var(--accent-warm) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('texture-subtle.png') repeat;
  opacity: 0.03;
  mix-blend-mode: multiply;
}
```

### Portfolio Grid
```css
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin: 48px 0;
}

.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4/3;
}

.portfolio-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(26, 26, 26, 0.4) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover::after {
  opacity: 1;
}
```

---

## 🎨 **Elementos Orgânicos**

### Detalhes Sutis
- **Texturas**: Papel, linho, madeira em opacidade baixa (2-5%)
- **Formas**: Blobs orgânicos como backgrounds sutis
- **Bordas**: Radius variável (2px-12px) para quebrar rigidez
- **Sombras**: Suaves, nunca harsh

### Elementos Florais
- **Uso**: Apenas em detalhes, nunca dominantes
- **Estilo**: Silhuetas, line art, ilustrações minimalistas
- **Posicionamento**: Cantos, separadores, watermarks sutis
- **Opacidade**: Máximo 10% para não competir com conteúdo

---

## 🔍 **Acessibilidade**

### Contraste
- **Textos**: Mínimo 4.5:1 para textos normais
- **Títulos**: Mínimo 3:1 para textos grandes
- **Elementos interativos**: Foco visível sempre

### Navegação
- **Keyboard**: Tab order lógico
- **Screen readers**: Alt texts descritivos
- **Semantic HTML**: Estrutura clara e significativa

---

## 📊 **Performance**

### Otimizações
- **Imagens**: WebP com fallback, lazy loading
- **Fonts**: Preload das fontes críticas
- **CSS**: Critical CSS inline
- **JavaScript**: Bundle splitting, lazy loading

### Métricas Alvo
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse**: 90+ em todas as categorias

---

## 🎯 **Aplicação Prática**

### Home Page
- **Hero**: Texto grande + imagem arquitetural clean
- **Serviços**: Grid 2x2 com ícones sutis
- **About**: Foto dos fundadores + manifesto
- **Portfolio**: Masonry grid com hover effects

### Páginas Internas
- **Headers**: Título + breadcrumb elegante
- **Conteúdo**: Duas colunas com sidebar
- **CTAs**: Posicionados estrategicamente
- **Footer**: Informações + links sociais

### Formulários
- **Contato**: Clean, campos mínimos
- **Validação**: Mensagens claras e úteis
- **Sucesso**: Feedback visual positivo

---

**Filosofia Final**: Cada elemento visual deve refletir a sofisticação high-tech da Casa Flora, com toques orgânicos que emergem naturalmente, criando uma experiência que é ao mesmo tempo moderna e humana, profissional e acolhedora.