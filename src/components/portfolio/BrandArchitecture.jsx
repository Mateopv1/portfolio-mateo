import React, { useState, useEffect, useRef } from 'react';
import { BRAND_LOGOS_DATA } from '../../data/portfolioData';

const BRAND_PROJECTS = [
  {
    id: "aratalent",
    name: "ARATALENT",
    category: "ISOTIPO",
    year: "2026",
    span: "lg:col-span-12",
    aspect: "aspect-[16/9] lg:aspect-[16/5.8]",
    brandColor: "#8B5CF6",
  },
  {
    id: "kern-form",
    name: "KERN / FORM",
    category: "MONOGRAMA",
    year: "2025",
    span: "lg:col-span-8",
    aspect: "aspect-[4/3]",
    brandColor: "#10B981",
  },
  {
    id: "noctis",
    name: "NOCTIS",
    category: "SÍMBOLO",
    year: "2026",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
    brandColor: "#F59E0B",
  },
  {
    id: "oroboro",
    name: "OROBORO",
    category: "EMBLEMA",
    year: "2025",
    span: "lg:col-span-5",
    aspect: "lg:h-full",
    brandColor: "#EC4899",
  },
  {
    id: "module-72",
    name: "MODULE 72",
    category: "IMAGOTIPO",
    year: "2026",
    span: "lg:col-span-7",
    aspect: "lg:h-full",
    brandColor: "#3B82F6",
  },
];

function ConstructionGrid() {
  return (
    <g stroke="currentColor" fill="none">
      <path d="M80 40V360M160 40V360M240 40V360M320 40V360M400 40V360M480 40V360M560 40V360M640 40V360M720 40V360" opacity=".08" />
      <path d="M40 80H760M40 160H760M40 240H760M40 320H760" opacity=".08" />
      <path d="M40 200H760M400 40V360" opacity=".28" strokeDasharray="5 5" />
      <path d="M48 48h18M48 48v18M752 48h-18M752 48v18M48 352h18M48 352v-18M752 352h-18M752 352v-18" opacity=".5" />
    </g>
  );
}

