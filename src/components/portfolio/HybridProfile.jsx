import React, { useState, useEffect, useRef } from 'react';
import { TRANSLATIONS } from '../../data/portfolioData';

// 60 partículas deterministas (25 por toda la sección + 35 concentradas en el retrato/cara)
const ABOUT_PARTICLES = Array.from({ length: 60 }, (_, i) => {
  const isPortraitZone = i >= 25;
  const seed1 = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
  const seed2 = Math.abs(Math.sin(i * 78.233) * 24634.6345) % 1;
  const seed3 = Math.abs(Math.sin(i * 45.164) * 19384.2341) % 1;

  return {
    top: `${(seed1 * 92 + 4).toFixed(1)}%`,
    left: isPortraitZone
      ? `${(55 + seed2 * 43).toFixed(1)}%`
      : `${(seed2 * 96 + 2).toFixed(1)}%`,
    size: Number((1.5 + seed3 * 2.5).toFixed(1)),
    dur: `${(8 + seed1 * 9).toFixed(1)}s`,
    delay: `-${(seed2 * 14).toFixed(1)}s`,
    op: Number((isPortraitZone ? 0.45 + seed3 * 0.45 : 0.25 + seed3 * 0.35).toFixed(2)),
    dx: `${Math.round((seed3 - 0.5) * 45)}px`,
    dy: `-${Math.round(35 + seed1 * 55)}px`,
  };
});

