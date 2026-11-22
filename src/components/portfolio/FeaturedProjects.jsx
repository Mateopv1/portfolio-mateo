import Lenis from 'lenis';
import React, { useState, useEffect, useRef, Component } from 'react';
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

// Función auxiliar para subir la intensidad del brandColor en el modal
function getModalGlowColor(color) {
  if (!color) return "rgba(253, 123, 52, 0.28)";
  if (color.startsWith("rgba")) {
    return color.replace(/[\d.]+\)$/, "0.30)");
  }
  if (color.startsWith("#")) {
    const baseHex = color.slice(0, 7);
    return `${baseHex}4D`;
  }
  return color;
}

// --- ESCUDO DE ERRORES REACT ---
class ProjectErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#450a0a', color: '#fecaca', border: '2px solid #ef4444', margin: '40px', fontFamily: 'monospace', position: 'relative', zIndex: 9999 }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px'}}>🚨 CRASH DE REACT CAPTURADO 🚨</h2>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{this.state.error.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- TARJETA DE PROYECTO ---
function ProjectCard({ project, onOpen, setHoveredColor }) {
  const arrowRef = useRef(null);

  const spanClass = gridSpanClasses[project?.gridSpan] || "span-full";
  const heightClass = heightClasses[project?.gridSpan] || "plate-cinematic";

  const handleMouseMove = (e) => {
    if (!arrowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08; 
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    arrowRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.15)`;
  };

  const handleMouseLeave = () => {
    if (setHoveredColor) setHoveredColor(null);
    if (!arrowRef.current) return;
    arrowRef.current.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <article
      className={`${spanClass} group scroll-card relative z-10`}
      onMouseEnter={() => setHoveredColor && setHoveredColor(project?.brandColor || null)}
      onMouseLeave={handleMouseLeave}
    >
      <button type="button" onClick={() => onOpen(project)} className="block w-full cursor-pointer text-left bg-transparent border-0 p-0 text-inherit">
        
        <div className={`plate-frame ${heightClass}`} onMouseMove={handleMouseMove}>
          <img src={project?.image || ""} alt={project?.title || "Proyecto"} className="card-zoom-img grayscale group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/90 via-transparent to-[#070708]/10 transition-opacity duration-700 group-hover:opacity-70" />
          <div className="absolute left-5 top-5 flex items-center gap-2 font-mono-tech text-[9px] tracking-[0.18em] text-[#F5F5F7]">
            <span style={{ width: "6px", height: "6px", backgroundColor: "#F5F5F7", display: "inline-block" }} />
            <ScrambleText text={`PROYECTO ${project?.index || "00"} // ${project?.year || "0000"}`} />
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <span className="font-mono-tech text-[9px] tracking-[0.15em] text-white/75">{project?.dimensions || ""}</span>
            
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
              <ScrambleText text={project?.disciplineTag || "DISCIPLINA"} />
            </p>
            <h3 className="font-display text-xl font-bold uppercase leading-[1.08] tracking-[-0.025em] text-[#F5F5F7] sm:text-2xl">{project?.title || "Proyecto"}</h3>
          </div>
          <div className="col-span-3 sm:col-span-1 text-right font-display text-lg font-bold text-[#52525B]">{project?.index || "00"}</div>
          <p className="col-span-12 sm:col-span-3 text-right self-end text-xs leading-relaxed text-[#8A8A93]">{project?.client || ""}</p>
        </div>
      </button>
    </article>
  );
}

