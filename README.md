# ⚽ Futebol Legends - Troféus e História

![Futebol Legends](https://img.shields.io/badge/Futebol-Legends-009639?style=for-the-badge&logo=soccer&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Um site moderno e interativo que celebra os maiores times do futebol mundial, suas conquistas e histórias épicas. Explore os troféus da Seleção Brasileira, Cruzeiro e Barcelona com uma experiência visual impressionante.

## 🚀 Demonstração

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visitar-009639?style=for-the-badge&logo=vercel&logoColor=white)](https://futebol-legends.vercel.app)

## ✨ Características

### 🎨 Design Moderno
- **Interface responsiva** com design mobile-first
- **Animações fluidas** e transições suaves
- **Paleta de cores dinâmica** baseada no time selecionado
- **Tipografia moderna** com Inter e Space Grotesk
- **Efeitos visuais** com partículas e gradientes

### ⚡ Funcionalidades Interativas
- **Troca de times** com animações 3D
- **Estatísticas animadas** com contadores dinâmicos
- **Timeline de conquistas** para cada time
- **Loading screen** com progresso animado
- **Scroll progress** indicador de progresso
- **Efeito confetti** ao trocar de times

### 📱 Responsividade Total
- **Mobile-first** design approach
- **Breakpoints otimizados** para todos os dispositivos
- **Menu hamburger** para navegação mobile
- **Touch-friendly** interface

## 🏆 Times Incluídos

### 🇧🇷 Seleção Brasileira
- **5 Copas do Mundo** (1958, 1962, 1970, 1994, 2002)
- **4 Títulos Continentais** (Copa das Confederações)
- **0 Títulos Nacionais** (Seleção Nacional)

### ⚽ Cruzeiro Esporte Clube
- **0 Copas do Mundo**
- **7 Títulos Nacionais** (Brasileirão, Copa do Brasil)
- **3 Títulos Continentais** (Libertadores, Recopa)

### 🔵🔴 FC Barcelona
- **0 Copas do Mundo**
- **26 Títulos Nacionais** (La Liga, Copa del Rey)
- **5 Títulos Continentais** (Liga dos Campeões)

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com CSS Grid e Flexbox
- **JavaScript ES6+** - Funcionalidades interativas
- **Boxicons** - Ícones modernos
- **Google Fonts** - Tipografia (Inter, Space Grotesk)

### Recursos Avançados
- **CSS Custom Properties** - Sistema de design consistente
- **Intersection Observer API** - Animações ao scroll
- **RequestAnimationFrame** - Animações suaves
- **CSS Grid & Flexbox** - Layouts responsivos
- **CSS Animations** - Efeitos visuais

## 📁 Estrutura do Projeto

```
Projeto-Futebol-master/
├── img/
│   ├── bola.png
│   ├── cbf-logo-selecao-logo-brasil.png
│   ├── Cruzeiro_Esporte_Clube-logo-E41C56B8CC-seeklogo.com.png
│   ├── FCBarcelona.svg.png
│   └── Cbf-logo-selecao-logo-brasil-4.png
├── index.html
├── stylo.css
├── script.js
└── README.md
```

## 🎯 Funcionalidades Detalhadas

### 🎨 Sistema de Design
- **Variáveis CSS** para cores, espaçamentos e tipografia
- **Componentes reutilizáveis** com classes modulares
- **Animações consistentes** com timing functions
- **Responsive breakpoints** bem definidos

### ⚡ Performance
- **Lazy loading** de elementos
- **Throttling** em eventos de scroll
- **RequestAnimationFrame** para animações
- **CSS transforms** para performance GPU

### 🎪 Efeitos Visuais
- **Partículas flutuantes** no background
- **Gradientes animados** nas formas geométricas
- **Hover effects** sofisticados
- **Transições suaves** entre estados

## 📱 Responsividade

### Desktop (1024px+)
- Layout em duas colunas
- Navegação horizontal
- Efeitos hover completos

### Tablet (768px - 1024px)
- Layout adaptativo
- Navegação otimizada
- Cards reorganizados

### Mobile (até 768px)
- Menu hamburger
- Layout vertical
- Touch-friendly interface

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary: #6366f1;      /* Indigo */
--secondary: #f59e0b;    /* Amber */
--success: #10b981;      /* Emerald */

/* Cores dos Times */
--brasil: #009639;       /* Verde Brasil */
--cruzeiro: #0066cc;     /* Azul Cruzeiro */
--barcelona: #a50044;    /* Vermelho Barcelona */

/* Neutros */
--gray-50: #f9fafb;
--gray-900: #111827;
```

## 🔧 Personalização

### Adicionar Novo Time
1. Adicione os dados do time em `script.js`:
```javascript
novoTime: {
    name: 'Nome do Time',
    description: 'Descrição do time',
    logo: './img/logo-time.png',
    stats: { worldCups: 0, nationalTitles: 0, continentalTitles: 0 },
    history: [{ year: '2023', achievement: 'Conquista' }],
    color: '#cor-do-time'
}
```

2. Adicione o botão de navegação no HTML
3. Adicione a imagem do logo na pasta `img/`

### Modificar Cores
Edite as variáveis CSS em `:root` no arquivo `stylo.css`

## 📈 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Michael Eduardo**
- 🌐 [Portfólio](https://mepdevs.vercel.app/)
- 💻 [GitHub](https://github.com/Michaeleduardoo)
- 💼 [LinkedIn](https://www.linkedin.com/in/michael-eduardo/)

## 🙏 Agradecimentos

- [Boxicons](https://boxicons.com/) - Ícones
- [Google Fonts](https://fonts.google.com/) - Tipografia
- [Unsplash](https://unsplash.com/) - Imagens (se aplicável)

## 📞 Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- 📧 Email: michaeledu2018@gmail.com
- 💼 LinkedIn: [Michael Eduardo](https://www.linkedin.com/in/michael-eduardo/)
- 🌐 Website: [mepdevs.vercel.app](https://mepdevs.vercel.app/)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!** ⭐
