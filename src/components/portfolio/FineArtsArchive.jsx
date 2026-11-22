import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import ScrambleText from './ScrambleText';
import { TRANSLATIONS, FINE_ART_PLATES, EXHIBITIONS_DATA } from '../../data/portfolioData';

// --- MODAL PARA OBRAS DE ARTE (Responsive móvil con info arriba + Split-Screen en escritorio) ---
function ArtModal({ art, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!art) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxImg((prev) => {
          if (prev) return null;
          onCloseRef.current();
          return null;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    setShowProcess(false);
    setLightboxImg(null);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [art?.id]);

  if (!art || !mounted) return null;

  return createPortal(
    <>
      {/* LIGHTBOX */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100000000] bg-[#070708]/95 backdrop-blur-2xl flex items-center justify-center cursor-zoom-out opacity-100 transition-opacity duration-300"
          onClick={() => setLightboxImg(null)}
        >
          <div className="absolute top-5 right-5 md:top-8 md:right-8 z-50">
            <button
              type="button"
              className="px-4 py-2 font-mono-tech text-[9px] tracking-[0.2em] uppercase text-[#F5F5F7] bg-[#070708]/80 border border-white/20 hover:bg-[#F5F5F7] hover:text-[#070708] transition-colors cursor-pointer"
            >
              CERRAR [ESC]
            </button>
          </div>
          <img
            src={lightboxImg}
            alt="Vista en detalle"
            className="max-w-[95vw] max-h-[90dvh] object-contain shadow-2xl transform scale-100 transition-transform duration-300"
          />
        </div>
      )}

      {/* MODAL PRINCIPAL (Scroll único en móvil, Split-Screen en escritorio) */}
      <div
        className="fixed inset-0 z-[9999999] bg-[#070708] w-screen h-[100dvh] overflow-y-auto md:overflow-hidden overscroll-contain hide-scrollbar"
        data-lenis-prevent="true"
      >
        {/* BOTÓN CERRAR FIJO SIEMPRE ARRIBA A LA DERECHA */}
        <div className="fixed top-5 right-5 md:top-8 md:right-8 z-[10000000]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 font-mono-tech text-[9px] tracking-[0.2em] uppercase text-[#F5F5F7] bg-[#070708]/85 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border border-white/20 hover:bg-[#F5F5F7] hover:text-[#070708] transition-colors cursor-pointer"
          >
            CERRAR [ESC]
          </button>
        </div>

        <div className="flex flex-col md:flex-row w-full min-h-full md:h-full">
          {/* PANEL DE INFORMACIÓN (Arriba en móvil, Derecha en escritorio) */}
          <div className="order-1 md:order-2 w-full md:w-[35%] h-auto md:h-full flex flex-col border-b md:border-b-0 md:border-l border-white/10 bg-[#070708] shrink-0">
            <div className="flex-1 flex flex-col justify-center px-6 pt-20 pb-10 md:p-16">
              <div className="mb-4 flex justify-between font-mono-tech text-[9px] uppercase tracking-[0.2em] text-[#52525B]">
                <span>{art.plateNumber}</span>
                <span>{art.year}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-[-0.02em] text-[#F5F5F7] mb-6 md:mb-8 leading-tight break-words">
                {art.title}
              </h3>
              <div className="flex flex-col gap-3 md:gap-4 font-mono-tech text-[9px] uppercase tracking-[0.16em] text-[#8A8A93] mb-8 md:mb-10 pb-8 md:pb-10 border-b border-white/10">
                <div className="flex">
                  <span className="w-24 text-[#52525B] shrink-0">TÉCNICA:</span>
                  <span className="text-[#F5F5F7] flex-1">{art.medium}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-[#52525B] shrink-0">FORMATO:</span>
                  <span className="text-[#F5F5F7] flex-1">{art.dimensions}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-[#52525B] shrink-0">EDICIÓN:</span>
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

          {/* GALERÍA DE LA OBRA (Abajo en móvil, Izquierda con scroll propio en escritorio) */}
          <div
            className="order-2 md:order-1 w-full md:w-[65%] h-auto md:h-full md:overflow-y-auto hide-scrollbar px-5 py-10 pb-20 md:px-16 md:py-32 flex flex-col items-center justify-start gap-8 md:gap-16"
            data-lenis-prevent="true"
          >
            {/* IMAGEN PRINCIPAL */}
            <div className="w-full max-w-5xl bg-black p-2 sm:p-3 border border-white/5 shadow-2xl flex items-center justify-center">
              <img
                src={art.image}
                alt={art.title}
                onClick={() => setLightboxImg(art.image)}
                className="w-full object-contain mx-auto cursor-zoom-in hover:scale-[1.01] transition-transform duration-500 max-h-[70vh] md:max-h-[85vh]"
              />
            </div>

            {/* IMÁGENES SECUNDARIAS */}
            {art.gallery &&
              art.gallery.map((imgSrc, index) => (
                <div
                  key={index}
                  className="w-full max-w-5xl bg-black p-2 sm:p-3 border border-white/5 shadow-2xl flex items-center justify-center"
                >
                  <img
                    src={imgSrc}
                    alt={`${art.title} detalle ${index + 1}`}
                    onClick={() => setLightboxImg(imgSrc)}
                    className="w-full object-contain mx-auto cursor-zoom-in hover:scale-[1.01] transition-transform duration-500 max-h-[70vh] md:max-h-[85vh]"
                  />
                </div>
              ))}

            {/* PROCESO */}
            {art.processGallery && art.processGallery.length > 0 && (
              <div className="w-full max-w-5xl mt-4 md:mt-12 border-t border-white/10 pt-8 md:pt-12">
                {!showProcess ? (
                  <button
                    type="button"
                    onClick={() => setShowProcess(true)}
                    className="w-full py-5 md:py-6 flex items-center justify-center gap-3 bg-[#0F0F11] border border-white/10 text-[#8A8A93] font-mono-tech text-[10px] tracking-[0.2em] uppercase hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span>Ver proceso completo ({art.processGallery.length} imágenes)</span>
                    <span className="text-[#F5F5F7]">+</span>
                  </button>
                ) : (
                  <div className="bg-[#0F0F11] border border-white/10 p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-white/5 pb-4">
                      <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#F5F5F7] uppercase">
                        Proceso de desarrollo
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowProcess(false)}
                        className="text-[#8A8A93] font-mono hover:text-white cursor-pointer text-xs bg-transparent border-0"
                      >
                        Ocultar ×
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {art.processGallery.map((imgSrc, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-black border border-white/5 overflow-hidden"
                        >
                          <img
                            src={imgSrc}
                            alt={`Proceso ${index + 1}`}
                            onClick={() => setLightboxImg(imgSrc)}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-zoom-in"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>,
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