function BrandMark({ id, technical, brandColor, isHovered }) {
  const activeColor = isHovered ? brandColor : "#F5F5F7";

  const commonProps = {
    viewBox: "0 0 800 400",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-full w-full transition-colors duration-700",
    style: { color: activeColor },
    "aria-hidden": true,
  };

  if (id === "aratalent") {
    return (
      <svg {...commonProps}>
        {technical && <ConstructionGrid />}
        {technical ? (
          <g stroke="currentColor">
            <path d="M244 296 350 104h100l106 192h-72l-21-40H337l-21 40h-72Z" opacity=".9" />
            <path d="m368 200 32-58 32 58h-64Z" opacity=".45" />
            <circle cx="400" cy="200" r="144" opacity=".18" />
            <circle cx="400" cy="200" r="96" opacity=".18" />
            <path d="M223 316h354M223 324v-16M577 324v-16" opacity=".45" />
          </g>
        ) : (
          <g fill="currentColor">
            <path d="M240 300 350 100h100l110 200h-76l-22-42H338l-22 42h-76Zm129-100h62l-31-57-31 57Z" />
            <rect x="376" y="200" width="48" height="100" fill="#0F0F11" />
          </g>
        )}
      </svg>
    );
  }

  if (id === "kern-form") {
    return (
      <svg {...commonProps}>
        {technical && <ConstructionGrid />}
        {technical ? (
          <g stroke="currentColor">
            <rect x="270" y="92" width="86" height="216" />
            <path d="M356 200 493 92h98L455 200l136 108h-98L356 200Z" />
            <circle cx="356" cy="200" r="8" />
            <path d="M242 92h-18m18 216h-18M232 92v216" opacity=".45" />
            <path d="M270 334h321M270 326v16M591 326v16" opacity=".45" />
          </g>
        ) : (
          <g fill="currentColor">
            <path d="M262 84h100v86l120-86h126L456 200l152 116H482l-120-86v86H262V84Z" />
          </g>
        )}
      </svg>
    );
  }

  if (id === "noctis") {
    return (
      <svg {...commonProps}>
        {technical && <ConstructionGrid />}
        {technical ? (
          <g stroke="currentColor">
            <circle cx="400" cy="200" r="126" />
            <circle cx="400" cy="200" r="72" opacity=".55" />
            <path d="m310 290 180-180M286 314l228-228" opacity=".65" />
            <path d="M400 54v292M254 200h292" opacity=".18" strokeDasharray="4 4" />
          </g>
        ) : (
          <g>
            <circle cx="400" cy="200" r="134" fill="currentColor" />
            <circle cx="400" cy="200" r="72" fill="#0F0F11" />
            <path d="m285 331 246-246" stroke="#0F0F11" strokeWidth="44" />
            <path d="m318 306 200-200" stroke="currentColor" strokeWidth="18" />
          </g>
        )}
      </svg>
    );
  }

  if (id === "oroboro") {
    return (
      <svg {...commonProps}>
        {technical && <ConstructionGrid />}
        {technical ? (
          <g stroke="currentColor">
            <circle cx="400" cy="200" r="132" />
            <circle cx="400" cy="200" r="76" opacity=".65" />
            <path d="M493 107 307 293M510 124 324 310" opacity=".4" />
            <path d="m482 83 42 42-60 9 18-51Z" />
            <circle cx="400" cy="200" r="158" opacity=".14" />
          </g>
        ) : (
          <g fill="currentColor">
            <path d="M489 83c-67-45-160-35-215 28-61 70-54 176 16 237 70 60 176 53 237-17 36-41 48-94 38-144l-60 16c4 30-4 62-25 87-38 44-105 48-149 10-44-39-48-105-10-149 32-37 85-46 127-25l-35 42 113-14-17-111-20 40Z" />
            <path d="m457 200 71-38-19 78-52-40Z" fill="#0F0F11" />
          </g>
        )}
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      {technical && <ConstructionGrid />}
      {technical ? (
        <g stroke="currentColor">
          <rect x="238" y="90" width="324" height="220" />
          <path d="M238 200h324M346 90v220M454 90v220" opacity=".45" />
          <path d="m270 278 74-156h56l-74 156h-56Zm130 0 74-156h56l-74 156h-56Z" />
          <circle cx="400" cy="200" r="158" opacity=".15" />
        </g>
      ) : (
        <g fill="currentColor">
          <path d="M226 76h112v110h124V76h112v248H462V214H338v110H226V76Z" />
          <path d="m350 324 100-248h50L400 324h-50Z" fill="#0F0F11" />
        </g>
      )}
    </svg>
  );
}

function BrandLogoCard({ project, setHoveredColor }) {
  const [technical, setTechnical] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAutoAnimated, setHasAutoAnimated] = useState(false);
  
  const cardRef = useRef(null);
  const buttonRef = useRef(null);
  const svgRef = useRef(null);

  // Animación inicial automática (TECH -> ART)
  useEffect(() => {
    if (hasAutoAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setTechnical(false);
            setHasAutoAnimated(true);
          }, 800);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hasAutoAnimated]);

  // --- EFECTO PARALLAX INTERNO (El logo sigue al ratón) ---
  const handleCardMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.04;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.04;
    svgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setHoveredColor(null);
    if (svgRef.current) {
      svgRef.current.style.transform = `translate(0px, 0px) scale(1)`;
    }
  };

  // --- EFECTO BOTÓN MAGNÉTICO ---
  const handleButtonMouseMove = (e) => {
    e.stopPropagation(); // Evita que se sume con el movimiento de la tarjeta
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    buttonRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleButtonMouseLeave = (e) => {
    e.stopPropagation();
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <article
      ref={cardRef}
      className={`scroll-card ${project.span} ${project.aspect} relative flex flex-col border border-white/[0.05] bg-[#0F0F11] transition-all duration-700 overflow-hidden group`}
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredColor(project.brandColor + "15");
      }}
      onMouseLeave={handleCardMouseLeave}
      onMouseMove={handleCardMouseMove}
    >
      <div className="absolute left-4 top-4 z-20 font-mono-tech text-[8px] sm:text-[9px] tracking-[0.18em] text-[#52525B]">
        ID / {String(BRAND_PROJECTS.findIndex((item) => item.id === project.id) + 1).padStart(2, "0")}
      </div>
      
      {/* Botón Magnético */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setTechnical((current) => !current)}
        onMouseEnter={() => setTechnical(true)}
        onMouseLeave={(e) => {
          setTechnical(false);
          handleButtonMouseLeave(e);
        }}
        onMouseMove={handleButtonMouseMove}
        className="absolute right-4 top-4 z-20 cursor-pointer border border-white/10 bg-[#0F0F11] px-2.5 py-1.5 font-mono-tech text-[8px] sm:text-[9px] tracking-[0.16em] text-[#8A8A93] hover:border-white/30 hover:text-[#F5F5F7]"
        style={{ transition: "transform 0.15s ease-out, border-color 0.3s, color 0.3s" }}
        aria-label={`Mostrar construcción técnica de ${project.name}`}
      >
        [ <span className={technical ? "text-[#F5F5F7]" : ""}>TECH</span>
        <span className="px-1 text-[#52525B]">/</span>
        <span className={!technical ? "text-[#F5F5F7]" : ""}>ART</span> ]
      </button>

      {/* Contenedor del Logo con Parallax */}
      <div 
        ref={svgRef}
        className="min-h-0 flex-1 px-4 py-12 sm:px-10 sm:py-14 flex items-center justify-center relative z-10"
        style={{ transition: "transform 0.25s ease-out" }}
      >
        <BrandMark 
          id={project.id} 
          technical={technical} 
          brandColor={project.brandColor} 
          isHovered={isHovered} 
        />
      </div>

      <footer className="grid grid-cols-3 border-t border-white/[0.05] px-4 py-3 sm:px-5 sm:py-4 font-mono-tech text-[8px] sm:text-[9px] uppercase tracking-[0.16em] relative z-20 bg-[#0F0F11]">
        <span className="text-[#F5F5F7] truncate">{project.name}</span>
        <span className="text-center text-[#8A8A93] truncate">{project.category}</span>
        <span className="text-right text-[#8A8A93] truncate">{project.year}</span>
      </footer>
    </article>
  );
}

export default function BrandArchitecture({ setHoveredColor }) {
  return (
    <section id="brand" className="scroll-mt-20 border-t border-white/10  relative z-10">
      <div className="mx-auto max-w-[1720px] px-5 py-16 md:px-10 md:py-32 lg:px-12 lg:py-40">
        
        <div className="mb-12 grid grid-cols-1 gap-8 border-b border-white/10 pb-8 md:grid-cols-12 md:items-end lg:mb-24 lg:pb-14 draw-border">
          <div className="md:col-span-8 scroll-reveal">
            <p className="mb-4 md:mb-5 font-mono-tech text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">
              04 / Arquitectura de Marca
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5vw] xl:text-[5vw] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[#F5F5F7]">
              <span className="inline-block transition-all duration-1000 transform translate-y-0 opacity-100">
                Sistemas vectoriales
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <p className="max-w-md font-mono-tech text-[9px] md:text-[10px] uppercase leading-5 tracking-[0.14em] text-[#8A8A93]">
              Identidades construidas como sistemas precisos: proporción, geometría y espacio negativo antes que ornamentación.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {BRAND_PROJECTS.map((project) => (
            <BrandLogoCard 
              key={project.id} 
              project={project} 
              setHoveredColor={setHoveredColor || (() => {})} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}