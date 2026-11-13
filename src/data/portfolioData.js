// src/data/portfolioData.js

export const TRANSLATIONS = {
  es: {
    heroMarquee1: "CÓDIGO  FRONT-END  REACT JAVASCRIPT  ",
    heroMarquee2: "DISEÑO  UX/UI  BELLAS ARTES FIGMA  ",
    roleLocation: "Desarrollador Front-End | Diseñador UX/UI | Marketing Digital\nLuarca / Madrid / Remoto",
    heroBio: "Construyo interfaces digitales donde el rigor del código se encuentra con la dirección de arte. Transformo conceptos complejos en experiencias web precisas, accesibles y diseñadas para convertir.",
    selectedPortfolio: "Portfolio seleccionado\n2017—2026",
    disciplineCross: "Desarrollo Front-End × Diseño UX/UI × Bellas Artes",
    scrollInspect: "Desliza para inspeccionar",
    sec01Tag: "01 / Experiencia y Proyectos",
    sec01Title: "Proyectos",
    filterAll: "Todos",
    filterUx: "Desarrollo / UX",
    filterArt: "Diseño y Arte",
    sec02Tag: "02 / Perfil Híbrido 360º",
    sec02Title: "Código y diseño",
    sec02Desc: "Fusiono usabilidad, creatividad y lógica de programación para construir interfaces eficientes, responsive y orientadas a la conversión. Acostumbrado a trabajar con metodologías ágiles, consumo de APIs y control de versiones.",
    layerBoth: "Síntesis 360º",
    layerSystem: "Front-End / UX",
    layerInk: "Bellas Artes",
    pillars: [
      ["01", "Arquitectura Front-End (React, Angular, JS)"],
      ["02", "Diseño UX/UI (Figma, Adobe CC, Mobile-First)"],
      ["03", "Estrategia y Conversión (SEO, SEM, Analytics)"],
    ],
    sec03Tag: "03 / Obra Plástica e Ilustración",
    sec03Title1: "Bellas Artes",
    sec03Title2: "& gráfica",
    sec03Desc: "Selección de obra plástica original, pintura mural, ilustración vectorial y exploración visual.",
    exhibitionsTitle: "Formación Académica y Certificaciones",
    closeEsc: "CERRAR [ESC]",
    nextStudy: "SIGUIENTE PROYECTO",
    inspectDossier: "INSPECCIONAR PROYECTO →",
  },
  en: {
    heroMarquee1: "CODE  FRONT-END  REACT JAVASCRIPT ✦ ",
    heroMarquee2: "DESIGN  UX/UI  FINE ARTS FIGMA  ",
    roleLocation: "Front-End Developer | UX/UI Designer | Digital Marketing\nLuarca / Madrid / Remote",
    heroBio: "Building digital interfaces where code rigor meets art direction. Turning complex concepts into precise, accessible, and conversion-driven web experiences.",
    selectedPortfolio: "Selected portfolio\n2017—2026",
    disciplineCross: "Front-End Development × UX/UI Design × Fine Arts",
    scrollInspect: "Scroll to inspect",
    sec01Tag: "01 / Experience & Selected Work",
    sec01Title: "Work index",
    filterAll: "All work",
    filterUx: "Dev / UX",
    filterArt: "Design & Art",
    sec02Tag: "02 / 360º Hybrid Profile",
    sec02Title: "Code meets craft",
    sec02Desc: "Merging usability, creativity, and programming logic to build efficient, responsive, conversion-driven interfaces. Experienced in Agile workflows, REST API integration, and Git version control.",
    layerBoth: "360º Synthesis",
    layerSystem: "Front-End / UX",
    layerInk: "Fine Arts",
    pillars: [
      ["01", "Front-End Architecture (React, Angular, JS)"],
      ["02", "UX/UI Design (Figma, Adobe CC, Mobile-First)"],
      ["03", "Growth & Conversion (SEO, SEM, Analytics)"],
    ],
    sec03Tag: "03 / Fine Art & Illustration",
    sec03Title1: "Material",
    sec03Title2: "studies",
    sec03Desc: "Selected archive of physical paintings, collective murals, vector illustration, and visual identity.",
    exhibitionsTitle: "Academic Background & Certifications",
    closeEsc: "CLOSE [ESC]",
    nextStudy: "NEXT CASE STUDY",
    inspectDossier: "INSPECT DOSSIER →",
  }
};