// --- MODAL DE CASO DE ESTUDIO ---
function CaseStudyModal({ project, onClose, onSelectProject, allProjects, t }) {
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const bannerImgRef = useRef(null);
  const modalLenisRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project || !mounted) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onCloseRef.current();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Reseteamos la posición al cambiar de proyecto
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    if (bannerImgRef.current) {
      bannerImgRef.current.style.transform = "translate3d(0, 0px, 0) scale(1.05)";
    }

    // Instancia propia de Lenis para el scroll suave dentro del modal
    let rafId;
    if (scrollContainerRef.current && scrollContentRef.current) {
      const modalLenis = new Lenis({
        wrapper: scrollContainerRef.current,
        content: scrollContentRef.current,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      });

      modalLenisRef.current = modalLenis;

      // Parallax fluido del banner sin re-renderizar React
      modalLenis.on("scroll", ({ scroll }) => {
        if (bannerImgRef.current) {
          bannerImgRef.current.style.transform = `translate3d(0, ${scroll * 0.15}px, 0) scale(1.05)`;
        }
      });

      const raf = (time) => {
        modalLenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      if (rafId) cancelAnimationFrame(rafId);
      if (modalLenisRef.current) {
        modalLenisRef.current.destroy();
        modalLenisRef.current = null;
      }
    };
  }, [project?.id, mounted]);

  if (!project || !mounted || typeof document === "undefined") return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[currentIndex + 1] || allProjects[0];
  const ambientColor = getModalGlowColor(project.brandColor);

  return createPortal(
    <div className="fixed inset-0 z-[9999999] bg-[#070708] w-screen h-screen flex flex-col overflow-hidden">
      
      {/* DEGRADADO AMBIENTAL FIJO SEGÚN EL PROYECTO */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 0% 30%, ${ambientColor} 0%, transparent 55%),
            radial-gradient(circle at 100% 80%, ${ambientColor} 0%, transparent 45%)
          `,
        }}
      />

      {/* Botón Cerrar */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-[10000000]">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 font-mono-tech text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#F5F5F7] bg-[#070708]/85 border border-white/20 hover:bg-[#F5F5F7] hover:text-[#070708] transition-colors cursor-pointer"
        >
          {t?.closeEsc || "CERRAR [ESC]"}
        </button>
      </div>

      {/* Wrapper de Lenis del modal (data-lenis-prevent evita que se mueva la web de atrás) */}
      <div
        ref={scrollContainerRef}
        className="w-full h-full overflow-y-auto overscroll-contain hide-scrollbar relative z-[10]"
        data-lenis-prevent="true"
      >
        <div ref={scrollContentRef} className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          
          {/* Cabecera */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 hairline-b">
            <div className="lg:col-span-8">
              <div className="font-mono-tech text-[10px] tracking-[0.2em] text-[#8A8A93] uppercase mb-4">
                {project.client} — {project.year} — {project.location}
              </div>
            <h2 className="font-display text-[clamp(1.35rem,6.2vw,3.25rem)] font-extrabold tracking-[-0.03em] text-[#F5F5F7] uppercase leading-[1.02] break-words">
  {project.title}
</h2>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed font-light">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Portada con parallax suave por GPU */}
          <div className="plate-frame plate-cinematic my-12 bg-[#0F0F11]/70 border border-white/10 p-2 shadow-2xl relative overflow-hidden">
            <img
              ref={bannerImgRef}
              alt={project.title}
              className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-[filter] duration-700 will-change-transform"
              src={project.image}
              style={{ transform: "translate3d(0, 0px, 0) scale(1.05)" }}
            />
          </div>

          {/* Métricas */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 hairline-y mb-16 bg-[#0B0B0D]/70">
              {project.metrics.map((metric, i) => (
                <div key={i} className="py-8 px-6 border-r border-white/5 last:border-r-0">
                  <div className="font-mono-tech text-[9px] tracking-[0.2em] text-[#8A8A93] uppercase mb-3">{metric.label}</div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-[#F5F5F7]">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* El Reto / La Solución */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
              {project.challenge && (
                <div>
                  <h3 className="font-mono-tech text-[10px] md:text-[11px] tracking-[0.2em] text-[#F5F5F7] uppercase mb-6 border-l-2 border-[#F5F5F7] pl-4">
                    {t?.challengeTitle || "EL RETO"}
                  </h3>
                  <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed font-light">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <h3 className="font-mono-tech text-[10px] md:text-[11px] tracking-[0.2em] text-[#F5F5F7] uppercase mb-6 border-l-2 border-[#52525B] pl-4">
                    {t?.solutionTitle || "LA SOLUCIÓN"}
                  </h3>
                  <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed font-light">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* GALERÍA DINÁMICA */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
              {project.gallery.map((imgSrc, idx) => {
                const isFullWidth =
                  idx === project.gallery.length - 1 && project.gallery.length % 2 !== 0;

                return (
                  <div
                    key={`${project.id}-img-${idx}`}
                    className={`bg-[#0F0F11]/65 border border-white/10 p-4 sm:p-6 flex items-center justify-center shadow-xl ${
                      isFullWidth ? "md:col-span-2" : ""
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} — Vista ${idx + 1}`}
                      className={`w-full object-contain drop-shadow-2xl ${
                        isFullWidth ? "max-h-[75vh]" : "max-h-[60vh]"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Siguiente Proyecto */}
          {nextProject && (
            <div className="pt-10 hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-20">
              <div>
                <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#8A8A93] uppercase block mb-2">
                  {t?.nextStudy || "SIGUIENTE PROYECTO"}
                </span>
                <span className="font-display text-2xl md:text-3xl font-bold text-[#F5F5F7] uppercase">{nextProject.title}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  modalLenisRef.current?.scrollTo(0, { immediate: false });
                  setTimeout(() => onSelectProject(nextProject), 300);
                }}
                className="px-6 py-4 bg-[#F5F5F7] text-[#070708] font-mono-tech text-[10px] tracking-[0.2em] uppercase font-bold border-0 cursor-pointer hover:bg-white hover:scale-105 transition-all"
              >
                {t?.inspectDossier || "INSPECCIONAR PROYECTO →"}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
}

