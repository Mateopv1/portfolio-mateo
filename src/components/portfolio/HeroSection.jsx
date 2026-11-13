import React, { useState, useEffect, useRef } from 'react';
import ScrambleText from './ScrambleText';
import { TRANSLATIONS } from '../../data/portfolioData';

export default function HeroSection({ lang = 'es' }) {
  const t = TRANSLATIONS[lang];
  const [heroLoaded, setHeroLoaded] = useState(false);
  
  // Referencias para efectos Parallax y Magnético
  const sectionRef = useRef(null);
  const scrollBtnRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Retraso para sincronizar con un posible preloader
    const timer = setTimeout(() => setHeroLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // --- 1. EFECTO PARALLAX SUTIL EN EL TEXTO SUPERIOR AL MOVER EL RATÓN ---
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calcula la posición relativa (-1 a 1)
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePosition({ x, y });
  };

  // --- 2. BOTÓN DE SCROLL MAGNÉTICO ---
  const handleScrollBtnMove = (e) => {
    e.stopPropagation();
    if (!scrollBtnRef.current) return;
    const rect = scrollBtnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    scrollBtnRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleScrollBtnLeave = () => {
    if (!scrollBtnRef.current) return;
    scrollBtnRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div 
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#070708]"
      onMouseMove={handleMouseMove}
    >
      {/* 
        3. OPTIMIZACIÓN DE VÍDEO (PERFORMANCE) 
        Añadido poster (imagen de carga) y atributos de renderizado agresivo
      */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        poster="/poster-hero.jpg" 
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale opacity-60 pointer-events-none will-change-transform"
        style={{ transform: 'translateZ(0) scale(1.05)', backfaceVisibility: 'hidden' }}
        ref={(el) => { if (el) el.playbackRate = 0.7; }}
      > 
        <source src="/banner.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#070708]/70 z-[1] mix-blend-multiply"></div>
      
      {/* Viñeteado radial sutil para centrar la atención */}
      <div className="absolute inset-0 z-[2]" style={{ background: 'radial-gradient(circle at center, transparent 0%, #070708 120%)' }}></div>

      <section 
        ref={sectionRef}
        className="relative mx-auto flex min-h-[100svh] max-w-[1720px] flex-col justify-between px-mobile-safe pb-8 pt-[16vh] md:pb-10 md:pt-[22vh] z-10"
      >
        
        {/* TEXTOS SUPERIORES CON PARALLAX MOUSE */}
        <div 
          className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 relative z-10 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` }}
        >
          <div className="lg:col-span-6">
            <p className="font-mono-tech text-[10px] uppercase leading-5 tracking-[0.18em] text-[#8A8A93] whitespace-pre-line w-full md:max-w-[38rem] border-l border-white/20 pl-4">
              {t.roleLocation}
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 mt-4 md:mt-0 flex justify-end">
            <p className="text-sm md:text-base font-light leading-relaxed text-[#B7B7BD] md:text-lg w-full md:max-w-xl text-left md:text-right border-l md:border-l-0 md:border-r border-white/20 pl-4 md:pl-0 md:pr-4">
              {t.heroBio}
            </p>
          </div>
        </div>

        {/* CARRUSEL INFINITO CON ENTRADA ESCALONADA (STAGGER) */}
        <div className="my-auto py-12 sm:py-20 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden z-10 flex flex-col gap-16 md:gap-20">
          
          {/* TRACK IZQUIERDA */}
          <div 
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="track-left hover:scale-[1.02] transition-transform duration-500 cursor-default">
              <h1 className="font-display font-extrabold uppercase text-[#F5F5F7] marquee-typography drop-shadow-2xl">
                {Array(8).fill(t.heroMarquee1).join('\u00A0\u00A0\u00A0')}
              </h1>
            </div>
          </div>
          
          {/* TRACK DERECHA */}
          <div 
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} 
            style={{ transitionDelay: "150ms" }}
          >
            <div className="track-right hover:scale-[1.02] transition-transform duration-500 cursor-default">
              <h1 className="font-display font-extrabold uppercase text-[#52525B] marquee-typography drop-shadow-2xl">
                {Array(8).fill(t.heroMarquee2).join('\u00A0\u00A0\u00A0')}
              </h1>
            </div>
          </div>
        </div>

        {/* FOOTER DEL HERO */}
        <div className="grid grid-cols-2 items-end gap-5 hairline-t pt-5 md:grid-cols-12 w-full relative z-10">
          <p className="font-mono-tech text-[9px] uppercase leading-4 tracking-[0.16em] text-[#8A8A93] md:col-span-3 md:text-[10px] whitespace-pre-line">
            {t.selectedPortfolio}
          </p>
          <p className="hidden font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#52525B] md:col-span-5 md:block">
            <ScrambleText text={t.disciplineCross} />
          </p>
          
          <div className="flex justify-end md:col-span-4">
            <a 
              href="#work" 
              className="group flex items-center justify-end gap-4 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#F5F5F7] hover:text-white transition-colors"
              onMouseMove={handleScrollBtnMove}
              onMouseLeave={handleScrollBtnLeave}
            >
              <span className="hidden sm:inline opacity-70 group-hover:opacity-100 transition-opacity">
                <ScrambleText text={t.scrollInspect} />
              </span>
              {/* CAJA MAGNÉTICA */}
              <span 
                ref={scrollBtnRef}
                className="grid place-items-center bg-transparent border border-white/20 group-hover:border-white/60 group-hover:bg-white group-hover:text-black transition-colors duration-300" 
                style={{ width: "36px", height: "36px", transition: "transform 0.15s ease-out, background-color 0.3s, border-color 0.3s" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}