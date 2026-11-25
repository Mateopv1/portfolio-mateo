import React, { useState, useEffect } from 'react';

const TECH_STACK = [
  {
    name: "REACT",
    category: "FRONT-END",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "ANGULAR",
    category: "FRONT-END",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2.5L3.5 5.6l1.3 11.2L12 21.5l7.2-4.7 1.3-11.2L12 2.5z" />
        <path d="M12 6.5L8.2 16h1.6l.8-2h2.8l.8 2h1.6L12 6.5zm-.9 6l.9-2.4.9 2.4h-1.8z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "ASTRO",
    category: "ARCHITECTURE",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="currentColor">
        <path d="M15.6 3.2L19 14.5c-1.8-.9-3.7-1.4-5.7-1.5L12 8.7l-1.3 4.3c-2 .1-3.9.6-5.7 1.5L8.4 3.2c.3-.8 1-1.2 1.8-1.2h3.6c.8 0 1.5.4 1.8 1.2zM9.2 16.4c.7.7 1.7 1.1 2.8 1.1 1.4 0 2.6-.6 3.3-1.6.4 1.3.1 3.1-1.5 4.4-.8.7-1.6 1.2-1.8 1.7-.3-.6-.9-1.1-1.6-1.6-1.3-.9-1.7-2.4-1.2-4z" />
      </svg>
    ),
  },
  {
    name: "JAVASCRIPT / TS",
    category: "LANGUAGE",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M10.5 11v5.2c0 1.1-.6 1.8-1.7 1.8-.8 0-1.4-.4-1.7-1M14 16.8c.4.7 1.1 1.2 2.1 1.2 1.1 0 1.9-.6 1.9-1.5 0-.9-.7-1.3-1.8-1.7-1.1-.4-1.8-.8-1.8-1.7 0-.9.8-1.5 1.8-1.5.9 0 1.5.4 1.8 1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "TAILWIND CSS",
    category: "UI SYSTEM",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
      </svg>
    ),
  },
  {
    name: "PYTHON / DJANGO",
    category: "BACK-END & AI",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M11.8 3C8.9 3 9 4.3 9 4.3V6h3.2v.6H7.4S5 6.3 5 9.5s2.1 3.1 2.1 3.1h1.2v-1.5s-.1-2.1 2.1-2.1h3.5s2 .03 2-1.9V4.9S16.2 3 11.8 3z" />
        <path d="M12.2 21c2.9 0 2.8-1.3 2.8-1.3V18h-3.2v-.6h4.8s2.4.3 2.4-2.9-2.1-3.1-2.1-3.1h-1.2v1.5s.1 2.1-2.1 2.1h-3.5s-2-.03-2 1.9v2.2S7.8 21 12.2 21z" />
        <circle cx="10.4" cy="4.6" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="13.6" cy="19.4" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "POSTGRESQL / DOCKER",
    category: "INFRA & DATA",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="6" rx="7.5" ry="3" />
        <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
        <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
      </svg>
    ),
  },
  {
    name: "GIT / GITHUB",
    category: "VERSION CONTROL",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.18-.02-2.14-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "FIGMA",
    category: "UX / UI DESIGN",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3h3v6H9a3 3 0 0 1 0-6z" />
        <path d="M12 3h3a3 3 0 0 1 0 6h-3V3z" />
        <path d="M12 9h3a3 3 0 0 1 0 6h-3V9z" />
        <path d="M9 9h3v6H9a3 3 0 0 1 0-6z" />
        <path d="M9 15h3v3a3 3 0 1 1-3-3z" />
      </svg>
    ),
  },
  {
    name: "ADOBE CC",
    category: "ART DIRECTION",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14.5 4H20v16L14.5 4zM9.5 4H4v16L9.5 4zM12 10.5L15.4 20h-2.3l-1-2.8H9.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "SEO / ANALYTICS",
    category: "GROWTH & DATA",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 19h16M7 16v-4M12 16V8M17 16V5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "JOOMLA / CMS",
    category: "WEB SYSTEMS",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M3.5 9h17M8.5 9v10.5" />
      </svg>
    ),
  },
];

export default function TechMarquee({ lang: propLang = 'es' }) {
  const [lang, setLang] = useState(propLang);

  useEffect(() => {
    setLang(propLang);
  }, [propLang]);

  useEffect(() => {
    const handleLangChange = (e) => {
      if (e.detail) setLang(e.detail);
    };
    window.addEventListener('changeLanguage', handleLangChange);
    return () => window.removeEventListener('changeLanguage', handleLangChange);
  }, []);

  const label = lang === 'en' ? 'CORE STACK & TOOLS' : 'STACK Y HERRAMIENTAS';

  return (
    <div
      aria-label={label}
      className="relative w-full border-y border-white/[0.08] bg-[#070708]/90 py-7 sm:py-8 overflow-hidden select-none z-10 group"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#070708] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#070708] to-transparent z-20" />

      <div className="flex w-max tech-marquee-track group-hover:[animation-play-state:paused]">
        {[0, 1].map((loopIndex) => (
          <div
            key={loopIndex}
            aria-hidden={loopIndex === 1}
            className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16"
          >
            {TECH_STACK.map((item) => (
              <div
                key={`${loopIndex}-${item.name}`}
                className="flex items-center gap-3.5 text-[#8A8A93] hover:text-[#F5F5F7] transition-colors duration-300"
              >
                <span className="text-[#8A8A93] group-hover:text-inherit transition-colors">
                  {item.svg}
                </span>
                <span className="font-mono-tech text-xs sm:text-[13px] tracking-[0.18em] uppercase whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-white/15 font-mono-tech text-xs ml-5 sm:ml-7">
                  /
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes techMarqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .tech-marquee-track {
          animation: techMarqueeScroll 58s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-marquee-track {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            gap: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}