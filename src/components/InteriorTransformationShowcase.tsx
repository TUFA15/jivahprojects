import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OptimizedImage } from './OptimizedImage';

export interface TransformationSlide {
  id: string;
  stage: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
}

const TRANSFORMATION_SLIDES: TransformationSlide[] = [
  {
    id: 'stage-1',
    stage: '01 / SPATIAL VOLUME',
    title: 'CONTEMPORARY LIVING LOUNGE',
    subtitle: 'Fluted architectural ceiling raft, custom sofa alcove, and backlit marble pooja sanctuary.',
    image: '/images/interiors/IMG_20250105_112813 - Copy.jpg',
    caption: 'Phase 1 — Spatial layout planning & customized multi-zone living design.',
  },
  {
    id: 'stage-2',
    stage: '02 / MATERIAL DEVELOPMENT',
    title: 'MEDIA WALL & CURATED DISPLAY',
    subtitle: 'Full-height marble television panel, illuminated glass curio towers, and open modular kitchen transition.',
    image: '/images/interiors/IMG_20250118_125532 - Copy.jpg',
    caption: 'Phase 2 — Architectural wall panelling, ambient cove troughs & bespoke cabinetry.',
  },
  {
    id: 'stage-3',
    stage: '03 / LIVING SANCTUARY',
    title: 'CHEVRON WOOD ARCHITECTURE',
    subtitle: 'Full-height chevron oak feature wall with vertical light channels, bar credenza, and tinted glass cabinetry.',
    image: '/images/interiors/IMG_20250313_133637.jpg',
    caption: 'Phase 3 — Finished living sanctuary with bespoke timber joinery & ambient mood lighting.',
  },
  {
    id: 'stage-4',
    stage: '04 / DETAILED ATMOSPHERE',
    title: 'MASTER BEDROOM SANCTUARY',
    subtitle: 'Textured marble-finish sliding wardrobes with warm vertical profile illumination and cove ceiling lighting.',
    image: '/images/interiors/IMG_20250313_131743.jpg',
    caption: 'Phase 4 — Private sanctuary bedroom styling & integrated architectural lighting.',
  },
];

export const InteriorTransformationShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Progressive Preload Next Slide Image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % TRANSFORMATION_SLIDES.length;
    const nextSlideImg = TRANSFORMATION_SLIDES[nextIndex].image;
    const img = new Image();
    img.src = nextSlideImg;
  }, [currentIndex]);

  // Automatic Rotation every 4 seconds (paused on hover or reduced motion)
  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TRANSFORMATION_SLIDES.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, prefersReducedMotion]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TRANSFORMATION_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TRANSFORMATION_SLIDES.length) % TRANSFORMATION_SLIDES.length);
  };

  const currentSlide = TRANSFORMATION_SLIDES[currentIndex];

  return (
    <div className="space-y-8">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
            [ INTERIOR TRANSFORMATION STORY ]
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase text-[#11181C] tracking-tight leading-[1.05]">
            RAW SHELL TO LIVING SANCTUARY
          </h2>
          <p className="text-sm font-light text-[#61747C]">
            A continuous visual journey tracing the evolution from bare volume to warm, tactile interior sanctuary.
          </p>
        </div>

        {/* Editorial Minimal Controls */}
        <div className="flex items-center gap-6 text-xs font-mono shrink-0">
          <span className="text-[#11181C] font-medium tracking-widest">
            0{currentIndex + 1} / 0{TRANSFORMATION_SLIDES.length}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-2 border border-[#2F7B93]/20 hover:border-[#2F7B93] text-[#11181C] hover:text-[#2F7B93] transition-colors focus:outline-none cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-2 border border-[#2F7B93]/20 hover:border-[#2F7B93] text-[#11181C] hover:text-[#2F7B93] transition-colors focus:outline-none cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Main Showcase Viewer */}
      <div
        className="relative overflow-hidden bg-[#16465A] aspect-[16/10] sm:aspect-[16/9] border border-[#2F7B93]/20 shadow-xl group cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="w-full h-full"
          >
            <OptimizedImage
              src={currentSlide.image}
              alt={`${currentSlide.title} - ${currentSlide.subtitle}`}
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1600px"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay for Editorial Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/85 via-[#16465A]/20 to-transparent pointer-events-none z-10" />

        {/* Top Overlay Badge */}
        <div className="absolute top-6 left-6 z-20">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase px-3 py-1.5 bg-[#16465A]/90 text-[#8FD3DC] backdrop-blur-md border border-[#2F7B93]/40">
            {currentSlide.stage}
          </span>
        </div>

        {/* Pause Indicator on Hover */}
        {isPaused && !prefersReducedMotion && (
          <div className="absolute top-6 right-6 z-20 hidden md:block">
            <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 bg-black/50 text-[#8FD3DC] backdrop-blur-xs">
              PAUSED ON HOVER
            </span>
          </div>
        )}

        {/* Bottom Slide Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6 z-20 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-wide text-white">
              {currentSlide.title}
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#8FD3DC]/90 leading-relaxed">
              {currentSlide.subtitle}
            </p>
          </div>

          <p className="text-[10px] font-mono text-[#8FD3DC]/70 tracking-wider uppercase">
            {currentSlide.caption}
          </p>
        </div>
      </div>

      {/* Slide Selection Indicators (Clickable) */}
      <div className="flex items-center justify-between border-t border-[#2F7B93]/15 pt-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          {TRANSFORMATION_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-2 group focus:outline-none transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-[#2F7B93]' : 'text-[#61747C] hover:text-[#11181C]'
                }`}
                aria-label={`Jump to ${slide.stage}`}
              >
                <span className={`w-8 h-[2px] transition-all duration-500 ${
                  isActive ? 'bg-[#2F7B93]' : 'bg-[#2F7B93]/20 group-hover:bg-[#2F7B93]/50'
                }`} />
                <span className="text-[10px] hidden sm:inline tracking-wider uppercase">
                  {slide.stage.split('/')[1] || slide.stage}
                </span>
              </button>
            );
          })}
        </div>

        <span className="text-[10px] text-[#61747C] tracking-widest uppercase hidden md:inline">
          AUTOMATIC ROTATION
        </span>
      </div>
    </div>
  );
};
