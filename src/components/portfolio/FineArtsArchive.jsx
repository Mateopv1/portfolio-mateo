import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ScrambleText from './ScrambleText';
import { TRANSLATIONS, FINE_ART_PLATES, EXHIBITIONS_DATA } from '../../data/portfolioData';

// --- MODAL PARA OBRAS DE ARTE (Diseño Split-Screen con Portal y Márgenes Ajustados) ---
function ArtModal({ art, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    if (art) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }
  }, [art, onClose]);

  if (!art || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999999] flex flex-col md:flex-row bg-[#070708] w-screen h-screen overflow-hidden">
      
      {/* LADO IZQUIERDO: GALERÍA DE LA OBRA (Con padding generoso y justify-start para que no se pegue arriba) */}
      {/* ¡AQUÍ AÑADIMOS data-lenis-prevent="true" PARA ARREGLAR EL SCROLL! */}
      <div 
        className="w-full md:w-[65%] h-full overflow-y-auto hide-scrollbar px-6 py-20 md:px-16 md:py-32 flex flex-col items-center justify-start gap-16 relative z-[99998]"
        data-lenis-prevent="true"
      >
        
        {/* Imagen principal con el marco oscuro sutil */}
        <div className="w-full max-w-5xl bg-black p-3 border border-white/5 shadow-2xl">
          <img 
            src={art.image} 
            alt={art.title} 
            className="w-full h-auto max-h-[85vh] object-contain mx-auto" 
          />
        </div>

        {/* Imágenes secundarias (si hay galería) */}
        {art.gallery && art.gallery.map((imgSrc, index) => (
          <div key={index} className="w-full max-w-5xl bg-black p-3 border border-white/5 shadow-2xl">
            <img 
              src={imgSrc} 
              alt={`${art.title} detalle ${index + 1}`} 
              className="w-full h-auto max-h-[85vh] object-contain mx-auto" 
            />
          </div>
        ))}
      </div>
      
      {/* LADO DERECHO: PANEL DE INFORMACIÓN (Fijo) */}
      <div className="w-full md:w-[35%] h-full flex flex-col border-t md:border-t-0 md:border-l border-white/10 bg-[#070708] relative z-[99998]">
        
       {/* BOTÓN CERRAR: Integrado arriba a la derecha */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-50">
          <button 
            type="button" 
            onClick={onClose}
            className="px-4 py-2 font-mono-tech text-[9px] tracking-[0.2em] uppercase text-[#F5F5F7] bg-[#070708]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/20 hover:bg-[#F5F5F7] hover:text-[#070708] transition-colors cursor-pointer"
          >
            CERRAR [ESC]
          </button>
        </div>

        {/* CONTENIDO TEXTUAL: Centrado verticalmente como en tu diseño */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 mt-12 md:mt-0">
          
          <div className="mb-4 flex justify-between font-mono-tech text-[9px] uppercase tracking-[0.2em] text-[#52525B]">
            <span>{art.plateNumber}</span>
            <span>{art.year}</span>
          </div>
          
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-[-0.02em] text-[#F5F5F7] mb-8 leading-tight">
            {art.title}
          </h3>
          
          <div className="flex flex-col gap-4 font-mono-tech text-[9px] uppercase tracking-[0.16em] text-[#8A8A93] mb-10 pb-10 border-b border-white/10">
            <div className="flex">
              <span className="w-24 text-[#52525B]">TÉCNICA:</span> 
              <span className="text-[#F5F5F7] flex-1">{art.medium}</span>
            </div>
            <div className="flex">
              <span className="w-24 text-[#52525B]">FORMATO:</span> 
              <span className="text-[#F5F5F7] flex-1">{art.dimensions}</span>
            </div>
            <div className="flex">
              <span className="w-24 text-[#52525B]">EDICIÓN:</span> 
              <span className="text-[#F5F5F7] flex-1">{art.edition}</span>
            </div>
          </div>

          {art.description && (
            <p className="text-xs md:text-sm font-light leading-relaxed text-[#8A8A93]">
              {art.description}
            </p>
          )}
          
        </div>
      </div>

    </div>,
    document.body
  );
}

// --- SECCIÓN PRINCIPAL EXPORTADA ---
export default function FineArtsArchive({ lang = 'es' }) {
  const t = TRANSLATIONS[lang];
  const currentExhibitions = EXHIBITIONS_DATA[lang];
  const [selectedArt, setSelectedArt] = useState(null); 

  return (
    <section id="archive" className="scroll-mt-20 relative z-10">
      <div className="mx-auto max-w-[1720px] px-5 py-24 md:px-10 md:py-32 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-8 draw-border pb-8 md:flex-row md:items-end lg:mb-24">
          <div>
            <p className="mb-5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93]">{t.sec03Tag}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5vw] xl:text-[5vw] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[#F5F5F7]">
              <span className="block transition-all duration-1000 transform translate-y-0 opacity-100">{t.sec03Title1}</span>
              <span className="block transition-all duration-1000 transform translate-y-0 opacity-100">{t.sec03Title2}</span>
            </h2>
          </div>
          <p className="max-w-sm font-mono-tech text-[10px] uppercase leading-5 tracking-[0.16em] text-[#8A8A93]">
            {t.sec03Desc}
          </p>
        </div>

        <div className="art-grid">
          {FINE_ART_PLATES.map((plate, index) => (
            <article key={plate.id} className={`group scroll-card ${index % 2 === 1 ? "art-offset" : ""}`}>
              <button type="button" onClick={() => setSelectedArt(plate)} className="block w-full cursor-zoom-in text-left bg-transparent border-0 p-0 text-inherit">
                <div className="plate-frame plate-art">
                  <img src={plate.image} alt={plate.title} className="card-zoom-img grayscale group-hover:grayscale-0" />
                </div>
                <div className="draw-border py-5">
                  <div className="mb-3 flex justify-between font-mono-tech text-[9px] uppercase tracking-[0.15em] text-[#52525B]">
                    <span><ScrambleText text={plate.plateNumber} /></span>
                    <span>{plate.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-[-0.02em] text-[#F5F5F7] group-hover:text-white transition-colors">{plate.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#8A8A93]">{plate.medium}</p>
                  <div className="mt-4 flex justify-between font-mono-tech text-[9px] uppercase tracking-[0.12em] text-[#52525B]">
                    <span>{plate.dimensions}</span>
                    <span>{plate.edition}</span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-28 lg:mt-36">
          <div className="grid grid-cols-1 gap-8 hairline-t pt-8 lg:grid-cols-12">
            <h3 className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#8A8A93] lg:col-span-3">
              {t.exhibitionsTitle}
            </h3>
            <div className="lg:col-span-9">
              {currentExhibitions.map((item) => (
                <div key={`${item.year}-${item.event}`} className="grid grid-cols-12 gap-3 draw-border py-5 text-sm transition-colors hover:bg-white/[0.02] items-center">
                  <span className="col-span-2 font-mono-tech text-[10px] text-[#52525B]">{item.year}</span>
                  <span className="col-span-10 sm:col-span-5 text-[#D4D4D8] font-medium">{item.event}</span>
                  <span className="col-span-8 sm:col-span-4 text-xs text-[#8A8A93]">{item.role}</span>
                  <span className="col-span-4 sm:col-span-1 text-right font-mono-tech text-[9px] tracking-[0.12em] text-[#52525B]">
                    {item.city}
                  </span>
                </div>
              ))}
            </div>
          </div>
      </div>
      </div> 

      <ArtModal art={selectedArt} onClose={() => setSelectedArt(null)} />
    </section>
  );
}