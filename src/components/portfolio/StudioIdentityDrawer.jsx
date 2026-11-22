import React, { useState, useEffect } from 'react';

const CONTENT = {
  es: {
    idTag: "ID / 00 — IDENTIDAD PROPIA",
    title: "MATEO | STUDIO · CONSTRUCCIÓN DE MARCA",
    openLabel: "VER SISTEMA",
    closeLabel: "CERRAR",
    copied: "COPIADO",
    equation: [
      { src: "/portfolio/logos/codigo.svg", title: "CÓDIGO", sub: "Estructura y lógica" },
      { src: "/portfolio/logos/raiz.svg", title: "RAÍZ", sub: "Artesanía y arte" },
      { src: "/portfolio/logos/huella.svg", title: "HUELLA", sub: "Firma personal" },
    ],
    result: { src: "/favicon.svg", title: "ISOTIPO", sub: "Sello de autor" },
    gridLabel: "RETÍCULA CONSTRUCTIVA // PROPORCIÓN Y EJE ÓPTICO",
    paletteLabel: "SISTEMA CROMÁTICO // DEGRADADO ACTIVO",
    manifestoTitle: "ARQUITECTURA DEL SÍMBOLO",
    intro: "El isotipo de MATEO | STUDIO sintetiza tres capas conceptuales que vertebran cada proyecto del estudio:",
    pillars: [
      {
        code: "01 // CÓDIGO (</>)",
        text: "Los ángulos laterales nacen de las etiquetas de programación, representando la arquitectura lógica y la precisión técnica detrás del producto digital.",
      },
      {
        code: "02 // RAÍZ (ESPIRAL)",
        text: "Inspirada en la simbología ancestral, la mano con espiral evoca el oficio artesanal, el movimiento continuo y la base plástica de Bellas Artes.",
      },
      {
        code: "03 // HUELLA (AUTORÍA)",
        text: "El trazo fluido remite a una huella dactilar: la voluntad de entregar piezas singulares e irrepetibles, lejos de soluciones genéricas.",
      },
    ],
    closing:
      "La intersección de estos tres ejes insinúa además la geometría de un ojo —visión estética y rigor visual—, mientras el degradado cálido (#FFA433 → #FD7B34) inyecta tensión creativa sobre la sobriedad del negro obsidiana.",
  },
  en: {
    idTag: "ID / 00 — STUDIO IDENTITY",
    title: "MATEO | STUDIO · BRAND CONSTRUCTION",
    openLabel: "VIEW SYSTEM",
    closeLabel: "CLOSE",
    copied: "COPIED",
    equation: [
      { src: "/portfolio/logos/codigo.svg", title: "CODE", sub: "Structure & logic" },
      { src: "/portfolio/logos/raiz.svg", title: "ROOT", sub: "Craft & fine arts" },
      { src: "/portfolio/logos/huella.svg", title: "IMPRINT", sub: "Personal signature" },
    ],
    result: { src: "/favicon.svg", title: "ISOTYPE", sub: "Author seal" },
    gridLabel: "CONSTRUCTION GRID // PROPORTION & OPTICAL AXIS",
    paletteLabel: "COLOR SYSTEM // ACTIVE GRADIENT",
    manifestoTitle: "SYMBOL ARCHITECTURE",
    intro: "The MATEO | STUDIO mark synthesizes three core layers that anchor every project:",
    pillars: [
      {
        code: "01 // CODE (</>)",
        text: "Lateral angles derived from syntax brackets, representing logical architecture and technical precision behind every digital product.",
      },
      {
        code: "02 // ROOT (SPIRAL)",
        text: "Rooted in ancestral symbolism, the spiral hand embodies craftsmanship, continuous motion, and a Fine Arts foundation.",
      },
      {
        code: "03 // IMPRINT (AUTHORSHIP)",
        text: "Fluid strokes evoke a fingerprint—reflecting a commitment to bespoke, unrepeatable work far from generic templates.",
      },
    ],
    closing:
      "Together, these elements subtly form an eye—reinforcing aesthetic direction and detail—while the warm gradient (#FFA433 → #FD7B34) injects creative energy against the technical restraint of obsidian black.",
  },
};

const PALETTE = [
  { hex: "#FFA433", name: "AMBER SPARK" },
  { hex: "#FD7B34", name: "STUDIO ORANGE" },
];

