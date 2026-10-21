import { useState, useEffect } from "react";

// --- TRADUCCIONES NATIVAS (ES / EN) ---
const TRANSLATIONS = {
  es: {
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
    sec02Title: "Código y diseño.",
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
    sec03Title2: "& gráfica.",
    sec03Desc: "Selección de obra plástica original, pintura mural, ilustración vectorial y exploración visual.",
    exhibitionsTitle: "Formación Académica y Certificaciones",
    closeEsc: "CERRAR [ESC]",
    nextStudy: "SIGUIENTE PROYECTO",
    inspectDossier: "INSPECCIONAR PROYECTO →",
  },
  en: {
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
    sec02Title: "Code meets craft.",
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
    sec03Title2: "studies.",
    sec03Desc: "Selected archive of physical paintings, collective murals, vector illustration, and visual identity.",
    exhibitionsTitle: "Academic Background & Certifications",
    closeEsc: "CLOSE [ESC]",
    nextStudy: "NEXT CASE STUDY",
    inspectDossier: "INSPECT DOSSIER →",
  }
};

// --- BASE DE DATOS REAL DE PROYECTOS (ES / EN) ---
const FEATURED_PROJECTS_DATA = {
  es: [
    {
      id: 1,
      title: "Agente Comercial IA // Panel de Control",
      subtitle: "Diseño UX/UI en Figma y desarrollo Front-End en React del panel de control para un Agente Comercial impulsado por IA, optimizando la visualización de vacantes y automatizando el outreach mediante la integración con la API de Apollo.io.",
      category: "UX_SYSTEMS",
      client: "Aratalent",
      location: "MADRID / REMOTO",
      disciplineTag: "REACT / FIGMA / API REST",
      index: "01",
      gridSpan: "full",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
      dimensions: "REACT + FASTAPI // AGILE GIT",
      year: "2026",
      metrics: [
        { label: "STACK FRONT-END", value: "REACT / CSS" },
        { label: "INTEGRACIÓN", value: "APOLLO API" },
        { label: "BACKEND SYNC", value: "PYTHON / GIT" }
      ]
    },
    {
      id: 2,
      title: "Ecosistema Web Corporativo & Marketing",
      subtitle: "Desarrollo Front-End (HTML5, CSS3) y gestión avanzada de CMS (WordPress, Joomla) para la creación y mantenimiento técnico de sitios corporativos Mobile-First, junto con campañas de marketing digital.",
      category: "UX_SYSTEMS",
      client: "Agencia Luarcacom",
      location: "ASTURIAS",
      disciplineTag: "FRONT-END / WORDPRESS / JOOMLA",
      index: "02",
      gridSpan: "left-wide",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      dimensions: "MOBILE-FIRST // SEO & SEM",
      year: "2023—ACTUALIDAD",
      metrics: [
        { label: "ARQUITECTURA", value: "MOBILE-FIRST" },
        { label: "PLATAFORMAS", value: "WP & JOOMLA" },
        { label: "ESTRATEGIA", value: "SEO / RRSS" }
      ]
    },
    {
      id: 3,
      title: "Rediseño Web & Rebranding Aratalent",
      subtitle: "Desarrollo íntegro de la web corporativa en WordPress y rediseño completo de la identidad visual de la marca (logotipo), entregando un producto optimizado para la conversión y campañas de marketing.",
      category: "UX_SYSTEMS",
      client: "Aratalent",
      location: "REMOTO",
      disciplineTag: "WORDPRESS / BRANDING / UI",
      index: "03",
      gridSpan: "right-narrow",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
      dimensions: "WEB CORPORATIVA // BRANDING",
      year: "2026",
      metrics: [
        { label: "ENFOQUE", value: "CONVERSIÓN" },
        { label: "IDENTIDAD", value: "REBRANDING" },
        { label: "CMS", value: "WORDPRESS" }
      ]
    },
    {
      id: 4,
      title: "Sistemas de Identidad & Diseño Interactivo",
      subtitle: "Diseño y maquetación de piezas gráficas y material digital interactivo para entornos web, adaptando formatos a diferentes resoluciones y creando manuales de identidad visual.",
      category: "ILLUSTRATION",
      client: "Estudio de Diseño 'La Pila'",
      location: "ESPAÑA",
      disciplineTag: "DISEÑO INTERACTIVO / BRANDING",
      index: "04",
      gridSpan: "left-narrow",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
      dimensions: "MULTI-RESOLUCIÓN // ADOBE CC",
      year: "2021—2022",
      metrics: [
        { label: "ENTORNOS", value: "WEB & DIGITAL" },
        { label: "ENTREGABLES", value: "BRAND MANUALS" },
        { label: "SUITE", value: "ADOBE CC" }
      ]
    },
    {
      id: 5,
      title: "Los Muros que Enseñan // Proyecto APS",
      subtitle: "Desarrollo de la propuesta visual y coordinación con el equipo en el proceso creativo de intervención mural colectiva, aplicando conceptos de comunicación visual y diseño digital.",
      category: "ILLUSTRATION",
      client: "Universidad de Salamanca",
      location: "SALAMANCA",
      disciplineTag: "DIRECCIÓN VISUAL / ARTE MURAL",
      index: "05",
      gridSpan: "right-wide",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1200",
      dimensions: "ESCALA ARQUITECTÓNICA // USAL",
      year: "2020—2021",
      metrics: [
        { label: "DISCIPLINA", value: "BELLAS ARTES" },
        { label: "FORMATO", value: "MURAL APS" },
        { label: "ROL", value: "COORDINACIÓN" }
      ]
    }
  ],
  en: [
    {
      id: 1,
      title: "AI Commercial Agent // Control Dashboard",
      subtitle: "UX/UI design in Figma and React Front-End development for an AI-powered Commercial Agent dashboard, optimizing job vacancy visualization and automating outreach via Apollo.io API integration.",
      category: "UX_SYSTEMS",
      client: "Aratalent",
      location: "MADRID / REMOTE",
      disciplineTag: "REACT / FIGMA / REST API",
      index: "01",
      gridSpan: "full",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
      dimensions: "REACT + FASTAPI // AGILE GIT",
      year: "2026",
      metrics: [
        { label: "FRONT-END STACK", value: "REACT / CSS" },
        { label: "INTEGRATION", value: "APOLLO API" },
        { label: "BACKEND SYNC", value: "PYTHON / GIT" }
      ]
    },
    {
      id: 2,
      title: "Corporate Web Ecosystem & Digital Marketing",
      subtitle: "Front-End development (HTML5, CSS3) and advanced CMS management (WordPress, Joomla) for Mobile-First corporate websites, paired with digital marketing and social media campaigns.",
      category: "UX_SYSTEMS",
      client: "Agencia Luarcacom",
      location: "ASTURIAS",
      disciplineTag: "FRONT-END / WORDPRESS / JOOMLA",
      index: "02",
      gridSpan: "left-wide",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      dimensions: "MOBILE-FIRST // SEO & SEM",
      year: "2023—PRESENT",
      metrics: [
        { label: "ARCHITECTURE", value: "MOBILE-FIRST" },
        { label: "PLATFORMS", value: "WP & JOOMLA" },
        { label: "STRATEGY", value: "SEO / SOCIAL" }
      ]
    },
    {
      id: 3,
      title: "Corporate Web Redesign & Brand Identity",
      subtitle: "Full corporate website development in WordPress and complete brand identity redesign (logotype), delivering a conversion-optimized product ready for marketing campaigns.",
      category: "UX_SYSTEMS",
      client: "Aratalent",
      location: "REMOTE",
      disciplineTag: "WORDPRESS / BRANDING / UI",
      index: "03",
      gridSpan: "right-narrow",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
      dimensions: "CORPORATE WEB // BRANDING",
      year: "2026",
      metrics: [
        { label: "FOCUS", value: "CONVERSION" },
        { label: "IDENTITY", value: "REBRANDING" },
        { label: "CMS", value: "WORDPRESS" }
      ]
    },
    {
      id: 4,
      title: "Visual Identity Systems & Interactive Media",
      subtitle: "Design and layout of interactive digital assets for web environments, adapting formats across screen resolutions and authoring brand identity manuals.",
      category: "ILLUSTRATION",
      client: "Estudio de Diseño 'La Pila'",
      location: "SPAIN",
      disciplineTag: "INTERACTIVE DESIGN / BRANDING",
      index: "04",
      gridSpan: "left-narrow",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
      dimensions: "MULTI-RESOLUTION // ADOBE CC",
      year: "2021—2022",
      metrics: [
        { label: "ENVIRONMENTS", value: "WEB & DIGITAL" },
        { label: "DELIVERABLES", value: "BRAND MANUALS" },
        { label: "SUITE", value: "ADOBE CC" }
      ]
    },
    {
      id: 5,
      title: "Walls That Teach // Collective Mural APS",
      subtitle: "Visual proposal development and creative team coordination for a collective mural intervention, applying visual communication and digital pre-visualization.",
      category: "ILLUSTRATION",
      client: "University of Salamanca",
      location: "SALAMANCA",
      disciplineTag: "VISUAL DIRECTION / MURAL ART",
      index: "05",
      gridSpan: "right-wide",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1200",
      dimensions: "ARCHITECTURAL SCALE // USAL",
      year: "2020—2021",
      metrics: [
        { label: "DISCIPLINE", value: "FINE ARTS" },
        { label: "FORMAT", value: "PUBLIC MURAL" },
        { label: "ROLE", value: "COORDINATION" }
      ]
    }
  ]
};