export const FEATURED_PROJECTS_DATA = {
  es: [
    {
      id: 1,
      title: "Agente Comercial IA // Panel de Control",
      subtitle: "Diseño UX/UI en Figma y desarrollo Front-End en React del panel de control para un Agente Comercial, automatizando el outreach y la visualización de vacantes.",
      category: "UX_SYSTEMS",
      client: "Aratalent",
      location: "MADRID / REMOTO",
      disciplineTag: "REACT / APIs REST / AUTOMATIZACIÓN",
      index: "01",
      gridSpan: "full",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
      dimensions: "CONVERSIÓN DE NEGOCIO // API",
      year: "2026",
      brandColor: "rgba(139, 92, 246, 0.09)", 
      metrics: [
        { label: "FRONT-END", value: "REACT" },
        { label: "INTEGRACIÓN", value: "APOLLO.IO" },
        { label: "ENFOQUE", value: "CONVERSIÓN" }
      ],
      challenge: "El reto consistía en unificar la visualización de vacantes y automatizar el contacto comercial sin perder el toque humano, integrando grandes volúmenes de datos en un único panel intuitivo.",
      solution: "Se desarrolló una interfaz modular en React conectada a la API de Apollo.io, estructurando la información mediante un diseño limpio en Figma que optimiza el flujo de trabajo diario del equipo comercial.",
      gallery: [
        "/rutas-reales/aratalent-ia-detalle1.jpg",
        "/rutas-reales/aratalent-ia-detalle2.jpg",
        "/rutas-reales/aratalent-ia-fullpage.jpg"
      ]
    },
    {
      id: 2,
      title: "Ecosistema Multi-Web Corporativo & SEO",
      subtitle: "Desarrollo de tres webs corporativas bajo una estrategia común Mobile-First, optimizadas para posicionamiento orgánico (SEO) y rendimiento en campañas SEM.",
      category: "FRONT_END",
      client: "Agencia Luarcacom",
      location: "ASTURIAS",
      disciplineTag: "HTML5 / CSS3 / CMS",
      index: "02",
      gridSpan: "left-wide",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      dimensions: "MOBILE-FIRST // SEO & SEM",
      year: "2023—ACTUALIDAD",
      brandColor: "rgba(16, 185, 129, 0.09)", 
      metrics: [
        { label: "ARQUITECTURA", value: "MOBILE-FIRST" },
        { label: "PLATAFORMAS", value: "WP & JOOMLA" },
        { label: "ESTRATEGIA", value: "SEO / SEM" }
      ],
      challenge: "El cliente necesitaba unificar varias plataformas en un ecosistema web corporativo ágil, moderno y completamente optimizado para dispositivos móviles y motores de búsqueda.",
      solution: "Se implementó una arquitectura gestionada a través de WordPress y Joomla, rediseñando la jerarquía visual para mejorar la retención de usuarios y los tiempos de carga.",
      gallery: [
        "/rutas-reales/luarcacom-mockup-mobile.jpg",
        "/rutas-reales/luarcacom-seo-dashboard.jpg",
        "/rutas-reales/luarcacom-fireshot.jpg"
      ]
    },
    {
      id: 3,
      title: "TFM // App de Control de Tráfico Inteligente",
      subtitle: "Investigación UX/UI avanzada y diseño de producto enfocado en la monitorización y control de tráfico en entornos urbanos mediante flujos de usuario complejos.",
      category: "UX_RESEARCH",
      client: "Proyecto de Fin de Máster",
      location: "ACADÉMICO",
      disciplineTag: "UX AVANZADO / SISTEMAS DE DATOS",
      index: "03",
      gridSpan: "right-narrow",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
      dimensions: "ARQUITECTURA DE INFORMACIÓN // UI",
      year: "2025",
      brandColor: "rgba(139, 92, 246, 0.09)", 
      metrics: [
        { label: "ENFOQUE", value: "DATOS DENSOS" },
        { label: "SISTEMAS", value: "DISEÑO UI" },
        { label: "USABILIDAD", value: "ALTO NIVEL" }
      ],
      challenge: "Diseñar una interfaz capaz de procesar y mostrar datos de tráfico en tiempo real de forma digerible, requiriendo una arquitectura de la información extremadamente precisa.",
      solution: "Se diseñó un sistema de componentes escalables y paneles de visualización de datos que priorizan la usabilidad y permiten a los operadores tomar decisiones críticas sin carga cognitiva.",
      gallery: [
        "/rutas-reales/tfm-trafico-wireframes.jpg",
        "/rutas-reales/tfm-trafico-dashboard.jpg",
        "/rutas-reales/tfm-trafico-mobile.jpg"
      ]
    },
    {
      id: 4,
      title: "TFG // Cubby",
      subtitle: "Desarrollo completo e integral de ingeniería de software. Arquitectura Front-End y backend demostrando autonomía total y resolución de problemas algorítmicos complejos.",
      category: "SOFTWARE_ENGINEERING",
      client: "Proyecto de Fin de Grado",
      location: "ACADÉMICO",
      disciplineTag: "ARQUITECTURA DE SOFTWARE / FULL-STACK",
      index: "04",
      gridSpan: "left-narrow",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      dimensions: "RIGOR TÉCNICO // DESARROLLO ROBUSTO",
      year: "2024",
      brandColor: "rgba(245, 158, 11, 0.09)",
      metrics: [
        { label: "DESARROLLO", value: "FULL-STACK" },
        { label: "ENFOQUE", value: "INGENIERÍA" },
        { label: "ESTADO", value: "AUTÓNOMO" }
      ],
      challenge: "Construir una aplicación robusta desde cero, gestionando tanto la lógica de servidor como la interfaz de usuario bajo estándares estrictos de ingeniería de software.",
      solution: "Arquitectura escalable implementando patrones de diseño eficientes, logrando una base de código limpia, mantenible y con una integración fluida entre Front-End y Backend.",
      gallery: [
        "/rutas-reales/tfg-cubby-codigo.jpg",
        "/rutas-reales/tfg-cubby-arquitectura.jpg",
        "/rutas-reales/tfg-cubby-interfaz.jpg"
      ]
    },
    {
      id: 5,
      title: "Sistemas de Identidad & Medios Interactivos",
      subtitle: "Diseño gráfico, manuales de identidad visual y maquetación de piezas adaptadas a múltiples resoluciones digitales e interactivas.",
      category: "BRANDING",
      client: "Estudio de Diseño 'La Pila'",
      location: "ESPAÑA",
      disciplineTag: "BRANDING MODULAR / ADOBE CC",
      index: "05",
      gridSpan: "right-wide",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
      dimensions: "DISEÑO INTERACTIVO // MULTIDISPOSITIVO",
      year: "2021—2022",
      brandColor: "rgba(16, 185, 129, 0.09)", 
      metrics: [
        { label: "ENTORNOS", value: "WEB & DIGITAL" },
        { label: "ENTREGABLES", value: "BRAND MANUALS" },
        { label: "HERRAMIENTAS", value: "ADOBE CC" }
      ],
      challenge: "Crear sistemas de identidad visual versátiles que pudieran adaptarse dinámicamente a múltiples resoluciones de pantalla y formatos interactivos.",
      solution: "Producción de manuales de marca rigurosos y maquetación de piezas gráficas modulares que garantizan la consistencia de la identidad visual en cualquier dispositivo.",
      gallery: [
        "/rutas-reales/lapila-grid.jpg",
        "/rutas-reales/lapila-mockups.jpg",
        "/rutas-reales/lapila-manual.jpg"
      ]
    }
  ],
  en: [
    {
      id: 1,
      title: "AI Commercial Agent // Control Dashboard",
      subtitle: "UX/UI design in Figma and React Front-End development for an AI-powered Commercial Agent, automating outreach and vacancy visualization.",
      category: "UX_SYSTEMS",
      client: "Aratalent",
      location: "MADRID / REMOTE",
      disciplineTag: "REACT / REST APIs / AUTOMATION",
      index: "01",
      gridSpan: "full",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
      dimensions: "BUSINESS CONVERSION // API",
      year: "2026",
      brandColor: "rgba(139, 92, 246, 0.09)", 
      metrics: [
        { label: "FRONT-END", value: "REACT" },
        { label: "INTEGRATION", value: "APOLLO.IO" },
        { label: "FOCUS", value: "CONVERSION" }
      ],
      challenge: "The challenge was to unify vacancy visualization and automate commercial outreach without losing the human touch, integrating large data volumes.",
      solution: "Developed a modular React interface connected to the Apollo.io API, structuring information through a clean Figma design that optimizes workflow.",
      gallery: [
        "/rutas-reales/aratalent-ia-detalle1.jpg",
        "/rutas-reales/aratalent-ia-detalle2.jpg",
        "/rutas-reales/aratalent-ia-fullpage.jpg"
      ]
    },
    {
      id: 2,
      title: "Corporate Web Ecosystem & SEO",
      subtitle: "Development of three corporate websites under a shared Mobile-First strategy, optimized for organic positioning (SEO) and SEM campaign performance.",
      category: "FRONT_END",
      client: "Agencia Luarcacom",
      location: "ASTURIAS",
      disciplineTag: "HTML5 / CSS3 / CMS",
      index: "02",
      gridSpan: "left-wide",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      dimensions: "MOBILE-FIRST // SEO & SEM",
      year: "2023—PRESENT",
      brandColor: "rgba(16, 185, 129, 0.09)", 
      metrics: [
        { label: "ARCHITECTURE", value: "MOBILE-FIRST" },
        { label: "PLATFORMS", value: "WP & JOOMLA" },
        { label: "STRATEGY", value: "SEO / SEM" }
      ],
      challenge: "The client needed to unify several platforms into an agile, modern corporate web ecosystem fully optimized for mobile devices and search engines.",
      solution: "Implemented a Mobile-First architecture managed through WordPress and Joomla, redesigning the visual hierarchy to improve user retention.",
      gallery: [
        "/rutas-reales/luarcacom-mockup-mobile.jpg",
        "/rutas-reales/luarcacom-seo-dashboard.jpg",
        "/rutas-reales/luarcacom-fireshot.jpg"
      ]
    },
    {
      id: 3,
      title: "Master's Thesis // Smart Traffic App",
      subtitle: "Advanced UX/UI research and product design focused on urban traffic monitoring and control through complex user flows.",
      category: "UX_RESEARCH",
      client: "Master's Final Project",
      location: "ACADEMIC",
      disciplineTag: "ADVANCED UX / DATA SYSTEMS",
      index: "03",
      gridSpan: "right-narrow",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
      dimensions: "INFORMATION ARCHITECTURE // UI",
      year: "2025",
      brandColor: "rgba(139, 92, 246, 0.09)",
      metrics: [
        { label: "FOCUS", value: "DENSE DATA" },
        { label: "SYSTEMS", value: "UI DESIGN" },
        { label: "USABILITY", value: "HIGH-LEVEL" }
      ],
      challenge: "Designing an interface capable of processing and displaying real-time traffic data in a digestible way, requiring precise information architecture.",
      solution: "Designed a system of scalable components and data visualization dashboards that prioritize usability and reduce cognitive load for operators.",
      gallery: [
        "/rutas-reales/tfm-trafico-wireframes.jpg",
        "/rutas-reales/tfm-trafico-dashboard.jpg",
        "/rutas-reales/tfm-trafico-mobile.jpg"
      ]
    },
    {
      id: 4,
      title: "Degree Thesis // Cubby",
      subtitle: "Comprehensive software engineering development. Front-End and backend architecture demonstrating full autonomy and complex problem solving.",
      category: "SOFTWARE_ENGINEERING",
      client: "Bachelor's Final Project",
      location: "ACADEMIC",
      disciplineTag: "SOFTWARE ARCHITECTURE / FULL-STACK",
      index: "04",
      gridSpan: "left-narrow",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      dimensions: "TECHNICAL RIGOR // ROBUST DEV",
      year: "2024",
      brandColor: "rgba(245, 158, 11, 0.09)", 
      metrics: [
        { label: "DEVELOPMENT", value: "FULL-STACK" },
        { label: "APPROACH", value: "ENGINEERING" },
        { label: "STATUS", value: "AUTONOMOUS" }
      ],
      challenge: "Building a robust application from scratch, managing both server logic and user interface under strict software engineering standards.",
      solution: "Scalable architecture implementing efficient design patterns, achieving a clean, maintainable codebase with seamless Front-End/Backend integration.",
      gallery: [
        "/rutas-reales/tfg-cubby-codigo.jpg",
        "/rutas-reales/tfg-cubby-arquitectura.jpg",
        "/rutas-reales/tfg-cubby-interfaz.jpg"
      ]
    },
    {
      id: 5,
      title: "Identity Systems & Interactive Media",
      subtitle: "Graphic design, brand identity manuals, and layout of digital assets adapted to multiple interactive resolutions.",
      category: "BRANDING",
      client: "Design Studio 'La Pila'",
      location: "SPAIN",
      disciplineTag: "MODULAR BRANDING / ADOBE CC",
      index: "05",
      gridSpan: "right-wide",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
      dimensions: "INTERACTIVE DESIGN // MULTI-DEVICE",
      year: "2021—2022",
      brandColor: "rgba(16, 185, 129, 0.09)", 
      metrics: [
        { label: "ENVIRONMENTS", value: "WEB & DIGITAL" },
        { label: "DELIVERABLES", value: "BRAND MANUALS" },
        { label: "TOOLS", value: "ADOBE CC" }
      ],
      challenge: "Creating versatile visual identity systems capable of dynamically adapting to multiple screen resolutions and interactive formats.",
      solution: "Produced rigorous brand manuals and modular graphic layouts ensuring visual identity consistency across any device.",
      gallery: [
        "/rutas-reales/lapila-grid.jpg",
        "/rutas-reales/lapila-mockups.jpg",
        "/rutas-reales/lapila-manual.jpg"
      ]
    }
  ]
};