// --- DIAGRAMA CON TRAZADO VIVO DE VECTORES SVG Y EFECTO PARALLAX 3D ---
function HybridDisciplineDiagram({ activeLayer }) {
  const showSystem = activeLayer === "BOTH" || activeLayer === "SYSTEM";
  const showInk = activeLayer === "BOTH" || activeLayer === "INK";

  const containerRef = useRef(null);
  const svgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!svgRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.03;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.03;
    svgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (svgRef.current) {
      svgRef.current.style.transform = `translate(0px, 0px) scale(1)`;
    }
  };

  return (
    <div
      ref={containerRef}
      className="plate-frame relative overflow-hidden"
      style={{ height: "400px", backgroundColor: "#0B0B0D" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Capa de fondo estática (Grid y Brillo) */}
      <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
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
      </svg>

      <div className="absolute top-4 left-4 font-mono-tech text-[9px] tracking-[0.18em] text-[#8A8A93] flex items-center gap-2 z-10">
        <span style={{ width: "6px", height: "6px", backgroundColor: "#F5F5F7", display: "inline-block" }} />
        <span>FIG 01. ARQUITECTURA HÍBRIDA // DAW × UX × ARTE</span>
      </div>
      <div className="absolute top-4 right-4 font-mono-tech text-[9px] tracking-[0.18em] text-[#A1A1AA] z-10">
        REACT / FIGMA / ADOBE CC
      </div>

      {/* Capa superior animada magnéticamente (Vectores) */}
      <svg
        ref={svgRef}
        className="absolute inset-0 pointer-events-none z-10"
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", transition: "transform 0.3s ease-out" }}
      >
        {/* CAPA LÓGICA / SISTEMA */}
        <g style={{ opacity: showSystem ? 1 : 0.12, transition: "opacity 500ms ease-in-out" }}>
          <g key={`system-${activeLayer}`}>
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
        </g>

        {/* CAPA GESTO / ARTE */}
        <g style={{ opacity: showInk ? 1 : 0.12, transition: "opacity 500ms ease-in-out" }}>
          <g key={`ink-${activeLayer}`}>
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
        </g>
      </svg>

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono-tech text-[9px] tracking-[0.16em] text-[#8A8A93] hairline-t pt-2.5 z-10">
        <span>LÓGICA: DESARROLLO WEB (DAW) + MARKETING</span>
        <span>GESTO: GRADO EN BELLAS ARTES + DISEÑO GRÁFICO</span>
      </div>
    </div>
  );
}

// --- SECCIÓN PRINCIPAL EXPORTADA ---
export default function HybridProfile({ lang = 'es' }) {
  const t = TRANSLATIONS[lang];
  const [activeLayer, setActiveLayer] = useState("BOTH");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const CRAFT_LAYERS = [
    { value: "BOTH", label: t.layerBoth },
    { value: "SYSTEM", label: t.layerSystem },
    { value: "INK", label: t.layerInk },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const layers = ["BOTH", "SYSTEM", "INK"];

    const intervalId = setInterval(() => {
      setActiveLayer((currentLayer) => {
        const currentIndex = layers.indexOf(currentLayer);
        const nextIndex = (currentIndex + 1) % layers.length;
        return layers[nextIndex];
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  return (
    <section id="method" className="scroll-mt-20 hairline-y bg-[#0A0A0C] relative z-10 overflow-hidden">
      
      {/* BLOQUE SUPERIOR: DIAGRAMA Y PILARES */}
      <div className="mx-auto max-w-[1720px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-center">
          {/* TEXTOS Y BOTONES */}
          <div className="lg:col-span-4">
            <p className="mb-6 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">
              {t.sec02Tag}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5vw] xl:text-[5vw] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-[#F5F5F7]">
              <span className="inline-block transition-all duration-1000 transform translate-y-0 opacity-100">
                {t.sec02Title}
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
                  onClick={() => {
                    setActiveLayer(layer.value);
                    setIsAutoPlaying(false);
                  }}
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

          {/* COMPONENTE GRÁFICO */}
          <div className="lg:col-span-7 lg:col-start-6">
            <HybridDisciplineDiagram activeLayer={activeLayer} />
            <div className="mt-8 grid grid-cols-1 gap-6 hairline-t pt-5 sm:grid-cols-3">
              {t.pillars.map(([number, label]) => (
                <div key={number}>
                  <span className="font-mono-tech text-[9px] text-[#A1A1AA]">[{number}]</span>
                  <p className="mt-2 text-xs uppercase tracking-[0.08em] text-[#B7B7BD]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ESTILOS DE PARTÍCULAS SUAVES Y RESPIRACIÓN DEL RETRATO (SIN WILL-CHANGE MASIVO) */}
      <style>{`
        @keyframes aboutFloatDot {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: var(--dot-opacity, 0.45);
          }
          80% {
            opacity: var(--dot-opacity, 0.45);
          }
          100% {
            transform: translate3d(var(--drift-x, 18px), var(--drift-y, -48px), 0) scale(0.7);
            opacity: 0;
          }
        }
        @keyframes portraitBreathe {
          0%, 100% {
            transform: scale(1) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.025) translate3d(0, -6px, 0);
          }
        }
        .about-dot {
          animation: aboutFloatDot var(--duration, 10s) ease-in-out var(--delay, 0s) infinite;
        }
        .portrait-breathe {
          animation: portraitBreathe 14s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .about-dot,
          .portrait-breathe {
            animation: none;
          }
        }
      `}</style>

      {/* BLOQUE INFERIOR: SOBRE MÍ FULL-BLEED */}
      <div className="relative w-full hairline-t grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden">
        
        {/* PARTÍCULAS BLANCAS SUAVES FLOTANDO POR TODA LA SECCIÓN Y EL RETRATO */}
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
          {ABOUT_PARTICLES.map((dot, i) => (
            <span
              key={i}
              className="about-dot absolute rounded-full bg-white"
              style={{
                top: dot.top,
                left: dot.left,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.75)',
                '--duration': dot.dur,
                '--delay': dot.delay,
                '--dot-opacity': dot.op,
                '--drift-x': dot.dx,
                '--drift-y': dot.dy,
              }}
            />
          ))}
        </div>

        {/* COLUMNA IZQUIERDA: TEXTO SOBRE MÍ */}
        <div className="relative z-10 lg:col-span-7 flex flex-col justify-center px-5 py-16 md:px-10 md:py-24 lg:py-28 lg:pr-16 lg:pl-[max(3rem,calc((100vw-1720px)/2+3rem))]">
          <p className="mb-4 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">
            {t.aboutTag}
          </p>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-0.03em] text-[#F5F5F7] leading-[0.95]">
            {t.aboutTitle}
          </h3>

          <div className="mt-8 space-y-5 max-w-xl text-sm sm:text-base font-light leading-relaxed text-[#B7B7BD]">
            <p>{t.aboutP1}</p>
            <p className="text-[#8A8A93]">{t.aboutP2}</p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 max-w-xl flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-tech text-[9px] uppercase tracking-[0.18em] text-[#A1A1AA]">
            <span>BELLAS ARTES (USAL)</span>
            <span>/</span>
            <span>DISEÑO GRÁFICO &amp; UX</span>
            <span>/</span>
            <span>DAW &amp; MARKETING</span>
          </div>
        </div>

        {/* COLUMNA DERECHA: ILUSTRACIÓN SIN BORDES CON RESPIRACIÓN SUTIL */}
        <div className="lg:col-span-5 relative w-full min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] overflow-hidden bg-[#070708]">
          <img
            src="/mateo.webp"
            alt="Mateo Paredes — Ilustración autorretrato"
            loading="lazy"
            decoding="async"
            className="portrait-breathe absolute inset-0 w-full h-full object-cover object-center grayscale contrast-110"
          />
          <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                'linear-gradient(to right, #0A0A0C 0%, rgba(10, 10, 12, 0.35) 18%, transparent 45%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 lg:hidden"
            style={{
              background:
                'linear-gradient(to bottom, #0A0A0C 0%, transparent 25%)',
            }}
          />
        </div>

      </div>
    </section>
  );
}