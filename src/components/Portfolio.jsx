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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal:not(.in-view), .draw-border:not(.in-view), .scroll-card:not(.in-view)");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

  return (
    <main id="top" className="relative bg-[#070708] min-h-screen text-[#F5F5F7] overflow-x-hidden">
      <style>{`
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