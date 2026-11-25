import React, { useState, useEffect, useRef } from 'react';

import HeroSection from './portfolio/HeroSection';
import FeaturedProjects from './portfolio/FeaturedProjects';
import HybridProfile from './portfolio/HybridProfile';
import TechMarquee from './TechMarquee';
import BrandArchitecture from './portfolio/BrandArchitecture';
import FineArtsArchive from './portfolio/FineArtsArchive';

export default function Portfolio() {
  const [lang, setLang] = useState("es");
  const [hoveredColor, setHoveredColor] = useState(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleLanguageChange = (e) => {
      if (e.detail) setLang(e.detail);
    };
    window.addEventListener("changeLanguage", handleLanguageChange);
    return () => window.removeEventListener("changeLanguage", handleLanguageChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let rafId = null;
    let mouseX = -500;
    let mouseY = -500;

    const updateSpotlight = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
      }
      rafId = null;
    };

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updateSpotlight);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

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

        /* Cuadrícula de fondo: linterna en escritorio, visible automáticamente en móvil/tablet */
        .spotlight-grid {
          --mouse-x: -500px;
          --mouse-y: -500px;
          background-image:
            linear-gradient(rgba(245, 245, 247, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 245, 247, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          -webkit-mask-image: radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%);
          mask-image: radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%);
        }

        @media (hover: none), (pointer: coarse) {
          .spotlight-grid {
            -webkit-mask-image: radial-gradient(circle 85vw at 50% 45%, black 20%, transparent 100%);
            mask-image: radial-gradient(circle 85vw at 50% 45%, black 20%, transparent 100%);
          }
        }
      `}</style>

      <div
        ref={spotlightRef}
        className="spotlight-grid fixed inset-0 pointer-events-none z-[1]"
      />

      <div className="relative z-10">
        
        <HeroSection lang={lang} />
        
        <FeaturedProjects 
          lang={lang} 
          hoveredColor={hoveredColor} 
          setHoveredColor={setHoveredColor} 
        />
        
        <HybridProfile lang={lang} />

        <TechMarquee lang={lang} />

        <BrandArchitecture />

        <FineArtsArchive lang={lang} />

      </div>

    </main>
  );
}