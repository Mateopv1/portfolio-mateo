import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import ScrambleText from './ScrambleText';
import { TRANSLATIONS, FEATURED_PROJECTS_DATA } from '../../data/portfolioData';

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

// --- TARJETA DE PROYECTO CON EFECTO MAGNÉTICO ---
function ProjectCard({ project, onOpen, setHoveredColor }) {
  const arrowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!arrowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08; 
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    arrowRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.15)`;
  };

  const handleMouseLeave = () => {
    setHoveredColor(null);
    if (!arrowRef.current) return;
    arrowRef.current.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <article
      className={`${gridSpanClasses[project.gridSpan]} group scroll-card relative z-10`}
      onMouseEnter={() => setHoveredColor(project.brandColor)}
      onMouseLeave={handleMouseLeave}
    >
      <button type="button" onClick={() => onOpen(project)} className="block w-full cursor-pointer text-left bg-transparent border-0 p-0 text-inherit">
        
        <div 
          className={`plate-frame ${heightClasses[project.gridSpan]}`}
          onMouseMove={handleMouseMove}
        >
          <img src={project.image} alt={project.title} className="card-zoom-img grayscale group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/90 via-transparent to-[#070708]/10 transition-opacity duration-700 group-hover:opacity-70" />
          <div className="absolute left-5 top-5 flex items-center gap-2 font-mono-tech text-[9px] tracking-[0.18em] text-[#F5F5F7]">
            <span style={{ width: "6px", height: "6px", backgroundColor: "#F5F5F7", display: "inline-block" }} />
            <ScrambleText text={`PROYECTO ${project.index} // ${project.year}`} />
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <span className="font-mono-tech text-[9px] tracking-[0.15em] text-white/75">{project.dimensions}</span>
            
            <span 
              ref={arrowRef}
              className="magnetic-arrow grid place-items-center bg-black/40 text-white backdrop-blur-sm group-hover:bg-[#F5F5F7] group-hover:text-[#070708] transition-colors duration-300 ease-out" 
              style={{ width: "36px", height: "36px", border: "1px solid rgba(255,255,255,0.25)", transition: "transform 0.15s ease-out, background-color 0.3s, color 0.3s" }}
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
            <h3 className="font-display text-xl font-bold uppercase leading-[1.08] tracking-[-0.025em] text-[#F5F5F7] sm:text-2xl">{project.title}</h3>
          </div>
          <div className="col-span-3 sm:col-span-1 text-right font-display text-lg font-bold text-[#52525B]">{project.index}</div>
          <p className="col-span-12 sm:col-span-3 text-right self-end text-xs leading-relaxed text-[#8A8A93]">{project.client}</p>
        </div>
      </button>
    </article>
  );
}

// --- MODAL DE CASO DE ESTUDIO ---
function CaseStudyModal({ project, onClose, onSelectProject, allProjects, t }) {
  const [mounted, setMounted] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setScrollOffset(0);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }
  }, [project, onClose]);

  if (!project || !mounted) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = allProjects[currentIndex + 1] || allProjects[0];

  return createPortal(
    <div className="fixed inset-0 z-[9999999] bg-[#070708] w-screen h-screen flex flex-col overflow-hidden">
      
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[10000000]">
        <button 
          type="button" 
          onClick={onClose}
          className="px-4 py-2 font-mono-tech text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#F5F5F7] bg-[#070708]/80 backdrop-blur-md border border-white/20 hover:bg-[#F5F5F7] hover:text-[#070708] transition-colors cursor-pointer"
        >
          CERRAR [ESC]
        </button>
      </div>

      <div 
        className="w-full h-full overflow-y-auto hide-scrollbar relative z-[99998]"
        data-lenis-prevent="true"
        onScroll={(e) => setScrollOffset(e.currentTarget.scrollTop)}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          
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
              <p className="text-sm md:text-base text-[#8A8A93] leading-relaxed font-light">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="plate-frame plate-cinematic my-12 bg-[#0F0F11] border border-white/5 p-2 shadow-2xl relative overflow-hidden">
            <img 
              alt={project.title} 
              className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" 
              src={project.image} 
              style={{ transform: `translateY(${scrollOffset * 0.15}px) scale(1.05)` }} 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 hairline-y mb-16 bg-[#0B0B0D]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="py-8 px-6 border-r border-white/5 last:border-r-0">
                <div className="font-mono-tech text-[9px] tracking-[0.2em] text-[#8A8A93] uppercase mb-3">{metric.label}</div>
                <div className="font-display text-3xl md:text-4xl font-bold text-[#F5F5F7]">{metric.value}</div>
              </div>
            ))}
          </div>

          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
              <div>
                <h3 className="font-mono-tech text-[10px] md:text-[11px] tracking-[0.2em] text-[#F5F5F7] uppercase mb-6 border-l-2 border-[#F5F5F7] pl-4">EL RETO</h3>
                <p className="text-sm md:text-base text-[#8A8A93] leading-relaxed font-light">{project.challenge}</p>
              </div>
              <div>
                <h3 className="font-mono-tech text-[10px] md:text-[11px] tracking-[0.2em] text-[#F5F5F7] uppercase mb-6 border-l-2 border-[#52525B] pl-4">LA SOLUCIÓN</h3>
                <p className="text-sm md:text-base text-[#8A8A93] leading-relaxed font-light">{project.solution}</p>
              </div>
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
              <div className="bg-[#0F0F11] border border-white/5 p-6 flex items-center justify-center shadow-lg">
                <img src={project.gallery[0]} alt="Detalle 1" className="max-h-[60vh] object-contain drop-shadow-2xl" />
              </div>
              <div className="bg-[#0F0F11] border border-white/5 p-6 flex items-center justify-center shadow-lg">
                <img src={project.gallery[1]} alt="Detalle 2" className="max-h-[60vh] object-contain drop-shadow-2xl" />
              </div>
              <div className="md:col-span-2 bg-[#0F0F11] border border-white/5 p-4 h-[70vh] overflow-y-auto hide-scrollbar cursor-ns-resize shadow-xl">
                <img src={project.gallery[2]} alt="Página Completa" className="w-full h-auto object-cover" />
              </div>
            </div>
          )}

          {nextProject && (
            <div className="pt-10 hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-20">
              <div>
                <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#8A8A93] uppercase block mb-2">
                  {t.nextStudy || "SIGUIENTE PROYECTO"}
                </span>
                <span className="font-display text-2xl md:text-3xl font-bold text-[#F5F5F7] uppercase">{nextProject.title}</span>
              </div>
              <button 
                type="button" 
                onClick={() => {
                  document.querySelector('.overflow-y-auto')?.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => onSelectProject(nextProject), 400);
                }}
                className="px-6 py-4 bg-[#F5F5F7] text-[#070708] font-mono-tech text-[10px] tracking-[0.2em] uppercase font-bold border-0 cursor-pointer hover:bg-white hover:scale-105 transition-all"
              >
                {t.inspectDossier || "INSPECCIONAR PROYECTO →"}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
}

