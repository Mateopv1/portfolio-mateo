import React, { useState, useEffect, useRef } from 'react';

const BRAND_COPY = {
  es: {
    tag: "04 / Arquitectura de Marca",
    title: "Sistemas vectoriales",
    desc: "Identidades construidas como sistemas precisos: proporción, geometría y espacio negativo antes que ornamentación.",
  },
  en: {
    tag: "04 / Brand Architecture",
    title: "Vector systems",
    desc: "Identities built as precise systems: proportion, geometry, and negative space before ornamentation.",
  },
};

const BRAND_PROJECTS = [
  {
    id: "aratalent",
    name: "ARATALENT GROUP",
    category: { es: "IMAGOTIPO", en: "COMBINATION MARK" },
    year: "2026",
    span: "lg:col-span-12",
    aspect: "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/5.5]",
    negativoImg: "/portfolio/logos/unonegativo.png",
    colorImg: "/portfolio/logos/uno.png",
    colorLeft: "#28A9E0",
    colorRight: "#3B44B0",
    palette: ["#28A9E0", "#3B44B0"],
  },
  {
    id: "cross-padel",
    name: "CROSS PADEL",
    category: { es: "IMAGOTIPO", en: "COMBINATION MARK" },
    year: "2025",
    span: "lg:col-span-8",
    aspect: "aspect-[4/3] lg:aspect-[16/10]",
    negativoImg: "/portfolio/logos/cinconegativo.png",
    colorImg: "/portfolio/logos/cinco.png",
    colorLeft: "#0083B0",
    colorRight: "#39B518",
    palette: ["#0083B0", "#39B518"],
  },
  {
    id: "pracel",
    name: "PRACEL DECORACIONES",
    category: { es: "IMAGOTIPO", en: "COMBINATION MARK" },
    year: "2025",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
    negativoImg: "/portfolio/logos/cuatronegativo.png",
    colorImg: "/portfolio/logos/cuatro.png",
    colorLeft: "#1D9AD6",
    colorRight: "#1D569B",
    palette: ["#1D9AD6", "#1D569B"],
  },
  {
    id: "casa-chocolate",
    name: "CASA CHOCOLATE",
    category: { es: "LOGOTIPO", en: "LOGOTYPE" },
    year: "2024",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
    negativoImg: "/portfolio/logos/dosnegativo.png",
    colorImg: "/portfolio/logos/dos.png",
    colorLeft: "#9E7652",
    colorRight: "#634229",
    palette: ["#9E7652", "#634229"],
  },
  {
    id: "casa-choureiro",
    name: "CASA CHOUREIRO",
    category: { es: "MONOGRAMA", en: "MONOGRAM" },
    year: "2024",
    span: "lg:col-span-7",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
    negativoImg: "/portfolio/logos/tresnegativo.png",
    colorImg: "/portfolio/logos/tres.png",
    colorLeft: "#00713C",
    colorRight: "#006837",
    palette: ["#00713C"],
  },
];