export const BRAND_LOGOS_DATA = [
  {
    id: "01",
    client: "Aratalent",
    category: "Identidad Corporativa Principal",
    blueprintDesc: "Trazado geométrico en wireframe sobre fondo obsidiana. Guías de radio, círculos proporcionales y nodos de vectores.",
    finalDesc: "Isotipo limpio y tipografía corporativa contrastada en blanco absoluto.",
    blueprintImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    finalImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    id: "02",
    client: "Papi",
    category: "Símbolo Modular & Retícula",
    blueprintDesc: "Ejes de simetría horizontal/vertical y proporciones basadas en retícula matemática.",
    finalDesc: "Versión definitiva aplicada y optimizada para soportes digitales y físicos.",
    blueprintImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    finalImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1"
  },
  {
    id: "03",
    client: "Casa Chocolate",
    category: "Logotipo Tipográfico Custom",
    blueprintDesc: "Deconstrucción de glifos, kernings y estudio de contraformas vectoriales.",
    finalDesc: "Wordmark pulido con acabado editorial Studio.",
    blueprintImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    finalImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1"
  },
  {
    id: "04",
    client: "Casa Chouireiro",
    category: "Isotipo Geométrico",
    blueprintDesc: "Trama de construcción poligonal y ángulos de precisión.",
    finalDesc: "Símbolo aislado con su respectivo manual de reducción mínima.",
    blueprintImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    finalImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1"
  },
  {
    id: "05",
    client: "Padel", 
    category: "Sistema de Marca Extensible",
    blueprintDesc: "Esquema de proporciones áureas y variantes del logotipo según escala.",
    finalDesc: "Presentación de la identidad visual unificada lista para producción.",
    blueprintImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    finalImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  }
];