// --- GALERÍA DE BELLAS ARTES E ILUSTRACIÓN ---
const FINE_ART_PLATES = [
  { id: 1, plateNumber: "SERIE I // USAL", year: "2021", title: "Estudio Anatómico y Claroscuro", medium: "Grafito, carbón prensado y técnica mixta sobre papel", dimensions: "100 × 70 CM", edition: "OBRA ORIGINAL", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800" },
  { id: 2, plateNumber: "SERIE II // VECTOR", year: "2022", title: "Ilustración Vectorial Avanzada", medium: "Adobe Illustrator & Composición Geométrica Digital", dimensions: "4000 × 5000 PX", edition: "SERIE DIGITAL", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800" },
  { id: 3, plateNumber: "SERIE III // MURAL", year: "2021", title: "Boceto Estructural 'Los Muros'", medium: "Previsualización digital y pintura acrílica exterior", dimensions: "ESCALA MURAL", edition: "PROYECTO APS", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
  { id: 4, plateNumber: "SERIE IV // BRAND", year: "2020", title: "Sistemas de Símbolos & Logotipos", medium: "Construcción sobre retícula constructiva e identidad", dimensions: "VECTORIAL 1:1", edition: "FREELANCE ARCHIVE", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" }
];

// --- FORMACIÓN ACADÉMICA Y CERTIFICACIONES (ES / EN) ---
const EXHIBITIONS_DATA = {
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

const gridSpanClasses = {
  full: "span-full",
  "left-wide": "span-7",
  "right-narrow": "span-5",
  "left-narrow": "span-5",
  "right-wide": "span-7",
};

const heightClasses = {
  full: "plate-cinematic",
  "left-wide": "plate-editorial",
  "right-narrow": "plate-portrait",
  "left-narrow": "plate-portrait",
  "right-wide": "plate-editorial",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: "14px", height: "14px" }} fill="none">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// --- EFECTO SCRAMBLE (DECODIFICACIÓN DE TEXTO AL PASAR EL RATÓN) ---
function ScrambleText({ text }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//×";

  useEffect(() => {
    setDisplay(text);
  }, [text]);

  const triggerScramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 25);
  };

  return <span onMouseEnter={triggerScramble}>{display}</span>;
}

// --- DIAGRAMA CON TRAZADO VIVO DE VECTORES SVG ---
function HybridDisciplineDiagram({ activeLayer }) {
  const showSystem = activeLayer === "BOTH" || activeLayer === "SYSTEM";
  const showInk = activeLayer === "BOTH" || activeLayer === "INK";

  return (
    <div className="plate-frame" style={{ height: "400px", backgroundColor: "#0B0B0D" }}>
      <div className="absolute top-4 left-4 font-mono-tech text-[9px] tracking-[0.18em] text-[#8A8A93] flex items-center gap-2 z-10">
        <span style={{ width: "6px", height: "6px", backgroundColor: "#F5F5F7", display: "inline-block" }} />
        <span>FIG 01. ARQUITECTURA HÍBRIDA // DAW × UX × ARTE</span>
      </div>
      <div className="absolute top-4 right-4 font-mono-tech text-[9px] tracking-[0.18em] text-[#52525B] z-10">
        REACT / FIGMA / ADOBE CC
      </div>

      <svg key={activeLayer} viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <defs>
          <radialGradient id="obsidianGlow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="rgba(245,245,247,0.08)" />
            <stop offset="100%" stopColor="rgba(7,7,8,0)" />
          </radialGradient>
          <pattern id="swissGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.75" />
          </pattern>
        </defs>

        <rect width="800" height="500" fill="url(#swissGrid)" />
        <circle cx="400" cy="250" r="220" fill="url(#obsidianGlow)" />

        <g style={{ opacity: showSystem ? 1 : 0.12, transition: "opacity 700ms ease" }}>
          <rect className="svg-draw-live" x="120" y="76" width="560" height="348" stroke="rgba(245,245,247,0.3)" strokeWidth="1" />
          <line className="svg-draw-live" x1="466" y1="76" x2="466" y2="424" stroke="rgba(245,245,247,0.22)" strokeWidth="1" />
          <line className="svg-draw-live" x1="466" y1="290" x2="680" y2="290" stroke="rgba(245,245,247,0.22)" strokeWidth="1" />
          <circle cx="293" cy="250" r="173" stroke="rgba(245,245,247,0.22)" strokeWidth="0.85" strokeDasharray="4 4" />
          <circle className="svg-draw-live" cx="573" cy="183" r="107" stroke="rgba(245,245,247,0.25)" strokeWidth="0.85" />
          <line x1="80" y1="250" x2="720" y2="250" stroke="rgba(245,245,247,0.14)" strokeWidth="0.75" />
          <line x1="293" y1="40" x2="293" y2="460" stroke="rgba(245,245,247,0.14)" strokeWidth="0.75" />
          <rect x="117" y="73" width="6" height="6" fill="#070708" stroke="#F5F5F7" strokeWidth="1.2" />
          <rect x="463" y="73" width="6" height="6" fill="#070708" stroke="#F5F5F7" strokeWidth="1.2" />
          <rect x="677" y="73" width="6" height="6" fill="#070708" stroke="#F5F5F7" strokeWidth="1.2" />
          <rect x="290" y="247" width="6" height="6" fill="#F5F5F7" />
          <text x="132" y="96" fill="#8A8A93" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1.5">FRONT-END // REACT & ANGULAR</text>
          <text x="478" y="96" fill="#8A8A93" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1.5">UX/UI // FIGMA</text>
          <text x="478" y="308" fill="#8A8A93" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1.5">SEO / SEM / ANALYTICS</text>
        </g>

        <g style={{ opacity: showInk ? 1 : 0.12, transition: "opacity 700ms ease" }}>
          <path className="svg-draw-live" d="M 145 375 C 195 140, 325 95, 410 235 C 485 355, 585 320, 645 125" stroke="#F5F5F7" strokeWidth="3.2" strokeLinecap="round" />
          <path className="svg-draw-live" d="M 160 390 C 215 165, 335 120, 420 250 C 495 370, 595 330, 660 145" stroke="rgba(245,245,247,0.6)" strokeWidth="1.3" strokeLinecap="round" />
          <path className="svg-draw-live" d="M 130 355 C 180 115, 315 70, 398 218 C 475 340, 570 305, 630 105" stroke="rgba(245,245,247,0.35)" strokeWidth="0.9" strokeLinecap="round" />
          <path d="M 220 220 L 265 185 M 235 232 L 282 195 M 250 245 L 298 206 M 265 258 L 312 218 M 280 272 L 328 230 M 355 215 L 405 180 M 368 230 L 420 195" stroke="rgba(245,245,247,0.4)" strokeWidth="0.85" />
          <line x1="325" y1="95" x2="410" y2="235" stroke="rgba(245,245,247,0.45)" strokeWidth="0.75" strokeDasharray="2 3" />
          <circle cx="325" cy="95" r="3.5" fill="#070708" stroke="#F5F5F7" strokeWidth="1.2" />
          <circle cx="410" cy="235" r="3.5" fill="#F5F5F7" />
          <circle cx="645" cy="125" r="4" fill="#F5F5F7" />
          <text x="510" y="116" fill="#F5F5F7" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1.5">BELLAS ARTES // COMPOSICIÓN</text>
        </g>
      </svg>

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono-tech text-[9px] tracking-[0.16em] text-[#8A8A93] hairline-t pt-2.5">
        <span>LÓGICA: DESARROLLO WEB (DAW) + MARKETING</span>
        <span>GESTO: GRADO EN BELLAS ARTES + DISEÑO GRÁFICO</span>
      </div>
    </div>
  );
}

// --- TARJETA DE PROYECTO ---
function ProjectCard({ project, onOpen, onHoverChange }) {
  return (
    <article
      className={`${gridSpanClasses[project.gridSpan]} group scroll-card`}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <button type="button" onClick={() => onOpen(project)} className="block w-full cursor-pointer text-left bg-transparent border-0 p-0 text-inherit">
        <div className={`plate-frame ${heightClasses[project.gridSpan]}`}>
          <img
            src={project.image}
            alt={project.title}
            className="card-zoom-img grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/90 via-transparent to-[#070708]/10 transition-opacity duration-700 group-hover:opacity-70" />

          <div className="absolute left-5 top-5 flex items-center gap-2 font-mono-tech text-[9px] tracking-[0.18em] text-[#F5F5F7]">
            <span style={{ width: "6px", height: "6px", backgroundColor: "#F5F5F7", display: "inline-block" }} />
            <ScrambleText text={`PROYECTO ${project.index} // ${project.year}`} />
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <span className="font-mono-tech text-[9px] tracking-[0.15em] text-white/75">
              {project.dimensions}
            </span>
            <span
              className="magnetic-arrow grid place-items-center bg-black/40 text-white backdrop-blur-sm group-hover:bg-[#F5F5F7] group-hover:text-[#070708]"
              style={{ width: "36px", height: "36px", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <ArrowIcon />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 draw-border py-5">
          <div className="col-span-9 sm:col-span-8">
            <p className="mb-2 font-mono-tech text-[9px] uppercase tracking-[0.18em] text-[#8A8A93]">
              <ScrambleText text={project.disciplineTag} />
            </p>
            <h3 className="font-display text-xl font-bold uppercase leading-[1.08] tracking-[-0.025em] text-[#F5F5F7] sm:text-2xl">
              {project.title}
            </h3>
          </div>
          <div className="col-span-3 sm:col-span-1 text-right font-display text-lg font-bold text-[#52525B]">
            {project.index}
          </div>
          <p className="col-span-12 sm:col-span-3 text-right self-end text-xs leading-relaxed text-[#8A8A93]">
            {project.client}
          </p>
        </div>
      </button>
    </article>
  );
}

// --- MODAL DE PROYECTO (DOSSIER) ---
function CaseStudyModal({ project, onClose, onSelectProject, allProjects, t }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="fixed inset-0 z-50 bg-[#070708]/95 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      <div className="sticky top-0 z-30 bg-[#070708]/90 backdrop-blur-md hairline-b px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#8A8A93]">DOSSIER // {project.index}</span>
          <span className="text-white/20">/</span>
          <span className="font-mono-tech text-[10px] tracking-[0.16em] text-[#F5F5F7]">{project.disciplineTag}</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-1.5 font-mono-tech text-[10px] tracking-[0.2em] uppercase text-[#F5F5F7] hairline-box hover:bg-[#F5F5F7] hover:text-[#070708] transition-colors cursor-pointer bg-transparent"
        >
          {t.closeEsc}
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 hairline-b">
          <div className="lg:col-span-8">
            <div className="font-mono-tech text-[10px] tracking-[0.22em] text-[#8A8A93] uppercase mb-4">
              {project.client} — {project.year} — {project.location}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-[#F5F5F7] uppercase leading-[0.96]">
              {project.title}
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-sm md:text-base text-[#8A8A93] leading-relaxed font-light">{project.subtitle}</p>
          </div>
        </div>

        <div className="plate-frame plate-cinematic my-12">
          <img src={project.image} alt={project.title} className="grayscale contrast-125" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 hairline-y mb-16">
          {project.metrics?.map((metric) => (
            <div key={metric.label} className="py-6 px-4">
              <div className="font-mono-tech text-[10px] tracking-[0.2em] text-[#8A8A93] uppercase mb-2">{metric.label}</div>
              <div className="font-display text-3xl md:text-4xl font-bold text-[#F5F5F7]">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="pt-8 hairline-t flex items-center justify-between">
          <div>
            <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#8A8A93] uppercase block mb-1">{t.nextStudy} // {nextProject.index}</span>
            <span className="font-display text-xl font-bold text-[#F5F5F7] uppercase">{nextProject.title}</span>
          </div>
          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="px-6 py-3 bg-[#F5F5F7] text-[#070708] font-mono-tech text-[10px] tracking-[0.2em] uppercase font-medium cursor-pointer border-0"
          >
            {t.inspectDossier}
          </button>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export default function Portfolio() {
  const [lang, setLang] = useState("es");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeLayer, setActiveLayer] = useState("BOTH");
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const t = TRANSLATIONS[lang];
  const currentProjects = FEATURED_PROJECTS_DATA[lang];
  const currentExhibitions = EXHIBITIONS_DATA[lang];

  const FILTERS = [
    { value: "ALL", label: t.filterAll },
    { value: "UX_SYSTEMS", label: t.filterUx },
    { value: "ILLUSTRATION", label: t.filterArt },
  ];

  const CRAFT_LAYERS = [
    { value: "BOTH", label: t.layerBoth },
    { value: "SYSTEM", label: t.layerSystem },
    { value: "INK", label: t.layerInk },
  ];

  // Escuchar el cambio de idioma desde el Menú Hamburguesa de Astro
  useEffect(() => {
    const handleLanguageChange = (e) => {
      if(e.detail) setLang(e.detail);
    };
    window.addEventListener("changeLanguage", handleLanguageChange);
    return () => window.removeEventListener("changeLanguage", handleLanguageChange);
  }, []);

  // Dispara la animación de entrada del Hero al montar la página
  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  // Observador para animar elementos a medida que haces scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal, .draw-border, .scroll-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter, lang]);

  // Cursor flotante
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const visibleProjects = activeFilter === "ALL"
    ? currentProjects
    : currentProjects.filter((p) => p.category === activeFilter);

  return (
    <main id="top">
      {/* MOTOR DE ANIMACIONES INYECTADO DIRECTAMENTE (A PRUEBA DE CACHÉ) */}
      <style>{`
        .hero-slide-up {
          display: inline-block;
          transform: translateY(115%);
          opacity: 0;
          transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease;
        }
        .hero-slide-up.ready {
          transform: translateY(0%);
          opacity: 1;
        }
        .scroll-reveal {
          display: inline-block;
          transform: translateY(105%);
          opacity: 0;
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
        }
        .scroll-reveal.in-view {
          transform: translateY(0%);
          opacity: 1;
        }
        .scroll-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease-out, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-card.in-view {
          opacity: 1;
          transform: translateY(0px);
        }
        .draw-border {
          position: relative;
        }
        .draw-border::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.14);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }
        .draw-border.in-view::after {
          transform: scaleX(1);
        }
        .card-zoom-img {
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease !important;
        }
        .group:hover .card-zoom-img {
          transform: scale(1.045) !important;
        }
        .magnetic-arrow {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, color 0.25s ease;
        }
        .group:hover .magnetic-arrow {
          transform: translate(4px, -4px) scale(1.08);
        }
        .svg-draw-live {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: drawVectorLive 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes drawVectorLive {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* CURSOR TÉCNICO FLOTANTE [ INSPECT ] */}
      <div
        style={{
          position: "fixed",
          left: `${cursorPos.x + 18}px`,
          top: `${cursorPos.y + 18}px`,
          opacity: isHoveringCard ? 1 : 0,
          transform: isHoveringCard ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          pointerEvents: "none",
          zIndex: 9999,
          backgroundColor: "#F5F5F7",
          color: "#070708",
          padding: "4px 10px",
          fontSize: "9px",
          letterSpacing: "0.2em",
        }}
        className="font-mono-tech hidden lg:block"
      >
        [ INSPECT ]
      </div>

   

      {/* SECCIÓN 1: HERO */}
      <section className="relative mx-auto flex min-h-[100svh] max-w-[1720px] flex-col justify-between px-mobile-safe pb-8 pt-[16vh] md:pb-10 md:pt-[22vh]">
      <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-mono-tech text-[10px] uppercase leading-5 tracking-[0.18em] text-[#8A8A93] whitespace-pre-line w-full md:max-w-[38rem]">
              {t.roleLocation}
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 mt-4 md:mt-0">
            <p className="text-sm md:text-base font-light leading-relaxed text-[#B7B7BD] md:text-lg w-full md:max-w-xl">
              {t.heroBio}
            </p>
          </div>
        </div>

        <div className="my-auto py-12 sm:py-20 lg:py-24 w-full overflow-hidden">
          <h1 className="font-display font-extrabold uppercase text-white hero-title">
            <span style={{ overflow: "hidden", display: "block" }}>
              <span className={`hero-slide-up ${heroLoaded ? "ready" : ""}`}>Form</span>
            </span>
            <span style={{ overflow: "hidden", display: "block" }}>
              <span
                className={`hero-slide-up hero-title-offset ${heroLoaded ? "ready" : ""} text-[#52525B]`}
                style={{ transitionDelay: "160ms" }}
              >
                / Function
              </span>
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-2 items-end gap-5 hairline-t pt-5 md:grid-cols-12 w-full">
          <p className="font-mono-tech text-[9px] uppercase leading-4 tracking-[0.16em] text-[#8A8A93] md:col-span-3 md:text-[10px] whitespace-pre-line">
            {t.selectedPortfolio}
          </p>
          <p className="hidden font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#52525B] md:col-span-5 md:block">
            <ScrambleText text={t.disciplineCross} />
          </p>
          <a href="#work" className="flex items-center justify-end gap-3 font-mono-tech text-[10px] uppercase tracking-[0.18em] md:col-span-4">
            <span className="hidden sm:inline"><ScrambleText text={t.scrollInspect} /></span>
            <span className="grid place-items-center hairline-box" style={{ width: "32px", height: "32px" }}>↓</span>
          </a>
        </div>
      </section>

      {/* SECCIÓN 2, 3 y 4: WORK INDEX */}
      <section id="work" className="scroll-mt-20 hairline-t">
        <div className="mx-auto max-w-[1720px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12 lg:mb-24 items-end">
            <div className="md:col-span-7">
              <p className="mb-5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">
                {t.sec01Tag}
              </p>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.86] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                <span style={{ overflow: "hidden", display: "block" }}>
                  <span className="scroll-reveal">{t.sec01Title}<span className="text-[#52525B]">.</span></span>
                </span>
              </h2>
            </div>
            <div className="flex items-end md:col-span-5 md:justify-end">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={`cursor-pointer bg-transparent border-0 border-b py-2 font-mono-tech text-[10px] uppercase tracking-[0.16em] transition-colors ${
                      activeFilter === filter.value
                        ? "border-[#F5F5F7] text-[#F5F5F7]"
                        : "border-transparent text-[#52525B] hover:text-[#F5F5F7]"
                    }`}
                  >
                    <ScrambleText text={filter.label} />{" "}
                    <sup>
                      {filter.value === "ALL"
                        ? currentProjects.length
                        : currentProjects.filter((p) => p.category === filter.value).length}
                    </sup>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
                onHoverChange={setIsHoveringCard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CRAFT PHILOSOPHY (LOGIC MEETS GESTURE) */}
      <section id="method" className="scroll-mt-20 hairline-y bg-[#0A0A0C]">
        <div className="mx-auto max-w-[1720px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-center">
            <div className="lg:col-span-4">
              <p className="mb-6 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">
                {t.sec02Tag}
              </p>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl">
                <span style={{ overflow: "hidden", display: "block" }}>
                  <span className="scroll-reveal">{t.sec02Title}</span>
                </span>
              </h2>
              <p className="mt-8 max-w-md text-sm sm:text-base font-light leading-relaxed text-[#8A8A93]">
                {t.sec02Desc}
              </p>

              <div className="mt-10 flex gap-2">
                {CRAFT_LAYERS.map((layer) => (
                  <button
                    key={layer.value}
                    type="button"
                    onClick={() => setActiveLayer(layer.value)}
                    className={`cursor-pointer px-4 py-2.5 font-mono-tech text-[9px] uppercase tracking-[0.16em] transition-colors ${
                      activeLayer === layer.value
                        ? "bg-[#F5F5F7] text-[#070708] border border-[#F5F5F7]"
                        : "bg-transparent text-[#8A8A93] hairline-box hover:text-[#F5F5F7]"
                    }`}
                  >
                    {layer.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <HybridDisciplineDiagram activeLayer={activeLayer} />
              <div className="mt-8 grid grid-cols-1 gap-6 hairline-t pt-5 sm:grid-cols-3">
                {t.pillars.map(([number, label]) => (
                  <div key={number}>
                    <span className="font-mono-tech text-[9px] text-[#52525B]">[{number}]</span>
                    <p className="mt-2 text-xs uppercase tracking-[0.08em] text-[#B7B7BD]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 Y 7: ARCHIVE (MATERIAL STUDIES & FORMACIÓN ACADÉMICA) */}
      <section id="archive" className="scroll-mt-20">
        <div className="mx-auto max-w-[1720px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="mb-16 flex flex-col justify-between gap-8 draw-border pb-8 md:flex-row md:items-end lg:mb-24">
            <div>
              <p className="mb-5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">
                {t.sec03Tag}
              </p>
              <h2 className="font-display text-5xl font-bold uppercase leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                <span style={{ overflow: "hidden", display: "block" }}>
                  <span className="scroll-reveal">{t.sec03Title1}</span>
                </span>
                <span style={{ overflow: "hidden", display: "block" }}>
                  <span className="scroll-reveal" style={{ transitionDelay: "140ms" }}>{t.sec03Title2}</span>
                </span>
              </h2>
            </div>
            <p className="max-w-sm font-mono-tech text-[10px] uppercase leading-5 tracking-[0.16em] text-[#8A8A93]">
              {t.sec03Desc}
            </p>
          </div>

          <div className="art-grid">
            {FINE_ART_PLATES.map((plate, index) => (
              <article key={plate.id} className={`group scroll-card ${index % 2 === 1 ? "art-offset" : ""}`}>
                <div className="plate-frame plate-art">
                  <img
                    src={plate.image}
                    alt={plate.title}
                    className="card-zoom-img grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="draw-border py-5">
                  <div className="mb-3 flex justify-between font-mono-tech text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                    <span><ScrambleText text={plate.plateNumber} /></span>
                    <span>{plate.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-[#F5F5F7]">
                    {plate.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#8A8A93]">{plate.medium}</p>
                  <div className="mt-4 flex justify-between font-mono-tech text-[9px] uppercase tracking-[0.12em] text-[#52525B]">
                    <span>{plate.dimensions}</span>
                    <span>{plate.edition}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* SECCIÓN 7: FORMACIÓN ACADÉMICA Y CERTIFICACIONES */}
          <div className="mt-28 lg:mt-36">
            <div className="grid grid-cols-1 gap-8 hairline-t pt-8 lg:grid-cols-12">
              <h3 className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93] lg:col-span-3">
                {t.exhibitionsTitle}
              </h3>
              <div className="lg:col-span-9">
                {currentExhibitions.map((item) => (
                  <div
                    key={`${item.year}-${item.event}`}
                    className="grid grid-cols-12 gap-3 draw-border py-5 text-sm transition-colors hover:bg-white/[0.02] items-center"
                  >
                    <span className="col-span-2 font-mono-tech text-[10px] text-[#52525B]">{item.year}</span>
                    <span className="col-span-10 sm:col-span-5 text-[#D4D4D8] font-medium">{item.event}</span>
                    <span className="col-span-8 sm:col-span-4 text-xs text-[#8A8A93]">{item.role}</span>
                    <span className="col-span-4 sm:col-span-1 text-right font-mono-tech text-[9px] tracking-[0.12em] text-[#52525B]">
                      {item.city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        allProjects={currentProjects}
        t={t}
      />
    </main>
  );
}