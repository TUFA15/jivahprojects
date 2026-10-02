import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, ALL_PORTFOLIO_IMAGES, PortfolioImageItem } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { OptimizedImage } from '../components/OptimizedImage';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA } from '../data/schemas';

type CategoryFilter = 'ALL' | 'Residential' | 'Commercial' | 'Hospitality';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');
  const [selectedImage, setSelectedImage] = useState<PortfolioImageItem | null>(null);

  // Filter Case Study Projects
  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  // Filter Individual Portfolio Images
  const filteredImages =
    activeFilter === 'ALL'
      ? ALL_PORTFOLIO_IMAGES
      : ALL_PORTFOLIO_IMAGES.filter((img) => img.category === activeFilter);

  const categories: CategoryFilter[] = ['ALL', 'Hospitality', 'Commercial', 'Residential'];

  // Lightbox Navigation
  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <PageTransition>
      <SEO
        title="Interior Design Projects & Gallery in Pune | JIVAH Projects"
        description="Explore JIVAH Projects' portfolio of residential interiors, commercial office spaces, and luxury hospitality venues in Hadapsar, Pune. Featuring all 33 curated interior photos."
        canonicalUrl="https://jivahprojects.com/work"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA]}
      />

      <div className="pt-36 pb-24 bg-[#F7F3EC] text-[#11181C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          
          {/* Page Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
              <span className="w-8 h-[1px] bg-[#2F7B93]" />
              <span>INTERIOR PORTFOLIO & ARCHIVE</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight leading-[0.92]">
              OUR INTERIOR DESIGN PROJECTS
            </h1>

            <p className="text-lg sm:text-xl font-light text-[#61747C] leading-relaxed max-w-2xl pt-2">
              Discover JIVAH Projects' complete interior portfolio spanning bespoke residential homes, corporate workspaces, and luxury hospitality venues in Pune and Hadapsar.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-b border-[#2F7B93]/15 pb-6">
              <span className="text-[10px] tracking-[0.25em] font-mono text-[#61747C] uppercase mr-3">
                FILTER CATEGORY:
              </span>
              {categories.map((cat) => {
                const isActive = activeFilter === cat;
                const count =
                  cat === 'ALL'
                    ? ALL_PORTFOLIO_IMAGES.length
                    : ALL_PORTFOLIO_IMAGES.filter((i) => i.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`text-xs tracking-[0.2em] font-medium uppercase px-5 py-2.5 transition-all duration-300 focus:outline-none rounded-xl flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#16465A] text-white shadow-md'
                        : 'bg-white border border-[#2F7B93]/20 text-[#61747C] hover:text-[#11181C] hover:bg-[#2F7B93]/10'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? 'bg-[#2F7B93] text-white' : 'bg-[#EDE5D9] text-[#61747C]'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 1: Case Studies Grid */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#2F7B93]/15 pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93] block">
                  [ DESIGN CASE STUDIES ]
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-tight text-[#11181C]">
                  {activeFilter === 'ALL' ? 'Featured Case Studies' : `${activeFilter} Case Studies`}
                </h2>
              </div>
              <span className="text-xs font-mono text-[#61747C] mt-2 sm:mt-0">
                {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? 'S' : ''} FOUND
              </span>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              <AnimatePresence>
                {filteredProjects.map((project, index) => {
                  const aspectRatios: ('landscape' | 'portrait' | 'tall' | 'wide' | 'square')[] = [
                    'landscape',
                    'tall',
                    'portrait',
                    'wide',
                    'landscape',
                    'tall',
                  ];

                  const spanClasses = [
                    'md:col-span-8',
                    'md:col-span-4',
                    'md:col-span-5',
                    'md:col-span-7',
                    'md:col-span-6',
                    'md:col-span-6',
                  ];

                  const aspect = aspectRatios[index % aspectRatios.length];
                  const spanClass = spanClasses[index % spanClasses.length];

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className={spanClass}
                    >
                      <ProjectCard project={project} aspectRatio={aspect} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Section 2: Full Photography Gallery (Hospitality: 6 Banqueat, Commercial: 3 Offices, Residential: 24 Interiors) */}
          <div className="space-y-10 pt-10 border-t border-[#2F7B93]/20">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                <span className="w-6 h-[1px] bg-[#2F7B93]" />
                <span>COMPLETE INTERIOR PHOTOGRAPHY ARCHIVE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight text-[#11181C]">
                {activeFilter === 'ALL'
                  ? 'FULL PHOTOGRAPHY GALLERY (ALL 33 IMAGES)'
                  : `${activeFilter.toUpperCase()} PHOTOGRAPHY GALLERY (${filteredImages.length} IMAGES)`}
              </h2>
              <p className="text-sm font-light text-[#61747C] max-w-2xl">
                {activeFilter === 'Hospitality' && 'Displaying all 6 high-resolution banquet hall photography images from Hadapsar, Pune.'}
                {activeFilter === 'Commercial' && 'Displaying all 3 high-resolution corporate office workspace images from Hadapsar, Pune.'}
                {activeFilter === 'Residential' && 'Displaying all 24 high-resolution residential home interior photos from Pune.'}
                {activeFilter === 'ALL' && 'Browse all 33 client interior photographs across Hospitality (6), Commercial (3), and Residential (24). Click any image to view in high-definition lightbox.'}
              </p>
            </div>

            {/* Interactive Image Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence>
                {filteredImages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: (index % 12) * 0.04 }}
                    onClick={() => setSelectedImage(item)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#EEF5F6] border border-[#2F7B93]/15 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <OptimizedImage
                        src={item.url}
                        alt={item.alt}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Gradient Overlay & Hover Details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/90 via-[#16465A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                      <span className="text-[10px] font-mono tracking-widest text-[#8FD3DC] uppercase">
                        {item.category} · {item.location}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-white uppercase mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-light text-white/80 line-clamp-2 mt-1">
                        {item.caption}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#8FD3DC] uppercase">
                        <span>CLICK TO EXPAND</span>
                        <span>→</span>
                      </div>
                    </div>

                    {/* Category Tag Badge */}
                    <div className="absolute top-4 left-4 bg-[#16465A]/80 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/20">
                      {item.category}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl font-mono p-2 transition-colors z-50 focus:outline-none"
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white text-3xl font-mono p-3 transition-colors z-50 focus:outline-none bg-black/40 hover:bg-black/80 rounded-full"
              aria-label="Previous Image"
            >
              ←
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white text-3xl font-mono p-3 transition-colors z-50 focus:outline-none bg-black/40 hover:bg-black/80 rounded-full"
              aria-label="Next Image"
            >
              →
            </button>

            {/* Modal Image Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#16465A] border border-[#2F7B93]/40 rounded-3xl overflow-hidden shadow-2xl text-white"
            >
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[500px]">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-3 bg-[#16465A] border-t border-[#2F7B93]/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#8FD3DC] uppercase px-3 py-1 bg-[#2F7B93]/30 rounded-full border border-[#8FD3DC]/30">
                      {selectedImage.category}
                    </span>
                    <span className="text-xs font-mono text-white/70">{selectedImage.location}</span>
                  </div>
                  <span className="text-xs font-mono text-[#8FD3DC]">
                    IMAGE {filteredImages.findIndex((i) => i.id === selectedImage.id) + 1} OF {filteredImages.length}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl uppercase text-white tracking-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-sm font-light text-white/85 leading-relaxed max-w-3xl">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