export const FINE_ART_PLATES = [
  { 
    id: 1, 
    plateNumber: "SERIE I // USAL", 
    year: "2021", 
    title: "Estudio Anatómico y Claroscuro", 
    medium: "Grafito, carbón prensado y técnica mixta sobre papel", 
    dimensions: "100 × 70 CM", 
    edition: "OBRA ORIGINAL", 
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800",
    gallery: ["/rutas-reales/anatomia-detalle-1.jpg", "/rutas-reales/anatomia-detalle-2.jpg"],
    description: "Estudio anatómico enfocado en la tensión muscular y el volumen corporal mediante la técnica de claroscuro clásico, desarrollado durante mi etapa en la USAL."
  },
  { 
    id: 2, 
    plateNumber: "SERIE II // VECTOR", 
    year: "2022", 
    title: "Ilustración Vectorial Avanzada", 
    medium: "Adobe Illustrator & Composición Geométrica Digital", 
    dimensions: "4000 × 5000 PX", 
    edition: "SERIE DIGITAL", 
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800",
    gallery: ["/rutas-reales/vector-proceso.jpg", "/rutas-reales/vector-zoom.jpg"],
    description: "Exploración de la geometría pura y el color mediante herramientas digitales. La obra se basa en una retícula matemática estricta para lograr un equilibrio visual perfecto."
  },
  { 
    id: 3, 
    plateNumber: "SERIE III // MURAL", 
    year: "2021", 
    title: "Boceto Estructural 'Los Muros'", 
    medium: "Previsualización digital y pintura acrílica exterior", 
    dimensions: "ESCALA MURAL", 
    edition: "PROYECTO APS", 
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    gallery: ["/rutas-reales/mural-boceto.jpg", "/rutas-reales/mural-resultado.jpg"],
    description: "Fase de ideación y desarrollo estructural para el proyecto mural 'Los Muros'. Combina la planificación arquitectónica digital con la ejecución pictórica tradicional."
  },
  { 
    id: 4, 
    plateNumber: "SERIE IV // PROCESOS", 
    year: "2020", 
    title: "Cuadernos de Campo & Procesos Gráficos", 
    medium: "Apuntes de campo, experimentación matérica y texturas", 
    dimensions: "MÚLTIPLES FORMATOS", 
    edition: "DIARIOS VISUALES", 
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    gallery: ["/rutas-reales/cuaderno-1.jpg", "/rutas-reales/cuaderno-2.jpg"],
    description: "Selección de apuntes al natural, ensayos de color y exploración conceptual de procesos artísticos paralelos al desarrollo de obra."
  }
];

