import React, { useState, useEffect, useRef } from 'react';
import ScrambleText from './ScrambleText';
import { TRANSLATIONS } from '../../data/portfolioData';

export default function HeroSection({ lang = 'es' }) {
  const t = TRANSLATIONS[lang];
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Referencias para efectos Parallax y Magnético (sin re-renders)
  const sectionRef = useRef(null);
  const parallaxTextRef = useRef(null);
  const scrollBtnRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 800);
    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // --- 1. EFECTO PARALLAX SUTIL EN EL TEXTO SUPERIOR (0 RE-RENDERS) ---
  const handleMouseMove = (e) => {
    if (!parallaxTextRef.current || window.innerWidth < 1024) return;
    const { clientX, clientY } = e;

    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const x = (clientX / window.innerWidth - 0.5) * -20;
      const y = (clientY / window.innerHeight - 0.5) * -20;
      if (parallaxTextRef.current) {
        parallaxTextRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      rafRef.current = null;
    });
  };

  // --- 2. BOTÓN DE SCROLL MAGNÉTICO ---
  const handleScrollBtnMove = (e) => {
    e.stopPropagation();
    if (!scrollBtnRef.current) return;
    const rect = scrollBtnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    scrollBtnRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleScrollBtnLeave = () => {
    if (!scrollBtnRef.current) return;
    scrollBtnRef.current.style.transform = `translate3d(0px, 0px, 0)`;
  };

  const marquee1Text = Array(8).fill(t.heroMarquee1).join('\u00A0\u00A0\u00A0');
  const marquee2Text = Array(8).fill(t.heroMarquee2).join('\u00A0\u00A0\u00A0');

  return (
    <div
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#070708]"
      onMouseMove={handleMouseMove}
    >
      {/* ESTILOS DE ANIMACIÓN SUTIL DEL DEGRADADO LATERAL IZQUIERDO */}
      <style>{`
        @keyframes heroLeftGlow {
          0% {
            opacity: 0.78;
            transform: translate3d(-2%, 0, 0);
          }
          50% {
            opacity: 1;
            transform: translate3d(2%, 0, 0);
          }
          100% {
            opacity: 0.78;
            transform: translate3d(-2%, 0, 0);
          }
        }
        .hero-left-glow {
          animation: heroLeftGlow 14s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-left-glow {
            animation: none;
          }
        }
      `}</style>

      {/* DEGRADADO LINEAL ÚNICO EN EL LADO IZQUIERDO (#FFA433 + #FD7B34) */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <div
          className="hero-left-glow absolute -inset-x-[4%] inset-y-0 will-change-[transform,opacity]"
          style={{
            backgroundImage:
              'linear-gradient(105deg, rgba(255, 164, 51, 0.38) 0%, rgba(253, 123, 52, 0.18) 26%, transparent 62%)',
          }}
        />
      </div>

      <section
        ref={sectionRef}
        className="relative mx-auto flex min-h-[100svh] max-w-[1720px] flex-col justify-between px-mobile-safe pb-8 pt-[16vh] md:pb-10 md:pt-[22vh] z-10"
      >
        {/* TEXTOS SUPERIORES CON PARALLAX MOUSE */}
        <div
          ref={parallaxTextRef}
          className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 relative z-10 transition-transform duration-700 ease-out will-change-transform"
        >
          <div className="lg:col-span-6">
            <p className="font-mono-tech text-[10px] uppercase leading-5 tracking-[0.18em] text-[#bfbfcd] whitespace-pre-line w-full md:max-w-[38rem] border-l border-white/20 pl-4">
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
        <div
          className="my-auto py-12 sm:py-20 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden z-10 flex flex-col gap-16 md:gap-20"
          style={{ contain: 'layout paint' }}
        >
          {/* TRACK IZQUIERDA */}
          <div
            className={`transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="track-left hover:scale-[1.02] transition-transform duration-500 cursor-default">
              <h1 className="font-display font-extrabold uppercase text-[#F5F5F7] marquee-typography">
                {marquee1Text}
              </h1>
            </div>
          </div>

          {/* TRACK DERECHA */}
          <div
            className={`transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="track-right hover:scale-[1.02] transition-transform duration-500 cursor-default">
              <h1 className="font-display font-extrabold uppercase text-[#52525B] marquee-typography">
                {marquee2Text}
              </h1>
            </div>
          </div>
        </div>

        {/* FOOTER DEL HERO */}
        <div className="grid grid-cols-2 items-end gap-5 hairline-t pt-5 md:grid-cols-12 w-full relative z-10">
          <p className="font-mono-tech text-[9px] uppercase leading-4 tracking-[0.16em] text-[#bfbfcd] md:col-span-3 md:text-[10px] whitespace-pre-line">
            {t.selectedPortfolio}
          </p>
          <p className="hidden font-mono-tech text-[10px] uppercase tracking-[0.16em] text-[#8f8f9e] md:col-span-5 md:block">
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