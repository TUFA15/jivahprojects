import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    stage: '01 / RAW SHELL',
    title: 'THE INITIAL VOLUME',
    subtitle: 'Raw spatial concrete shell prior to interior spatial layout planning.',
    image: '/images/interiors/IMG_20250105_113619.jpg',
    caption: 'Phase 1 — Initial spatial audit & natural light orientation mapping.',
  },
  {
    id: 'stage-2',
    stage: '02 / MATERIAL DEVELOPMENT',
    title: 'TACTILE FRAMEWORK',
    subtitle: 'Honed travertine floor installation & bespoke smoked oak millwork framing.',
    image: '/images/interiors/IMG_20250118_125501 - Copy.jpg',
    caption: 'Phase 2 — Materiality pairing, acoustic wall paneling & cove lighting troughs.',
  },
  {
    id: 'stage-3',
    stage: '03 / LIVING SANCTUARY',
    title: 'FINISHED INTERIOR',
    subtitle: 'Complete residence featuring low bouclé seating, warm linen drapes, and indirect evening glow.',
    image: '/images/interiors/IMG_20250118_125129.jpg',
    caption: 'Phase 3 — Finished living pavilion facing the Hadapsar Pune garden balcony.',
  },
  {
    id: 'stage-4',
    stage: '04 / DETAILED ATMOSPHERE',
    title: 'TACTILE CRAFT DETAILS',
    subtitle: 'Bespoke marble island, hand-patinated bronze fixtures, and soft mood lighting.',
    image: '/images/interiors/IMG_20250313_131420.jpg',
    caption: 'Phase 4 — Bespoke furniture curation & interior styling details.',
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

  // Automatic Rotation every 3.5 seconds (paused on hover or reduced motion)
  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TRANSFORMATION_SLIDES.length);
    }, 3500);

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
              className="p-2 border border-[#2F7B93]/20 hover:border-[#2F7B93] text-[#11181C] hover:text-[#2F7B93] transition-colors focus:outline-none"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-2 border border-[#2F7B93]/20 hover:border-[#2F7B93] text-[#11181C] hover:text-[#2F7B93] transition-colors focus:outline-none"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Main Showcase Viewer */}
      <div
        className="relative overflow-hidden bg-[#16465A] aspect-[16/9] md:aspect-[21/9] border border-[#2F7B93]/20 shadow-xl group cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide.id}
            src={currentSlide.image}
            alt={`${currentSlide.title} - ${currentSlide.subtitle}`}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 1.1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlay for Editorial Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/85 via-[#16465A]/20 to-transparent pointer-events-none" />

        {/* Top Overlay Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase px-3 py-1.5 bg-[#16465A]/90 text-[#8FD3DC] backdrop-blur-md border border-[#2F7B93]/40">
            {currentSlide.stage}
          </span>
        </div>

        {/* Pause Indicator on Hover */}
        {isPaused && !prefersReducedMotion && (
          <div className="absolute top-6 right-6 z-10 hidden md:block">
            <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 bg-black/50 text-[#8FD3DC] backdrop-blur-xs">
              PAUSED ON HOVER
            </span>
          </div>
        )}

        {/* Bottom Slide Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6 z-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
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
                className={`flex items-center gap-2 group focus:outline-none transition-all duration-300 ${
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
          AUTOMATIC ROTATION EVERY 3.5S
        </span>
      </div>
    </div>
  );
};