export const EXHIBITIONS_DATA = {
  es: [
    { year: "DAW", event: "Grado Superior de Técnico en Desarrollo de Aplicaciones Web", role: "React, Angular, JavaScript, Python, Java, SQL, Git", city: "UNIR" },
    { year: "MÁSTER", event: "Máster Universitario en Marketing Digital", role: "SEO/SEM, Google Analytics, Google Ads, Conversión", city: "UNIR" },
    { year: "MÁSTER", event: "Máster Universitario en Diseño Gráfico Digital", role: "UX/UI, Figma, Adobe Creative Cloud, Sistemas Visuales", city: "UNIR" },
    { year: "GRADO", event: "Grado en Bellas Artes", role: "Dirección de Arte, Ilustración, Pintura y Composición", city: "USAL" },
    { year: "2020—23", event: "Certificaciones: Google Analytics, SEO/SEM (Webpositer), Programación Web (Aulab)", role: "Formación Continua Especializada", city: "ONLINE" }
  ],
  en: [
    { year: "HIGHER VET", event: "Higher Technician in Web Application Development (DAW)", role: "React, Angular, JavaScript, Python, Java, SQL, Git", city: "UNIR" },
    { year: "MASTER'S", event: "Master's Degree in Digital Marketing", role: "SEO/SEM, Google Analytics, Google Ads, Conversion", city: "UNIR" },
    { year: "MASTER'S", event: "Master's Degree in Digital Graphic Design", role: "UX/UI, Figma, Adobe Creative Cloud, Visual Systems", city: "UNIR" },
    { year: "BACHELOR'S", event: "Bachelor of Fine Arts (BFA)", role: "Art Direction, Illustration, Painting & Composition", city: "USAL" },
    { year: "2020—23", event: "Certifications: Google Analytics, SEO/SEM, Web Programming (Aulab)", role: "Specialized Continuing Education", city: "ONLINE" }
  ]
};