export default function StudioIdentityDrawer({ lang: propLang = "es" }) {
  const [lang, setLang] = useState(propLang);
  const [isOpen, setIsOpen] = useState(false);
  const [copiedHex, setCopiedHex] = useState(null);

  useEffect(() => {
    setLang(propLang);
  }, [propLang]);

  useEffect(() => {
    const handleLangChange = (e) => {
      if (e.detail) setLang(e.detail);
    };
    window.addEventListener("changeLanguage", handleLangChange);
    return () => window.removeEventListener("changeLanguage", handleLangChange);
  }, []);

  const copyHex = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1400);
  };

  const t = CONTENT[lang] || CONTENT.es;

  return (
    <div className="mt-6 border border-white/10 bg-[#0B0B0D] transition-colors duration-300 hover:border-white/20">
      {/* BARRA DISPARADORA DEL DESPLEGABLE */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full px-5 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left group cursor-pointer"
      >
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <img
            src="/favicon.svg"
            alt="Mateo Studio Isotipo"
            className="h-6 w-6 object-contain"
          />
          <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#FD7B34]">
            {t.idTag}
          </span>
          <span className="hidden md:inline text-white/15 font-mono-tech text-xs">/</span>
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-[#F5F5F7]">
            {t.title}
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#8A8A93] group-hover:text-[#F5F5F7] transition-colors">
          <span>[ {isOpen ? t.closeLabel : t.openLabel} ]</span>
          <span
            className={`inline-flex h-6 w-6 items-center justify-center border border-white/15 text-xs transition-transform duration-300 ${
              isOpen ? "rotate-45 border-[#FD7B34]/60 text-[#FD7B34]" : "group-hover:border-white/40"
            }`}
          >
            +
          </span>
        </div>
      </button>

      {/* CONTENIDO DESPLEGABLE */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="border-t border-white/10 px-5 sm:px-8 lg:px-12 py-10 sm:py-14 space-y-12"
            style={{
              background:
                "radial-gradient(circle at 12% 18%, rgba(255, 164, 51, 0.14) 0%, rgba(253, 123, 52, 0.06) 32%, rgba(7, 7, 8, 0.96) 72%)",
            }}
          >
            {/* 1. ECUACIÓN CONCEPTUAL: CÓDIGO + RAÍZ + HUELLA = ISOTIPO */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10">
              {t.equation.map((item, idx) => (
                <React.Fragment key={item.title}>
                  <div className="flex flex-col items-center text-center w-24 sm:w-28">
                    <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center mb-3 opacity-85">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="font-mono-tech text-[10px] tracking-[0.18em] uppercase text-[#F5F5F7]">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#8A8A93] mt-0.5 leading-tight">
                      {item.sub}
                    </span>
                  </div>

                  {idx < t.equation.length - 1 && (
                    <span className="font-mono-tech text-lg text-white/30 select-none">+</span>
                  )}
                </React.Fragment>
              ))}

              <span className="font-mono-tech text-lg text-[#FD7B34] select-none">=</span>

              <div className="flex flex-col items-center text-center w-24 sm:w-28">
                <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center mb-3">
                  <img
                    src={t.result.src}
                    alt={t.result.title}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_0_18px_rgba(253,123,52,0.3)]"
                  />
                </div>
                <span className="font-mono-tech text-[10px] tracking-[0.18em] uppercase text-[#FD7B34]">
                  {t.result.title}
                </span>
                <span className="text-[11px] text-[#8A8A93] mt-0.5 leading-tight">
                  {t.result.sub}
                </span>
              </div>
            </div>

            {/* 2. RETÍCULA CONSTRUCTIVA + PALETA CROMÁTICA */}
            <div className="flex flex-col items-center">
              <p className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-[#8A8A93] mb-4 text-center">
                {t.gridLabel}
              </p>

              <div
                className="relative w-full max-w-xl h-52 sm:h-64 border border-white/10 flex items-center justify-center overflow-hidden bg-[#070708]/70"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              >
                {/* Ejes centrales sutiles */}
                <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[#FD7B34]/20" />
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-[#FD7B34]/20" />

                <img
                  src="/favicon.svg"
                  alt="Retícula Isotipo Mateo Studio"
                  className="relative z-10 h-28 sm:h-36 w-auto object-contain drop-shadow-[0_0_28px_rgba(253,123,52,0.22)]"
                />
              </div>

              {/* Muestras HEX copiables + barra de degradado */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                {PALETTE.map((swatch) => (
                  <button
                    key={swatch.hex}
                    type="button"
                    onClick={() => copyHex(swatch.hex)}
                    title="Copiar HEX"
                    className="flex items-center gap-2.5 border border-white/10 bg-[#070708]/80 px-3 py-1.5 hover:border-white/30 transition-colors cursor-pointer"
                  >
                    <span
                      className="h-3.5 w-3.5 shrink-0"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="font-mono-tech text-[10px] tracking-[0.16em] text-[#F5F5F7]">
                      {copiedHex === swatch.hex ? t.copied : swatch.hex}
                    </span>
                  </button>
                ))}

                <div
                  className="hidden sm:block h-3.5 w-24 border border-white/10"
                  style={{
                    background: "linear-gradient(90deg, #FFA433 0%, #FD7B34 100%)",
                  }}
                  title="#FFA433 → #FD7B34"
                />
              </div>
            </div>

            {/* 3. LOGOTIPO COMPLETO + MEMORIA CONCEPTUAL */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-white/10 pt-10">
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 border border-white/[0.06] bg-[#070708]/60">
                <img
                  src="/portfolio/logos/logotipo.svg"
                  alt="Mateo Studio — Code · Design · Art"
                  className="w-56 sm:w-64 h-auto object-contain"
                />
              </div>

              <div className="lg:col-span-7 space-y-5">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#FD7B34]">
                  {t.manifestoTitle}
                </p>

                <p className="text-sm sm:text-[15px] leading-relaxed text-[#E4E4E7]">
                  {t.intro}
                </p>

                <div className="space-y-3.5">
                  {t.pillars.map((pillar) => (
                    <div
                      key={pillar.code}
                      className="border-l border-[#FD7B34]/40 pl-4"
                    >
                      <p className="font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#F5F5F7] mb-1">
                        {pillar.code}
                      </p>
                      <p className="text-xs sm:text-sm leading-relaxed text-[#A1A1AA]">
                        {pillar.text}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-[#D4D4D8] pt-2 border-t border-white/10">
                  {t.closing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}