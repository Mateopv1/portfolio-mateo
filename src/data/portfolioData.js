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
      title: "NexusAI // Agente Comercial IA",
      subtitle: "Diseño UX/UI y desarrollo Front-End en React (Vite) para un agente comercial inteligente conectado a un backend en Python que captura vacantes, identifica decisores vía Apollo.io/LinkedIn y genera outreach personalizado.",
      category: "UX_SYSTEMS",
      client: "Aratalent Group",
      location: "MADRID / REMOTO",
      disciplineTag: "REACT / PYTHON / IA & APOLLO.IO",
      index: "01",
      gridSpan: "full",
      image: "/portfolio/proyectos/aratech/portada.jpg",
      dimensions: "AUTOMATIZACIÓN COMERCIAL // FULL-STACK",
      year: "2026",
      brandColor: "rgba(139, 92, 246, 0.09)",
      metrics: [
        { label: "STACK", value: "REACT + PYTHON" },
        { label: "ENRIQUECIMIENTO", value: "APOLLO.IO / LINKEDIN" },
        { label: "ARQUITECTURA", value: "API REST + IA" }
      ],
      challenge: "El equipo comercial necesitaba detectar automáticamente nuevas vacantes en portales como LinkedIn e InfoJobs por sector (Tech, Legal, Banca), normalizar los datos sin duplicados e identificar a los responsables de contratación (HR Managers, Hiring Managers) para acelerar el primer contacto.",
      solution: "Se construyó una plataforma full-stack con backend en Python (captura programada, clasificación con IA y enriquecimiento vía API de Apollo.io) y un panel modular en React con servicios desacoplados para vacantes, empresas, candidatos, clientes, autenticación y chat IA. Desde la interfaz, el equipo revisa vacantes, edita notas de LinkedIn y borradores de email generados por IA y gestiona el estado de seguimiento.",
      gallery: [
        "/portfolio/proyectos/aratech/una.jpg",
        "/portfolio/proyectos/aratech/dos.jpg",
        "/portfolio/proyectos/aratech/tres.jpg",
        "/portfolio/proyectos/aratech/cuatro.jpg",
        "/portfolio/proyectos/aratech/seis.jpg",
        "/portfolio/proyectos/aratech/cinco.jpg"
      ]
    },
    {
      id: 2,
      title: "Ecosistema Multi-Web Corporativo & SEO",
      subtitle: "Diseño y desarrollo de webs corporativas a medida para distintos clientes sobre CMS (principalmente Joomla), bajo arquitectura Mobile-First y optimización SEO/SEM.",
      category: "FRONT_END",
      client: "Agencia Luarcacom",
      location: "ASTURIAS",
      disciplineTag: "JOOMLA / HTML5 & CSS3 / SEO",
      index: "02",
      gridSpan: "left-wide",
      image: "/portfolio/proyectos/luarcacom/portada.jpg",
      dimensions: "CMS A MEDIDA // MOBILE-FIRST",
      year: "2023—ACTUALIDAD",
      brandColor: "rgba(16, 185, 129, 0.09)",
      metrics: [
        { label: "CMS PRINCIPAL", value: "JOOMLA" },
        { label: "ARQUITECTURA", value: "MOBILE-FIRST" },
        { label: "ESTRATEGIA", value: "SEO / SEM" }
      ],
      challenge: "Cada cliente requería una identidad digital diferenciada y autogestionable sin sacrificar velocidad de carga, adaptabilidad móvil ni capacidad de posicionamiento en buscadores.",
      solution: "Se desarrollaron sitios web a medida principalmente sobre Joomla (complementado con CSS3/HTML5 personalizado), estructurando cada proyecto desde cero para maximizar la conversión, el rendimiento en móvil y la indexación orgánica (SEO) junto a campañas SEM.",
      gallery: [
        "/portfolio/proyectos/luarcacom/cinco.png",
        "/portfolio/proyectos/luarcacom/seis.png",
        "/portfolio/proyectos/luarcacom/dos.png",
        "/portfolio/proyectos/luarcacom/cuatro.png",
        "/portfolio/proyectos/luarcacom/tres.png",
        "/portfolio/proyectos/luarcacom/siete.png",
        "/portfolio/proyectos/luarcacom/unojf.jpg",
        "/portfolio/proyectos/luarcacom/dosch.jpg",
        "/portfolio/proyectos/luarcacom/tresch.jpg"
      ]
    },
    {
      id: 3,
      title: "UNOW // App de Movilidad & Transporte Público",
      subtitle: "Investigación UX, identidad de marca, sistema iconográfico y prototipo interactivo en Adobe XD para mejorar la experiencia en el transporte público de Quito mediante geolocalización GPS en tiempo real.",
      category: "UX_RESEARCH",
      client: "TFM — Máster Diseño Gráfico Digital",
      location: "QUITO / ACADÉMICO",
      disciplineTag: "UX RESEARCH / UI DESIGN / ADOBE XD",
      index: "03",
      gridSpan: "right-narrow",
      image: "/portfolio/proyectos/tfm/portada.jpg",
      dimensions: "DISEÑO CENTRADO EN EL USUARIO // APP",
      year: "2022",
      brandColor: "rgba(52, 39, 123, 0.14)",
      metrics: [
        { label: "INVESTIGACIÓN", value: "75 ENCUESTAS" },
        { label: "VALIDACIÓN", value: "94.7% GPS" },
        { label: "PROTOTIPO", value: "ADOBE XD" }
      ],
      challenge: "Con la saturación vehicular de Quito y un sistema 'Pico y Placa' cada vez menos efectivo, el 62,6% de los encuestados valoraba negativamente el transporte público por falta de horarios fiables, desorganización e inseguridad. El reto era unificar autobús, taxi y bicicleta pública en una app clara y sin fricción.",
      solution: "Bajo metodología de Diseño Centrado en el Usuario (benchmarking de 6 apps, encuestas, personas, arquitectura jerárquica, wireframes y test con usuarios), se diseñó UNOW desde cero: identidad visual, set de iconos sobre retícula y prototipo en Adobe XD con seguimiento GPS en vivo, rutas multimodales y denuncias anónimas por código QR.",
      gallery: [
        "/portfolio/proyectos/tfm/wireframes-flujo.jpg",
        "/portfolio/proyectos/tfm/sistema-visual-iconos.jpg",
        "/portfolio/proyectos/tfm/ui-rutas-gps.jpg",
        "/portfolio/proyectos/tfm/ui-multimodal-qr.jpg"
      ]
    },
    {
      id: 4,
      title: "Qubby // Inventario Inteligente con QR",
      subtitle: "Aplicación web Full-Stack desacoplada para organizar cajas y trasteros mediante códigos QR únicos. Frontend SPA en Angular 17+ y backend API REST en Python/Django con PostgreSQL en Docker.",
      category: "SOFTWARE_ENGINEERING",
      client: "Proyecto Intermodular",
      location: "ACADÉMICO / EQUIPO",
      disciplineTag: "ANGULAR 17+ / DJANGO REST / DOCKER",
      index: "04",
      gridSpan: "left-narrow",
      image: "/portfolio/proyectos/tfc/portada.jpg",
      dimensions: "FULL-STACK SPA // ARQUITECTURA DESACOPLADA",
      year: "2026",
      brandColor: "rgba(243, 146, 0, 0.12)",
      metrics: [
        { label: "FRONTEND", value: "ANGULAR 17+" },
        { label: "BACKEND", value: "DJANGO + JWT" },
        { label: "INFRA", value: "DOCKER + SQL" }
      ],
      challenge: "Transformar espacios desordenados (mudanzas, trasteros o talleres) en un inventario digital accesible para cualquier perfil —incluyendo usuarios no técnicos— que permita consultar el contenido de una caja escaneando un código QR gratuito sin abrirla físicamente.",
      solution: "Se diseñó la identidad visual y el prototipo responsive en Figma y se desarrolló una arquitectura cliente-servidor desacoplada: SPA en Angular 17+ (Standalone Components, Signals, Route Guards e interceptores HTTP) conectada a una API REST en Django con autenticación JWT, verificación por email, hash PBKDF2-SHA256 y base de datos PostgreSQL normalizada en contenedores Docker.",
      gallery: [
        "/portfolio/proyectos/tfc/identidad-evolucion.jpg",
        "/portfolio/proyectos/tfc/ui-desktop-inventario.jpg",
        "/portfolio/proyectos/tfc/ui-mobile-qr.jpg",
        "/portfolio/proyectos/tfc/arquitectura-stack.jpg"
      ]
    },
  {
      id: 5,
      title: "Diseño Estratégico & Identidad // La Pila",
      subtitle: "Diseño gráfico, identidad visual y piezas digitales e impresas bajo criterios de ecodiseño para el estudio La Pila, destacando el sistema visual y social media de Casa de Aldea 'Flora & Fauna'.",
      category: "BRANDING",
      client: "Estudio de Diseño 'La Pila'",
      location: "LUARCA / ASTURIAS",
      disciplineTag: "BRANDING / ICONOGRAFÍA / ADOBE CC",
      index: "05",
      gridSpan: "right-wide",
      image: "/portfolio/proyectos/lapila/portada.jpg",
      dimensions: "DISEÑO SOSTENIBLE // PRINT & DIGITAL",
      year: "2022",
      brandColor: "rgba(16, 185, 129, 0.09)",
      metrics: [
        { label: "ENFOQUE", value: "ECODISEÑO" },
        { label: "ENTREGABLES", value: "PRINT & SOCIAL" },
        { label: "HERRAMIENTAS", value: "ILLUSTRATOR / ID" }
      ],
      challenge: "Traducir la filosofía de diseño estratégico y sostenible del estudio a proyectos locales con necesidades muy diversas —turismo rural, transporte y servicios— manteniendo coherencia gráfica entre soportes impresos, señalética y canales digitales.",
      solution: "Para 'Flora & Fauna — Casa de Aldea' se diseñó un calendario perpetuo promocional, un sistema modular de miniaturas e iconos para el feed de Instagram, retoque fotográfico web, un contrato interactivo y la vectorización técnica de la placa oficial de Casa de Aldea. Además, se colaboró en la iconografía y panelado de una estación de servicio y en papelería corporativa.",
      gallery: [
        "/portfolio/proyectos/lapila/calendario-flora-fauna.jpg",
        "/portfolio/proyectos/lapila/sistema-iconos-feed.jpg",
        "/portfolio/proyectos/lapila/vectorizacion-placa-ca.jpg"
      ]
    }
  ],
  en: [
    {
      id: 1,
      title: "NexusAI // AI Commercial Agent",
      subtitle: "UX/UI design and React (Vite) Front-End development for an AI commercial agent powered by a Python backend that tracks job openings, enriches decision-maker data via Apollo.io/LinkedIn, and drafts tailored outreach.",
      category: "UX_SYSTEMS",
      client: "Aratalent Group",
      location: "MADRID / REMOTE",
      disciplineTag: "REACT / PYTHON / AI & APOLLO.IO",
      index: "01",
      gridSpan: "full",
      image: "/portfolio/proyectos/aratech/portada.jpg",
      dimensions: "SALES AUTOMATION // FULL-STACK",
      year: "2026",
      brandColor: "rgba(139, 92, 246, 0.09)",
      metrics: [
        { label: "STACK", value: "REACT + PYTHON" },
        { label: "ENRICHMENT", value: "APOLLO.IO / LINKEDIN" },
        { label: "ARCHITECTURE", value: "REST API + AI" }
      ],
      challenge: "The sales team needed to automatically detect new job postings across LinkedIn and InfoJobs by vertical (Tech, Legal, Banking), normalize records without duplicates, and pinpoint key hiring decision-makers to speed up outbound prospecting.",
      solution: "Built a full-stack platform pairing a Python backend (scheduled vacancy capture, AI classification, and Apollo.io API enrichment) with a modular React dashboard featuring dedicated services for vacancies, companies, candidates, clients, authentication, and AI chat. Sales reps can review leads, edit AI-generated LinkedIn notes and cold email drafts, and track pipeline status in one place.",
      gallery: [
        "/portfolio/proyectos/aratech/una.jpg",
        "/portfolio/proyectos/aratech/dos.jpg",
        "/portfolio/proyectos/aratech/tres.jpg",
        "/portfolio/proyectos/aratech/cuatro.jpg",
        "/portfolio/proyectos/aratech/seis.jpg",
        "/portfolio/proyectos/aratech/cinco.jpg"
      ]
    },
    {
      id: 2,
      title: "Custom Corporate Web Ecosystem & SEO",
      subtitle: "Design and custom development of client websites built primarily on Joomla CMS, engineered with a Mobile-First architecture and SEO/SEM optimization.",
      category: "FRONT_END",
      client: "Agencia Luarcacom",
      location: "ASTURIAS",
      disciplineTag: "JOOMLA / HTML5 & CSS3 / SEO",
      index: "02",
      gridSpan: "left-wide",
      image: "/portfolio/proyectos/luarcacom/portada.jpg",
      dimensions: "CUSTOM CMS // MOBILE-FIRST",
      year: "2023—PRESENT",
      brandColor: "rgba(16, 185, 129, 0.09)",
      metrics: [
        { label: "PRIMARY CMS", value: "JOOMLA" },
        { label: "ARCHITECTURE", value: "MOBILE-FIRST" },
        { label: "STRATEGY", value: "SEO / SEM" }
      ],
      challenge: "Each client needed a tailored, easy-to-manage corporate website without compromising loading speed, mobile responsiveness, or search engine visibility.",
      solution: "Built custom websites primarily on Joomla with tailored HTML5/CSS3 styling, crafting bespoke visual hierarchies engineered for user retention, Mobile-First performance, organic SEO, and SEM campaigns.",
      gallery: [
        "/portfolio/proyectos/luarcacom/cinco.png",
        "/portfolio/proyectos/luarcacom/seis.png",
        "/portfolio/proyectos/luarcacom/dos.png",
        "/portfolio/proyectos/luarcacom/cuatro.png",
        "/portfolio/proyectos/luarcacom/tres.png",
        "/portfolio/proyectos/luarcacom/siete.png",
        "/portfolio/proyectos/luarcacom/unojf.jpg",
        "/portfolio/proyectos/luarcacom/dosch.jpg",
        "/portfolio/proyectos/luarcacom/tresch.jpg"
      ]
    },
    {
      id: 3,
      title: "UNOW // Public Transit & Mobility App",
      subtitle: "End-to-end UX research, brand identity, custom iconography, and interactive Adobe XD prototype designed to improve Quito's public transport experience through real-time GPS tracking.",
      category: "UX_RESEARCH",
      client: "Master's Thesis — Digital Graphic Design",
      location: "QUITO / ACADEMIC",
      disciplineTag: "UX RESEARCH / UI DESIGN / ADOBE XD",
      index: "03",
      gridSpan: "right-narrow",
      image: "/portfolio/proyectos/tfm/portada.jpg",
      dimensions: "USER-CENTERED DESIGN // MOBILE APP",
      year: "2022",
      brandColor: "rgba(52, 39, 123, 0.14)",
      metrics: [
        { label: "RESEARCH", value: "75 SURVEYS" },
        { label: "VALIDATION", value: "94.7% GPS" },
        { label: "PROTOTYPE", value: "ADOBE XD" }
      ],
      challenge: "Amid severe traffic congestion in Quito and an increasingly ineffective 'Pico y Placa' restriction, 62.6% of surveyed commuters rated public transit poorly due to unreliable schedules, disorganization, and safety concerns. The goal was to unify bus, taxi, and public bike services into one clear, frictionless interface.",
      solution: "Following a User-Centered Design process (6-app benchmarking, user surveys, personas, hierarchical IA, low-fi wireframes, and usability testing), UNOW was built from scratch: brand identity, grid-based custom iconography, and an Adobe XD prototype featuring live GPS tracking, multimodal routing, and anonymous QR incident reporting.",
      gallery: [
        "/portfolio/proyectos/tfm/wireframes-flujo.jpg",
        "/portfolio/proyectos/tfm/sistema-visual-iconos.jpg",
        "/portfolio/proyectos/tfm/ui-rutas-gps.jpg",
        "/portfolio/proyectos/tfm/ui-multimodal-qr.jpg"
      ]
    },
    {
      id: 4,
      title: "Qubby // Smart QR Inventory App",
      subtitle: "Decoupled Full-Stack web app for organizing boxes and storage spaces using unique QR codes. Built with an Angular 17+ SPA frontend and a Python/Django REST API backed by PostgreSQL in Docker.",
      category: "SOFTWARE_ENGINEERING",
      client: "DAW Intermodular Project",
      location: "ACADEMIC / TEAM",
      disciplineTag: "ANGULAR 17+ / DJANGO REST / DOCKER",
      index: "04",
      gridSpan: "left-narrow",
      image: "/portfolio/proyectos/tfc/portada.jpg",
      dimensions: "FULL-STACK SPA // DECOUPLED ARCHITECTURE",
      year: "2026",
      brandColor: "rgba(243, 146, 0, 0.12)",
      metrics: [
        { label: "FRONTEND", value: "ANGULAR 17+" },
        { label: "BACKEND", value: "DJANGO + JWT" },
        { label: "INFRA", value: "DOCKER + SQL" }
      ],
      challenge: "Turning cluttered spaces (moves, storage rooms, or workshops) into an intuitive digital inventory accessible to any user profile—enabling instant box lookup via free printable QR codes without opening containers.",
      solution: "Designed the visual identity and responsive UI in Figma, then engineered a decoupled client-server architecture: an Angular 17+ SPA (Standalone Components, Signals, Route Guards, and HTTP interceptors) consuming a Django REST API with JWT authentication, email verification, PBKDF2-SHA256 hashing, and a normalized PostgreSQL database running in Docker.",
      gallery: [
        "/portfolio/proyectos/tfc/identidad-evolucion.jpg",
        "/portfolio/proyectos/tfc/ui-desktop-inventario.jpg",
        "/portfolio/proyectos/tfc/ui-mobile-qr.jpg",
        "/portfolio/proyectos/tfc/arquitectura-stack.jpg"
      ]
    },
   {
      id: 5,
      title: "Strategic Design & Identity // La Pila",
      subtitle: "Graphic design, visual identity, and print/digital assets crafted under ecodesign principles at La Pila studio, spotlighting the branding and social media system for 'Flora & Fauna — Casa de Aldea'.",
      category: "BRANDING",
      client: "Design Studio 'La Pila'",
      location: "LUARCA / ASTURIAS",
      disciplineTag: "BRANDING / ICONOGRAPHY / ADOBE CC",
      index: "05",
      gridSpan: "right-wide",
      image: "/portfolio/proyectos/lapila/portada.jpg",
      dimensions: "SUSTAINABLE DESIGN // PRINT & DIGITAL",
      year: "2022",
      brandColor: "rgba(16, 185, 129, 0.09)",
      metrics: [
        { label: "APPROACH", value: "ECODESIGN" },
        { label: "DELIVERABLES", value: "PRINT & SOCIAL" },
        { label: "TOOLS", value: "ILLUSTRATOR / ID" }
      ],
      challenge: "Translating the studio's strategic and sustainable design ethos into diverse local client projects—rural hospitality, transport, and retail—while maintaining visual consistency across print, signage, and digital touchpoints.",
      solution: "Created a promotional perpetual calendar, a modular icon grid for Instagram, web photo retouching, an interactive contract, and a precision vectorization of the official 'Casa de Aldea' plaque for Flora & Fauna. Also contributed custom iconography and signage concepts for a service station alongside corporate stationery.",
      gallery: [
        "/portfolio/proyectos/lapila/calendario-flora-fauna.jpg",
        "/portfolio/proyectos/lapila/sistema-iconos-feed.jpg",
        "/portfolio/proyectos/lapila/vectorizacion-placa-ca.jpg"
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
    id: 1, // Cambia el ID o posición según donde quieras que aparezca
    plateNumber: "SERIE V // TFG", 
    year: "2024", 
    title: "Maternidad - Proyecto TFG", 
    medium: "Pintura", // Cambia esto por la técnica real
    dimensions: "100 × 100 CM", // Cambia esto por las dimensiones reales
    edition: "OBRA ORIGINAL", 
    image: "/portfolio/ilustraciones/tfg/8.jpg", // La portada en el grid y primera en el modal
    gallery: [
      "/portfolio/ilustraciones/tfg/3.jpg", // Segunda imagen grande
      "/portfolio/ilustraciones/tfg/1.jpg" // Tercera imagen grande
    ],
    processGallery: [
      "/portfolio/ilustraciones/tfg/10.jpg",
      "/portfolio/ilustraciones/tfg/2.jpg",
      "/portfolio/ilustraciones/tfg/9.jpg",
      "/portfolio/ilustraciones/tfg/4.jpg",
      "/portfolio/ilustraciones/tfg/5.jpg",
      "/portfolio/ilustraciones/tfg/6.jpg",
      "/portfolio/ilustraciones/tfg/7.jpg",
      "/portfolio/ilustraciones/tfg/11.jpg",
      "/portfolio/ilustraciones/tfg/12.jpg",
      "/portfolio/ilustraciones/tfg/13.jpg",
      "/portfolio/ilustraciones/tfg/14.jpg",
      "/portfolio/ilustraciones/tfg/15.png"
    ],
    description: "Proceso de desarrollo y resultado final de la serie pictórica para el Trabajo de Fin de Grado, centrada en la representación de la maternidad."
  },
 { 
    id: 2, // Cambia el ID o posición según corresponda
    plateNumber: "SERIE II // VECTOR", 
    year: "2022", 
    title: "Ilustración Vectorial Avanzada", 
    medium: "Adobe Illustrator & Composición Geométrica Digital", 
    dimensions: "4000 × 5000 PX", 
    edition: "SERIE DIGITAL", 
    image: "/portfolio/ilustraciones/ilustracion-dibu/ocho.jpg", // La portada (8)
    gallery: [
      "/portfolio/ilustraciones/ilustracion-dibu/uno.jpg",
      "/portfolio/ilustraciones/ilustracion-dibu/dos.jpg",
      "/portfolio/ilustraciones/ilustracion-dibu/tres.jpg"
    ],
    processGallery: [
      "/portfolio/ilustraciones/ilustracion-dibu/cuatro.jpg",
      "/portfolio/ilustraciones/ilustracion-dibu/cinco.jpg",
      "/portfolio/ilustraciones/ilustracion-dibu/seis.jpg",
      "/portfolio/ilustraciones/ilustracion-dibu/siete.jpg"
    ],
    description: "Exploración de la geometría pura y el color mediante herramientas digitales. La obra se basa en una retícula matemática estricta para lograr un equilibrio visual perfecto."
  },
{ 
    id: 3, // Cambia el ID según el orden que quieras en el grid
    plateNumber: "SERIE I // RETRATOS", 
    year: "2021", 
    title: "Estudio Anatómico y Claroscuro", 
    medium: "Grafito, carbón prensado y técnica mixta", 
    dimensions: "100 × 70 CM", 
    edition: "OBRA ORIGINAL", 
    image: "/portfolio/ilustraciones/retratos/cuatro.jpg", // La portada (4)
    gallery: [
      "/portfolio/ilustraciones/retratos/uno.jpg",
      "/portfolio/ilustraciones/retratos/dos.jpg",
      "/portfolio/ilustraciones/retratos/tres.jpg"
    ],
    processGallery: [
      "/portfolio/ilustraciones/retratos/cinco.jpg",
      "/portfolio/ilustraciones/retratos/seis.jpg",
      "/portfolio/ilustraciones/retratos/siete.jpg"
    ],
    description: "Estudio anatómico enfocado en la tensión muscular y el volumen corporal mediante la técnica de claroscuro clásico, desarrollado durante mi etapa en la USAL."
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