function BrandLogoCard({ project, index, lang, setHoveredColor }) {
  const [isHovered, setIsHovered] = useState(false);
  const logoWrapRef = useRef(null);

  const handleCardMouseMove = (e) => {
    if (!logoWrapRef.current || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.035;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.035;
    logoWrapRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setHoveredColor(null);
    if (logoWrapRef.current) {
      logoWrapRef.current.style.transform = `translate(0px, 0px) scale(1)`;
    }
  };

  return (
    <article
      className={`scroll-card w-full min-w-0 ${project.span} ${project.aspect} relative flex flex-col border border-white/[0.06] bg-[#0F0F11] transition-all duration-700 overflow-hidden group cursor-pointer`}
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredColor(`${project.colorLeft}15`);
      }}
      onMouseLeave={handleCardMouseLeave}
      onMouseMove={handleCardMouseMove}
      onClick={() => setIsHovered((prev) => !prev)}
    >
      {/* CAPA 1 HOVER: Base blanca */}
      <div
        className="absolute inset-0 bg-white transition-opacity duration-500 ease-out pointer-events-none z-0"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* CAPA 2 HOVER: Degradado al 17% de opacidad */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out pointer-events-none z-[1]"
        style={{
          background: `linear-gradient(90deg, ${project.colorLeft} 0%, ${project.colorRight} 100%)`,
          opacity: isHovered ? 0.17 : 0,
        }}
      />

      {/* Etiqueta ID superior izquierda */}
      <div
        className={`absolute left-4 top-4 z-20 font-mono-tech text-[8px] sm:text-[9px] tracking-[0.18em] transition-colors duration-500 ${
          isHovered ? "text-[#070708]/60" : "text-[#52525B]"
        }`}
      >
        ID / {String(index + 1).padStart(2, "0")}
      </div>

      {/* Muestras de color corporativo (esquina superior derecha, solo en hover) */}
      <div
        className={`absolute right-4 top-4 z-20 flex items-center gap-2 sm:gap-3 transition-all duration-500 ease-out pointer-events-none ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {project.palette.map((hex) => (
          <div key={hex} className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 border border-[#070708]/20 shrink-0"
              style={{ backgroundColor: hex }}
            />
            <span className="hidden sm:inline font-mono-tech text-[8px] tracking-[0.14em] text-[#070708]/70 uppercase">
              {hex}
            </span>
          </div>
        ))}
      </div>

      {/* Contenedor de Logos (Negativo <-> Color) con Parallax */}
      <div
        ref={logoWrapRef}
        className="relative flex-1 w-full min-h-0 flex items-center justify-center p-8 sm:p-12 lg:p-14 z-10"
        style={{ transition: "transform 0.25s ease-out" }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={project.negativoImg}
            alt={`${project.name} negativo`}
            className={`max-h-[80px] sm:max-h-[115px] lg:max-h-[140px] max-w-full w-auto h-auto object-contain transition-opacity duration-500 ease-out select-none ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />

          <img
            src={project.colorImg}
            alt={project.name}
            className={`absolute max-h-[80px] sm:max-h-[115px] lg:max-h-[140px] max-w-full w-auto h-auto object-contain transition-opacity duration-500 ease-out select-none ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Footer técnico de la tarjeta */}
      <footer className="grid grid-cols-3 gap-2 border-t border-white/[0.06] px-4 py-3 sm:px-5 sm:py-4 font-mono-tech text-[8px] sm:text-[9px] uppercase tracking-[0.16em] relative z-20 bg-[#0F0F11]">
        <span className="text-[#F5F5F7] truncate">{project.name}</span>
        <span className="text-center text-[#8A8A93] truncate">
          {project.category[lang] || project.category.es}
        </span>
        <span className="text-right text-[#8A8A93] truncate">{project.year}</span>
      </footer>
    </article>
  );
}

export default function BrandArchitecture({ lang: propLang = 'es', setHoveredColor }) {
  const [lang, setLang] = useState(propLang);

  useEffect(() => {
    setLang(propLang);
  }, [propLang]);

  useEffect(() => {
    const handleLangChange = (e) => {
      if (e.detail) setLang(e.detail);
    };
    window.addEventListener('changeLanguage', handleLangChange);
    return () => window.removeEventListener('changeLanguage', handleLangChange);
  }, []);

  const copy = BRAND_COPY[lang] || BRAND_COPY.es;

  return (
    <section id="brand" className="scroll-mt-20 border-t border-white/10 relative z-10 overflow-x-hidden">
      <div className="mx-auto max-w-[1720px] px-5 py-16 md:px-10 md:py-32 lg:px-12 lg:py-40">
        <div className="mb-12 grid grid-cols-1 gap-8 border-b border-white/10 pb-8 md:grid-cols-12 md:items-end lg:mb-24 lg:pb-14 draw-border">
          <div className="md:col-span-8 scroll-reveal">
            <p className="mb-4 md:mb-5 font-mono-tech text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">
              {copy.tag}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5vw] xl:text-[5vw] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[#F5F5F7]">
              <span className="inline-block transition-all duration-1000 transform translate-y-0 opacity-100">
                {copy.title}
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <p className="max-w-md font-mono-tech text-[9px] md:text-[10px] uppercase leading-5 tracking-[0.14em] text-[#8A8A93]">
              {copy.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {BRAND_PROJECTS.map((project, index) => (
            <BrandLogoCard
              key={project.id}
              project={project}
              index={index}
              lang={lang}
              setHoveredColor={setHoveredColor || (() => {})}
            />
          ))}
        </div>
      </div>
    </section>
  );
}