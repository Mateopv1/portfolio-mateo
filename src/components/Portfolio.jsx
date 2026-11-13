import React, { useState, useEffect } from 'react';

// --- IMPORTAMOS NUESTROS COMPONENTES MODULARES ---
import HeroSection from './portfolio/HeroSection';
import FeaturedProjects from './portfolio/FeaturedProjects';
import HybridProfile from './portfolio/HybridProfile';
import BrandArchitecture from './portfolio/BrandArchitecture'; // Asegúrate de haber creado este archivo con el código de los logotipos
import FineArtsArchive from './portfolio/FineArtsArchive';

export default function Portfolio() {
  const [lang, setLang] = useState("es");
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [hoveredColor, setHoveredColor] = useState(null);

  // 1. EVENTO GLOBAL: Cambio de idioma
  useEffect(() => {
    const handleLanguageChange = (e) => {
      if (e.detail) setLang(e.detail);
    };
    window.addEventListener("changeLanguage", handleLanguageChange);
    return () => window.removeEventListener("changeLanguage", handleLanguageChange);
  }, []);

  // 2. EVENTO GLOBAL: Seguir el ratón para la linterna (Spotlight)
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // 3. EVENTO GLOBAL: Animaciones al hacer Scroll (Intersection Observer)
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
  }, [lang]);

  return (
    <main id="top" className="relative bg-[#070708] min-h-screen text-[#F5F5F7] overflow-x-hidden">
      
      {/* --- ESTILOS GLOBALES DE ANIMACIÓN CSS --- */}
      <style>{`
        .hero-slide-up { display: inline-block; transform: translateY(115%); opacity: 0; transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease; }
        .hero-slide-up.ready { transform: translateY(0%); opacity: 1; }
        .scroll-reveal { display: inline-block; transform: translateY(105%); opacity: 0; transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease; }
        .scroll-reveal.in-view { transform: translateY(0%); opacity: 1; }
        .scroll-card { opacity: 0; transform: translateY(40px); transition: opacity 0.9s ease-out, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
        .scroll-card.in-view { opacity: 1; transform: translateY(0px); }
        .draw-border { position: relative; }
        .draw-border::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: rgba(255, 255, 255, 0.14); transform: scaleX(0); transform-origin: left center; transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s; }
        .draw-border.in-view::after { transform: scaleX(1); }
        .card-zoom-img { transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease !important; }
        .group:hover .card-zoom-img { transform: scale(1.045) !important; }
        .magnetic-arrow { transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, color 0.25s ease; }
        .group:hover .magnetic-arrow { transform: translate(4px, -4px) scale(1.08); }
        .svg-draw-live { stroke-dasharray: 1400; stroke-dashoffset: 1400; animation: drawVectorLive 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes drawVectorLive { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* --- EFECTOS GLOBALES DE FONDO --- */}
      
      {/* Capa de Brillo/Tinte Global (Se enciende al hacer hover en los proyectos) */}
      <div 
        className="fixed inset-0 pointer-events-none transition-colors duration-1000 ease-out z-[5] mix-blend-screen"
        style={{ backgroundColor: hoveredColor || 'transparent' }}
      />

      {/* Linterna de Cuadrícula (Spotlight Grid que sigue al ratón) */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 245, 247, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 245, 247, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          WebkitMaskImage: `radial-gradient(circle 400px at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 400px at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 100%)`,
        }}
      />

      {/* --- ENSAMBLAJE DE SECCIONES (LA MAGIA) --- */}
      <div className="relative z-10">
        
        {/* Sección 0: Portada / Banner */}
        <HeroSection lang={lang} />
        
        {/* Sección 1: Proyectos de Desarrollo */}
        <FeaturedProjects 
          lang={lang} 
          hoveredColor={hoveredColor} 
          setHoveredColor={setHoveredColor} 
        />
        
        {/* Sección 2: Diagrama 360º Híbrido */}
        <HybridProfile lang={lang} />

        {/* Sección 3: Arquitectura de Marca (Luarcacom) */}
        <BrandArchitecture />

        {/* Sección 4: Archivo de Bellas Artes */}
        <FineArtsArchive lang={lang} />

      </div>

    </main>
  );
}