// --- LÓGICA PRINCIPAL ---
function FeaturedProjectsLogic({ lang = 'es', hoveredColor, setHoveredColor }) {
  const safeLang = (lang && TRANSLATIONS[lang]) ? lang : 'es';
  const t = TRANSLATIONS[safeLang] || {};
  const currentProjects = FEATURED_PROJECTS_DATA[safeLang] || [];
  
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const FILTERS = [
    { value: "ALL", label: t.filterAll || "Todos" },
    { value: "UX_SYSTEMS", label: t.filterUx || "Desarrollo / UX" },
    { value: "ILLUSTRATION", label: t.filterArt || "Diseño y Arte" },
  ];

  const isDevUx = (cat) => ["UX_SYSTEMS", "FRONT_END", "UX_RESEARCH", "SOFTWARE_ENGINEERING"].includes(cat);
  const isDesignArt = (cat) => ["BRANDING"].includes(cat);

  const visibleProjects = activeFilter === "ALL" 
    ? currentProjects 
    : currentProjects.filter((p) => {
        const cat = p?.category ? p.category.toUpperCase() : "";
        if (activeFilter === "UX_SYSTEMS") return isDevUx(cat);
        if (activeFilter === "ILLUSTRATION") return isDesignArt(cat);
        return false;
      });

  // Vigilante de scroll específico para las tarjetas de React
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.bento-grid .scroll-card, .bento-grid .draw-border');
      elements.forEach(el => {
        el.classList.remove('in-view');
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeFilter, safeLang, visibleProjects.length]);

  return (
    <section id="work" className="scroll-mt-20 hairline-t relative z-10">
      
      <div 
        className="fixed inset-0 pointer-events-none transition-colors duration-1000 ease-out z-[5] mix-blend-screen"
        style={{ backgroundColor: hoveredColor || 'transparent' }}
      ></div>

      <div className="mx-auto max-w-[1720px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12 lg:mb-24 items-end relative z-10">
          <div className="md:col-span-7">
            <p className="mb-5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">{t.sec01Tag || "01 / Proyectos"}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5vw] xl:text-[5vw] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[#F5F5F7]">
              <span className="inline-block transition-all duration-1000 transform translate-y-0 opacity-100">{t.sec01Title || "PROYECTOS"}</span>
            </h2>
          </div>
          <div className="flex items-end md:col-span-5 md:justify-end">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {FILTERS.map((filter) => {
                const count = filter.value === "ALL" 
                  ? currentProjects.length 
                  : currentProjects.filter((p) => {
                      const cat = p?.category ? p.category.toUpperCase() : "";
                      if (filter.value === "UX_SYSTEMS") return isDevUx(cat);
                      if (filter.value === "ILLUSTRATION") return isDesignArt(cat);
                      return false;
                    }).length;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={`cursor-pointer bg-transparent border-0 border-b py-2 font-mono-tech text-[10px] uppercase tracking-[0.16em] transition-colors ${
                      activeFilter === filter.value
                        ? "border-[#F5F5F7] text-[#F5F5F7]"
                        : "border-transparent text-[#8f8f9e] hover:text-[#F5F5F7]"
                    }`}
                  >
                    <ScrambleText text={filter.label} /> <sup>{count}</sup>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bento-grid relative z-10">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project) => (
              <ProjectCard
                key={project?.id || Math.random()}
                project={project}
                onOpen={setSelectedProject}
                setHoveredColor={setHoveredColor}
              />
            ))
          ) : (
             <div className="col-span-12 py-20 text-center font-mono-tech text-sm text-[#8A8A93] uppercase tracking-widest">
               No hay proyectos.
             </div>
          )}
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

// EXPORTACIÓN PROTEGIDA
export default function FeaturedProjects(props) {
  return (
    <ProjectErrorBoundary>
      <FeaturedProjectsLogic {...props} />
    </ProjectErrorBoundary>
  );
}