export default function FeaturedProjects({ lang = 'es', hoveredColor, setHoveredColor }) {
  const t = TRANSLATIONS[lang];
  const currentProjects = FEATURED_PROJECTS_DATA[lang];
  
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const FILTERS = [
    { value: "ALL", label: t.filterAll },
    { value: "UX_SYSTEMS", label: t.filterUx },
    { value: "ILLUSTRATION", label: t.filterArt },
  ];

  // FILTRADO ROBUSTO: Compara tanto categoría como etiquetas o texto para evitar que falle
  const visibleProjects = activeFilter === "ALL" 
    ? currentProjects 
    : currentProjects.filter((p) => {
        const cat = (p.category || "").toUpperCase();
        const tag = (p.disciplineTag || "").toUpperCase();
        if (activeFilter === "UX_SYSTEMS") {
          return cat.includes("UX") || cat.includes("SYSTEM") || tag.includes("UX") || tag.includes("FRONT");
        }
        if (activeFilter === "ILLUSTRATION") {
          return cat.includes("ILLUST") || cat.includes("ART") || tag.includes("ARTE") || tag.includes("ILLUST");
        }
        return cat === activeFilter;
      });

  return (
    <section id="work" className="scroll-mt-20 hairline-t relative z-10">
      
      <div 
        className="fixed inset-0 pointer-events-none transition-colors duration-1000 ease-out z-[5] mix-blend-screen"
        style={{ backgroundColor: hoveredColor || 'transparent' }}
      ></div>

      <div className="mx-auto max-w-[1720px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12 lg:mb-24 items-end relative z-10">
          <div className="md:col-span-7">
            <p className="mb-5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">{t.sec01Tag}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5vw] xl:text-[5vw] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[#F5F5F7]">
              <span className="inline-block transition-all duration-1000 transform translate-y-0 opacity-100">{t.sec01Title}</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {FILTERS.map((filter) => {
                // Cálculo seguro del contador para cada filtro
                const count = filter.value === "ALL" 
                  ? currentProjects.length 
                  : currentProjects.filter((p) => {
                      const cat = (p.category || "").toUpperCase();
                      const tag = (p.disciplineTag || "").toUpperCase();
                      if (filter.value === "UX_SYSTEMS") return cat.includes("UX") || cat.includes("SYSTEM") || tag.includes("UX");
                      if (filter.value === "ILLUSTRATION") return cat.includes("ILLUST") || cat.includes("ART") || tag.includes("ARTE");
                      return cat === filter.value;
                    }).length;

                return (
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
                    <sup>{count}</sup>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bento-grid relative z-10">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
              setHoveredColor={setHoveredColor}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        allProjects={currentProjects}
        t={t}
      />
    </section>
  );
}